/**
 * PageBrief — typed interface mirroring SEO_GUIDELINES.md §16.
 * Every planned route requires a completed brief in docs/page-briefs/ before shipping.
 */
export interface PageBrief {
  /** The route, e.g. "/" or "/products/rapidcan" */
  slug: string;

  /** Primary keyword (one per page — SEO §4.1) */
  primaryKeyword: string;

  /** Search intent: "informational" | "commercial" | "transactional" | "navigational" */
  intent: "informational" | "commercial" | "transactional" | "navigational";

  /** Title tag, 50–60 chars (SEO §4.2) */
  titleTag: string;

  /** Meta description, 140–160 chars (SEO §4.3) */
  metaDescription: string;

  /** H1 — contains primary keyword, one per page (SEO §4.4) */
  h1: string;

  /**
   * Direct-answer block: 40–60 words, self-contained, placed immediately after H1.
   * Answers the page's main question for featured-snippet and AEO extraction (SEO §4.5).
   */
  directAnswerBlock: string;

  /** H2 headings phrased as questions where natural (SEO §7 AEO) */
  h2Questions: string[];

  /** Schema types required on this page (SEO §7 / CLAUDE §8) */
  schemaTypes: string[];

  /** Target word count range, e.g. [600, 1200] */
  wordCountRange: [number, number];

  /** 3–8 descriptive internal links (SEO §11) */
  internalLinks: Array<{ anchorText: string; href: string }>;

  /** 2–4 outbound links to authoritative sources (SEO §4) */
  outboundLinks: Array<{ anchorText: string; url: string }>;

  /** Status of this brief */
  status: "template" | "in-progress" | "complete";
}
