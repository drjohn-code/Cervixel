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
import DataLine from "@/components/visuals/lineart/DataLine";
import {
  AssayDevLine,
  ConsultingLine,
  ValidationLine,
  RegulatoryLine,
  ContractLine,
  ProcurementLine,
} from "@/components/visuals/lineart/services";
import { buildMetadata } from "@/lib/seo/metadata";
import {
  buildBreadcrumbSchema,
  buildOrganizationSchema,
} from "@/lib/seo/schema";
import { SERVICES } from "@/lib/services/services";

export const metadata = buildMetadata({
  title: "Services – CRISPR Diagnostics & Regulatory Support",
  description:
    "Cervixel partners with biotech, pharma, and clinical organisations on CRISPR assay development, consulting, and regulatory strategy. Talk to our team.",
  path: "/services",
  keywords: [
    "CRISPR assay development",
    "molecular diagnostics consulting",
    "clinical validation",
    "IVDR regulatory strategy",
    "biotech contract research",
  ],
});

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery call",
    body: "We start with a short conversation to understand the question, the constraints, and what success looks like. No proposal yet — just enough to know whether we're a useful partner.",
  },
  {
    step: "02",
    title: "Scoped proposal",
    body: "If the engagement makes sense, we send a written scope: what we'll do, what you'll get, on what timeline, at what fee. Nothing in the work changes without a written change to the scope.",
  },
  {
    step: "03",
    title: "Delivery",
    body: "Work runs in milestones with documented outputs at each step. You see the artifacts as they land — protocols, plans, reports — not all at once at the end.",
  },
] as const;

/* Each service owns one wash and one line-art. Spec §2.2 + §9.2. */
const SERVICE_VISUAL: Record<
  string,
  { wash: string; node: ReactNode }
> = {
  "crispr-assay-development": {
    wash: "linear-gradient(120deg, #E8E9EF 0%, #FFFFFF 80%)",
    node: <AssayDevLine className="h-full w-full" />,
  },
  "molecular-diagnostics-consulting": {
    wash: "linear-gradient(120deg, #F3DCEA 0%, #FFFFFF 80%)",
    node: <ConsultingLine className="h-full w-full" />,
  },
  "clinical-validation-support": {
    wash: "linear-gradient(120deg, #EFE8DC 0%, #FFFFFF 80%)",
    node: <ValidationLine className="h-full w-full" />,
  },
  "regulatory-strategy": {
    wash: "linear-gradient(120deg, #DDE8DD 0%, #FFFFFF 80%)",
    node: <RegulatoryLine className="h-full w-full" />,
  },
  "contract-research": {
    wash: "linear-gradient(120deg, #E8E9EF 0%, #FFFFFF 80%)",
    node: <ContractLine className="h-full w-full" />,
  },
  "global-procurement": {
    wash: "linear-gradient(120deg, #EFE8DC 0%, #FFFFFF 80%)",
    node: <ProcurementLine className="h-full w-full" />,
  },
};

export default function ServicesHubPage() {
  return (
    <>
      <JsonLd data={buildOrganizationSchema()} />
      <JsonLd data={buildBreadcrumbSchema(BREADCRUMBS)} />

      <Container className="pt-4 pb-0">
        <Breadcrumbs items={BREADCRUMBS} />
      </Container>

      <Hero
        wash="sand"
        variant="glass"
        glassMaxWidth="640px"
        eyebrow="Services"
        headline="Partnerships in molecular diagnostics."
        subhead="Cervixel partners with biotech, pharma, and clinical research groups on molecular diagnostics. Engagements are scoped tightly and run on written milestones."
        cta={
          <>
            <Button href="/contact" variant="primary" size="lg">
              Start a conversation
            </Button>
            <Button href="/about" variant="secondary" size="lg">
              About Cervixel
            </Button>
          </>
        }
        aside={
          <div className="mx-auto w-full max-w-[480px] text-ink">
            <DataLine className="h-auto w-full" />
          </div>
        }
      />

      {/* SERVICES GRID — image-led cards with per-service line art */}
      <Section size="lg">
        <Container>
          <SectionHeader
            eyebrow="What we offer"
            title="Six lines of work."
            lead="Each engagement is scoped on its own. Most clients begin with one and grow into another as the programme moves."
          />
          <ul className="mt-12 grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => {
              const visual = SERVICE_VISUAL[service.slug];
              return (
                <li key={service.slug}>
                  <Card
                    variant="image-led"
                    href={service.href}
                    className="h-full"
                    media={
                      <div
                        className="flex h-full w-full items-center justify-center p-8 text-ink"
                        style={{ background: visual?.wash }}
                      >
                        {visual?.node}
                      </div>
                    }
                  >
                    <Eyebrow>Service</Eyebrow>
                    <h3 className="text-h3 mt-4 text-ink">{service.title}</h3>
                    <p className="text-body mt-3 text-muted">
                      {service.description}
                    </p>
                  </Card>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      {/* HOW WE WORK */}
      <Section wash="mist" size="lg">
        <Container>
          <SectionHeader
            eyebrow="Engagement"
            title="How partnerships work."
            lead="Three steps, no surprises. Anything that isn't in the written scope isn't in the work."
          />
          <ol className="mt-12 grid list-none gap-6 sm:grid-cols-3">
            {PROCESS_STEPS.map((step) => (
              <li key={step.step}>
                <Card variant="default" className="h-full">
                  <Eyebrow>Step {step.step}</Eyebrow>
                  <p className="text-h3 mt-4 text-ink">{step.title}</p>
                  <p className="text-body mt-3 text-muted">{step.body}</p>
                </Card>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* FINAL CTA */}
      <Section wash="sand" size="md">
        <Container variant="narrow">
          <div className="flex flex-col items-center gap-6 text-center">
            <Eyebrow>Get in touch</Eyebrow>
            <h2 className="text-h2 text-ink">
              Bring us your hardest question.
            </h2>
            <p className="text-body-lg max-w-xl text-muted">
              Whether you&rsquo;re scoping a programme, evaluating a pivot, or
              running diligence, we&rsquo;d like to hear from you.
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <Button href="/contact" variant="primary" size="lg">
                Contact us
              </Button>
              <Button
                href="/products/rapidcan"
                variant="secondary"
                size="lg"
              >
                Explore RapidCan
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
