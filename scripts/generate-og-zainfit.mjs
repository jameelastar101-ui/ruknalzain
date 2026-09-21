/**
 * Regenerates the 1200×630 Open Graph share card for /rubber-gym-tiles/zainfit.
 *
 *   node scripts/generate-og-zainfit.mjs
 *
 * Output: public/images/rubber-gym-tiles/zainfit-og.jpg
 *
 * Composited with sharp: charcoal brand field on the left (eyebrow, headline,
 * the signature amber "spec rule", a supporting line and the RZ lockup) and a
 * cover-cropped panel of the real product photo on the right, blended into the
 * field with a horizontal gradient. JPEG (not WebP) for the widest social
 * unfurler support. Headline type uses Segoe UI — the site's designated
 * system fallback for the Montserrat heading stack (see tailwind.config.mjs);
 * the variable Montserrat woff2 from @fontsource does not render through
 * librsvg/fontconfig here.
 */
import { statSync } from 'node:fs';
import sharp from 'sharp';

const W = 1200;
const H = 630;
const PANEL_W = 500;

const CHARCOAL = '#2A2D34';
const CHARCOAL_D = '#202228';
const AMBER = '#F8B03A';
const WHITE = '#FFFFFF';
const GRAY = '#C6C8CD';

const SRC = 'public/images/rubber-gym-tiles/zainfit-product-standalone.webp';
const OUT = 'public/images/rubber-gym-tiles/zainfit-og.jpg';

const overlay = Buffer.from(`
<svg xmlns='http://www.w3.org/2000/svg' width='${W}' height='${H}'>
  <defs>
    <linearGradient id='fade' x1='0' y1='0' x2='1' y2='0'>
      <stop offset='0' stop-color='${CHARCOAL}' stop-opacity='1'/>
      <stop offset='0.55' stop-color='${CHARCOAL}' stop-opacity='0.55'/>
      <stop offset='1' stop-color='${CHARCOAL}' stop-opacity='0'/>
    </linearGradient>
    <linearGradient id='vignette' x1='0' y1='0' x2='0' y2='1'>
      <stop offset='0' stop-color='#000' stop-opacity='0.20'/>
      <stop offset='0.5' stop-color='#000' stop-opacity='0'/>
      <stop offset='1' stop-color='#000' stop-opacity='0.28'/>
    </linearGradient>
  </defs>

  <rect x='${W - PANEL_W}' y='0' width='260' height='${H}' fill='url(#fade)'/>
  <rect x='0' y='0' width='${W}' height='${H}' fill='url(#vignette)'/>

  <text x='80' y='140' font-family='Segoe UI, sans-serif' font-weight='700'
        font-size='24' letter-spacing='3' fill='${AMBER}'>INTERLOCKING RUBBER GYM TILES</text>

  <text font-family='Segoe UI, sans-serif' font-weight='700' font-size='62'
        fill='${WHITE}' xml:space='preserve'>
    <tspan x='80' y='232'>ZainFit — Easy-Install</tspan>
    <tspan x='80' y='306'>Interlocking Rubber</tspan>
    <tspan x='80' y='380'>Gym Tiles</tspan>
  </text>

  <rect x='82' y='418' width='96' height='4' fill='${AMBER}'/>

  <text x='80' y='470' font-family='Segoe UI, sans-serif' font-weight='400'
        font-size='27' fill='${GRAY}'>Tool-free puzzle tiles &#183; High-density SBR rubber &#183; Dubai, UAE</text>

  <rect x='80' y='520' width='46' height='46' rx='6' fill='${AMBER}'/>
  <text x='103' y='552' text-anchor='middle' font-family='Segoe UI, sans-serif'
        font-weight='800' font-size='24' fill='${CHARCOAL}'>RZ</text>
  <text x='140' y='552' font-family='Segoe UI, sans-serif' font-weight='700'
        font-size='27' letter-spacing='2' fill='${WHITE}'>RUKN AL ZAIN</text>

  <rect x='0' y='${H - 6}' width='${W}' height='6' fill='${AMBER}'/>
</svg>`);

const panel = await sharp(SRC)
  .resize(PANEL_W, H, { fit: 'cover', position: 'attention' })
  .toBuffer();

await sharp({ create: { width: W, height: H, channels: 3, background: CHARCOAL_D } })
  .composite([
    { input: panel, left: W - PANEL_W, top: 0 },
    { input: overlay, left: 0, top: 0 },
  ])
  .jpeg({ quality: 88, chromaSubsampling: '4:4:4' })
  .toFile(OUT);

const meta = await sharp(OUT).metadata();
console.log(`wrote ${OUT} — ${meta.width}x${meta.height}, ${Math.round(statSync(OUT).size / 1024)} KB`);
