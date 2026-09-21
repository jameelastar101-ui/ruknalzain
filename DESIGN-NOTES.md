# Design notes — Rukn Al Zain website

Working notes for the visual system. The binding spec is **CLAUDE.md → "Brand & Visual
Identity"**; this file records the reasoning and the choices made on the free axes, drawing
on `@anthropics/skills/frontend-design` and the `ui-ux-pro-max` dataset (Construction /
Architecture and Inventory profiles: *industrial grey + a single warm accent*).

## Subject, audience, job

- **Subject:** a Dubai trade supplier of heavy-duty recycled-rubber flooring — acoustic
  underlay, gym flooring, animal/agricultural mats.
- **Audience:** UAE/GCC specifiers and buyers — contractors, gym fit-out firms, facilities
  and farm managers. They compare specs and want a quote fast.
- **Page job:** state what Rukn Al Zain supplies, prove it with real technical numbers, and
  make "Request a Quote" the obvious next step.

## Tokens (in `tailwind.config.mjs`)

| Role | Token | Value | Use |
| --- | --- | --- | --- |
| Structure / text | `charcoal` (700 = DEFAULT) | `#2A2D34` | body copy, dark header/footer, containers |
| Plane / fill | `industrial` (100 = DEFAULT) | `#F4F5F7` | section backgrounds, cards, zebra rows |
| Action | `amber` (400 = DEFAULT) | `#F8B03A` | primary CTA, active nav, highlights **only** |
| Canvas | `white` | `#FFFFFF` | product cards, main content blocks |
| Amber-on-light | `amber-700` | `#9B610B` | amber text / links / focus rings (AA ~5:1) |

Contrast: `charcoal` on `white` ≈ 13:1. `amber-400` fill **must** carry `charcoal` text, not
white. Never use bare `amber-400` as text on a light surface — drop to `amber-700`.

- **Headings:** `font-heading` → Montserrat (geometric, tracks the logo). Large sizes carry
  negative tracking via the type scale.
- **Body / technical data:** `font-body` → Inter, Open Sans fallback. Use `tabular-nums` in
  every spec table, price and dimension so columns don't jitter.
- **Radius:** `rounded-md` (0.375rem) house radius. **Shadows:** `shadow-card`, `shadow-lift`
  only — no ad-hoc values.
- **Container:** `max-w-content` (72rem).

## Signature element

**The spec rule** — a 3px amber rule sitting flush against a charcoal block edge, echoing the
worn edge-strip of a rubber mat. It marks the active nav item, section eyebrows, and the
left edge of each product's direct-answer definition box. This is the one place amber is
allowed to be decorative; everywhere else it means "act here". Keep everything around it
quiet.

## Guardrails

- Zero-JS by default; hydrate islands with `client:visible` only (forms).
- Not one of the three AI-default looks (cream+serif, near-black+acid, broadsheet). This is
  charcoal + industrial grey + one amber, grounded in the product's own material.
- Motion: restrained. A short page-load settle and hover feedback on cards/CTAs. Respect
  `prefers-reduced-motion`.
- Quality floor: one `<h1>` per page, visible keyboard focus (`ring` = `amber-700`),
  responsive to 375px.

## Open items (flagged to client — CLAUDE.md §6)

- Canonical production domain (production domain `https://ruknalzain.ae` in `astro.config.mjs`
  and `public/robots.txt`).
- Google Maps embed URL / GPS coordinates, trade licence number.
- Product technical specs are pending `Rukn_Al_Zain_SEO_Content_Brief.docx` — do not invent
  densities, thicknesses or tensile figures.
