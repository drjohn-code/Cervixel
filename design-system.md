# Design System

A specification for a modern, minimal, quietly confident **biotech marketing site**. Optimized for trust, scientific credibility, and conversion-focused calmness — never loud, never flashy. Slightly playful through typography and shape, never through color noise.

> **References used to ground this system:**
> - **ginkgo.bio** (homepage and `/automation-product`) — palette discipline, eyebrow-with-rule labels, pill CTAs with circular arrow chips, photography use, restraint, FAQ accordion pattern, feature grid with decorative DNA-strand SVG divider.
> - **Two user-supplied screenshots** — matte frosted-glass panels overlaid on minimal contextual imagery (one lab automation photo on a cool grey/lilac wash; one abstract line-art diagram on a soft pink/lavender gradient).
>
> Where exact font files or hex values are proprietary, free Google Fonts equivalents and sampled hex values are specified and marked `// inferred from [ref]`.

---

## 1. Design Principles

1. **Restraint over decoration.** Whitespace, type, and a single deep ink do the work. If a flourish doesn't carry meaning, cut it.
2. **Type does the heavy lifting.** A high-contrast serif headline against a quiet sans body is the brand. Decorative UI is minimal — text rhythm carries the page.
3. **Photography is contextual, never stock.** Real lab imagery and abstract scientific line-art sit *behind* matte glass panels — the photo provides texture and trust, the panel keeps the page calm.
4. **One ink, one warmth.** Deep ink-navy is the universal text color (not pure black) and a single soft mood wash sets the tone per section. No saturated brand accent.
5. **Quiet motion.** Movement is short, eased, and subtle. Nothing bounces, nothing announces itself, nothing autoplays loudly.
6. **Honest hierarchy.** Size, weight, and space define importance — not boxes, gradients, or shadows.

---

## 2. Color System

### 2.1 Brand / Primary Palette

The primary brand color is **deep ink navy**, used for almost all text and the primary CTA fill. The reference treats this as the brand "ink" rather than pure black — softer, more premium. Sampled from screenshot 1 headline color.

**Decision: no saturated brand accent.** The reference site (verified across homepage and product pages) carries the entire brand on ink + neutral + soft mood washes. Adding a saturated accent (orange, green) would break the quiet tone we're after. Mood washes do all chromatic work.

| Token             | Hex       | Use                                                                |
|-------------------|-----------|--------------------------------------------------------------------|
| `--brand-ink`     | `#0E2233` | All headlines, primary text, primary button fill, eyebrow rule `// inferred from screenshot 1` |
| `--brand-ink-700` | `#1A3247` | Hover state for `--brand-ink` fills                                 |
| `--brand-ink-500` | `#3A556B` | De-emphasized text, secondary labels                               |
| `--brand-ink-300` | `#7E94A8` | Tertiary text, captions on tinted washes                           |

### 2.2 Mood Wash Palette (Section Backgrounds)

Used as **soft full-bleed gradient washes** behind imagery and glass panels. Each section/service gets a fixed wash assignment (decision below). Sampled from the two screenshots.

| Token              | Hex       | Use                                                                |
|--------------------|-----------|--------------------------------------------------------------------|
| `--wash-mist`      | `#E8E9EF` | Cool grey-lilac — for hardware/automation/lab sections `// inferred from screenshot 1` |
| `--wash-blush`     | `#F3DCEA` | Pink-lavender — for data/AI/software sections `// inferred from screenshot 2`           |
| `--wash-sand`      | `#EFE8DC` | Warm sand — for biology/services/applications sections                                  |
| `--wash-sage`      | `#DDE8DD` | Pale sage — for sustainability/case-studies/customer-story sections                     |

**Wash assignment rule** (locked): each top-level service or section type owns one wash, used consistently. Example mapping for a typical biotech site:

| Section / Page type           | Wash           |
|-------------------------------|----------------|
| Hardware / Automation / Lab   | `--wash-mist`  |
| Data / AI / Software          | `--wash-blush` |
| Services / Biology / Applications | `--wash-sand` |
| Customer stories / Sustainability | `--wash-sage` |
| Hero (landing page top)       | `--wash-mist`  |

Apply each wash as a horizontal gradient: `linear-gradient(120deg, [wash] 0%, #FFFFFF 70%)` for the soft falloff seen in screenshot 2.

### 2.3 Neutrals

A 10-step warm-grey scale, slightly cooled to harmonize with `--brand-ink`.

| Token       | Hex       | Notes                                  |
|-------------|-----------|----------------------------------------|
| `--gray-50` | `#FAFAFB` | App background                         |
| `--gray-100`| `#F4F4F6` | Surface alt, subtle section break      |
| `--gray-200`| `#E7E8EC` | Default border, dividers               |
| `--gray-300`| `#D2D5DC` | Strong border, disabled fills          |
| `--gray-400`| `#A8ADB8` | Disabled text, placeholder             |
| `--gray-500`| `#7B8090` | Muted body                             |
| `--gray-600`| `#565C6B` | Secondary text                         |
| `--gray-700`| `#3B414E` | Body text on light wash                |
| `--gray-800`| `#252A35` | Strong text (alt to ink)               |
| `--gray-900`| `#15191F` | Near-black, rarely used                |
| `--gray-950`| `#0A0C10` | Reserved (footer, splash overlays)     |

