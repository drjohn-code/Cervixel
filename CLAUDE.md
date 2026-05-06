# CLAUDE.md — Cervixel Website

> **Purpose.** Single source of truth for any AI assistant or developer working on the Cervixel website. Read this before generating code, copy, schema, or architectural decisions. For SEO and content rules, this file is a summary — `SEO_GUIDELINES.md` is authoritative and must be consulted in parallel for any output that ships to users.

---

## Table of Contents

1. [Project Snapshot](#1-project-snapshot)
2. [Company & Brand Facts](#2-company--brand-facts)
3. [Audience & Voice](#3-audience--voice)
4. [Tech Stack & Conventions](#4-tech-stack--conventions)
5. [Site Architecture](#5-site-architecture)
6. [Page Specifications](#6-page-specifications)
7. [SEO & AI Discoverability — Working Rules](#7-seo--ai-discoverability--working-rules)
8. [Schema Markup Map](#8-schema-markup-map)
9. [Performance, Accessibility, Security](#9-performance-accessibility-security)
10. [Database & Supabase Conventions](#10-database--supabase-conventions)
11. [Design System](#11-design-system)
12. [Working Principles for the Assistant](#12-working-principles-for-the-assistant)
13. [Hard Constraints & Things Never to Do](#13-hard-constraints--things-never-to-do)
14. [Open Questions / To Be Confirmed](#14-open-questions--to-be-confirmed)

---

## 1. Project Snapshot

- **Project:** Official marketing website for **Cervixel**, a Lithuanian biotechnology startup.
- **Goals (in priority order):**
  1. Establish scientific credibility with biotech, pharma, clinical, and investor audiences.
  2. Convert preorders for the flagship product (CervixScan).
  3. Generate qualified service leads across five service lines.
  4. Build organic visibility in both traditional search and AI/LLM answer engines.
- **Total pages:** 11 — Home, 1 product page, 5 service pages, About, Contact, Blog index, Blog article template.
- **Estimated product launch:** early 2028. All preorder flows must reflect this.

---

## 2. Company & Brand Facts

These values are **canonical**. Use them byte-identically across the site, schema, social profiles, and any third-party listing (per `SEO_GUIDELINES.md` §2.1 — NAP consistency).

| Field | Value |
|---|---|
| Brand name | **Cervixel** |
| Brand category | Biotechnology / molecular diagnostics |
| HQ | Kastonu gatve 4, 01107, Vilnius, Lithuania |
| Phone | +370 669 57208 |
| Email | info@cervixel.com |
| Founder & CEO | John Muhammadi, M.D., MBA |
| Flagship product | **CervixScan** — CRISPR-based cervical cancer rapid diagnostic test |
| Mission framing | Democratising early cancer detection through CRISPR-based home diagnostics, aligned with the WHO 2030 cervical cancer elimination goal. |

**Awards & recognition (verified — safe to use):**
- 1st place, Hospiton Cancer Hackathon
- Invited to Cambridge University

**Founding-team university affiliations (use as a credibility strip, not as endorsements):**
Cambridge University · Imperial College London · London Business School · Karolinska Institute · KTH Royal Institute of Technology · Uppsala University · Stockholm School of Economics · ISM University of Management and Economics (Vilnius) · IMC Vilnius.

**Regulatory status (state precisely — do not overclaim):**
- CervixScan is **under CE marking review** (IVDR pathway).
- Clinical studies are **active / ongoing**.
- Operating jurisdiction: Lithuania (EU).

---

## 3. Audience & Voice

### Primary audiences
1. **Biotech & pharmaceutical companies** evaluating Cervixel as a partner, supplier, or service provider.
2. **Researchers** in academic, clinical, and industrial settings.
3. **Clinicians** seeking clinically relevant products and resources.
4. **Institutional buyers and distributors** (preorder tiers are sized for them, not consumers).
5. **Investors and grant bodies** assessing the company.

### Voice
- Professional, direct, evidence-based. Scientific rigor over marketing hype.
- Active voice. Second person (“you”) for the reader; first person plural (“we”) for Cervixel.
- Short paragraphs (2–4 sentences). Concrete numbers. Cite sources for every external statistic.
- Never claim regulatory approvals not yet held. Use phrases like “under CE marking review” and “active clinical studies underway.”

---

## 4. Tech Stack & Conventions

| Layer | Tooling |
|---|---|
| Framework | Next.js (App Router) |
| Language | TypeScript, **strict mode** — avoid `any` unless justified inline |
| Styling | Tailwind CSS |
| Database / Auth / Storage | Supabase (PostgreSQL) |
| Deployment | Vercel |

### Non-negotiables when generating code
- **Server Components by default.** Use Client Components only when interactivity demands it (`'use client'` at the top of the file, with a one-line justification comment).
- **SEO via the Next.js Metadata API.** Every page exports `generateMetadata` (or `metadata` if static) including title, description, OpenGraph, Twitter Card, and `alternates.canonical`.
- **Dynamic `sitemap.ts` and `robots.ts`** in the `app/` root. Allow major AI crawlers explicitly: `GPTBot`, `Google-Extended`, `PerplexityBot`, `ClaudeBot`, `Bingbot`.
- **`llms.txt`** at the domain root, listing canonical URLs of pillar pages, the product page, service pages, About, and Contact.
- **Images** via `next/image` with descriptive `alt`, explicit dimensions, `sizes`, and modern formats (AVIF/WebP via Next defaults).
- **Fonts** via `next/font` (Inter or DM Sans) with `display: 'swap'`.
- **Supabase**: server-side client in Server Components and Route Handlers; never expose the service-role key to the client. Apply RLS to every table that holds user or business data. Use `supabase gen types typescript` and import the generated types.
- **Forms (contact, preorder)**: Server Actions or Route Handlers. Validate with Zod on the server. Never trust client-side validation alone.
- **Payments (preorder)**: Stripe. Stripe webhooks via a Route Handler with signature verification. Persist orders in Supabase.
- **Analytics**: Vercel Analytics + Google Search Console + Bing Webmaster Tools. Optional: PostHog or Plausible if requested.

### File and route naming
- Routes are lowercase, hyphenated, descriptive (`/services/regulatory-affairs`, not `/services/regAffairs`).
- Component files: PascalCase. Utility files: camelCase. Route segments: kebab-case.

---

## 5. Site Architecture

```
/
├── (marketing)
│   ├── /                                  → Homepage
│   ├── /products/cervixscan                → Product landing page
│   ├── /services                           → Services index (optional hub)
│   ├── /services/regulatory-affairs
│   ├── /services/product-development
│   ├── /services/quality-assurance
│   ├── /services/market-research
│   ├── /services/medical-writing
│   ├── /about
│   ├── /contact
│   ├── /blog
│   └── /blog/[slug]
├── /api/...                                → Route handlers (Stripe webhooks, contact form)
├── sitemap.ts
├── robots.ts
└── llms.txt (in /public)
```

- **Maximum 3 clicks** from the homepage to any important page (`SEO_GUIDELINES.md` §11.1).
- **Topic clusters:** the product page is a pillar; blog articles on cervical cancer / CRISPR / screening link back to it. Each service page is its own pillar.
- **Breadcrumbs** on every non-homepage page, with `BreadcrumbList` schema.

---

## 6. Page Specifications

Every page must follow the per-page brief format in `SEO_GUIDELINES.md` §16 (primary keyword, intent, slug, title, meta, H1, direct-answer block, H2 list, required elements, schema type, word-count target).

### 6.1 Homepage
- **Intent:** transactional + informational (brand discovery → product preorder or service inquiry).
- **Word count:** 600–1,200.
- **Sections (in order):** Hero · The problem we solve (stat blocks: 660,000 new cases/year, 350,000 deaths/year, 20-day traditional wait, WHO 2030 goal — every stat with a cited source) · Mission & vision · Awards · Product teaser (CervixScan) · Services row (5 cards) · University affiliations strip · CEO quote with headshot · Footer.
- **Primary CTA:** “Preorder now — 40% off”. **Secondary CTA:** “Explore our services”.
- **Schema:** `Organization`, `WebSite` + `SearchAction`, `MedicalOrganization` (apply if the legal/medical position is clear — see §14 open questions).

### 6.2 Product page — CervixScan
- **Slug:** `/products/cervixscan`.
- **Intent:** transactional.
- **Word count:** 1,200–1,800 (deeper than a generic service page; two audiences — clinicians/investors and individuals).
- **Sections:** Hero with primary CTA · The problem · WHO 2030 mandate · Product overview & key claims · How it works (3 steps) · Regulatory & clinical status (precise wording — see §2) · Preorder section (€34/unit final price, 40% preorder discount, tiers: 100 / 1,000 / 5,000 / 10,000 units, Stripe checkout) · Awards & trust signals · FAQ.
- **Pricing language:** preorder pricing is for **early access** and primarily for **healthcare providers, distributors, and institutional buyers at scale**. Make this explicit on the page.
- **Schema:** `Product` + `Offer` (with `priceValidUntil`, `availability: PreOrder`, `priceCurrency: EUR`), `FAQPage` for the FAQ section, `MedicalDevice` if applicable (flag for legal review).
- **Claim hygiene:** “100% diagnostic accuracy” is presented as a current claim from the brief — wrap it in language that ties it to study context (“in internal validation studies to date”) and add the disclaimer that all future claims will be supported by published clinical data. **Flag this for legal/regulatory review before publishing.**

### 6.3 Service pages (5)
Each follows the same template:
1. Hero (service title + tagline)
2. Who it’s for
3. Scope of work (full bullet list from the brief)
4. Why Cervixel
5. Process / how we work
6. Deliverables
7. CTA → contact form pre-filled with subject = service name

- **Word count:** 800–1,500.
- **Intent:** commercial / transactional.
- **Schema:** `Service` (with `provider` referencing the `Organization`), `BreadcrumbList`.

The five services and their canonical slugs:

| # | Service | Slug |
|---|---|---|
| 1 | Regulatory Affairs & Compliance Consulting | `/services/regulatory-affairs` |
| 2 | Biotech & Pharmaceutical Product Development | `/services/product-development` |
| 3 | Independent Quality Assurance & Product Verification | `/services/quality-assurance` |
| 4 | Advanced Market Research & Business Intelligence | `/services/market-research` |
| 5 | Professional Medical & Scientific Content Writing | `/services/medical-writing` |

### 6.4 About
- **Intent:** informational + trust.
- **Sections:** Origin paragraph · Team (university affiliations) · Founder & CEO card with full quote, headshot, LinkedIn, email · Awards · Mission (WHO 2030 alignment).
- **Schema:** `AboutPage`, `Organization` (extended with `founder`), `Person` for the CEO.

### 6.5 Contact
- **Intent:** transactional.
- **Elements:** address, phone, email, Google Maps embed (Vilnius office), contact form.
- **Form fields:** Name · Company (optional) · Email · Subject (enum: Product preorder enquiry / Service enquiry / Partnership / Press & media / Other) · Message.
- **Backend:** Server Action → Zod validation → insert into Supabase `contact_submissions` table → email notification via Resend or equivalent.
- **Schema:** `ContactPage`, `Organization`.

### 6.6 Blog index and article template
- **Index:** card grid (cover image, category tag, title, 2-line excerpt, date, read-time, CTA).
- **Article:** hero image · breadcrumb · author byline (real name, photo, bio, LinkedIn — `Person` schema) · body with proper heading hierarchy · pull quotes · related articles · CTA to product or services.
- **Schema:** `Blog` (index) and `BlogPosting` or `Article` with `author`, `datePublished`, `dateModified`, `image`, `mainEntityOfPage`.
- **Categories (initial):** Cervical Cancer · CRISPR · Regulatory · Industry News.

---

## 7. SEO & AI Discoverability — Working Rules

`SEO_GUIDELINES.md` is the full reference. The non-skippable rules for every output are:

1. **One primary keyword and one intent per page.** Never blend.
2. **Title tag:** 50–60 characters, format `Primary Keyword – Secondary Keyword | Cervixel`, unique site-wide.
3. **Meta description:** 140–160 characters, unique, includes a soft CTA.
4. **One `<h1>` per page** containing the primary keyword.
5. **H2s phrased as questions** wherever natural (boosts AEO extraction).
6. **Direct-answer block:** the first paragraph after the H1 must answer the page’s main question in **40–60 words**, self-contained.
7. **Density signals:** at least one stat with a cited source, at least one expert quote or first-hand insight, at least one comparison table or structured list per long-form page.
8. **Internal links:** 3–8 per long-form page, descriptive anchor text. Never “click here” / “read more”.
9. **Outbound links:** 2–4 to authoritative sources (WHO, peer-reviewed journals, EU regulatory bodies).
10. **`llms.txt`** maintained at the domain root.
11. **Crawler allowlist** in `robots.ts` includes AI bots (`GPTBot`, `Google-Extended`, `PerplexityBot`, `ClaudeBot`, `Bingbot`).
12. **No keyword stuffing, duplicate content, doorway pages, hidden text, or unreviewed AI-generated copy.**

---

## 8. Schema Markup Map

Implement as JSON-LD in the `<head>` via the Metadata API or a dedicated `<script type="application/ld+json">` in the layout. Validate with Google’s Rich Results Test before merging.

| Page | Required schemas |
|---|---|
| Homepage | `Organization`, `WebSite` + `SearchAction`, optional `MedicalOrganization` (pending clarification) |
| Product (CervixScan) | `Product` + `Offer`, `FAQPage`, `BreadcrumbList`, optional `MedicalDevice` |
| Service pages | `Service` (with `provider`), `BreadcrumbList`, `FAQPage` if FAQ block present |
| About | `AboutPage`, `Organization`, `Person` (CEO) |
| Contact | `ContactPage`, `Organization` |
| Blog index | `Blog`, `BreadcrumbList` |
| Blog article | `BlogPosting` or `Article`, `Person` (author), `BreadcrumbList` |

Schema must match what is visible on the page — mismatches are penalised.

---

## 9. Performance, Accessibility, Security

### Core Web Vitals (must pass on mobile and desktop)
- **LCP:** under 2.5 s.
- **INP:** under 200 ms.
- **CLS:** under 0.1.

### Accessibility — WCAG 2.1 AA
- Semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`).
- Visible focus states, keyboard navigation across all interactive elements.
- Color contrast ≥ 4.5:1 for body text.
- Form labels programmatically associated. Error messages announced to screen readers.
- Alt text on every meaningful image; `alt=""` on decorative images.
- Tap targets ≥ 48×48 px.

### Security
- HTTPS enforced site-wide (Vercel default — confirm).
- All env vars in Vercel project settings. Never commit `.env`.
- Supabase service-role key only used in server runtimes. RLS enforced on every table.
- Stripe webhook signature verified on every event.
- Content Security Policy headers via `next.config.js` headers function — flag for review during launch hardening.
- No PII or sensitive data in URL parameters.

---

## 10. Database & Supabase Conventions

When new content types or features are introduced, design the schema **before** building the UI. Provide migration SQL alongside the schema change.

### Initial tables (proposed — confirm before implementing)

| Table | Purpose |
|---|---|
| `contact_submissions` | Stores contact form submissions. RLS: insert only from authenticated edge / service-role. Read restricted to admin role. |
| `preorders` | Stores preorder records (tier, units, contact, Stripe session ID, status). RLS: insert via server action; read by admin role only. |
| `blog_posts` | Stores published blog content if managed in DB rather than MDX. RLS: read for `anon` where `published_at <= now()`; write for `editor` role. |
| `authors` | Author profiles for blog (bio, photo, LinkedIn). RLS: read for `anon`; write for `editor`. |
| `newsletter_subscribers` | Email capture. RLS: insert for `anon`; read for admin only. |

### RLS rule of thumb
- Default **deny all**. Add explicit `select` / `insert` / `update` / `delete` policies per role.
- Server-side mutations from trusted Server Actions bypass via service-role only when strictly necessary, with a documented justification.

### Type safety
- Run `supabase gen types typescript --project-id <id> > types/supabase.ts` after every migration.
- Import the generated `Database` type into the Supabase client.

---

## 11. Design System

### Palette (working draft — confirm with brand)
- **Primary:** deep teal (`#0F4C5C` or similar), white.
- **Accent:** warm amber or coral, used sparingly for CTAs and award callouts.
- **Neutrals:** slate greys for body text and surfaces.
- **Tone:** clinical precision with accessible warmth. Premium European life-sciences brand. Not sterile, not flashy.

### Typography
- **Headings + body:** Inter or DM Sans (modern sans-serif), loaded via `next/font` with `display: 'swap'`.
- **Body minimum:** 16px.
- **Line height:** 1.5–1.7 for body.

### Iconography & imagery
- Line-only icons (Lucide or Phosphor). No filled cartoon icons.
- Imagery: microscopy, clinical settings, European cityscapes, human-centred health moments. **No stock-photo clichés** (no “lab-coat-pointing-at-screen” genre).
- Hero backgrounds may use abstract microscopy or CRISPR-imagery aesthetic in deep teal tones.

### Tailwind
- Define palette and font families in `tailwind.config.ts` under `theme.extend`.
- Co-locate shared UI primitives in `components/ui/` (Button, Card, Section, Container, etc.).

---

## 12. Working Principles for the Assistant

When responding to a request on this project, the assistant should:

1. **Consult `SEO_GUIDELINES.md` first** for any output that touches user-facing content, structure, metadata, or schema. Reference the section number explicitly so compliance is verifiable.
2. **Respect dual discoverability** — every page must be optimised for Google/Bing **and** for AI/LLM citation (GEO + AEO patterns from §8 of `SEO_GUIDELINES.md`).
3. **Write for a technical audience** — researchers, clinicians, biotech professionals. Precise terminology, no marketing fluff, scannable structure for time-constrained decision-makers.
4. **Database-first** — schema (tables, relationships, RLS, indexes) before UI. Provide migration SQL.
5. **Production-ready output** — strict TypeScript, proper interfaces, generated Supabase types, error handling, accessibility, semantic HTML.
6. **Trade-offs explicit** — when multiple approaches exist, name them briefly and recommend one.
7. **Surface risks proactively** — SEO penalties, RLS gaps, accessibility regressions, performance issues, regulatory overclaims.
8. **Ask only essential clarifying questions.** If something is genuinely missing (e.g. the precise legal wording for the “100% accuracy” claim), flag it rather than fabricate.

---

## 13. Hard Constraints & Things Never to Do

- ❌ **Do not invent scientific claims, study results, regulatory approvals, or clinical data.** Use only what is in this file or the project brief. If a claim is unverified, flag it.
- ❌ **Do not state CervixScan is CE certified** — it is **under review**.
- ❌ **Do not use `any` in TypeScript** without an inline justification comment.
- ❌ **Do not expose Supabase service-role keys to the client.** Server runtimes only.
- ❌ **Do not bypass RLS** in client code. Add a policy instead.
- ❌ **Do not duplicate content** across pages. Every URL has one job (one intent, one primary keyword).
- ❌ **Do not keyword-stuff.** Natural usage; semantic variation.
- ❌ **Do not use “click here” / “read more”** as anchor text.
- ❌ **Do not auto-generate FAQ or service pages from a template** without unique, human-reviewed copy per service.
- ❌ **Do not change the tech stack** (Next.js / TypeScript / Supabase / Tailwind / Vercel) unless explicitly asked.
- ❌ **Do not promise “guaranteed” search rankings or AI citations.**
- ❌ **Do not collect or store sensitive health information** through any form on this site. This is a marketing site, not a clinical platform.

---

## 14. Open Questions / To Be Confirmed

These items affect implementation and should be resolved with the project owner before the relevant page or feature ships.

1. **“100% diagnostic accuracy” claim** — confirm the underlying study, sample size, and conditions, and agree on the precise wording with regulatory/legal counsel before publication.
2. **MedicalOrganization schema usage** — confirm whether Cervixel’s legal classification supports the `MedicalOrganization` schema type, or whether `Organization` alone is more accurate at this stage.
3. **Languages** — site launches in English only. Confirm whether Lithuanian (`lt`) and other locales are planned; if so, decide on the URL strategy (subdirectory recommended per `SEO_GUIDELINES.md` §9.2) and `hreflang` setup before scaffolding routes.
4. **Blog content source** — MDX in the repo, Supabase-managed, or a headless CMS (Sanity, Contentful)? Recommendation: MDX for editorial control + speed; switch to Supabase only if non-developer editors need access.
5. **Newsletter / lead capture** — provider (Resend, Mailchimp, Beehiiv)? Required for transactional email and any future newsletter.
6. **CRM integration** — should contact form / preorder submissions sync to a CRM (HubSpot, Pipedrive)? Affects schema and webhook design.
7. **Stripe account** — live or test mode for initial deploy? Currency confirmed as EUR. Tax handling (Stripe Tax) needed?
8. **Author pool** — confirm which team members will be public bylines on blog content (required for E-E-A-T per `SEO_GUIDELINES.md` §10.1).
9. **CEO headshot, product imagery, microscopy assets** — final assets pending. Use placeholders with `next/image` blur and clear `TODO` markers until delivered.
10. **Legal pages** — Privacy Policy, Terms of Service, Cookie Policy. Required for trust signals (`SEO_GUIDELINES.md` §2.2). Source the drafts from legal counsel.

---

**Document maintenance.** Update this file whenever a structural decision is made (new page, new service, new schema, new integration). Review quarterly alongside `SEO_GUIDELINES.md`. Last updated: _to be filled on commit._
