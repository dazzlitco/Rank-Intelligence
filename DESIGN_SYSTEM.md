# Rank Intelligence — Design System v2 (Best UI/UX)

Status: v2 supersedes v1 (`DESIGN_SYSTEM.md`, the faithful extraction) for all new builds. v1 remains the record of the live site.
Tokens: `brand/tokens-v2.css` (`--ri-*`). Rules below are mandatory for every page.

## What changed from v1, and why

1. **Palette cut from 8 accents to 2.** Blue #102088 (brand) + action green #006E00 + neutrals. Removed as decorative colours: lavender, mint, orange, cyan bands, deep navy, dark-green footer. Dark surfaces are now one colour, `--ri-blue-dark` #0A1445 (footer and CTA bands). Light tints are one colour, `--ri-blue-wash`.
2. **Contrast is a rule, not a hope.** Every text/background pairing must meet WCAG AA (4.5:1 body, 3:1 large text/icons). Primary buttons use the darkened green so white text passes at ~6.9:1. Orange buttons are gone.
3. **Two typefaces with jobs.** Poppins for headings, Inter for body/UI (more readable at 14–16px). Fixed scale in tokens; body never below 16px, small text never below 14px.
4. **Sticky, accessible header.** Header sticks with a shadow on scroll. Dropdowns open on click *and* hover, work by keyboard, and collapse into a hamburger menu under 1024px. All interactive elements are ≥44px tall with a visible focus ring.
5. **One primary CTA per page.** "Get Free Proposal" (green) is primary everywhere. "Book a Call" is a secondary outline button. No third competing CTA in the same viewport; "View all…" links are text links, not buttons.
6. **Shorter homepage.** 18 sections → 10 (see §3). Everything cut was either duplicated proof or a second conversion ask.
7. **Forms ask less, in steps.** The lead form is 2 steps with visible labels, inline validation and error/success states (§4).
8. **Component states are specified.** Buttons, inputs, cards, tabs and accordions each define default / hover / focus / active / disabled / (where relevant) loading, error and success. Nothing ships with hover-only styling.
9. **Motion respects the user.** Carousels do not auto-scroll by default; any animation stops under `prefers-reduced-motion` and pauses on hover/focus.
10. **Real scales.** Spacing uses only the 4pt steps in tokens; radius is 8px (controls) / 12px (cards) / pill (tags only — buttons are no longer pills except tags).

## 1. Foundations

- Colour, type, spacing, radius, shadows, touch and motion: see `tokens-v2.css`. Highlights: container 1180px; section padding clamp(56px, 7vw, 96px); breakpoints 480 / 768 / 1024 / 1280px, mobile-first.
- Headings: Poppins 600–700, ink, one accent word in blue maximum. Eyebrow labels: small caps text in blue on `--ri-blue-wash` pill — retained from v1, recoloured.
- Alternate section backgrounds white / `--ri-surface-grey` only. No gradient bands except a subtle white→blue-wash hero wash.

## 2. Components

**Header (sticky)** — White, logo left, nav centre (Services ▾, Industries ▾, About Us, Contact Us), right: "Book a Call" outline + hamburger on mobile. Shadow appears on scroll. Skip-to-content link retained. Dropdown panels: white, 12px radius, shadow, ≥44px rows.

**Buttons** — Primary: `--ri-action` fill, white text, 8px radius, min-height 44px. Secondary: white, 1.5px blue border, blue text. Text link: blue, underlined on hover/focus. States: hover darkens one step; focus = 3px focus ring with white offset; disabled = 45% opacity, no pointer events; loading = spinner + disabled, label retained.

**Inputs** — Visible label above every field (never placeholder-only), 44px+ height, 8px radius, border `--ri-border`. Error: red border + message below with icon, `aria-describedby`. Success: green border + confirmation text. Help text in `--ri-muted`.

**Cards** — White, 12px radius, `--ri-shadow-card`, 1px border. Solutions cards keep the blue top border from v1 but no colour-change hover — hover is shadow + 2px lift only. Whole card is not a link; the title/link is.

**Tabs (Performance, Testimonials)** — Button semantics, `aria-selected`, arrow-key navigation, active = blue fill/white text (Performance) with panel labelled. One panel visible.

**Accordion (FAQ)** — Button headers, chevron rotates, `aria-expanded`, only one open at a time, focus ring visible, no colour-change-on-hover trick (v1's orange text is removed).

**Logo wall** — Static responsive grid/wrap by default (max 2 rows on homepage). If a carousel is used it must have pause on hover/focus and respect reduced-motion.

**Lead form** — See §4.

**Footer** — `--ri-blue-dark`, white text (AA on that background), 4 columns on desktop (brand+socials, Company, Services, Industries) + offices row, policy bar with copyright. Social icons are ≥44px targets.

## 3. Homepage v2 — section order (10)

1. Sticky header
2. Hero — headline, one-line subcopy, URL + email capture (step 1 of the form pattern), proof line (avatars + line), partners row
3. Measurable Performance — tabbed selector (8 goals, content shortened)
4. Case Studies — 3 cards, results % in blue, no filter pills (filters return on the Case Studies page, not the homepage)
5. Solutions — 6 core cards (SEO, Local SEO, Link Building, PPC, Web Development, Content Marketing) + text link to all 12
6. Proof band — clientele logos (static), awards + featured-in as one quiet row of names/badges, one testimonial with tabs by industry
7. Why Us — USP 6 merged with Features copy, 3×2 grid, team photo
8. FAQ — 6 highest-value questions, accordion
9. Lead form — 2-step card (§4) on blue-wash background
10. Footer

Removed from the homepage (moved to their own pages): DazziGrowth™ tool band (→ product page, linked from Solutions), Knowledge Base teasers (→ blog), shop banner (→ footer link), second CTA banner (the lead form is the CTA).

## 4. Lead form pattern (site-wide)

- Step 1 (3 fields): Website URL*, Work Email*, primary service (select)*. Button: "Get My Free Proposal".
- Step 2 (optional-feeling, skippable fields marked): Full Name, Phone, "Tell us about your business" textarea, how SEO is currently managed (select). Button: "Send My Free Proposal".
- Progress indicator "Step 1 of 2", back link, inline validation on blur, error summary on submit, success state replaces the form (tick, what happens next, response-time promise). Terms checkbox on step 2 only, unchecked by default. Privacy microcopy under the button.
- The hero form *is* step 1 — submitting it scrolls to the lead form with step 1 already completed.

## 5. Accessibility & quality checklist (every page)

- [ ] All text AA contrast; icons 3:1
- [ ] Fully keyboard-operable; visible focus everywhere; logical tab order
- [ ] Touch targets ≥44px; labels visible; errors announced
- [ ] `prefers-reduced-motion` honoured; no forced auto-scroll
- [ ] Works at 360px wide with no horizontal scroll; images have alt text
- [ ] One H1 per page; heading order never skips
