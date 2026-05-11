import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import JsonLd from "@/components/ui/JsonLd";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Prose from "@/components/ui/Prose";
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
      <Container variant="narrow">
        <Breadcrumbs items={BREADCRUMBS} />
        <header className="pt-6 pb-10">
          <Eyebrow>Legal</Eyebrow>
          <h1 className="mt-6 text-h1 text-ink">Privacy Policy</h1>
        </header>

        <Prose className="pb-20">
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
            <a href="mailto:info@cervixel.com">info@cervixel.com</a> with any
            data-protection question, or use the{" "}
            <Link href="/contact">Cervixel contact page</Link> to reach the
            team. This page will be updated with the full policy before the
            site launches publicly.
          </p>
        </Prose>
      </Container>
    </>
  );
}
