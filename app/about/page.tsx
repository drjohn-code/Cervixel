import Image from "next/image";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Hero from "@/components/ui/Hero";
import JsonLd from "@/components/ui/JsonLd";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Stat from "@/components/ui/Stat";
import GeneralLine from "@/components/visuals/lineart/GeneralLine";
import { RECOGNITION } from "@/lib/recognition/recognition";
import { buildMetadata } from "@/lib/seo/metadata";
import {
  buildAboutPageSchema,
  buildBreadcrumbSchema,
  buildOrganizationSchema,
  buildPersonSchema,
} from "@/lib/seo/schema";

export const metadata = buildMetadata({
  title: "About Cervixel – CRISPR Diagnostics from Vilnius, EU",
  description:
    "Cervixel is a Lithuanian biotech building RapidCan, a CRISPR-based rapid cervical cancer test. Meet our Vilnius team and the WHO 2030 mission.",
  path: "/about",
  keywords: [
    "Cervixel",
    "cervical cancer diagnostics",
    "CRISPR diagnostics",
    "Lithuanian biotech",
    "WHO 2030 cervical cancer",
    "John Muhammadi",
  ],
});

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
];

const UNIVERSITY_AFFILIATIONS = [
  "Cambridge University",
  "Imperial College London",
  "London Business School",
  "Karolinska Institute",
  "KTH Royal Institute of Technology",
  "Uppsala University",
  "Stockholm School of Economics",
  "ISM University of Management and Economics (Vilnius)",
  "IMC Vilnius",
] as const;

