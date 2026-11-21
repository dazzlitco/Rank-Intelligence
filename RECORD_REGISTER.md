# Record Register — Rank Intelligence Homepage Clone & Design System

Project: Clone of the Rank Intelligence homepage with a reusable design system, plus a full inner-page site generated from the Infidigit sitemap structure
Original: https://rankintelligence.net/
Live clone: https://rankintelligence.pages.dev/ (Cloudflare Pages, auto-deploys from GitHub `main`)
Repo: https://github.com/dazzlitco/Rank-Intelligence (branch `main`)
Register started: Friday, 2026-11-20 (America/Los_Angeles) — backfilled from session records and MEMORY.md for all work since 2026-11-19
Maintained by: Muse, for the user

## How to use this register

- This is the permanent, chronological record of everything done on this project: requests, build steps, verification, failures, fixes, and decisions.
- Add one entry per build step, in order, as the step completes — never rewrite or delete earlier entries. If an earlier entry turns out to be wrong, add a new correction entry that references it.
- Every entry records: date/time, what was asked or attempted, what was actually done, evidence/verification, and the resulting state.
- `STATUS.md` in this same folder is the companion file: it always shows the current state only (done / in progress / next / blocked). Update `STATUS.md` at the same time as every entry added here.
- Rule set by the user on 2026-11-20: **keep both files updated after each session/step** (same convention as the LeadSmart and Postorizon projects).
- Working files: this folder (`~/workspace/your_files/rank-intelligence-project/`) — DESIGN_SYSTEM.md (v1), DESIGN_SYSTEM_V2.md, DESIGN_SYSTEM_V3.md, SITEMAP_INFIDIGIT.md, brand/, build/ (generate.py, pages-manifest.json, megamenu.py), img/, homepage backups. Local staging repo: `~/workspace/rank-intelligence-github/`.
- Push method: GitHub connector snapshot push (text files only — all images are embedded in HTML as data URIs). Every push is verified by reading back the head commit.

## Entries

### R-001 — 2026-11-19 — Homepage clone v1 + Design System v1
- Cloned https://rankintelligence.net/ homepage (18 sections) as a faithful extraction; produced Design System v1 documenting the live site's identity as-is.

### R-002 — 2026-11-19 — Design System v2 + Homepage v2 (user-approved direction)
- User chose the v2 direction: palette blue #102088 + action green #006E00, Poppins/Inter, sticky header, 18→10 sections, 2-step lead form, WCAG AA contrast. Homepage v2 built to it and audit-verified 2026-11-19.

### R-003 — 2026-11-19 — Pushed to GitHub
- User approved pushing the v2 export to dazzlitco/Rank-Intelligence `main` (commit de5fc92a): preview export with Homepage/Design System switcher, DESIGN_SYSTEM.md (= v2), tokens, README, netlify.toml. Local staging: `~/workspace/rank-intelligence-github`.

### R-004 — 2026-11-20 — Deployment moved to Cloudflare Pages
- Deployment changed from Netlify to Cloudflare Pages: production branch `main`, preset None, build command empty (`exit 0` if required), build output `/`, root `/`, no env vars; netlify.toml is ignored by Cloudflare. Live site: https://rankintelligence.pages.dev/

### R-005 — 2026-11-20 — Infidigit sitemap mapped for inner pages
- Copied Infidigit's sitemap structure for the clone: 443 page entries (442 unique) + 1,122 blog posts, 165 author pages, 64 web stories (~1,794 URLs), mapped in SITEMAP_INFIDIGIT.md (~9 templates in Design System v2). User confirmed the recommended exclusions: no /testing/, no author pages, no web stories, no individual blog posts or case-study stories, no India/Singapore locations.

### R-006 — 2026-11-20 — 241 inner pages generated
- Generator `build/generate.py` produced 241 inner pages (services 57, industries 27, USA locations 35, pricing 15, tools 23 with working in-browser calculators/schema generators, case-study indexes 59, core 15, resources 7, legal 3) + sitemap.xml (242 URLs). Pushed as commit fcbd745d (246 files). Inner pages carry placeholder-standard copy; real per-page content can replace it later. Inner pages use the shared `/assets/styles.css` + `/assets/app.js` and their own simpler header (see R-039 note).

### R-007 — 2026-11-20 — Homepage sections restored in full
- The v2 homepage was rebuilt clean (43 KB; the 1.3 MB export kept as backup `homepage-v2-export-backup.html`), restoring the live sections in full: Measurable Performance (8 tabs, exact live copy), Case Studies (6 tabs × 3, exact headlines), Testimonials (7 tabs × 3, click-to-read, no star ratings), Our Solutions (12 cards, Infidigit format), Our USP (6 items), Knowledge Base, CTA band (rotating Traffic/Sales/Leads/Revenue, after KB, before Featured), Proudly Featured (10 outlets). Faithful-as-is quirks kept: KB repeats the same Local SEO card (live does too); two testimonial quotes name mismatched brands (Stader / Los Angeles Consultants) as live; trivial live typos corrected.

