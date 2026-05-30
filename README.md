# Uplift 2 Thrive Consulting — Website

A modern, premium rebuild of [uplift2thriveconsulting.com](https://uplift2thriveconsulting.com)
for **Uplift 2 Thrive Consulting LLC** — a purpose-driven brand strategy &
coaching ecosystem for BIPOC entrepreneurs and nonprofit leaders, led by
founder & CEO **Chanté Ramsey**.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS-first `@theme` tokens)
- `next/font` — **Fraunces** (display) + **Hanken Grotesk** (body)
- Fully static output (all routes prerendered) — fast, cheap, portable
- **Zero external media dependency** — all images are served locally

## Design language

A premium, editorial take on the brand's own logo palette: **royal purple,
magenta, and golden amber** on a soft lilac-white canvas. Confident, human, and
momentum-driven — a deliberate departure from the original WordPress theme.
Design tokens live in `src/app/globals.css`.

The brand logo is processed once into transparent PNGs (colour mark, white
silhouette for dark UI, and the favicon) by `scripts/process-logo.mjs`, which
reads `full-logo.jpg` / `favicon.jpg` and writes to `public/images/brand/` and
`src/app/icon.png`.

## Project structure

```
src/
  app/                 # App Router routes (one folder per page)
    page.tsx           # Home
    services/          # 1:1 coaching packages
    aspire-higher/     # Cohort coaching program
    labs-workshops/    # Facilitated workshops
    community/         # Community Conversations + "Uplift The Village" feature form
    events/            # Events list + [slug] detail pages
    about/             # Founder story + V.A.L.I.D. method + press
    contact/           # Contact form + details
    privacy-policy/    # Legal
    terms-of-service/  # Legal
    sitemap.ts, robots.ts, icon.svg, not-found.tsx
  components/          # Reusable UI (Header, Footer, cards, forms, primitives)
  data/                # Normalized content extracted from the source material
    site.ts            # Business identity, nav, V.A.L.I.D., journey, press
    services.ts        # The four coaching packages
    programs.ts        # Aspire Higher tracks + workshop offerings
    events.ts          # Event calendar entries
    testimonials.ts    # Client testimonials
  lib/                 # Small helpers (cn)
public/images/         # All media, organized + locally served
scripts/
  download-images.sh   # Re-fetch & rename source media into public/images
```

## Content provenance

All business content — copy, pricing, services, events, testimonials, policies,
and media — was extracted and normalized from the scraped source material in the
repository's `raw messy data/` folder. No factual business data was invented.
Forms submit via a pre-filled email (`mailto:`) so they work with no backend;
booking links point to the business's live Calendly.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (static)
npm start        # serve the production build
npm run images   # (re)download source media into public/images
```
