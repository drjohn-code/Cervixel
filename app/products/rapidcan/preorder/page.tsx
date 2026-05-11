// UI-only preorder flow. The form is client-side state with a success message
// only — no submissions are sent anywhere. Wire up Resend (or equivalent) and
// move pricing/timeline copy through legal review before public launch.

import type { ReactNode } from "react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import PreorderForm from "@/components/preorder/PreorderForm";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Hero from "@/components/ui/Hero";
import JsonLd from "@/components/ui/JsonLd";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { buildMetadata } from "@/lib/seo/metadata";
import {
  buildBreadcrumbSchema,
  buildOrganizationSchema,
  buildProductSchema,
} from "@/lib/seo/schema";

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "RapidCan", href: "/products/rapidcan" },
  { label: "Preorder", href: "/products/rapidcan/preorder" },
];

const PRODUCT_DESCRIPTION =
  "RapidCan is Cervixel's CRISPR-based rapid diagnostic test for cervical cancer, designed to run a sample-to-result workflow outside a centralised reference laboratory. The product is currently under CE marking review along the IVDR pathway.";

const AUDIENCES: ReadonlyArray<{
  title: string;
  body: string;
  icon: ReactNode;
}> = [
  {
    title: "Private clinics",
    body: "Independent clinical practices and screening providers placing tests in routine cervical cancer screening pathways.",
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
        <path d="M12 8 L 12 16" />
        <path d="M8 12 L 16 12" />
      </svg>
    ),
  },
  {
    title: "Distributors",
    body: "Diagnostic distributors placing RapidCan into clinical and community networks across geographies.",
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
        <path d="M3 7 L 12 3 L 21 7 L 21 17 L 12 21 L 3 17 Z" />
        <path d="M3 7 L 12 11 L 21 7" />
        <path d="M12 11 L 12 21" />
      </svg>
    ),
  },
  {
    title: "Charities & health organisations",
    body: "Non-profits and public-health initiatives funding screening capacity in under-served regions.",
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
        <path d="M12 21 C 6 17, 3 13, 3 9 a 5 5 0 0 1 9 -3 a 5 5 0 0 1 9 3 c 0 4, -3 8, -9 12 z" />
      </svg>
    ),
  },
  {
    title: "Governments",
    body: "Ministries of health, regional authorities, and public screening programmes procuring at population scale.",
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
        <path d="M3 21 L 21 21" />
        <path d="M5 21 L 5 10" />
        <path d="M10 21 L 10 10" />
        <path d="M14 21 L 14 10" />
        <path d="M19 21 L 19 10" />
        <path d="M3 10 L 12 4 L 21 10 Z" />
      </svg>
    ),
  },
];

const PACKAGES = [
  {
    title: "100 units",
    body: "Pilot deployments, single-site validation, early clinical evaluation.",
  },
  {
    title: "1,000 units",
    body: "Small networks, regional programmes, mid-size distributors entering screening.",
  },
  {
    title: "5,000 units",
    body: "National screening programmes, large distributor placements, mid-size health systems.",
  },
  {
    title: "10,000 units",
    body: "Population-scale deployments, government procurement, multi-region distribution.",
  },
] as const;

export const metadata = buildMetadata({
  title: "Preorder RapidCan – Cervical Cancer Screening | Cervixel",
  description:
    "Preorder RapidCan, Cervixel's CRISPR-based cervical cancer screening test. Priority allocation, preferred pricing, no payment captured until launch.",
  path: "/products/rapidcan/preorder",
  keywords: [
    "RapidCan preorder",
    "cervical cancer screening",
    "CRISPR diagnostic",
    "preorder",
    "Cervixel",
  ],
});