### R-008 — 2026-11-20 — SERPLoft™ rebrand
- DazziGrowth™ renamed SERPLoft™ everywhere (user decision); verified zero "Dazzi" remaining in repo HTML. This is intentional and must not be "fixed" back when comparing against the live site.

### R-009 — 2026-11-20 — Faithful VISUAL clone rebuild
- User judged the 43 KB rebuild too different from live. Full visual audit, then rebuilt as a faithful visual clone in one self-contained index.html (~506 KB): cyan-gradient hero with generated 3D illustration (man + white dog) + partner row, Performance grey panel with photo, case cards with gradient thumbs, two clientele marquee rows, testimonial layout with big quote + green avatar circles, SERPLoft cyan band with CSS dashboard mock, Solutions in RI card style, Awards chips, USP navy icon circles, Meet Our Team photo, KB illustration, blue CTA band, Featured staggered logo cards, 9 FAQs (live questions), full proposal form (mint panel, consultant photo, 14 checkboxes, +44 phone, pre-checked terms), shop banner, footer navy gradient #102088 → #0A1445 (offices Orlando FL + Islamabad). 6 AI images (~254 KB) embedded as data URIs (snapshot push rejects binaries; originals in `img/`). Pushed c5b6b705. Plain rebuild kept at `homepage-plain-v2-backup.html`. From here the user directed fixes section by section (R-010 onward).

### R-010 — 2026-11-20 — Our Clientele: real logos, dual marquee (commits df6624a5, 2f51c175)
- 23 real client logos supplied by the user: 12 upper / 11 lower, two slow auto-scrolling rows (upper right-to-left, lower left-to-right, 58s loop, edge fade, reduced-motion respected), embedded once and duplicated by JS. Heading: "We are the digital partners for brands to achieve organic growth". Rows do not pause on hover.

### R-011 — 2026-11-20 — Hero: real live-site assets (commits e48bc218, cbe6270c)
- Original hero artwork (man/dog/poster), real CMO faces strip, real partner-logos strip (Google/Meta/LinkedIn/Microsoft/TikTok/Shopify), all embedded from original bytes — never RGB-flatten transparent strips (an early flatten gave the strip a black background; corrected). Hero resized to live proportions (~300×300 at 1440, text 59%, strip left-aligned under text, logos ~29px, "Our Partners" label, cyan gradient).

### R-012 — 2026-11-20 — Measurable Performance: real photos + auto-switch (commits 7a5ed355, 414df1c6, e654b7fb)
- 8 real panel photos (1024×585, one per goal tab), SVG icons in coloured circles, tabs in one vertical column on the left, panel layout image above text with button below. Tabs auto-switch every 5.6s with a green progress bar (click resets). Bug repaired along the way: the App Downloads image had landed inside the lead-form success-message JS string — section-scoped verification adopted after this.

### R-013 — 2026-11-20 — Case Studies: real screenshots + logos (commits 3074d351, 9b14620f, f39b54b0)
- 18 real client website screenshots replaced the gradient thumbs (cover-cropped), mapped 1:1 to the case brands in tab order. Tab buttons rectangular (10px radius). Cards grow on hover (scale 1.03 + deeper shadow); whole card clickable to its tab's case-study index page (to be re-pointed to individual studies if/when they exist). Each card carries its client logo except BioDigital, MyVitaminStore.pk and Instacart, which show a styled text wordmark until the user uploads those logos (still open). Heading: "We elevate your brand to create success stories like these."

### R-014 — 2026-11-20 ~04:00 PST — Production Design System v3 adopted (commit 218ad1c7)
- On a voice call the user said they were unhappy teaching section-by-section and directed: prepare a design system so the work proceeds automatically. DESIGN_SYSTEM.md in the repo is now "Production Design System (v3)" — live identity + every owner decision, superseding v1/v2 — with the standing rule: apply it automatically, build/push/verify/report, ask only when a required asset is genuinely missing. (Copy kept at DESIGN_SYSTEM_V3.md in this folder.)

### R-015 — 2026-11-20 — Testimonials redesigned under v3 (commit 69f56d09 + refinements e71beaab, abcafae9, bd9fe2a1, a194bd2e, 5f1eff86)
- 21 real reviewer photos (green-background portraits); heading "Our clients talk about their transformative growth journeys." Selector cards show a small round photo; the main area shows the same photo large. Final layout per user specs: company logo top-left above the quote; large photo 150px centred above name (14px bold) + designation (12px regular muted); selector-tab names 10px bold, designations 9px regular muted; review text 18px; industry tab buttons rectangular, 10px radius. All 21 reviewer companies match the clientele logo set 1:1. No star ratings.

### R-016 — 2026-11-20 — Our Solutions rebuilt to Infidigit's anatomy (commit 1f83aae6)
- Pale-grey section, white horizontal cards: 56px pastel icon tile left (colours cycle by column), title + one-liner right, NO in-card link text, whole card is the link to the matching RI service page; each of the 12 solutions has a dedicated SVG line icon matching Infidigit's icon concepts. Heading (user's): "We enhance your marketing initiatives to achieve outstanding ROI."

