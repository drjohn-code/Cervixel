import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import JsonLd from "@/components/ui/JsonLd";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { buildBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata = buildMetadata({
  title: "Privacy Policy – Cervixel Diagnostics & Services Site",
  description:
    "Cervixel's privacy policy is being finalised by legal counsel. The full GDPR-compliant policy will appear here before public launch. Email us in the meantime.",
  path: "/privacy",
  noindex: true,
});

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Privacy Policy", href: "/privacy" },
];

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
          </header>

          <section className="prose pb-16 text-text">
            {/* TODO: replace placeholder copy with final GDPR-compliant Privacy Policy from legal counsel — CLAUDE.md §14 #10 */}
            <p>
              Cervixel UAB takes the privacy of researchers, clinicians,
              prospective customers, and website visitors seriously. Our full
              Privacy Policy is currently being finalised by legal counsel to
              meet the requirements of the EU General Data Protection
              Regulation (GDPR) and applicable Lithuanian data-protection law.
            </p>
            <p>
              The published version will explain, at minimum: what personal
              data we collect through this site (including via the contact and
              preorder forms), why we collect it, how long we retain it, the
              third-party processors we share it with, and how you can exercise
              your access, rectification, deletion, and portability rights.
            </p>
            <p>
              In the meantime, you can email{" "}
              <a
                href="mailto:info@cervixel.com"
                className="font-medium text-primary underline underline-offset-4 hover:text-primary-dark"
              >
                info@cervixel.com
              </a>{" "}
              with any data-protection question, or use the{" "}
              <Link
                href="/contact"
                className="font-medium text-primary underline underline-offset-4 hover:text-primary-dark"
              >
                Cervixel contact page
              </Link>{" "}
              to reach the team. This page will be updated with the full policy
              before the site launches publicly.
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
