import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import GlassPanel from "@/components/ui/GlassPanel";
import Hero from "@/components/ui/Hero";
import Prose from "@/components/ui/Prose";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Stat from "@/components/ui/Stat";
import BiologyLine from "@/components/visuals/lineart/BiologyLine";
import DataLine from "@/components/visuals/lineart/DataLine";
import GeneralLine from "@/components/visuals/lineart/GeneralLine";
import {
  AssayDevLine,
  ConsultingLine,
  ValidationLine,
  RegulatoryLine,
  ContractLine,
} from "@/components/visuals/lineart/services";

export const metadata: Metadata = {
  title: "Design system",
  robots: { index: false, follow: false },
};

const PRODUCT_PHOTO =
  "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&q=80";

function Block({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-border rounded-lg p-6 bg-bg">
      <p className="text-eyebrow text-ink mb-4">{label}</p>
      <div>{children}</div>
    </div>
  );
}

export default function DesignReviewPage() {
  return (
    <>
      <Hero
        wash="mist"
        variant="glass"
        eyebrow="Design system"
        headline="Cervixel design primitives"
        subhead="Internal review surface for the rebuilt design system. Not indexed — for visual QA only."
        cta={
          <>
            <Button href="#typography" variant="primary" size="lg">
              Jump to typography
            </Button>
            <Button href="#components" variant="secondary" size="lg">
              Jump to components
            </Button>
          </>
        }
        aside={
          <div className="mx-auto w-full max-w-[480px] text-ink">
            <BiologyLine className="h-auto w-full" />
          </div>
        }
      />

      {/* MOOD WASHES */}
      <Section size="lg">
        <Container>
          <SectionHeader
            eyebrow="Mood washes"
            title="Four section backgrounds, one ink."
            lead="No saturated brand accent — chromatic work is done by soft 120° gradients on a single ink. Each section type owns one wash."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {(["mist", "blush", "sand", "sage"] as const).map((wash) => (
              <div
                key={wash}
                className="aspect-[16/9] rounded-2xl p-10"
                style={{
                  backgroundImage: `linear-gradient(120deg, ${
                    { mist: "#E8E9EF", blush: "#F3DCEA", sand: "#EFE8DC", sage: "#DDE8DD" }[wash]
                  } 0%, #FFFFFF 70%)`,
                }}
              >
                <Eyebrow>--wash-{wash}</Eyebrow>
                <p className="mt-6 text-h3 text-ink capitalize">{wash} wash</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* TYPE SCALE */}
      <Section id="typography" wash="mist" size="lg">
        <Container>
          <SectionHeader
            eyebrow="Type scale"
            title="Editorial typography for a scientific brand"
            lead="Fraunces (display) for headlines, Inter (sans) for body. Modular 1.25 ratio with a larger jump at display sizes."
          />
          <div className="mt-12 flex flex-col gap-6">
            <Block label="text-display-2xl · 96 · Fraunces · 400">
              <p className="text-display-2xl text-ink">Display 2XL</p>
            </Block>
            <Block label="text-display-xl · 72 · Fraunces · 400">
              <p className="text-display-xl text-ink">Display XL</p>
            </Block>
            <Block label="text-display-lg · 56 · Fraunces · 400">
              <p className="text-display-lg text-ink">
                Democratising early cancer detection
              </p>
            </Block>
            <Block label="text-h1 · 48 · Fraunces · 400">
              <p className="text-h1 text-ink">
                CRISPR-based diagnostics, designed in Vilnius
              </p>
            </Block>
            <Block label="text-h2 · 36 · Fraunces · 400">
              <p className="text-h2 text-ink">
                Aligned with the WHO 2030 cervical cancer goal
              </p>
            </Block>
            <Block label="text-h3 · 28 · Fraunces · 500">
              <p className="text-h3 text-ink">
                RapidCan is currently under CE marking review
              </p>
            </Block>
            <Block label="text-h4 · 22 · Inter · 500">
              <p className="text-h4 text-ink">
                The serif retires; the sans takes over from h4
              </p>
            </Block>
            <Block label="text-h5 · 18 · Inter · 600">
              <p className="text-h5 text-ink">List-group label</p>
            </Block>
            <Block label="text-body-lg · 20 · Inter · 400">
              <p className="text-body-lg text-ink max-w-2xl">
                Lead paragraph. Cervixel is a Lithuanian biotechnology company
                developing rapid, CRISPR-based diagnostic tests for cervical
                cancer.
              </p>
            </Block>
            <Block label="text-body · 16 · Inter · 400">
              <p className="text-body text-ink max-w-2xl">
                Default body. Pricing reflects early-access preorder rates for
                healthcare providers, distributors, and institutional buyers.
              </p>
            </Block>
            <Block label="text-body-sm · 15 · Inter · 400">
              <p className="text-body-sm text-muted max-w-xl">
                Secondary body / dense lists.
              </p>
            </Block>
            <Block label="text-caption · 13 · Inter · 400 · 0.01em">
              <p className="text-caption text-muted">
                Captions, image credits, helper text.
              </p>
            </Block>
            <Block label="text-eyebrow · 12 · Inter · 600 · uppercase · 0.12em">
              <Eyebrow>Under CE marking review</Eyebrow>
            </Block>
            <Block label="text-mono-sm · 13 · JetBrains Mono · 400">
              <p className="text-mono-sm text-ink">D 57 / N 23 / J 52 / T 27</p>
            </Block>
          </div>
        </Container>
      </Section>

      {/* GLASS PANEL */}
      <Section id="components" size="lg">
        <Container>
          <SectionHeader
            eyebrow="Glass panel"
            title="The signature hero pattern"
            lead="rgba(255,255,255,0.55) over a mood wash with backdrop-filter blur(24px) saturate(140%). Falls back to rgba(255,255,255,0.92) where backdrop-filter isn't supported."
          />
          <div
            className="mt-12 grid gap-8 rounded-3xl p-12 lg:grid-cols-[1.1fr_1fr]"
            style={{
              backgroundImage: "linear-gradient(120deg, #F3DCEA 0%, #FFFFFF 70%)",
            }}
          >
            <GlassPanel>
              <Eyebrow>Glass panel</Eyebrow>
              <h3 className="mt-6 text-h2 text-ink">
                Frosted, on a mood wash
              </h3>
              <p className="mt-5 text-body text-muted">
                Constrained to 560px max-width. Inner padding clamps from 32px
                to 64px. Border 1px inner highlight; shadow lifts with an inset
                top stroke for ambient warmth.
              </p>
              <div className="mt-8 flex gap-3">
                <Button variant="primary" size="md">
                  Primary
                </Button>
                <Button variant="secondary" size="md">
                  Secondary
                </Button>
              </div>
            </GlassPanel>
            <div className="text-ink">
              <DataLine className="h-auto w-full" />
            </div>
          </div>
        </Container>
      </Section>

      {/* BUTTONS */}
      <Section wash="sand" size="lg">
        <Container>
          <SectionHeader
            eyebrow="Buttons"
            title="Pill CTA with circular arrow chip"
            lead="Primary fills ink, secondary outlines ink (1.5px), ghost is bare ink, destructive uses --color-error. Chip animates +2px x on hover. Ghost and link have no chip."
          />
          <div className="mt-12 flex flex-col gap-6">
            <Block label="Variants · size=md">
              <div className="flex flex-wrap gap-3">
                <Button variant="primary">Book a meeting</Button>
                <Button variant="secondary">Learn more</Button>
                <Button variant="ghost">Tertiary action</Button>
                <Button variant="destructive">Delete</Button>
                <Button variant="link">Inline link</Button>
              </div>
            </Block>
            <Block label="Sizes · variant=primary">
              <div className="flex flex-wrap items-end gap-3">
                <Button variant="primary" size="sm">
                  Small
                </Button>
                <Button variant="primary" size="md">
                  Medium
                </Button>
                <Button variant="primary" size="lg">
                  Large
                </Button>
                <Button variant="primary" size="xl">
                  Extra large
                </Button>
              </div>
            </Block>
            <Block label="As link (href provided) — renders next/link">
              <div className="flex flex-wrap gap-3">
                <Button href="/" variant="primary" size="md">
                  Home
                </Button>
                <Button href="/about" variant="secondary" size="md">
                  About
                </Button>
              </div>
            </Block>
            <Block label="Disabled">
              <Button variant="primary" disabled>
                Disabled primary
              </Button>
            </Block>
          </div>
        </Container>
      </Section>

      {/* CARDS */}
      <Section size="lg">
        <Container>
          <SectionHeader
            eyebrow="Cards"
            title="Four card variants"
            lead="Default for utility, feature for marketing emphasis (40px padding), quote for testimonials, image-led for product/service grids."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Card variant="default">
              <Eyebrow>Default</Eyebrow>
              <h3 className="text-h3 text-ink mt-4">Regulatory affairs</h3>
              <p className="text-body text-muted mt-3">
                IVDR readiness, CE marking pathways, technical-file structuring.
              </p>
            </Card>
            <Card variant="feature">
              <Eyebrow>Feature</Eyebrow>
              <h3 className="text-h3 text-ink mt-4">Product development</h3>
              <p className="text-body text-muted mt-3">
                Concept-to-clinic biotech and pharmaceutical product engineering.
              </p>
            </Card>
            <Card variant="quote">
              <Eyebrow>Quote</Eyebrow>
              <p className="text-h4 text-ink mt-6">
                &ldquo;Early detection should not be a luxury determined by
                geography or income.&rdquo;
              </p>
              <p className="text-body-sm text-muted mt-6">
                John Muhammadi, M.D., MBA · Founder &amp; CEO
              </p>
            </Card>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Card
              variant="image-led"
              href="#"
              media={
                <div
                  className="flex h-full w-full items-center justify-center p-6 text-ink"
                  style={{
                    background:
                      "linear-gradient(120deg, #E8E9EF 0%, #FFFFFF 80%)",
                  }}
                >
                  <AssayDevLine className="h-full w-full" />
                </div>
              }
            >
              <Eyebrow>Image-led</Eyebrow>
              <h3 className="text-h3 mt-4 text-ink">CRISPR assay development</h3>
              <p className="text-body mt-3 text-muted">
                Design and optimisation of Cas-based detection assays.
              </p>
            </Card>
            <Card
              variant="image-led"
              href="#"
              media={
                <div
                  className="flex h-full w-full items-center justify-center p-6 text-ink"
                  style={{
                    background:
                      "linear-gradient(120deg, #F3DCEA 0%, #FFFFFF 80%)",
                  }}
                >
                  <ConsultingLine className="h-full w-full" />
                </div>
              }
            >
              <Eyebrow>Image-led</Eyebrow>
              <h3 className="text-h3 mt-4 text-ink">Diagnostics consulting</h3>
              <p className="text-body mt-3 text-muted">
                Strategic guidance on assay architecture and translation.
              </p>
            </Card>
            <Card
              variant="image-led"
              href="#"
              media={
                <div
                  className="flex h-full w-full items-center justify-center p-6 text-ink"
                  style={{
                    background:
                      "linear-gradient(120deg, #DDE8DD 0%, #FFFFFF 80%)",
                  }}
                >
                  <RegulatoryLine className="h-full w-full" />
                </div>
              }
            >
              <Eyebrow>Image-led</Eyebrow>
              <h3 className="text-h3 mt-4 text-ink">Regulatory strategy</h3>
              <p className="text-body mt-3 text-muted">
                IVDR-aligned planning for CE marking pathways.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* LINE ART LIBRARY */}
      <Section wash="blush" size="lg">
        <Container>
          <SectionHeader
            eyebrow="Line art"
            title="Hero asides + per-service motifs"
            lead="Three hero line-art compositions and five per-service line-art motifs for image-led cards. Monochrome currentColor, 1px strokes, sparse data labels."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <Block label="BiologyLine">
              <div className="aspect-[4/5] text-ink">
                <BiologyLine className="h-full w-full" />
              </div>
            </Block>
            <Block label="DataLine">
              <div className="aspect-[4/5] text-ink">
                <DataLine className="h-full w-full" />
              </div>
            </Block>
            <Block label="GeneralLine">
              <div className="aspect-[4/5] text-ink">
                <GeneralLine className="h-full w-full" />
              </div>
            </Block>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-5 sm:grid-cols-2">
            <Block label="AssayDevLine">
              <div className="aspect-[4/3] text-ink">
                <AssayDevLine className="h-full w-full" />
              </div>
            </Block>
            <Block label="ConsultingLine">
              <div className="aspect-[4/3] text-ink">
                <ConsultingLine className="h-full w-full" />
              </div>
            </Block>
            <Block label="ValidationLine">
              <div className="aspect-[4/3] text-ink">
                <ValidationLine className="h-full w-full" />
              </div>
            </Block>
            <Block label="RegulatoryLine">
              <div className="aspect-[4/3] text-ink">
                <RegulatoryLine className="h-full w-full" />
              </div>
            </Block>
            <Block label="ContractLine">
              <div className="aspect-[4/3] text-ink">
                <ContractLine className="h-full w-full" />
              </div>
            </Block>
          </div>
        </Container>
      </Section>

      {/* SECTION HEADERS */}
      <Section size="md">
        <Container>
          <SectionHeader
            eyebrow="Section header · left"
            title="What problem are we solving?"
            lead="Cervical cancer kills more than 350,000 women each year. Most cases are preventable — yet traditional screening pathways still take up to 20 days to return a result."
          />
          <div className="h-12" />
          <SectionHeader
            eyebrow="Section header · centred"
            title="How does RapidCan work?"
            lead="A CRISPR-Cas-based assay that detects high-risk HPV genotypes from a sample-to-answer device, designed for point-of-care and at-home use."
            align="center"
          />
        </Container>
      </Section>

      {/* HERO H1 + ASIDE */}
      <Section wash="sage" size="md">
        <Container>
          <SectionHeader
            eyebrow="Hero · plain · h1 size · with aside"
            title="Two-column hero composition"
            lead="A non-glass hero stacked next to a media aside. Used on internal sub-pages where a glass panel would over-announce."
          />
        </Container>
        <Hero
          size="h1"
          variant="plain"
          wash="none"
          eyebrow="Flagship product"
          headline="RapidCan"
          subhead="A CRISPR-based rapid diagnostic test for cervical cancer, currently under CE marking review."
          cta={
            <>
              <Button href="#" variant="primary" size="md">
                Preorder — 40% off
              </Button>
              <Button href="#" variant="secondary" size="md">
                Read the science
              </Button>
            </>
          }
          aside={
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-border">
              <Image
                src={PRODUCT_PHOTO}
                alt="Microscopy detail used as a placeholder for owned product imagery"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
          }
        />
      </Section>

      {/* STATS */}
      <Section size="lg">
        <Container>
          <SectionHeader
            eyebrow="Stat"
            title="Headline numbers"
            lead="Used for problem-statement and credibility blocks. Pair with cited sources in production."
          />
          <div className="mt-12 grid gap-12 md:grid-cols-3">
            <Stat
              value="660k"
              label="New cases per year"
              description="Global cervical cancer incidence — placeholder pending sourced citation."
            />
            <Stat
              value="350k"
              label="Deaths per year"
              description="Global mortality from cervical cancer — placeholder pending sourced citation."
            />
            <Stat
              value="20d"
              label="Traditional wait"
              description="Typical turnaround for conventional screening pathways."
            />
          </div>
        </Container>
      </Section>

      {/* PROSE */}
      <Section wash="sand" size="lg">
        <Container variant="narrow">
          <SectionHeader
            eyebrow="Prose"
            title="Long-form typographic defaults"
            lead="Wraps legal pages, articles, and any content authored as plain HTML or MDX. Headings use Fraunces; body uses Inter."
          />
          <Prose className="mt-12">
            <h2>About Cervixel</h2>
            <p>
              Cervixel is a Lithuanian biotechnology company headquartered in
              Vilnius. Our work focuses on{" "}
              <a href="#">CRISPR-based molecular diagnostics</a>, with a
              flagship product currently under CE marking review.
            </p>
            <h3>Mission</h3>
            <p>
              Democratising early cancer detection through accessible home
              diagnostics, aligned with the World Health Organization&rsquo;s
              2030 cervical cancer elimination goal.
            </p>
            <ul>
              <li>1st place at the Hospiton Cancer Hackathon</li>
              <li>Invited to Cambridge University</li>
              <li>Founding team drawn from Cambridge, Imperial, Karolinska</li>
            </ul>
            <blockquote>
              Early detection should not be a luxury determined by geography or
              income.
            </blockquote>
          </Prose>
        </Container>
      </Section>
    </>
  );
}