### R-017 — 2026-11-20 — Sections removed at user's request (commits 40d6d631, 98132f38)
- Features / Meet Our Team section removed. Shop banner removed (it was a div.shopband just before </main>, not a <section>). Neither is to be restored.

### R-018 — 2026-11-20 — CTA band matched to live (commits a50d3409, 191310e8, b29fcfb5)
- Illustration swapped to the user's c2a-image-home.webp (3D woman with coffee, transparency preserved). Rotating words: Rankings → Traffic → Sales → Leads → Revenue (Rankings first). Paragraph trimmed to the live line only; Contact Us link removed (orange Get Free Proposal button only); duplicated rotator word fixed ("Organic Rankings Rankings"). Fit measured against live: illustration 111% of band height, bottom flush, ~39px top overflow at 1919px (band padding 0, image max-width 382px, margin-top -46px).

### R-019 — 2026-11-20 — Proudly Featured re-cloned exactly to live (commits c0953270, 00e058d0, d212c992, 403deae9, 5170fd95)
- The 10 text cells replaced with the user's real media logos (SELand, ahrefs, HuffPost, Entrepreneur, Marketplace Pulse, HubSpot, Forbes, SEMRUSH, MarketWatch, SEJ) in rows of 5/3/2 over a cyan dome. Final live spec: NO pill; heading "Proudly featured in by leading media publications"; columns 45/55 top-aligned; logos small in the cards (max-height 22px); dome #AEF3FF 570×290 flush with section top behind rows 1–2 (row 3 on white); row gaps 24/18px; section padding 68px. Subtext: "From major news outlets to niche publications, our brand has been making waves in the media." (An earlier version was broken on the deployed site; fixed to live proportions verified on pages.dev.)

### R-020 — 2026-11-20 — FAQs (commits d3c8d94e, 6bbaa078)
- Heading "Find everything you need to know about RankIntelligence"; accordion thin 1px border collapsed, thick 3px blue border on the open item; only one item open at a time.

### R-021 — 2026-11-20 — Awards (commit 7b6d5431)
- The 15 text badge chips replaced by the user's real awards strip image (Top-Agency-Awards-logooo-1536x204.webp, max-width 1120px) under "Awards & Accreditations".

### R-022 — 2026-11-20 — SERPLoft animated illustrations (commit 0bab6ad1)
- Tabs rectangular, 10px radius. Every panel gained an animated SVG motion illustration: Rank Tracker chart draws itself + floating #3 badge; GeniuSearch typing dots + scanning result lines + sparkles; Custom Dashboard growing bars + spinning donut + drawing line; Competitors racing bars + pulsing target. Panels 2–4 converted to two-column to hold them; animations off under prefers-reduced-motion. (This rebuild is where the panel-nesting defect later found in R-035/R-040 was introduced.)

### R-023 — 2026-11-20 — Lead form re-cloned to live + photo fix (commits 9fad59a3, ead511f7, 14018871, 332edefd)
- Full live spec: section bg #f5f6f7, card radius 12px, left panel #CCF5D9 with H2 heading, consultant photo bottom-anchored, floating pale-mint badges (Boost ROI / Multifold Growth / Global Reach), placeholder-only form (no visible labels), all 5 fields required, US-flag chip on the WhatsApp field, single-line business input, managed-by dropdown, 14 service checkboxes in wrapping flex flow, pre-checked consent, full-width #008000 submit, SSL/spam reassurance lines, centred +44-7782259462 tel link. Section keeps id="lead" (CTA buttons link to it). Photo fix: a `.leadleft img` specificity bug had kept the photo floating; it is now a tall 330×470 portrait, bottom flush/cropped at the panel edge, verified live; Boost ROI badge nudged to overlap her shoulder.

### R-024 — 2026-11-20 — Section headings rule (commit bee201e1)
- User: all section headings ≤34px and on a single line. Applied: `section h2` clamp(20px, 2.4vw, 34px) with nowrap; Proudly Featured heading sized to its column; lead-panel heading exempt (wraps like live, 24px); on ≤760px screens headings wrap at 24px. (Later exception: the Featured heading/subtext were set to exactly two lines — R-034.)

### R-025 — 2026-11-20 — Polish pass: contrast, alternating backgrounds, subtle animation (commits 818b3e1c, e67806a2)
- User asked to adjust all sections' colour contrast, section order (if needed), alternate section backgrounds, and add subtle background animations. Section order kept as live (judged to flow well). Alternating backgrounds, no two neighbours alike: Hero cyan gradient → Performance white → Case Studies grey → Clientele white → Testimonials lavender #F4F2FE → SERPLoft cyan gradient → Solutions grey → Awards white → USP navy showcase → Knowledge Base white → CTA grey/blue band → Proudly Featured pale cyan #F2FBFD → FAQs white → Lead form #f5f6f7 → Footer navy. Body text deepened to #414E6B. USP rebuilt as a dark navy showcase (white heading, translucent cards, cyan icon circles). Subtle CSS animations, all off under prefers-reduced-motion: hero drifting glow blobs, dot-pattern drift in Testimonials (18s) and Knowledge Base (20s), SERPLoft gradient pan (16s), USP glow pulse (9s); motion strengthened once after QA found it too faint (e67806a2). Full-page visual QA verified the alternation and readability.

