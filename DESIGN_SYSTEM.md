# Rank Intelligence — Production Design System (v3)

Status: **This is the single source of truth for building Rank Intelligence pages.** It merges the live site's visual identity (rankintelligence.net) with every design decision the owner made while fixing the homepage section by section (2026-11-20). It supersedes v1 (faithful extraction, `DESIGN_SYSTEM_V1.md`) and v2 (best-UI/UX experiment, `DESIGN_SYSTEM_V2.md`).

**Working rule (owner instruction, 2026-11-20): apply this system automatically. Do not ask for per-section guidance.** Build each section to this spec, push to GitHub `main`, verify, and report what was done. Ask only when a required asset is genuinely missing (e.g. a brand logo that was never supplied) — and still finish everything that does not depend on it.

---

## 1. Brand foundations

### Colour
| Token | Value | Use |
|---|---|---|
| `--blue` | #102088 | Brand blue: headings accents, links, active states |
| `--blue-dark` | #0A1445 | Deep navy: icon circles, shop band |
| `--green` | #00A651 | Primary buttons, % figures, progress bars, checks |
| `--green-dark` | #006E00 | Button hover / AA-safe green text |
| `--cyan` | #35D7F3 | Gradient end, SERPLoft band |
| `--cyan-pale` | #EAFBFE | Gradient mid, floating cards |
| `--lav` | #E6E3FA (family of #ABA9F5) | Eyebrow pills, category pills |
| `--orange` | #FF8C42 | Only: CTA-band button, "Visit Shop" |
| `--mint` | #E2F5E3 | Lead-form left panel |
| `--grey-bg` | #F5F5F5 / panel #F8F8F8 | Alternating section backgrounds, panels |
| `--ink` | #0E1220 | Body headings |
| `--muted` | #5A6070 | Secondary text |
| `--border` | #E3E6EF | Card and input borders |
| Footer | #005500 → #006400 | Dark-green footer gradient |

### Typography
- Headings: **Poppins**, 700–800. Body/UI: **Inter**.
- Hero H1: uppercase, clamp(2.4rem, 5.2vw, 4rem), three-colour split — black / royal blue / green lines.
- Section H2: ~2rem Poppins 700, centred unless the section spec says left.
- Eyebrow: small lavender pill, uppercase, centred above the H2 (e.g. "Measurable Performance", "Our Clientele", "Our Work").
- Section headings are **descriptive benefit sentences**, not labels — e.g. Clientele: "We are the digital partners for brands to achieve organic growth"; Case Studies: "We elevate your brand to create success stories like these."

### Layout
- Container 1180px, side padding 20px. Sections alternate white / light grey.
- Section padding ~84px top/bottom. Cards radius 14px, panels 18px, soft shadows `0 6px 24px rgba(14,18,32,.08)`.
- Breakpoint 900px: multi-column grids collapse to one column.

