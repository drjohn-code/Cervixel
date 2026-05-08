import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import JsonLd from "@/components/ui/JsonLd";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import {
  buildAboutPageSchema,
  buildBreadcrumbSchema,
  buildOrganizationSchema,
  buildPersonSchema,
} from "@/lib/seo/schema";

export const metadata = buildMetadata({
  title: "About Cervixel – CRISPR Diagnostics from Vilnius, EU",
  description:
    "Cervixel is a Lithuanian biotech building CervixScan, a CRISPR-based rapid cervical cancer test. Meet our Vilnius team and the WHO 2030 mission.",
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

const AWARDS = [
  {
    title: "1st place — Hospiton Cancer Hackathon",
    detail:
      "Recognised for the early CervixScan concept against entries from clinical and engineering teams across Europe.",
  },
  {
    title: "Invited to Cambridge University",
    detail:
      "Selected for an in-person research and translation programme at Cambridge to advance the diagnostic platform.",
  },
] as const;

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
];

export default function AboutPage() {
  const ceoPerson = buildPersonSchema({
    name: "John Muhammadi",
    jobTitle: "Founder & Chief Executive Officer",
    description:
      "Founder and CEO of Cervixel, leading the development of CRISPR-based rapid diagnostic tests for cervical cancer in alignment with the WHO 2030 elimination goal.",
    image: "/images/placeholders/ceo-headshot.svg",
    // TODO: confirm CEO LinkedIn URL
    sameAs: ["https://www.linkedin.com/in/john-muhammadi/"],
  });

  return (
    <>
      <JsonLd data={buildAboutPageSchema()} />
      <JsonLd data={buildOrganizationSchema()} />
      <JsonLd data={ceoPerson} />
      <JsonLd data={buildBreadcrumbSchema(BREADCRUMBS)} />

      <article className="bg-bg">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={BREADCRUMBS} />

          <header className="pt-6 pb-10 sm:pt-10 sm:pb-14">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">
              About Cervixel
            </p>
            <h1 className="mt-3 text-3xl font-bold leading-tight text-text sm:text-4xl lg:text-5xl">
              Building CRISPR diagnostics for cervical cancer from Vilnius
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-text">
              Cervixel is a Lithuanian biotechnology company developing
              CRISPR-based rapid diagnostic tests for cervical cancer. Founded
              by John Muhammadi, M.D., MBA, and headquartered in Vilnius, we
              are building{" "}
              <Link
                href="/products/cervixscan"
                className="font-medium text-primary underline underline-offset-4 hover:text-primary-dark"
              >
                CervixScan
              </Link>{" "}
              to support the WHO 2030 cervical cancer elimination goal through
              accessible, evidence-based home diagnostics for clinicians,
              distributors, and institutional buyers worldwide.
            </p>
          </header>

          <section
            aria-labelledby="why-heading"
            className="border-t border-border py-10 sm:py-14"
          >
            <h2
              id="why-heading"
              className="text-2xl font-semibold text-text sm:text-3xl"
            >
              Why are we building CervixScan?
            </h2>
            <div className="prose mt-5 text-text">
              <p>
                Cervical cancer is one of the most preventable cancers — and one
                of the most under-screened. The World Health Organization
                reports{" "}
                <a
                  href="https://www.who.int/news-room/fact-sheets/detail/cervical-cancer"
                  className="font-medium text-primary underline underline-offset-4 hover:text-primary-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  approximately 660,000 new cases and 350,000 deaths in 2022
                </a>
                , with the highest burden in low- and middle-income regions
                where laboratory infrastructure is scarce. Conventional
                screening pipelines take days or weeks; many people who need
                screening never receive it at all.
              </p>
              <p>
                CervixScan is our response. By bringing CRISPR-based detection
                into a rapid, accessible test format, we want to compress that
                pipeline — from sample to result — into something that can run
                outside a centralised reference lab. The result is a tool that
                can travel to the populations it is meant to serve, rather than
                forcing them to travel to it.
              </p>
              <p>
                {/* TODO: confirm origin story wording with team */}
                The company was founded in Vilnius because Lithuania sits at a
                useful intersection: an EU regulatory environment that is
                serious about{" "}
                <a
                  href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017R0746"
                  className="font-medium text-primary underline underline-offset-4 hover:text-primary-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  in-vitro diagnostic device standards (IVDR)
                </a>
                , a deep regional pool of life-sciences and engineering talent,
                and proximity to clinical partners across the Baltics and the
                Nordics.
              </p>
            </div>
          </section>

          <section
            aria-labelledby="founder-heading"
            className="border-t border-border py-10 sm:py-14"
          >
            <h2
              id="founder-heading"
              className="text-2xl font-semibold text-text sm:text-3xl"
            >
              Who&rsquo;s behind Cervixel?
            </h2>

            <div className="mt-6 grid gap-8 sm:grid-cols-[256px_1fr] sm:gap-10">
              <div className="overflow-hidden rounded-lg bg-surface ring-1 ring-border">
                {/* TODO: replace with real CEO headshot from CLAUDE.md §14 #9 */}
                <Image
                  src="/images/placeholders/ceo-headshot.svg"
                  alt="John Muhammadi, Founder and CEO of Cervixel"
                  width={400}
                  height={480}
                  sizes="(min-width: 640px) 256px, 100vw"
                  className="h-auto w-full"
                  priority
                  unoptimized
                />
              </div>

              <div>
                <p className="text-lg font-semibold text-text">
                  John Muhammadi, M.D., MBA
                </p>
                <p className="text-sm text-muted">Founder &amp; CEO</p>

                <blockquote className="mt-5 border-l-4 border-accent pl-4 text-base italic leading-relaxed text-text">
                  {/* TODO: confirm CEO quote with Dr. Muhammadi */}
                  &ldquo;Cervical cancer is one of the most preventable cancers
                  in medicine — and yet it still kills hundreds of thousands of
                  women every year, mostly in places where today&rsquo;s
                  screening tools never reach. We started Cervixel because the
                  science is finally ready to put accurate, early detection
                  into someone&rsquo;s hands at home, and because building from
                  Europe gives us the regulatory rigour the world deserves.&rdquo;
                </blockquote>

                <ul className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm list-none">
                  <li>
                    {/* TODO: confirm CEO LinkedIn URL */}
                    <a
                      href="https://www.linkedin.com/in/john-muhammadi/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center font-medium text-primary underline underline-offset-4 hover:text-primary-dark"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:info@cervixel.com"
                      className="inline-flex min-h-[44px] items-center font-medium text-primary underline underline-offset-4 hover:text-primary-dark"
                    >
                      info@cervixel.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                Founding-team university affiliations
              </p>
              <ul className="mt-3 flex flex-wrap gap-2 list-none">
                {UNIVERSITY_AFFILIATIONS.map((school) => (
                  <li
                    key={school}
                    className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-text ring-1 ring-border"
                  >
                    {school}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-muted">
                Affiliations reflect academic backgrounds of founding team
                members. Listed institutions have not endorsed Cervixel.
              </p>
            </div>
          </section>

          <section
            aria-labelledby="mission-heading"
            className="border-t border-border py-10 sm:py-14"
          >
            <h2
              id="mission-heading"
              className="text-2xl font-semibold text-text sm:text-3xl"
            >
              How do we work toward the WHO 2030 elimination goal?
            </h2>
            <div className="prose mt-5 text-text">
              <p>
                The{" "}
                <a
                  href="https://www.who.int/publications/i/item/9789240014107"
                  className="font-medium text-primary underline underline-offset-4 hover:text-primary-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WHO Global Strategy to Accelerate the Elimination of Cervical
                  Cancer
                </a>{" "}
                sets a 2030 target of 70% of women screened with a high-performance
                test by age 35 and again by age 45. Hitting that target at
                global scale requires diagnostics that are fast, affordable,
                and deployable outside reference laboratories.
              </p>
              <p>
                Our work focuses on three things: a CRISPR-based detection
                chemistry tuned for high-risk HPV biomarkers, a sample-to-result
                workflow that can be operated by trained non-laboratory staff,
                and a regulatory pathway that does not compromise on clinical
                evidence. CervixScan is currently{" "}
                <strong>under CE marking review (IVDR pathway)</strong> with
                active clinical studies underway.
              </p>
              <p>
                Beyond the product, we run a{" "}
                <Link
                  href="/services"
                  className="font-medium text-primary underline underline-offset-4 hover:text-primary-dark"
                >
                  consulting practice across five biotech service lines
                </Link>{" "}
                — including{" "}
                <Link
                  href="/services/regulatory-affairs"
                  className="font-medium text-primary underline underline-offset-4 hover:text-primary-dark"
                >
                  regulatory affairs and IVDR compliance
                </Link>{" "}
                and{" "}
                <Link
                  href="/services/product-development"
                  className="font-medium text-primary underline underline-offset-4 hover:text-primary-dark"
                >
                  biotech and pharmaceutical product development
                </Link>{" "}
                — that fund the platform and let us share what we&rsquo;ve
                learned with the wider industry.
              </p>
            </div>
          </section>

          <section
            aria-labelledby="awards-heading"
            className="border-t border-border py-10 sm:py-14"
          >
            <h2
              id="awards-heading"
              className="text-2xl font-semibold text-text sm:text-3xl"
            >
              What recognition has Cervixel received so far?
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 list-none">
              {AWARDS.map((award) => (
                <li
                  key={award.title}
                  className="rounded-lg border border-border bg-surface p-5"
                >
                  <p className="text-base font-semibold text-text">
                    {award.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {award.detail}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              Read{" "}
              <Link
                href="/blog"
                className="font-medium text-primary underline underline-offset-4 hover:text-primary-dark"
              >
                research and industry insights from the Cervixel team
              </Link>{" "}
              for ongoing updates on our clinical and regulatory progress.
            </p>
          </section>

          <section className="border-t border-border py-10 sm:py-14">
            <div className="rounded-lg bg-primary px-6 py-10 text-center text-white sm:px-10 sm:py-14">
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Talk with the team behind CervixScan
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-white/90">
                Researchers, clinicians, and institutional buyers can reach our
                Vilnius office for product enquiries, partnerships, or service
                engagements.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[48px] items-center justify-center rounded bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-dark transition-colors"
                >
                  Contact our Vilnius office
                </Link>
                <Link
                  href="/products/cervixscan"
                  className="inline-flex min-h-[48px] items-center justify-center rounded border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  Explore the CervixScan product page
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