export default function AboutPage() {
  const ceoPerson = buildPersonSchema({
    name: "John Muhammadi",
    jobTitle: "Founder & Chief Executive Officer",
    description:
      "Founder and CEO of Cervixel, leading the development of CRISPR-based rapid diagnostic tests for cervical cancer in alignment with the WHO 2030 elimination goal.",
    image: "/images/placeholders/ceo-headshot.svg",
    sameAs: ["https://www.linkedin.com/in/muhammadi-bg/"],
  });

  return (
    <>
      <JsonLd data={buildAboutPageSchema()} />
      <JsonLd data={buildOrganizationSchema()} />
      <JsonLd data={ceoPerson} />
      <JsonLd data={buildBreadcrumbSchema(BREADCRUMBS)} />

      <Container className="pt-4 pb-0">
        <Breadcrumbs items={BREADCRUMBS} />
      </Container>

      {/* 1) HERO — glass panel on sand wash, line-art aside */}
      <Hero
        wash="sand"
        variant="glass"
        glassMaxWidth="640px"
        eyebrow="About Cervixel"
        headline="Cervical cancer screening, from Vilnius."
        subhead="Cervixel develops CRISPR-based rapid diagnostic tests for cervical cancer, in service of the WHO 2030 elimination goal."
        cta={
          <>
            <Button href="/contact" variant="primary" size="lg">
              Talk to the team
            </Button>
            <Button href="/products/rapidcan" variant="secondary" size="lg">
              Explore RapidCan
            </Button>
          </>
        }
        aside={
          <div className="mx-auto w-full max-w-[480px] text-ink">
            <GeneralLine className="h-auto w-full" />
          </div>
        }
      />

      {/* 2) MISSION */}
      <Section size="lg">
        <Container variant="narrow">
          <SectionHeader
            eyebrow="Mission"
            title="Why cervical cancer screening still fails — and what we're changing."
          />
          <div className="mt-10 flex flex-col gap-5">
            <p className="text-body-lg text-muted">
              Cervical cancer remains one of the most preventable cancers in
              medicine, yet the World Health Organization recorded approximately{" "}
              <a
                href="https://www.who.int/news-room/fact-sheets/detail/cervical-cancer"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ink underline underline-offset-[3px] decoration-1 hover:decoration-2"
              >
                660,000 new cases and 350,000 deaths in 2022
              </a>
              . The burden falls disproportionately on lower-income regions,
              where the laboratory infrastructure that conventional screening
              assumes simply does not exist.
            </p>
            <p className="text-body text-muted">
              The pipeline a typical screen depends on — a sample sent to a
              centralised lab, processed over days or weeks, returned to a
              clinician, and then communicated back to the patient — fails the
              people it is meant to serve. Many never start the process; many
              who start it never see the result.
            </p>
            <p className="text-body text-muted">
              {/* TODO: confirm origin story wording with team */}
              Cervixel exists to change that pipeline structurally. By moving
              the molecular signal out of the reference laboratory, we want to
              compress sample-to-result into something a clinic, a community
              programme, or eventually a person can run on their own.
            </p>
          </div>
        </Container>
      </Section>

      {/* 3) THE SCIENCE */}
      <Section wash="mist" size="lg">
        <Container variant="narrow">
          <SectionHeader
            eyebrow="Our science"
            title="CRISPR, applied to screening."
          />
          <div className="mt-10 flex flex-col gap-5">
            <p className="text-body-lg text-muted">
              CRISPR is a programmable molecular tool: it allows a test to
              recognise a specific genetic sequence with a degree of
              specificity that, until recently, lived only inside
              research-grade laboratories. Translating that capability into a
              diagnostic — one that runs reliably outside a reference lab, on
              a real-world sample — is the engineering problem at the heart
              of RapidCan.
            </p>
            <p className="text-body text-muted">
              Our work is on a CRISPR-based detection chemistry for cervical
              cancer markers, paired with a sample-to-result workflow
              designed to be operated by trained clinical staff rather than
              laboratory technicians. The objective isn&rsquo;t a faster lab
              test; it&rsquo;s a test that the lab is no longer required for.
            </p>
            <p className="text-body text-muted">
              RapidCan is undergoing CE marking review under the IVDR
              pathway, with clinical studies active. Performance
              characteristics will be communicated as those studies are
              published — we will not publish numbers we cannot defend in a
              peer-reviewed setting.
            </p>
            <p className="text-body text-muted">
              The same regulatory and methodological discipline the work
              demands is what we offer to biotech and pharmaceutical
              partners, and what we expect from any claim made on this site.
            </p>
          </div>
        </Container>
      </Section>

      {/* 3b) WHO TARGETS — promoted to its own Section so the two reference
          numbers carry visual weight as a unit, rather than sitting as
          orphan content below the Science prose. */}
      <Section size="md">
        <Container>
          <SectionHeader
            align="center"
            eyebrow="WHO targets"
            title="Two numbers that frame our work."
          />
          <div className="mt-12 grid gap-12 grid-cols-1 md:grid-cols-2">
            <Stat
              value="70%"
              label="WHO 2030 screening target"
              description={
                <>
                  Women screened with a high-performance test by ages 35 and 45,
                  per the{" "}
                  <a
                    href="https://www.who.int/publications/i/item/9789240014107"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-ink underline underline-offset-[3px] decoration-1 hover:decoration-2"
                  >
                    WHO Global Strategy
                  </a>
                  .
                </>
              }
            />
            <Stat
              value="2030"
              label="Elimination target year"
              description="WHO target to eliminate cervical cancer as a public health problem worldwide."
            />
          </div>
        </Container>
      </Section>

      {/* 4) LEADERSHIP
          TODO: Expand with named team members once roster is verified — do not
          invent. CLAUDE.md §2 currently confirms the CEO only. */}
      <Section size="lg">
        <Container>
          <SectionHeader eyebrow="Leadership" title="Built in Vilnius." />

          <Card variant="quote" className="mt-12">
            <div className="grid gap-8 md:grid-cols-[200px_1fr] md:items-start md:gap-10">
              <div className="overflow-hidden rounded-lg bg-surface ring-1 ring-border">
                {/* TODO: replace with real CEO headshot from CLAUDE.md §14 #9 */}
                <Image
                  src="/images/placeholders/ceo-headshot.svg"
                  alt="John Muhammadi, Founder and CEO of Cervixel"
                  width={400}
                  height={480}
                  sizes="(min-width: 768px) 200px, 100vw"
                  className="h-auto w-full"
                  unoptimized
                />
              </div>

              <div>
                <Eyebrow>Founder &amp; CEO</Eyebrow>
                <blockquote className="text-h3 mt-6 text-ink">
                  {/* TODO: confirm CEO quote with Dr. Muhammadi */}
                  &ldquo;Cervical cancer is one of the most preventable cancers
                  in medicine — and yet it still kills hundreds of thousands of
                  women every year, mostly in places where today&rsquo;s
                  screening tools never reach. We started Cervixel because the
                  science is finally ready to put accurate, early detection
                  into someone&rsquo;s hands at home, and because building from
                  Europe gives us the regulatory rigour the world deserves.&rdquo;
                </blockquote>
                <p className="text-body mt-8 font-semibold text-ink">
                  John Muhammadi, M.D., MBA
                </p>
                <p className="text-body-sm text-muted">Founder &amp; CEO</p>
                <ul className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-body-sm list-none">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/muhammadi-bg/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center font-medium text-ink underline underline-offset-[3px] decoration-1 hover:decoration-2"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:john@cervixel.com"
                      className="inline-flex min-h-[44px] items-center font-medium text-ink underline underline-offset-[3px] decoration-1 hover:decoration-2"
                    >
                      john@cervixel.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <div className="mt-16">
            <Eyebrow>Founding-team university affiliations</Eyebrow>
            <ul className="mt-6 flex flex-wrap gap-2 list-none">
              {UNIVERSITY_AFFILIATIONS.map((school) => (
                <li
                  key={school}
                  className="rounded-full bg-surface px-3.5 py-1.5 text-body-sm font-medium text-ink ring-1 ring-border"
                >
                  {school}
                </li>
              ))}
            </ul>
            <p className="text-body-sm mt-4 text-muted">
              Affiliations reflect academic backgrounds of founding team
              members. Listed institutions have not endorsed Cervixel.
            </p>
          </div>
        </Container>
      </Section>

      {/* 5) RECOGNITION — single source of truth in lib/recognition/recognition.ts. */}
      <Section wash="sage" size="md">
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

      {/* 6) FINAL CTA */}
      <Section wash="mist" size="md">
        <Container variant="narrow">
          <div className="flex flex-col items-center gap-6 text-center">
            <Eyebrow>Get in touch</Eyebrow>
            <h2 className="text-h2 text-ink">Open a conversation.</h2>
            <p className="text-body-lg max-w-xl text-muted">
              Whether you&rsquo;re a clinician evaluating RapidCan, a partner
              exploring a service engagement, or a researcher with shared
              interests, we&rsquo;d like to hear from you.
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
