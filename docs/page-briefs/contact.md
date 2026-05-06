# Page Brief — Contact (`/contact`)

**Status:** template

## SEO fields

| Field | Value |
|---|---|
| Primary keyword | TBD |
| Intent | transactional |
| Title tag (50–60 chars) | TBD |
| Meta description (140–160 chars) | TBD |
| H1 | TBD |
| Word count target | 200–400 (contact pages are intentionally lean) |

## Direct-answer block (40–60 words)

> TBD — must answer: "How can I get in touch with Cervixel?"

## Required schema

- `ContactPage`
- `Organization`

## Form subject options (CLAUDE §6.5)

- Product preorder enquiry
- Service enquiry
- Partnership
- Press & media
- Other

## Dependencies

- Supabase `contact_submissions` table (Sprint 2.3)
- Resend email provider (Open Question #5)

## Content checklist

- [ ] NAP visible and byte-identical to CLAUDE §2
- [ ] Google Maps embed (lazy-loaded, with `title` attribute)
- [ ] Form fields accessible (labels, ARIA, error states)
- [ ] Schema validates