### R-026 — 2026-11-20 — Footer: navy gradient, official social logos, trust badges (commits 8764f7b1, da3cca70, 0a430e44)
- Footer background changed from inherited dark green to brand navy gradient #102088 → #0A1445 (Muse's pick at the user's request), pale periwinkle text #C7D2FE, cyan link hovers. Social placeholders replaced with official platform glyphs in brand colours on white circular chips (Facebook, X, LinkedIn, Instagram, YouTube, Pinterest) — they link to the platform homepages because the real profile URLs are unknown (open item). The user's 9 uploaded review/partner badges (Google Reviews, Clutch 4.9, Trustpilot, G2 4.8, GoodFirms 4.9, DesignRush, REVIEWS.io, Shopper Approved, SEMrush Certified Agency Partner) placed in the footer trust row as white rounded badges at uniform 52px height.

### R-027 — 2026-11-20 — Case Studies auto-switch + clientele size (commits 77670d80, c26bfa23)
- Case Studies tabs auto-switch every 10 seconds with no progress bar (click resets; originally paused on hover — removed in R-040). Clientele slider logos reduced 52px → 44px at the user's request ("slightly smaller").

### R-028 — 2026-11-20 — V3 audit fixes (commit 5ffeb238)
- From a read-only desktop audit of live vs deployed: USP heading two-tone (Rank white / Intelligence green, space before "?"), deeper lavender eyebrow pill, USP icons swapped to live concepts (brain, rising chart, globe, handshake); Knowledge Base heading is now the live sentence itself, card titles use live wording ×4, cards unboxed with a thin divider, View All Blogs is a sharp rectangle with no arrow; footer Follow Us order matches live (FB, IG, LI, X, Pinterest, YT); Proudly Featured heading/subtext set to wrap in exactly two lines (the binding bug behind this is fixed in R-033).

### R-029 — 2026-11-20 — Knowledge Base illustration generated (commit 37bbcb77)
- The user first asked Muse to decide, then approved generating: an illustration in live's concept (two specialists beside a giant phone showing a street map with a big green location pin, target with arrow, gear, magnifier, green "Local SEO" label; blue/cyan palette), optimized to 640×427 / 22 KB and placed on all four KB cards, replacing the shopfront stand-in. Original generation kept in `img/`.

### R-030 — 2026-11-20 — Official site logo (commit 8dbee63c)
- User uploaded Rank_Int-Site-Logo.png and asked to use it as the site logo, converted to WebP first. Converted keeping transparency (760×111, 11 KB; `img/rank-intelligence-logo.webp`), embedded as a data URI in both header (36px tall) and footer (32px, on a white rounded chip so the navy wordmark stays readable on the navy footer), replacing the text logo.

### R-031 — 2026-11-20 — Favicon from the user's icon (commit 787fa9ef)
- User uploaded Rank_Int-Site-icon.png and asked to use it as the favicon, converted to SVG first. Traced to a true vector SVG with VTracer (9 KB, 2 paths) and saved as repo-root `favicon.svg`; `<link rel="icon" type="image/svg+xml" href="/favicon.svg">` inserted into all 242 HTML pages, and the generate.py template updated so regeneration keeps it.

### R-032 — 2026-11-20 — Footer offices decision (user, locked)
- User confirmed: KEEP Orlando, FL ("1317 Edgewater Drive Suite 1700, Orlando, Florida, 32804") + Islamabad ("Office 6, Main Building, 3rd Floor, Block C, Gulberg Greens, Islamabad") — do NOT switch to the live site's current Greenville, TX + Layyah addresses. No footer change needed. The live site's footer phone (+1-856-481-6893, WhatsApp) and Skype link were asked about but NOT confirmed — not added; do not add without confirmation. (Inner pages still show older Greenville/Layyah text in their footers; the decision was made for the homepage footer.)

### R-033 — 2026-11-20 — Right-side overflow fixed (commit d1e57c46)
- User reported empty space on the right side of pages, traced to the Proudly Featured section, then to its heading. Root cause: the heading was bound by the global single-line rule (nowrap at 34px ≈ 830px wide) inside a ~590px column, forcing the section wide; the two-line sizing from R-028 had never taken effect because its rules targeted a `.feathead` class the markup never had. Fix: added the feathead class, keyed the rules to the section (`.sec-feat h2` wraps, 29px, max-width 430px; lede max-width 400px), and added a global `overflow-x: clip` guard to the homepage and to `/assets/styles.css` (covers all inner pages). Verified: no horizontal scrolling on home or About; the Featured grid and dome sit inside the container.

