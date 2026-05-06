import type { Metadata } from "next";

const SITE_URL =
  process.env["NEXT_PUBLIC_SITE_URL"] ?? "https://cervixel.com";
const DEFAULT_OG_IMAGE = "/og-default.jpg";

export interface BuildMetadataInput {
  /** 50–60 characters. Format: "Primary Keyword – Secondary | Cervixel" */
  title: string;
  /** 140–160 characters, includes soft CTA. */
  description: string;
  /** Path starting with "/", e.g. "/about" */
  path: string;
  ogImage?: string;
  keywords?: string[];
  noindex?: boolean;
}

export function buildMetadata({
  title,
  description,
  path,
  ogImage,
  keywords,
  noindex = false,
}: BuildMetadataInput): Metadata {
  if (process.env.NODE_ENV === "development") {
    if (title.length < 50 || title.length > 60) {
      console.warn(
        `[SEO §4.2] Title length ${title.length} chars is outside 50–60: "${title}"`
      );
    }
    if (description.length < 140 || description.length > 160) {
      console.warn(
        `[SEO §4.3] Description length ${description.length} chars is outside 140–160: "${description}"`
      );
    }
  }

  const canonicalUrl = `${SITE_URL}${path}`;
  const image = ogImage ?? DEFAULT_OG_IMAGE;

  return {
    title,
    description,
    ...(keywords && keywords.length > 0 && { keywords: keywords.join(", ") }),
    alternates: {
      canonical: canonicalUrl,
    },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
