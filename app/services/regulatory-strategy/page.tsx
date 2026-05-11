import Breadcrumbs from "@/components/layout/Breadcrumbs";
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
  buildServiceSchema,
} from "@/lib/seo/schema";
import { getRelatedServices, getServiceBySlugOrThrow } from "@/lib/services/services";

const SLUG = "regulatory-strategy";
const SERVICE = getServiceBySlugOrThrow(SLUG);

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: SERVICE.title, href: SERVICE.href },
];

const AUDIENCES = [
  {
    title: "IVD developers preparing CE marking",
    body: "Manufacturers approaching IVDR submission and needing a defensible classification, pathway, and evidence plan.",
  },
  {
    title: "Teams entering the EU",
    body: "Organisations expanding into the EU market from another jurisdiction and mapping the regulatory delta against IVDR.",
  },
  {
    title: "Mid-development pressure-tests",
    body: "Companies in mid-development evaluating whether their evidence plan will hold up under regulator scrutiny before they commit further.",
  },
] as const;

export const metadata = buildMetadata({
  title: "Regulatory Strategy for IVDR & CE Marking Submissions",
  description:
    "Regulatory strategy support for in-vitro diagnostic products under IVDR — gap analysis, technical-file structuring, and pre-submission planning.",
  path: SERVICE.href,
});

export default function Page() {
  const related = getRelatedServices(SLUG);

  return (
    <>
      <JsonLd
        data={buildServiceSchema({
          name: SERVICE.title,
          description: SERVICE.description,
          url: SERVICE.href,
        })}
      />
      <JsonLd data={buildOrganizationSchema()} />
      <JsonLd data={buildBreadcrumbSchema(BREADCRUMBS)} />

      <Container className="pt-4 pb-0">
        <Breadcrumbs items={BREADCRUMBS} />
      </Container>

      <Hero
        wash="sage"
        size="h1"
        eyebrow="Services"
        headline="Regulatory strategy."
        subhead="Regulatory strategy support for in-vitro diagnostic products in the EU under IVDR, with adjacent-market planning for organisations preparing to expand."
        cta={
          <>
            <Button href="/contact" variant="primary" size="lg">
              Start a conversation
            </Button>
            <Button
              href="/services/clinical-validation-support"
              variant="secondary"
              size="lg"
            >
              Clinical validation
            </Button>
          </>
        }
      />

      {/* WHAT IT IS — note: divergent h2 vs. other services, by design */}
      <Section size="lg">
        <Container variant="narrow">
          <SectionHeader
            eyebrow="The work"
            title="What regulatory strategy is, and what it isn't."
          />
          <div className="mt-10 flex flex-col gap-5">
            <p className="text-body-lg text-muted">
              Strategy and submission <strong>support</strong> — not approval.
              We help teams choose the right classification and pathway,
              structure the technical documentation, identify the gaps that
              will block a submission, and plan the work needed to close them.
              The work is intellectual, methodological, and document-heavy.
            </p>
            <p className="text-body text-muted">
              We do not promise regulatory outcomes — for our own products or
              for clients&rsquo; — and any consultant who does is selling
              something else. Regulators decide; consultants help teams arrive
              at the regulator&rsquo;s desk with a coherent file. Cervixel
              itself is currently under CE marking review for RapidCan, and
              we know the difference between strategic support and a
              guarantee.
            </p>
            <p className="text-body text-muted">
              The point of an engagement is to remove avoidable risk from a
              submission and to surface unavoidable risk in writing, where it
              can be planned for.
            </p>
          </div>
        </Container>
      </Section>

      {/* WHO IT'S FOR */}
      <Section wash="sand" size="lg">
        <Container>
          <SectionHeader
            eyebrow="Audience"
            title="Who benefits from regulatory strategy work."
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

      {/* HOW WE ENGAGE */}
      <Section size="md">
        <Container variant="narrow">
          <SectionHeader
            eyebrow="Engagement"
            title="How a regulatory engagement runs."
          />
          <p className="text-body-lg mt-10 text-muted">
            Most regulatory engagements begin with a written gap analysis of
            the current evidence and documentation against the chosen pathway.
            From there, work follows the submission roadmap: technical-file
            structuring, evidence planning, and pre-submission documentation,
            with milestones agreed in writing before each phase begins. Where
            evidence is missing, we say so — and we tell you what would close
            the gap rather than papering over it.
          </p>
        </Container>
      </Section>

      {/* RELATED SERVICES */}
      <Section wash="mist" size="md">
        <Container>
          <SectionHeader eyebrow="Related" title="Other ways we partner." />
          <ul className="mt-12 grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((service) => (
              <li key={service.slug}>
                <Card variant="default" href={service.href} className="h-full">
                  <p className="text-h3 text-ink">{service.title}</p>
                  <p className="text-body mt-3 text-muted">
                    {service.description}
                  </p>
                </Card>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* FINAL CTA */}
      <Section size="md">
        <Container variant="narrow">
          <div className="flex flex-col items-center gap-6 text-center">
            <Eyebrow>Get in touch</Eyebrow>
            <h2 className="text-h2 text-ink">
              Pressure-test your regulatory plan.
            </h2>
            <p className="text-body-lg max-w-xl text-muted">
              If you&rsquo;d rather find a hole in your plan now than during a
              regulator&rsquo;s review, we should talk.
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <Button href="/contact" variant="primary" size="lg">
                Contact us
              </Button>
              <Button href="/about" variant="secondary" size="lg">
                About Cervixel
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
