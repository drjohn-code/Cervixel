import Image from "next/image";
import JsonLd from "@/components/ui/JsonLd";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Hero from "@/components/ui/Hero";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import BiologyLine from "@/components/visuals/lineart/BiologyLine";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildOrganizationSchema, buildWebSiteSchema } from "@/lib/seo/schema";
import { RECOGNITION } from "@/lib/recognition/recognition";
import { SERVICES } from "@/lib/services/services";

export const metadata = buildMetadata({
  title: "Cervixel – CRISPR Diagnostics for Cervical Cancer Screening",
  description:
    "Cervixel develops CRISPR-based rapid diagnostic tests for cervical cancer, aligned with the WHO 2030 elimination goal. Explore RapidCan and our research.",
  path: "/",
});

// TODO: replace Unsplash placeholder with owned product photography.
const PRODUCT_IMAGE_URL =
  "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1600&q=80";

function ServiceIcon({ slug }: { slug: string }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-6 w-6 text-ink",
    "aria-hidden": true,
  };
  switch (slug) {
    case "crispr-assay-development":
      return (
        <svg {...common}>
          <circle cx="6" cy="7" r="2" />
          <circle cx="18" cy="7" r="2" />
          <circle cx="12" cy="17" r="2" />
          <line x1="8" y1="7" x2="16" y2="7" />
          <line x1="7.7" y1="8.2" x2="10.3" y2="15.8" />
          <line x1="16.3" y1="8.2" x2="13.7" y2="15.8" />
        </svg>
      );
    case "molecular-diagnostics-consulting":
      return (
        <svg {...common}>
          <path d="M12 3a6 6 0 0 0-3 11.5V17h6v-2.5A6 6 0 0 0 12 3z" />
          <path d="M9 18h6" />
          <path d="M10 21h4" />
        </svg>
      );
    case "clinical-validation-support":
      return (
        <svg {...common}>
          <rect x="6" y="4" width="12" height="17" rx="2" />
          <path d="M9 4h6V2H9z" />
          <path d="M9 13l2 2 4-4" />
        </svg>
      );
    case "regulatory-strategy":
      return (
        <svg {...common}>
          <path d="M12 3l8 3v5c0 5-3.5 9-8 11-4.5-2-8-6-8-11V6z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "contract-research":
      return (
        <svg {...common}>
          <path d="M9 3h6" />
          <path d="M10 3v6L5 19a2 2 0 0 0 1.7 3h10.6A2 2 0 0 0 19 19l-5-10V3" />
          <path d="M7.5 14h9" />
        </svg>
      );
    case "global-procurement":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" />
          <line x1="12" y1="3" x2="12" y2="21" />
        </svg>
      );
    default:
      return null;
  }
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={buildOrganizationSchema()} />
      <JsonLd data={buildWebSiteSchema()} />

      {/* 1) HERO — glass panel on mist wash, line-art aside */}
      <Hero
        wash="mist"
        variant="glass"
        glassMaxWidth="640px"
        eyebrow="CRISPR diagnostics"
        headline="Cervical cancer screening, within reach."
        subhead="Cervixel develops CRISPR-based rapid diagnostic tests for cervical cancer, designed for accessibility and built around Europe's regulatory rigour. Our work is aligned with the WHO 2030 cervical cancer elimination goal."
        cta={
          <>
            <Button href="/products/rapidcan" variant="primary" size="lg">
              Explore RapidCan
            </Button>
            <Button href="/about" variant="secondary" size="lg">
              Our science
            </Button>
          </>
        }
        aside={
          <div className="mx-auto w-full max-w-[480px] text-ink">
            <BiologyLine className="h-auto w-full" />
          </div>
        }
      />

      {/* 2) RECOGNITION — single source of truth in lib/recognition/recognition.ts. */}
      <Section size="md" tone="muted">
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
                  <p className="text-body mt-3 text-muted">
                    {item.description}
                  </p>
                </Card>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* 3) PRODUCT SUMMARY — RapidCan */}
      <Section size="lg">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <Eyebrow>Our product</Eyebrow>
              <h2 className="text-h2 mt-6 text-ink">RapidCan</h2>
              <p className="text-body-lg mt-6 text-muted">
                A CRISPR-based rapid diagnostic test for cervical cancer.
                RapidCan is engineered to detect molecular signals associated
                with the disease without depending on a centralised laboratory
                workflow.
              </p>
              <p className="text-body mt-4 text-muted">
                Preorder pricing is structured for healthcare providers,
                distributors, and institutional buyers at scale — the
                organisations that decide what reaches a clinic, a community
                programme, or a national screening initiative.
              </p>
              <p className="text-body mt-4 text-muted">
                RapidCan is currently under CE marking review along the IVDR
                pathway. Clinical studies are active and ongoing. We will
                communicate verified performance characteristics as those
                studies are published.
              </p>

              {/* TODO: Stat block intentionally omitted. CLAUDE.md §6.2 references a
                  "100% diagnostic accuracy" claim that is explicitly flagged for
                  legal/regulatory review (§14 #1). Add a Stat once a verifiable,
                  publishable figure is cleared. */}

              <div className="mt-10">
                <Button
                  href="/products/rapidcan"
                  variant="primary"
                  size="lg"
                >
                  Learn more about RapidCan
                </Button>
              </div>
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border lg:aspect-[5/6]">
              <Image
                src={PRODUCT_IMAGE_URL}
                alt="Microscopy detail representing molecular diagnostic research."
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* 4) SERVICES SUMMARY GRID — feature cards (icons as accents) */}
      <Section wash="sand" size="lg">
        <Container>
          <SectionHeader
            eyebrow="Services"
            title="Research and development partnerships"
            lead="Beyond RapidCan, Cervixel works with biotech and pharmaceutical organisations on the molecular and regulatory work that decides whether a diagnostic ever reaches a patient."
          />
          <ul className="mt-12 grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <li key={service.href}>
                <Card variant="feature" href={service.href} className="h-full">
                  <div className="mb-6 flex items-center gap-2">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border">
                      <ServiceIcon slug={service.slug} />
                    </div>
                    <Eyebrow>Service</Eyebrow>
                  </div>
                  <h3 className="text-h3 mt-4 text-ink">{service.title}</h3>
                  <p className="text-body mt-3 text-muted">
                    {service.description}
                  </p>
                </Card>
              </li>
            ))}
          </ul>
          <div className="mt-12 flex justify-center">
            <Button href="/services" variant="secondary" size="lg">
              View all services
            </Button>
          </div>
        </Container>
      </Section>

      {/* 5) MISSION */}
      <Section size="lg">
        <Container variant="narrow">
          <SectionHeader
            eyebrow="Mission"
            title="Eliminating cervical cancer is a 2030 goal. We're building the tools to get there."
            align="left"
          />
          <p className="text-body-lg mt-10 text-muted">
            The World Health Organization has set a 2030 target for the
            elimination of cervical cancer as a public health problem.
            Achieving it requires screening that is accurate, accessible, and
            usable in places where centralised laboratory infrastructure does
            not exist.
          </p>
          <p className="text-body mt-5 text-muted">
            Cervixel was founded in Vilnius to contribute to that goal — by
            designing molecular diagnostics that can travel further than the
            traditional pathology lab, and by building from Europe with the
            regulatory rigour the work demands.
          </p>
          <div className="mt-10">
            <Button href="/about" variant="link" size="md">
              Read about our science
            </Button>
          </div>
        </Container>
      </Section>

      {/* 6) CEO QUOTE
          TODO: replace with verified CEO statement before publish. Mirrors the
          convention used on the about page (app/about/page.tsx). */}
      <Section size="md">
        <Container variant="narrow">
          <Card variant="quote" className="text-left">
            <Eyebrow>From the founder</Eyebrow>
            <blockquote className="text-h3 mt-6 text-ink">
              &ldquo;Molecular diagnostics has spent forty years tied to
              centralised laboratories. CRISPR is what finally changes that
              equation. At Cervixel, we&rsquo;re designing for the clinic, the
              field, and eventually the home — because that&rsquo;s where
              screening actually has to happen if we want to close the
              gap.&rdquo;
            </blockquote>
            <div className="mt-10 flex items-center gap-4">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-border bg-gray-100">
                <Image
                  src="/images/placeholders/ceo-headshot.svg"
                  alt="John Muhammadi, Founder and CEO of Cervixel"
                  width={56}
                  height={56}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-body font-semibold text-ink">
                  John Muhammadi, M.D., MBA
                </p>
                <p className="text-body-sm text-muted">Founder &amp; CEO</p>
              </div>
            </div>
          </Card>
        </Container>
      </Section>

      {/* 7) FINAL CTA */}
      <Section wash="mist" size="md">
        <Container variant="narrow">
          <div className="flex flex-col items-center gap-6 text-center">
            <Eyebrow>Get in touch</Eyebrow>
            <h2 className="text-h2 text-ink">Talk to the team</h2>
            <p className="text-body-lg max-w-xl text-muted">
              Whether you&rsquo;re evaluating RapidCan or exploring a
              partnership, we&rsquo;d like to hear from you.
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
                Preorder RapidCan
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