### R-034 — 2026-11-20 — Proudly Featured cards to 50px + subtext two lines (commits df813583, db166231, 71828f69)
- User asked twice to lessen the logo-card height (74px → 64px → 50px). Verification then measured the cards at ~84px regardless: an old `min-height: 84px` rule was silently flooring them. Released the floor (min-height: 0) so the cards take the true 50px height. In the same pass the subtext was widened (max-width 452px) after a check showed it wrapping to three lines; the later live audit (R-040) confirmed exactly two lines.

### R-035 — 2026-11-20 — SERPLoft last two tabs fixed (commit bf734795)
- User: "no illustration in its last 2 tabs." Root cause was structural, not missing art: the Custom Dashboard panel was nested inside the GeniuSearch panel and Competitors Analysis inside that (two missing closing tags from the R-022 rebuild), so a hidden parent hid them permanently. Panels restored as proper siblings; verified live that both tabs show their panels with the bar/donut and You-vs-Rival illustrations. (First verification attempt raced the deploy and reported a false failure; a fresh-load re-check passed.)

### R-036 — 2026-11-20 — Testimonials auto-switching (commit 6b65db0a)
- User: industry tabs auto-switch after a 15-second gap; client cards inside each tab switch after 5 seconds; no progress bar. Implemented with two timers (manual clicks reset both; originally paused on hover — removed in R-040). Verified live in R-040.

### R-037 — 2026-11-20 — Measurable Performance auto-switch fix (commit 1875c22c)
- User: auto-switching does not work, it stays on the 1st tab. The code was correct but paused whenever the mouse rested over the panel — exactly where a reader's cursor sits. (An earlier automated test had reported it working because its mouse was elsewhere.) Removed the hover-pause; tabs now advance every 5.6s unconditionally (still pause when the browser tab is hidden; click resets). Verified live with the mouse parked over the panel for a timed 13 seconds: three advances, progress bar animating.

### R-038 — 2026-11-20 — Testimonial review text left-aligned (commit 3ade0a7d)
- User: make the review text left-aligned. Applied `text-align: left` to the `.bigquote` rule that actually styles the quote. Process note: the first attempt (commit 660d2a65) pushed an unchanged file after its edit script found no matching rule — caught immediately, disclosed to the user, and corrected in 3ade0a7d. Verified live in R-040 (quote starts at a fixed left edge across reviewers).

### R-039 — 2026-11-20 — Header mega menu built like Infidigit (commits 33cf8c06, 214de3fe, cef20230)
- User: "our homepage is ready except header's megamenu — build it like https://www.infidigit.com/". Infidigit's header was deep-inspected first (6 items, full-width white hover panels, 3 link columns with pastel icon headings, gradient featured card(s) right, shared grey checkmark strip, top-label click navigates). Built the same anatomy with Rank Intelligence pages: Organic Search, Website & Content, Tools & Technology, Plans, Discover, Success Stories — 99 menu links, every one verified against an existing repo page (zero dead links); featured cards use our own claims (100+ brands scaled, 50+ awards, 100+ professionals, SERPLoft™, a real testimonial). Header CTA changed from Book a Call to a green "Get Free Proposal" pill → #lead. Mobile: tap-to-open submenus inside the burger nav; featured cards/strip hidden. Two rounds of fixes: link-row spacing + a strict 6/6 split for the two-column lists + one-line CTA, then the real root cause — the base rule is `nav.main a` (specificity 0,1,2), which silently beat the menu's `.megacol a` and forced links to flow side-by-side; menu rules now carry the `nav.main` prefix. Final live check: all four spot checks pass. Build script kept at `build/megamenu.py`. SCOPE: homepage header only — the 241 inner pages still carry the old simple header; rolling the mega menu into generate.py is an open offer.

### R-040 — 2026-11-20 — Full audit: review all steps, fix the bugs (commits a8816f2d, deb85452)
- User: "Check back all steps, review your work, audit and fix the bugs."
- Static audit (custom parser + link checker): found a family of invalid-nesting bugs from the original section builds — the last case-study card's link tag closed after its grid in all 6 panels; the SERPLoft section was missing its wrap closer; the Cases section was missing two closers (absorbed into the broken card tails); one stray closer in Proudly Featured. All fixed; the document now parses FULLY BALANCED (zero tag errors). Also: all 5 inline scripts pass syntax checks; no duplicate IDs; dead CSS from the removed shop banner (.shopband/.shopin) deleted.
- Dead link fixed: the lead-form consent linked to /terms-of-service/, which did not exist. Created the page in the Privacy Policy shell with standard terms sections; added to sitemap.xml and the pages manifest (242 pages total).
- Hover-pause removed from Case Studies and Testimonials auto-switching (same trap as R-037) — no auto-switcher on the page pauses on hover anymore.
- Mobile static audit found the ≤640px Featured cards still at 64px from an old rule — aligned to 50px (deb85452).
- Live audit PASSED: testimonial quote left-aligned; reviewers rotate (~5s); industry tabs cycle (~15s); case tabs advance (~10s) with the mouse resting on the cards; Featured subtext exactly two lines; cards ~50px; BYJU'S card navigates to its category case-studies page; terms page live with real content.
- NOT live-tested: phone-width (~390px) rendering — the audit browser window cannot be resized; mobile was covered by static CSS audit only (breakpoints 640/760/900/1080 present, featrow wraps, dome 94vw, headings wrap ≤760px).
- Observation left for the user (unchanged): the "View All Case Studies" button lives inside the last tab's panel, so it only appears on the Content Marketing tab.