### 2.4 Semantic Colors

Muted, never neon. They inform; they don't interrupt.

| Token              | Hex       | Use                                |
|--------------------|-----------|------------------------------------|
| `--success`        | `#2F7D5B` | Success messages, confirmations    |
| `--success-bg`     | `#E6F2EC` | Success surface fill               |
| `--warning`        | `#A86A1F` | Warnings                           |
| `--warning-bg`     | `#FAEFD9` | Warning surface fill               |
| `--error`          | `#B23A3A` | Errors, destructive actions        |
| `--error-bg`       | `#F8E3E3` | Error surface fill                 |
| `--info`           | `#2D5DA8` | Info banners, links in body copy   |
| `--info-bg`        | `#E4ECF8` | Info surface fill                  |

### 2.5 Surface Tokens (Light Mode Only)

This is a marketing site with no dark mode requirement.

| Role             | Token             | Value                              |
|------------------|-------------------|------------------------------------|
| Page background  | `--bg`            | `#FFFFFF`                          |
| App background   | `--bg-app`        | `#FAFAFB`                          |
| Surface (card)   | `--surface`       | `#FFFFFF`                          |
| Surface elevated | `--surface-2`     | `#F4F4F6`                          |
| Surface glass    | `--surface-glass` | `rgba(255,255,255,0.55)` + 24px backdrop-blur — see §7.3 |
| Border default   | `--border`        | `#E7E8EC`                          |
| Border strong    | `--border-strong` | `#D2D5DC`                          |
| Text primary     | `--text`          | `#0E2233`                          |
| Text secondary   | `--text-muted`    | `#565C6B`                          |
| Text tertiary    | `--text-subtle`   | `#7B8090`                          |
| Text on ink      | `--text-on-ink`   | `#FFFFFF`                          |

### 2.6 Contrast & Accessibility Notes

- `--brand-ink (#0E2233)` on `--bg (#FFFFFF)` = **15.8:1** → AAA for all text sizes.
- `--text-muted (#565C6B)` on `--bg` = **7.0:1** → AAA normal text.
- `--text-subtle (#7B8090)` on `--bg` = **4.0:1** → use only for ≥18px text or non-essential captions.
- White text on `--brand-ink` (primary CTA) = **15.8:1** → AAA.
- **Never** place text directly on photography. Always use a glass panel (§7.3) or solid surface — see screenshots for the canonical pattern.
- Mood washes are decorative only; never put body text on a gradient without a panel behind it.

---

## 3. Typography

### 3.1 Font Families

The reference site uses **IvyPresto Display** (transitional serif) for headlines and **Sofia Pro** (geometric humanist sans) for body — both paid commercial licenses. Free Google Fonts equivalents that capture the same feel:

| Role     | Specified            | Why                                                                                          | License |
|----------|----------------------|----------------------------------------------------------------------------------------------|---------|
| Display  | **Fraunces**         | Transitional serif with optical sizing, high contrast, slight quirk — closest free match to IvyPresto. `// inferred substitute` | Google Fonts (OFL) |
| Sans     | **Inter**            | Neutral, screen-optimized, wide weight range, very close in tone to Sofia Pro. `// inferred substitute` | Google Fonts (OFL) |
| Mono     | **JetBrains Mono**   | For code, data tables, technical specs. Clean, no quirks.                                    | Google Fonts (OFL) |

```css
--font-display: "Fraunces", "Iowan Old Style", "Times New Roman", Georgia, serif;
--font-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
--font-mono: "JetBrains Mono", "SF Mono", Menlo, Consolas, monospace;
```

**Fraunces optical settings** (critical — gives the subtle "playful" character without going loud):
```css
font-variation-settings: "opsz" 144, "SOFT" 30, "WONK" 0;
```
- `opsz 144` for headlines ≥40px (display optical size).
- `opsz 14` for inline serif (rare).
- `SOFT 30` softens the terminals; matches IvyPresto's gentle ball terminals.
- `WONK 0` keeps it composed — set to `1` only on rare editorial moments.

### 3.2 Type Scale

Modular scale with a **1.25 (major third)** ratio, expanding to a larger jump at display sizes. All sizes in `rem` (assuming `1rem = 16px`) and `px`.

