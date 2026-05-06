# Cervixel Website — Build Roadmap

> **Purpose.** Sequenced delivery plan for the Cervixel marketing website, derived from `CLAUDE.md` and `SEO_GUIDELINES.md`. Read alongside both. Section references in square brackets (e.g. `[SEO §4.2]`, `[CLAUDE §6.2]`) point to the authoritative spec for that requirement.
>
> **How to use.** Phases are sequential. Sprints inside a phase are mostly sequential but small; some can run in parallel where noted. Each sprint defines: scope, deliverables, acceptance criteria, references, and dependencies. Do not start a sprint until its dependencies are green.
>
> **Estimation unit.** Sprints are sized in dev-days for a single senior full-stack engineer. Adjust if the team scales.

---

## Table of Contents

1. [Phase 0 — Foundation](#phase-0--foundation)
2. [Phase 1 — Core Infrastructure & SEO Primitives](#phase-1--core-infrastructure--seo-primitives)
3. [Phase 2 — Static Marketing Pages](#phase-2--static-marketing-pages)
4. [Phase 3 — Product Page & Preorder Flow](#phase-3--product-page--preorder-flow)
5. [Phase 4 — Homepage](#phase-4--homepage)
6. [Phase 5 — Blog System](#phase-5--blog-system)
7. [Phase 6 — Pre-Launch Hardening & QA](#phase-6--pre-launch-hardening--qa)
8. [Phase 7 — Launch & Post-Launch](#phase-7--launch--post-launch)
9. [Cross-Cutting Open Questions](#cross-cutting-open-questions)
10. [Definition of Done (Every Sprint)](#definition-of-done-every-sprint)

---

## Phase 0 — Foundation

**Goal.** Get a deployable Next.js shell with the full toolchain wired up so every later sprint can ship to a preview URL on Vercel.

**Exit criteria.** Empty homepage renders on a Vercel preview, Supabase is connected, lint/typecheck/format pass in CI, design tokens are usable in code.

---

### Sprint 0.1 — Repository & Next.js bootstrap *(0.5 day)*

**Scope.** Create the Next.js 14+ App Router project with TypeScript strict mode, Tailwind, ESLint, Prettier.

**Deliverables.**
- `pnpm create next-app` (or npm/yarn) with App Router, TypeScript, Tailwind, ESLint enabled.
- `tsconfig.json` with `"strict": true`, `"noUncheckedIndexedAccess": true`.
- `.editorconfig`, `.prettierrc`, `.eslintrc` configured.
- `.gitignore` covers `.env*`, `.next/`, `node_modules/`, `.vercel/`.
- README skeleton pointing to `CLAUDE.md`, `SEO_GUIDELINES.md`, and this roadmap.

**Acceptance.** `pnpm dev` runs; `pnpm lint && pnpm typecheck && pnpm build` all pass.

**References.** `CLAUDE §4` (tech stack & conventions).

---

### Sprint 0.2 — Vercel deployment & environment config *(0.5 day)*

**Scope.** Wire the repo to Vercel with preview deployments per PR.

**Deliverables.**
- Vercel project linked; `main` → production, all branches → preview.
- Env var matrix documented in `README.md` (placeholders only — never commit secrets).
- Production env vars set in Vercel: `NEXT_PUBLIC_SITE_URL`, Supabase URL/anon key, Supabase service-role key, Stripe keys (test for now), Resend key (placeholder).
- `next.config.js` with `images.remotePatterns`, security headers stub (CSP placeholder).

**Acceptance.** A PR opens a preview URL; the production URL serves the empty starter.

**Dependencies.** Sprint 0.1.

**References.** `CLAUDE §4`, `CLAUDE §9` (security).

---

### Sprint 0.3 — Supabase project & local workflow *(1 day)*

**Scope.** Create the Supabase project and the local-dev workflow before any table is designed.

**Deliverables.**
- Supabase project provisioned (region: EU — Frankfurt or Stockholm for proximity to Vilnius and GDPR alignment).
- `supabase` CLI configured; `supabase/migrations/` directory in repo.
- Server-only Supabase client (`lib/supabase/server.ts`) using the service-role key inside Server Components / Route Handlers only.
- Anon Supabase client (`lib/supabase/client.ts`) for the rare Client Component case.
- `lib/supabase/types.ts` placeholder for generated types; `pnpm db:types` script wired to `supabase gen types typescript`.
- README section on how to run `supabase start` locally and apply migrations.

**Acceptance.** A throwaway Server Component can `select 1` from Supabase via the server client. Service-role key is never imported into a Client Component (lint rule or convention documented).

**Dependencies.** Sprint 0.2.

**References.** `CLAUDE §4`, `CLAUDE §10`, `CLAUDE §13` (never expose service-role key).

---

### Sprint 0.4 — Design tokens & Tailwind theme *(1 day)*

**Scope.** Encode the working palette, typography, and spacing into Tailwind so every component uses tokens, not raw values.

**Deliverables.**
- `tailwind.config.ts` `theme.extend` with: primary teal, accent (amber/coral), neutral slate scale, semantic colors (`bg`, `surface`, `text`, `muted`, `border`, `success`, `warning`, `danger`).
- Typography scale (display, h1–h4, body, small, caption) with line-heights 1.5–1.7 for body.
- `next/font` loading Inter (or DM Sans) with `display: 'swap'`, exposed as a CSS variable.
- `globals.css` with base resets, focus-visible styles, prose defaults.
- A single `/_design` route (gated to non-prod) that renders all tokens for visual review.

**Acceptance.** `/_design` shows the palette, typography scale, and spacing in light mode. Body text is ≥ 16px. Color contrast passes 4.5:1 for body text against background.

**Dependencies.** Sprint 0.1.

**References.** `CLAUDE §11` (design system), `SEO §4.6 / §6.2` (mobile readability).

---

### Sprint 0.5 — Shared UI primitives *(1 day)*

**Scope.** Build the irreducible component set every page reuses. No business logic.

**Deliverables.** In `components/ui/`:
- `Container` (max-width wrapper with responsive padding).
- `Section` (semantic `<section>` with vertical rhythm).
- `Button` (primary / secondary / ghost variants; renders as `<button>` or `<Link>` via `asChild`-style prop).
- `Card`, `Badge`, `Stat` (for headline numbers like *660,000 cases/year*).
- `Heading` helper enforcing one `<h1>` per page (TypeScript prop + ESLint rule or runtime warning in dev).
- `Prose` wrapper for long-form content with sensible defaults.

**Acceptance.** All primitives rendered on `/_design`. Each is keyboard-accessible with visible focus ring. Tap targets ≥ 48×48 px on touch.

**Dependencies.** Sprint 0.4.

**References.** `CLAUDE §11`, `CLAUDE §9` (accessibility), `SEO §4.4`.

---

## Phase 1 — Core Infrastructure & SEO Primitives

**Goal.** Build the SEO scaffolding once so every later page inherits compliant metadata, schema, and crawlability without ad-hoc work.

**Exit criteria.** A placeholder page can ship with valid title/meta/canonical/OG/Twitter/JSON-LD; `robots.txt`, `sitemap.xml`, and `llms.txt` resolve correctly; layout renders header, nav, footer.

---

### Sprint 1.1 — Root layout, header, footer, navigation *(1 day)*

**Scope.** App shell with semantic HTML5 landmarks.

**Deliverables.**
- `app/layout.tsx` with `<html lang="en">`, `<body>`, font variable applied, skip-to-content link.
- `components/layout/Header.tsx` — logo, primary nav (5–7 items max), preorder CTA. Mobile hamburger with focus trap.
- `components/layout/Footer.tsx` — secondary nav, NAP block (name/address/phone byte-identical to `CLAUDE §2`), legal links (placeholder routes), social, copyright.
- `components/layout/Breadcrumbs.tsx` — accepts a trail array, renders `<nav aria-label="Breadcrumb">` and emits `BreadcrumbList` JSON-LD.

**Acceptance.** Layout uses `<header>`, `<nav>`, `<main>`, `<footer>`. Lighthouse a11y ≥ 95 on a placeholder page. Keyboard tab order is logical. Mobile viewport down to 360px shows no horizontal scroll.

**Dependencies.** Sprint 0.5.

**References.** `CLAUDE §9`, `SEO §6.2`, `SEO §11.3`.

---

### Sprint 1.2 — SEO metadata system *(1 day)*

**Scope.** A typed helper so every page provides compliant metadata in one call.

**Deliverables.**
- `lib/seo/metadata.ts` exporting `buildMetadata(input)` that returns Next.js `Metadata`. Input: `title`, `description`, `path`, `ogImage`, `keywords`, `noindex?`.
- Validation (dev-mode `console.warn`) when title length is outside 50–60 chars or description is outside 140–160 chars `[SEO §4.2, §4.3]`.
- Canonical URL built from `NEXT_PUBLIC_SITE_URL` + path.
- Default OG/Twitter Card metadata; per-page override.
- `app/layout.tsx` exports default `metadata` with site-wide defaults (template title `… | Cervixel`).

**Acceptance.** A placeholder page using `generateMetadata` produces a valid `<head>` containing title, description, canonical, `og:*`, `twitter:*`. Manual lint of length constraints is enforced in dev.

**Dependencies.** Sprint 1.1.

**References.** `CLAUDE §4`, `CLAUDE §7`, `SEO §4.2–4.3`, `SEO §16`.

---

### Sprint 1.3 — JSON-LD schema helpers *(1 day)*

**Scope.** Reusable, typed builders for every schema type the site uses.

**Deliverables.** In `lib/seo/schema/`:
- Builders for `Organization`, `WebSite` + `SearchAction`, `BreadcrumbList`, `Service`, `Product` + `Offer`, `FAQPage`, `Article` / `BlogPosting`, `Person`, `AboutPage`, `ContactPage`.
- `<JsonLd data={...} />` Server Component that emits `<script type="application/ld+json">`.
- Shared `Organization` constant sourced from `CLAUDE §2` (single source of truth — NAP byte-identical).
- Type-safe schema input via `schema-dts` (recommended) or hand-written interfaces.

**Acceptance.** Every builder validates with Google's Rich Results Test on a sample page. NAP values match `CLAUDE §2` exactly.

**Dependencies.** Sprint 1.2.

**References.** `CLAUDE §8`, `SEO §7`.

> ⚠️ **Defer `MedicalOrganization` and `MedicalDevice` schemas until [Open Question #2](#cross-cutting-open-questions) is resolved with legal counsel.**

---

### Sprint 1.4 — `robots.ts`, `sitemap.ts`, `llms.txt` *(0.5 day)*

**Scope.** Crawlability primitives.

**Deliverables.**
- `app/robots.ts` allowing `Googlebot`, `Bingbot`, `GPTBot`, `Google-Extended`, `PerplexityBot`, `ClaudeBot` (and disallowing `/api/`, `/_design`, `/draft/`).
- `app/sitemap.ts` returning a typed array. Initially static; later sprints push into a `lib/seo/sitemap-entries.ts` registry that each route appends to.
- `public/llms.txt` listing canonical URLs of pillar pages with one-line descriptions. Editable as plain text.

**Acceptance.** `/robots.txt` and `/sitemap.xml` serve valid responses. `/llms.txt` is reachable. Submitted to Google Search Console and Bing Webmaster Tools (deferred to Phase 7 if domain not live yet).

**Dependencies.** Sprint 1.2.

**References.** `CLAUDE §4`, `CLAUDE §7`, `SEO §6.3`, `SEO §6.6`.

---

### Sprint 1.5 — Page brief & content quality enforcement *(0.5 day)*

**Scope.** Codify the per-page brief format from `SEO §16` so it's machine-checkable.

**Deliverables.**
- `lib/seo/page-brief.ts` exporting a `PageBrief` TypeScript interface mirroring `SEO §16` fields.
- `docs/page-briefs/` directory with one `.md` per planned page (homepage, product, 5 services, about, contact, blog index, blog template) — initially empty templates.
- `scripts/check-briefs.ts` CI step that fails the build if a route exists without a corresponding completed brief.

**Acceptance.** Empty brief files exist for all 11 planned pages. CI step is wired but in `warn` mode until briefs are filled (Phase 2+).

**Dependencies.** Sprint 1.2.

**References.** `SEO §16`, `SEO §13` (content quality checklist).

---

## Phase 2 — Static Marketing Pages

**Goal.** Ship the lower-complexity pages first to validate the SEO system end-to-end before the high-stakes product page.

**Exit criteria.** About, Contact, all 5 service pages, and 404 are live on preview, fully SEO-compliant per `SEO §13` checklist.

> Sprints 2.4–2.8 (the five service pages) can run in parallel once 2.3 is done, since they share a template but require unique copy.

---

### Sprint 2.1 — About page *(1 day)*

**Scope.** Build the About page per `CLAUDE §6.4`.

**Deliverables.**
- `app/about/page.tsx` with sections: origin paragraph, team & university affiliations strip, founder/CEO card (full quote, headshot placeholder, LinkedIn, email), awards, mission (WHO 2030 alignment).
- `generateMetadata` via `buildMetadata` helper.
- JSON-LD: `AboutPage`, extended `Organization` with `founder`, `Person` schema for the CEO.
- Direct-answer block in the first 40–60 words `[SEO §4.5]`.
- Internal links: 3–8 to relevant pages with descriptive anchor text.
- Outbound links: 2 authoritative sources (e.g., WHO 2030 cervical cancer goal page).

**Acceptance.** Passes `SEO §13` checklist. Schema validates. Lighthouse SEO ≥ 95. Direct-answer block is self-contained.

**Dependencies.** Phase 1 complete.

**References.** `CLAUDE §6.4`, `SEO §4–5`, `SEO §10` (E-E-A-T).

> ⚠️ Founder/CEO headshot is a placeholder — see [Open Question #9](#cross-cutting-open-questions).

---

### Sprint 2.2 — Contact page (UI only) *(0.5 day)*

**Scope.** Static contact page UI; the form backend lands in Sprint 2.3.

**Deliverables.**
- `app/contact/page.tsx` with address (Kastonu g. 4, Vilnius), phone, email, business hours, time zone (EET), Google Maps embed (lazy-loaded iframe with `loading="lazy"` and `title`).
- Contact form (visual only — submit button disabled until 2.3).
- JSON-LD: `ContactPage`, `Organization`.
- `generateMetadata` compliant.

**Acceptance.** Page renders on mobile and desktop. Map embed does not block LCP. Form fields are accessible (labels, error placeholders, ARIA).

**Dependencies.** Phase 1 complete.

**References.** `CLAUDE §6.5`, `SEO §10.2`.

---

### Sprint 2.3 — Contact form backend *(1 day)*

**Scope.** Wire the contact form end-to-end with database persistence, validation, and email notifications.

**Deliverables.**
- Supabase migration: `contact_submissions` table (`id`, `created_at`, `name`, `company`, `email`, `subject`, `message`, `ip_hash`, `user_agent`, `status`).
- RLS: deny all by default. Insert via Server Action using service-role on the server only. Read restricted to a future `admin` role.
- Server Action `submitContact` with Zod validation, basic rate limit (e.g., one submission per IP per minute via Upstash/Vercel KV, or table-level check), honeypot field, and Resend email to `info@cervixel.com`.
- Subject enum: *Product preorder enquiry / Service enquiry / Partnership / Press & media / Other* `[CLAUDE §6.5]`.
- Success and error states; ARIA-live region announces them to screen readers.
- Generated Supabase types refreshed (`pnpm db:types`).

**Acceptance.** Submitting the form persists a row in Supabase, sends an email, and shows a success state. Invalid submissions are rejected server-side. Honeypot blocks bots. RLS prevents anon `select` on the table.

**Dependencies.** Sprint 2.2, Sprint 0.3.

**References.** `CLAUDE §4`, `CLAUDE §6.5`, `CLAUDE §10`, `CLAUDE §13`.

> ⚠️ Resend (or alternative) account required — see [Open Question #5](#cross-cutting-open-questions).

---

### Sprint 2.4 — Service page template & shared content schema *(0.5 day)*

**Scope.** Build the reusable service-page layout once before populating five times.

**Deliverables.**
- `app/services/[slug]/page.tsx` (or one file per slug — choose static for SEO clarity and easier per-page copy ownership).
- Shared layout components: `ServiceHero`, `WhoItsFor`, `ScopeOfWork`, `WhyCervixel`, `Process`, `Deliverables`, `ServiceCTA`.
- CTA link auto-prefills the contact form `subject` via query param `[CLAUDE §6.3]`.
- `Service` + `BreadcrumbList` JSON-LD; `FAQPage` if FAQ block present.
- Page brief template completed for each of the 5 services in `docs/page-briefs/`.

**Acceptance.** Template renders with sample copy. Schema validates. The contact form receives and pre-fills the `subject` field correctly.

**Dependencies.** Phase 1 complete; Sprint 2.3.

**References.** `CLAUDE §6.3`, `SEO §16`.

---

### Sprint 2.5 — Service page: Regulatory Affairs *(0.5 day)*

**Scope.** Populate `/services/regulatory-affairs` with unique copy per `SEO §13`.

**Deliverables.**
- Page brief filed in `docs/page-briefs/regulatory-affairs.md` with primary keyword, intent, H1, direct-answer block, H2 questions.
- 800–1,500 words of unique copy; one comparison table or structured list; one stat with cited source; one first-hand insight.
- 3–8 internal links; 2–4 outbound links to EU regulatory authorities (e.g., EMA, EU IVDR text on EUR-Lex).
- Optional FAQ block with `FAQPage` schema.

**Acceptance.** Passes `SEO §13` checklist. Schema validates. Content is unique vs. the other four service pages (no duplication).

**Dependencies.** Sprint 2.4.

**References.** `CLAUDE §6.3`, `CLAUDE §13` (no auto-generated service pages), `SEO §13`.

---

### Sprint 2.6 — Service page: Product Development *(0.5 day)*

Same shape as Sprint 2.5, slug `/services/product-development`. Outbound links target peer-reviewed sources or biotech industry references.

---

### Sprint 2.7 — Service page: Quality Assurance *(0.5 day)*

Same shape, slug `/services/quality-assurance`. Outbound links to ISO 13485, IVDR, MDCG guidance documents.

---

### Sprint 2.8 — Service page: Market Research *(0.5 day)*

Same shape, slug `/services/market-research`. Outbound to authoritative market reports (Grand View Research, EvaluatePharma summaries, WHO data).

---

### Sprint 2.9 — Service page: Medical Writing *(0.5 day)*

Same shape, slug `/services/medical-writing`. Outbound to ICMJE, EMWA, CONSORT guidelines.

---

### Sprint 2.10 — Optional services index hub *(0.25 day)*

**Scope.** `/services` index linking to all five — a soft pillar.

**Deliverables.** Card grid, each card with descriptive anchor text. `BreadcrumbList` schema. `generateMetadata`.

**Acceptance.** Internal-link distribution is sensible (services index → 5 services → contact).

**Dependencies.** Sprints 2.5–2.9.

---

### Sprint 2.11 — 404, legal pages, error boundary *(0.5 day)*

**Scope.** The non-glamorous-but-required pages.

**Deliverables.**
- `app/not-found.tsx` — branded, links back to home, services, product, contact.
- `app/error.tsx` — global error boundary.
- Placeholder routes for `/privacy`, `/terms`, `/cookies` rendering a "Coming soon" message and `noindex`. Final copy comes from legal counsel `[Open Question #10]`.

**Acceptance.** 404 renders for unknown URLs and links work. Legal placeholders are `noindex` until copy lands.

**References.** `SEO §6.4`, `SEO §6.5`, `CLAUDE §13`.

---

## Phase 3 — Product Page & Preorder Flow

**Goal.** Ship the highest-commercial-value page with a working preorder funnel. Highest-risk phase due to regulatory wording and payments.

**Exit criteria.** `/products/cervixscan` is live, Stripe checkout completes a test preorder, the order persists, and the legal/regulatory wording has been signed off.

---

### Sprint 3.1 — Resolve product-page open questions *(blocker — coordination, not coding)*

**Scope.** Block the rest of Phase 3 until decisions are made.

**Deliverables (decisions documented in `docs/decisions/`).**
- Final wording for the "100% diagnostic accuracy" claim, signed off by legal/regulatory `[Open Question #1]`.
- `MedicalOrganization` / `MedicalDevice` schema decision `[Open Question #2]`.
- Stripe live vs. test mode for initial deploy; Stripe Tax decision `[Open Question #7]`.
- CRM integration decision `[Open Question #6]`.

**Acceptance.** All four decisions written down with rationale. Without these, Phase 3 stops.

**References.** `CLAUDE §14`.

---

### Sprint 3.2 — Product page UI (no checkout) *(1.5 days)*

**Scope.** Static product page per `CLAUDE §6.2`, ready for content review.

**Deliverables.**
- `app/products/cervixscan/page.tsx` with: hero + primary CTA, the problem, WHO 2030 mandate, product overview, how it works (3 steps), regulatory & clinical status (precise wording from 3.1), preorder section (UI only — buttons disabled), awards & trust signals, FAQ.
- 1,200–1,800 words of unique copy; comparison table; stats with sources; expert quote / first-hand insight.
- Pricing language explicit: preorder is for **healthcare providers, distributors, and institutional buyers at scale** `[CLAUDE §6.2]`.
- JSON-LD: `Product` + `Offer` (with `priceCurrency: EUR`, `availability: PreOrder`, `priceValidUntil`), `FAQPage`, `BreadcrumbList`. `MedicalDevice` only if approved in 3.1.
- Image strategy: microscopy/clinical imagery via `next/image` with full alt text. Placeholders allowed `[Open Question #9]`.

**Acceptance.** Passes `SEO §13` checklist. No regulatory overclaim. Schema validates. Lighthouse SEO ≥ 95, performance ≥ 90 on mobile.

**Dependencies.** Sprint 3.1.

**References.** `CLAUDE §6.2`, `CLAUDE §13` (do not state CE certified; do not invent claims).

---

### Sprint 3.3 — Preorders database schema *(0.5 day)*

**Scope.** Database-first per `CLAUDE §12`.

**Deliverables.**
- Migration creating `preorders` table: `id`, `created_at`, `updated_at`, `tier_units` (enum: 100 / 1000 / 5000 / 10000), `unit_count`, `unit_price_cents`, `total_cents`, `currency` (default `EUR`), `buyer_name`, `buyer_email`, `buyer_company`, `buyer_country`, `vat_number` (nullable), `stripe_session_id`, `stripe_payment_intent_id`, `status` (enum: `pending` / `paid` / `failed` / `refunded`), `notes`.
- Unique index on `stripe_session_id`. Index on `(status, created_at)` for admin queries.
- RLS: deny all. Insert and update only via service-role from Stripe webhook handler. No client read access.
- Generated types refreshed.

**Acceptance.** Migration applies cleanly locally and on Supabase. RLS verified by attempting an anon `select` (should fail).

**Dependencies.** Sprint 3.1, Sprint 0.3.

**References.** `CLAUDE §6.2`, `CLAUDE §10`, `CLAUDE §13`.

---

### Sprint 3.4 — Stripe checkout integration *(1 day)*

**Scope.** Stripe Checkout Session creation via Server Action.

**Deliverables.**
- `lib/stripe/server.ts` — server-only Stripe client.
- Server Action `createPreorderCheckout(input)` validating with Zod: tier, buyer details, accepts-terms boolean. Creates a Stripe Checkout Session with `mode: 'payment'`, `currency: 'eur'`, line items derived from server-side pricing (never trust client price), `metadata` containing the buyer info.
- `success_url` and `cancel_url` routes; success page shows order reference and next steps; cancel page returns the user to the product page.
- Inserts a `pending` row in `preorders` keyed by Stripe session ID at session-creation time.
- Stripe configured via env vars; defaults to test mode.

**Acceptance.** Clicking a preorder tier triggers Stripe Checkout in test mode, completes a test card flow, and returns to `/products/cervixscan/preorder/success` showing the reference.

**Dependencies.** Sprints 3.2, 3.3.

**References.** `CLAUDE §4`, `CLAUDE §13`.

---

### Sprint 3.5 — Stripe webhook handler *(0.5 day)*

**Scope.** Reconcile Stripe events into Supabase.

**Deliverables.**
- `app/api/webhooks/stripe/route.ts` — Route Handler with `runtime: 'nodejs'`, raw body parsing, signature verification using `STRIPE_WEBHOOK_SECRET`.
- Handlers for `checkout.session.completed`, `payment_intent.payment_failed`, `charge.refunded` updating the `preorders` row (`status`, `stripe_payment_intent_id`).
- Idempotency: skip if event ID was already processed (use a `stripe_events` table or `ON CONFLICT DO NOTHING`).
- On `paid`: send a Resend confirmation to the buyer and an internal notification to `info@cervixel.com`.

**Acceptance.** Replaying the same Stripe event does not duplicate side effects. A failed signature returns 400. End-to-end test (`stripe listen` → `stripe trigger checkout.session.completed`) updates the row.

**Dependencies.** Sprint 3.4.

**References.** `CLAUDE §4`, `CLAUDE §9` (security).

---

### Sprint 3.6 — Preorder UX polish & legal acceptance *(0.5 day)*

**Scope.** Final pre-checkout UX hardening.

**Deliverables.**
- Pre-checkout summary modal: tier, units, total, buyer details, T&Cs checkbox (links to `/terms` and `/privacy`).
- Inline error messages from Server Action validation; ARIA-live region for status updates.
- Accessibility pass: keyboard-only flow, screen-reader pass, focus management on modal open/close.
- Mobile-first review of the entire flow at 360–414 px widths.

**Acceptance.** Full preorder flow works on mobile via keyboard only. Lighthouse a11y ≥ 95 on `/products/cervixscan`.

**Dependencies.** Sprint 3.5.

**References.** `CLAUDE §9`, `SEO §6.2`.

---

## Phase 4 — Homepage

**Goal.** Build the homepage last so it can pull authoritative copy and links from already-shipped pages.

**Exit criteria.** Homepage live, sitewide internal-link graph cohesive, Core Web Vitals green on mobile and desktop.

---

### Sprint 4.1 — Homepage build *(1.5 days)*

**Scope.** Per `CLAUDE §6.1`.

**Deliverables.**
- `app/page.tsx` with sections in order: hero, problem stat blocks (660,000 cases/year, 350,000 deaths/year, 20-day wait, WHO 2030 — every stat with a cited source), mission & vision, awards, product teaser linking to `/products/cervixscan`, services row (5 cards linking to each service page), university affiliations strip, CEO quote with headshot, footer.
- 600–1,200 words. Direct-answer block in the first 40–60 words.
- Primary CTA: *Preorder now — 40% off* → product page. Secondary: *Explore our services* → services index.
- JSON-LD: `Organization`, `WebSite` + `SearchAction`. `MedicalOrganization` only if approved in Sprint 3.1.
- Hero LCP image preloaded; `priority` prop on the hero `<Image>`.

**Acceptance.** Passes `SEO §13`. LCP < 2.5s, INP < 200ms, CLS < 0.1 on a Vercel preview measured via Lighthouse mobile and PageSpeed Insights field/lab.

**Dependencies.** Phase 2 and Phase 3 complete (so internal links resolve to real pages).

**References.** `CLAUDE §6.1`, `SEO §4–5`, `SEO §6.1`.

---

### Sprint 4.2 — Internal linking audit & topic cluster wiring *(0.5 day)*

**Scope.** Make the topic-cluster strategy real `[SEO §11]`.

**Deliverables.**
- A spreadsheet or `docs/internal-links.md` mapping every page → 3–8 outgoing internal links with descriptive anchor text.
- Verify product page is the pillar for cervical-cancer / CRISPR / screening content; service pages are their own pillars.
- Add or revise anchors to satisfy the map. No "click here" / "read more" anywhere.
- Confirm every page is reachable in ≤ 3 clicks from the homepage.

**Acceptance.** Crawl with `next-sitemap` or a quick custom script confirms no orphan pages and the 3-click rule holds.

**Dependencies.** Sprint 4.1.

**References.** `SEO §11`, `CLAUDE §13`.

---

## Phase 5 — Blog System

**Goal.** Foundation for ongoing content marketing and E-E-A-T signal building. Ship the system + one launch article.

**Exit criteria.** `/blog` and `/blog/[slug]` render, one published article exists, RSS feed available.

---

### Sprint 5.1 — Blog content source decision *(blocker — short)*

**Scope.** Resolve `[Open Question #4]` — MDX vs. Supabase vs. headless CMS.

**Recommendation.** MDX in repo for editorial control, speed, and Git review of changes. Switch to Supabase only if non-developer editors require direct write access. Document the decision in `docs/decisions/`.

**Acceptance.** Decision recorded with rationale.

---

### Sprint 5.2 — Blog data layer *(1 day, varies by 5.1 outcome)*

**Scope.** Implement the chosen content source.

**MDX path (recommended).**
- `content/blog/*.mdx` with frontmatter (`title`, `description`, `slug`, `category`, `publishedAt`, `updatedAt`, `author`, `coverImage`, `tags`).
- `lib/blog/index.ts` with typed loaders: `getAllPosts()`, `getPostBySlug()`, `getPostsByCategory()`. Uses `next/mdx` or `contentlayer` (or `@content-collections/core`).
- Author registry in `content/authors/*.json` with `Person` schema fields.

**Supabase path (alternative).** Migrations for `blog_posts` and `authors` per `CLAUDE §10`; RLS: read for `anon` where `published_at <= now()`, write for `editor`.

**Acceptance.** Loader returns typed posts and authors; build succeeds with at least one stub post.

**Dependencies.** Sprint 5.1.

**References.** `CLAUDE §10`.

---

### Sprint 5.3 — Blog index *(0.5 day)*

**Scope.** `/blog` per `CLAUDE §6.6`.

**Deliverables.**
- Card grid: cover image, category tag, title, 2-line excerpt, date, read-time, link.
- Category filter (initial categories: Cervical Cancer · CRISPR · Regulatory · Industry News).
- Pagination or "load more" if > 9 posts (defer until needed).
- JSON-LD: `Blog`, `BreadcrumbList`. Compliant `generateMetadata`.

**Acceptance.** Index renders with the seed post. Sitemap auto-includes blog routes.

**Dependencies.** Sprint 5.2.

---

### Sprint 5.4 — Blog article template *(1 day)*

**Scope.** `/blog/[slug]` per `CLAUDE §6.6`.

**Deliverables.**
- Hero image, breadcrumb, author byline (real name, photo, bio, LinkedIn — `Person` schema), publish + updated dates.
- MDX/HTML body styled via the `Prose` primitive; pull-quote, callout, table, image components.
- Related articles (3) by shared category or tag.
- CTA block at end linking to product or relevant service.
- JSON-LD: `BlogPosting` (or `Article`) with `author`, `datePublished`, `dateModified`, `image`, `mainEntityOfPage`, `BreadcrumbList`.
- Auto-generated table of contents from H2/H3 (sticky on desktop).
- Reading-time calculation in the loader.

**Acceptance.** A sample article renders with all elements. Schema validates. Direct-answer block is the first 40–60 words.

**Dependencies.** Sprint 5.2.

**References.** `CLAUDE §6.6`, `SEO §10.1`.

---

### Sprint 5.5 — RSS feed and sitemap integration *(0.25 day)*

**Scope.** Distribution and discoverability.

**Deliverables.**
- `app/feed.xml/route.ts` (or `app/rss.xml/route.ts`) emitting Atom or RSS 2.0.
- `<link rel="alternate" type="application/rss+xml">` in the layout head.
- Blog routes added to `sitemap.ts`.

**Acceptance.** Feed validates at validator.w3.org/feed. Sitemap includes all blog URLs.

**Dependencies.** Sprint 5.4.

---

### Sprint 5.6 — Launch article *(1 day)*

**Scope.** Publish one substantive article to seed E-E-A-T and start the cluster `[SEO §10]`.

**Deliverables.**
- One 1,200–2,000 word article on a topic adjacent to CervixScan (e.g., *Why CRISPR-based diagnostics are reshaping cervical cancer screening*). Real author byline, real bio.
- Compliant per `SEO §13`: direct-answer block, stat with source, expert quote / first-hand insight, comparison table or list, 3–8 internal links, 2–4 outbound to authoritative sources (WHO, peer-reviewed journals).
- Cover image with descriptive alt text and file name.

**Acceptance.** Passes the full content quality checklist. Article links to product and at least one service page.

**Dependencies.** Sprint 5.4, [Open Question #8](#cross-cutting-open-questions) (author confirmed).

**References.** `SEO §13`, `SEO §10`.

---

## Phase 6 — Pre-Launch Hardening & QA

**Goal.** Everything that prevents launch embarrassment. Don't skip.

**Exit criteria.** Production-ready: all checklists green, security headers in place, analytics live, monitoring on, real legal copy.

---

### Sprint 6.1 — Performance pass *(1 day)*

**Scope.** Hit Core Web Vitals targets across all pages.

**Deliverables.**
- Lighthouse + WebPageTest runs for every page; targets: LCP < 2.5s, INP < 200ms, CLS < 0.1 on mobile.
- Image audit: every image is `next/image` with proper `sizes`, modern format, lazy-loaded below the fold, blurred placeholder for hero.
- Bundle audit: `@next/bundle-analyzer`; eliminate large client-side libraries; convert any unnecessary Client Components to Server Components.
- Font optimization confirmed (`next/font`, `display: 'swap'`).
- CSS purge confirmed (Tailwind production build).
- Preload critical assets (hero image, primary font subset).

**Acceptance.** Every page green on Core Web Vitals lab. PageSpeed Insights mobile score ≥ 90.

**References.** `CLAUDE §9`, `SEO §6.1`.

---

### Sprint 6.2 — Accessibility pass *(0.5 day)*

**Scope.** WCAG 2.1 AA across the site.

**Deliverables.**
- Automated: `axe-core` via Playwright on every page, zero serious/critical violations.
- Manual: keyboard-only walkthrough; screen-reader spot-check (NVDA or VoiceOver) on home, product, contact form, preorder modal.
- Color-contrast check across all token combinations actually used.
- Forms: labels associated, errors announced, required fields marked.

**Acceptance.** Zero serious/critical axe violations. Manual screen-reader pass for the four critical flows.

**References.** `CLAUDE §9`, `SEO §6.2`.

---

### Sprint 6.3 — SEO sweep *(0.5 day)*

**Scope.** Verify the SEO checklist on every page.

**Deliverables.**
- `SEO §13` checklist run for each of the 11 routes; results recorded in `docs/seo-audit.md`.
- All schemas validated with Google's Rich Results Test and Schema.org validator.
- Title and meta lengths confirmed in range; uniqueness verified (no duplicates across pages).
- `llms.txt` updated with all final URLs and one-line descriptions.
- Internal-link map from Sprint 4.2 re-verified.

**Acceptance.** Every page passes the checklist. Audit document committed.

**References.** `SEO §13`, `SEO §16`, `CLAUDE §7`, `CLAUDE §8`.

---

### Sprint 6.4 — Security hardening *(0.5 day)*

**Scope.** Production security posture.

**Deliverables.**
- CSP via `next.config.js` headers function: `default-src 'self'`, allow-listed Stripe / Supabase / Resend / Maps / Vercel / fonts. Test in `report-only` first.
- Other headers: `Strict-Transport-Security`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy`, `X-Frame-Options: DENY` (or CSP `frame-ancestors`).
- Confirm HTTPS site-wide, HSTS with `preload` candidacy.
- Confirm all Supabase RLS policies are enabled and tested (deny-all baseline plus explicit policies).
- Confirm Stripe webhook signature verification is enforced in production.
- Confirm no service-role key, no API secret, no PII appears in client bundles (grep build output).

**Acceptance.** `securityheaders.com` grade ≥ A. Manual check confirms no secrets in client JS.

**References.** `CLAUDE §9`, `CLAUDE §13`.

---

### Sprint 6.5 — Analytics, search consoles, monitoring *(0.5 day)*

**Scope.** Visibility into traffic and errors from day one.

**Deliverables.**
- Vercel Analytics enabled.
- Google Search Console verified for production domain; sitemap submitted.
- Bing Webmaster Tools verified; sitemap submitted.
- Error monitoring: Sentry (recommended) wired with environment tags and source maps; or Vercel's built-in logs as a minimum.
- Optional: PostHog or Plausible if requested.
- Stripe webhook delivery monitored (Stripe dashboard alerts).
- Resend deliverability monitored.

**Acceptance.** Test pageview registers in analytics. Test error appears in monitoring. Sitemaps show "discovered" in both Search Console and Bing.

**References.** `CLAUDE §4`, `SEO §15`.

---

### Sprint 6.6 — Legal pages content *(0.5 day, depends on counsel)*

**Scope.** Replace placeholder legal pages with real copy.

**Deliverables.**
- Final Privacy Policy (GDPR + Lithuanian DPA compliant — Cervixel is in the EU).
- Final Terms of Service (covers preorder terms specifically — refunds, delivery expectations, jurisdiction).
- Final Cookie Policy + cookie banner if any non-essential cookies are used (analytics may require consent under GDPR / ePrivacy).
- Pages indexable, linked from footer.

**Acceptance.** Legal counsel sign-off recorded. Pages live and indexable.

**Dependencies.** External (legal counsel) — start in parallel with Phase 2 to avoid blocking launch.

**References.** `SEO §2.2`, `SEO §10.2`, `CLAUDE §14` (Open Question #10).

---

### Sprint 6.7 — Cross-browser and device QA *(0.5 day)*

**Scope.** Real-device sanity check.

**Deliverables.** Manual smoke test of all 11 pages and the preorder + contact flows on:
- Chrome, Firefox, Safari (latest).
- Safari iOS (iPhone), Chrome Android.
- 360px width minimum, up through 1440px.
- Bug list filed and resolved.

**Acceptance.** No layout breakage; all flows complete on every target.

---

## Phase 7 — Launch & Post-Launch

**Goal.** Go live, then operate.

---

### Sprint 7.1 — Production launch *(0.5 day)*

**Scope.** Cutover.

**Deliverables.**
- DNS pointed to Vercel.
- HTTPS confirmed; HSTS active.
- Production env vars audited.
- Stripe switched to live mode (if approved in Sprint 3.1).
- `robots.txt` confirms production allows indexing (no leftover `Disallow: /` from staging).
- Smoke test of every page on the production domain.
- Internal launch announcement to the team.

**Acceptance.** Production URL serves all 11 routes correctly. Test contact submission and test preorder both complete end-to-end.

---

### Sprint 7.2 — Search submission & off-site setup *(0.5 day)*

**Scope.** Push the site to discovery surfaces `[SEO §8.5, §12]`.

**Deliverables.**
- Sitemap re-submitted to Google Search Console and Bing Webmaster Tools (production URLs).
- LinkedIn company page updated with consistent NAP and link to site.
- Google Business Profile created (if applicable to Vilnius office).
- Initial outreach list for press / industry publications drafted.
- Wikidata entry drafted for once external coverage exists (do not submit yet — needs press citations first per `SEO §2.3`).

**Acceptance.** Site appears in `site:cervixel.com` Google search within 7–14 days; sitemap status is "Success" in both consoles.

**References.** `SEO §2.3`, `SEO §8.5`, `SEO §12`.

---

### Sprint 7.3 — Operating cadence setup *(0.25 day)*

**Scope.** Stand up the rhythm from `SEO §15.4`.

**Deliverables.**
- `docs/operations.md` with daily / weekly / monthly / quarterly checks.
- Calendar reminders for the team.
- Monthly KPI dashboard (Notion / Sheets / Linear) tracking: organic impressions, CTR, top queries, Core Web Vitals, AI visibility share, contact submissions, preorders, AI referral traffic (`chatgpt.com`, `perplexity.ai`, `claude.ai` referrers).

**Acceptance.** First weekly review held; cadence documented.

**References.** `SEO §15`.

---

### Sprint 7.4 — Content engine kickoff *(ongoing)*

**Scope.** Sustain the SEO + AEO + GEO investment.

**Deliverables.** Editorial calendar in `docs/editorial-calendar.md` with the next 6–12 articles, each with: primary keyword, intent, target audience, assigned author, due date, target publish date. Aim for 1–2 articles/month at minimum.

**Acceptance.** Calendar exists and the next two articles are in draft.

**References.** `SEO §3`, `SEO §13`, `CLAUDE §6.6`.

---

## Cross-Cutting Open Questions

These mirror `CLAUDE §14`. Each one has at least one sprint that depends on it. Resolve early.

| # | Question | Blocks |
|---|---|---|
| 1 | Final wording for the "100% diagnostic accuracy" claim | Sprint 3.1 → all of Phase 3 |
| 2 | `MedicalOrganization` and `MedicalDevice` schema applicability | Sprints 1.3, 3.2, 4.1 |
| 3 | Multi-language plan (Lithuanian etc.) and URL strategy | Phase 1 routing decisions |
| 4 | Blog content source (MDX / Supabase / headless CMS) | Sprint 5.1 |
| 5 | Email provider (Resend / Mailchimp / Beehiiv) | Sprint 2.3 |
| 6 | CRM integration (HubSpot / Pipedrive / none) | Sprints 2.3, 3.5 |
| 7 | Stripe live vs. test for initial launch; Stripe Tax | Sprint 3.1 → Sprint 7.1 |
| 8 | Public author bylines for blog | Sprint 5.6 |
| 9 | CEO headshot, product imagery, microscopy assets | Sprints 2.1, 3.2, 4.1 |
| 10 | Final Privacy / Terms / Cookie copy from legal counsel | Sprint 6.6 |

---

## Definition of Done (Every Sprint)

Every sprint must satisfy all of the following before being marked complete:

- TypeScript: builds with `strict: true`, no new `any` without a justification comment.
- Lint, typecheck, and tests pass in CI.
- Lighthouse on changed pages: Performance ≥ 90 mobile, Accessibility ≥ 95, SEO ≥ 95, Best Practices ≥ 95.
- For pages: `SEO §13` content quality checklist verified; schema validates in Google's Rich Results Test.
- Database changes: migration committed, RLS policies applied, generated types refreshed.
- Server-only code: no Supabase service-role key or Stripe secret key reachable in client bundles.
- Page brief in `docs/page-briefs/` is filled out and matches what shipped.
- Internal-link map updated if internal-link relationships changed.
- Preview URL attached to the PR; manual smoke test passes on mobile and desktop.
- Documentation updated (`README.md`, `CLAUDE.md` open-question status, this roadmap if scope shifted).

---

## Estimated Total Effort

Approximate dev-days for a single senior full-stack engineer, excluding waiting on external decisions:

| Phase | Days |
|---|---|
| 0 — Foundation | ~4 |
| 1 — Core infrastructure | ~4 |
| 2 — Static marketing pages | ~6 |
| 3 — Product + preorder | ~5 |
| 4 — Homepage | ~2 |
| 5 — Blog system | ~4 |
| 6 — Hardening & QA | ~3.5 |
| 7 — Launch & post-launch | ~1.25 + ongoing |
| **Total** | **~30 dev-days** |

Add buffer for asset delivery, legal review, and Open-Question resolution. Realistic calendar time: **8–10 weeks** for a single engineer with normal review cycles; **5–6 weeks** with a focused two-person team (one on Phase 2 in parallel with another on Phase 3).

---

**Document maintenance.** Update this roadmap whenever scope shifts, a sprint is split or merged, or an Open Question is resolved. Keep it in sync with `CLAUDE.md` and `SEO_GUIDELINES.md` — those two remain the source of truth for what is built and how it must behave.