### R-041 — 2026-11-20 — Project records created
- User asked for a Record Register and STATUS.md for this project, kept updated after each session (same convention as LeadSmart and Postorizon). This register was created and backfilled R-001–R-040 from session records and MEMORY.md; STATUS.md created alongside. Going forward: append one entry per build step and refresh STATUS.md at the same time.

### R-042 — 2026-11-20 — Project records pushed to the repo (user decision)
- User's reasoning: if they ever lose access to this Muse, a new Muse account / AI model can be given the repo, read STATUS.md + RECORD_REGISTER.md, and continue from exactly where work stopped. Continuity beats keeping the notes private.
- Decision: RECORD_REGISTER.md and STATUS.md live in the repo root (dazzlitco/Rank-Intelligence) as well as in this project folder. Both copies are kept in sync: after every future Register entry / STATUS refresh, the updated files are pushed to the repo in the same pass.
- Accepted trade-off (explained before the user decided): the repo root is the website root, so both files are publicly readable at rankintelligence.pages.dev/RECORD_REGISTER.md and /STATUS.md.

### R-043 — 2026-11-20 — 12 core pages built in the homepage design
- User direction: using the finalized Infidigit sitemap, rebuild the core pages — take Infidigit's structure/content as inspiration (NOT exact copies), keep our homepage design and attributes, update records and push after the session, and propose the next batch. User approved the 12-page list before building: about, history, teams, clients, testimonials, proven-results, awards, media-coverage, services, contact-us, get-started, careers.
- Method: Infidigit's 12 pages were inspected live for section order/content themes (briefs on file in the session). Each RI page was then composed from the homepage's own parts — identical stylesheet, header with mega menu, footer, CTA band and lead form — plus homepage sections reused where they map (Solutions on /services/, USP on /about/ + /services/ + /teams/, Clientele on /about/ + /clients/, Case Studies on /clients/ + /proven-results/, Performance on /proven-results/, Testimonials on /testimonials/ + /get-started/, Awards strip on /awards/, Proudly Featured on /media-coverage/, FAQs on /contact-us/) and new page patterns in the same design language (cyan page hero, stats band, icon cards, timeline, role rows). Content is RI's own facts (100+ brands, 50+ awards, 100+ professionals, SERPLoft™, Orlando + Islamabad, +44-7782259462). Builder kept at build/core/build_core.py + pages_core.py; these 12 pages are now hand-built — generate.py must NOT be re-run over them.
- Deliberate deviations from Infidigit's shape (flagged to the user): /teams/ uses discipline pods, not named leadership cards — RI leadership names/photos are not on record; /clients/ leads with the logo marquee + case results rather than Infidigit's plain logo directory; /history/ milestones are theme-based without invented years/names.
- Verified before push: all 12 pages parse fully balanced, zero dead internal links, all serve 200 locally.

### R-044 — 2026-11-21 — Services Batch 1: 10 flagship SEO pages built
- User pacing rule (2026-11-21): build the 57 service pages in batches of 10, naming each batch's pages BEFORE building so the user can check after each batch. Batch 1 (approved by the user): seo-search-engine-optimization, technical-seo-services, on-page-seo-services, local-seo, e-commerce-seo, enterprise-seo-services, small-business-seo-services, professional-seo-services, seo-audit, seo-penalty-recovery.
- Pattern confirmed from Infidigit's live main SEO page: hero/intro → grouped deliverables (their plan-table groups: setup, technical, on-page, links, reporting) → FAQs. Our version in the homepage design (same builder as R-043): cyan hero, stats band, overview, What's included (6 service-specific cards), How we work (4 steps), What you receive (deliverables), Related services, 4 service-specific FAQs, CTA band, lead form. All copy written for RI per service — no boilerplate swaps.
- Verified before push: all 10 fully balanced, zero dead links, FAQ accordions and lead forms present, all serve 200 locally. Pushed in 2 batches (size limit) with these records.
- Remaining service batches: B2 content & links (10), B3 platform SEO (10), B4 web design & development (10), B5 redesign/speed/migrations/CRO/PPC (10), B6 consultants/staffing/international/manufacturing/India (7) — each to be named and approved before building.

