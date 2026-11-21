# STATUS — Rank Intelligence Homepage Clone & Design System

Last updated: 2026-11-21 (after Register entry R-060)
Full history: see `RECORD_REGISTER.md` in this folder. This file is the current state only — it is rewritten after each build step, and the Register is appended at the same time.

## What this project is

A clone of https://rankintelligence.net/ — homepage rebuilt as a faithful visual clone under a production design system, plus 242 inner pages generated from the Infidigit sitemap structure (services, industries, locations, pricing, tools, case-study indexes, core, resources, legal).

- Live clone: **https://rankintelligence.pages.dev/** (Cloudflare Pages; auto-deploys from GitHub `main` on every push)
- Repo: https://github.com/dazzlitco/Rank-Intelligence (`main`; text-only snapshot pushes — images embedded as data URIs)
- Design system: Production Design System v3 (repo `DESIGN_SYSTEM.md`) — live identity + all owner decisions; apply automatically, ask only when an asset is genuinely missing
- Standing rules: SERPLoft™ replaces DazziGrowth™ everywhere (never revert); footer offices are Orlando FL + Islamabad (locked, do not switch to live's Greenville/Layyah); every push verified by head-commit read-back; verify edits landed BEFORE pushing (edit and push are separate steps)

## Current state

| Component | State | Notes |
|---|---|---|
| Homepage | ✅ Complete & live | All 15 sections in live order; fully balanced valid HTML (R-040 audit); no horizontal overflow |
| Header mega menu | ✅ Done (homepage) | Infidigit-style: 6 items, full-width hover panels, 99 links all verified live pages, Get Free Proposal CTA (R-039) |
| Inner pages (242) | ✅ Live | 12 core pages REBUILT to Infidigit per-page flow (R-050, supersedes R-043 template build) + ALL 57 service pages (R-044–R-049) rebuilt in the full homepage design incl. mega menu; the other 173 remain generated placeholder pages with the OLD simple header (see Open items) |
| Design System | ✅ v3 current | v1/v2 preserved as DESIGN_SYSTEM_V1/V2.md |
| Favicon + logo | ✅ Done | User's icon traced to SVG, linked on all pages (R-031); user's logo as WebP in header/footer (R-030) |
| Auto-behaviors | ✅ Verified live | Performance tabs 5.6s + progress bar; Case Studies 10s; Testimonials 15s tabs / 5s reviewers; clientele marquee; CTA word rotator. None pause on hover (R-037/R-040) |
| Project records | ✅ Created 2026-11-20 | This file + RECORD_REGISTER.md (R-001–R-043), updated after each step/session per user's rule; mirrored in the repo root and pushed with each update (R-042 — so any future AI can pick up from the repo alone; publicly served, accepted by the user) |

## Open items (all waiting on the user — do not invent or nudge)

| Item | What's needed |
|---|---|
| Mega menu on remaining inner pages | The 12 core pages carry it (R-050); the other 230 generated pages still show the old 4-link header — rollout is part of each upcoming batch as those pages get rebuilt (core pages are hand-built now; do NOT re-run generate.py over them) |
| 3 case-study logos | BioDigital, MyVitaminStore.pk, Instacart logos — cards show styled text wordmarks until the user uploads them |
| Footer social links | Real Rank Intelligence profile URLs — icons currently link to the platform homepages |
| Footer phone / Skype | +1-856-481-6893 (WhatsApp) and a Skype link appear on the live site; asked, unconfirmed — not added |
| Footer link lists | Ours are shorter than live's (Company/Services/Industries) — expand only where matching clone pages exist, never invent links |
| Case-study card targets | Cards link to category index pages; individual case-study pages do not exist yet |
| "View All Case Studies" button | Sits inside the last tab's panel, so it only shows on the Content Marketing tab (flagged in the R-040 audit; move only if the user asks) |
| Phone-width rendering | Not live-tested in Muse's browser (window can't resize); covered by static CSS audit only — user can eyeball on a phone |
| KB illustration | AI-generated stand-in (user approved generating); replace if the user supplies the real asset |
| Inner-page content | Placeholder-standard copy throughout; real per-page content/cases can replace it page by page |

## Next step when the user returns

Whatever section/page the user names next — build to Design System v3, push, verify live, then append a Register entry and refresh this STATUS.
