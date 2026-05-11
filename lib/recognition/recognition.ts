/**
 * Single source of truth for the recognition strip — used by:
 * - app/page.tsx (homepage recognition section)
 * - app/about/page.tsx (about page recognition section)
 *
 * Per CLAUDE §2 these are real, verified items. Do not add aspirational entries.
 * Affiliations and academic backgrounds belong on the affiliations strip
 * (about page only), NOT here.
 */

export interface Recognition {
  title: string;
  description: string;
}

export const RECOGNITION: readonly Recognition[] = [
  {
    title: "1st place — Hospiton Cancer Hackathon",
    description:
      "Recognised for the early RapidCan concept against entries from clinical and engineering teams across Europe.",
  },
  {
    title: "Invited to Cambridge University",
    description:
      "Selected for an in-person research and translation programme at Cambridge to advance the diagnostic platform.",
  },
  {
    title: "BSV Ventures Incubation",
    description:
      "Shortlisted for BSV Ventures' #7 incubation programme — one of a small group of deep-tech startups selected from across Europe and the United States.",
  },
  {
    title: "Partnership with Nacionalinis vėžio centras",
    description:
      "Partnership with the National Cancer Center in Lithuania, supporting clinical translation and validation work.",
  },
] as const;
