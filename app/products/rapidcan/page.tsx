import type { ReactNode } from "react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Hero from "@/components/ui/Hero";
import JsonLd from "@/components/ui/JsonLd";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import BiologyLine from "@/components/visuals/lineart/BiologyLine";
import { RECOGNITION } from "@/lib/recognition/recognition";
import { buildMetadata } from "@/lib/seo/metadata";
import {
  buildBreadcrumbSchema,
  buildOrganizationSchema,
  buildProductSchema,
} from "@/lib/seo/schema";

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "RapidCan", href: "/products/rapidcan" },
];

const CAPABILITIES: ReadonlyArray<{
  title: string;
  description: string;
  icon: ReactNode;
}> = [
  {
    title: "Sample type",
    description:
      "Cervical sample taken at point of care, no specialised sample transport required.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-6 w-6 text-ink"
      >
        <path d="M12 3 C 8 9, 5 13, 5 16 a 7 7 0 0 0 14 0 c 0 -3, -3 -7, -7 -13 z" />
      </svg>
    ),
  },
  {
    title: "Workflow",
    description:
      "Sample-to-result in a single bench process, operated by trained clinical staff rather than laboratory technicians.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-6 w-6 text-ink"
      >
        <circle cx="5" cy="6" r="2" />
        <circle cx="12" cy="12" r="2" />
        <circle cx="19" cy="18" r="2" />
        <path d="M7 7 L 10 11" />
        <path d="M14 13 L 17 17" />
      </svg>
    ),
  },
  {
    title: "Setting",
    description:
      "Designed for use outside a centralised reference laboratory — clinics, community health programmes, and screening initiatives.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-6 w-6 text-ink"
      >
        <path d="M4 21 L 4 9 L 12 4 L 20 9 L 20 21 Z" />
        <path d="M10 21 L 10 14 L 14 14 L 14 21" />
        <path d="M12 9 L 12 11" />
        <path d="M11 10 L 13 10" />
      </svg>
    ),
  },
];

const AUDIENCES = [
  {
    title: "Healthcare providers",
    body: "Clinicians and primary-care networks delivering cervical cancer screening to patients who need it — with or without local access to a reference laboratory.",
  },
  {
    title: "Distributors",
    body: "Partners placing diagnostic products into clinical and community settings across geographies, with the documentation each market expects.",
  },
  {
    title: "Institutional buyers",
    body: "Hospital systems, public health programmes, and screening initiatives sourcing tests at scale for population-level deployment.",
  },
] as const;

const PRODUCT_DESCRIPTION =
  "RapidCan is Cervixel's CRISPR-based rapid diagnostic test for cervical cancer, designed to run a sample-to-result workflow outside a centralised reference laboratory. The product is currently under CE marking review along the IVDR pathway.";

export const metadata = buildMetadata({
  title: "RapidCan – CRISPR Rapid Diagnostic for Cervical Cancer",
  description:
    "RapidCan is Cervixel's CRISPR-based rapid diagnostic for cervical cancer, designed for use outside a reference lab. Under CE marking review (IVDR).",
  path: "/products/rapidcan",
  keywords: [
    "RapidCan",
    "CRISPR cervical cancer test",
    "rapid diagnostic test",
    "IVDR",
    "cervical cancer screening",
    "Cervixel",
  ],
});

