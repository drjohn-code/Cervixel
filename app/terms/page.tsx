import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import JsonLd from "@/components/ui/JsonLd";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { buildBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata = buildMetadata({
  title: "Terms of Service – Cervixel Preorder & Consulting Site",
  description:
    "Cervixel's terms of service are being finalised by legal counsel. The full preorder and service terms will appear here before public launch. Email for details.",
  path: "/terms",
  noindex: true,
});

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Terms of Service", href: "/terms" },
];

export default function TermsPage() {
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
              Terms of Service
            </h1>
          </header>

          <section className="prose pb-16 text-text">
            {/* TODO: replace placeholder copy with final Terms of Service from legal counsel — CLAUDE.md §14 #10 */}
            <p>
              Cervixel UAB&rsquo;s full Terms of Service are currently being
              finalised by legal counsel. The published version will cover use
              of this website, CervixScan preorder commitments (including
              estimated delivery, refund policy, and price-validity), the
              consulting-services engagement framework, intellectual-property
              ownership, limitation of liability, and the governing law and
              jurisdiction (Lithuania).
            </p>
            <p>
              Until the final version is published, any preorder enquiry,
              service engagement, or partnership agreement is subject to a
              direct contract negotiated with the Cervixel team. Email{" "}
              <a
                href="mailto:info@cervixel.com"
                className="font-medium text-primary underline underline-offset-4 hover:text-primary-dark"
              >
                info@cervixel.com
              </a>{" "}
              for the current preorder and engagement terms, or use the{" "}
              <Link
                href="/contact"
                className="font-medium text-primary underline underline-offset-4 hover:text-primary-dark"
              >
                Cervixel contact page
              </Link>{" "}
              to start a conversation.
            </p>
            <p>
              This page will be replaced with the complete Terms of Service
              before the site launches publicly. Until then, this notice is
              indicative only and does not form a binding agreement.
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
