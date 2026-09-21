# Build Brief: Rukn Al Zain Website (Astro + Netlify)

Save this file as `CLAUDE.md` in your project root. Claude Code will automatically ingest these rules for every command and file creation.

---

## 0. Developer Instructions & Workflow (AI Guidelines)

- **Design System Enforcement:** Apply design best practices from `@anthropics/skills/frontend-design` and `@nextlevelbuilder/ui-ux-pro-max-skill`. Avoid generic Bootstrap/Tailwind aesthetics. Build custom, high-converting B2B UI elements with intentional typography, micro-interactions, and visual hierarchy.
- **Incremental Code Generation:** Build using a modular, step-by-step approach. Test components in isolation before wiring full pages.
- **Data Integrity:** The attached `Rukn_Al_Zain_SEO_Content_Brief.docx` is the single source of truth for text and metadata. Do not invent product specs or dimensions. If data is missing, insert a `<!-- TODO: Missing spec from brief -->` comment and flag it to the user.

---

## Company Context

- **Company:** Rukn Al Zain General Trading LLC
- **Location:** Dubai, UAE — P.O. Box 36528
- **Contact:** +971505698195 (Phone / WhatsApp)
- **Business:** Supplier of heavy-duty recycled-rubber flooring products across three main segments:
  1. Acoustic / soundproofing underlay for commercial & residential construction.
  2. Gym & fitness rubber flooring (tiles, rolls, turf).
  3. Animal & agricultural rubber mats/pavers (horse stables, dairy farms, gardens).
- **Primary Market:** UAE / GCC (All 7 Emirates: Dubai, Abu Dhabi, Sharjah, Ajman, RAK, UAQ, Fujairah).

---

## Brand & Visual Identity (Design System)

Implement these brand variables into standard CSS variables / Tailwind theme configuration:

- **Color Palette:**
  - `Primary (Dark Charcoal)`: `#2A2D34` — Used for text, main layout containers, dark headers, and footers.
  - `Secondary (Light Industrial Gray)`: `#F4F5F7` — Used for page background sections, card backgrounds, and alternate table rows.
  - `Accent (Rukn Amber / Logo Yellow)`: `#F8B03A` — Reserved strictly for primary CTAs ("Request a Quote"), active nav states, and visual highlights.
  - `Neutral White`: `#FFFFFF` — Product card background canvases and main content blocks.
- **Typography:**
  - **Headings:** `Montserrat` (Bold, clean, geometric sans-serif matching the brand logo).
  - **Body / Technical Data:** `Inter` or `Open Sans` (Clean, legible, tabular-number friendly).
- **UI Elements:**
  - High-contrast, clean industrial aesthetics. Sharp or slightly rounded corners (`rounded-md`).
  - Tables must feature clear structural borders and subtle zebra striping (`#F4F5F7`).

---

## Tech Stack & Architecture Rules

- **Framework:** Astro (Static Output mode). Zero-JS by default. Hydrate interactive islands (e.g., forms) only when necessary using `client:visible`.
- **Deployment:** Push to GitHub, deploy automatically via Netlify.
- **Integrations:**
  - `@astrojs/sitemap` configured with canonical site domain.
  - Astro `<Image />` component (`astro:assets`) mandatory for all image assets (WebP conversion, explicit dimensions, lazy loading).

---

## 1. Traditional SEO Requirements

- **Per-Page Metadata:** Create a shared `<Seo />` layout component taking `title`, `description`, `canonical`, and `ogImage` props. Inject distinct metadata for every page as defined in `Rukn_Al_Zain_SEO_Content_Brief.docx`.
- **Sitemap & robots.txt:** Build a valid `robots.txt` that allows search engines and references `/sitemap-index.xml`.
- **URL Strategy:** Enforce trailing slash consistency in `astro.config.mjs` (`trailingSlash: 'never'` or `'always'`) to prevent duplicate indexing.
- **Semantic Structure:** Exactly one `<h1>` per page. Strict `H1 -> H2 -> H3` semantic flow. Use `<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, and `<footer>`.
- **Media Optimization:** All product images must use `<Image />` with descriptive, keyword-rich `alt` text. Never leave `alt` empty or generic.
- **Social Tags:** Complete Open Graph (`og:*`) and Twitter Card metadata on all pages for WhatsApp / LinkedIn share previews.

---

## 2. Answer Engine Optimization (AEO)

- **Direct Answer Snippet:** Every product page must feature a **1–2 sentence direct definition box** immediately under the `<h1>` explaining what the product is and its primary use case in plain language.
- **Standalone FAQs:** Every category and major product page requires a 3–6 question FAQ section with self-contained, definitive answers.
- **FAQ Schema:** Wrap FAQ sections in `FAQPage` JSON-LD schema.
- **Scannable Lists & Tables:** Format technical specs, installation steps, and features using `<ul>`, `<ol>`, or `<table>` tags—avoid burying key metrics in long prose.

---

## 3. Generative Engine Optimization (GEO)

- **Explicit Entity Statements:** State company name, physical location, and exact service offerings explicitly in readable prose on the homepage and about page for LLM extractors.
- **Fact-Dense Technical Specs:** Include exact material compositions, density (kg/m³), thickness (mm), and tensile strength in structured HTML `<table>` elements.
- **Consistent Terminology:** Maintain strict terminology across all pages (e.g., maintain "Acoustic Rubber Underlay" consistently without switching randomly to "soundproof matting").

---

## 4. Local SEO (UAE-Specific)

- **NAP Uniformity:** Standardize "Rukn Al Zain General Trading LLC, P.O. Box 36528, Dubai, UAE, Phone: +971505698195" across the footer, contact page, and JSON-LD schema.
- **LocalBusiness Schema:** Implement `LocalBusiness` JSON-LD schema on the homepage and contact page specifying `areaServed: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Umm Al Quwain", "Fujairah"]`.
- **Click-to-Action:** All phone numbers must use `tel:+971505698195` and WhatsApp links must target `https://wa.me/971505698195`.

---

## 5. Structured Data (JSON-LD) Checklist

Include standard `<script type="application/ld+json">` components for:
1. **Organization:** Sitewide in base layout.
2. **LocalBusiness:** Homepage and Contact page.
3. **Product:** Every individual product page (including name, description, image, brand).
4. **FAQPage:** Every page containing an FAQ block.
5. **BreadcrumbList:** All category and product sub-pages.

---

## 6. Execution Rules & Escalations

Flag the following back to the user before writing code:
- Missing technical specs or product data in `Rukn_Al_Zain_SEO_Content_Brief.docx`.
- Missing business parameters (e.g., precise Google Maps embed URL, GPS coordinates, trade license number).
- Ambiguous internal links or broken path structures.