## 2. Header
Sticky, near-white (#F4F6F5 family), subtle shadow once scrolled. Logo left (navy "R" mark with green arrow + "Rank" navy / "Intelligence" green). Nav: Services ▾, Industries ▾, About Us, Contact Us. Right: black pill "Book a Call" with phone icon. Mobile: hamburger toggling the nav.

## 3. Hero
- Background: full-bleed vertical gradient white → pale cyan → cyan, running uninterrupted behind everything including the partner strip. **No band, box or background behind the partner logos.**
- Columns: text ≈59% / image ≈35%, 48px gap, **top-aligned** (image is top-biased, never centred or bottom-flush).
- Image: the agency illustration, square 1:1, displayed at max ~420px wide, radius 18px, soft shadow.
- Left column order: eyebrow ("AI Powered Search Marketing Agency Driven By") → H1 → URL field + green "Get Free Proposal" (submitting scrolls to the lead form and pre-fills the URL) → CMO faces strip image at **natural size** beside "Rank Intelligence is the CMO's most preferred partner".
- Partners block (below, left-aligned under the text column): small bold label "Our Partners", then the partner strip image at natural proportion (max ~700px wide). Logos sit directly on the gradient.

## 4. Buttons & tabs
- Primary button: green, white text, radius 999px, min-height 44px. Outline button: 1.5px ink border, transparent bg.
- **Tabs are rectangular** (radius 10px), never oval pills. Applies to Case Studies and all tab groups.
- Tab groups switch panels on click; active tab gets the blue border + shadow treatment.

## 5. Measurable Performance
- Light-grey rounded panel. **Left: the 8 goal tabs in ONE vertical column.** Right: the active panel.
- Each tab: white pill-card with a **coloured circular icon containing a real inline SVG icon** (sparkles, growth chart, target, cart, storefront, pen, browser, phone) — never unicode glyphs or emoji.
- **Tabs auto-switch every ~5.6s** with a green progress bar filling along the bottom of the active tab. Pause on panel hover and when the browser tab is hidden; clicking a tab restarts the cycle from it; no auto-switch under `prefers-reduced-motion`.
- Panel content order: **image on top → heading → text → button below all.** Every panel has its own real photo (1024×585 landscape, radius 14px).

## 6. Case Studies
- Grey section, eyebrow "Our Work", descriptive H2 (see §1).
- 6 rectangular tabs × 3 cards. Card: white, radius 14px; **real client website screenshot** on top (190px, cover crop); **client logo** in the logo slot (30px tall, max 140px wide); lavender category pill; black headline with the % figure in green bold.
- **Cards grow slightly on hover** (scale 1.03 + deeper shadow, .35s ease).
- **The whole card is clickable** (image and text). Until individual case studies exist, cards link to their tab's case-study index (website-traffic / leads-generation / revenue-growth / app-downloads / website-development / content-writing case-studies).

## 7. Our Clientele (logo scroller)
- Descriptive H2 (see §1). **Two rows of real client logos, auto-scrolling slowly (~58s per loop), seamless.**
- **Upper row scrolls right → left. Lower row scrolls left → right.** Split the logo set half / half (±1).
- Logos 52px tall, generous gaps, soft fade mask at both edges, **larger vertical gap between the rows (~38px)**, and the rows **never pause on hover**.
- Animation off under `prefers-reduced-motion`. Logos are embedded once and duplicated in the DOM by JS (keeps the file lean).

## 8. Testimonials
Eyebrow "Our Client Testimonial", H2 with "Love" underlined in green. Rectangular industry tabs (7) × 3 reviewers. Layout: big quote on the left, large green circle avatar (initials) on the right; 3 reviewer selector cards below with green initial avatars; clicking a reviewer swaps the quote. No star ratings (the live site shows none).

## 9. SERPLoft band
Cyan gradient band. "SERPLoft™" wordmark centred, H2 "The Secret Weapon Behind Our Success", 4 rectangular tabs (Rank Tracker, GeniuSearch, Custom Reporting, Competitor Analysis). Panel: heading with green underline, text, 3 green-check bullets, outline "Try SERPLoft Now". Rank Tracker panel carries a CSS dashboard mock (browser bar, "Keyword Distribution", big number, SVG chart, blue "Live demo" chip, floating "Report Categorization" card).
**The product is named SERPLoft everywhere. The old name (DazziGrowth) must never appear.**

## 10. Our Solutions
Infidigit format in Rank Intelligence card style: eyebrow, H2 "Explore Our Comprehensive Suite of Digital Growth Solutions", 12 cards (SEO, LLM SEO, AI SEO, E-commerce SEO, CRO, SEO Audit, Local SEO, Small Business SEO, Enterprise SEO, ASO, Website Development, Content Writing), each with title + one-line description + "View Solution →", light-grey card with dark-navy top border, whole card links to its service page. "View All Services" button below.

## 11. Awards, USP, Team, Knowledge Base
- Awards: cyan band, badge chips (white cards, bold name + small caption) in wrapped rows.
- USP: 6 items, dark-navy circular SVG icons, centred. Items: AI Skills, SERPLoft™, Data-Based, 50+ Awards, 100+ Professionals, Win-Win Strategy.
- Meet Our Team: grey section, bold intro line + real team photo side by side, then 4 divider-separated value columns, outline "View Our Team".
- Knowledge Base: 2×2 article cards with illustration, category pill and title; "View All Blogs →".

## 12. CTA band, Proudly Featured, FAQs
- CTA: deep royal-blue rounded band on grey; illustration left; white H2 "Get ready to boost your Organic Rankings" with the last word **rotating Traffic / Sales / Leads / Revenue** (static under reduced motion); orange "Get Free Proposal" + "Contact Us" link.
- Proudly Featured: left H2 "Proudly featured in the best media outlets"; right, staggered white logo cards over a pale-cyan blob (10 outlets).
- FAQs: grey section, single ~50%-width column of white rounded accordion boxes with chevrons, the live site's 9 questions.

## 13. Lead form, shop banner, footer
- Lead form: two-panel card. Left mint panel: headline "100+ brands scaled revenue using our data-driven strategies.", consultant photo, white pill badges with green borders (Boost ROI, Multifold Growth, Global Reach). Right white panel "Let's Start Growing Together": Full Name*, Work Email*, WhatsApp Number, Website URL*, business textarea, "How are your SEO activities managed" dropdown, the 14 service checkboxes, pre-checked terms checkbox, phone +44-7782259462, "100% SSL Secured" / "No spam, no unwanted calls", green "Send My Free Proposal". Inline validation + success state.
- Shop banner: dark-navy band, royal-blue inner panel, monitor mock, service list text, orange "Visit Shop".
- Footer: dark green; logo + blurb + social circles; columns Company / Services / Industries / Follow Us; offices Orlando FL + Islamabad; 9 trust-badge chips; bottom bar Privacy Policy · Cookies Policy · Terms · Write for us · Sitemap + "© 2015-2026 | Rank Intelligence".

## 14. Images & assets — hard rules
1. **Use the real brand assets the owner supplies** (illustrations, photos, logos, screenshots). Generated stand-ins are placeholders only until the real asset arrives.
2. **Never flatten a transparent image to RGB** — it bakes in a black background (learned the hard way on the partner strip). Embed transparent logos/strips from the original bytes.
3. Optimize photos to WebP q72–78 at the display width; embed as data URIs (the GitHub push path is text-only, binaries are rejected).
4. After embedding, **verify counts inside the correct section** (a page-level count once hid an image that landed in the wrong place).
5. Alt text on every image; `loading="lazy"` below the fold.

## 15. Motion & accessibility
- Motion is purposeful: marquee scroll, tab auto-switch with progress, CTA word rotation, card hover grow. Everything respects `prefers-reduced-motion`.
- Interactive targets ≥44px, visible focus states, tabs use `role=tablist/tab` with `aria-selected`, reviewer cards use `aria-pressed`.

## 16. Workflow
- Every change: edit `index.html` → serve locally and verify (HTTP 200, section counts, JS syntax) → push to `dazzlitco/Rank-Intelligence` `main` → confirm the new head commit → report to the owner here. Cloudflare Pages deploys from `main` automatically (preset None, build command empty, output `/`).
- Missing assets on record: logos for **BioDigital, MyVitaminStore.pk, Instacart** (their case cards use a styled text wordmark until supplied).
