# Rank Intelligence — Design System v1

Extracted live from the homepage at rankintelligence.net on 2026-11-19 (desktop, 1919px).
Purpose: every new page (Services, Industries, About, Contact, case studies, blog, landing pages) is built from this system — same tokens, same components, same section patterns — so the whole site looks like one site.

Source files: `brand/tokens.css` (all values as CSS variables, `--ri-*`). Do not hard-code colours, radii or spacing in page code; use the tokens.

> Accuracy note: colours below are sampled close matches from the live page, and the typeface is a visual identification (geometric/humanist sans, Poppins/Montserrat-style). Exact stylesheet values were not exposed during inspection — verify both against the production CSS and lock them in v2 before a full-site rebuild.

## 1. Colour

| Token | Value | Use |
|---|---|---|
| `--ri-blue` | #102088 | Headings accents, USP icons, Solutions card top border, "RELATIONSHIPS" in hero |
| `--ri-green` | #008000 | Primary buttons, active tabs, key words/percentages, "RESULTS" in hero |
| `--ri-ink` / `--ri-black` | #111111 / #000000 | Headings, nav, body headings |
| `--ri-body` | #555555–#666666 | Body copy, placeholders |
| `--ri-white` | #FFFFFF | Page, cards, header, inputs |
| `--ri-header-bg` | #F4F6F5 | Header bar |
| `--ri-surface-grey` | #F5F5F5 / #F2F2F2 | Alternate section backgrounds, Performance container |
| `--ri-card-grey` | #EFEFEF–#F0F0F0 | Solutions cards |
| `--ri-lavender` | #ABA9F5 | Section eyebrow pills; Solutions hover ~#B0A8F5 |
| `--ri-cyan` gradient | #FFFFFF → #EAFBFE → #2ED6F2/#35D7F3 | Hero wash, DazziGrowth and Awards bands |
| `--ri-mint` | #BFF5C8–#C8F7D0 | Lead-form left panel |
| `--ri-orange` | #FF8C42–#FF8C5A | CTA-banner and shop buttons, FAQ hover text |
| `--ri-navy-deep` | #00008B–#0A0A9C | CTA / pre-footer banners |
| `--ri-footer-green` | #005500–#006400 | Footer background |
| `--ri-book-call` | #151F16 | Header "Book a Call" pill |

Rules: green = action and proof (buttons, active states, % figures). Blue = authority (headings, icons, borders). Lavender is only for eyebrow pills and the Solutions hover. Orange is only for banner/shop CTAs — never for normal page buttons.

## 2. Typography

- One sans family everywhere (`--ri-font-sans`); no serif, no mono.
- Headings: 700–800 weight. Hero 64–72px, tight leading (1.05), left-aligned. Section H2 32–40px, usually centred. Card titles 20–22px.
- Body: 400–500 weight, 15–16px, grey (`--ri-body`), leading 1.6.
- Eyebrow pills: 12–14px, bold, uppercase, letter-spaced, dark text on lavender pill.
- Colour-in-headings pattern: pick out one key word in green (or blue in the hero/USP heading) — e.g. hero lines in black / blue / green. Use sparingly: one accent word per heading.

## 3. Layout & spacing

- Container: max ~1180px, centred. Section padding ~80–100px vertical on desktop.
- Grid gaps ~24–30px. Sections alternate white / light-grey backgrounds; centred headings by default, left-aligned for hero, Performance and Features.
- Radius: 4–8px buttons & inputs, 8–12px cards & images, 16px large containers, full pill only for "Book a Call" and pills.
- Shadows: soft and light only (`--ri-shadow-card`); most sections are flat.

## 4. Core components (use these on every page)

