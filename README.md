# Rank Intelligence

Homepage rebuilt to **Design System v2 (best UI/UX)**, cloned originally from https://rankintelligence.net/

## What's in this repo

- `index.html` — the homepage in Design System v2 (static, no build step; uses the shared `assets/`). Per the owner's direction (2026-11-20) it restores the live site's sections in full: Measurable Performance (8 tabs), Case Studies (6 tabs × 3 cases), Testimonials (7 tabs × 3 reviewers, click a reviewer to read their quote), the SERPLoft™ tool band (formerly DazziGrowth — rebranded everywhere, including the USP item), Our Solutions in Infidigit's format (12 cards with one-line descriptions), Our USP (6 items), Knowledge Base, the "Get ready to boost your Organic Rankings" CTA band (rotating Traffic/Sales/Leads/Revenue), Proudly Featured (10 outlets), FAQs and the 2-step lead form. The earlier 1.3 MB preview export with the Homepage/Design System switcher was replaced by this clean build.
- **241 inner pages** — the full site structure cloned from Infidigit's sitemap (see `SITEMAP_INFIDIGIT.md`) with the owner's confirmed exclusions, built from 9 templates in Design System v2: services (57), industries (27), USA locations (35), pricing/plans (15), tools (23, with working in-browser calculators, counters and schema generators), case-study indexes (59), core/company (15), resources (7) and legal (3). Each page is a folder with an `index.html` (clean URLs), sharing `assets/styles.css` + `assets/app.js`.
- `sitemap.xml` — all 242 URLs (homepage + inner pages) under https://rankintelligence.net/
- `DESIGN_SYSTEM.md` — Design System v2: the system to use for every page (palette, type, components, states, accessibility rules, homepage section order, 2-step lead form pattern).
- `brand/tokens.css` — v2 design tokens (`--ri-*` CSS variables). `brand/tokens-v2.css` is the same file, kept under its versioned name.
- `DESIGN_SYSTEM_V1.md` + `brand/tokens-v1.css` — v1, the faithful extraction of the original live site, kept for reference only. Do not build new pages from v1.

### Excluded on purpose (confirmed 2026-11-20)
Infidigit's /testing/ page and duplicate pricing URL, Infidigit-personal pages (founder, life-at, brand guidelines, speaker), all author pages and web stories, individual blog posts (blog index + templates only), individual client case-study stories (indexes only — Rank Intelligence cases go in the templates), careers job sub-pages, and India/Singapore location pages.

## Deploy (Netlify)

- Import this repo, branch `main`
- Build command: *(none)*
- Publish directory: repo root (`.`)

The site is plain static HTML/CSS/JS in `index.html`; the design-system files are documentation and tokens for building the remaining pages (Services, Industries, About, Contact, etc.).

## Design decision pending

Owner will review v2 on the live deployed site and decide whether the design is approved or needs changes. Any change should be made in `DESIGN_SYSTEM.md` / `brand/tokens.css` first, then applied to the pages.
