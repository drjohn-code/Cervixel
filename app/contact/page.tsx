import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import JsonLd from "@/components/ui/JsonLd";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import {
  buildBreadcrumbSchema,
  buildContactPageSchema,
  buildOrganizationSchema,
} from "@/lib/seo/schema";

export const metadata = buildMetadata({
  title: "Contact Cervixel – Vilnius Biotech Office & Enquiries",
  description:
    "Reach Cervixel's Vilnius team for CervixScan preorder enquiries, biotech consulting services, partnerships, and press. Email, phone, and address inside.",
  path: "/contact",
  keywords: [
    "Cervixel contact",
    "CervixScan enquiry",
    "Vilnius biotech",
    "preorder cervical cancer test",
  ],
});

const SUBJECTS = [
  "Product preorder enquiry",
  "Service enquiry",
  "Partnership",
  "Press & media",
  "Other",
] as const;

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact" },
];

const MAPS_QUERY = "Kastonu+g.+4,+Vilnius,+Lithuania";

export default function ContactPage() {
  return (
    <>
      <JsonLd data={buildContactPageSchema()} />
      <JsonLd data={buildOrganizationSchema()} />
      <JsonLd data={buildBreadcrumbSchema(BREADCRUMBS)} />

      <article className="bg-bg">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={BREADCRUMBS} />

          <header className="pt-6 pb-10 sm:pt-10 sm:pb-12">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">
              Contact
            </p>
            <h1 className="mt-3 text-3xl font-bold leading-tight text-text sm:text-4xl lg:text-5xl">
              Contact Cervixel
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-text">
              Reach the Cervixel team in Vilnius for CervixScan preorder
              enquiries, biotech consulting engagements, partnerships, or
              press. Use the contact details below for time-sensitive matters,
              or send a message through the form and we will respond from{" "}
              <a
                href="mailto:info@cervixel.com"
                className="font-medium text-primary underline underline-offset-4 hover:text-primary-dark"
              >
                info@cervixel.com
              </a>
              {" "}during EET business hours.
            </p>
          </header>

          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14 pb-14">
            {/* Contact details + map */}
            <section aria-labelledby="details-heading">
              <h2
                id="details-heading"
                className="text-xl font-semibold text-text"
              >
                Where to find us
              </h2>

              <dl className="mt-5 space-y-5 text-sm">
                <div>
                  <dt className="font-semibold text-text">Office address</dt>
                  <dd className="mt-1 not-italic text-muted leading-relaxed">
                    <address className="not-italic">
                      Cervixel UAB
                      <br />
                      Kastonu gatve 4
                      <br />
                      01107, Vilnius, Lithuania
                    </address>
                  </dd>
                </div>

                <div>
                  <dt className="font-semibold text-text">Phone</dt>
                  <dd className="mt-1">
                    <a
                      href="tel:+37066957208"
                      className="text-primary underline underline-offset-4 hover:text-primary-dark"
                    >
                      +370 669 57208
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="font-semibold text-text">Email</dt>
                  <dd className="mt-1">
                    <a
                      href="mailto:info@cervixel.com"
                      className="text-primary underline underline-offset-4 hover:text-primary-dark"
                    >
                      info@cervixel.com
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="font-semibold text-text">Business hours</dt>
                  <dd className="mt-1 text-muted leading-relaxed">
                    Monday–Friday, 09:00–18:00
                    <br />
                    Eastern European Time (EET, UTC+2 / EEST UTC+3)
                  </dd>
                </div>
              </dl>

              <div className="mt-8 overflow-hidden rounded-lg border border-border bg-surface">
                {/* Lazy iframe — does not block LCP. No API key required for the basic embed URL. */}
                <iframe
                  title="Map showing Cervixel office at Kastonu gatve 4, Vilnius"
                  src={`https://maps.google.com/maps?q=${MAPS_QUERY}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-72 w-full border-0"
                />
              </div>

              <p className="mt-4 text-xs text-muted leading-relaxed">
                For Cervixel&rsquo;s service portfolio, see our{" "}
                <Link
                  href="/services"
                  className="font-medium text-primary underline underline-offset-4 hover:text-primary-dark"
                >
                  biotech consulting services
                </Link>
                . For the diagnostic, visit the{" "}
                <Link
                  href="/products/cervixscan"
                  className="font-medium text-primary underline underline-offset-4 hover:text-primary-dark"
                >
                  CervixScan product page
                </Link>
                .
              </p>
            </section>

            {/* Form (UI-only) */}
            <section aria-labelledby="form-heading">
              <h2
                id="form-heading"
                className="text-xl font-semibold text-text"
              >
                Send us a message
              </h2>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                We typically respond within two business days. Required fields
                are marked with an asterisk.
              </p>

              <form
                aria-describedby="form-status"
                className="mt-6 space-y-5"
                noValidate
              >
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-text"
                  >
                    Name <span aria-hidden="true">*</span>
                    <span className="sr-only"> (required)</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    aria-required="true"
                    disabled
                    className="mt-1 block w-full min-h-[48px] rounded border border-border bg-surface px-3 py-2 text-base text-text placeholder:text-muted disabled:cursor-not-allowed disabled:opacity-70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="Dr. Aušra Petraitė"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-company"
                    className="block text-sm font-medium text-text"
                  >
                    Company <span className="text-muted">(optional)</span>
                  </label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    disabled
                    className="mt-1 block w-full min-h-[48px] rounded border border-border bg-surface px-3 py-2 text-base text-text placeholder:text-muted disabled:cursor-not-allowed disabled:opacity-70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="Karolinska Institute"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-text"
                  >
                    Email <span aria-hidden="true">*</span>
                    <span className="sr-only"> (required)</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    aria-required="true"
                    disabled
                    className="mt-1 block w-full min-h-[48px] rounded border border-border bg-surface px-3 py-2 text-base text-text placeholder:text-muted disabled:cursor-not-allowed disabled:opacity-70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-sm font-medium text-text"
                  >
                    Subject <span aria-hidden="true">*</span>
                    <span className="sr-only"> (required)</span>
                  </label>
                  <select
                    id="contact-subject"
                    name="subject"
                    required
                    aria-required="true"
                    defaultValue=""
                    disabled
                    className="mt-1 block w-full min-h-[48px] rounded border border-border bg-surface px-3 py-2 text-base text-text disabled:cursor-not-allowed disabled:opacity-70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  >
                    <option value="" disabled>
                      Select a subject
                    </option>
                    {SUBJECTS.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-text"
                  >
                    Message <span aria-hidden="true">*</span>
                    <span className="sr-only"> (required)</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={6}
                    required
                    aria-required="true"
                    disabled
                    className="mt-1 block w-full rounded border border-border bg-surface px-3 py-2 text-base text-text placeholder:text-muted disabled:cursor-not-allowed disabled:opacity-70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="Tell us about your enquiry, organisation, and timing."
                  />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    disabled
                    aria-disabled="true"
                    className="inline-flex min-h-[48px] items-center justify-center rounded bg-primary px-6 py-3 text-sm font-semibold text-white opacity-60 cursor-not-allowed"
                  >
                    Send message
                  </button>
                  <p
                    id="form-status"
                    role="status"
                    className="text-xs text-muted"
                  >
                    Form submission coming soon. In the meantime please email{" "}
                    <a
                      href="mailto:info@cervixel.com"
                      className="font-medium text-primary underline underline-offset-4 hover:text-primary-dark"
                    >
                      info@cervixel.com
                    </a>
                    .
                  </p>
                </div>
              </form>
            </section>
          </div>
        </div>
      </article>
    </>
  );
}