export default function RapidCanPreorderPage() {
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

      {/* 1) HERO — plain on mist wash, no aside, no CTA. Keeps page fitting 1440×900 cleanly. */}
      <Hero
        wash="mist"
        size="h1"
        variant="plain"
        eyebrow="Preorder"
        headline="Preorder RapidCan."
        subhead="RapidCan is currently in development and is expected to reach market within approximately two years, subject to regulatory review and clinical study completion. Preorder gives early supporters priority allocation, preferred pricing, and an opportunity to help fund cervical cancer screening capacity ahead of launch."
      />

      {/* 2) WHO PREORDERS */}
      <Section size="md">
        <Container>
          <SectionHeader
            eyebrow="Audience"
            title="Built for organisations placing screening capacity at scale."
          />
          <ul className="mt-12 grid list-none gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {AUDIENCES.map((audience) => (
              <li key={audience.title}>
                <Card variant="default" className="h-full">
                  <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-md border border-border">
                    {audience.icon}
                  </div>
                  <h3 className="text-h3 text-ink">{audience.title}</h3>
                  <p className="text-body mt-3 text-muted">{audience.body}</p>
                </Card>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* TODO: Review pricing language ("up to 60% below post-launch list price") and timeline framing ("approximately two years") with legal counsel before public launch. Both are commercial commitments and must be defensible. */}
      {/* 3) WHAT YOU GET */}
      <Section tone="muted" size="md">
        <Container variant="narrow">
          <SectionHeader
            eyebrow="Why preorder"
            title="Priority allocation. Preferred pricing. Direct support for early deployment."
          />
          <div className="mt-10 flex flex-col gap-5">
            <p className="text-body-lg text-muted">
              Preorder customers receive priority allocation when RapidCan
              begins shipping. Capacity in the first production runs is limited;
              organisations who preorder are queued before general availability
              opens.
            </p>
            <p className="text-body text-muted">
              Preorder pricing is offered at up to 60% below post-launch list
              price, with tiering tied to volume. Final pricing is confirmed
              when your organisation is contacted, and no payment is captured
              until you&rsquo;ve reviewed the documentation your jurisdiction
              requires.
            </p>
            <p className="text-body text-muted">
              Preorder commitments help Cervixel plan production, regulatory
              documentation, and clinical-validation throughput against real
              demand from organisations who are ready to deploy screening at
              scale.
            </p>
          </div>
        </Container>
      </Section>

      {/* 4) ORDER PACKAGES */}
      <Section size="md">
        <Container>
          <SectionHeader
            eyebrow="Packages"
            title="Choose a starting volume."
          />
          <ul className="mt-12 grid list-none gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {PACKAGES.map((pkg) => (
              <li key={pkg.title}>
                <Card variant="default" className="h-full">
                  <p className="text-h3 text-ink">{pkg.title}</p>
                  <p className="text-body mt-3 text-muted">{pkg.body}</p>
                </Card>
              </li>
            ))}
          </ul>
          <p className="text-body-sm mt-8 text-muted">
            Volumes above 10,000 units are supported on the same preorder
            pathway — select 10,000 in the form below and note your target
            volume in the message.
          </p>
        </Container>
      </Section>

      {/* 5) PREORDER FORM */}
      <Section tone="tinted" size="lg">
        <Container variant="narrow">
          <SectionHeader
            eyebrow="Register interest"
            title="Tell us about your preorder."
          />
          <p className="text-body-sm mt-6 text-muted">
            We&rsquo;ll contact you within five business days to confirm
            pricing, allocation, and the documentation your jurisdiction
            requires. No payment is captured here.
          </p>
          <div className="mt-10 rounded-xl border border-border bg-surface p-6 md:p-10">
            <PreorderForm />
          </div>
          <p className="text-body-sm mt-6 text-muted">
            Your details are used only to respond to your preorder enquiry. See
            our{" "}
            <a
              href="/privacy"
              className="font-medium text-ink underline underline-offset-[3px] decoration-1 hover:decoration-2"
            >
              privacy policy
            </a>{" "}
            for how we handle data submitted through this form.
          </p>
        </Container>
      </Section>

      {/* 6) FINAL CTA */}
      <Section size="md">
        <Container variant="narrow">
          <div className="flex flex-col items-center gap-6 text-center">
            <Eyebrow>Questions first?</Eyebrow>
            <h2 className="text-h2 text-ink">
              Talk to us before you preorder.
            </h2>
            <p className="text-body-lg max-w-xl text-muted">
              If your organisation is still scoping volume, pricing, or
              regulatory requirements, the team can answer questions before you
              submit a preorder enquiry.
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <Button href="/contact" variant="primary" size="lg">
                Contact the team
              </Button>
              <Button
                href="/products/rapidcan"
                variant="secondary"
                size="lg"
              >
                Back to RapidCan
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