export default function RapidCanPage() {
  return (
    <>
      <JsonLd
        data={buildProductSchema({
          name: "RapidCan",
          description: PRODUCT_DESCRIPTION,
          category: "In vitro diagnostic device",
          productPath: "/products/rapidcan",
        })}
      />
      <JsonLd data={buildOrganizationSchema()} />
      <JsonLd data={buildBreadcrumbSchema(BREADCRUMBS)} />

      <Container className="pt-4 pb-0">
        <Breadcrumbs items={BREADCRUMBS} />
      </Container>

      {/* 1) HERO — glass panel on mist wash, BiologyLine aside */}
      <Hero
        wash="mist"
        variant="glass"
        eyebrow="Product"
        headline="Cervical cancer screening, redesigned."
        subhead="RapidCan is a CRISPR-based rapid diagnostic test for cervical cancer, designed to run a sample-to-result workflow outside a reference laboratory. Currently under CE marking review along the IVDR pathway."
        cta={
          <>
            <Button
              href="/products/rapidcan/preorder"
              variant="primary"
              size="lg"
            >
              Preorder
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Talk to the team
            </Button>
          </>
        }
        aside={
          <div className="mx-auto w-full max-w-[480px] text-ink">
            <BiologyLine className="h-auto w-full" />
          </div>
        }
      />

      {/* 2) WHAT IT IS */}
      <Section size="lg">
        <Container variant="narrow">
          <SectionHeader
            eyebrow="The product"
            title="What RapidCan does."
          />
          <div className="mt-10 flex flex-col gap-5">
            <p className="text-body-lg text-muted">
              RapidCan detects cervical cancer markers using a CRISPR-based
              detection chemistry. The device runs a sample-to-result workflow
              in a single bench process — no specialised sample transport, no
              centralised reference laboratory.
            </p>
            <p className="text-body text-muted">
              The traditional pathway depends on a centralised lab: a sample is
              sent away, processed over days or weeks, and the result returned
              through a chain of intermediaries. RapidCan is designed to remove
              that dependency — to run the molecular signal where the sample is
              taken, by the same staff who took it.
            </p>
            <p className="text-body text-muted">
              RapidCan is currently under CE marking review along the IVDR
              pathway. Clinical studies are active. Verified performance
              characteristics will be communicated as those studies are
              published.
            </p>
          </div>
        </Container>

        <Container className="mt-16">
          <ul className="grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((capability) => (
              <li key={capability.title}>
                <Card variant="default" className="h-full">
                  <div className="mb-6 flex items-center gap-2">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border">
                      {capability.icon}
                    </div>
                    <Eyebrow>Capability</Eyebrow>
                  </div>
                  <h3 className="text-h3 mt-4 text-ink">{capability.title}</h3>
                  <p className="text-body mt-3 text-muted">
                    {capability.description}
                  </p>
                </Card>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* 3) WHO IT'S FOR */}
      <Section tone="muted" size="lg">
        <Container>
          <SectionHeader
            eyebrow="Audience"
            title="Designed for clinical use."
          />
          <ul className="mt-12 grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {AUDIENCES.map((audience) => (
              <li key={audience.title}>
                <Card variant="default" className="h-full">
                  <p className="text-h3 text-ink">{audience.title}</p>
                  <p className="text-body mt-3 text-muted">{audience.body}</p>
                </Card>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* 4) REGULATORY STATUS — verbatim legal-locked phrasing. Do not edit. */}
      <Section size="md">
        <Container variant="narrow">
          <SectionHeader
            eyebrow="Status"
            title="Under CE marking review."
          />
          <div className="mt-10 flex flex-col gap-5">
            <p className="text-body-lg text-muted">
              RapidCan is currently under CE marking review along the IVDR
              pathway. Clinical studies are active and ongoing. Verified
              performance characteristics will be communicated as those
              studies are published — we will not publish numbers we cannot
              defend in a peer-reviewed setting.
            </p>
            <p className="text-body text-muted">
              RapidCan is not yet CE certified and is not yet authorised for
              clinical use. Information on this page describes the product as
              currently in development and is not a representation that
              RapidCan is available for sale or clinical application.
            </p>
          </div>
        </Container>
      </Section>

      {/* 5) RECOGNITION — shared data with home and about */}
      <Section tone="muted" size="md">
        <Container>
          <SectionHeader
            eyebrow="Recognition"
            title="Independent recognition for our work."
          />
          <ul className="mt-12 grid list-none gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {RECOGNITION.map((item) => (
              <li key={item.title}>
                <Card variant="default" className="h-full">
                  <p className="text-h3 text-ink">{item.title}</p>
                  <p className="text-body mt-3 text-muted">{item.description}</p>
                </Card>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* 6) PREORDER */}
      <Section tone="tinted" size="md">
        <Container variant="narrow">
          <SectionHeader
            eyebrow="Preorder"
            title="Be first when RapidCan ships."
          />
          <p className="text-body-lg mt-10 text-muted">
            Preorder is registering interest, not purchasing. No payment is
            captured today — we&rsquo;ll contact you when shipping begins and
            walk you through pricing, tiers, and the documentation your
            organisation needs at that stage.
          </p>
          <div className="mt-10">
            <Button
              href="/products/rapidcan/preorder"
              variant="primary"
              size="lg"
            >
              Preorder
            </Button>
          </div>
        </Container>
      </Section>

      {/* 7) FINAL CTA */}
      <Section size="md">
        <Container variant="narrow">
          <div className="flex flex-col items-center gap-6 text-center">
            <Eyebrow>Get in touch</Eyebrow>
            <h2 className="text-h2 text-ink">Build with us.</h2>
            <p className="text-body-lg max-w-xl text-muted">
              Whether you&rsquo;re evaluating RapidCan for a clinic, a
              distribution network, or a screening initiative, we&rsquo;d like
              to hear from you.
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <Button href="/contact" variant="primary" size="lg">
                Talk to the team
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                Explore services
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
