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

const SLUG = "crispr-assay-development";
const SERVICE = getServiceBySlugOrThrow(SLUG);

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: SERVICE.title, href: SERVICE.href },
];

const AUDIENCES = [
  {
    title: "Diagnostic developers",
    body: "Companies building CRISPR-based products who need extra hands or external review on a specific layer of the assay.",
  },
  {
    title: "Translational research groups",
    body: "Academic teams moving from a published method toward a deployable assay that runs outside the originating lab.",
  },
  {
    title: "Biotech R&D",
    body: "Teams evaluating whether CRISPR is the right fit for a target before committing internal capacity to a programme.",
  },
] as const;

export const metadata = buildMetadata({
  title: "CRISPR Assay Development – Molecular Diagnostics R&D",
  description:
    "Cervixel helps teams design, prototype, and refine CRISPR-based detection assays for molecular targets — from guide-RNA selection to bench validation.",
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
        headline="CRISPR assay development."
        subhead="We help teams design, prototype, and refine CRISPR-based detection assays for specific molecular targets — from initial guide-RNA selection through to bench validation."
        cta={
          <>
            <Button href="/contact" variant="primary" size="lg">
              Start a conversation
            </Button>
            <Button
              href="/products/rapidcan"
              variant="secondary"
              size="lg"
            >
              Explore RapidCan
            </Button>
          </>
        }
      />

      {/* WHAT IT IS */}
      <Section size="lg">
        <Container variant="narrow">
          <SectionHeader
            eyebrow="The work"
            title="What we mean by CRISPR assay development."
          />
          <div className="mt-10 flex flex-col gap-5">
            <p className="text-body-lg text-muted">
              CRISPR assay development is the engineering problem of turning a
              programmable molecular recognition system into a test that runs
              reliably on a real-world sample. The work spans three layers: the
              molecular logic of the assay (target sequence, recognition
              strategy), the biochemistry that produces a readable signal, and
              the workflow that turns that signal into something usable outside
              a research-grade laboratory.
            </p>
            <p className="text-body text-muted">
              Most engagements start at one of those three layers and expand
              outward. A team with a working chemistry that doesn&rsquo;t
              survive a real sample matrix has a different problem than a team
              with a candidate target and no chemistry to detect it yet.
              We&rsquo;ll help identify which problem you actually have before
              committing to how to solve it.
            </p>
            <p className="text-body text-muted">
              Our own work on RapidCan is an example of the same engineering
              problem, applied to cervical cancer screening. The discipline
              that work demanded is the discipline we bring to client
              engagements.
            </p>
          </div>
        </Container>
      </Section>

      {/* WHO IT'S FOR */}
      <Section wash="sand" size="lg">
        <Container>
          <SectionHeader eyebrow="Audience" title="Who we work with." />
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
          <SectionHeader eyebrow="Engagement" title="How we work together." />
          <p className="text-body-lg mt-10 text-muted">
            Engagements begin with a target review and a written scope. From
            there, the work runs in milestones: chemistry decisions get
            committed, results get documented, and the path from each
            milestone to the next is agreed before the next one starts. If a
            result tells us the original plan won&rsquo;t work, we say so and
            replan together — that&rsquo;s the value of the engagement, not a
            failure of it.
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
              Talk to us about your target.
            </h2>
            <p className="text-body-lg max-w-xl text-muted">
              Tell us what you&rsquo;re trying to detect and where the work is
              stuck. We&rsquo;ll come back with how we&rsquo;d approach it.
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
