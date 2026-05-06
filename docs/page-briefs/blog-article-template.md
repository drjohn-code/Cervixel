# Page Brief — Blog Article Template (`/blog/[slug]`)

**Status:** template (one instance per published article)

## SEO fields

| Field | Value |
|---|---|
| Primary keyword | (per article) |
| Intent | informational |
| Title tag (50–60 chars) | (per article) |
| Meta description (140–160 chars) | (per article) |
| H1 | (per article) |
| Word count target | 1,200–2,000 |

## Direct-answer block (40–60 words)

> Must be the first paragraph after H1. Answers the article's main question self-contained.

## Required schema (per article)

- `BlogPosting` (or `Article`) with `author`, `datePublished`, `dateModified`, `image`, `mainEntityOfPage`
- `Person` (author)
- `BreadcrumbList`

## Author requirements (E-E-A-T / SEO §10.1)

- Real name (confirmed author — Open Question #8)
- Photo
- Short bio
- LinkedIn URL
- All fields go into `Person` schema

## Content checklist (SEO §13)

- [ ] Direct-answer block in first 40–60 words
- [ ] At least one stat with cited source
- [ ] At least one expert quote or first-hand insight
- [ ] Comparison table or structured list
- [ ] 3–8 internal links (including link to product or relevant service)
- [ ] 2–4 outbound links to authoritative sources (WHO, peer-reviewed journals)
- [ ] Cover image with descriptive alt text and SEO filename
- [ ] Auto-generated ToC from H2/H3
- [ ] Reading-time calculated
- [ ] Related articles block (3, by category/tag)
- [ ] Schema validates
