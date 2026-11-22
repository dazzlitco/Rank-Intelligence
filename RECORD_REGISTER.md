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

### R-053 — 2026-11-21 — Service pages v2, Page 1: flagship SEO rebuilt packages-table-led
- User decision (2026-11-21): rebuild all 57 service pages with per-type flows too — then refined: ONE page at a time, following that page's own Infidigit flow in RI design, no rushing. Structural inspection of 16 Infidigit service pages (structure only; all copy ours) found the archetypes: (A) packages/checklist-table-led (flagship SEO, e-commerce SEO, SEO audit), (B) essay-led with FAQ (technical = Q&A blocks; local = sub-headed essays; enterprise/penalty/international = long essays; link building/CRO = Q&A stacks; design/dev/PPC/AI-SEO/ASO = essay stacks), (C) rich marketing page (content marketing only: hero + trust bullets + repeated forms + stories + testimonials + logo wall). Our R-044–R-049 shared template (hero/stats/cards/process/CTA/lead form) matches none of them.
- Page 1 — /seo-search-engine-optimization/ (Archetype A): slim head → "Compare our SEO plans" packages table (4 tiers Lite/Standard/Pro/Enterprise, per-tier Get Proposal buttons, 26 deliverable rows in 6 groups: Getting started, Technical SEO, On-page SEO, Content, Authority building, Reporting & support — RI's own package definitions, proposal-based pricing) → 8 FAQs (4 carried from R-044 + 4 new). No stats band, no cards grid, no CTA band, no lead form. Builder: build/core/pages_services2.py.
- Verified: balanced, zero dead links, serve 200, component counts as designed. Pushed with these records.
- Next page (named in advance): /technical-seo-services/ — Archetype B, Q&A-led (question blocks as the page body).

### R-054 — 2026-11-21 — Service pages v2, Page 2: Technical SEO rebuilt Q&A-led
- /technical-seo-services/ rebuilt to its own flow (Archetype B, Q&A-led): slim head → 10 headed question blocks as the entire body (what technical SEO is / audit coverage / cost / timelines / audit frequency / one-time vs ongoing / technical vs on-page / platforms / working with in-house developers / site size), answers written from RI's own R-044 material plus new copy, with inline links to sibling services. No stats band, no cards, no separate FAQ section, no lead form — the Q&A is the content, as on the reference page.
- Verified: balanced, zero dead links, serve 200, 10 Q&A blocks. Pushed with these records.
- Next page (named in advance): /local-seo/ — Archetype B essay variant (intro + sub-headed essay sections + short FAQ).

### R-055 — 2026-11-21 — Service pages v2, Page 3: Local SEO rebuilt as sub-headed essays + FAQ
- /local-seo/ rebuilt to its own flow (Archetype B, essay variant): slim head → short intro essay → 5 sub-headed essay sections (Getting found / Getting chosen / Getting contacted / Where AI fits in local search / Tracking what matters) → 6 FAQs (4 from R-044 + 2 new). All copy original, drawn from RI's local service facts; inline links to AI SEO and hyper-local SEO. No stats band, cards, process steps or lead form.
- Verified: balanced, zero dead links, serve 200, 5 essay sections + 6 FAQs. Pushed with these records.
- Next page (named in advance): /e-commerce-seo/ — Archetype A, packages-table-led (3-tier comparison table + FAQ).

### R-056 — 2026-11-21 — Service pages v2, Page 4: E-commerce SEO rebuilt packages-table-led (3 tiers)
- /e-commerce-seo/ rebuilt to its own flow (Archetype A): slim head → 3-tier packages table (Lite/Standard/Pro, per-tier Get Proposal; 23 store-specific deliverable rows in 6 groups: Setup & research, E-commerce SEO, Technical SEO, Content, Authority building, Reporting & support — RI's own package definitions) → 8 FAQs (4 from R-044 + 4 new). Reusable packages_table() helper added to pages_services2.py. No stats band, cards or lead form.
- Verified: balanced, zero dead links, serve 200, counts as designed. Pushed with these records.
- Next page (named in advance): /seo-audit/ — Archetype A checklist variant (one exhaustive grouped audit checklist + FAQ).

### R-057 — 2026-11-21 — Service pages v2, Page 5: SEO Audit rebuilt checklist-led
- /seo-audit/ rebuilt to its own flow (Archetype A, checklist variant): slim head → one exhaustive grouped checklist (10 area cards, 51 items: Crawl & indexation, Robots & sitemaps, Content audit, Titles & metadata, Structured data, Media SEO, Speed & Core Web Vitals, Mobile & rendering, Architecture & links, What your report includes — RI's own audit scope) → 8 FAQs (4 from R-044 + 4 new). No tier table, stats band or lead form.
- Verified: balanced, zero dead links, serve 200, counts as designed. Pushed with these records.
- Next page (named in advance): /enterprise-seo-services/ — Archetype B long-essay flow (facet-by-facet essay + short FAQ).

### R-058 — 2026-11-21 — Service pages v2, Page 6: Enterprise SEO rebuilt as long-essay flow
- /enterprise-seo-services/ rebuilt to its own flow (Archetype B, long essay): slim head → one continuous 10-paragraph essay with bold lead-ins (scale problem, audit & benchmarking, continuous technical management, portfolio intent mapping, content operations, authority, multi-region coordination, AI readiness, boardroom reporting) with inline links to SEO audit, technical SEO, international SEO and AI SEO → 6 FAQs (4 from R-044 + 2 new). All copy original. No tables, cards, stats or lead form.
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /seo-penalty-recovery/ — Archetype B long-essay flow (diagnosis-first essay + short FAQ).

### R-059 — 2026-11-21 — Service pages v2, Page 7: Penalty Recovery rebuilt as long-essay flow
- /seo-penalty-recovery/ rebuilt to its own flow (Archetype B, long essay): slim head → 8-paragraph diagnosis-first essay (forensic diagnosis, manual actions, algorithmic drops, link-profile audit and disavow judgment, content causes, inherited tactics, post-fix fluctuation, rebuilding safely) with inline links to SEO audit, link building and technical SEO → 6 FAQs (4 from R-044 + 2 new). All copy original.
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /international-seo-services/ — Archetype B long-essay flow (market-by-market essay + short FAQ).

### R-060 — 2026-11-21 — Service pages v2, Page 8: International SEO rebuilt as long-essay flow
- /international-seo-services/ rebuilt to its own flow (Archetype B, long essay): slim head → 9-paragraph essay (market sizing & sequencing, per-market keyword research, ccTLD/subdomain/subfolder architecture, hreflang & technical targeting, localisation vs translation, per-market authority, governance, per-market measurement) with inline links to technical SEO, content writing and enterprise SEO → 6 FAQs (4 from R-049 + 2 new). All copy original.
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /on-page-seo-services/ — its individual flow will be confirmed first, then built the same way.

### R-061 — 2026-11-21 — Service pages v2, Page 9: On-Page SEO rebuilt as prose-facet essay + FAQ
- Flow confirmed individually first (this page was outside the 16-page sample): the reference page is Archetype B — a sequence of prose paragraphs, one per on-page facet, then an FAQ block (business-listing block at the end is a plugin artifact, skipped as before).
- /on-page-seo-services/ rebuilt to match: slim head → 10-paragraph essay written entirely in RI's own words (page-by-page assessment, keyword-to-page mapping & cannibalisation, titles & meta, heading structure, improving existing content, URLs & internal linking, images, schema, mobile-first, ongoing measurement) with inline links to SEO audit, content writing, AI SEO and technical SEO → 6 FAQs (4 from R-044 + 2 new).
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /small-business-seo-services/ — flow to be confirmed individually first, then built.

### R-062 — 2026-11-21 — Service pages v2, Page 10: Small Business SEO rebuilt as intro + sub-headed essays + FAQ
- Flow confirmed individually first: the reference page is Archetype B — short intro, 3 sub-headed essay sections, then an FAQ block (business-listing block skipped as a plugin artifact).
- /small-business-seo-services/ rebuilt to match: slim head → intro → 3 essay sections written in RI's own words (reaching customers without relying only on ads / building local trust before contact / staying visible in AI and zero-click search) with inline links to local SEO and AI SEO → 8 FAQs (4 from R-044 + 4 new).
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /professional-seo-services/ — flow to be confirmed individually first, then built.

### R-063 — 2026-11-21 — Service pages v2, Page 11: Professional SEO rebuilt as sub-headed capability sections + FAQ
- Flow confirmed individually first: the reference page is Archetype B — a stack of sub-headed topic sections with inline sibling links, then an FAQ block (business-listing block skipped as a plugin artifact).
- /professional-seo-services/ rebuilt to match: slim head → intro on what "professional" means as a standard of work → 8 sub-headed sections written in RI's own words (voice search, featured snippets, keeping pace with search evolution, international, penalty recovery, local, AI SEO, LLM visibility) with inline links to the sibling services → 8 FAQs (4 from R-044 + 4 new).
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /content-marketing/ — Archetype C, the one rich marketing page (hero + trust bullets + repeated proposal forms + success stories + testimonials + logo wall + awards banner).

### R-064 — 2026-11-21 — Service pages v2, Page 12: Content Marketing rebuilt as the rich marketing page (Archetype C)
- The one Archetype C page in the set. Built entirely from Rank Intelligence's own components and original copy, following the archetype's rhythm: slim head with 3 trust bullets → lead form → 3 essay sections (strategy before production / written to be the best answer / built to earn authority) → 3 Content-Marketing case cards (Qatar Airways, The Vitamin Shoppe, Floyd) → CTA band → 3 client quote blocks → 23-logo clientele wall → awards badge row. No FAQ section, per the archetype. Adaptation noted: the archetype repeats a proposal form between sections; ours uses the lead form once plus the CTA band mid-page to keep a single valid form ID.
- Build note: pages_services2.py needed json/os/HERE and build_core.section imports added (two failed runs caught before any push; the file on disk stayed the v1 version until the successful build).
- Verified: balanced, zero dead links, serve 200, 865,988 bytes. Pushed with these records.
- Next page (named in advance): /content-marketing-services/ — flow to be confirmed individually first, then built.

### R-065 — 2026-11-21 — Service pages v2, Page 13: Content Marketing Services rebuilt as long-essay flow
- Flow confirmed individually first: the reference page is Archetype B — a long prose essay of distinct facets with inline links, then an FAQ block (business-listing block skipped as a plugin artifact).
- /content-marketing-services/ rebuilt to match: slim head → 10-paragraph essay written entirely in RI's own words (why published content underperforms, traffic that goes nowhere, evidence-led topics, voice as an asset, goal-led publishing, competitor ecosystems, funnel alignment, money pages that sell outcomes, the staffing reality of consistency, ROI as alignment) with inline links to e-commerce SEO, enterprise SEO and the content marketing hub → 8 FAQs (4 from R-045 + 4 new).
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /content-writing-services/ — flow to be confirmed individually first, then built.

### R-066 — 2026-11-21 — Service pages v2, Page 14: Content Writing rebuilt as sub-headed craft sections + FAQ
- Flow confirmed individually first: the reference page is Archetype B — a short intro line, 8 sub-headed craft sections with inline links, then an FAQ block (business-listing block skipped as a plugin artifact).
- /content-writing-services/ rebuilt to match: slim head → intro → 8 sub-headed sections written in RI's own words (demonstrating real expertise, intent mapped before drafting, semantic depth, structured data pairing, competitor gap analysis, tracking & refresh cycles, human-led editorial process, citation readiness) with inline links to SEO content writing, AI SEO and LLM SEO → 10 FAQs (4 from R-045 + 6 new).
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /seo-content-writing-services/ — flow to be confirmed individually first, then built.

### R-067 — 2026-11-21 — Service pages v2, Page 15: SEO Content Writing rebuilt as the rich numbered flow
- Flow confirmed individually first: this reference page is a richer variant — hero intro + trust bullets → about essay → stats band → definition essay → 6 numbered reasons → testimonial-with-metrics → 6 numbered "what's included" steps → featured success stories → 5 numbered why-choose points → FAQ (its testimonial, stats and client material are theirs and were NOT used; ours uses RI's own grounded figures and case cards).
- /seo-content-writing-services/ rebuilt to match with RI material only: slim head with 3 trust bullets → 2-paragraph definition essay → grounded stats band (100+ brands scaled / 50+ awards / 100+ professionals / 23 global brands) → 6 numbered reasons → 3 Content-Marketing case cards as featured stories → 6 numbered includes → 5 numbered why-choose points → 7 FAQs (4 from R-045 + 3 new). All copy original.
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /ecommerce-content-writing-services/ — flow to be confirmed individually first, then built.

### R-068 — 2026-11-21 — Service pages v2, Page 16: E-commerce Content Writing rebuilt as landing variant
- Flow confirmed individually first: this reference page is a landing-style variant — hero intro → stats strip → benefits row → 5 numbered why-us sections → related-service sections and format prose → FAQ → lead form at the end (its stats, client logos and copy were NOT used; ours uses RI's grounded figures and original copy).
- /ecommerce-content-writing-services/ rebuilt to match: slim head → intro → grounded stats band → 5-point benefits checklist → 5 numbered sections (converts / builds trust / brand recall / educates researchers / earns authority) → format prose (product descriptions, category pages, guides & blog) with inline links to e-commerce SEO, content writing and link building → 8 FAQs (4 from R-045 + 4 new) → lead form.
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /bfsi-content-writing-services/ — flow to be confirmed individually first, then built.

### R-069 — 2026-11-21 — Service pages v2, Page 17: BFSI Content Writing rebuilt as landing variant
- Flow confirmed individually first: same landing-style variant as Page 16 — hero intro → stats strip → benefits row → why-us sections → related-service sections → FAQ → lead form at the end (its stats, logos and copy were NOT used).
- /bfsi-content-writing-services/ rebuilt to match with finance-specific original copy: slim head → intro on YMYL responsibility → grounded stats band → 5-point benefits checklist → 4 numbered sections (SEO for financial search / leads not just visits / genuine sector knowledge / staying current) → quality prose (writer matching & continuity, verified originality, two-reader editing) with inline links to content writing, SEO content writing and e-commerce content writing → 9 FAQs (4 from R-045 + 5 new) → lead form.
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /link-building/ — the Q&A-led archetype from the original inspection (11 Q&A blocks + short FAQ).

### R-070 — 2026-11-21 — Service pages v2, Page 18: Link Building rebuilt as Q&A-led flow
- Flow from the original archetype inspection: 11 headed Q&A blocks as the body + a short FAQ. Built entirely in RI's own words.
- /link-building/ rebuilt: slim head → 11 Q&A blocks (what link building is, why links matter, what makes a link valuable, how links are earned — digital PR / content-led / outreach, what we refuse to do, timelines, anchor text, live reporting, content-before-links sequencing, local links, competitor gap sizing) with inline links to content marketing, blogger outreach, guest posting, penalty recovery, flagship SEO and local SEO → 4 FAQs (all from R-045).
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /blogger-outreach-services/ — flow to be confirmed individually first, then built.

### R-071 — 2026-11-21 — Service pages v2, Page 19: Blogger Outreach rebuilt as problem-led essay + FAQ
- Flow confirmed individually first (note: the reference URL itself serves their guest-posting content — the flow is what matters): Archetype B — a prose essay where each paragraph names a failure mode of bought placements, then an FAQ block (business-listing block skipped as a plugin artifact).
- /blogger-outreach-services/ rebuilt to match, all in RI's own words: slim head → 8-paragraph essay (paid placements that don't move rankings, surface metrics misleading vetting, irrelevant sites from cheap networks, templated pitches editors delete, anchor-text footprints, editorial standards at good sites, competitors' smarter tactics, the honest time cost) with inline links to e-commerce SEO, enterprise SEO and link building → 7 FAQs (4 from R-045 + 3 new).
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /guest-posting-services/ — flow to be confirmed individually first, then built.

### R-072 — 2026-11-21 — Service pages v2, Page 20: Guest Posting rebuilt as craft-led essay + FAQ
- Flow confirmed individually first: the reference serves the same essay+FAQ page at both the blogger-outreach and guest-posting URLs. Ours are two distinct pages — Page 19 covered outreach failure modes; this page is angled at guest posting as a craft, so the two RI pages do not duplicate each other.
- /guest-posting-services/ rebuilt: slim head → 8-paragraph essay written in RI's own words (what a guest post really is, vetting publications beyond metrics, the pitch as an editor's problem solved, writing that survives real editors, bylines building brand, natural link placement, competitor-profile research, the patience the work takes) with inline links to e-commerce SEO, link building and blogger outreach → 8 FAQs (4 from R-045 + 4 new).
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /digital-marketing-services/ — flow to be confirmed individually first, then built. This completes the content & links group; the platform SEO group follows.

### R-073 — 2026-11-21 — Service pages v2, Page 21: Digital Marketing Services rebuilt as services-tour essay + FAQ
- Flow confirmed individually first: the reference page is Archetype B — a long prose essay touring each service area with an inline link per service, followed by process paragraphs (goals, tailored strategy, research, audits, implementation, tracking) and an FAQ block.
- /digital-marketing-services/ rebuilt to match, all in RI's own words: slim head → 16-paragraph essay (one-system framing, then SEO, audit, e-commerce SEO, local SEO, enterprise SEO, penalty recovery, link building, content writing, YouTube/Amazon/ASO, AI & LLM SEO, CRO — each with its inline service link — closing with goals, per-business strategy, implementation discipline and measurement) → 10 FAQs (4 from R-045 + 6 new).
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /shopify-seo-services/ — the platform SEO group begins; flow to be confirmed individually first, then built.

### R-074 — 2026-11-21 — Service pages v2, Page 22: Shopify SEO rebuilt as Q&A-led flow
- Flow confirmed individually first: the reference page is Q&A-led like technical SEO — 10 headed question blocks as the body, no separate FAQ (business-listing block skipped as a plugin artifact).
- /shopify-seo-services/ rebuilt to match: slim head → 11 Q&A blocks written in RI's own words (what makes it different, reporting on revenue, how Shopify SEO is done, platform challenges, best approach, store benefits, conversion impact, speed & technical handling, update cadence, sales impact, and the duplicate-content problem specifically) with inline links to e-commerce SEO, CRO, speed optimisation and technical SEO. No FAQ section, per the archetype.
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /wordpress-seo-services/ — flow to be confirmed individually first, then built.

### R-075 — 2026-11-21 — Service pages v2, Page 23: WordPress SEO rebuilt as process essay + FAQ
- Flow confirmed individually first: the reference page is Archetype B — a process essay walking the engagement stages in order, with inline links, then an FAQ block (business-listing block skipped as a plugin artifact).
- /wordpress-seo-services/ rebuilt to match, all in RI's own words: slim head → 10-paragraph process essay (understand the business → full audit → competitor & keyword research → roadmap → technical foundation → architecture & internal linking → on-page implementation → content → authority growth → conversion & tracking) with inline links to SEO audit, local SEO, enterprise SEO, on-page SEO, content writing and link building → 8 FAQs (4 from R-046 + 4 new).
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /amazon-seo-services/ — flow to be confirmed individually first, then built.

### R-076 — 2026-11-21 — Service pages v2, Page 24: Amazon SEO (listings) rebuilt as essay + FAQ
- Flow confirmed individually first: the reference page is Archetype B — a short prose essay (4 paragraphs) then an FAQ block (business-listing block skipped as a plugin artifact).
- /amazon-seo-services/ rebuilt to match, all in RI's own words: slim head → 6-paragraph essay (Amazon as a search engine with a checkout, ranking-by-sales logic, listing anatomy, shopper-language keyword research, reviews & velocity, the economics of escaping ad dependence) with inline links to e-commerce SEO and the dual-channel sibling page → 8 FAQs (4 from R-046 + 4 new). Keeps the deliberate split: this page is listing SEO; /seo-services-amazon/ is dual-channel brand growth.
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /seo-services-amazon/ — flow to be confirmed individually first, then built.

### R-077 — 2026-11-21 — Service pages v2, Page 25: SEO Services for Amazon Brands rebuilt as dual-channel essay + FAQ
- Flow confirmed individually first: the reference serves the identical Amazon page at both Amazon URLs (essay + FAQ). Our two pages stay deliberately differentiated, as decided in R-046: Page 24 = listing SEO; this page = dual-channel brand growth.
- /seo-services-amazon/ rebuilt in the same archetype shape with a distinct, original essay: renting demand vs owning it, how the channels feed each other, branded search as the bridge, honest channel economics, deliberate sequencing, combined measurement — with inline links to Amazon SEO and e-commerce SEO → 7 FAQs (4 from R-046 + 3 new).
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /youtube-seo-services/ — flow to be confirmed individually first, then built.

### R-078 — 2026-11-21 — Service pages v2, Page 26: YouTube SEO rebuilt as essay + FAQ
- Flow confirmed individually first: the reference page is Archetype B — a short prose essay (6 paragraphs) then an FAQ block (business-listing block skipped as a plugin artifact).
- /youtube-seo-services/ rebuilt to match, all in RI's own words: slim head → 7-paragraph essay (YouTube as the second search engine, the two doors of search & suggested, watch time as currency, packaging as the click decision, compounding catalogue vs ads, engagement as signal and asset, legibility to the distribution system) with an inline link to digital marketing services → 7 FAQs (4 from R-046 + 3 new).
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /mobile-seo-services/ — flow to be confirmed individually first, then built.

### R-079 — 2026-11-21 — Service pages v2, Page 27: Mobile SEO rebuilt as process essay + FAQ
- Flow confirmed individually first: the reference page is Archetype B — a process essay walking the engagement stages in order with inline links, then an FAQ block (business-listing block skipped as a plugin artifact).
- /mobile-seo-services/ rebuilt to match, all in RI's own words: slim head → 8-paragraph process essay (mobile-first audit → mobile search intent → mobile-SERP competitor analysis → UX as a ranking discipline → speed & Core Web Vitals → small-screen content → technical parity & local signals → device-split tracking) with inline links to SEO audit, Core Web Vitals, local SEO and technical SEO → 8 FAQs (4 from R-046 + 4 new).
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /ai-seo-services/ — flow to be confirmed individually first, then built.

### R-080 — 2026-11-21 — Service pages v2, Page 28: AI SEO rebuilt as long essay + FAQ
- Flow confirmed individually first: the reference page is Archetype B — a long unbroken essay (13 paragraphs) with inline links, then an FAQ block.
- /ai-seo-services/ rebuilt to match, all in RI's own words: slim head → 8-paragraph essay (visibility baseline audit → entity clarity → citable content → AI-crawler accessibility → question-space coverage → authority in model-trusted sources → continuous answer-surface monitoring → honest value reporting) with inline links to SEO audit, content writing, link building and the model-perception sibling page → 8 FAQs (4 from R-046 + 4 new). Keeps the deliberate split: this page is citation visibility; /llm-seo-services/ is model perception.
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /llm-seo-services/ — flow to be confirmed individually first, then built.

### R-081 — 2026-11-21 — Service pages v2, Page 29: LLM SEO rebuilt as sector-breakdown essay + FAQ
- Flow confirmed individually first: the reference page is Archetype B with a distinctive middle — short intro, then an industry-by-industry breakdown (8 headed sector blocks), a closing paragraph, then an FAQ block (business-listing block skipped as a plugin artifact).
- /llm-seo-services/ rebuilt to match, all in RI's own words: slim head → intro on model perception → 8 sector sections (e-commerce & retail, healthcare & wellness, finance & banking, SaaS & technology, education, real estate, legal services, travel & hospitality — what buyers ask models in each and what makes a brand recommendable) → closing paragraph with an inline link to AI SEO → 7 FAQs (4 from R-046 + 3 new). Keeps the deliberate split: AI SEO = citation visibility; this page = model perception.
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /saas-seo-services/ — flow to be confirmed individually first, then built.

### R-082 — 2026-11-21 — Service pages v2, Page 30: SaaS SEO rebuilt as essay-only (no FAQ)
- Flow confirmed individually first: the reference page is an Archetype B variant — a short prose essay (5 paragraphs) with inline links and NO FAQ block; matched as found.
- /saas-seo-services/ rebuilt to match, all in RI's own words: slim head → 6-paragraph essay (demand–product alignment, the staged buying journey, compounding economics vs paid CAC, product-led page types, internal linking & pipeline reporting, AI discovery) with inline links to content writing and AI SEO. No FAQ block, matching the reference structure.
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /aso-app-store-optimization/ — flow to be confirmed individually first, then built.

### R-083 — 2026-11-21 — Service pages v2, Page 31: ASO rebuilt as essay + long FAQ (platform group complete)
- Flow confirmed individually first: the reference page is Archetype B — a prose essay (10 paragraphs) then a long FAQ block (business-listing block skipped as a plugin artifact).
- /aso-app-store-optimization/ rebuilt to match, all in RI's own words: slim head → 8-paragraph essay (definition, quality organic installs, ASO vs SEO, precious metadata, creative as conversion, ratings & reviews as infrastructure, the two stores' differences, store-native measurement) → 10 FAQs (4 from R-046 + 6 new).
- Verified: balanced, zero dead links, serve 200. Pushed with these records. The platform group (B3) is now fully rebuilt in v2.
- Next page (named in advance): /website-design-services/ — opens the web design & development group; flow to be confirmed individually first, then built.

### R-084 — 2026-11-21 — Service pages v2, Page 32: Website Design rebuilt as process essay + FAQ (web group opens)
- Flow confirmed individually first: the reference page is Archetype B — a process essay walking the engagement stages in order with inline links, then an FAQ block (business-listing block skipped as a plugin artifact).
- /website-design-services/ rebuilt to match, all in RI's own words: slim head → 9-paragraph process essay (discovery → market & competitor research → wireframes & prototypes → visual identity → content designed-in → development to performance budgets → device testing → managed launch → care & continuous improvement) with inline links to content writing, SEO, development and maintenance → 8 FAQs (4 from R-047 + 4 new).
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /website-design-packages/ — flow to be confirmed individually first (likely table-led), then built.

### R-085 — 2026-11-21 — Service pages v2, Page 33: Website Design Packages rebuilt as essay-only (no FAQ, no table)
- Flow confirmed individually first: NOT table-led as guessed — the reference page is an Archetype B variant: a prose essay (7 paragraphs) with inline links and NO FAQ block; matched as found.
- /website-design-packages/ rebuilt to match, all in RI's own words and framed on RI's own packages concept (fixed scopes, named deliverables, SEO in every tier): slim head → 7-paragraph essay (honest package-fit consultation → structure first → custom design within scope → clean scalable development → SEO & measurement built in → testing & client review gate → deployment, monitoring, packages that extend) with inline links to content writing, SEO and the bespoke design service. No FAQ block, matching the reference structure.
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /website-development-services/ — flow to be confirmed individually first, then built.

### R-086 — 2026-11-21 — Service pages v2, Page 34: Website Development rebuilt as problem-led essay + FAQ
- Flow confirmed individually first: the reference page is Archetype B in a problem-led form — an essay of unheaded paragraphs, each diagnosing a failure mode, with an inline link, then an FAQ block (business-listing block skipped as a plugin artifact).
- /website-development-services/ rebuilt to match, all in RI's own words: slim head → 8-paragraph problem-led essay (broken measurement, page weight & speed, conversion leaks, mobile exposure, crawl structure, AI-extraction readiness, security & scalability, measurement built in) with inline links to Core Web Vitals, AI SEO and maintenance → 8 FAQs (4 from R-047 + 4 new).
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /wordpress-development-services/ — flow to be confirmed individually first, then built.

### R-087 — 2026-11-21 — Service pages v2, Page 35: WordPress Development rebuilt as Q&A-led page
- Flow confirmed individually first: the reference page is the Q&A-led archetype — headed question blocks are the entire body, with no separate FAQ block (business-listing block skipped as a plugin artifact).
- /wordpress-development-services/ rebuilt to match, all in RI's own words: slim head → 11 question blocks (platform fit, custom themes vs builders, plugin discipline, timelines, content during the build, security as architecture, performance budgets, multisite support, WooCommerce at scale, site takeovers, choosing a long-term partner) with inline links to content writing, WordPress SEO and maintenance. No separate FAQ block, matching the reference structure.
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /woocommerce-development-services/ — flow to be confirmed individually first, then built.

### R-088 — 2026-11-21 — Service pages v2, Page 36: WooCommerce Development rebuilt as essay + FAQ
- Flow confirmed individually first: the reference page is Archetype B — a prose essay (6 paragraphs) then an FAQ block (business-listing block skipped as a plugin artifact).
- /woocommerce-development-services/ rebuilt to match, all in RI's own words: slim head → 6-paragraph essay (search as a build foundation, speed engineered not rescued, mobile as the primary storefront, catalogue architecture as search strategy, scalability decided by the build, checkout & integration discipline) with an inline link to e-commerce SEO → 8 FAQs (4 from R-047 + 4 new).
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /shopify-development-services/ — flow to be confirmed individually first, then built.

### R-089 — 2026-11-21 — Service pages v2, Page 37: Shopify Development rebuilt as intro + headed sections + FAQ
- Flow confirmed individually first: the reference page is Archetype B with headed sections — an intro, three headed sections, then an FAQ block (business-listing block skipped as a plugin artifact). Their page is migration-framed; RI keeps its development focus since /shopify-migration-services/ exists separately.
- /shopify-development-services/ rebuilt to match, all in RI's own words: slim head → intro → 4 headed sections (custom theme development, functionality & app discipline, migrations treated as an SEO project with a link to the dedicated migration page, performance & search foundations with a link to Shopify SEO) → 9 FAQs (4 from R-047 + 5 new).
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /magento-development-services/ — flow to be confirmed individually first, then built.

### R-090 — 2026-11-21 — Service pages v2, Page 38: Magento Development rebuilt as Q&A-led + short FAQ
- Flow confirmed individually first: the reference page is the hybrid form — a Q&A-led body (7 headed question blocks) followed by a short FAQ block (business-listing block skipped as a plugin artifact).
- /magento-development-services/ rebuilt to match, all in RI's own words: slim head → 9 question blocks (service scope, why specialists, migration to Magento with a link to e-commerce migration, M1→M2 upgrades, security & performance as a discipline, modular feature development, multi-store & B2B, post-launch support, cost) → 4 FAQs (all from R-047).
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /webflow-development-services/ — flow to be confirmed individually first, then built.

### R-091 — 2026-11-21 — Service pages v2, Page 39: Webflow Development rebuilt as Q&A-led page
- Flow confirmed individually first: the reference page is the Q&A-led archetype — headed question blocks are the entire body, with no separate FAQ block (business-listing block skipped as a plugin artifact).
- /webflow-development-services/ rebuilt to match, all in RI's own words: slim head → 10 question blocks (integrated design/dev/SEO discipline, honest platform fit, DIY vs professional, Webflow SEO setup, CMS at content scale, migration without downtime, enterprise suitability with a link to enterprise SEO, e-commerce limits, cost, team handover). No separate FAQ block, matching the reference structure.
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /wix-development-services/ — flow to be confirmed individually first, then built.

### R-092 — 2026-11-21 — Service pages v2, Page 40: Wix Development rebuilt as landing variant (numbered stacks + FAQ + lead form)
- Flow confirmed individually first: the reference page is an older landing-style layout — intro + trust bullets, about, stats band, a numbered why-agency list, a numbered services list, a testimonial, a numbered process list, then an FAQ block (business-listing block skipped as a plugin artifact). Their stats/testimonial were NOT used; the RI version uses grounded RI figures only.
- /wix-development-services/ rebuilt in the matching landing variant, all in RI's own words: slim head + 3 trust bullets → grounded stats band → 6 numbered why-agency sections → 5 numbered services sections (consulting, support, optimisation, migration with a link to website migration, e-commerce) → 8 numbered process steps → 8 FAQs (4 from R-047 + 4 new) → lead form.
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /ecommerce-development-services/ — closes the web design & development group; flow to be confirmed individually first, then built.

### R-093 — 2026-11-21 — Service pages v2, Page 41: E-commerce Development rebuilt as short essay + FAQ (web group complete)
- Flow confirmed individually first: the reference page is Archetype B — a short prose essay (4 paragraphs) then an FAQ block (business-listing block skipped as a plugin artifact).
- /ecommerce-development-services/ rebuilt to match, all in RI's own words: slim head → 5-paragraph essay (the store as a compounding asset, platform fit over fashion with links to the three platform builds, mobile-first as the minimum, the cost of waiting, AI-era readiness) → 8 FAQs (4 from R-047 + 4 new).
- Build note: the first build attempt crashed on a syntax typo (stray parens in the paragraph list) and verification correctly caught the stale v1 file (wrong FAQ count/size); fixed and rebuilt before pushing — nothing stale was shipped.
- Verified: balanced, zero dead links, serve 200. Pushed with these records. The web design & development group (B4) is now fully rebuilt in v2.
- Next page (named in advance): /website-redesign-services/ — opens the redesign/speed/migration/CRO/PPC group; flow to be confirmed individually first, then built.

### R-094 — 2026-11-21 — Service pages v2, Page 42: Website Redesign rebuilt as process essay + FAQ (redesign/speed/migration group opens)
- Flow confirmed individually first: the reference page is Archetype B — a process essay walking the engagement stages in order with inline links, then an FAQ block (business-listing block skipped as a plugin artifact).
- /website-redesign-services/ rebuilt to match, all in RI's own words: slim head → 8-paragraph process essay (audit & inventory → competitor & user research → SEO preservation plan → wireframes & journeys → visual design → content refresh → development & integration → tested, protected launch & handover) with inline links to SEO audit, website design, content writing and website migration → 8 FAQs (4 from R-048 + 4 new).
- Build note: the same stray-paren typo as Page 41 recurred in the paragraph list (four occurrences); verification caught the stale v1 file twice (wrong FAQ count/size) and nothing stale was shipped — fixed and rebuilt before pushing.
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /website-speed-optimization-services/ — flow to be confirmed individually first, then built.

### R-095 — 2026-11-21 — Service pages v2, Page 43: Website Speed Optimization rebuilt as rich prose flow (bullets + process prose + why sections + FAQ)
- Flow confirmed individually first: the reference page is a rich layout — benefit blurbs, process paragraphs, a testimonials block, a headed why-it-matters section, cross-links and an FAQ block, with a stats band of the operator's own figures (business-listing block skipped as a plugin artifact). Their stats/testimonials were NOT used.
- /website-speed-optimization-services/ rebuilt in RI's own words with RI components: slim head + 3 trust bullets → 4-paragraph process prose (measurement first, engineering over plugins, a named contact, the server-layer audit) → 4 headed why sections (Rankings, Experience, Bounce, Conversions — with a link to Core Web Vitals services) → 7 FAQs (4 from R-048 + 3 new).
- Build note: the first build crashed because the why list was passed to the stack component as plain strings instead of heading/body pairs; verification caught the stale v1 file (wrong FAQ count/size), the pairs were fixed, and only the corrected build was pushed.
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /core-web-vitals-services/ — flow to be confirmed individually first, then built.

### R-096 — 2026-11-21 — Service pages v2, Page 44: Core Web Vitals rebuilt as rich variant (stats + numbered metric stacks + FAQ)
- Flow confirmed individually first: the reference page is a rich layout — intro + trust bullets, a stats band of the operator's own figures, numbered educational sections, numbered per-metric technique sections, a testimonial with metrics, success stories and numbered why-choose sections (an FAQ block closes the fetched remainder). Their stats/testimonial were NOT used.
- /core-web-vitals-services/ rebuilt in RI's own words with RI components: slim head + 3 trust bullets → grounded stats band → 2 numbered explainer sections (what the vitals measure; why they move rankings and revenue) → 4 numbered metric sections (LCP, INP — current metric, replacing the retired FID — CLS, FCP) → 3 numbered why-us sections → 7 FAQs (4 from R-048 + 3 new).
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /website-migration-services/ — flow to be confirmed individually first, then built.

### R-097 — 2026-11-21 — Service pages v2, Page 45: Website Migration rebuilt as short essay + FAQ
- Flow confirmed individually first: the reference page is Archetype B — a short prose essay (5 paragraphs) then an FAQ block (business-listing block skipped as a plugin artifact).
- /website-migration-services/ rebuilt to match, all in RI's own words: slim head → 5-paragraph essay (migrations fail between teams, the preservation machinery of inventories/redirects/benchmarks, risk differs by migration type with links to local SEO and the two store-migration services, launch as midpoint with monitoring and rollback, landing AI-ready) → 7 FAQs (4 from R-048 + 3 new).
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /shopify-migration-services/ — flow to be confirmed individually first, then built.

### R-098 — 2026-11-21 — Service pages v2, Page 46: Shopify Migration rebuilt as rich variant (why prose + stats + numbered stacks + FAQ)
- Flow confirmed individually first: the reference page is a rich layout — intro + trust bullets, why-migrate prose, a stats band of the operator's own figures, numbered platform-reason sections, why-choose prose with a testimonial, numbered services sections and a numbered process (business-listing block skipped as a plugin artifact). Their stats/testimonial were NOT used.
- /shopify-migration-services/ rebuilt in RI's own words with RI components: slim head + 3 trust bullets → why-migrate prose → grounded stats band → 4 numbered destination reasons (scalability, owner-run admin, security/compliance, integrations) → 5 numbered service sections (any platform, complete data, SEO preservation, design rebuild, apps/functionality) → 6 numbered process steps → 8 FAQs (4 from R-048 + 4 new, including the honest customer-password answer).
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /ecommerce-migration-services/ — flow to be confirmed individually first, then built.

### R-099 — 2026-11-21 — Service pages v2, Page 47: E-commerce Migration rebuilt as short essay + FAQ
- Flow confirmed individually first: the reference page is Archetype B — a short prose essay (5 paragraphs) then an FAQ block (business-listing block skipped as a plugin artifact).
- /ecommerce-migration-services/ rebuilt to match, all in RI's own words: slim head → 5-paragraph essay (three migrations in one — data, visibility, operations; crawlability & speed gains; category structure rebuilt around customer search; AI readiness in the plan; planning as the differentiator) → 8 FAQs (4 from R-048 + 4 new).
- Build note: one stray-paren typo in the paragraph list crashed the first build; verification caught the stale v1 file (wrong FAQ count/size) and only the corrected build was pushed.
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /website-maintenance-services/ — flow to be confirmed individually first, then built.

### R-100 — 2026-11-21 — Service pages v2, Page 48: Website Maintenance rebuilt as Q&A-led (9 blocks + short FAQ)
- Flow confirmed individually first: the reference page is Q&A-led — nine headed question blocks form the body, then a short FAQ block (business-listing block skipped as a plugin artifact).
- /website-maintenance-services/ rebuilt to match, all in RI's own words: slim head → 9 Q&A blocks (what maintenance is, what plans include, cost, annual contracts, urgent response, maintaining sites built by others, platforms, exclusions, choosing a provider) → 6 FAQs (4 from R-048 + 2 new).
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /logo-design-services/ — flow to be confirmed individually first, then built.

### R-101 — 2026-11-21 — Service pages v2, Page 49: Logo Design rebuilt as landing variant (prose + stats + numbered stacks + FAQ + lead form)
- Flow confirmed individually first: the reference page is a rich landing layout — intro prose + trust bullets, about prose, a stats band of the operator's own figures, why-a-design-company prose with numbered points, a testimonial, numbered process sections, Q&A prose and a lead form before the FAQ block. Their stats/testimonial were NOT used.
- /logo-design-services/ rebuilt in RI's own words with RI components: slim head + 3 trust bullets → strategy-first prose → grounded stats band → 5 numbered why sections (craft, strategy, collaboration, efficiency, long-term value) → 7 numbered process steps (kickoff → research → sketching → iteration → presentation → revision → delivery) → 8 FAQs (4 from R-048 + 4 new) → lead form.
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /conversion-rate-optimization/ — flow to be confirmed individually first, then built (the earlier inspection suggested a Q&A pattern; to be verified on the page itself).

### R-102 — 2026-11-21 — Service pages v2, Page 50: Conversion Rate Optimization rebuilt as Q&A-led (9 blocks + short FAQ)
- Flow confirmed individually first: the reference page is Q&A-led — nine headed question blocks form the body, then a short FAQ block (business-listing block skipped as a plugin artifact). Matches the archetype noted in the earlier 16-page inspection.
- /conversion-rate-optimization/ rebuilt to match, all in RI's own words: slim head → 9 Q&A blocks (what CRO is, our approach, defining conversions, the ideal-rate question, data analysed, budget, geographies, practices that work, recurring costs & revenue effect) → 5 FAQs (4 from R-048 + 1 new).
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /pay-per-click-ppc-services/ — closes the redesign/speed/migration/CRO/PPC group; flow to be confirmed individually first, then built.

### R-103 — 2026-11-21 — Service pages v2, Page 51: PPC rebuilt as essay + FAQ (redesign/speed/migration group complete)
- Flow confirmed individually first: the reference page is Archetype B — a ten-paragraph essay walking the PPC discipline end to end, then an FAQ block (business-listing block skipped as a plugin artifact).
- /pay-per-click-ppc-services/ rebuilt to match, all in RI's own words: slim head → 10-paragraph essay (audit first, audience targeting, search advertising, remarketing, social advertising, Amazon advertising, landing pages & tracking, smart bidding & Quality Score, ad copy testing, revenue reporting & budget reallocation) with inline links to SEO audit, flagship SEO, content writing, Amazon SEO and CRO → 8 FAQs (4 from R-048 + 4 new).
- Verified: balanced, zero dead links, serve 200. Pushed with these records. The redesign/speed/migration/CRO/PPC group (B5) is now fully rebuilt in v2.
- Next page (named in advance): /seo-consultants/ — opens the final group of six; flow to be confirmed individually first, then built.

### R-104 — 2026-11-21 — Service pages v2, Page 52: SEO Consultants rebuilt as Archetype A (4-tier consulting table + FAQ; final group opens)
- Flow confirmed individually first: the reference page is Archetype A — a large four-tier packages table with grouped feature rows, then an FAQ block.
- /seo-consultants/ rebuilt to match with RI's own consulting offer and wording: slim head → 4-tier table (Advisory / Growth / Scale / Enterprise) across four groups (Getting started, Technical direction, Content & authority guidance, Reporting & access) with a scoped-pricing note → 8 FAQs (4 from R-049 batch 6 + 4 new).
- Build note: the first build crashed because the table component expects tier name/subtitle pairs; verification caught the stale v1 file (no table present) and only the corrected build was pushed.
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /seo-contract-staffing/ — flow to be confirmed individually first, then built.

### R-105 — 2026-11-21 — Service pages v2, Page 53: SEO Contract Staffing rebuilt as rich variant with NO FAQ block
- Flow confirmed individually first: the reference page is a rich layout with NO FAQ block — intro + trust bullets, a stats band of the operator's own figures, services-offered cards, a numbered why-choose list, testimonials, staffing-model prose and contract clauses. Their stats/testimonials/clauses were NOT used; RI's models and terms are stated in RI's own words.
- /seo-contract-staffing/ rebuilt with RI components: slim head + 3 trust bullets → grounded stats band → framing prose → disciplines checklist (8 roles in 2 groups) → 5 numbered why sections → 3 numbered model sections (Embedded specialist, Dedicated remote pod, Terms plainly) → closing prose. No FAQ block, matching the reference.
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /hyper-local-seo-services/ — flow to be confirmed individually first, then built.

### R-106 — 2026-11-21 — Service pages v2, Page 54: Hyper-Local SEO rebuilt as rich educational variant (stats + numbered stacks + FAQ)
- Flow confirmed individually first: the reference page is a rich educational layout — intro + trust bullets, a stats band of the operator's own figures, numbered introduction sections, numbered mechanics sections, a testimonial, numbered strategy sections, numbered closing sections and an FAQ block. Their stats/testimonial were NOT used.
- /hyper-local-seo-services/ rebuilt in RI's own words with RI components: slim head + 3 trust bullets → grounded stats band → 3 numbered intro sections (what it is, why it matters, who benefits) → 3 numbered mechanics sections (ranking factors, Business Profile, Local Pack/geo-grids) → 3 numbered strategy sections (neighbourhood keywords, location pages with real proof, community signals) → 2 numbered closing sections → 7 FAQs (4 from batch 6 + 3 new).
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /seo-agency-for-manufacturing/ — flow to be confirmed individually first, then built.

### R-107 — 2026-11-21 — Service pages v2, Page 55: SEO Agency for Manufacturing rebuilt as process essay + FAQ
- Flow confirmed individually first: the reference page is Archetype B — a process essay walking the manufacturing engagement stage by stage with inline links, then an FAQ block (business-listing block skipped as a plugin artifact).
- /seo-agency-for-manufacturing/ rebuilt to match, all in RI's own words: slim head → 10-paragraph process essay (buyer discovery → intent mapping → specification keyword research → roadmap → product/capability page engineering → technical content → technical SEO → export markets → industry authority → AI readiness) with inline links to flagship SEO, content writing, technical SEO, international SEO and AI SEO → 8 FAQs (4 from batch 6 + 4 new).
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /local-seo-india/ — flow to be confirmed individually first, then built.

### R-108 — 2026-11-21 — Service pages v2, Page 56: Local SEO India rebuilt as rich variant (stats + numbered stacks + FAQ)
- Flow confirmed individually first: the reference page is a rich layout — intro + trust bullets, a stats band of the operator's own figures, definition prose, a client result example, how-it-helps prose, 6 numbered why-choose sections, a process walkthrough, a ranking-factors list and an FAQ block. Their stats and client example were NOT used.
- /local-seo-india/ rebuilt in RI's own words with RI components: slim head + 3 trust bullets → grounded stats band → definition and how-it-helps prose → 6 numbered why sections (sector experience, visibility beyond one platform, lead generation over rankings, dedicated team, honest reporting, built for how India searches) → 6 numbered process sections (discovery, keyword research, profile/content optimisation, citations/NAP, local links/reviews, per-location measurement) → 7 FAQs (4 from batch 6 + 3 new).
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /seo-consulting-india/ — the final service page of v2; flow to be confirmed individually first, then built.

### R-109 — 2026-11-21 — Service pages v2, Page 57 (FINAL): SEO Consulting India rebuilt as rich variant — services v2 complete, 57/57
- Flow confirmed individually first: the reference page is a rich layout — intro + trust bullets, a stats band of the operator's own figures, intro prose, testimonials, a why-experts list, 9 numbered includes sections, a consultancy-process walkthrough and an FAQ block. Their stats/testimonials were NOT used.
- /seo-consulting-india/ rebuilt in RI's own words with RI components: slim head + 3 trust bullets → grounded stats band → why-consulting prose (local market knowledge as the advantage) → 9 numbered includes sections (keyword research, content optimisation, audit, E-E-A-T, keyword mapping, content marketing direction, UI/UX, link strategy, monthly counsel) → 7 numbered process sections → 7 FAQs (4 from batch 6 + 3 new).
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- SERVICES V2 COMPLETE: all 57 service pages have now been rebuilt one at a time with per-page flows confirmed individually against the reference structure, all copy original to Rank Intelligence (R-053–R-109). Remaining generated-page groups per the roadmap: Industries (27), Locations (35), Pricing (15), Tools (23), case-study indexes (59) — to proceed under the same pacing rule (batches/pages named in advance) on the user's direction.

### R-110 — 2026-11-21 — India service pages converted to Pakistan (owner decision: no India coverage yet)
- Owner direction: Rank Intelligence does not yet offer services coverage in India, so the two India service pages are converted to Pakistan equivalents now; India pages can be added later when the business expands there.
- Content check verdict: a word swap alone was NOT sufficient — the India pages' framing (Hindi/Hinglish search, Indian city tiers, Indian market seasonality) does not match Pakistan. Both pages were fully rewritten for Pakistan in RI's own words, keeping the same rich flows: Pakistani metros and growing cities (Karachi, Lahore, Islamabad–Rawalpindi, Faisalabad, Multan, Peshawar, Quetta), English/Urdu/Roman Urdu search behaviour (plus Punjabi, Sindhi, Pashto where relevant), mobile-first and WhatsApp-led enquiries, Ramadan/Eid seasonality, and RI's genuine on-the-ground advantage — its Islamabad office.
- /local-seo-pakistan/ (229,052 bytes built) and /seo-consulting-pakistan/ (228,805 bytes built) replace /local-seo-india/ and /seo-consulting-india/. Verified: balanced, zero dead links, zero remaining India mentions in either new page.
- The old India URLs now 301 to the Pakistan pages via a repo-root _redirects file (Cloudflare Pages), with a noindex meta-refresh stub at each old path as fallback. sitemap.xml and build/pages-manifest.json updated to the Pakistan slugs; the two India builders in pages_services2.py were replaced by the Pakistan builders. Repo-wide check: no menu or cross-page links pointed at the India slugs, so no other pages needed changes.
- Verified live after push (see parity check in the session): Pakistan pages byte-identical; India URLs redirect.

### R-111 — 2026-11-21 — Industries v2 begins, Page 1 of 27: /industries/ hub rebuilt as card directory
- Owner direction: start the Industries group (27 pages) with the same one-page-at-a-time flow as services v2 — each page's flow confirmed individually against the reference structure first, built in RI's design with original RI copy, none skipped.
- The 27, in build order: /industries/ (hub), /industries/seo-for-educational/, /seo-for-health-care/, /industries/seo-for-pest-control/, /industries/seo-for-fmcg/, /industries/seo-for-fitness/, /industries/seo-for-contractor/, /industries/seo-for-plumbing/, /industries/seo-for-ecommerce/, /industries/seo-for-automotive/, /industries/seo-for-real-estate/, /industries/seo-for-travel-website/, /industries/seo-for-healthcare/, /industries/seo-for-dentist/, /industries/seo-for-b2b/, /industries/seo-for-law-firm/, /industries/seo-for-doctor/, /industries/seo-for-restaurant/, /industries/seo-for-b2c/, /industries/seo-for-cannabis/, /industries/seo-for-roofing/, /industries/seo-for-fashion-ecommerce/, /industries/seo-for-insurance/, /industries/seo-for-gaming/, /industries/seo-for-bfsi/, /industries/seo-for-delivery-services/, /industries/seo-for-ott/. Healthcare appears twice in the sitemap; the two pages will take different angles (providers/practices vs brands/systems), not duplicate content. (travel-industry-seo-case-studies is a case-study hub, not part of this group.)
- Hub flow confirmed: the reference hub is a pure card directory — title, then a grid of industry cards (name + one line), each linking to its industry page; no essay, stats or FAQ. RI's hub follows it: slim head → 26 industry cards with original one-line descriptions → one short closing paragraph on sector-shaped search.
- New builder: build/core/pages_industries.py (imports the core/services v2 components). Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /industries/seo-for-educational/ — flow to be confirmed individually first, then built.

### R-112 — 2026-11-21 — Industries v2, Page 2 of 27: SEO for Educational Websites rebuilt as guide variant
- Flow confirmed individually first: the reference page is a long-form guide — intro prose, 5 numbered benefits, a tips checklist, component sections (on-page, technical, off-page, content, local, tools, measurement), then an FAQ block (closing cross-promo sections skipped as artifacts).
- /industries/seo-for-educational/ rebuilt in RI's own words with RI components: slim head → intro prose (the researched enrolment journey, students and parents as parallel audiences) → 5 numbered benefits → priorities checklist (Foundations / Growth) → 6 numbered component sections (program keyword research, two-audience content, technical foundations, campus local SEO, ecosystem authority, enrolment measurement) → 6 FAQs.
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /seo-for-health-care/ — flow to be confirmed individually first, then built. (Angle: providers and practices — patient acquisition; the later /industries/seo-for-healthcare/ will take the brands/systems angle.)

### R-113 — 2026-11-21 — Industries v2, Page 3 of 27: SEO for Health Care rebuilt (providers & practices angle)
- Flow confirmed individually first: the reference page's captured structure is an essay/includes body closing with a 7-question FAQ block (measurement, mobile, scope, outsourcing, usage, cost, timelines).
- /seo-for-health-care/ rebuilt in RI's own words, providers-and-practices angle: slim head → intro prose (patient search journey; regulated, trust-critical category, clinician-reviewed content) → 6 numbered includes (technical foundations, local visibility/profiles, treatment & location pages, compliant credible content, reviews/reputation, AI readiness) → 7 FAQs. The later /industries/seo-for-healthcare/ will take the brands/systems angle.
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /industries/seo-for-pest-control/ — flow to be confirmed individually first, then built.

### R-114 — 2026-11-21 — Industries v2, Page 4 of 27: SEO for Pest Control rebuilt as strategy essay + FAQ + lead form
- Flow confirmed individually first: the reference page runs definition prose → keyword/challenge sections → strategy sections (keyword structure, URLs, content, local, reviews, links, mobile, speed, CRO) → summary prose → FAQ block → lead form at the end. Their statistics were NOT used.
- /industries/seo-for-pest-control/ rebuilt in RI's own words: slim head + trust bullets → intro prose (urgent, local, seasonal demand; granularity challenge) → 6 numbered strategy sections (service/area keyword architecture, substantive area pages, map pack, panic-search content, reviews engine, speed/mobile/conversion) → closing prose → 6 FAQs → lead form.
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /industries/seo-for-fmcg/ — flow to be confirmed individually first, then built.

### R-115 — 2026-11-21 — Industries v2, Page 5 of 27: SEO for FMCG rebuilt as tactics essay + advantages + FAQ
- Flow confirmed individually first: the reference page runs intro + trust bullets → intro prose → tactics prose sections → 3 advantage sections → conclusion → FAQ block (closing cross-promo sections skipped as artifacts). Their testimonials and figures were NOT used.
- /industries/seo-for-fmcg/ rebuilt in RI's own words: slim head + trust bullets → intro prose (discovery has moved from shelf to search) → 6 numbered tactics (intent-layered keyword research, audit & category architecture, product/category pages, occasion content, authority/digital PR, retail-marketplace interplay) → 3 numbered payoff sections (digital-shelf awareness, sales across channels, compounding trust) → closing prose → 6 FAQs.
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /industries/seo-for-fitness/ — flow to be confirmed individually first, then built.

### R-116 — 2026-11-21 — Industries v2, Page 6 of 27: SEO for Fitness rebuilt as guide variant
- Flow confirmed individually first: the reference page is a long-form guide — intro prose, why/importance sections, on-page sections, off-page sections, technical sections, content marketing sections, local SEO sections, then an FAQ block (closing cross-promo sections skipped as artifacts).
- /industries/seo-for-fitness/ rebuilt in RI's own words: slim head → intro prose (local, seasonal, researched membership decisions) → 3 numbered on-page sections (intent-layered keywords, class/program/location pages, visual & video content) → 3 numbered local & technical sections (profiles/map per location, mobile speed, schema) → 3 numbered off-page & content sections (community authority, content engine, member stories) → 6 FAQs.
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /industries/seo-for-contractor/ — flow to be confirmed individually first, then built.

### R-117 — 2026-11-21 — Industries v2, Page 7 of 27: SEO for Contractors rebuilt as process essay + FAQ
- Flow confirmed individually first: the reference page is a process essay — audit, competitor research, keyword mapping, Business Profile, service pages, technical structure, supporting content, authority, reviews, measurement — with inline service links, closing with an FAQ block.
- /industries/seo-for-contractor/ rebuilt in RI's own words following the same flow: slim head → 10-paragraph process essay with inline links to SEO audit, content writing and CRO → 6 FAQs.
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /industries/seo-for-plumbing/ — flow to be confirmed individually first, then built.

### R-118 — 2026-11-21 — Industries v2, Page 8 of 27: SEO for Plumbing rebuilt as strategy essay + FAQ
- Flow confirmed individually first: the reference page is a strategy essay (localised keyword research, map pack/GBP for emergency searches, specific service landing pages, review workflow, mobile click-to-call, measurement, seasonal strategy, authentic local content) closing with an FAQ block.
- /industries/seo-for-plumbing/ rebuilt in RI's own words following the same flow: slim head → 9-paragraph essay (emergency vs planned demand split, high-intent keyword research, map pack operations, specific service pages, workflow reviews, mobile-for-the-call, seasonal planning, authentic local content, booked-job measurement) with inline links to local SEO and hyper-local SEO → 6 FAQs.
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /industries/seo-for-ecommerce/ — flow to be confirmed individually first, then built.

### R-119 — 2026-11-21 — Industries v2, Page 9 of 27: SEO for E-commerce rebuilt as deep technical essay + FAQ
- Flow confirmed individually first: the reference page is a deep technical essay — keyword categorisation and cannibalisation, category pages, URL structure, content ecosystem/semantic SEO, on-page, technical (crawl budget, faceted navigation, internal linking), mobile/Core Web Vitals, product lifecycle handling, reviews/UGC, visual search, schema, links, product feeds, AI search — closing with an FAQ block.
- /industries/seo-for-ecommerce/ rebuilt in RI's own words following the same flow: slim head → intro prose → 3 foundation sections → 4 technical sections → 4 growth sections (content ecosystem, reviews, schema & feeds, visual/AI readiness) with inline links to e-commerce SEO, Core Web Vitals and AI SEO → 6 FAQs.
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /industries/seo-for-automotive/ — flow to be confirmed individually first, then built.

### R-120 — 2026-11-21 — Industries v2, Page 10 of 27: SEO for Automotive rebuilt as strategy essay + FAQ
- Flow confirmed individually first: the reference page is a strategy essay (intent-over-volume keyword strategy, technical/URL/crawl control for large inventory sites, keyword clustering and measurement, relevant backlinks, content quality, inventory update discipline, local/AI search) with inline links, closing with an FAQ block.
- /industries/seo-for-automotive/ rebuilt in RI's own words following the same flow: slim head → 7-paragraph essay with inline links to enterprise SEO, e-commerce SEO and local SEO → 5 FAQs.
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /industries/seo-for-real-estate/ — flow to be confirmed individually first, then built.

### R-121 — 2026-11-21 — Industries v2, Page 11 of 27: SEO for Real Estate rebuilt as pure Q&A
- Flow confirmed individually first: the reference page is a pure Q&A page — headed question blocks carry the whole body, with no separate FAQ section.
- /industries/seo-for-real-estate/ rebuilt in RI's own words following the same flow: slim head → 8 headed Q&A blocks (what the work involves, ongoing need, timelines, competing with portals, choosing a partner, measurement, new developments, AI search) with inline links to local SEO and hyper-local SEO. No separate FAQ.
- Build note: first attempt crashed on a missing qa_stack import in pages_industries.py; the stale v1 file was caught by verification (byte count), the import was added, and the page rebuilt and re-verified before pushing — nothing stale was pushed.
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /industries/seo-for-travel-website/ — flow to be confirmed individually first, then built.

### R-122 — 2026-11-21 — Industries v2, Page 12 of 27: SEO for Travel Websites rebuilt as pure Q&A
- Flow confirmed individually first: the reference page is a pure Q&A page — headed question blocks carry the whole body, with no separate FAQ section.
- /industries/seo-for-travel-website/ rebuilt in RI's own words following the same flow: slim head → 8 headed Q&A blocks (scope of the work, seasonality, structured data, competing with OTAs, social's contribution, travel vs tourism SEO, KPIs, payback timing). No separate FAQ.
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /industries/seo-for-healthcare/ (the brands/systems angle, distinct from /seo-for-health-care/'s providers angle) — flow to be confirmed individually first, then built.

### R-123 — 2026-11-21 — Industries v2, Page 13 of 27: SEO for Healthcare (brands/systems) rebuilt as pure Q&A
- Flow confirmed individually first: the reference page is a pure Q&A page — headed question blocks carry the whole body, with no separate FAQ section.
- /industries/seo-for-healthcare/ rebuilt in RI's own words following the same flow, deliberately angled at brands and hospital systems (distinct from /seo-for-health-care/'s providers/practices angle): slim head → 8 headed Q&A blocks (scope at system scale, system-level use, measurement, mobile's role, outsourcing, cost, timelines, and an explicit practice-vs-system distinction linking the two pages). No separate FAQ.
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /industries/seo-for-dentist/ — flow to be confirmed individually first, then built.

### R-124 — 2026-11-21 — Industries v2, Page 14 of 27: SEO for Dentists rebuilt as essay stacks + FAQ
- Flow confirmed individually first: the reference page is a long strategy essay — patient intent mapping, map pack and review signals, per-treatment pages, neighbourhood targeting and citations, technical/compliance, educational content, reputation, mobile and emergency search, voice/AI, authority, measurement — closing with an FAQ block.
- /industries/seo-for-dentist/ rebuilt in RI's own words following the same flow: slim head → intro prose → 4 foundation sections → 4 trust/experience sections → 3 frontier sections (voice/AI, community authority, patient-based measurement) with inline links to local SEO, SEO audit, AI SEO and website design → 6 FAQs.
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /industries/seo-for-b2b/ — flow to be confirmed individually first, then built.

### R-125 — 2026-11-21 — Industries v2, Page 15 of 27: SEO for B2B rebuilt as pure Q&A
- Flow confirmed individually first: the reference page is a pure Q&A page — headed question blocks carry the whole body, with no separate FAQ section.
- /industries/seo-for-b2b/ rebuilt in RI's own words following the same flow: slim head → 8 headed Q&A blocks (worth, B2B vs B2C difference with a cross-link to the B2C page, content types by buying stage, timelines, pipeline-based measurement, review cadence, strategy components, niche markets). No separate FAQ.
- Verified: balanced, zero dead links, serve 200, new copy confirmed in page. Pushed with these records.
- Next page (named in advance): /industries/seo-for-law-firm/ — flow to be confirmed individually first, then built.

### R-126 — 2026-11-21 — Industries v2, Page 16 of 27: SEO for Law Firms rebuilt as strategy essay + FAQ
- Flow confirmed individually first: the reference page is a strategy essay (technical foundation/audit, dedicated practice-area pages, seniority vs current performance, local presence as a system, quality over volume, trust and accuracy stakes, conversion experience, SEO vs paid) closing with an FAQ block.
- /industries/seo-for-law-firm/ rebuilt in RI's own words following the same flow: slim head → 8-paragraph essay with inline links to SEO audit, local SEO and PPC → 7 FAQs.
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /industries/seo-for-doctor/ — flow to be confirmed individually first, then built.

### R-127 — 2026-11-21 — Industries v2, Page 17 of 27: SEO for Doctors rebuilt as strategy essay + FAQ
- Flow confirmed individually first: the reference page is a strategy essay (why competitors outrank, compliant content, keyword cannibalisation, patient-centric UX, traffic-vs-bookings conversion, conversion tracking, review-response discipline, AI citation readiness) closing with an FAQ block.
- /industries/seo-for-doctor/ rebuilt in RI's own words following the same flow: slim head → 8-paragraph essay with inline links to health care SEO, CRO and AI SEO → 7 FAQs.
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /industries/seo-for-restaurant/ — flow to be confirmed individually first, then built.

### R-128 — 2026-11-21 — Industries v2, Page 18 of 27: SEO for Restaurants rebuilt as problem-led essay + FAQ
- Flow confirmed individually first: the reference page is a problem-and-fix essay (unclaimed/inaccurate profile, weak local authority, booking friction and speed, missing profile conversion features, PDF menus and missing menu schema, unmanaged reviews, generic vs cuisine targeting, aggregator cannibalisation of brand searches) closing with an FAQ block.
- /industries/seo-for-restaurant/ rebuilt in RI's own words following the same flow: slim head → 8 problem-led paragraphs with inline links to local SEO and delivery services SEO → 6 FAQs.
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /industries/seo-for-b2c/ — flow to be confirmed individually first, then built.

### R-129 — 2026-11-21 — Industries v2, Page 19 of 27: SEO for B2C rebuilt as strategy essay + FAQ
- Flow confirmed individually first: the reference page is a strategy essay (traffic-vs-revenue intent matching, challenging big brands via specificity, ranking volatility causes, intent-layered keyword strategy, seasonal/evergreen balance, trust signals, competing with marketplaces, business metrics) closing with an FAQ block.
- /industries/seo-for-b2c/ rebuilt in RI's own words following the same flow: slim head → 8-paragraph essay with inline links to SEO services, SEO audit and e-commerce SEO → 6 FAQs (including the B2B contrast, cross-linked both ways with Page 15).
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /industries/seo-for-cannabis/ — flow to be confirmed individually first, then built.

### R-130 — 2026-11-21 — Industries v2, Page 20 of 27: SEO for Cannabis rebuilt as essay only, no FAQ
- Flow confirmed individually first: the reference page is a strategy essay (keyword identification and categorisation, URL structure, content, reviews, visual search, backlinks, conversion optimisation) with NO FAQ block.
- /industries/seo-for-cannabis/ rebuilt in RI's own words following the same flow: slim head → 10-paragraph essay opening with the sector's defining fact (advertising restrictions make organic the ownable channel), covering intent-layered keywords, architecture, compliant content, local dispensary presence, reviews, visual discovery, in-industry authority and conversion — with inline links to local SEO, CRO and e-commerce SEO. No FAQ, matching the reference.
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /industries/seo-for-roofing/ — flow to be confirmed individually first, then built.

### R-131 — 2026-11-21 — Industries v2, Page 21 of 27: SEO for Roofing rebuilt as problem-led essay only, no FAQ
- Flow confirmed individually first: the reference page is a problem-led essay (site not structured around local intent, losing near-me searches on controllable signals, thin service pages, traffic without calls, neglected profile, review discipline, surrounding-area pages with honest map expectations, seasonal demand calendar) with NO FAQ block.
- /industries/seo-for-roofing/ rebuilt in RI's own words following the same flow, with the seasonal calendar written for RI's markets (storm/hail, hurricane, ice-dam and pre-rain maintenance windows): slim head → 8 problem-led paragraphs with inline links to SEO audit, CRO and local SEO. No FAQ, matching the reference.
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /industries/seo-for-fashion-ecommerce/ — flow to be confirmed individually first, then built.

### R-132 — 2026-11-21 — Industries v2, Page 22 of 27: SEO for Fashion E-commerce rebuilt as rich page (RI components)
- Flow confirmed individually first: the reference page is the rich marketing variant — hero with stats strip, clientele, definition essay, Q&A challenge blocks, case studies, strategy essay, pricing plans, closing Q&A block, lead form.
- /industries/seo-for-fashion-ecommerce/ rebuilt following the same flow entirely from RI's own material: slim head + trust bullets → grounded stats band → definition prose → 8 challenge sections → 3 RI case cards (Fabletics, Casper, The Vitamin Shoppe) → 7 approach sections → 3-tier scope table (Boutique/Growth/Enterprise — scope levels, no invented prices) → 6 Q&A blocks → 3 RI testimonial quotes → lead form.
- Build note: first attempt crashed on a packages_table group-shape mismatch; verification caught the stale file by size, the shape was fixed to (row, [cells]) and the page rebuilt and re-verified before pushing — nothing stale was pushed.
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /industries/seo-for-insurance/ — flow to be confirmed individually first, then built.

### R-133 — 2026-11-21 — Industries v2, Page 23 of 27: SEO for Insurance rebuilt as short essay + FAQ
- Flow confirmed individually first: the reference page is a short framing essay (non-linear insurance journeys, stage-appropriate information, trust and compliance, lead quality over traffic) closing with an FAQ block.
- /industries/seo-for-insurance/ rebuilt in RI's own words following the same flow: slim head → 5-paragraph essay → 6 FAQs, with inline links to BFSI SEO and international SEO.
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /industries/seo-for-gaming/ — flow to be confirmed individually first, then built.

### R-134 — 2026-11-21 — Industries v2, Page 24 of 27: SEO for Gaming rebuilt as problem-led essay + FAQ
- Flow confirmed individually first: the reference page is a problem-led essay (content/search-language mismatch, competitor depth and freshness, views without conversions, guides written as marketing, web/app-store disconnect, community content outranking official pages, esports windows, merchandise intent gaps) closing with an FAQ block.
- /industries/seo-for-gaming/ rebuilt in RI's own words following the same flow: slim head → 8 problem-led paragraphs with inline links to CRO, ASO and e-commerce SEO → 5 FAQs (local SEO answer written for RI's markets rather than the reference's single-country framing).
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /industries/seo-for-bfsi/ — flow to be confirmed individually first, then built.

### R-135 — 2026-11-21 — Industries v2, Page 25 of 27: SEO for BFSI rebuilt as rich page (RI components)
- Flow confirmed individually first (full page read in two passes): the reference page is the rich variant — hero with stats strip, clientele, definition essay, challenge Q&A blocks, case studies, strategy essay, plans, testimonials, lead form, closing FAQ block.
- /industries/seo-for-bfsi/ rebuilt following the same flow entirely from RI's own material: slim head + trust bullets → grounded stats band → definition prose → 8 challenge sections → 3 RI case cards (BlockFi, Monzo Bank, Current Bank) → 7 approach sections → 3-tier scope table (Institution/Growth/Enterprise — scope levels, no invented prices) → 3 RI testimonial quotes → 6 FAQs → lead form.
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance): /industries/seo-for-delivery-services/ — flow to be confirmed individually first, then built.

### R-136 — 2026-11-21 — Industries v2, Page 26 of 27: SEO for Delivery Services rebuilt as key-steps essay + RI case cards
- Flow confirmed individually first: the reference page runs head + trust bullets → key-steps essay (keyword research, competitor analysis, content, local listings, backlinks) → results/case material → conclusion → solutions strip; notably it carries NO FAQ block.
- /industries/seo-for-delivery-services/ rebuilt in RI's own words following the same flow: slim head + trust bullets → intro prose → 6 key-step sections (areas-and-urgency keyword research, map-level competitor analysis, speed-first content, local listings as backbone, relevant authority, app+web as one program) → 3 RI case cards (Instacart, Adzuna, Casper) → closing prose. No FAQ, matching the reference.
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- Next page (named in advance, final Industries page): /industries/seo-for-ott/ — flow to be confirmed individually first, then built.

### R-137 — 2026-11-21 — Industries v2, Page 27 of 27 (FINAL): SEO for OTT rebuilt as components essay + RI case cards — INDUSTRIES GROUP COMPLETE
- Flow confirmed individually first: the reference page runs head + trust bullets → intro essay on video discovery → key-components essay (URL structure, site health and audits, audience keyword research, video metadata and thumbnails, video sitemaps, speed, schema, off-platform reach) → results/case material → conclusion; NO FAQ block.
- /industries/seo-for-ott/ rebuilt in RI's own words following the same flow: slim head + trust bullets → intro prose → 7 component sections → 3 RI case cards (SetApp, Adobe, BYJU'S) → closing prose. No FAQ, matching the reference.
- Verified: balanced, zero dead links, serve 200. Pushed with these records.
- INDUSTRIES GROUP COMPLETE: all 27 pages (hub + 26 industries, R-111–R-137) rebuilt one at a time with per-page flows and original RI copy, none skipped. Remaining generated-template groups: Locations (35), Pricing (15), Tools (23), case-study indexes (59) — to proceed under the same pacing rule on the user's direction.

### R-138 — 2026-11-21 — Full 96-page audit vs. the reference site: structural diff, fixes applied, template cleanup
- Audit method: (1) local structural audit of all 96 hand-built pages — tag balance, single H1, title/meta, dead internal links, duplicate IDs, image alt coverage, header/footer integrity, and component counts checked against the recorded per-page build specs (all 81 spec'd pages matched); (2) reference flows re-fetched for all 96 pages (structure and component counts only) and diffed page by page.
- Core 12 verdict: no structural defects. All differences are the documented honest subsets (RI's real 23 clients / 21 testimonials / 10 outlets / real award honours) and asset gaps already on record.
- Services fixes (RI material only — our own case cards, testimonials, logos, grounded stats): seo-contract-staffing gained 3 case cards + 2 quotes; shopify-migration-services gained a quote + 3 case cards; core-web-vitals-services gained a quote + 3 case cards; hyper-local-seo-services gained a quote + 3 case cards; wix-development-services gained a brands strip + quote + 3 case cards; logo-design-services gained a quote + 3 case cards; website-speed-optimization-services gained the grounded stats band + closing lead form; ecommerce-content-writing-services and bfsi-content-writing-services gained the client brands strip; seo-audit checklist expanded from 10 groups / ~51 items to 15 groups / 86 items (80 audit items + 6 report-inclusion items), all in RI's own wording.
- Industries fixes: delivery-services and seo-for-ott gained 2 testimonial quotes each and their full 3 case cards (a case-key casing bug had silently dropped cards — 'Casper'/'Adobe'/'instacart' keys are mixed-case in core_data.json); FMCG gained brands strip + 3 case cards + 2 quotes; fashion-ecommerce and BFSI case grids completed to 3 cards (same key bug) and gained brands strips; pest-control gained the stats band and its lead form moved ahead of the closing FAQ to match the reference order.
- Template cleanup: a CSS code comment naming the reference site's style was neutralised in the shared style source (tpl-style.html), the mega-menu build script, the homepage and all 96 hand-built pages. It was never visible page content.
- Not defects (verified, left as built): FAQ-count deltas where structure matches; the reference's duplicated hub cards and duplicated FAQ presentations (not reproduced); the business-listing plugin block at the end of reference pages (skipped by design since R-043).
- Every fixed page re-verified locally: balanced, zero dead links, components present, serve 200. Pushed with these records in batches; live parity spot-checked per batch.

### R-139 — 2026-11-21 — Industries CSS leak: raw `.indgrid` rules rendered as visible page text
- Found during the live re-check of R-138: every Industries page showed the `.indgrid` grid rules as visible text at the top of the page (verified live on /industries/seo-for-delivery-services/, same block in all 27 local files).
- Root cause: `pages_industries.py` defined the `.indgrid` rules with no `<style>` wrapper, appended after CORE_CSS which already ends with `</style>` — the rules landed as bare text between `</style>` and `</head>` and the browser hoisted them into the visible body.
- Fix: wrapped the appended rules in their own `<style>...</style>` block in the builder; all 27 Industries pages rebuilt and verified locally (no raw CSS between `</style>` and `<body>` on any of the 96 pages; the same check confirmed services pages were unaffected).
- Push history: first push attempt denied by the approval gate in all 6 batches; retry interrupted twice by service restarts (partial landing — 11 of 27 fixed live); a single-batch retry timed out waiting for approval. Visual live sweep 2026-11-21 10:51–10:53 PST verified 11 CLEAN and 16 still LEAKING (educational, health-care, pest-control, fmcg, fitness, plumbing, real-estate, travel-website, healthcare, law-firm, restaurant, roofing, fashion-ecommerce, insurance, gaming, ott). Re-push of the 16 with R-140 below.

### R-140 — 2026-11-21 — Paragraphs rendered as vertical single letters on 33 pages (builder bug)
- Found during the visual leak sweep: on /industries/seo-for-delivery-services/ the paragraph under "Keyword research" rendered as single letters stacked vertically. Same quirk noted on other clean pages.
- Root cause: the shared helpers `qa_stack`, `essay_stack` and `prose_flow` in `pages_services2.py` all did `''.join(f'<p>{p}</p>' for p in paras)` — several builders passed a plain string as `paras`, which Python iterates character by character, producing one `<p>` per character. Local scan found the defect on 33 pages (18 services, 15 industries).
- Fix: all three helpers now wrap a string `paras` as a single paragraph (`if isinstance(paras, str): paras = [paras]`); all 33 pages rebuilt. Verified locally: zero single-character `<p>` runs remain on any of the 96 pages; the delivery paragraph is a single proper `<p>` again; sample pages balance-checked.
- Pushed with the 16 remaining leak-fix pages in 8 batches (heads 6121a2fa → ee361586). Live re-check 2026-11-21 (evening): all 27 Industries pages leak-free and all 33 character-bug pages clean — both defects confirmed gone. The 96-page audit (R-138 + R-139 + R-140) is now complete live.

### R-141 — 2026-11-21 — /services/ rebuilt to the reference page's true (rendered) flow

- Trigger: the user checked /services/ against the reference page in a browser and found our page missing most of its sections. A full VISUAL scroll-through inventory of both pages confirmed every point: the reference /services/ is a rich page (hero with image + award logos + 4-stat row, 25-logo client slider, 44 image service cards in 3 groups, 4-tab case studies, awards banner, 7-slide testimonial carousel, growth section with photo, CTA band, 6-item why-us accordion, lead form with 10 checkboxes). Ours had only a text hero, intro essay, 9-item checklist and a 20-link text directory.
- Root cause (method failure, recorded honestly): the R-050/R-138 reference checks used TEXT FETCHES, which returned only ~35 lines of the reference page — image, slider and tab sections never appear in fetched text, so the page looked essay-led. Same blind spot as the R-139 text-extraction miss. Reference flows must be confirmed VISUALLY (rendered browser) from now on.
- Rebuild (all Rank Intelligence material; reference = structure only): new hero (headline + lede + CTAs + 3 award badges + hero illustration + 4-stat row) → homepage clientele slider → service card grid with ALL 57 services in 3 groups (27 SEO & Organic Growth / 12 Content, Links & Digital / 18 Web, Development & Platforms), icon-tile cards using each service's own RI title/description → homepage case-study tabs → awards strip → testimonials → growth section (existing RI essay + 9-item outcomes checklist + portfolio paragraph) → CTA band → 6-item why-us accordion (RI's USP points) → lead form. Not replicated: the reference's Ask-AI strip and sticky bottom form bar (no RI equivalent; site furniture, not page flow).
- Verified: balanced markup, exactly 1 H1, zero dead internal links, zero single-character paragraphs; pushed as head 3238f6c4; live byte-parity exact (1,958,856 bytes) with 57 cards, hero image, stats, marquee, case section, lead form and 6 accordion items confirmed live.
- Open consequence: every other hand-built page's flow was also confirmed by text fetch, so the same class of gap may exist elsewhere. A visual re-verification of the remaining pages (inventories first, then one-page-at-a-time rebuilds where the rendered reference flow is richer) is proposed to the user; not started.

### R-142 — 2026-11-21 — Dedicated hero illustration for /services/

- At the user's request, a new services-themed hero illustration was generated for Rank Intelligence (flat vector style: analytics dashboard with growth charts, SEO magnifier, content and code cards, rising arrows; RI navy/sky/green palette on a pale-blue ground matching the hero gradient) and placed on the right side of the /services/ hero, replacing the homepage illustration the R-141 rebuild had reused.
- Asset: `img/services-hero.webp` in the project files (137 KB WebP), embedded as a data URI by build_services() in pages_core2.py. Page rebuilt (2,073,775 bytes), pushed as head 90b471c9, live byte-parity verified.

### R-143 — 2026-11-21 — Partner logos in the /services/ hero + an illustration on every service card

- At the user's request: (1) a partner logo row (6 client logos, "Trusted by teams at") now sits in the hero's right column, below the hero illustration and level with the proposal-button side; (2) every one of the 57 service cards now carries its own related illustration below the service title.
- Card artwork: four generated 4x4 illustration sheets (64 mini-illustrations in the RI navy/sky/green flat style, no text) were sliced into per-service tiles (420x315 WebP, ~4 KB each, 229 KB total) under `img/cards/<slug>.webp`, mapped to services in card order and verified visually sheet by sheet before slicing. The builder embeds each tile as a data URI under the card title.
- Verified: 57 card images + 6 partner logos in the built page, balanced markup, zero dead links; pushed as head 7b5dd00a; live byte-parity checked.

### R-144 — 2026-11-21 — /services/: realistic card photos (icons removed) + realistic hero with float items

- User correction to R-143: the card artwork should be real-looking, service-related images like the reference page uses — not flat icons — and the card icon tiles should be removed; the hero should be a real-looking image with float items.
- Done: four new PHOTOREALISTIC 4x4 sheets (64 scenes: laptop analytics, code/servers, shop owners, warehouse, creators, factory, bazaar, designers, developers, server rooms…) were generated, visually checked cell by cell against the service order, and sliced into `img/cards-real/<slug>.webp` (400x400, 761 KB total). All 57 cards now show a realistic photo below the title; the icon tiles are removed from the card markup entirely.
- Hero: the flat illustration was replaced with a realistic photo (growth team reviewing campaign charts, cropped from the sheet at native resolution, `img/services-hero-real.webp`) plus the reference pattern's float items: a small floating photo card (smartphone local-search scene, bottom-left overlap) and a floating stat chip (+520% traffic growth — travel case study, RI's own case figure) at the top-right. Floats collapse gracefully on mobile. The partner logo row from R-143 stays below the hero image.
- Verified: 57 card photos, 0 icon tiles, both floats present, balanced markup, zero dead links; pushed as head a95b3491 (3.04 MB file); live byte-parity checked.

### R-145 — 2026-11-21 — /services/: hero portrait + faces strip, stats band, one-row client slider, tabbed services, Our Work, testimonial carousel, why-it-matters photo, icon outcomes

- User direction with three reference screenshots (layout patterns only; all copy, numbers, people and images are RI's own or newly generated): (1) remove the "Trusted by teams at" partner row from the hero; (2) remove the 3 award certificates below the proposal buttons and put the homepage hero's partner strip there instead; (3) replace the hero image with a created realistic portrait in the style of their hero photo; (4) build the hero statistics band in their style; (5) client slider one row only; (6) services as switchable tabs; (7) Our Work as 4 tabs with 3 cards each; (8) testimonials restyled like their testimonial card; (9) Why It Matters gets a centered pill and a real-looking image on the right; (10) Outcomes gets a pill and an icon per bullet.
- Done: hero now uses a newly generated realistic portrait (professional in a light suit, bright glass office) with the float photo card and +520% chip kept; below the proposal buttons sits the homepage hero's own CMO faces strip ("Rank Intelligence is the CMO's most preferred partner", extracted from index.html); certificates and the Trusted-by row are gone. Statistics band: white rounded card, 2x2 grid, colored icon circles (blue/green/orange/purple) with RI figures — 100+ Brands Scaled, 18 Documented Case Studies, 1,200% Peak Client Growth, 50+ Awards Won (the reference's 3.1B/39M figures were NOT used).
- Client slider rebuilt as a single-row marquee (23 logos). Services are now 3 switchable tabs (one shared tab script, no page reload). Our Work: 4 tabs (Website Traffic, Lead Generation, Revenue Growth, Content Marketing) x 3 RI case cards = 12. Testimonials: 6 homepage testimonials in the reference card style — photo on a colored disc, name + role, quote with the results sentence highlighted in orange — as an auto-rotating carousel with dots (no hover-pause, per standing rule). Why It Matters: centered pill + two-column layout with a newly generated realistic team photo on the right. Outcomes: pill + 9 bullets, each with its own icon in a colored circle.
- Also fixed a latent R-144 CSS specificity bug found during this rebuild: `.svchero-img img` (0,1,1) outranked `.floatimg` (0,1,0), so the float photo could render full-width; image rules are now scoped per class.
- Verified: 7 tab panels (3+4), 57 card photos, 6 slides/6 highlights, 12 work case cards, 4 stat items, faces strip present, removed elements confirmed absent, balanced markup, zero dead links; pushed as head 61316042; live byte-parity checked.

### R-146 — 2026-11-22 — /services/: centered pills, partners strip in hero, horizontal stats, 50% card images, brand logos on cards, 10-feature Why RI

- User direction (with screenshots of the reference pill style and of the live stats band): (1) every section gets a pill like the reference's (lavender, uppercase, letterspaced) centered at the top; (2) hero image on the right side only; (3) the user-supplied partners-logos strip (Google/Meta/LinkedIn/Microsoft/TikTok/Shopify partner badges, uploaded by the user) goes in the hero below the proposal buttons and above the CMO faces strip; (4) statistics band redesigned as one horizontal line; (5) service card images reduced to 50%; (6) every Our Work card shows its client/brand logo; (7) every testimonial shows its brand logo at the top-right; (8) Why Rank Intelligence becomes 10 features in 2 columns.
- Done: 9 centered lavender pills (Our Services, Our Clientele, What We Do, Our Work, Awards & Recognition, Testimonials, Why It Matters, Outcomes, Why Rank Intelligence) in the reference pill style. Hero: single portrait on the right (the floating photo card was removed; the +520% stat chip stays), partners-logos.webp embedded below the buttons above the CMO strip. Stats band is now a 4-across horizontal row (wraps to 2x2 on tablets). Card photos are 50% width, centered.
- Our Work tabs re-picked so every card can carry a real logo: Website Traffic, App Downloads, Website Optimization, Content Marketing — 12/12 cards show the brand logo (logo lookup handles the 'X logo' key format plus aliases for Monzo Bank/Current Bank/123Reg; the three clients with no logo asset on record — BioDigital, MyVitaminStore.pk, Instacart — sit in the two categories not selected). Testimonials: each of the 6 slides now shows its brand logo at the top-right corner (from the testimonial's own logo field).
- Why Rank Intelligence: accordion replaced by a 2-column grid of 10 numbered feature cards — the original 6 plus Transparent Reporting, Revenue-First Planning, One Integrated Team and A Documented Case Record, all grounded in claims already published on the site.
- Verified: 9 pills, partners strip present, float photo gone, 12/12 work logos, 6/6 testimonial logos, 10 features, 57 card photos, balanced markup, zero dead links; pushed as head e59db194; live byte-parity checked.

### R-147 — 2026-11-22 — /services/: hero pill left + one-line CMO strip, AI citation badge, full-width card images, homepage case section restored, headings centered

- User corrections, all applied: (1) the CMO faces caption ("Rank Intelligence is the CMO's most preferred partner") must sit on ONE line — caption is now nowrap with no width cap; (2) the hero pill ("Our Services") moves to the LEFT, directly above the H1 (all other section pills stay centered); (3) an AI citation badge in the style of the user's screenshot ("Get cited in" + Google, ChatGPT, Perplexity, Gemini and Claude glyphs in white circles) sits at the bottom-left of the hero portrait, slightly above the bottom edge, two-thirds on the image and one-third hanging off it (collapses inward on mobile); (4) service card images now span the full card width at the same displayed height as the 50% version (170px, object-fit cover).
- Our Work: the user rejected the R-146 custom case cards outright ("can not simply import homepage cards here?"). They were right — the custom cards were a downgrade. The whole custom block (cards + logo lookup) is deleted and the section now imports the homepage's own Case Studies section (section('cs-h')) unchanged, with its auto-rotate script restored. Standing lesson recorded: when a homepage component exists, import it — never rebuild a lookalike.
- Outcomes: heading centered; the "The proof is in the portfolio:" paragraph removed completely. Why Rank Intelligence: heading centered.
- Verified: hero pill left (8 centered pills remain), citation badge with 5 glyphs, CMO nowrap rule live, 57 card photos with the full-width rule, zero custom work cards, proof text absent, both headings centered, balanced markup, zero dead links; pushed as head 6d3d9aeb; live byte-parity checked.

### R-148 — 2026-11-22 — /services/: alternating section colours with contrast check

- User asked for section colour contrast / alternation. Audit found the page was mostly white-on-white: Clientele, Services, Testimonials, Why It Matters and Outcomes all sat on white, broken only by the hero gradient, the grey case-studies and CTA bands, white awards and the grey lead band.
- Fix: Services (What We Do), Testimonials and Outcomes now use the homepage's own alternate tint #F4F2FE, giving a clean rhythm — hero gradient / white / tint / grey / white / tint / white / tint / grey / white / lead grey. Contrast verified numerically on both grounds: headings #102088 13.3:1 on white and 12.0:1 on the tint, body #414E6B 8.3:1 / 7.5:1, muted #5A6B8C 5.4:1 / 4.9:1, pill text 12.9:1 — all pass WCAG AA. Pushed as head 22ba946a (with R-149).

### R-149 — 2026-11-22 — /services/: duplicate "Our Work" pill removed

- User spotted two pills over Our Work: the homepage case-studies section carries its own "Our Work" pill, and R-147 had added a second one above it. The added pill is removed; the section's own pill remains. Pushed as head 22ba946a (with R-148).

### R-150 — 2026-11-22 — /services/: broken section-to-section gap fixed

- Cause: the "Awards & Recognition" pill added in R-146 was a bare element floating between the grey Our Work section and the white Awards section, on neither section's background and with its own margins — a visible broken strip in the section flow. It now sits inside a white band with the awards section's own background and top padding, so it reads as the top of that section; the generic pill-row margin was also tightened (22px to 16px) to match the in-section pills. Verified: zero stray elements between sections. Pushed as head f473f85e; live byte-parity checked.

### R-151 — 2026-11-22 — /services/: real AI platform logos in the "Get cited in" badge

- User asked for the real platform logos instead of the R-147 approximations. The four drawn approximations (OpenAI knot, Perplexity mark, Gemini sparkle, Claude starburst) are replaced with the platforms' official logo artwork from the Simple Icons set (CC0), stored locally at `img/cite-logos/` (openai.svg, perplexity.svg, googlegemini.svg, claude.svg) and inlined by the builder at build time — no external requests on the page. The multicolor Google G was already the genuine logo and is unchanged.
- Verified in the built page and live: the real OpenAI knot path, Perplexity title/mark, Gemini brand fill and Claude brand fill are all present in the badge; approximations gone. Pushed as head cabd4d7d; live byte-parity checked.

### R-152 — 2026-11-22 — /services/: uniform section padding, a centered button under every section, India→Pakistan card swap

- Padding: the page's own sections were running at 44px while the site standard (and every imported section) is 72px. All /services/ sections now use a uniform 72px top and bottom (hero included; the Awards pill band and the Outcomes inline offset were folded into the same rhythm). Scoped to this page only — the shared core CSS is untouched.
- Buttons: every section now ends with a centered orange button — Clientele "View Case Studies" (/case-study/), What We Do "Get Free Proposal" (#lead), Our Work "View All Case Studies" (/case-study/, on a matching grey band under the imported section), Awards "View All Awards" (/awards/, matching white band), Testimonials "Read All Testimonials" (/testimonials/), Why It Matters "Start Your Growth Plan" (#lead), Outcomes "Get Free Proposal" (#lead), Why Rank Intelligence "Get Started" (/get-started/). All targets verified live pages; zero dead links.
- India→Pakistan: the two cards fed from the old India data now read "Local SEO Services in Pakistan" and "SEO Consulting in Pakistan", descriptions swapped the same way ("Indian businesses" becomes "Pakistani businesses" by the same word swap). The only remaining "India" on the page is "Indianapolis" inside a client's own testimonial — left untouched.
- Verified: 8 section buttons, both Pakistan cards, padding override live, balanced markup; pushed as head 3021330d; live byte-parity checked. (Process note: two edit passes aborted safely on stale anchors before the real source strings were read — nothing partial was ever written or pushed.)

### R-153 — 2026-11-22 — /about/ rebuilt to the reference page's rendered flow (core-pages round, page 1 of 11)

- Round opened by the user: the 11 remaining core pages (about, history, teams, clients, testimonials, proven-results, awards, contact-us, get-started, careers, media) are reviewed and rebuilt one at a time — reference page's rendered flow confirmed visually first (browser scroll-through, never text fetch), then rebuilt on the same slug with RI colours, RI case studies/testimonials/data, generated photos in place of the reference's, and the homepage + /services/ rules applied (pills, 72px sections, alternating colours, centered section buttons, homepage components imported, not rebuilt).
- Reference /about/ flow (structure only): photo hero with dark overlay (breadcrumb, pill, heading, paragraph, 3 checkmarks, CTA) → 2-col intro (photo + heading + 2 paras + outlined button) → tinted 6-stat band → unheaded 7-badge awards strip → 18-logo static grid → grey 3-card case section with centered button → 4-card team grid → recognition text + video → 3 stacked horizontal testimonial cards → pre-footer band (AI-ask card + 2×2 stats). Not replicated: sticky proposal bar and chat widget (site furniture, no RI equivalent — same call as /services/).
- RI build: generated photos (team hero, illuminated "Rank Intelligence" sign intro portrait, 2×2 pod sheet sliced into 4 pod photos, awards wall); RI's own copy from the R-050 build reworked into the flow; 6 grounded stats; 7 RI award badges (no captions — badge names are not on record); 18 client logos; 3 case cards via the existing case_card component; team section kept as 4 specialist POD cards (RI leadership names/photos still not on record — no people invented); the reference's video slot is a photo panel (RI has no video); testimonials as 3 horizontal cards from RI's own review data with brand logos; pre-footer band pairs an "Ask an AI about us" card (real platform logos from img/cite-logos) with a 2×2 RI stats grid. No lead form (core rule: only contact/get-started carry it).
- Verified: 1 H1, 10 sections in flow order, 8 pills, 4 centered section buttons, balanced markup, zero dead links; pushed as head c5ddc599; live byte-parity checked.

### R-154 — 2026-11-22 — /history/ rebuilt to the reference page's rendered flow (core-pages round, page 2 of 11)

- Reference /history/ flow (structure only, visually inventoried): photo hero (breadcrumb, pill, heading, paragraph, 3 checkmarks, CTA, review-platform rating row) → long central-line vertical timeline (~22 dated cards alternating sides + 5 centered "Annual Highlights" blocks, no section heading) → Ask-AI + 2×2 stats band directly above the footer. Sticky proposal bar and chat widget not replicated (site furniture).
- RI build: generated celebration photo hero with RI's rating chips (star rows + "Top rated on Clutch / Trustpilot", matching RI's existing approved copy — no numeric scores, none are on record). Timeline re-skins RI's existing R-050 era entries into the alternating central-line design: 7 era cards (The start, Growth, Platform, Recognition, Scale, AI era, Today) + 3 navy era-highlight blocks. Era labels kept instead of dates — RI's dated milestones are still not on record (only the "since 2015" anchor, which the hero now states), so no dates were invented; the card count is an honest subset of the reference's 27 nodes. One correction to the reused copy: the old "4.9/5 average client rating" line in the Recognition highlight was dropped for the same reason. Ask-AI band imported from the About build.
- Verified: 1 H1, 7 era cards, 3 highlights, balanced markup, zero dead links; pushed as head 8d3f2e1a; live byte-parity checked.

### R-155 — 2026-11-22 — /teams/ rebuilt to the reference page's rendered flow (core-pages round, page 3 of 11)

- Reference /teams/ flow (structure only, visually inventoried): white centered hero (heading + orange underline + intro line) → 5 leadership cards in a 2+2+1 grid (pale-blue band, circular portrait overlapping, name, bold role, bio, social icon) → caps heading + 1 partner card → people section (pill, big group photo left, text + jobs button right) → dark CTA/form band (pitch + 4 checks + button left, 2-field form card right) → Ask-AI + 2×2 stats band → footer.
- RI build: the 6 person-card slots are filled with RI's specialist pods, not invented people (leadership names/photos still not on record) — 5 pod cards in the same 2+2+1 build with initial medallions in place of portraits (SEO Strategy, Technical SEO, Content Writing, Digital PR & Links, Web Development), then "Our Technology Partner" caps heading with the SERPLoft™ Platform Team card, reusing RI's vetted R-050 pod copy. Social icons omitted (no pod socials exist). People section reuses the About team photo with RI's "A team that wins together" copy and a careers button. The reference's form card is replaced by a "How it starts" 3-step card — RI's lead form stays only on contact/get-started per the core rule, and no non-working form was faked. Ask-AI band as on About/History.
- Verified: 1 H1, 6 cards, 3 steps, balanced markup, zero dead links; pushed as head 38d30f4c; live byte-parity checked.

### R-156 — 2026-11-22 — /clients/ rebuilt to the reference page's rendered flow (core-pages round, page 4 of 11)

- Reference /clients/ flow (structure only, visually inventoried): dark photo-collage hero (breadcrumb, pill, heading, paragraph, 3 orange checks, CTA, ratings row) → filter bar (14 pills, working industry filter) → one long ungrouped list of 158 client cards (banner image left 36%, domain label + uppercase name + orange rule + description right 64%, no per-card CTA) → Ask-AI + 2×2 stats band → footer.
- RI build: generated collage hero with RI rating chips (no numeric scores — none on record); filter bar with All + the 18 industries actually present in RI's client data, with a working click filter; 23 client cards from RI's CLIENT_INFO (the honest subset of the reference's 158) — case-study screenshot as the banner image for the 15 listed clients who have one, a logo panel for the other 8; industry label, name, orange rule and RI's own directory description on each card. Ask-AI band as on the other core pages.
- Verified: 1 H1, 23 cards, 19 pills, balanced markup, zero dead links; pushed as head ff2b7745; live byte-parity checked.

### R-157 — 2026-11-22 — /testimonials/ rebuilt to the reference page's rendered flow (core-pages round, page 5 of 11)

- Reference /testimonials/ flow (structure only, visually inventoried): dark dotted hero (breadcrumb, outlined pill, heading, paragraph, 3 green checks, CTA, two 5-star platform rating blocks; 3×3 circular portrait collage right with one orange rating tile) → full-width featured video → one long stack of ~102 horizontal testimonial cards (client screenshot left 40%, avatar + name + role + company logo top-right + quote right 60%) → Ask-AI + stats band → footer.
- RI build: dark dotted hero in RI navy with RI's own copy, green-check trust points and star blocks (no numeric ratings — none on record); the collage is 8 RI reviewer portraits + an orange tile carrying the on-record count "21 client reviews". RI has no video, so the featured-video slot holds a featured-review panel (RI's first review, large on navy) instead of a fake player. The stack carries all 21 RI testimonials in the reference card build — the client's case-study screenshot as the left image where the reviewer's company has one, their portrait otherwise; avatar, name, role, brand logo and the full quote. The reference's per-card "verified" check was not replicated (it would imply third-party verification RI cannot claim). Ask-AI band as on the other core pages.
- Verified: 1 H1, 21 cards, 9 collage tiles, balanced markup, zero dead links; pushed as head 17235bf6; live byte-parity checked.

### R-158 — 2026-11-22 — /proven-results/ rebuilt to the reference case-study page's rendered flow (core-pages round, page 6 of 11)

- Reference /case-study/ flow (structure only, visually inventoried): pastel-gradient hero (breadcrumb, heading, paragraph, trusted-by line, white 2×2 stats card; portrait right with 4 floating badges) → sticky left "Filter By" sidebar (All reset + collapsible accordion groups) beside a 3-column grid of 172 case cards (tall image, client logo, title with the key figure highlighted green; a few video cards) → Ask-AI + stats band → footer.
- RI build: pastel RI hero reusing the services portrait with the same badge family (metric chip, partner strip, real-AI-logos citation pill, "Powered by SERPLoft™"); stats card with RI figures. The grid holds RI's 18 real cases in the reference card build — screenshot, client logo (15; wordmarks for BioDigital, MyVitaminStore.pk and Instacart, who have no logo on record), and the case headline with every metric highlighted green. The sidebar filters genuinely work across three accordion groups (Goals 6, Industries 13, Brands 18) with an All reset; RI has no video cases, so the video-card variant is absent. Ask-AI band as on the other core pages.
- Verified: 1 H1, 18 cards, 37 filter options, 18 highlighted metrics, balanced markup, zero dead links; pushed as heads be65ebd1 + de13cc6f (logo-alias fix); live byte-parity checked.

### R-159 — 2026-11-22 — /awards/ rebuilt to the reference page's rendered flow (core-pages round, page 7 of 11)

- Reference /awards/ flow (structure only, visually inventoried): photo hero (breadcrumb, pill, heading, paragraph, 3 checks, CTA, rating row) → blue-gradient featured banner (heading + paragraph + white CTA left, trophy photos right) → one long 3-column grid of 142 award cards (badge photo on a blue-gradient top; white body with awarding-body label, category heading, short project line; no heading, filters or pagination) → Ask-AI + stats band → footer.
- RI build: celebration-photo hero with RI copy and star chips; blue-gradient banner reusing the generated awards-wall photo with a white CTA to Testimonials; the grid carries RI's full on-record wall — the 8 award badges with their established names/captions plus the 9 platform rating badges with their established rating lines — in the reference card build (17 cards, the honest subset of 142). No new award names, years or ratings were created; all card text derives from RI's existing R-050 record. Ask-AI band as on the other core pages.
- Verified: 1 H1, 17 cards, balanced markup, zero dead links; pushed as head 33259755; live byte-parity checked.

### R-160 — 2026-11-22 — /contact-us/ rebuilt to the reference page's rendered flow (core-pages round, page 8 of 11)

- Reference /contact-us/ flow (structure only, visually inventoried): pale hero band with centred heading, then two columns — contact details + socials + embedded map left, white form card right (name, email, phone, website, a "how is SEO managed" dropdown, 10 solution checkboxes, submit, SSL note) → second office as a white card with its own map → FAQ accordion (6, first open) → Ask-AI + stats band → footer.
- RI build: same flow with RI's real components — the form card holds RI's actual lead form extracted from the shared template (all 5 fields including the same "how are SEO activities managed" dropdown, all 14 service checkboxes, consent), not a rebuild. Left column: the published call/WhatsApp number (+44-7782259462), the Orlando address, the footer's own social buttons, and a live Google Map embed for Orlando. Second office card: Islamabad address + number + map embed. Six original contact FAQs in an accordion (process answers only — the free audit → strategy call → proposal steps already on record; no response-time or other new claims). No email address is shown: none is on record for RI. Ask-AI band as on the other core pages.
- Verified: 1 H1, 1 lead form with 14 checkboxes, 2 map embeds, 6 FAQs, balanced markup, zero dead links; pushed as head fb32b2ec; live byte-parity checked.

### R-161 — 2026-11-22 — /get-started/ rebuilt to the reference proposal page's rendered flow (core-pages round, page 9 of 11)

- Reference check: the reference has no proposal page at /get-started/ (that URL is their Plans/Packages page); their free-proposal destination is /get-demo/, reached from the "Get Free Proposal" button. RI's /get-started/ is the proposal page, so it was rebuilt to the /get-demo/ flow (structure only, visually inventoried): bright-blue page, heading + 3-step vertical numbered timeline left, sticky white lead-form card right; below, a client-logo strip and a 6-card proof mosaic (client-count card, two small award cards, a wide dark awards card, a testimonials card with an 18-headshot grid, a success-stories card with photo collage). Their page has no footer; RI's keeps the standard site header/footer.
- RI build: RI navy-blue ground; the 3 steps are RI's on-record process (free audit → strategy call → written proposal); the form card holds RI's real lead form extracted from the shared template (5 fields incl. the business field, dropdown, all 14 service checkboxes, consent) with the SSL note; the mosaic is filled entirely with RI proof — 100+ brands card, a real award badge card, a platform-ratings card, the wide awards card with the generated awards photo (50+), the testimonials card with 18 RI reviewer headshots (21 reviews), and the success-stories card with 3 real case screenshots (18 studies, up to 1,200%). The earlier R-050 get-started build (steps → plans → quote wall → form, from the old text-fetch flow) is superseded.
- Verified: 1 H1, 1 lead form with 14 checkboxes, 3 steps, 6 mosaic cards, balanced markup, zero dead links; pushed as head 2eb5ea99; live byte-parity checked.

### R-162 — 2026-11-22 — /careers/ rebuilt to the reference careers destination's rendered flow (core-pages round, page 10 of 11)

- Reference check: the reference's /careers/ is not a marketing page — it redirects to a third-party job portal (HROne). Its rendered flow (structure only, visually inventoried): dark band, "Current Vacancies" heading with underline accent, a search/filter bar (title search, location and experience dropdowns, search button), a stack of 4 job cards (title + job-ID pill + Apply link; metadata grid of function / experience / openings / work mode / location), and a 3-card sidebar (My applications / Can't find your job — Drop CV / Share listing). No hero, culture, perks or testimonials on their page.
- RI build: the portal layout inside RI's normal site chrome — vacancies heading with the accent underline, a working filter bar (live title search + location dropdown over RI's actual listing locations), RI's 6 on-record openings as portal-style cards (ID pills RI-01…RI-06, Apply links to the contact page — RI has no ATS or careers email on record — and a metadata grid of department / location / employment type, the fields RI's listings actually carry; experience ranges and opening counts were not invented). Sidebar adapted to RI truths: "Can't find your job?" (RI's existing send-your-profile line), "Two offices, one team", and a working share button (copies the page URL). RI's existing perks row and hiring note are kept below the portal layout (the reference page has none — flagged as RI's own addition, not part of their flow).
- Verified: 1 H1, 6 job cards, 3 sidebar cards, 4 perks, balanced markup, zero dead links; pushed as head e7523343; live byte-parity checked.

### R-163 — 2026-11-22 — /media-coverage/ rebuilt to the reference page's rendered flow (core-pages round, page 11 of 11 — ROUND COMPLETE)

- Reference /media-coverage/ flow (structure only, visually inventoried; found via their About page — /media/, /press/ and /newsroom/ are 404s there): dark press-collage hero (breadcrumb, white pill, headline, paragraph, 3 orange checks, CTA, rating row) → one long 3-column grid of 51 press cards (16:9 banner with the outlet masthead inside the image, headline, calendar date + outlined "Read Now" button) → Ask-AI + stats band → footer.
- RI build: generated press-collage hero with RI copy and star chips; the grid carries RI's 10 on-record outlets (Forbes, HuffPost, Entrepreneur, MarketWatch, Search Engine Land, SEJ, SEMrush, HubSpot, ahrefs, Marketplace Pulse) in the reference card build — tinted 16:9 banner with the outlet's real logo as the masthead, RI's own coverage line as the headline, a coverage-type tag, and a "Visit Outlet" link to the outlet's homepage. Honest gaps kept: RI has no article dates or article URLs on record, so cards carry no dates and no "Read Now" links (a homepage link labelled as the article would misrepresent). Ask-AI band as on the other core pages.
- Build note: the first build attempt crashed (the splice had removed the module-level OUTLETS definition) and a stale file was pushed in that pass (head 3a3e2bb0, content unchanged from R-050); fixed by reading DATA['outlets'] inside the function, rebuilt, verified and re-pushed as head f023aa81. Verified final: 1 H1, 10 cards, balanced markup, zero dead links; live byte-parity checked.
- ROUND COMPLETE: all 11 core pages left after /services/ have now been visually inventoried on the reference and rebuilt with RI design and RI content — About R-153, History R-154, Teams R-155, Clients R-156, Testimonials R-157, Proven Results R-158, Awards R-159, Contact R-160, Get Started R-161, Careers R-162, Media Coverage R-163. Together with /services/ (R-141–R-152), all 12 core pages now follow rendered reference flows.

### R-164 — 2026-11-22 — Homepage button pass (user-directed)

- Our Work: the "View All Case Studies" button that only appeared inside the Content Marketing tab is removed; a persistent centred "Read all Case Studies" button now sits below the case cards, visible on every tab, in the Testimonials section's button style (.btn.outline — white, ink border, 8px radius).
- All homepage section buttons are now rectangular with rounded corners: the .btn family already was (8px); the pill-shaped section tab buttons (.tabs button — Performance, Case Studies) changed from 999px to 10px radius. Hover colours kept as designed; :active press colours added where none existed (.btn → #006400, .btn.outline → #E6E9F0, .btn.orange → #D96214, tabs → #E3E6EE; unselected tabs also gain a grey hover).
- Hero buttons and the header CTA keep their existing design and colours, per the user's note. Verified: balanced markup, new button present once, old in-tab button gone; pushed as head 78410f0e; live byte-parity checked.

### R-165 — 2026-11-22 — /services/ button pass (user-directed)

- Section buttons (.secbtn) restyled from the orange pill to the homepage's outline-button design: white, ink 1.5px border, 8px radius, 48px min-height, grey hover (#F5F5F5) and active (#E6E9F0) colours. The page's tab buttons followed: services group tabs (.tabbtn) and the imported Case Studies tabs are now 10px-radius rectangles with hover/active colours (page-scoped override for the imported section).
- Buttons removed, as directed: Clientele ("View Case Studies"), Awards ("View All Awards"), Outcomes ("Get Free Proposal"), Why Rank Intelligence ("Get Started"). Kept: What We Do ("Get Free Proposal"), Our Work ("View All Case Studies"), Testimonials ("Read All Testimonials"), Why It Matters ("Start Your Growth Plan"). Hero buttons untouched.
- Build repair: build_services called section() without importing it (latent since a pre-round edit); a local `from build_core import section` was added — no output change beyond this pass. Verified: exactly the 4 kept buttons remain, balanced markup, zero dead links; pushed as head a8b867db; live byte-parity checked.

### R-166 — 2026-11-22 — /services/ clientele section bottom padding restored (user-reported)

- The Our Clientele slider section carried an inline padding-bottom:6px left over from when the section's button (removed in R-165) supplied the visual bottom space; without the button the slider sat almost on the next section. The inline override is removed, so the section takes the standard .c2sec rhythm — 72px top and 72px bottom, equal as directed.
- Verified: section tag clean, balanced markup; pushed as head 6e972dcf; live byte-parity checked.

### R-167 — 2026-11-22 — All-core-pages audit pass: buttons, layout, images, colors (user-directed)

- Programmatic audit of all 12 core pages (homepage + /services/ + the 11 rebuilt pages) against the R-164/165/166 standards, then fixes at builder level, all 12 inner pages rebuilt and re-audited clean.
- Buttons: About's two ghost buttons ("Read Our Story", "See Our Awards") had NO CSS rule at all and rendered as plain links — .btnghost now defined to the standard outline design with hover/active. Clients filter pills 999px -> 10px rectangular + :active. Awards white banner button 999px pill -> 8px + hover/active. Careers Apply + sidebar outline buttons 999px -> 8px + active states; careers search button green aligned to the site palette (#00A651 / hover #008000 / active #006400), corners 10px. Media "Visit Outlet" 999px -> 8px + active. Proven-results sidebar All-reset and filter options gained hover/active. Contact "View Services" link gained hover/active. All 9 Ask-AI bands' round buttons gained hover/active tints. Shared stylesheet: .btn gained an :active press state (covers contact-us / get-started form buttons and all inner pages using the shared button).
- Layout: Teams carried a flush inline padding-top:6px on one section (same defect class as R-166) — removed, standard rhythm restored. No other flush sections found.
- Images: no broken or missing images on any core page (all embedded); the homepage's empty-src <img> tags are placeholders its testimonial rotator fills by script — working as designed, left alone.
- Hero buttons untouched on every page, per instruction (the only remaining audit flags are the deliberate hero exceptions).
- Verified: all 12 pages tag-balanced, zero dead internal links; pushed in 4 batches (final head 9debfc2b); live byte-parity exact on all 12 pages.

### R-168 — 2026-11-22 — /services/ clientele slider gap below heading (user-directed)

- The logo slider sat 6px under the "Brands that trust Rank Intelligence" heading; the gap is now 32px (.svcclients margin-top), matching the page's internal section spacing.
- Verified in the build and live with byte-parity.

### R-169 — 2026-11-22 — Heading alignment rule applied across all core pages (user-directed)

- Rule: every section heading top-center; hero headings left; exceptions only where a heading belongs to a column, card, band or sidebar.
- Full audit of every H1/H2 on all 13 core pages (homepage + /services/ + 11 rebuilt). Already compliant: homepage (section headings centered via its center wraps), About (.abh2c headings centered), Teams (caps heading centered), Get Started proof heading and Careers perks heading centered, Services Clientele/Testimonials/Why It Matters/Outcomes/Why RI headings centered.
- Legitimate exceptions kept: all photo-hero H1s left; Teams and Testimonials heroes centered by their reference design; column headings (About intro + recognition, Teams people + CTA band, Awards banner, Proven hero, Get Started steps/form card); card titles (Clients, Media); Proven "Filter By" sidebar header; homepage CTA-band and Proudly Featured header-block headings (two-column bands).
- Fixed (2): /services/ "What We Do" heading was left-aligned in a full-width section — now centered. /contact-us/ FAQ heading (.cfh2) was text-align:left — now centered.
- Verified in builds; pushed; live byte-parity checked on both pages.

### R-170 — 2026-11-22 — Collapsed About "Who We Are" image: root cause fixed at the shared stylesheet (user-reported)

- Symptom (verified by live measurement): the About intro photo rendered 49px wide x 520px tall — a thin vertical strip showing only the middle of the sign; the text column had expanded to 1042px of the 1140px section.
- Root cause: the shared stylesheet (tpl-style.html, extracted from the homepage) carried the homepage rule section h2{white-space:nowrap}. On inner pages, any long H2 inside a grid column cannot wrap, so the column's minimum width becomes the heading on one line (~1038px here) and the neighbouring photo track is starved to the leftover space. The image file and its own CSS were never broken.
- Fix: white-space:nowrap removed from section h2 in tpl-style.html (the <=760px media query already set white-space:normal, so only desktop was affected). Homepage does not use this stylesheet and is unchanged.
- Same-defect sweep: the pattern only bites where a long heading shares a grid/flex row with media or cards — About intro + recognition photos (same starvation), Media Coverage card headlines (nowrap inside grid cards), Teams photo/CTA columns, Awards banner column. The other site pages were scanned: their in-grid H2s are the shared lead-form headings, which carry their own white-space:normal override, so they were not affected.
- All 12 core inner pages rebuilt and pushed in 4 batches; live byte-parity exact on all 12.
- Visually verified after deploy: About intro photo now 520x520 with the full photo visible; recognition photo 520x440 normal; Media Coverage cards wrap their headlines inside a 3-column grid that fits the page with no horizontal overflow.

### R-171 — 2026-11-22 — Services v3 batch of 10 begins: /seo-search-engine-optimization/ rebuilt to the reference's VISUAL flow (user-directed)

- Governing instruction (user, 2026-11-22): "Take 1 page (services) from https://www.infidigit.com/ and clone it on https://rankintelligence.net/ same to same, then redesign it with our design and colors. Create related images to replace theirs. Keep sections headings in the center of section. Maintain each sections top-bottom paddings, pills style, below buttons as we have on our homepage." Batch of 10 named in advance: SEO, Technical SEO, On-Page SEO, Local SEO, E-commerce SEO, Enterprise SEO, Small Business SEO, Professional SEO, SEO Audit, SEO Penalty Recovery.
- Method: every reference page visually inventoried first (browser scroll-through, structure/headings only — no reference text, stats or testimonials copied). New builder pages_services3.py: shared v3 components (photo hero with breadcrumb/pill/partners/faces strips/+520% chip/Get-cited-in badge/stats band, clients marquee, benefits cards, challenges + why-us accordions, numbered process, growth prose/blocks, industries + solutions grids, quote, RI real location links, FAQ, Ask-AI band, imported homepage cs-h/testi-h sections and the real lead form). CSS3 enforces the user's standards: section headings centered, 72px section rhythm, homepage pill/button styles. All copy RI-original; all photos newly generated.
- Flagship flow (19 sections): hero (generated svc3-seo-hero.webp) -> clients -> benefits (6) -> awards band -> challenges (8) -> Our Work (cs-h) -> why-us (6) -> testimonials (testi-h) -> process (11) -> plans (4 tiers) -> growth (generated photo + checklist) -> industries -> solutions -> quote -> locations -> full package comparison table -> FAQ (8) -> Ask-AI -> lead form.
- Verified: balanced, 1 H1, zero dead links; pushed as head 044b0e3e; live byte-parity exact (3,295,163 bytes). Browser visual verification PASSED (hero photo full portrait, all sections in order, no overflow). Two headings the verifier read as left-aligned were proven CENTERED by pixel measurement — no fix needed.
- DEFECT FOUND during verification (pre-existing, NOT from this build): the header logo renders squeezed at 34x36px on the flagship page, /about/ AND the homepage (natural image 760x111) — a site-wide header fault; the same image renders correctly in the footer. Diagnosis in progress as its own pass.

### R-172 — 2026-11-22 — /technical-seo-services/ rebuilt v3

- Flow per its visual inventory (no plans/table on the reference page): hero (generated svc3-technical-hero.webp) -> clients -> benefits (6) -> challenges (8) -> why-us (6) -> Our Work -> process (9) -> testimonials -> growth prose -> industries -> solutions -> quote -> locations -> FAQ -> Ask-AI -> lead form. 16 sections.
- Verified: balanced, 1 H1, zero dead links; pushed as head bee526dd; live byte-parity exact (2,637,436 bytes).

### R-173 — 2026-11-22 — /on-page-seo-services/ rebuilt v3

- Flow: hero (generated svc3-onpage-hero.webp) -> clients -> benefits (6) -> challenges (10) -> Our Work -> why-us (6) -> testimonials -> process (10) -> growth prose -> industries -> solutions -> quote -> locations -> FAQ -> Ask-AI -> lead form. 16 sections.
- Verified: balanced, 1 H1, zero dead links; pushed as head 7fc2e004; live byte-parity exact (2,622,792 bytes).

### R-174 — 2026-11-22 — /local-seo/ rebuilt v3

- Flow: hero (generated svc3-local-hero.webp) -> clients -> benefits (6) -> awards band -> challenges (8) -> why-us (6) -> Our Work -> process (8) -> testimonials -> growth blocks (5 sub-blocks: Getting found / Getting chosen / Getting contacted / Where AI fits in / Tracking what matters) -> industries -> solutions -> quote -> locations -> FAQ -> Ask-AI -> lead form. 17 sections.
- Verified: balanced, 1 H1, zero dead links; pushed as head dea2cc82; live byte-parity exact (2,753,824 bytes).

### R-175 — 2026-11-22 — /e-commerce-seo/ rebuilt v3

- Flow (reference order followed, incl. Locations before Solutions and Industries after the quote): hero (generated svc3-ecom-hero.webp) -> clients -> benefits (6) -> challenges (7) -> Our Work -> testimonials -> why-us (6) -> process (8) -> plans (3 tiers + a "Specific needs?" consultation card) -> growth (generated photo; Shopify/Magento/WooCommerce/custom platforms) -> locations -> solutions -> quote -> industries -> package comparison table (RI 3-tier data) -> FAQ (8) -> Ask-AI -> lead form. 18 sections.
- Verified: balanced, 1 H1, zero dead links; pushed as head 9b62387f; live byte-parity exact (3,480,452 bytes).

### R-176 — 2026-11-22 — /enterprise-seo-services/ rebuilt v3

- Flow (no plans/table on the reference page): hero (generated svc3-enterprise-hero.webp) -> clients -> benefits (6) -> challenges (8) -> Our Work -> why-us (6) -> process (9) -> testimonials -> growth prose -> industries -> solutions -> quote -> locations -> FAQ -> Ask-AI -> lead form. 16 sections.
- Verified: balanced, 1 H1, zero dead links; pushed as head b97852c4; live byte-parity exact (2,667,185 bytes).

### R-177 — 2026-11-22 — /small-business-seo-services/ rebuilt v3

- Flow (reference order differs: why-us before cases, plans before testimonials): hero (generated svc3-smallbiz-hero.webp) -> clients -> benefits (6) -> challenges (8) -> why-us (6) -> Our Work -> process (8) -> plans (4 tiers; compare link to /seo-pricing-p1/ — this page has no table) -> testimonials -> growth blocks (3) -> industries -> solutions -> quote -> locations -> FAQ -> Ask-AI -> lead form. 17 sections.
- Verified: balanced, 1 H1, zero dead links; pushed as head a51316b4; live byte-parity exact (2,793,539 bytes).

### R-178 — 2026-11-22 — /professional-seo-services/ rebuilt v3

- The reference hero is a form-hero (email field); built with the standard RI photo hero instead (generated svc3-professional-hero.webp) — RI's full lead form closes the page, as on every v3 page. Disclosed adaptation.
- Flow: hero -> clients -> benefits (6) -> challenges (8) -> Our Work -> testimonials -> why-us (6) -> process (8) -> growth blocks (8 topic blocks: Voice Search, Featured Snippets, Evolving Trends, International SEO, Penalties, Local SEO, AI SEO, LLM SEO) -> industries -> solutions -> quote -> locations -> FAQ -> Ask-AI -> lead form. 16 sections.
- Verified: balanced, 1 H1, zero dead links; pushed as head a19be82e; live byte-parity exact (2,720,024 bytes).

### R-179 — 2026-11-22 — /seo-audit/ rebuilt v3

- Flow: hero (generated svc3-audit-hero.webp) -> clients -> benefits (6) -> challenges (8) -> why-us (6) -> Our Work -> single Standard plan card (RI facts only: full-website audit, strategy included, severity-rated findings + 90-day roadmap, walkthrough call, report in 5-10 business days — the reference's "45 days" NOT copied) -> process (8) -> testimonials -> deliverables blocks -> industries -> solutions -> quote -> locations -> full RI audit checklist (15 groups / 86 items) -> FAQ (8) -> Ask-AI -> lead form. 18 sections.
- Verified: balanced, 1 H1, zero dead links; pushed as head f90c0589; live byte-parity exact (2,749,010 bytes).

### R-180 — 2026-11-22 — /seo-penalty-recovery/ rebuilt v3 — batch of 10 COMPLETE

- Flow (reference order: cases before why-us, Locations before Solutions, Industries after quote): hero (generated svc3-penalty-hero.webp — analyst diagnosing a traffic drop) -> clients -> benefits (6 recovery-themed) -> challenges (8 quoted) -> Our Work -> testimonials -> why-us (6) -> process (8: diagnosis, audit, backlink cleanup, content, technical fixes, reconsideration, monitoring, prevention) -> growth prose -> locations -> solutions -> quote -> industries -> FAQ (6: RI set + manual-vs-algorithmic + rejected-reconsideration) -> Ask-AI -> lead form. 16 sections.
- Verified: balanced, 1 H1, zero dead links; pushed as head cd520a81; live byte-parity exact (2,574,727 bytes).
- Batch state: all 10 named service pages are now v3 (visual-flow) builds, live and byte-verified. 47 service pages remain on v2 (text-confirmed flows) for later batches on the user's direction. OPEN: the site-wide header-logo squeeze found at R-171 (34x36px render of a 760x111 image, homepage included) — diagnosis/fix is a separate pass.

### R-181 — 2026-11-22 — Header logo squeeze FIXED site-wide (homepage + all 96 hand-built pages)

- Defect (found at R-171, pre-existing since the mega menu landed): the header logo (natural 760x111) rendered crushed at 34x36px on every mega-menu page, homepage included; the footer logo rendered correctly.
- Diagnosis (browser measurement at 1919px + source inspection): header content needs ~1355px (logo 246 at 36px height + menu 878 + CTA 177 + gaps 52) but the wrap is 1140px — an overflow of ~215px. The logo was the only flex-shrinkable item in the row (CTA is flex:none, menu links are nowrap), so flex layout crushed it to absorb the entire overflow.
- Fix (appended override block in tpl-style.html and the homepage's own stylesheet): header wrap widened to 1380px (24px padding); .logo and the logo img set flex:none with the img at 32px height (~219px wide, matching the footer's 32px); menu gap 22->18px, toplink padding 10->9px, nav gap 26->20px; a compact set below 1340px (logo 25px, toplinks 13.5px/7px padding, tighter gaps, CTA padding 14px); the existing burger/mobile-nav rules extended from 900px up to 1200px so the row never has to crush anything.
- Scope: homepage edited directly; all 96 hand-built inner pages (12 core incl. /services/, 57 services v2+v3, 27 industries) rebuilt through their builders with the fixed shared stylesheet and pushed in 14 size-capped batches (~4.5MB each; an 8-file/8.6MB batch was rejected HTTP 413). The 141 generated pages carry the old simple header (text wordmark, no mega menu) and were not affected.
- Verified: homepage measured live in the browser — logo 219x32px, wordmark legible, header row on one line with no overlap or horizontal scrollbar, mega menu still opens on hover. Live byte-parity exact on samples from every builder family (about, seo-audit, content-writing-services, seo-content-writing-services, industries/seo-for-plumbing). Final head 66cbc98c.

### R-182 — 2026-11-22 — /content-marketing/ rebuilt v3 (services v3 batch 2, page 1 of 10)

- The reference page is a LANDING-style page, not the standard template: form hero (dark panel + form panel; their form embeds were broken) -> orange results ticker (4) -> case studies (3 cards) -> testimonials -> tabbed client grid (6 tabs) -> awards image band. No benefits/challenges/process/FAQ/plans.
- RI build: navy form hero with RI's REAL lead form imported into the right panel (heading "Get Your Free Content Marketing Plan"); left = breadcrumb, pill, H1, lede, CMO faces, 4-item checklist, 3 award badges. Orange ticker with 4 RI case results; 3 Content Marketing case cards + "Read all Case Studies" button; homepage testimonials; tabbed client grid from RI's 23 clients in 6 groups (All 23, Fintech 3, SaaS & Technology 8, E-commerce & Retail 4, Travel & Lifestyle 4, Health, Education & More 4), tab buttons rectangular 10px per the button standard; awards band; Ask-AI. 6 sections; scripts (0,3), no duplicate lead form.
- Verified: balanced, 1 H1, zero dead links; pushed as head 0a357ea4; live byte-parity exact (1,564,247 bytes).

### R-183 — 2026-11-22 — /content-marketing-services/ rebuilt v3

- Flow: centred form-hero pattern built RI-style (centred hero, buttons to the lead form — the reference's email field not replicated, per the professional-SEO precedent) -> clients -> benefits (6) -> awards band -> challenges (10) -> why-us (4) -> Our Work -> process -> testimonials -> growth (generated svc3-cms-growth.webp) -> industries -> solutions -> locations -> FAQ -> Ask-AI -> lead form. 16 sections.
- Fix within the step: the hero lede first used an undefined class (herolede); corrected to the real svclede class, rebuilt and re-pushed.
- Verified: balanced, 1 H1, zero dead links; final head a1e33522; live byte-parity exact (2,829,399 bytes).

### R-184 — 2026-11-22 — /content-writing-services/ rebuilt v3

- Flow: hero (generated svc3-cw-hero.webp) -> clients -> benefits (6) -> awards band -> challenges (8) -> why-us (6) -> Our Work -> process (4) -> testimonials -> plans (2 RI tiers, no prices) -> industries -> 2-package comparison table (3 groups / 14 rows, RI data) -> "What We Write" blocks (6) -> solutions -> quote -> locations -> FAQ (6) -> Ask-AI -> lead form. 19 sections.
- Verified: balanced, 1 H1, zero dead links; pushed as head d04a0b87; live byte-parity exact (2,721,303 bytes).

### R-185 — 2026-11-22 — /seo-content-writing-services/ rebuilt v3

- The reference page is a LEAN prose/accordion template (no plans/industries/solutions/locations/lead form; headings mostly left-aligned there — RI kept headings centred per the user's standing rule).
- Flow: hero (generated svc3-scw-hero.webp) -> prose intro -> 6 RI stat cards -> awards band -> definition prose -> why-specialist accordion (6) -> clients -> quote -> included accordion (6) -> 3 case cards + CTA -> why-choose accordion (5) -> 12-platform wordmark grid -> FAQ (5) -> Ask-AI -> lead form. 15 sections.
- Verified: balanced, 1 H1, zero dead links; pushed as head 8e0be4b2; live byte-parity exact (1,810,666 bytes).

### R-186 — 2026-11-22 — /ecommerce-content-writing-services/ rebuilt v3

- Flow: centred hero (RI pattern) -> clients -> benefits (6) -> awards band -> why-us accordion (5) beside a photo (generated svc3-ecw-why.webp) -> Our Work -> testimonials -> process (4) -> industries -> solutions -> locations -> FAQ (5) -> Ask-AI -> lead form. 14 sections.
- Verified: balanced, 1 H1, zero dead links; pushed as head bd891151; live byte-parity exact (2,721,316 bytes).

### R-187 — 2026-11-22 — /bfsi-content-writing-services/ rebuilt v3

- Flow: centred hero (RI pattern) -> clients -> benefits (6) -> awards band -> why-us accordion (4, BFSI/compliance-themed) beside a photo (generated svc3-bfsi-why.webp) -> Our Work -> process (4) -> testimonials -> growth (generated svc3-bfsi-growth.webp, portrait) -> industries -> solutions -> locations -> FAQ (6) -> Ask-AI -> lead form. 15 sections.
- Verified: balanced, 1 H1, zero dead links; pushed as head 9539d96d; live byte-parity exact (3,236,823 bytes).

### R-188 — 2026-11-22 — /link-building/ rebuilt v3

- Flow: centred hero (RI pattern) -> clients -> benefits (6) -> awards band -> challenges (8) -> why-us (6) -> Our Work -> process (4) -> testimonials -> growth (generated svc3-lb-growth.webp) -> industries -> solutions -> quote -> locations -> FAQ (6) -> Ask-AI -> lead form. 17 sections. No pricing on the reference page; none added.
- Verified: balanced, 1 H1, zero dead links; pushed as head e9be5e4f; live byte-parity exact (2,863,143 bytes).

### R-189 — 2026-11-22 — /blogger-outreach-services/ rebuilt v3

- Discovery: the reference site REDIRECTS /blogger-outreach-services/ to its /guest-posting-services/ page — one merged page serves both slugs there. RI keeps two distinct pages (its own SVC content differs per service); this page was built to that page's rendered flow.
- Flow: hero (generated svc3-bo-hero.webp) -> clients -> benefits (6) -> awards band -> challenges (8) -> why-us (5) -> Our Work -> process (4) -> testimonials -> growth (generated svc3-bo-growth.webp) -> industries -> solutions -> quote -> locations -> FAQ (5) -> Ask-AI -> lead form. 17 sections.
- Verified: balanced, 1 H1, zero dead links; pushed as head c0e41e68; live byte-parity exact (3,340,762 bytes; first parity check caught the deploy mid-propagation, re-check matched).

### R-190 — 2026-11-22 — /guest-posting-services/ rebuilt v3

- Built to the same reference page inventoried at R-189 (the reference serves this exact page for both slugs), with RI's distinct guest-posting content.
- Flow: hero (generated svc3-gp-hero.webp) -> clients -> benefits (6) -> awards band -> challenges (8) -> why-us (5) -> Our Work -> process (4) -> testimonials -> growth (generated svc3-gp-growth.webp) -> industries -> solutions -> quote -> locations -> FAQ (5) -> Ask-AI -> lead form. 17 sections.
- Verified: balanced, 1 H1, zero dead links; pushed as head 05522a13; live byte-parity exact (3,282,951 bytes).

### R-191 — 2026-11-22 — /digital-marketing-services/ rebuilt v3 — batch of 10 COMPLETE

- The reference page differs from the standard template: NO challenges accordion, NO standalone process section, NO industries grid — instead a 20-row framework accordion (14 channel entries + 6 process rows). RI build follows it: hero (generated svc3-dm-hero.webp) -> clients -> benefits (6) -> awards band -> Our Work -> why-us (6) -> testimonials -> framework accordion (16 rows: 12 RI channel entries + the page's 4 RI process steps) -> growth (generated svc3-dm-growth.webp) -> solutions -> quote -> locations -> FAQ (6) -> Ask-AI -> lead form. 15 sections.
- Verified: balanced, 1 H1, zero dead links; pushed as head 11ea4363; live byte-parity exact (3,311,001 bytes).
- Batch state: services v3 batch 2 (pages 11-20 of the list) is COMPLETE — Content Marketing, Content Marketing Services, Content Writing, SEO Content Writing, E-commerce Content Writing, BFSI Content Writing, Link Building, Blogger Outreach, Guest Posting, Digital Marketing. 20 of 57 service pages are now v3; 37 remain on v2 (list items 21-55; items 56/57 are the stale India dict entries converted to Pakistan at R-110) for later batches on the user's direction.
