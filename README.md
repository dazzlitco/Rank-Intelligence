# Rank Intelligence

Homepage rebuilt to **Design System v2 (best UI/UX)**, cloned originally from https://rankintelligence.net/

## What's in this repo

- `index.html` — the v2 homepage as a single self-contained static page (no build step). It includes the preview's top switcher — **Homepage (v2) / Design System / Both** — so the design can be reviewed live after deployment. Once the design is approved, the switcher bar can be stripped for production.
- `DESIGN_SYSTEM.md` — Design System v2: the system to use for every page (palette, type, components, states, accessibility rules, homepage section order, 2-step lead form pattern).
- `brand/tokens.css` — v2 design tokens (`--ri-*` CSS variables). `brand/tokens-v2.css` is the same file, kept under its versioned name.
- `DESIGN_SYSTEM_V1.md` + `brand/tokens-v1.css` — v1, the faithful extraction of the original live site, kept for reference only. Do not build new pages from v1.

## Deploy (Netlify)

- Import this repo, branch `main`
- Build command: *(none)*
- Publish directory: repo root (`.`)

The site is plain static HTML/CSS/JS in `index.html`; the design-system files are documentation and tokens for building the remaining pages (Services, Industries, About, Contact, etc.).

## Design decision pending

Owner will review v2 on the live deployed site and decide whether the design is approved or needs changes. Any change should be made in `DESIGN_SYSTEM.md` / `brand/tokens.css` first, then applied to the pages.
