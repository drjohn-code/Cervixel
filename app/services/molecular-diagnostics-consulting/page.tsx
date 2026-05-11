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

const SLUG = "molecular-diagnostics-consulting";
const SERVICE = getServiceBySlugOrThrow(SLUG);

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: SERVICE.title, href: SERVICE.href },
];

const AUDIENCES = [
  {
    title: "First-time entrants",
    body: "Companies entering molecular diagnostics for the first time and choosing a platform, before significant capital is committed.",
  },
  {
    title: "Established teams expanding",
    body: "Existing diagnostics groups evaluating whether to add a new modality — CRISPR, isothermal amplification, microfluidics — to the platform.",
  },
  {
    title: "Investors and corp-dev",
    body: "Investment teams running technical diligence on a diagnostic asset and needing an independent read on the underlying science.",
  },
] as const;

export const metadata = buildMetadata({
  title: "Molecular Diagnostics Consulting & Strategy Advisory",
  description:
    "Strategic advisory for organisations entering or expanding in molecular diagnostics — platform selection, pipeline planning, and investment-grade review.",
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
        wash="blush"
        size="h1"
        eyebrow="Services"
        headline="Molecular diagnostics consulting."
        subhead="Advisory engagements on molecular diagnostic strategy — technology selection, pipeline planning, and investment-grade technical review."
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
            title="What we mean by molecular diagnostics consulting."
          />
          <div className="mt-10 flex flex-col gap-5">
            <p className="text-body-lg text-muted">
              This is strategic work, not hands-on lab work. The questions we
              help teams answer are the ones that decide whether a programme is
              worth running at all: which platform is appropriate for the
              target, which target is appropriate for the market, which
              regulatory pathway is realistic, and what evidence package the
              endgame requires.
            </p>
            <p className="text-body text-muted">
              Outputs are written — assessments, plans, decision memos — not
              lab data. The point of a consulting engagement is to give a
              decision-maker a defensible basis for committing or
              de-committing capital. Anyone who promises certainty in this
              space is selling certainty, not strategy.
            </p>
            <p className="text-body text-muted">
              We bring our own programme&rsquo;s vantage to client work: we
              run a CRISPR diagnostic ourselves, we are inside the IVDR
              process, and we know which decisions get expensive when they
              get postponed.
            </p>
          </div>
        </Container>
      </Section>

      {/* WHO IT'S FOR */}
      <Section wash="sand" size="lg">
        <Container>
          <SectionHeader eyebrow="Audience" title="Who we advise." />
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
            title="How a consulting engagement runs."
          />
          <p className="text-body-lg mt-10 text-muted">
            Consulting engagements are scoped tightly. Before any work begins
            we agree the question, the artifacts you need, and the timeline.
            Most engagements run on a fixed-fee basis against a written
            deliverable; if mid-engagement findings change what makes sense to
            do next, we revise the scope in writing rather than absorbing it
            silently.
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
              Get an honest read on your diagnostic strategy.
            </h2>
            <p className="text-body-lg max-w-xl text-muted">
              If a strategic question is blocking a programme decision,
              we&rsquo;ll help you frame it before you commit.
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
