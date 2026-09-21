import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Canonical production domain — used for <link rel="canonical">, Open Graph URLs
// and the sitemap. Also mirrored in public/robots.txt.
const SITE = 'https://ruknalzain.ae';

// https://astro.build/config
export default defineConfig({
  site: SITE,

  // Zero-JS static site. Interactive islands opt in per-component with client:*.
  output: 'static',

  // Honour a PORT from the environment (dev tooling / preview proxies); plain
  // `npm run dev` still defaults to 4321.
  server: { port: process.env.PORT ? Number(process.env.PORT) : 4321, host: true },

  // One canonical URL shape, no trailing slash, to prevent duplicate indexing.
  // `format: 'file'` emits /about.html served at /about (matches trailingSlash).
  trailingSlash: 'never',
  build: {
    format: 'file',
  },

  integrations: [
    // Brand theme lives in tailwind.config.mjs. Base styles are injected so no
    // separate entry stylesheet is required yet.
    tailwind({ applyBaseStyles: true }),

    // Emits /sitemap-index.xml (referenced by public/robots.txt).
    sitemap({
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date(),
      // Keep noindex / data-pending pages out of the sitemap. The /blog index
      // and its posts are live content now, so only the still-pending pages
      // stay excluded.
      filter: (page) => {
        const noindex = ['/outdoor-pavers/linkmats', '/projects-gallery'];
        return !noindex.some((p) => page.replace(/\/$/, '').endsWith(p));
      },
    }),
  ],
});
