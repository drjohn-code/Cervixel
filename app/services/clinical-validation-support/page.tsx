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

const SLUG = "clinical-validation-support";
const SERVICE = getServiceBySlugOrThrow(SLUG);

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: SERVICE.title, href: SERVICE.href },
];

const AUDIENCES = [
  {
    title: "IVD developers",
    body: "Manufacturers preparing performance studies for IVDR submissions and looking for a methodological second pair of eyes.",
  },
  {
    title: "Clinical research organisations",
    body: "CROs coordinating IVD studies who want statistical and protocol review independent of the sponsor.",
  },
  {
    title: "Hospitals and reference labs",
    body: "Clinical sites evaluating new diagnostics in a controlled setting and wanting study design help before enrolment opens.",
  },
] as const;

export const metadata = buildMetadata({
  title: "Clinical Validation Support for IVD Diagnostic Studies",
  description:
    "Methodological support for clinical validation studies of IVD assays — protocol design, statistical planning, and the documentation regulators expect.",
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
        wash="sand"
        size="h1"
        eyebrow="Services"
        headline="Clinical validation support."
        subhead="Support for organisations preparing or executing clinical validation studies for in-vitro diagnostic assays — from study design through to documentation."
        cta={
          <>
            <Button href="/contact" variant="primary" size="lg">
              Start a conversation
            </Button>
            <Button
              href="/services/regulatory-strategy"
              variant="secondary"
              size="lg"
            >
              Regulatory strategy
            </Button>
          </>
        }
      />

      {/* WHAT IT IS */}
      <Section size="lg">
        <Container variant="narrow">
          <SectionHeader
            eyebrow="The work"
            title="What we mean by clinical validation support."
          />
          <div className="mt-10 flex flex-col gap-5">
            <p className="text-body-lg text-muted">
              Clinical validation is the scientific and methodological work
              that turns an analytical result into clinical evidence: protocol
              design, statistical planning, comparator selection, site
              coordination, and the documentation regulators expect. Get any
              one of those wrong early and the whole study can fail to support
              the claim it was intended to support.
            </p>
            <p className="text-body text-muted">
              We work as support — alongside the sponsor&rsquo;s clinical and
              regulatory teams, not in place of them. The deliverable is a
              study that holds up under review, not a service-provider
              relationship that runs the study for you.
            </p>
            <p className="text-body text-muted">
              Most of the value in this work shows up at the front end. A
              protocol that fails to anticipate a particular bias, a
              statistical plan that under-powers the primary endpoint, a
              comparator that turns out to be a moving target — these are
              cheap to fix in a draft and expensive to fix mid-enrolment.
            </p>
          </div>
        </Container>
      </Section>

      {/* WHO IT'S FOR */}
      <Section wash="mist" size="lg">
        <Container>
          <SectionHeader
            eyebrow="Audience"
            title="Who benefits from validation support."
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
            title="How a validation engagement runs."
          />
          <p className="text-body-lg mt-10 text-muted">
            Most validation engagements begin with a protocol review or a gap
            analysis. From there, work runs in defined phases against a study
            plan; outputs are written artifacts — protocols, statistical
            analysis plans, study reports — that fit into the sponsor&rsquo;s
            regulatory file. We don&rsquo;t recommend changes verbally; if a
            change is worth making, it goes into the document trail.
          </p>
        </Container>
      </Section>

      {/* RELATED SERVICES */}
      <Section wash="sage" size="md">
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
              Sharpen your study before you start it.
            </h2>
            <p className="text-body-lg max-w-xl text-muted">
              If you&rsquo;re early enough in study planning that protocol
              changes are still cheap, that&rsquo;s the moment we add the most
              value.
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
