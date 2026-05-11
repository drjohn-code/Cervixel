/**
 * Single source of truth for the 5 service offerings. Consumed by:
 * - app/page.tsx (homepage services grid)
 * - app/services/page.tsx (services hub grid)
 * - each app/services/[slug]/page.tsx (related-services block)
 *
 * Per-service descriptions are kept at the category level — they appear on
 * cards across multiple surfaces, so anything specific (deliverables,
 * timelines, capabilities) belongs on the service page itself, not here.
 */

export interface Service {
  slug: string;
  href: string;
  title: string;
  description: string;
}

export const SERVICES: readonly Service[] = [
  {
    slug: "crispr-assay-development",
    href: "/services/crispr-assay-development",
    title: "CRISPR assay development",
    description:
      "Design and optimisation of Cas-based detection assays for nucleic-acid targets in clinical and research settings.",
  },
  {
    slug: "molecular-diagnostics-consulting",
    href: "/services/molecular-diagnostics-consulting",
    title: "Molecular diagnostics consulting",
    description:
      "Strategic guidance on assay architecture, sample workflows, and translation from concept to clinical use.",
  },
  {
    slug: "clinical-validation-support",
    href: "/services/clinical-validation-support",
    title: "Clinical validation support",
    description:
      "Study design, partner sourcing, and analytical-to-clinical performance evaluation for diagnostic candidates.",
  },
  {
    slug: "regulatory-strategy",
    href: "/services/regulatory-strategy",
    title: "Regulatory strategy",
    description:
      "IVDR-aligned planning for CE marking pathways, technical-file structuring, and post-market surveillance.",
  },
  {
    slug: "contract-research",
    href: "/services/contract-research",
    title: "Contract research",
    description:
      "Targeted laboratory work for biotech and pharmaceutical partners — flexible scope, rigorous documentation.",
  },
  {
    slug: "global-procurement",
    href: "/services/global-procurement",
    title: "Global procurement services",
    description:
      "Sourcing of medical devices, IVDs, and pharmaceuticals from European supply chains for international partners, with full audit and compliance documentation.",
  },
] as const;

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

/** Throws if the slug is not in SERVICES. Use at module scope on service pages. */
export function getServiceBySlugOrThrow(slug: string): Service {
  const found = SERVICES.find((s) => s.slug === slug);
  if (!found) throw new Error(`Service not found: ${slug}`);
  return found;
}

export function getRelatedServices(currentSlug: string): readonly Service[] {
  return SERVICES.filter((s) => s.slug !== currentSlug);
}