| Token          | rem      | px    | Line-height | Letter-spacing | Weight | Font     | Usage                                         |
|----------------|----------|-------|-------------|----------------|--------|----------|-----------------------------------------------|
| `display-2xl`  | 6.0rem   | 96px  | 1.02        | -0.02em        | 400    | Fraunces | Hero headline, desktop only                   |
| `display-xl`   | 4.5rem   | 72px  | 1.05        | -0.02em        | 400    | Fraunces | Section hero on landing pages                 |
| `display-lg`   | 3.5rem   | 56px  | 1.08        | -0.015em       | 400    | Fraunces | Sub-hero (mobile hero falls back to this)     |
| `h1`           | 3.0rem   | 48px  | 1.1         | -0.015em       | 400    | Fraunces | Page H1 (matches "Build your own autonomous lab" sample) |
| `h2`           | 2.25rem  | 36px  | 1.15        | -0.01em        | 400    | Fraunces | Section heading                               |
| `h3`           | 1.75rem  | 28px  | 1.2         | -0.005em       | 500    | Fraunces | Card title, subsection                        |
| `h4`           | 1.375rem | 22px  | 1.3         | 0              | 500    | Inter    | Inline subheading; sans takes over from here  |
| `h5`           | 1.125rem | 18px  | 1.35        | 0              | 600    | Inter    | Small heading, list-group label               |
| `body-lg`      | 1.25rem  | 20px  | 1.55        | 0              | 400    | Inter    | Lead paragraph, hero subtitle                 |
| `body`         | 1.0rem   | 16px  | 1.6         | 0              | 400    | Inter    | Default body                                  |
| `body-sm`      | 0.9375rem| 15px  | 1.55        | 0              | 400    | Inter    | Secondary body, dense lists                   |
| `caption`      | 0.8125rem| 13px  | 1.45        | 0.01em         | 400    | Inter    | Captions, image credits                       |
| `eyebrow`      | 0.75rem  | 12px  | 1.3         | 0.12em         | 600    | Inter    | All-caps label above headline (signature)     |
| `mono-sm`      | 0.8125rem| 13px  | 1.5         | 0              | 400    | JetBrains Mono | Code, IDs, technical data            |

### 3.3 Eyebrow Treatment (signature)

Both screenshots and the live site show an all-caps eyebrow ("AUTONOMOUS LABS", "DATAPOINTS", "OVERVIEW") with a short underline rule beneath it. Codify exactly:

```css
.eyebrow {
  font: 600 0.75rem/1.3 var(--font-sans);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--brand-ink);
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--brand-ink);
  display: inline-block;
  margin-bottom: 1.5rem;
}
```

The underline spans only the width of the eyebrow text, not the column. Critical detail.

### 3.4 When to Use Each Level

- `display-2xl` / `display-xl` → reserved for top-of-page hero. One per page max.
- `h1` → page title inside a glass panel (matches screenshots).
- `h2` → section headings throughout marketing pages.
- `h3` → card titles, feature blocks, FAQ questions.
- `h4`/`h5` → switch to **sans-serif** to give the eye a rest. The serif is for big moments only.
- `body-lg` → lead paragraph directly under a headline.
- `body` → everything else.
- `eyebrow` → before every section headline. This is the brand signature.

---

## 4. Spacing & Layout

### 4.1 Base Unit

**4px base.** Everything is a multiple of 4. The 8-point variant is too coarse for the editorial feel; 4-point gives precise control over eyebrow rules and badge geometry.

### 4.2 Spacing Scale

| Token        | Value    | Px    | Typical use                                |
|--------------|----------|-------|--------------------------------------------|
| `space-0`    | 0        | 0     | Reset                                      |
| `space-px`   | 1px      | 1     | Hairline borders                           |
| `space-0.5`  | 0.125rem | 2     | Tight inline                               |
| `space-1`    | 0.25rem  | 4     | Icon-text gap                              |
| `space-2`    | 0.5rem   | 8     | Inline form gaps                           |
| `space-3`    | 0.75rem  | 12    | Compact padding                            |
| `space-4`    | 1rem     | 16    | Default padding, paragraph gap             |
| `space-5`    | 1.25rem  | 20    | Card inner gap                             |
| `space-6`    | 1.5rem   | 24    | Card padding                               |
| `space-8`    | 2rem     | 32    | Element separator                          |
| `space-10`   | 2.5rem   | 40    | Card padding (large), button group gap     |
| `space-12`   | 3rem     | 48    | Glass panel inner padding (mobile)         |
| `space-16`   | 4rem     | 64    | Glass panel inner padding (desktop)        |
| `space-20`   | 5rem     | 80    | Section vertical rhythm (mobile)           |
| `space-24`   | 6rem     | 96    | Section vertical rhythm (tablet)           |
| `space-32`   | 8rem     | 128   | Section vertical rhythm (desktop)          |
| `space-40`   | 10rem    | 160   | Hero top/bottom (desktop)                  |

### 4.3 Container Widths

| Token              | Value    | Use                                  |
|--------------------|----------|--------------------------------------|
| `container-sm`     | 640px    | Centered prose, blog post body       |
| `container-md`     | 880px    | Form pages, narrow content           |
| `container-lg`     | 1120px   | Default marketing container          |
| `container-xl`     | 1280px   | Full-bleed hero with side gutter     |
| `container-2xl`    | 1440px   | Max page width — never wider         |

Side gutter: `clamp(1.5rem, 5vw, 4rem)`.

### 4.4 Breakpoints

| Token | Value   | Notes                                |
|-------|---------|--------------------------------------|
| `sm`  | 640px   | Phones landscape                     |
| `md`  | 768px   | Tablets portrait                     |
| `lg`  | 1024px  | Tablets landscape, small laptops     |
| `xl`  | 1280px  | Desktops                             |
| `2xl` | 1536px  | Large desktops                       |

### 4.5 Grid

12-column grid with **24px gutter** (desktop) / **16px gutter** (mobile). Glass-panel hero modules typically span **6 of 12** on desktop and **12 of 12** on mobile, with the imagery occupying the remaining columns full-bleed (matches both screenshots).

---

## 5. Border Radius, Shadows, Borders

### 5.1 Border Radius

The reference uses generous, soft corners. Glass panels in the screenshots have a notably large radius (~32px) relative to size — codify that.

