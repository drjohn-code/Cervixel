import type { MetadataRoute } from "next";

const SITE_URL =
  process.env["NEXT_PUBLIC_SITE_URL"] ?? "https://cervixel.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: [
          "Googlebot",
          "Bingbot",
          "GPTBot",
          "Google-Extended",
          "PerplexityBot",
          "ClaudeBot",
        ],
        allow: "/",
        disallow: ["/api/", "/_design", "/draft/"],
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_design", "/draft/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
