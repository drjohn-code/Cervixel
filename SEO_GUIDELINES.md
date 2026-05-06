# SEO & AI Search Optimization Guidelines

> **Purpose of this document:** This is the master reference for all SEO, content, and technical decisions made on this website. Anyone (or any AI assistant) building, writing for, or reviewing this site must follow these rules. The goal is to make the website rank in **traditional search engines (Google, Bing)** and get **cited by AI/LLM assistants (ChatGPT, Claude, Perplexity, Google AI Overviews, Gemini)** for a global, international audience.

> **How to use:** When generating any page, post, title, or meta tag, the AI/developer should reference this file. Every output must comply with the rules below.

---

## Table of Contents

1. [Core Principles](#1-core-principles)
2. [Brand & Entity Foundation](#2-brand--entity-foundation)
3. [Keyword & Intent Strategy](#3-keyword--intent-strategy)
4. [On-Page SEO Standards](#4-on-page-seo-standards)
5. [Content Writing Standards](#5-content-writing-standards)
6. [Technical SEO Requirements](#6-technical-seo-requirements)
7. [Structured Data (Schema Markup)](#7-structured-data-schema-markup)
8. [AI / LLM Optimization (GEO + AEO)](#8-ai--llm-optimization-geo--aeo)
9. [International / Global SEO](#9-international--global-seo)
10. [E-E-A-T & Trust Signals](#10-e-e-a-t--trust-signals)
11. [Internal Linking & Site Architecture](#11-internal-linking--site-architecture)
12. [Off-Page & Authority Building](#12-off-page--authority-building)
13. [Content Quality Checklist](#13-content-quality-checklist)
14. [Things to NEVER Do](#14-things-to-never-do)
15. [Measurement & KPIs](#15-measurement--kpis)
16. [Per-Page Output Template](#16-per-page-output-template)

---

## 1. Core Principles

These four principles override every other rule. If a tactic conflicts with one of these, the principle wins.

1. **User intent first.** Every page must answer a real question or solve a real problem for a specific reader. Generic content does not rank in 2026.
2. **Clarity over cleverness.** Both Google's algorithms and LLMs reward content that is easy to interpret, well-structured, and semantically complete.
3. **Authority through evidence.** Claims must be backed by data, sources, original insight, or verifiable expertise. Unsupported claims get ignored by AI engines.
4. **One topic, one page.** Never mix unrelated topics on a single page. Each URL has one job — one primary intent, one primary keyword cluster.

---

## 2. Brand & Entity Foundation

Search engines and LLMs treat your brand as an **entity** — a recognizable thing with consistent attributes. Inconsistency confuses AI and reduces citation probability.

### 2.1 Brand identity rules

- **Brand name** must be written *identically* everywhere: same spelling, same capitalization, same spacing. Pick one canonical form and never deviate.
- **Tagline / one-line description** must be the same across the website, social profiles, business directories, and press materials.
- **Founder / team names** must match across LinkedIn, About page, author bylines, and any third-party profile.
- **Contact info (NAP — Name, Address, Phone)** must be byte-identical across the website, Google Business Profile, LinkedIn, social profiles, and any directory listing.

### 2.2 Required brand assets

Every website must have:

- A clear **About page** describing what the company does, who runs it, where it's based, and when it was founded.
- A **Contact page** with email, address (or service area), and a working contact method.
- A **Privacy Policy** and **Terms of Service** page (required for trust signals).
- An **HTTPS** secure connection across the entire domain (non-negotiable).
- A consistent **logo, brand color palette, and visual identity** used across all pages.

### 2.3 Entity reinforcement

To help AI engines recognize the brand:

- Use the brand name naturally inside body content (not just in headers).
- Mention the brand alongside the topics you want to be associated with ("[Brand] helps [audience] do [outcome]").
- Get the brand cited on third-party sites — this is what trains LLMs to associate the brand with its category.
- Submit a Wikidata entry once the brand has external coverage (press, reviews, partnerships).

---

## 3. Keyword & Intent Strategy

### 3.1 The three search intents

Every page is built around exactly **one** of these intents. Mismatching intent is the single biggest reason pages fail to rank.

| Intent | What user wants | Page format |
|---|---|---|
| **Informational** | To learn something | Guide, tutorial, explainer, FAQ |
| **Commercial** | To compare options before buying | Comparison, review, "best of" list |
| **Transactional** | To take action now | Service page, product page, contact, signup |

Before writing, identify the intent. If multiple intents exist for one keyword, build separate pages for each.

### 3.2 Keyword research workflow

1. **Seed list:** Start with 10–20 core terms describing what the business does.
2. **Expand with long-tail variations.** Long-tail keywords (3+ words) are less competitive and convert better. They drive the majority of search traffic.
3. **Group into clusters.** A cluster = one pillar topic + 5–15 supporting subtopics. Each subtopic becomes its own page that links back to the pillar.
4. **Map intent.** Tag each keyword with informational / commercial / transactional.
5. **Validate.** Search the keyword in Google, Perplexity, and ChatGPT. See what gets ranked / cited. Confirm the intent matches your page format.

### 3.3 Keyword usage rules

- **One primary keyword per page.** Plus 3–8 secondary / semantic variations.
- **Use semantic / LSI terms.** Words and phrases related to the main topic. These help engines understand context. Example: for "project management software" — include "task tracking," "team collaboration," "deadlines," "kanban," "workflow."
- **Front-load.** Place the primary keyword in the first 100 words and in at least one H2.
- **Never stuff.** Keyword density is not a 2026 ranking factor. Natural usage matters; repetition hurts.

---

## 4. On-Page SEO Standards

Every page must follow these exact rules.

### 4.1 URL structure

- Lowercase, hyphenated, descriptive: `/services/web-design` not `/services?id=42` or `/Services/Web_Design`.
- Maximum 3–5 words. Include the primary keyword. No stop words ("a," "the," "of") unless natural.
- No dates, IDs, or session parameters in the URL.
- Use a logical hierarchy: `/category/subcategory/page-name`.

### 4.2 Title tag (`<title>`)

- **50–60 characters.** Longer gets truncated in search results.
- **Format:** `Primary Keyword – Secondary Keyword | Brand Name`
- Front-load the primary keyword.
- Each title must be **unique** across the site.
- Make it click-worthy without being clickbait. Promise a specific value.

**Good example:** `Global SEO Services for SaaS – Multilingual Strategy | Acme`
**Bad example:** `Welcome to our website - Acme Inc., the best company in the world!`

### 4.3 Meta description

- **140–160 characters.**
- One sentence summarizing what the page offers + one sentence with a soft call to action.
- Include the primary keyword naturally (not stuffed).
- Each must be unique. Never auto-generate identical descriptions.

### 4.4 Heading hierarchy

- **One `<h1>` per page only.** Contains the primary keyword. Matches user intent.
- `<h2>` for major sections. Phrase as questions when possible (better for AEO).
- `<h3>` for subsections under h2.
- Never skip levels (no h1 → h3).
- Never use headings for styling — only for structure.

### 4.5 First 100–150 words

This is the most important real estate on the page for AI citation.

- Directly answer the page's main question in the **first 40–60 words**.
- This single block is what LLMs most often extract as a citation.
- Write it as a self-contained "answer block" that makes sense even without surrounding context.

### 4.6 Images

- **File name:** descriptive, hyphenated, includes a keyword. `seo-audit-checklist.png` not `IMG_4823.png`.
- **Alt text:** a real description of the image, written for a person who can't see it. 8–15 words. Include the keyword only if naturally relevant.
- **Format:** WebP or AVIF preferred for performance. PNG/JPG acceptable.
- **Compression:** every image compressed before upload. Target under 200KB where possible.
- **Lazy loading** for images below the fold.

### 4.7 Outbound and internal links

- Link to **2–4 authoritative external sources** per long-form page (research papers, government sites, industry leaders).
- Link to **3–8 internal pages** per long-form page using descriptive anchor text. Never use "click here" or "read more" as anchor text.

---

## 5. Content Writing Standards

### 5.1 Voice and tone

- **Professional but human.** Not corporate, not casual.
- **Direct.** Get to the point in the first sentence. Cut filler words.
- **Active voice.** "We build websites" not "Websites are built by us."
- **Second person ("you")** when addressing the reader. First person plural ("we") when describing the brand.

### 5.2 Structure that AI engines extract

LLMs prefer content that's easy to parse. Structure every long-form page with:

- A **summary block** at the top (the answer in 40–60 words).
- **Short paragraphs** — 2–4 sentences each. Long paragraphs get skipped.
- **Bulleted or numbered lists** for any sequential or comparable information.
- **Tables** for comparisons. Tables earn approximately 2.5x more AI citations than the same content as prose.
- **Bold key terms and definitions** so scanners (human and AI) catch them.
- **Statistics and concrete numbers** every 150–200 words. Vague claims get filtered out by LLMs.
- **A clear conclusion** that restates the main answer.

### 5.3 Word counts (guidelines, not hard rules)

| Page type | Target length |
|---|---|
| Homepage | 600–1,200 words |
| Service / product page | 800–1,500 words |
| Pillar guide | 2,500–4,000 words |
| Supporting blog post | 1,200–2,000 words |
| FAQ entry | 50–150 words per question |

Write to the depth the topic deserves. Don't pad. Don't truncate.

### 5.4 Originality

- **Never duplicate content** across pages. Every page must be 100% unique.
- **Add original insight.** Quote real customers, share internal data, give an opinion based on experience. This is what makes content "information gain"-worthy and cite-able by LLMs.
- **Include first-hand experience** where possible. Phrases like "in our work with X," "when we tested Y," "based on Z clients" signal real expertise to both Google and AI engines.

---

## 6. Technical SEO Requirements

The site must pass every item in this checklist before launch.

### 6.1 Performance (Core Web Vitals)

- **Largest Contentful Paint (LCP):** under 2.5 seconds.
- **Interaction to Next Paint (INP):** under 200 milliseconds.
- **Cumulative Layout Shift (CLS):** under 0.1.
- Test using Google PageSpeed Insights and Lighthouse. Both desktop and mobile.

### 6.2 Mobile

- Fully responsive design. Mobile-first layout.
- Tap targets at least 48x48 pixels.
- No horizontal scrolling on any viewport down to 360px wide.
- Readable font size without zoom (16px minimum body text).

### 6.3 Crawlability

- **`robots.txt`** at the root. Allow all major crawlers including AI bots: `GPTBot`, `Google-Extended`, `PerplexityBot`, `ClaudeBot`, `Bingbot`. (Decide explicitly whether to allow each AI crawler — most businesses targeting AI visibility should allow them.)
- **XML sitemap** generated automatically. Submitted to Google Search Console and Bing Webmaster Tools.
- **HTML sitemap** linked in footer for deep crawlability.
- **Canonical tags** on every page pointing to the preferred URL version.
- **No broken links** — internal or outbound. Run a crawl monthly.
- **No orphan pages** — every page must be linked from at least one other page.

### 6.4 Indexing

- `noindex` tags only on thank-you pages, admin pages, search-result pages, and other non-public utility pages.
- All important pages must be indexable.
- Verify ownership in Google Search Console and Bing Webmaster Tools.

### 6.5 Security and reliability

- HTTPS enforced site-wide. HTTP redirects to HTTPS.
- Valid SSL certificate, auto-renewing.
- 301 redirects (not 302) for all moved URLs.
- Custom 404 page that links back to main site sections.

### 6.6 `llms.txt` file

Add an `llms.txt` file at the root of the domain. This is an emerging standard that helps LLMs find your most important content. It should list the canonical URLs of pillar pages, key service pages, and the About / Contact pages, with one-line descriptions.

---

## 7. Structured Data (Schema Markup)

Schema is JSON-LD code added to the HTML that tells search engines and AI exactly what each page represents. This is one of the highest-leverage technical SEO actions.

### 7.1 Required schemas

Every site must implement at minimum:

- **`Organization`** schema on the homepage (brand name, logo, URL, contact info, social profiles, founding date).
- **`WebSite`** schema with `SearchAction` on the homepage.
- **`BreadcrumbList`** on every non-homepage page.
- **`Person`** schema on every author bio (for E-E-A-T).

### 7.2 Page-type schemas

| Page type | Schema |
|---|---|
| Service page | `Service` |
| Product page | `Product` + `Offer` |
| Blog post / guide | `Article` or `BlogPosting` |
| FAQ section | `FAQPage` |
| How-to guide | `HowTo` |
| Reviews / testimonials | `Review` + `AggregateRating` |
| Local business | `LocalBusiness` |
| Video content | `VideoObject` |

### 7.3 Schema rules

- Implement as **JSON-LD** in the `<head>` (not microdata, not RDFa).
- Validate every page using Google's Rich Results Test and Schema.org validator before publishing.
- Schema data must match what's visible on the page. Mismatches get the page penalized.

---

## 8. AI / LLM Optimization (GEO + AEO)

This section ensures content gets cited by ChatGPT, Claude, Perplexity, Google AI Overviews, Bing Copilot, and Gemini.

**Background:** GEO (Generative Engine Optimization) is the practice of getting your content cited by LLMs in their generated answers. AEO (Answer Engine Optimization) is the practice of getting your content extracted as the direct answer to a question. Both depend on traditional SEO as a foundation — LLMs primarily pull from the top organic search results.

### 8.1 The GEO/AEO content pattern

Every page targeting AI citation must follow this pattern:

1. **Question-format H2.** Phrase section headers as the questions a user would ask. ("How does X work?" not "About X.")
2. **Direct answer in 40–60 words** immediately after the heading. Self-contained. No "see below" or "as mentioned earlier."
3. **Supporting detail** in the paragraphs that follow.
4. **A statistic, expert quote, or cited source** every 150–200 words.
5. **A summary table or list** wherever the topic supports it.

### 8.2 What boosts LLM citation probability

Research from Princeton and others has shown these tactics measurably increase the probability of being cited by AI engines:

- **Adding expert quotes:** ~+41% citation lift.
- **Adding statistics with sources:** ~+30% citation lift.
- **Adding citations to authoritative sources:** ~+30% citation lift.
- **Improving fluency and clarity:** measurable lift.
- **Using tables for comparable information:** ~2.5x more citations than the same data as prose.

### 8.3 What does NOT help LLM citation

- Keyword stuffing — actively hurts (~-9%).
- Generic, undifferentiated content.
- Pages with no clear author or organizational entity behind them.
- Walls of text with no structure.

### 8.4 Platform-specific optimization

Different AI engines surface content differently:

- **ChatGPT:** Lifts structured formats (bullet points, FAQs) verbatim. Heavily cites Reddit, Wikipedia, and authoritative blogs.
- **Perplexity:** Always cites sources; rewards freshness, original data, and authority. Heavily cites Reddit, LinkedIn, G2.
- **Google AI Overviews:** Pulls from top-10 organic results. FAQ schema, HowTo schema, short definitions, and visuals improve inclusion.
- **Bing Copilot:** Favors step-by-step guides and comparison content.
- **Claude:** Benefits from longer, coherent passages with clear explanations and supporting evidence.
- **Gemini:** Rewards comprehensive entity coverage and factual density.

### 8.5 Off-site presence (critical for GEO)

LLMs cite third-party sites heavily. The brand needs presence on:

- **LinkedIn** — company page + active founder/team profiles.
- **Reddit** — genuine, helpful presence in relevant subreddits (never spam).
- **YouTube** — even short videos help. Transcribe them.
- **G2 / Capterra / Trustpilot** — for B2B services, get verified reviews.
- **Industry publications** — guest articles, expert quotes.
- **Wikidata** — once the brand has external coverage.

---

## 9. International / Global SEO

For a global audience, these rules apply.

### 9.1 Language and localization

- Decide on a primary language (English is the default for global B2B). Add other languages only if you can maintain them at the same quality level — bad translations hurt rankings.
- For multi-language sites, use **`hreflang` tags** to declare language and region variants. Errors here cause Google to serve the wrong version to users.
- Use **localized content**, not just translation. Currency, examples, units, idioms, case studies — all should match the target region.

### 9.2 URL structure for international

Pick one structure and stick with it:

- **ccTLD** (`.de`, `.fr`) — strongest geo signal, hardest to maintain.
- **Subdomain** (`fr.example.com`) — clean separation, moderate signal.
- **Subdirectory** (`example.com/fr/`) — easiest to manage, recommended for most. ✅
- **URL parameter** (`example.com?lang=fr`) — avoid. Worst for SEO.

### 9.3 Global trust signals

- Display a recognizable address or service area.
- List currencies and payment methods supported.
- Show the time zone for support hours.
- Display industry certifications, partner logos, and press mentions visibly.

### 9.4 CDN and performance

- Use a global CDN (Cloudflare, Fastly, Bunny) so the site loads fast from every region. Page speed matters more for international users on slower connections.

---

## 10. E-E-A-T & Trust Signals

E-E-A-T = **Experience, Expertise, Authoritativeness, Trust.** Google's quality framework. LLMs use similar signals.

### 10.1 Author signals

- Every long-form article has a **named author** with a real bio.
- Author bio includes: full name, photo, role, credentials, link to LinkedIn, link to author archive page.
- Implement `Person` schema on author pages.
- Cite the author's first-hand experience in the article ("In our work with...").

### 10.2 Trust elements on every page

- HTTPS lock visible.
- Visible contact information.
- Visible privacy policy and terms links in the footer.
- Clear "About" link in the navigation.
- Real customer testimonials with full names and (where possible) photos and company affiliations.
- Industry awards, certifications, partner badges where applicable.
- Physical address (or stated service area) somewhere on the site.

### 10.3 Content trust signals

- Cite sources for all statistics. Link to the original source, not a secondary aggregator.
- Date every article and update it with a "Last updated" date when revised.
- Acknowledge limitations honestly. Overclaiming destroys trust with both readers and AI.

---

## 11. Internal Linking & Site Architecture

### 11.1 Structure

- **Maximum 3 clicks** from homepage to any important page.
- Use **topic clusters:** one pillar page links out to all supporting pages on related subtopics; every supporting page links back to the pillar. This signals topical authority.
- **Flat hierarchy** preferred over deep nesting.

### 11.2 Internal link rules

- Every page links to 3–8 other relevant pages.
- Anchor text is **descriptive and keyword-relevant** — it tells the user (and Google) what the linked page is about.
- Never use "click here," "this page," "read more" as anchor text.
- Do not repeat the same anchor text dozens of times across the site for different pages.

### 11.3 Navigation

- Primary navigation contains 5–7 top-level items. More than that overwhelms users and dilutes link equity.
- Footer navigation can be more comprehensive.
- Breadcrumbs on every page beneath the homepage.

---

## 12. Off-Page & Authority Building

You don't need hundreds of backlinks. You need a few from highly authoritative sources, plus consistent brand mentions.

### 12.1 Backlink strategy

- Target backlinks from: industry blogs, news outlets, `.edu` and `.gov` domains where relevant, well-known publications in your space.
- Earn links by publishing **original research, data, or unique insight** — the only sustainable strategy.
- Guest posts on reputable sites, with a real byline and a useful article (not a thinly disguised ad).
- Avoid: link farms, paid link schemes, low-quality directory submissions, comment spam. These get sites penalized.

### 12.2 Brand mentions (unlinked too)

LLMs increasingly weight unlinked brand mentions. Goals:

- Get the brand mentioned in industry roundups and "best of" lists.
- Get quoted as an expert in articles in the brand's space.
- Get reviewed on relevant third-party platforms.

### 12.3 Press releases

For non-competitive prompts and brand-building, distributed press releases on reputable wires can influence what AI engines say about the brand. Use sparingly and only with genuine news.

---

## 13. Content Quality Checklist

Before publishing any page, verify all of the following:

- [ ] Page targets exactly one primary keyword and one search intent.
- [ ] Title tag is 50–60 characters, includes primary keyword, is unique.
- [ ] Meta description is 140–160 characters, is unique, includes a soft CTA.
- [ ] URL is short, lowercase, hyphenated, descriptive.
- [ ] One H1 with the primary keyword.
- [ ] H2s phrased as questions where possible.
- [ ] Direct answer to the page's main question in the first 40–60 words.
- [ ] At least one statistic with a source.
- [ ] At least one expert quote or first-hand insight.
- [ ] At least one comparison table or structured list.
- [ ] At least 3 internal links with descriptive anchor text.
- [ ] At least 2 outbound links to authoritative sources.
- [ ] All images have descriptive file names and alt text.
- [ ] Schema markup added and validated.
- [ ] Author byline with bio attached.
- [ ] Mobile rendering checked.
- [ ] Page loads in under 2.5 seconds (LCP).
- [ ] No spelling or grammar errors.
- [ ] Content is original — not duplicated from elsewhere.

---

## 14. Things to NEVER Do

These will harm rankings, get the site penalized, or destroy AI citation probability:

- ❌ **Keyword stuffing.** Repeating the keyword unnaturally. Penalized by Google; ignored by LLMs.
- ❌ **Duplicate content.** Same content across multiple pages or copied from other sites.
- ❌ **AI-generated content with no human review.** Generic, unedited LLM output is detectable and devalued.
- ❌ **Buying backlinks** from link farms or paid networks.
- ❌ **Cloaking** — showing different content to search engines than to users.
- ❌ **Doorway pages** — thin pages designed only to rank for keywords.
- ❌ **Auto-generated pages** for thousands of low-value keyword variations.
- ❌ **Hidden text** (white-on-white, tiny fonts, off-screen positioning).
- ❌ **Fake reviews or testimonials.**
- ❌ **Misleading titles and meta descriptions** ("clickbait" that doesn't deliver).
- ❌ **Aggressive interstitials and pop-ups** that block content.
- ❌ **Slow page load** caused by unoptimized images or excessive JavaScript.
- ❌ **Broken links** left unfixed.
- ❌ **Inconsistent NAP** (name/address/phone) across the web.
- ❌ **Submitting to "AI search engines"** — there is no submission process. Anyone selling this is running a scam.
- ❌ **Promising "guaranteed" rankings or AI citation.** Both are non-deterministic.

---

## 15. Measurement & KPIs

Track these to know whether the SEO strategy is working.

### 15.1 Traditional SEO metrics (Google Search Console)

- Organic impressions and clicks per page.
- Average position for target keywords.
- CTR for top pages.
- Indexing coverage (no errors, no warnings).
- Core Web Vitals (all green).

### 15.2 AI / LLM visibility metrics

- **AI Visibility Share:** how often the brand is cited in AI Overviews, ChatGPT, Perplexity, Claude responses for target queries.
- **Share of Voice in AI:** percentage of AI citations vs. competitors for target topics.
- **Referral traffic from AI sources** in analytics: `chatgpt.com`, `perplexity.ai`, `claude.ai`, etc.
- **Brand sentiment in AI answers** — are recommendations positive, neutral, or negative?

### 15.3 Business metrics (the ones that actually matter)

- Newsletter signups.
- Contact form submissions / demo requests.
- Trial / consultation bookings.
- Revenue attributed to organic search.
- Revenue attributed to AI referrals.

### 15.4 Cadence

- Daily: monitor for crawl errors and traffic drops.
- Weekly: review top pages and queries.
- Monthly: full ranking and AI visibility report.
- Quarterly: content audit — refresh underperforming pages, prune dead pages.

---

## 16. Per-Page Output Template

Whenever a new page is generated, every field below must be filled in. This is the canonical brief format for the AI assistant building the site.

```yaml
PAGE BRIEF
----------
Page type:           [homepage / service / product / pillar / blog / FAQ / about / contact]
Primary keyword:     [one keyword phrase]
Secondary keywords:  [3–8 related terms]
Search intent:       [informational / commercial / transactional]
Target audience:     [specific reader description]

URL slug:            [short-keyword-slug]
Title tag:           [50–60 chars, primary keyword front-loaded, brand at end]
Meta description:    [140–160 chars, unique, includes soft CTA]
H1:                  [single H1 containing primary keyword]

Direct answer block: [40–60 words placed in the first paragraph, self-contained]

H2 sections:         [list of H2s, phrased as questions where possible]

Required elements:
  - [ ] At least one comparison table or structured list
  - [ ] At least one statistic with a cited source
  - [ ] At least one expert quote or first-hand insight
  - [ ] 3–8 internal links with descriptive anchor text
  - [ ] 2–4 outbound links to authoritative sources
  - [ ] Schema markup type: [Article / Service / Product / FAQPage / HowTo / etc.]
  - [ ] Author byline + bio

Word count target:   [based on page type from section 5.3]
```

---

## Document Maintenance

Review and update this guideline document **quarterly**. Search and AI landscape changes fast — what works in one quarter may shift in the next. Last reviewed: [DATE].

When updating the site, this document is the source of truth. If a tactic is missing here, it's not part of the strategy yet.
