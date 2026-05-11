import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import JsonLd from "@/components/ui/JsonLd";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Prose from "@/components/ui/Prose";
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
      <Container variant="narrow">
        <Breadcrumbs items={BREADCRUMBS} />
        <header className="pt-6 pb-10">
          <Eyebrow>Legal</Eyebrow>
          <h1 className="mt-6 text-h1 text-ink">Cookie Policy</h1>
        </header>

        <Prose className="pb-20">
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
            <Link href="/contact">Cervixel contact page</Link>. Email{" "}
            <a href="mailto:info@cervixel.com">info@cervixel.com</a> if you
            need details before the full policy is published. This page will
            be updated before public launch.
          </p>
        </Prose>
      </Container>
    </>
  );
}
