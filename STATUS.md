# STATUS — Rank Intelligence Homepage Clone & Design System

Last updated: 2026-11-21 (after Register entry R-138)
Full history: see `RECORD_REGISTER.md` in this folder. This file is the current state only — it is rewritten after each build step, and the Register is appended at the same time.

## What this project is

A clone of https://rankintelligence.net/ — homepage rebuilt as a faithful visual clone under a production design system, plus inner pages cloned from the Infidigit sitemap structure (services, industries, locations, pricing, tools, case-study indexes, core, resources, legal).

- Live clone: **https://rankintelligence.net/** (Cloudflare Pages; auto-deploys from GitHub `main` on every push; rankintelligence.pages.dev still resolves)
- Repo: https://github.com/dazzlitco/Rank-Intelligence (`main`; text-only snapshot pushes — images embedded as data URIs)
- Design system: Production Design System v3 (repo `DESIGN_SYSTEM.md`) — live identity + all owner decisions; apply automatically, ask only when an asset is genuinely missing
- Standing rules: SERPLoft™ replaces DazziGrowth™ everywhere (never revert); footer offices are Orlando FL + Islamabad (locked, do not switch to live's Greenville/Layyah); every push verified by head-commit read-back; verify edits landed BEFORE pushing (edit and push are separate steps)

## Current state

| Component | State | Notes |
|---|---|---|
| Homepage | ✅ Complete & live | All 15 sections in live order; fully balanced valid HTML (R-040 audit); no horizontal overflow |
| Header mega menu | ✅ Done (homepage + all 96 hand-built pages) | Infidigit-style: 6 items, full-width hover panels, 99 links all verified live pages, Get Free Proposal CTA (R-039) |
| Core pages (12) | ✅ Rebuilt v2 & live | Rebuilt to Infidigit per-page flows, all-original RI copy (R-050, supersedes R-043 template build); second-pass fixes R-052 (Clients 23/23 logos, About trust strip, Awards captions, Contact Q&A, History timeline) |
| Service pages (57) | ✅ Rebuilt v2 & live, 57/57 | One page at a time, per-page flows confirmed individually (R-053–R-109); archetypes vary: packages tables, checklists, Q&A, essays, rich marketing/landing |
| Industries pages (27) | ✅ Rebuilt & live, 27/27 | Hub + 26 industry pages, one at a time, none skipped (R-111–R-137) |
| Hand-built total | ✅ 96 pages | 12 core + 57 services + 27 industries, all verified balanced, zero dead links, live byte-identical at push |
| Pakistan pages | ✅ Live | /local-seo-pakistan/ and /seo-consulting-pakistan/ fully rewritten for Pakistan (R-110); old India URLs 301 to them; India pages can be re-added later on expansion |
| 96-page audit | ⚠️ Fixes built, live deploy still propagating at 06:32–06:36 PST 2026-11-21 — all fixes verified live 2026-11-21 (evening), including the seo-audit expansion (15 groups / 86 items). Audit complete together with R-139 (CSS leak) and R-140 (character paragraphs). |
| Industries CSS leak | ⚠️ Builder fixed, all 27 rebuilt locally. Visual live sweep 2026-11-21 10:51–10:53 PST: 11 CLEAN (hub, contractor, ecommerce, automotive, dentist, b2b, doctor, b2c, cannabis, bfsi, delivery-services), 16 still LEAKING (educational, health-care, pest-control, fmcg, fitness, plumbing, real-estate, travel-website, healthcare, law-firm, restaurant, roofing, fashion-ecommerce, insurance, gaming, ott). Re-push of the 16 completed in 8 batches (R-140); live re-check 2026-11-21 evening confirms all 27 leak-free. |
| Character-paragraph bug | ⚠️ Found in the same sweep: 33 pages rendered paragraphs as vertical single letters (helpers iterated plain strings char by char). Helpers fixed, all 33 rebuilt, zero occurrences remain locally; pushed with R-140 and live re-check confirms all 33 clean. |
| Design System | ✅ v3 current | v1/v2 preserved as DESIGN_SYSTEM_V1/V2.md |
| Favicon + logo | ✅ Done | User's icon traced to SVG, linked on all pages (R-031); user's logo as WebP in header/footer (R-030) |
| Auto-behaviors | ✅ Verified live | Performance tabs 5.6s; Case Studies 10s; Testimonials 15s tabs / 5s reviewers; clientele marquee; CTA word rotator. None pause on hover (R-037/R-040) |
| Project records | ✅ Current through R-138 | This file + RECORD_REGISTER.md (R-001–R-138), updated after each step/session per user's rule; mirrored in the repo root and pushed with each update (R-042 — so any future AI can pick up from the repo alone; publicly served, accepted by the user) |

## R-138 audit fixes applied (2026-11-21)

- Services: seo-contract-staffing, shopify-migration, core-web-vitals, hyper-local-seo, logo-design gained case cards + quotes; wix-development gained brands strip + quote + case cards; website-speed-optimization gained grounded stats band + closing lead form; ecommerce- and bfsi-content-writing gained client brands strip; seo-audit checklist expanded 10 groups / ~51 items → 15 headings / 80 checklist items (14 groups + 6-item "What your report includes" = 86 checkmarked lines; R-138's "~100 items" is overstated — correct it in the Register).
- Industries: delivery-services and seo-for-ott gained 2 testimonial quotes each and full 3 case cards (case-key casing bug fixed — 'Casper'/'Adobe'/'instacart' keys are mixed-case in core_data.json); FMCG gained brands strip + 3 case cards + 2 quotes; fashion-ecommerce and BFSI case grids completed to 3 cards and gained brands strips; pest-control gained stats band and its lead form moved ahead of the closing FAQ to match reference order.
- Not defects, left as built: FAQ-count deltas where structure matches; reference's duplicated hub cards and duplicated FAQ presentations (not reproduced); business-listing plugin block at end of reference pages (skipped by design since R-043).
- Core 12: no structural defects. Differences are documented honest subsets (RI's real 23 clients / 21 testimonials / 10 outlets / real award honours) and asset gaps already on record.

## Open items (all waiting on the user — do not invent or nudge)

| Item | What's needed |
|---|---|
| Remaining generated pages (141) | Locations (35), Pricing (15), Tools (23), case-study indexes (59), plus resources/legal remainder — still on the generated template with the old 4-link header; rebuild one page at a time on the user's direction, next group in roadmap order is Locations |
| 3 case-study logos | BioDigital, MyVitaminStore.pk, Instacart logos — cards show styled text wordmarks until the user uploads them |
| Footer social links | Real Rank Intelligence profile URLs — icons currently link to the platform homepages |
| Footer phone / Skype | +1-856-481-6893 (WhatsApp) and a Skype link appear on the live site; asked, unconfirmed — not added |
| Footer link lists | Ours are shorter than live's (Company/Services/Industries) — expand only where matching clone pages exist, never invent links |
| Case-study card targets | Cards link to category index pages; individual case-study pages do not exist yet |
| "View All Case Studies" button | Sits inside the last tab's panel, so it only shows on the Content Marketing tab (flagged in the R-040 audit; move only if the user asks) |
| Phone-width rendering | Not live-tested in Muse's browser (window can't resize); covered by static CSS audit only — user can eyeball on a phone |
| KB illustration | AI-generated stand-in (user approved generating); replace if the user supplies the real asset |
| Inner-page content | Placeholder-standard copy on the remaining generated pages; real per-page content/cases can replace it page by page |

## Next step when the user returns

Whatever section/page the user names next — build to Design System v3, push, verify live, then append a Register entry and refresh this STATUS. Roadmap order for the remaining groups is Locations (35) first.

## Latest — R-141 (2026-11-21, evening)

/services/ was rebuilt to the reference page's true rendered flow (hero + stats, client slider, 57 service cards, case tabs, awards, testimonials, growth section, CTA, why-us accordion, lead form) after the user found the essay-only version wanting and a visual inventory confirmed the gap; live and byte-verified (head 3238f6c4). Lesson recorded in R-141: reference flows must be confirmed visually, not by text fetch. A visual re-verification of the other hand-built pages is proposed and awaiting the user's go-ahead.

## Latest — R-163 (2026-11-22)

The 11-core-pages round is COMPLETE: every core page has been visually inventoried on the reference site and rebuilt to its rendered flow with RI design and RI-only content — /services/ (R-141–R-152), About (R-153), History (R-154), Teams (R-155), Clients (R-156), Testimonials (R-157), Proven Results (R-158), Awards (R-159), Contact (R-160), Get Started (R-161, built to the reference's /get-demo/ proposal-page flow), Careers (R-162, built to their job-portal layout), Media Coverage (R-163). All 12 verified live with byte parity. Standing rules from the round: reference flows are confirmed VISUALLY, never by text fetch; homepage/shared components are imported, never rebuilt as lookalikes; nothing is invented — gaps (named leaders, article dates, careers email, numeric ratings) stay honest. Still open: the 141 generated pages (Locations 35, Pricing 15, Tools 23, case-study indexes 59, resources/legal remainder) and a possible visual re-verification of the 57 service + 27 industry pages, whose flows were text-confirmed only. Whatever the user names next — build to Design System v3, push, verify live, then append a Register entry and refresh this STATUS.
