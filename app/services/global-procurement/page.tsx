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

const SLUG = "global-procurement";
const SERVICE = getServiceBySlugOrThrow(SLUG);

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: SERVICE.title, href: SERVICE.href },
];

const AUDIENCES = [
  {
    title: "Healthcare systems and hospital networks outside the EU",
    body: "Public and private healthcare systems sourcing CE-marked devices and IVDs from European supply chains, with the documentation their own regulators expect.",
  },
  {
    title: "Pharmaceutical distributors",
    body: "Distributors needing verified European supply with full compliance documentation, vendor audits, and benchmarking before any commitment.",
  },
  {
    title: "Research institutions and government bodies",
    body: "Organisations procuring under regulated conditions where an audit trail and a documented vendor assessment are non-negotiable.",
  },
] as const;

export const metadata = buildMetadata({
  title: "Global Procurement Services – CE-Marked Devices & IVDs",
  description:
    "European sourcing of CE-marked medical devices, IVDs, and pharmaceuticals for international partners — with vendor audits, benchmarking, and compliance documentation.",
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
        headline="Global procurement services."
        subhead="End-to-end sourcing of medical devices, IVDs, and pharmaceuticals from European supply chains. Built for organisations outside the EU that need access without building local infrastructure."
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
            title="What we mean by global procurement."
          />
          <div className="mt-10 flex flex-col gap-5">
            <p className="text-body-lg text-muted">
              Procurement is the operational layer that decides whether a
              cross-border medical supply chain works. Regulations, distribution
              agreements, language, currency, customs, cold chain — every layer
              adds risk and delay. Cervixel acts as a strategic European
              partner that handles those layers on the customer&rsquo;s behalf.
            </p>
            <p className="text-body text-muted">
              Engagements run on three operational tracks. The first is
              CE-marked medical devices and IVDs aligned with MDR and IVDR.
              The second is pharmaceutical procurement through verified
              European distribution networks. The third is vendor auditing for
              clinical and technical reliability before any order is placed.
            </p>
            <p className="text-body text-muted">
              Every project closes with a Standard Comprehensive Report — a
              written document covering vendor assessment, price benchmarking,
              regulatory documentation for international customs and local
              health authorities, and logistics and cold-chain verification
              where applicable.
            </p>
          </div>
        </Container>
      </Section>

      {/* WHO IT'S FOR */}
      <Section wash="mist" size="lg">
        <Container>
          <SectionHeader
            eyebrow="Audience"
            title="Who we source for."
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
            title="How a procurement engagement runs."
          />
          <p className="text-body-lg mt-10 text-muted">
            Scope is agreed in writing before any sourcing activity begins.
            Vendor shortlists are reviewed with the customer; audit and
            benchmarking work is documented as it happens, not summarised at
            the end. The engagement closes with the Standard Comprehensive
            Report — vendor assessment, regulatory documentation, logistics
            and cold-chain verification — handed over as the artifact the
            customer can carry forward to their own regulators, customs
            authorities, and internal review.
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
              Source it through Europe with us.
            </h2>
            <p className="text-body-lg max-w-xl text-muted">
              Tell us what you need to procure and where it has to land.
              We&rsquo;ll write you a scope and a vendor shortlist before any
              order moves.
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
