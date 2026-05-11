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

const SLUG = "contract-research";
const SERVICE = getServiceBySlugOrThrow(SLUG);

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: SERVICE.title, href: SERVICE.href },
];

const AUDIENCES = [
  {
    title: "Companies needing capacity",
    body: "Organisations with a defined experimental question that don’t have the bench capacity to run it internally on the timeline they need.",
  },
  {
    title: "Investors and corp-dev",
    body: "Investment teams commissioning independent technical due-diligence on a target asset before a transaction or follow-on round.",
  },
  {
    title: "Academic groups with industry funding",
    body: "University teams operating industry-funded scopes that benefit from a partner familiar with applied-research workflows and reporting.",
  },
] as const;

export const metadata = buildMetadata({
  title: "Contract Research – Diagnostic & Biotech Engagements",
  description:
    "Defined-scope contract research for biotech, pharma, and investor partners — written protocols, documented results, scope agreed before any work begins.",
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
        wash="mist"
        size="h1"
        eyebrow="Services"
        headline="Contract research."
        subhead="Discrete experimental work and protocol execution for biotech, pharmaceutical, and investor partners — flexible scope, documented outputs."
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
      />

      {/* WHAT IT IS */}
      <Section size="lg">
        <Container variant="narrow">
          <SectionHeader
            eyebrow="The work"
            title="What we mean by contract research."
          />
          <div className="mt-10 flex flex-col gap-5">
            <p className="text-body-lg text-muted">
              Defined-scope laboratory and analytical work performed on behalf
              of a sponsor. Engagements are bounded by a written scope, a
              protocol, and a deliverable — typically a study report. The
              relationship is transactional and contractual; the value to the
              sponsor is in the rigour, not in an open-ended retainer.
            </p>
            <p className="text-body text-muted">
              Contract research is useful when an organisation needs
              experimental capacity it doesn&rsquo;t have, wants an
              independent technical answer before making a downstream
              decision, or needs work documented in a form that will hold up
              outside the sponsor&rsquo;s own organisation.
            </p>
            <p className="text-body text-muted">
              We are honest about what falls outside our scope. If a question
              needs equipment we don&rsquo;t run, methods we haven&rsquo;t
              validated, or expertise we don&rsquo;t have, we&rsquo;ll say so
              before the engagement starts — and where possible, point you at
              someone who does.
            </p>
          </div>
        </Container>
      </Section>

      {/* WHO IT'S FOR */}
      <Section wash="sage" size="lg">
        <Container>
          <SectionHeader
            eyebrow="Audience"
            title="Who commissions contract work."
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
            title="How a contract engagement runs."
          />
          <p className="text-body-lg mt-10 text-muted">
            Contract research runs against a written protocol. Scope, methods,
            and acceptance criteria are agreed before any work begins; results
            are returned in a documented report regardless of whether the
            experiment supports the sponsor&rsquo;s hypothesis. The point of a
            contract engagement is to know — not to confirm what you hoped to
            find.
          </p>
        </Container>
      </Section>

      {/* RELATED SERVICES */}
      <Section wash="sand" size="md">
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
            <h2 className="text-h2 text-ink">Scope a study with us.</h2>
            <p className="text-body-lg max-w-xl text-muted">
              Send us the question and the constraint. If we can do the work,
              we&rsquo;ll write you a scope; if we can&rsquo;t, we&rsquo;ll
              tell you who can.
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <Button href="/contact" variant="primary" size="lg">
                Contact us
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                Other ways we partner
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
