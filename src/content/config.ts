import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Content model for the hub-and-spoke site structure defined in
 * Rukn_Al_Zain_SEO_Content_Brief.docx.
 *
 *   hubs      — the three category hub pages
 *   products  — the individual product ("spoke") pages, each referencing its hub
 *
 * The schemas validate the SEO metadata, the AEO direct-answer block, the
 * GEO specification rows and the parent/child (hub ⇄ product) relationship.
 */

/** One row of a product specification table. */
const specRow = z.object({
  label: z.string().min(2),
  /** Confirmed value. `null` = not yet supplied by the brief → renders as
   *  "To be confirmed" and emits a `<!-- TODO: Missing spec -->` comment. */
  value: z.string().min(1).nullable().default(null),
  unit: z.string().optional(),
});

/** 3–8 self-contained FAQ entries (AEO requirement; brief target is 3–6, hub
 *  pages may run to 8). */
const faqs = z
  .array(
    z.object({
      question: z.string().min(6),
      answer: z.string().min(20),
    }),
  )
  .min(3)
  .max(8);

/** Fields shared by every hub and product page. */
const seo = {
  /** The single <h1> for the page. */
  h1: z.string().min(3),
  /** <title> text. Brief target ≤ ~60 chars; some brief drafts run longer. */
  seoTitle: z.string().min(10).max(80),
  /** Meta description. Brief target ≤ ~155 chars. */
  metaDescription: z.string().min(50).max(180),
  primaryKeyword: z.string().min(3),
  secondaryKeywords: z.array(z.string()).default([]),
  /** AEO direct-answer block — 1–2 plain-language sentences under the H1. */
  definition: z.string().min(40).max(360),
  /** Emit noindex,nofollow (use for thin / data-pending pages). */
  noindex: z.boolean().default(false),
};

const hubs = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/hubs' }),
  schema: z.object({
    ...seo,
    /** Canonical path, no trailing slash. */
    path: z.string().startsWith('/'),
    /** Short label for header / footer navigation. */
    navLabel: z.string().min(2),
    /** Opening context paragraph. */
    intro: z.string().min(40),
    /** "Who this is for" audience list. */
    audience: z.array(z.string()).default([]),
    /** Child product pages, in the order the brief lists them. */
    children: z.array(reference('products')).min(1),
    faqs,
    /** Which category placeholder image to use. */
    image: z.enum(['acoustic', 'gym', 'animal']),
  }),
});

const products = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/products' }),
  schema: z.object({
    ...seo,
    /** Canonical path, no trailing slash (may be nested, e.g. /rubber-gym-tiles/zainfit). */
    path: z.string().startsWith('/'),
    /** Parent hub — enforces the hub/spoke relationship. */
    hub: reference('hubs'),
    /** Keyword-rich anchor text used when linking back up to the hub. */
    hubAnchor: z.string().min(6),
    tagline: z.string().optional(),
    benefits: z.array(z.string()).default([]),
    applications: z.array(z.string()).default([]),
    /** GEO: structured specification rows. Unknown values stay `null`. */
    specs: z.array(specRow).default([]),
    installation: z.string().optional(),
    climateNote: z.string().optional(),
    faqs,
    image: z.enum(['acoustic', 'gym', 'animal']),
    /** Descriptive, keyword-rich alt text for the product image. */
    imageAlt: z.string().min(15),
    /** True when the brief could not supply enough data to finalise the page. */
    contentPending: z.boolean().default(false),
  }),
});

/**
 * posts — the resources / blog articles from the brief §5 "/blog/".
 * Markdown body + validated SEO / AEO metadata. Rendered by
 * src/pages/blog/[slug].astro; indexed by src/pages/blog/index.astro.
 */
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    /** The single <h1> for the article. */
    h1: z.string().min(3),
    /** <title> text. Brief target ≤ ~60 chars; some run longer. */
    seoTitle: z.string().min(10).max(80),
    /** Meta description. Brief target ≤ ~155 chars. */
    metaDescription: z.string().min(50).max(180),
    primaryKeyword: z.string().min(3),
    secondaryKeywords: z.array(z.string()).default([]),
    /** One-paragraph lede — shown in the hero and reused as the list excerpt. */
    excerpt: z.string().min(50),
    /** Segment label — matches the three hubs plus a cross-cutting theme. */
    topic: z.enum([
      'Acoustic',
      'Gym & fitness',
      'Animal & agricultural',
      'Sustainability',
    ]),
    /** ISO date (YYYY-MM-DD). Coerced so unquoted YAML dates also parse. */
    datePublished: z.coerce.date(),
    dateModified: z.coerce.date().optional(),
    /** Whole-minute read estimate shown in the byline. */
    readMinutes: z.number().int().positive(),
    /** AEO: 3–6 self-contained Q&As → visible block + FAQPage JSON-LD. */
    faqs: z
      .array(
        z.object({
          question: z.string().min(6),
          answer: z.string().min(20),
        }),
      )
      .min(3)
      .max(6)
      .optional(),
    /** Emit noindex,nofollow (drafts / thin pages). */
    noindex: z.boolean().default(false),
    /** Keep out of the index list and the static paths until ready. */
    draft: z.boolean().default(false),
  }),
});

export const collections = { hubs, products, posts };