| Token          | Value | Use                                              |
|----------------|-------|--------------------------------------------------|
| `radius-none`  | 0     | Reserved                                         |
| `radius-sm`    | 6px   | Small chips, tags, inline badges                 |
| `radius-md`    | 10px  | Inputs, small buttons (rare — most buttons are pill) |
| `radius-lg`    | 14px  | Cards, modals, dropdowns                         |
| `radius-xl`    | 20px  | Large cards                                      |
| `radius-2xl`   | 32px  | Glass panels — the screenshot signature `// inferred from screenshots` |
| `radius-3xl`   | 48px  | Large hero panels (full-bleed)                   |
| `radius-pill`  | 999px | All buttons (see §7.1) — pill-shaped, the brand CTA shape |
| `radius-full`  | 50%   | Avatars, circular arrow chips                    |

### 5.2 Shadows

Restrained. The reference uses almost no drop shadow — depth comes from glass blur and tonal contrast. A small set defined for occasional surfaces.

| Token         | Value                                                                              | Use                          |
|---------------|------------------------------------------------------------------------------------|------------------------------|
| `shadow-none` | none                                                                               | Default                      |
| `shadow-xs`   | `0 1px 2px rgba(14,34,51,0.04)`                                                    | Inputs on hover              |
| `shadow-sm`   | `0 2px 8px rgba(14,34,51,0.06)`                                                    | Cards on hover               |
| `shadow-md`   | `0 8px 24px rgba(14,34,51,0.08)`                                                   | Dropdowns, popovers          |
| `shadow-lg`   | `0 24px 48px rgba(14,34,51,0.12)`                                                  | Modals                       |
| `shadow-glass`| `0 24px 64px rgba(14,34,51,0.10), inset 0 1px 0 rgba(255,255,255,0.6)`             | Glass panel ambient lift     |

### 5.3 Borders

| Token           | Value                          | Use                          |
|-----------------|--------------------------------|------------------------------|
| `border-hair`   | `1px solid var(--border)`      | Default                      |
| `border-strong` | `1px solid var(--border-strong)`| Inputs, dividers in dense UI|
| `border-ink`    | `1.5px solid var(--brand-ink)` | Secondary buttons (matches "Learn more" pill outline in screenshot 1) |
| `border-rule`   | `1px solid var(--brand-ink)`   | Eyebrow underline            |

---

## 6. Motion & Interaction

### 6.1 Easing & Duration

Inferred from references; tuned to "quiet, confident."

| Token                | Value                              | Use                                    |
|----------------------|------------------------------------|----------------------------------------|
| `ease-out-quiet`     | `cubic-bezier(0.22, 1, 0.36, 1)`   | Default for entrances, hovers          |
| `ease-in-out-soft`   | `cubic-bezier(0.65, 0, 0.35, 1)`   | Position changes, modals               |
| `ease-linear`        | `linear`                           | Loading bars, marquees                 |
| `duration-instant`   | 80ms                               | Color/opacity micro-changes            |
| `duration-fast`      | 160ms                              | Hover, focus                           |
| `duration-base`      | 240ms                              | Default                                |
| `duration-slow`      | 400ms                              | Modal open, page transitions           |
| `duration-slower`    | 600ms                              | Reveal-on-scroll fades                 |

**Default transition:** `all var(--duration-fast) var(--ease-out-quiet)`.

### 6.2 Interactive States

**Buttons (primary, ink-filled):**
- Rest: `--brand-ink` background, white text, white circular arrow chip with ink arrow.
- Hover: background → `--brand-ink-700`. Arrow chip translates `+2px` x. Duration `160ms`.
- Active: background → `#0A1923` (darker ink). Arrow chip resets translate.
- Focus-visible: 2px outline ring, `--brand-ink` color, 2px offset.
- Disabled: `--gray-200` bg, `--gray-400` text, no chip animation, `cursor: not-allowed`, opacity 1.

**Buttons (secondary, outlined):**
- Rest: transparent bg, `--brand-ink` text, `1.5px solid --brand-ink`, dark arrow chip.
- Hover: bg → `rgba(14,34,51,0.06)`. Arrow chip `+2px` x.
- Active: bg → `rgba(14,34,51,0.10)`.
- Focus-visible: same as primary.

**Inputs:**
- Rest: `--gray-200` border.
- Hover: border → `--gray-300`.
- Focus: border → `--brand-ink`, **no glow ring**, just a 1px → 1.5px border thickness change. Quiet.
- Error: border → `--error`.
- Disabled: `--gray-100` bg, `--gray-400` text.

**Links (in body copy):**
- Rest: `--brand-ink`, underline with `text-underline-offset: 3px` and `text-decoration-thickness: 1px`.
- Hover: underline thickness → 2px.

### 6.3 Scroll & Page Transitions

- **Reveal on scroll:** elements fade up 12px, opacity 0 → 1, `duration-slower` `ease-out-quiet`. Trigger at 15% viewport intersection. Stagger 60ms per item in a group.
- **Page transition:** crossfade 240ms. No slide. No router flash.
- **Glass panel entrance (signature):** panel scales from 0.985 → 1 + opacity 0 → 1 over 600ms ease-out-quiet, while the background image is already in place.
- Honor `prefers-reduced-motion: reduce` — disable all transforms, keep only opacity transitions, halve durations.

---

## 7. Component Patterns