**Header** — Off-white bar, ~68px, not sticky. Logo left ("Rank" dark + arrow, "Intelligence" green), nav centre: Services ▾, Industries ▾, About Us, Contact Us. Hover/active: green text + green underline. Right: "Book a Call" pill (dark #151F16, white text, phone icon). Services dropdown: white panel, thin dividers — SEO, Local SEO, Link Building, Content Marketing, Website Development, Digital PR, Reputation Management.

**Buttons** — Primary: solid green, white text, 6px radius ("Get Free Proposal", "Send My Free Proposal"). Secondary: white, black border, black text ("View our LLM Solutions →", "View Our Team →"). Tertiary: small white button inside grey cards ("View Solution →"). Pill: only header CTA and filter/eyebrow pills.

**Eyebrow + heading block** — Lavender pill (uppercase label) + H2 + optional subcopy, centred. Used by: Measurable Performance, Case Studies, Clientele, Testimonials, Solutions, USP, Features, Knowledge Base, FAQs.

**Hero (page template)** — Split 55/45, left text on white→cyan gradient, right rounded (12px) visual. Eyebrow line, extra-bold multi-colour headline, inline URL form (label "Website Address", input + green button), social-proof row (overlapping avatars + line), partners row.

**Performance selector** — Light-grey rounded (16px) container: left vertical list of selectable rows (white pill rows, coloured circle icon + label), right panel with H2, short copy, outline button and rounded photo. Tabs swap the right panel.

**Case-study card** — White, rounded, soft shadow: image top, lavender tag, client name/logo, bold title with the key percentage in green. Grid of 3, filter pills above (white, black border).

**Solutions card** — Light-grey, 12px radius, thick blue top border, centred icon/title/copy, white "View Solution →" button. Hover: background turns lavender. Grid: 4 columns.

**USP item** — Centred: dark-navy circle with white line icon, bold 20–22px title, grey copy. Grid 3×2.

**Logo carousel** — Auto-scrolling rows of client logos (two rows on the homepage). Reuse for any logo wall; do not build static logo grids for long lists.

**Tabs** — Testimonials: pill tabs, active = green fill. DazziGrowth: active = white with green border, inactive = green with white text, on the cyan band.

**FAQ accordion** — Single column, max ~900px, on light-grey: white rounded (10px) cards, bold ~20px question, chevron right. Hover/active: green border, orange question text.

**Lead form (site-wide conversion block)** — White card, soft shadow, split: left mint panel (Boost ROI / Multifold Growth / Global Reach), right form "Let's Start Growing Together" — Full Name*, Work Email*, phone with country code*, Website URL*, business textarea*, SEO-management select, services checkboxes, terms checkbox, green submit. Microcopy on security / no-spam / phone alternative goes under the form.

**CTA banner** — Full-width deep-navy band, illustration left, white heading with one green phrase, orange button.

**Footer** — Dark-green, white text, 5 columns: brand + socials | Company | Services | Industries | Follow Us + USA & Pakistan office addresses/phones. Below: review-badge row, then bottom bar with policy links left and "© 2015-2026 | Rank Intelligence" right.

## 5. Homepage section order (the reference build)

Header → Hero (+ partners) → Measurable Performance → Case Studies → Our Clientele → Testimonials → DazziGrowth™ tool band → Our Solutions (12) → Awards → Our USP (6) → Features / Why Choose Us → Knowledge Base → CTA banner → Featured In → FAQs (9) → Lead form → Shop banner → Footer.

Inner pages keep Header, CTA banner, Lead form and Footer identical, and build their middle from the components in §4.

## 6. Interaction rules

- Dropdowns open on hover (desktop). Carousels auto-scroll. Performance / Testimonials / DazziGrowth are tabbed — one panel visible at a time.
- Hover states are part of the system: nav green + underline, Solutions cards to lavender, FAQ to green border / orange text, cards lift slightly.
- No heavy animation, no autoplay video on the homepage pattern.

## 7. Known quirks in the source (decide, don't copy blindly)

- Knowledge Base on the live homepage repeats the same Local SEO article four times — treat as placeholder in the clone, replace with real posts on inner pages.
- Some live copy is truncated in places; the clone uses the visible homepage wording for headings and labels, with body copy kept short.
