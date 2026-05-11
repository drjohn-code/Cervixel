/**
 * JSON-LD schema builders — single source of truth for structured data.
 * NAP values are byte-identical to CLAUDE §2. Do not edit without updating CLAUDE.md.
 * Defer MedicalOrganization and MedicalDevice until Open Question #2 is resolved (CLAUDE §14).
 */

const SITE_URL =
  process.env["NEXT_PUBLIC_SITE_URL"] ?? "https://cervixel.com";

// ─── Shared Organisation constant (NAP per CLAUDE §2) ────────────────────────

const ORG_ID = `${SITE_URL}/#organization`;

const ORGANIZATION_BASE = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: "Cervixel",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo.png`,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kastonu gatve 4",
    addressLocality: "Vilnius",
    postalCode: "01107",
    addressCountry: "LT",
  },
  telephone: "+370 669 57208",
  email: "info@cervixel.com",
  founder: {
    "@type": "Person",
    "@id": `${SITE_URL}/#ceo`,
    name: "John Muhammadi",
    jobTitle: "Founder & CEO",
    honorificSuffix: "M.D., MBA",
  },
  sameAs: [] as string[],
} as const;

// ─── Builders ────────────────────────────────────────────────────────────────

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    ...ORGANIZATION_BASE,
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Cervixel",
    publisher: { "@id": ORG_ID },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export type BreadcrumbEntry = { label: string; href: string };

export function buildBreadcrumbSchema(items: BreadcrumbEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}

export type ServiceInput = {
  name: string;
  description: string;
  url: string;
};

export function buildServiceSchema(service: ServiceInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: `${SITE_URL}${service.url}`,
    provider: { "@id": ORG_ID },
  };
}

export type FAQItem = { question: string; answer: string };

export function buildFAQSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export type ProductInput = {
  name: string;
  description: string;
  image?: string;
  /** Schema.org category, e.g. "In vitro diagnostic device". */
  category?: string;
  /** ISO 8601 date — omit while no legal-approved price exists. */
  priceValidUntil?: string;
  /** Omit while no legal-approved price exists; Offer still emits availability. */
  priceCents?: number;
  productPath: string;
};

export function buildProductSchema(product: ProductInput) {
  const hasPrice =
    typeof product.priceCents === "number" && product.priceValidUntil;
  const offer: Record<string, unknown> = {
    "@type": "Offer",
    priceCurrency: "EUR",
    availability: "https://schema.org/PreOrder",
    url: `${SITE_URL}${product.productPath}`,
  };
  if (hasPrice) {
    offer["price"] = (product.priceCents! / 100).toFixed(2);
    offer["priceValidUntil"] = product.priceValidUntil;
  }
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image ?? `${SITE_URL}/images/rapidcan.jpg`,
    brand: { "@id": ORG_ID },
    manufacturer: { "@id": ORG_ID },
    ...(product.category && { category: product.category }),
    offers: offer,
  };
}

export type ArticleInput = {
  headline: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  authorUrl?: string;
};

export function buildArticleSchema(article: ArticleInput) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.headline,
    description: article.description,
    url: `${SITE_URL}${article.url}`,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      "@type": "Person",
      name: article.authorName,
      ...(article.authorUrl && { url: article.authorUrl }),
    },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${article.url}`,
    },
  };
}

export type PersonInput = {
  name: string;
  jobTitle: string;
  description?: string;
  image?: string;
  url?: string;
  sameAs?: string[];
};

export function buildPersonSchema(person: PersonInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.jobTitle,
    worksFor: { "@id": ORG_ID },
    ...(person.description && { description: person.description }),
    ...(person.image && { image: person.image }),
    ...(person.url && { url: person.url }),
    ...(person.sameAs && { sameAs: person.sameAs }),
  };
}

export function buildAboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url: `${SITE_URL}/about`,
    name: "About Cervixel",
    description:
      "Cervixel is a Lithuanian biotechnology company developing CRISPR-based rapid diagnostic tests for cervical cancer.",
    about: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
  };
}

export function buildContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: `${SITE_URL}/contact`,
    name: "Contact Cervixel",
    description:
      "Get in touch with Cervixel for product preorders, service enquiries, partnerships, or press enquiries.",
    publisher: { "@id": ORG_ID },
  };
}