### R-045 — 2026-11-21 — Services Batch 2: 10 content & link pages built
- Batch 2 (named before building, approved by the user): content-marketing, content-marketing-services, content-writing-services, seo-content-writing-services, ecommerce-content-writing-services, bfsi-content-writing-services, link-building, blogger-outreach-services, guest-posting-services, digital-marketing-services.
- Same service-page pattern as R-044 (hero, stats, overview, What's included ×6, How we work ×4, What you receive, Related services, 4 FAQs, CTA, lead form), each page's copy written specifically for its service — content pages stress research/voice/compliance (BFSI), link pages stress earned-only methods and vetting. Builder: build/core/batch2_services.py.
- Verified before push: all 10 fully balanced, zero dead links, 4 FAQs each, all serve 200 locally. Pushed in 2 batches with these records.
- Remaining: B3 platform SEO (10), B4 web design & development (10), B5 redesign/speed/migrations/CRO/PPC (10), B6 remaining (7).

### R-046 — 2026-11-21 — Services Batch 3: 10 platform SEO pages built
- Batch 3 (named before building, approved by the user): shopify-seo-services, wordpress-seo-services, amazon-seo-services, seo-services-amazon, youtube-seo-services, mobile-seo-services, ai-seo-services, llm-seo-services, saas-seo-services, aso-app-store-optimization.
- Same service-page pattern (R-044). The two Amazon pages are deliberately differentiated: amazon-seo-services = listing-level marketplace SEO (keywords, A+ content, backend terms); seo-services-amazon = dual-channel brand growth (marketplace + own store + branded search). AI SEO vs LLM SEO likewise split: AI SEO = citation visibility in AI answers; LLM SEO = model perception, prompt-panel tested. Builder: build/core/batch3_services.py (two bracket typos in the SaaS/ASO entries caught and fixed before build).
- Verified before push: all 10 fully balanced, zero dead links, 4 FAQs each, all serve 200 locally. Pushed in 2 batches with these records.
- Remaining: B4 web design & development (10), B5 redesign/speed/migrations/CRO/PPC (10), B6 remaining (7).

### R-047 — 2026-11-21 — Services Batch 4: 10 web design & development pages built
- Batch 4 (named before building, approved by the user): website-design-services, website-design-packages, website-development-services, wordpress-development-services, woocommerce-development-services, shopify-development-services, magento-development-services, webflow-development-services, wix-development-services, ecommerce-development-services.
- Same service-page pattern (R-044). Copy angles: design = IA-first + SEO-safe; packages = fixed scope/price transparency; development pages are platform-specific (WordPress restraint/lean stack, WooCommerce checkout, Shopify upgrade-safety, Magento no-core-hacks, Webflow structure discipline, Wix Studio + Velo); ecommerce-development is the platform-honest hub. Builder: build/core/batch4_services.py.
- Verified before push: all 10 fully balanced, zero dead links, 4 FAQs each, all serve 200 locally. Pushed in 2 batches with these records.
- Remaining: B5 redesign/speed/migrations/CRO/PPC (10), B6 remaining (7).

### R-048 — 2026-11-21 — Services Batch 5: 10 redesign/speed/migration/CRO/PPC pages built
- Batch 5 (named before building, approved by the user): website-redesign-services, website-speed-optimization-services, core-web-vitals-services, website-migration-services, shopify-migration-services, ecommerce-migration-services, website-maintenance-services, logo-design-services, conversion-rate-optimization, pay-per-click-ppc-services.
- Same service-page pattern (R-044). Copy angles: redesign/migration pages stress SEO inventory + redirect mapping + post-launch monitoring; speed vs CWV split (speed = whole-stack, field-verified; CWV = per-metric LCP/INP/CLS diagnosis at the 75th percentile); maintenance = tested backups + staged updates; CRO = research-led, statistically disciplined testing; PPC = margin-led, tracking verified first. Builder: build/core/batch5_services.py.
- Verified before push: all 10 fully balanced, zero dead links, 4 FAQs each, all serve 200 locally. Pushed in 2 batches with these records.
- Remaining: B6 final 7 (seo-consultants, seo-contract-staffing, hyper-local-seo-services, international-seo-services, seo-agency-for-manufacturing, local-seo-india, seo-consulting-india).

### R-049 — 2026-11-21 — Services Batch 6 (final 7) built — ALL 57 service pages complete
- Batch 6 (named before building, approved by the user): seo-consultants, seo-contract-staffing, hyper-local-seo-services, international-seo-services, seo-agency-for-manufacturing, local-seo-india, seo-consulting-india.
- Same service-page pattern (R-044). Copy angles: consultants = independent, impact-prioritised advice; staffing = vetted embedded specialists with senior oversight; hyper-local = neighbourhood substance + geo-grid tracking; international = architecture-first, localised-not-translated; manufacturing = specification-fluent, RFQ-measured; India pages grounded in Indian search behaviour (mobile-first, regional languages, festive seasonality). Builder: build/core/batch6_services.py.
- Verified before push: all 7 fully balanced, zero dead links, 4 FAQs each, all serve 200 locally. Pushed in 2 batches with these records.
- SERVICES GROUP COMPLETE: all 57 service pages rebuilt in the homepage design (R-044–R-049), plus the 12 core pages (R-043) = 69 hand-built pages; 173 generated pages remain (industries 27, locations 35, pricing 15, tools 23, case-study indexes 59, core-extras, resources, legal). Next proposed: Industries in batches of 10 under the same pacing rule.

### R-050 — 2026-11-21 — Core pages REBUILT to Infidigit's per-page flow (user correction)
- User correction (2026-11-21): the R-043 core pages were one generic template (hero → cards → pasted homepage sections → CTA → lead form), NOT Infidigit's per-page flow — "just increasing the page count, not web design." User also attached the custom domain: the site now serves at https://rankintelligence.net/ (was rankintelligence.pages.dev).
- Comparison done live against infidigit.com (structure only; all copy remains original RI writing): Infidigit's core pages are single-purpose, exhaustive components — Clients = ~100-entry logo+description directory; Testimonials = one stacked list of ~80 quotes; Awards = ~140-card wall; Proven Results = intro + trust bullets + screenshot gallery; History = one dated timeline + annual-highlight cards; Teams = named leadership cards + culture; About = intro bullets → Who-We-Are essay → 6 counters → featured stories → team cards → award story → client quotes. Their pages carry NO lead form / CTA band / cross-promo sections.
- Rebuilt all 12 with build/core/pages_core2.py (+ core_data.json extracted from our own homepage data: 21 testimonials, 18 case cards, 23 client logos, awards strip sliced into 8 badges): about (essay → 6 counters → 3 featured stories → pod cards → award story → 3 quotes), clients (23-row directory with logos, original descriptions, result thumbs), testimonials (21 stacked quote blocks), proven-results (bullets + 18-item gallery), awards (17-card wall: 8 award badges + 9 review-platform badges), history (timeline + era-highlight cards), teams (6 pod cards + SERPLoft™ partner block + culture), services (copy-led: essay → 9-point checklist → proof paragraph → closing pitch → service index), contact-us (form first → offices → map → next steps → FAQs), get-started (3 steps → 3 plan cards → full 21-quote wall → form), careers (listings first → employer pitch), media-coverage (10-row press list with outlet logos).
- Template lead form / CTA band removed from all except contact-us and get-started (conversion pages, form by design). Remaining honest gaps: no RI leadership names/photos (pods used in their slot), history uses era labels not invented dates, awards wall has 17 cards vs their ~140 (we only claim the badges we display).
- Verified before push: all 12 balanced, zero dead links, component counts as designed, serve 200. Pushed in 3 batches with these records.
- NOTE for next waves: the 57 service pages (R-044–R-049) share ONE template — the same criticism may apply; flagged to the user, awaiting their direction after this core fix.

### R-051 — 2026-11-21 — Contact page flow correction after second Infidigit brief
- The detailed structural brief for the last five Infidigit pages landed after the R-050 build and confirmed the rebuild flows (Services = essay + 9-item checklist + stat paragraph + pitch, no form; Get Started = testimonial-wall-led; Media = one long outbound press list; Careers = JS portal embed, matched with an authored listings-first page since no RI portal exists).
- One correction applied: on /contact-us/ the Google Map now sits at the END of the content (after offices and "What happens next"), matching Infidigit's order — form → credibility copy → office cards → map → FAQs. Rebuilt, balance + order verified, pushed.

### R-052 — 2026-11-21 — Core pages second-pass fixes (user asked for a re-check)
- User asked to compare both sites again; live byte sizes first confirmed deployment parity (all 12 live pages identical to local builds). The defects were in the builds themselves:
- /clients/: Vitamin Shoppe showed a text fallback instead of its logo (data key is "The Vitamin Shoppe logo") and only 11 of 15 possible result thumbnails matched (name variants: 123Reg.co.uk, Current Bank, Monzo Bank, The Vitamin Shoppe). Alias maps added — now 23/23 logos and 15 thumbnails.
- /about/: Infidigit's flow has a "Trusted by Global Brands" strip between the counters and featured stories — ours was missing it. Added (all 23 client logos). Also replaced an inline 2-column style on the team grid that overrode the mobile breakpoints with a proper responsive class.
- /awards/: the 8 award cards all carried the same generic caption. Read the actual badge artwork and captioned each properly: Clutch (Top Digital Marketing Agencies 2024), National Excellence (2024 Winner, US), Forbes Agency Council (Official Member 2024), Influencer Marketing Hub (Top 10 Agency 2024), The Manifest (Top SEO Provider), Top 10 Best SEO Company, GoodFirms (Top Digital Marketing Company), Find Best SEO (Best SMO Company, Top 10).
- /contact-us/: still carried the pasted homepage FAQ accordion after the map — the same template sin as R-050. Replaced with original Q&A credibility copy ("Before you write to us", 5 questions) placed after the form; flow is now form → Q&A → offices → next steps → map (map last, as on Infidigit).
- /history/: the timeline's era-label column (74px) was too narrow for "Recognition" at 15px bold — widened to 104px with the timeline line/highlight offsets adjusted (scoped to this page only).
- Verified: all 5 rebuilt pages balanced, zero dead links, serve 200, fix-specific counts confirmed. Pushed in 2 batches with these records.
