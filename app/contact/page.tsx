import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ContactForm from "@/components/contact/ContactForm";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import JsonLd from "@/components/ui/JsonLd";
import Section from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo/metadata";
import {
  buildBreadcrumbSchema,
  buildContactPageSchema,
  buildOrganizationSchema,
} from "@/lib/seo/schema";

export const metadata = buildMetadata({
  title: "Contact Cervixel – Vilnius Biotech Office & Enquiries",
  description:
    "Reach Cervixel's Vilnius team for RapidCan preorder enquiries, biotech consulting services, partnerships, and press. Email, phone, and address inside.",
  path: "/contact",
  keywords: [
    "Cervixel contact",
    "RapidCan enquiry",
    "Vilnius biotech",
    "preorder cervical cancer test",
  ],
});

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact" },
];

const MAPS_QUERY = "Kastonu+g.+4,+Vilnius,+Lithuania";

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5 shrink-0 text-ink"
    >
      <path d="M10 18s6-5.5 6-10a6 6 0 1 0-12 0c0 4.5 6 10 6 10z" />
      <circle cx="10" cy="8" r="2" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5 shrink-0 text-ink"
    >
      <path d="M4 3h3l2 4-2 1c1 2 3 4 5 5l1-2 4 2v3a1 1 0 0 1-1 1A14 14 0 0 1 3 4a1 1 0 0 1 1-1z" />
    </svg>
  );
}

function EnvelopeIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5 shrink-0 text-ink"
    >
      <rect x="2" y="4" width="16" height="12" rx="2" />
      <path d="M2.5 5.5l7.5 6 7.5-6" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5 shrink-0 text-ink"
    >
      <circle cx="10" cy="10" r="7" />
      <path d="M10 6v4l2.5 2.5" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <>
      <JsonLd data={buildContactPageSchema()} />
      <JsonLd data={buildOrganizationSchema()} />
      <JsonLd data={buildBreadcrumbSchema(BREADCRUMBS)} />

      <Container className="pt-4 pb-0">
        <Breadcrumbs items={BREADCRUMBS} />
      </Container>

      {/* 1) HERO — utility size on blush wash, no glass panel */}
      <section
        className="pt-16 pb-14 md:pt-24 md:pb-20"
        style={{
          backgroundImage:
            "linear-gradient(120deg, #F3DCEA 0%, #FFFFFF 70%)",
        }}
      >
        <Container variant="narrow">
          <div className="flex flex-col gap-6">
            <Eyebrow>Contact</Eyebrow>
            <h1 className="text-h1 text-ink">
              Talk to the Cervixel team.
            </h1>
            <p className="text-body-lg max-w-2xl text-muted">
              We hear from clinicians, distributors, and institutional buyers
              about RapidCan; from biotech and pharmaceutical organisations
              about service engagements; and from partners, press, and
              researchers about everything else.
            </p>
          </div>
        </Container>
      </section>

      {/* 2) CONTACT METHODS + FORM */}
      <Section size="lg">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            {/* LEFT: contact details */}
            <div>
              <Eyebrow>Contact details</Eyebrow>
              <h2 className="text-h2 mt-6 text-ink">Where to find us.</h2>

              <dl className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <LocationIcon />
                  <div>
                    <dt className="text-eyebrow text-ink">Office address</dt>
                    <dd className="text-body mt-2 text-ink">
                      <address className="not-italic">
                        Cervixel UAB
                        <br />
                        Kastonu gatve 4
                        <br />
                        01107, Vilnius, Lithuania
                      </address>
                    </dd>
                  </div>
                </div>

                <div className="flex gap-4">
                  <PhoneIcon />
                  <div>
                    <dt className="text-eyebrow text-ink">Phone</dt>
                    <dd className="text-body mt-2">
                      <a
                        href="tel:+37066957208"
                        className="text-ink underline underline-offset-[3px] decoration-1 hover:decoration-2"
                      >
                        +370 669 57208
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex gap-4">
                  <EnvelopeIcon />
                  <div>
                    <dt className="text-eyebrow text-ink">Email</dt>
                    <dd className="text-body mt-2">
                      <a
                        href="mailto:info@cervixel.com"
                        className="text-ink underline underline-offset-[3px] decoration-1 hover:decoration-2"
                      >
                        info@cervixel.com
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex gap-4">
                  <ClockIcon />
                  <div>
                    <dt className="text-eyebrow text-ink">Business hours</dt>
                    <dd className="text-body mt-2 text-muted">
                      Monday–Friday, 09:00–18:00
                      <br />
                      Eastern European Time (EET, UTC+2 / EEST UTC+3)
                    </dd>
                  </div>
                </div>
              </dl>

              <div className="mt-10 overflow-hidden rounded-xl border border-border bg-surface">
                <iframe
                  title="Map showing Cervixel office at Kastonu gatve 4, Vilnius"
                  src={`https://maps.google.com/maps?q=${MAPS_QUERY}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-72 w-full border-0"
                />
              </div>
            </div>

            {/* RIGHT: header sits in the column wrapper to align with the left
                column's eyebrow + h2; the form-card below holds only the form. */}
            <div>
              <Eyebrow>Send a message</Eyebrow>
              <h2 className="text-h2 mt-6 text-ink">
                Tell us about your enquiry.
              </h2>
              <p className="text-body mt-4 text-muted">
                Required fields are marked with an asterisk. We typically
                respond within two business days.
              </p>

              <div className="mt-8 rounded-xl border border-border bg-surface p-6 sm:p-10">
                <ContactForm />
              </div>

              <p className="text-body-sm mt-6 text-muted">
                We use the information you submit only to respond to your
                enquiry. See our{" "}
                <Link
                  href="/privacy"
                  className="font-medium text-ink underline underline-offset-[3px] decoration-1 hover:decoration-2"
                >
                  privacy policy
                </Link>{" "}
                for details.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