### 7.1 Buttons

**Shape:** Pill (`radius-pill`). Always include a circular arrow chip on the trailing edge for marketing CTAs (matches both screenshots and the live site). The chip is a separate inner circle — visually distinct from the button background.

**Variants:**

| Variant       | Bg                  | Text             | Border                 | Chip bg          | Chip arrow      | Use                              |
|---------------|---------------------|------------------|------------------------|------------------|-----------------|----------------------------------|
| **Primary**   | `--brand-ink`       | `#FFFFFF`        | none                   | `#FFFFFF`        | `--brand-ink`   | The main CTA per section ("Book a meeting") |
| **Secondary** | transparent         | `--brand-ink`    | `1.5px var(--brand-ink)` | `--brand-ink`  | `#FFFFFF`       | Adjacent option ("Learn more")   |
| **Ghost**     | transparent         | `--brand-ink`    | none                   | none (no chip)   | —               | Tertiary, in-flow text actions   |
| **Destructive** | `--error`         | `#FFFFFF`        | none                   | `#FFFFFF`        | `--error`       | Form-level destructive only      |

**Sizes:**

| Size    | Height | Padding-x | Font           | Chip diameter |
|---------|--------|-----------|----------------|---------------|
| `sm`    | 36px   | 16px      | `body-sm` 500  | 24px          |
| `md`    | 48px   | 24px      | `body` 500     | 32px          |
| `lg`    | 56px   | 28px      | `body` 500     | 36px          |
| `xl`    | 64px   | 32px      | `body-lg` 500  | 40px          |

Chip sits with `8px` gap from the label. Arrow icon is `chevron-right`, 50% of chip diameter, stroke 2px.

### 7.2 Inputs & Form Fields

- **Height:** 48px default (matches button `md`).
- **Border:** 1px `--gray-200`, `radius-md`.
- **Padding:** 12px horizontal, no inner shadow.
- **Label:** above the input, `body-sm` weight 500, 6px gap.
- **Helper text:** below, `caption`, `--text-muted`.
- **Error message:** below, `caption`, `--error`, 4px gap.
- **No floating labels** — they feel dated against the editorial tone.
- **Required marker:** `*` in `--error`, 4px after label.
- **Textarea:** same styling, `min-height: 120px`, `resize: vertical`.
- **Select:** native styling reset, custom chevron icon at right (Lucide `chevron-down`, 16px, `--brand-ink`).
- **Checkbox / Radio:** 18px square / circle, 1.5px border `--gray-300`, checked → `--brand-ink` fill with white check (Lucide `check`).

**Contact form pattern** (reference site uses this as a key conversion module): two-column layout on desktop (First name | Last name), single-column for email and message. Submit is a primary `lg` button. Fits inside a `--surface` card with `radius-xl`, `space-10` padding.

### 7.3 Glass Panel (signature component)

This is the hero pattern from both screenshots. The most important component to nail.

**Visual:** A frosted, semi-transparent panel sitting on top of contextual imagery, holding the eyebrow, headline, sub-headline, and CTA pair.

**Structure:**
```
.glass-panel
├── .eyebrow (with underline rule)
├── h1 / h2 (Fraunces, display-lg or h1)
├── .lead (body-lg, --brand-ink)
├── .description (body, --text-muted, optional)
└── .cta-row (button-group, gap space-3)
```

**Specs:**
```css
.glass-panel {
  background: var(--surface-glass);              /* rgba(255,255,255,0.55) */
  backdrop-filter: blur(24px) saturate(140%);
  -webkit-backdrop-filter: blur(24px) saturate(140%);
  border-radius: var(--radius-2xl);              /* 32px */
  padding: clamp(2rem, 5vw, 4rem);               /* space-12 → space-16 */
  box-shadow: var(--shadow-glass);
  border: 1px solid rgba(255,255,255,0.5);       /* subtle inner highlight */
  max-width: 560px;
}

/* Fallback for browsers without backdrop-filter (older Firefox, low-end devices) */
@supports not (backdrop-filter: blur(24px)) {
  .glass-panel {
    background: rgba(255, 255, 255, 0.92);
  }
}
```

**Behind it:** a full-bleed image at `object-fit: cover`, OR a mood-wash gradient with a sparse line-art illustration on the right (matches screenshot 2). Image opacity 1.0 — do **not** darken or overlay it. The blur is what makes the text legible.

**Mobile:** panel becomes full-width with side gutter; image sits above or below at fixed aspect-ratio 4:3.

### 7.4 Cards

**Default card:**
- `--surface` background, `1px solid var(--border)`, `radius-lg` (14px).
- Padding: `space-6` (24px) default, `space-10` (40px) for feature cards.
- No shadow at rest. On hover (clickable cards only): `shadow-sm`, border darkens to `--border-strong`, `transform: translateY(-2px)`, `duration-base`.
- Title in `h3`, body in `body`, optional `eyebrow` above title.

**Glass card (alternate):** same as Glass Panel but smaller — for use as feature cards on a tinted section background. Wash the section with `--wash-mist` or `--wash-blush`, then place 2–3 glass cards on top.

