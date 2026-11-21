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
