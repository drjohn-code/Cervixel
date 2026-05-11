import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import JsonLd from "@/components/ui/JsonLd";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Prose from "@/components/ui/Prose";
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
      <Container variant="narrow">
        <Breadcrumbs items={BREADCRUMBS} />
        <header className="pt-6 pb-10">
          <Eyebrow>Legal</Eyebrow>
          <h1 className="mt-6 text-h1 text-ink">Terms of Service</h1>
        </header>

        <Prose className="pb-20">
          {/* TODO: replace placeholder copy with final Terms of Service from legal counsel — CLAUDE.md §14 #10 */}
          <p>
            Cervixel UAB&rsquo;s full Terms of Service are currently being
            finalised by legal counsel. The published version will cover use
            of this website, RapidCan preorder commitments (including
            estimated delivery, refund policy, and price-validity), the
            consulting-services engagement framework, intellectual-property
            ownership, limitation of liability, and the governing law and
            jurisdiction (Lithuania).
          </p>
          <p>
            Until the final version is published, any preorder enquiry,
            service engagement, or partnership agreement is subject to a
            direct contract negotiated with the Cervixel team. Email{" "}
            <a href="mailto:info@cervixel.com">info@cervixel.com</a> for the
            current preorder and engagement terms, or use the{" "}
            <Link href="/contact">Cervixel contact page</Link> to start a
            conversation.
          </p>
          <p>
            This page will be replaced with the complete Terms of Service
            before the site launches publicly. Until then, this notice is
            indicative only and does not form a binding agreement.
          </p>
        </Prose>
      </Container>
    </>
  );
}
