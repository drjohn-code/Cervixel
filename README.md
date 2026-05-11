# Cervixel — Official Marketing Website

Official website for **Cervixel**, a Lithuanian biotechnology startup focused on CRISPR-based molecular diagnostics. The site establishes scientific credibility with biotech, pharma, clinical, and investor audiences, drives preorders for RapidCan, and generates qualified service leads.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Site Architecture](#site-architecture)
- [Database](#database)
- [SEO & AI Discoverability](#seo--ai-discoverability)
- [Design System](#design-system)
- [Performance & Accessibility](#performance--accessibility)
- [Deployment](#deployment)
- [Project Documents](#project-documents)

---

## Project Overview

| Field | Value |
|---|---|
| Company | Cervixel |
| Category | Biotechnology / molecular diagnostics |
| HQ | Kastonu gatve 4, 01107, Vilnius, Lithuania |
| Flagship product | RapidCan — CRISPR-based cervical cancer rapid diagnostic test |
| Regulatory status | Under CE marking review (IVDR pathway); clinical studies ongoing |
| Product launch (est.) | Early 2028 |
| Pages | 10 — Home, RapidCan product page, services hub, 6 service pages, About, Contact |

### Goals (in priority order)

1. Establish scientific credibility with biotech, pharma, clinical, and investor audiences
2. Convert preorders for RapidCan
3. Generate qualified leads across five service lines
4. Build organic visibility in traditional search (Google, Bing) and AI/LLM answer engines

---

## Tech Stack

| Layer | Tooling |
|---|---|
| Framework | Next.js 14+ (App Router) |
| Language | TypeScript — strict mode throughout |
| Styling | Tailwind CSS |
| Database / Auth / Storage | Supabase (PostgreSQL) |
| Payments | Stripe |
| Deployment | Vercel |
| Analytics | Vercel Analytics + Google Search Console + Bing Webmaster Tools |

### Key conventions

- **Server Components by default.** Use `'use client'` only when interactivity requires it; add a one-line justification comment at the top of the file.
- **SEO via the Next.js Metadata API.** Every page exports `generateMetadata` (or `metadata` if static) — title, description, OpenGraph, Twitter Card, and `alternates.canonical`.
- **Dynamic `sitemap.ts` and `robots.ts`** in `app/`. All major AI crawlers are explicitly allowed: `GPTBot`, `Google-Extended`, `PerplexityBot`, `ClaudeBot`, `Bingbot`.
- **`llms.txt`** at `public/llms.txt` — lists canonical URLs of all pillar pages for LLM discoverability.
- **Images** via `next/image` with descriptive `alt`, explicit dimensions, `sizes`, and AVIF/WebP formats.
- **Fonts** via `next/font` (Inter or DM Sans), `display: 'swap'`.
- **Supabase** — server-side client only in Server Components and Route Handlers. Service-role key never exposed to the client. RLS enforced on every table.
- **Forms** — Server Actions or Route Handlers. Zod validation server-side. Never rely on client-side validation alone.
- **Stripe webhooks** — Route Handler with signature verification. Orders persisted in Supabase.
- **TypeScript** — avoid `any`; use generated Supabase types (`supabase gen types typescript`).

---

## Getting Started

### Prerequisites

- Node.js ≥ 18
- `pnpm` (recommended) or `npm`
- Supabase CLI
- Stripe CLI (for local webhook testing)

### Installation

```bash
git clone <repo-url>
cd cervixel-website
pnpm install
```

### Local development

```bash
# Start the Next.js dev server
pnpm dev

# In a separate terminal — forward Stripe webhooks locally
stripe listen --forward-to localhost:3000/api/webhooks/stripe

# Generate Supabase TypeScript types after schema changes
supabase gen types typescript --project-id <your-project-id> > types/supabase.ts
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the values. **Never commit `.env.local`.**

```bash
cp .env.example .env.local
```

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL (safe to expose) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key (safe to expose) |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service-role key — **server-side only** |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key |
| `STRIPE_SECRET_KEY` | Stripe secret key — **server-side only** |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook signing secret |
| `RESEND_API_KEY` | Transactional email provider API key |
| `NEXT_PUBLIC_SITE_URL` | Canonical domain (e.g. `https://cervixel.com`) |

In production, all variables are set in the Vercel project settings — not in any committed file.

---

## Site Architecture

```
app/
├── (marketing)/
│   ├── page.tsx                          → Homepage
│   ├── products/
│   │   └── rapidcan/page.tsx             → RapidCan product page
│   ├── services/
│   │   ├── page.tsx                      → Services hub
│   │   ├── crispr-assay-development/page.tsx
│   │   ├── molecular-diagnostics-consulting/page.tsx
│   │   ├── clinical-validation-support/page.tsx
│   │   ├── regulatory-strategy/page.tsx
│   │   ├── contract-research/page.tsx
│   │   └── global-procurement/page.tsx
│   ├── about/page.tsx
│   └── contact/page.tsx
├── api/
│   ├── webhooks/stripe/route.ts
│   └── contact/route.ts
├── sitemap.ts
└── robots.ts

public/
└── llms.txt

components/
├── ui/                                   → Shared primitives (Button, Card, Section…)
└── ...                                   → Feature components

types/
└── supabase.ts                           → Auto-generated from Supabase schema
```

Maximum 3 clicks from the homepage to any important page. Every non-homepage page has a breadcrumb.

### Services

| # | Service | Slug |
|---|---|---|
| 1 | CRISPR assay development | `/services/crispr-assay-development` |
| 2 | Molecular diagnostics consulting | `/services/molecular-diagnostics-consulting` |
| 3 | Clinical validation support | `/services/clinical-validation-support` |
| 4 | Regulatory strategy | `/services/regulatory-strategy` |
| 5 | Contract research | `/services/contract-research` |
| 6 | Global procurement services | `/services/global-procurement` |

---

## Database

Schema-first workflow: design tables and RLS policies before building any UI. Provide migration SQL for every schema change.

### Tables

| Table | Purpose |
|---|---|
| `contact_submissions` | Contact form submissions |
| `preorders` | Preorder records (tier, units, Stripe session, status) |
| `newsletter_subscribers` | Email capture |

### RLS policy approach

- **Default deny all.** Add explicit `SELECT` / `INSERT` / `UPDATE` / `DELETE` policies per role.
- Service-role bypasses are used only server-side and only when strictly necessary, with a documented comment.

### Type generation

Run after every migration:

```bash
supabase gen types typescript --project-id <your-project-id> > types/supabase.ts
```

---

## SEO & AI Discoverability

Every page is optimised for both traditional search engines and AI/LLM citation engines (GEO + AEO). Full rules are in [`SEO_GUIDELINES.md`](./SEO_GUIDELINES.md).

### Non-skippable checklist per page

- [ ] One primary keyword, one search intent
- [ ] Title tag: 50–60 characters, `Primary Keyword – Secondary | Cervixel`
- [ ] Meta description: 140–160 characters, unique, soft CTA
- [ ] One `<h1>` containing the primary keyword
- [ ] H2s phrased as questions where natural
- [ ] Direct-answer block in the first 40–60 words (self-contained)
- [ ] At least one statistic with a cited source
- [ ] At least one comparison table or structured list
- [ ] 3–8 internal links with descriptive anchor text (never "click here")
- [ ] 2–4 outbound links to authoritative sources
- [ ] JSON-LD structured data validated in Google's Rich Results Test
- [ ] Author byline with bio

### Schema markup map

| Page | Schemas |
|---|---|
| Homepage | `Organization`, `WebSite` + `SearchAction` |
| RapidCan | `Product` + `Offer`, `FAQPage`, `BreadcrumbList` |
| Service pages | `Service`, `BreadcrumbList`, `FAQPage` (if applicable) |
| About | `AboutPage`, `Organization`, `Person` (CEO) |
| Contact | `ContactPage`, `Organization` |

---

## Design System

### Palette (confirm with brand before finalising)

| Token | Value |
|---|---|
| Primary | Deep teal — `#0F4C5C` |
| Accent | Warm amber or coral (CTAs and award callouts only) |
| Neutrals | Slate greys |

Tone: clinical precision with accessible warmth. Premium European life-sciences brand — not sterile, not flashy.

### Typography

- **Font:** Inter or DM Sans via `next/font`, `display: 'swap'`
- **Body minimum:** 16px, line-height 1.5–1.7

### Iconography

- Lucide or Phosphor — line-only icons, no filled cartoon styles
- Photography: microscopy, clinical settings, human-centred health. No stock-photo clichés.

### Component location

Shared primitives live in `components/ui/` (Button, Card, Section, Container, etc.). Palette and fonts are defined in `tailwind.config.ts` under `theme.extend`.

---

## Performance & Accessibility

### Core Web Vitals targets (mobile and desktop)

| Metric | Target |
|---|---|
| LCP | < 2.5 s |
| INP | < 200 ms |
| CLS | < 0.1 |

Verify with Google PageSpeed Insights and Lighthouse.

### WCAG 2.1 AA

- Semantic HTML5 throughout
- Visible focus states; full keyboard navigation
- Color contrast ≥ 4.5:1 for body text
- All form labels programmatically associated; errors announced to screen readers
- Alt text on every meaningful image; `alt=""` on decorative images
- Tap targets ≥ 48×48 px

---

## Deployment

The site deploys to **Vercel** from the main branch.

- HTTPS is enforced site-wide by default on Vercel.
- All environment variables are stored in Vercel project settings.
- Content Security Policy headers are configured in `next.config.js` — review during launch hardening.
- Stripe webhook signature verification is required on every event before any DB write.

### Vercel integrations to enable

- Vercel Analytics
- Google Search Console (via DNS verification)
- Bing Webmaster Tools

---

## Project Documents

| Document | Purpose |
|---|---|
| [`CLAUDE.md`](./CLAUDE.md) | Full project brief — canonical source of truth for all technical and brand decisions |
| [`SEO_GUIDELINES.md`](./SEO_GUIDELINES.md) | Master SEO and AI discoverability rules — authoritative for all content and metadata output |

Both documents must be reviewed before any output that ships to users.

---

## Important Constraints

- **Do not state RapidCan is CE certified** — it is under CE marking review (IVDR pathway).
- **Do not invent or exaggerate scientific claims, study results, or regulatory approvals.**
- **Do not store or collect sensitive health information** — this is a marketing site, not a clinical platform.
- **Do not expose the Supabase service-role key** to any client-side code.
- The `"100% diagnostic accuracy"` claim requires regulatory/legal sign-off before publication — see `CLAUDE.md` §14.
