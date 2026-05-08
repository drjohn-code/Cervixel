import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import JsonLd from "@/components/ui/JsonLd";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { buildBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata = buildMetadata({
  title: "Cookie Policy – Cervixel Diagnostics & Services Site",
  description:
    "Cervixel's cookie policy is being finalised by legal counsel. The full ePrivacy-compliant policy will appear here before public launch. Email for details.",
  path: "/cookies",
  noindex: true,
});

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Cookie Policy", href: "/cookies" },
];

export default function CookiesPage() {
  return (
    <>
      <JsonLd data={buildBreadcrumbSchema(BREADCRUMBS)} />
      <article className="bg-bg">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={BREADCRUMBS} />
          <header className="pt-6 pb-8 sm:pt-10 sm:pb-12">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">
              Legal
            </p>
            <h1 className="mt-3 text-3xl font-bold leading-tight text-text sm:text-4xl">
              Cookie Policy
            </h1>
          </header>

          <section className="prose pb-16 text-text">
            {/* TODO: replace placeholder copy with final Cookie Policy from legal counsel — CLAUDE.md §14 #10 */}
            <p>
              Cervixel UAB&rsquo;s full Cookie Policy is currently being
              finalised by legal counsel to meet the EU ePrivacy Directive,
              GDPR consent requirements, and Lithuanian guidance on cookie
              banners.
            </p>
            <p>
              The published version will list every cookie and similar
              tracking technology used on this site, group them as strictly
              necessary, performance, functional, or marketing, and explain
              how to grant or withdraw consent for non-essential categories.
              It will also document the analytics, embed, and CDN providers
              that may set cookies on Cervixel pages.
            </p>
            <p>
              For now, this site loads only the cookies strictly required to
              render pages and the lazy Google Maps embed on the{" "}
              <Link
                href="/contact"
                className="font-medium text-primary underline underline-offset-4 hover:text-primary-dark"
              >
                Cervixel contact page
              </Link>
              . Email{" "}
              <a
                href="mailto:info@cervixel.com"
                className="font-medium text-primary underline underline-offset-4 hover:text-primary-dark"
              >
                info@cervixel.com
              </a>{" "}
              if you need details before the full policy is published. This
              page will be updated before public launch.
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