**Image-led card** (reference's "Hardware / Software / Support" pattern on /automation-product):
- Image fills top of card, `aspect-ratio: 4/3`, `radius-lg` on outer card with image inheriting top corners.
- Below image: `space-6` padding, eyebrow-style category label, `h3` title, "Learn More" ghost button with chevron chip.
- Used in 3-column grid for service/product overview.

### 7.5 Navigation

**Top nav (desktop):**
- Sticky, `--bg` background with `backdrop-filter: blur(8px)` and 80% opacity once scrolled.
- 72px height.
- Logo left, nav links center-or-right, primary CTA far right.
- Nav links: `body-sm`, weight 500, `--brand-ink`, 24px gap. Hover → underline appears 3px below text, `--brand-ink`, animates from 0→100% width over 200ms.
- Dropdowns (e.g. "Build Your Own Lab" → submenu): mega-menu pattern, full container width, `--surface` bg, `shadow-md`, `radius-lg`, 32px padding, 3-column grid of links with eyebrow groupings (matches reference's nav structure).

**Top nav (mobile):**
- Hamburger right, logo left.
- Open: full-screen sheet, `--bg`, links stacked at `h3` size, primary CTA fixed at bottom.

### 7.6 Modals / Dialogs

- Backdrop: `rgba(14,34,51,0.5)` with 4px blur. Fade in 240ms.
- Dialog: `--surface`, `radius-xl` (20px), `shadow-lg`, max-width 520px (sm) / 720px (md) / 960px (lg).
- Padding: `space-8` (32px) all sides.
- Header: `h3` title left, close button (Lucide `x`, ghost button) right.
- Body: `body`, scrollable if overflows.
- Footer: button row, right-aligned. Primary CTA last.
- Animate: opacity 0 → 1, `transform: scale(0.97) → scale(1)`, `duration-slow`.
- Close on ESC, on backdrop click, on close button. Trap focus.

### 7.7 FAQ Accordion (reference uses extensively)

The reference site's `/automation-product` page uses a long FAQ accordion as a conversion-supporting pattern. Codify:

- Each item: full-width row, `1px solid var(--border)` top border, `space-6` (24px) vertical padding.
- Question (closed): `h4` (sans), `--brand-ink`, with a chevron-down icon 20px on the right, rotates 180° on open.
- Answer (open): `body`, `--text-muted`, `space-4` top margin, `space-6` bottom margin before the next border.
- Animate height: `400ms ease-in-out-soft`. Chevron rotates `300ms ease-out-quiet`.
- One item at a time is the default; allow multi-open via prop.
- Keyboard: `Enter`/`Space` toggles, focus ring on the question button.

### 7.8 Tables / Lists

**Tables** (pricing, feature matrices):
- No vertical borders. Horizontal `--border` rules between rows only.
- Header row: `caption` weight 600, `--text-muted`, uppercase, `letter-spacing: 0.06em`, 16px vertical padding.
- Body rows: `body`, 20px vertical padding. Hover row → `--gray-50` background.
- Numeric columns right-aligned, `--font-mono` `body-sm`.
- Highlighted column ("recommended"): subtle `--wash-blush` background, `--brand-ink` 1.5px top-and-bottom border to bracket.

**Feature lists** (the "How is X Differentiated?" pattern from the reference):
- 3-column grid on desktop, single column on mobile, gap `space-10`.
- Each item: small DNA-strand SVG divider above (decorative, see §9.3), `h3` title, `body` description `--text-muted`, 8px gap between title and description.
- No background, no border. Whitespace and the divider mark the item boundary.

**Press/news lists** (reference pattern):
- Each item: `caption` "PRESS" eyebrow, `caption` date below, `body` headline as link.
- Stack with `1px solid var(--border)` between items, `space-6` vertical padding.
- Hover: headline underline appears.

### 7.9 Empty / Loading / Error States

**Empty state:**
- Centered in container.
- Lucide icon 32px, `--gray-400`.
- `h4` heading, `body` description `--text-muted`.
- Single primary CTA below.
- 80px vertical padding minimum.

**Loading state:**
- **Skeletons** (preferred over spinners for content): `--gray-100` blocks at the shape of the incoming content, with a left-to-right shimmer (`linear-gradient` keyframe, 1.4s `ease-linear` infinite).
- **Spinner** (only for buttons/inline): 16px circle, 2px stroke, `--brand-ink`, animates 0.8s `linear` infinite.
- **Page-level loading:** thin 2px progress bar at top of viewport, `--brand-ink`, indeterminate.

**Error state:**
- Inline (form): `caption` text, `--error`, with Lucide `alert-circle` icon 14px to the left.
- Block (page error): centered, Lucide `alert-triangle` 32px `--error`, `h4` heading, `body` description, "Try again" secondary button.

### 7.10 Logo Marquee (trust-signal row)

The reference's "Trusted by 130+ customers" pattern is worth codifying for any biotech marketing site.

- Section: `--bg` background, `space-16` vertical padding.
- Eyebrow above: "TRUSTED BY OVER 130 CUSTOMERS" (or equivalent).
- Logos: monochrome, all set to `--gray-500` opacity 0.7 by default. Height fixed at 32px, width auto, gap `space-12` (48px).
- Animation: horizontal infinite scroll, `40s linear infinite`. Pause on hover. Duplicate the logo set so the scroll appears seamless.
- Honor `prefers-reduced-motion` — switch to static grid if reduced.

---

## 8. Iconography

- **Library:** [Lucide](https://lucide.dev). Outlined, geometric — matches the line-art aesthetic in screenshot 2 and the reference's illustrations.
- **Style:** Outlined only. Never mix filled.
- **Stroke:** 2px default. Use 1.5px for icons ≥32px.
- **Sizes:** 14, 16, 20, 24, 32, 40, 48px. Stick to the scale.
- **Color:** inherits `currentColor` — set on parent. Default `--brand-ink`.
- **Arrow chip on buttons** uses `chevron-right`, not `arrow-right` — softer, matches the rounded brand.

**Biology/chemistry iconography** (DNA, molecules, pipettes, plates): Lucide doesn't cover these. Use **custom inline SVGs** in the same style — 1.5–2px stroke, `currentColor`, 24×24 viewBox. The reference uses a **custom DNA-strand SVG** as a recurring decorative divider (`dna%20strandsvg.svg`) — recreate this as a 32px wide, 1.5px stroke `--brand-ink` SVG and use it above feature-list items as a section motif. Treat it as part of the brand toolkit, not interactive iconography.

---

## 9. Imagery & Illustration

### 9.1 Photography

- **Subject:** real labs, real people, real instruments. Never composited or AI-generated marketing stock.
- **Treatment:** clean, neutral white-balance. Slight desaturation acceptable. **No filters, no gradient overlays.**
- **Color cast:** photos should pull toward cool/neutral so they harmonize with the mood washes.
- **Composition:** subjects often offset to one side, leaving negative space for the glass panel to overlap. Both screenshots show this: subject right, panel left.
- **File format:** AVIF first, WebP fallback, JPEG last resort.
- **Aspect ratios:** 16:9 (heroes), 4:3 (cards), 1:1 (avatars only).

### 9.2 Abstract Line-Art Illustration

- **Style:** abstract scientific line-art. Thin (1px) strokes in `--brand-ink`, no fills. Geometric — circles, ellipses, intersecting curves with sparse data labels (matches screenshot 2's right side: "D 57", "N 23", "J 52", "T 27" floating beside circular arcs).
- **Use:** for sections where a literal photo doesn't exist (data, AI/ML, abstract concepts).
- **Color:** monochrome `--brand-ink` only. The mood wash behind it provides the warmth.
- **Don't:** use 3D renders, gradients-within-illustrations, or character illustration. It would break the quiet tone instantly.

### 9.3 Decorative Section Motifs

The reference uses two recurring decorative SVGs:
- **DNA-strand divider** — small (~32px wide), placed above feature-list titles as a quiet section motif. Recreate with a single sinusoidal path with intersecting hatch lines, 1.5px stroke `--brand-ink`.
- **Squiggle divider** — a horizontal hand-drawn squiggle (~120px wide, 16px tall), 1.5px stroke `--brand-ink`, used as a soft section break in place of a hard rule.

Use these sparingly — one per section maximum. They are the only "playful" element allowed.

---

## 10. Accessibility Baseline

- **Contrast:** WCAG **AA minimum** for all text; AAA for body copy. The neutral scale is built to deliver this.
- **Focus rings:** visible on all interactive elements via `:focus-visible`. 2px solid `--brand-ink`, 2px offset, no glow.
- **Tab order:** strict DOM order. Skip-to-content link at the top of every page (visually hidden until focused).
- **Keyboard navigation:** all menus, modals, dropdowns, accordions operable by keyboard. Modals trap focus and restore on close.
- **ARIA:** label every icon-only button. Use semantic HTML first (`<nav>`, `<button>`, `<dialog>`, `<details>`); ARIA only as fallback.
- **Forms:** every input has a `<label>`. Errors linked via `aria-describedby`. Required fields marked both visually and with `aria-required`.
- **Motion:** honor `prefers-reduced-motion: reduce` — replace transforms with opacity-only fades, halve durations, freeze logo marquee.
- **Color:** never use color alone to convey meaning (e.g. error state needs an icon + text, not just red).
- **Touch targets:** minimum 44×44px. Buttons are 48px+ by default — already compliant.
- **Image alt text:** required, descriptive. Decorative images (DNA-strand divider, squiggle) get `alt=""`, not omitted.
- **Heading order:** never skip levels. One `<h1>` per page.

---

## 11. Implementation Notes

### 11.1 Recommended Stack

- **CSS approach:** **Tailwind CSS v4** (config-as-CSS) with a token layer in CSS custom properties. Tokens live in CSS variables for clarity and easy override.
- **Component primitives:** Radix UI or React Aria Components for behavior (dialogs, dropdowns, popovers, accordions). Style with Tailwind.
- **Fonts:** load Fraunces and Inter via self-hosting (preferred for performance + privacy) or Google Fonts `<link rel="preconnect">` + `<link>` tag.
- **Icons:** `lucide-react` (or `lucide` for vanilla) — single import, tree-shakable.
- **Image optimization:** Next.js `next/image` or equivalent for AVIF/WebP serving and lazy loading.

### 11.2 Starter Token Block

Drop this into `globals.css`:

```css
:root {
  /* === Brand Ink === */
  --brand-ink: #0E2233;
  --brand-ink-700: #1A3247;
  --brand-ink-500: #3A556B;
  --brand-ink-300: #7E94A8;

  /* === Mood Washes === */
  --wash-mist:  #E8E9EF;  /* hardware / automation / lab */
  --wash-blush: #F3DCEA;  /* data / AI / software */
  --wash-sand:  #EFE8DC;  /* services / biology / applications */
  --wash-sage:  #DDE8DD;  /* customer stories / sustainability */

  /* === Neutrals === */
  --gray-50:  #FAFAFB;
  --gray-100: #F4F4F6;
  --gray-200: #E7E8EC;
  --gray-300: #D2D5DC;
  --gray-400: #A8ADB8;
  --gray-500: #7B8090;
  --gray-600: #565C6B;
  --gray-700: #3B414E;
  --gray-800: #252A35;
  --gray-900: #15191F;
  --gray-950: #0A0C10;

  /* === Semantic === */
  --success:    #2F7D5B;  --success-bg: #E6F2EC;
  --warning:    #A86A1F;  --warning-bg: #FAEFD9;
  --error:      #B23A3A;  --error-bg:   #F8E3E3;
  --info:       #2D5DA8;  --info-bg:    #E4ECF8;

  /* === Surfaces === */
  --bg: #FFFFFF;
  --bg-app: #FAFAFB;
  --surface: #FFFFFF;
  --surface-2: #F4F4F6;
  --surface-glass: rgba(255,255,255,0.55);
  --border: #E7E8EC;
  --border-strong: #D2D5DC;
  --text: #0E2233;
  --text-muted: #565C6B;
  --text-subtle: #7B8090;
  --text-on-ink: #FFFFFF;

  /* === Type === */
  --font-display: "Fraunces", "Iowan Old Style", "Times New Roman", Georgia, serif;
  --font-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: "JetBrains Mono", "SF Mono", Menlo, Consolas, monospace;

  /* === Radius === */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 14px;
  --radius-xl: 20px;
  --radius-2xl: 32px;
  --radius-3xl: 48px;
  --radius-pill: 999px;

  /* === Shadows === */
  --shadow-xs: 0 1px 2px rgba(14,34,51,0.04);
  --shadow-sm: 0 2px 8px rgba(14,34,51,0.06);
  --shadow-md: 0 8px 24px rgba(14,34,51,0.08);
  --shadow-lg: 0 24px 48px rgba(14,34,51,0.12);
  --shadow-glass: 0 24px 64px rgba(14,34,51,0.10), inset 0 1px 0 rgba(255,255,255,0.6);

  /* === Motion === */
  --ease-out-quiet: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-in-out-soft: cubic-bezier(0.65, 0, 0.35, 1);
  --duration-instant: 80ms;
  --duration-fast: 160ms;
  --duration-base: 240ms;
  --duration-slow: 400ms;
  --duration-slower: 600ms;
}

html { font-family: var(--font-sans); color: var(--text); background: var(--bg); }
body { font-size: 1rem; line-height: 1.6; -webkit-font-smoothing: antialiased; }

h1, h2, h3 {
  font-family: var(--font-display);
  font-weight: 400;
  font-variation-settings: "opsz" 144, "SOFT" 30;
  color: var(--brand-ink);
  letter-spacing: -0.015em;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 11.3 Tailwind v4 Token Mapping

```css
/* tailwind.css */
@import "tailwindcss";

@theme {
  /* Colors */
  --color-ink: #0E2233;
  --color-ink-700: #1A3247;
  --color-ink-500: #3A556B;
  --color-ink-300: #7E94A8;
  --color-wash-mist: #E8E9EF;
  --color-wash-blush: #F3DCEA;
  --color-wash-sand: #EFE8DC;
  --color-wash-sage: #DDE8DD;

  /* Type */
  --font-display: "Fraunces", serif;
  --font-sans: "Inter", sans-serif;
  --font-mono: "JetBrains Mono", monospace;

  /* Radius */
  --radius-2xl: 32px;
  --radius-pill: 999px;

  /* Easing */
  --ease-quiet: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-soft: cubic-bezier(0.65, 0, 0.35, 1);
}
```

This makes the system available as `bg-ink`, `text-wash-blush`, `font-display`, `rounded-pill`, etc.

### 11.4 Resolved Decisions (no open questions)

All design questions for v1 have been resolved against the reference site:

1. **Brand accent** → no saturated accent. Ink + neutral + 4 mood washes carry the entire brand. Confirmed across ginkgo.bio homepage and product pages.
2. **Mood wash assignment** → fixed mapping by section type (see §2.2 table). Each service permanently owns one wash for visual consistency across the site.
3. **Headline font** → Fraunces (Google Fonts, free) is the spec'd default. Captures the IvyPresto Display feel without licensing cost.
4. **Dark mode** → not in scope. Light mode only.
5. **Glass panel browser fallback** → `@supports not (backdrop-filter)` falls back to `rgba(255,255,255,0.92)` solid panel. Same radius, same shadow, no blur. Documented in §7.3.
6. **Component scope** → marketing-site only (no logged-in product area). Components covered: nav, hero glass panel, image-led cards, feature grid with DNA motif, FAQ accordion, contact form, logo marquee, press list, modals, empty/loading/error states. No data tables with sort/filter, no dashboards, no auth flows.
7. **Iconography** → Lucide for UI; custom inline SVG (DNA strand, squiggle divider) for biology motifs and decorative section breaks. Both treated as part of the brand toolkit.
