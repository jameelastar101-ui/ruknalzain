/**
 * Rukn Al Zain General Trading LLC — brand theme.
 *
 * Sources of truth: CLAUDE.md "Brand & Visual Identity" + design guidance from
 * @anthropics/skills/frontend-design and ui-ux-pro-max. Direction: high-contrast
 * industrial B2B — dark charcoal structure, light gray planes, and a single
 * amber accent reserved for action. Geometric Montserrat headings over a
 * legible, tabular-friendly Inter body.
 *
 * @type {import('tailwindcss').Config}
 */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        /* Primary — Dark Charcoal (#2A2D34).
           Body text, layout containers, dark headers and footers. */
        charcoal: {
          DEFAULT: '#2A2D34',
          50: '#F4F5F6',
          100: '#E6E7E9',
          200: '#C6C8CD',
          300: '#A0A4AB',
          400: '#71757F',
          500: '#4C505A',
          600: '#3A3D45',
          700: '#2A2D34',
          800: '#202228',
          900: '#15171B',
        },

        /* Secondary — Light Industrial Gray (#F4F5F7).
           Page section backgrounds, card fills, alternate (zebra) table rows. */
        industrial: {
          DEFAULT: '#F4F5F7',
          50: '#FBFBFC',
          100: '#F4F5F7',
          200: '#E8EAEE',
          300: '#D7DAE1',
          400: '#B7BCC7',
        },

        /* Accent — Rukn Amber (#F8B03A).
           Reserved for primary CTAs ("Request a Quote"), active nav state and
           deliberate highlights. Pair the 400 fill with charcoal text. Use 700
           for amber text / links / focus rings on light surfaces (AA, ~5:1). */
        amber: {
          DEFAULT: '#F8B03A',
          50: '#FEF6E8',
          100: '#FCE7C2',
          200: '#FAD48C',
          300: '#F9C059',
          400: '#F8B03A',
          500: '#EC9A12',
          600: '#C67C09',
          700: '#9B610B',
          800: '#7C4E10',
          900: '#673F13',
        },

        /* Form + system feedback. Never signalled by colour alone. */
        danger: { DEFAULT: '#DC2626', 50: '#FEF2F2' },
        success: { DEFAULT: '#15803D', 50: '#F0FDF4' },
      },

      fontFamily: {
        // Headings — geometric, matches the logo wordmark.
        heading: [
          'Montserrat Variable',
          'Montserrat',
          'ui-sans-serif',
          'system-ui',
          'Segoe UI',
          'sans-serif',
        ],
        // Body + technical data — legible, tabular numerals available.
        body: [
          'Inter Variable',
          'Inter',
          'Open Sans',
          'ui-sans-serif',
          'system-ui',
          'Segoe UI',
          'sans-serif',
        ],
        // Default `font-sans` tracks the body face.
        sans: [
          'Inter Variable',
          'Inter',
          'Open Sans',
          'ui-sans-serif',
          'system-ui',
          'Segoe UI',
          'sans-serif',
        ],
      },

      // Type scale: size / line-height / tracking. Display sizes tighten as they
      // grow so Montserrat's geometry stays controlled at hero scale.
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.15rem' }],
        sm: ['0.875rem', { lineHeight: '1.35rem' }],
        base: ['1rem', { lineHeight: '1.65rem' }],
        lg: ['1.125rem', { lineHeight: '1.8rem' }],
        xl: ['1.25rem', { lineHeight: '1.85rem', letterSpacing: '-0.005em' }],
        '2xl': ['1.5rem', { lineHeight: '1.9rem', letterSpacing: '-0.01em' }],
        '3xl': ['1.875rem', { lineHeight: '2.2rem', letterSpacing: '-0.015em' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.02em' }],
        '5xl': ['3rem', { lineHeight: '3.1rem', letterSpacing: '-0.022em' }],
        '6xl': ['3.75rem', { lineHeight: '3.9rem', letterSpacing: '-0.025em' }],
      },

      // Industrial, high-contrast surfaces: `rounded-md` is the house radius.
      borderRadius: {
        DEFAULT: '0.375rem',
      },

      boxShadow: {
        card: '0 1px 2px 0 rgb(42 45 52 / 0.06), 0 1px 3px 0 rgb(42 45 52 / 0.10)',
        lift: '0 8px 24px -6px rgb(42 45 52 / 0.18)',
      },

      // Consistent desktop content measure.
      maxWidth: {
        content: '72rem',
      },

      ringColor: {
        DEFAULT: '#9B610B',
      },
    },
  },
  plugins: [],
};
