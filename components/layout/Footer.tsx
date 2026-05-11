import Image from "next/image";
import Link from "next/link";

const SECONDARY_NAV = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/cookies", label: "Cookie Policy" },
] as const;

const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com/company/cervixel/",
    label: "LinkedIn",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.43v6.31zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/cervixel/",
    label: "Instagram",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
      </svg>
    ),
  },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-app">
      <div
        className="mx-auto w-full max-w-[1280px] py-16"
        style={{ paddingInline: "clamp(1.5rem, 5vw, 4rem)" }}
      >
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand + NAP — byte-identical to CLAUDE §2 */}
          <div>
            {/* TODO: replace with ink-navy logo variant once design is updated. Current logo is teal which clashes with the ink-navy palette. */}
            <FooterBrand />
            <address className="mt-4 not-italic text-body-sm text-muted leading-loose">
              Kastonu gatve 4
              <br />
              01107, Vilnius, Lithuania
              <br />
              <a
                href="tel:+37066957208"
                className="hover:text-ink"
              >
                +370 669 57208
              </a>
              <br />
              <a
                href="mailto:info@cervixel.com"
                className="hover:text-ink"
              >
                info@cervixel.com
              </a>
            </address>
          </div>

          {/* Secondary navigation */}
          <nav aria-label="Footer navigation">
            <p className="text-eyebrow text-ink inline-block pb-2 border-b border-ink">
              Company
            </p>
            <ul className="mt-4 space-y-2 list-none">
              {SECONDARY_NAV.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-ink hover:underline underline-offset-4"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div>
            <p className="text-eyebrow text-ink inline-block pb-2 border-b border-ink">
              Follow us
            </p>
            <ul className="mt-4 space-y-2 list-none">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-body-sm text-ink hover:underline underline-offset-4"
                  >
                    <span aria-hidden="true">{social.icon}</span>
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between text-caption text-muted">
          <p>&copy; 2024&ndash;2026 Cervixel UAB. All rights reserved.</p>
          <p>Biotechnology &middot; Vilnius, Lithuania</p>
        </div>
      </div>
    </footer>
  );
}

/* Wordmark with the Cervixel logo at 32px height + 12px gap (gap-3) to the
   left of the wordmark. Logo file lives at /public/logo.png. */
function FooterBrand() {
  return (
    <p className="flex items-center gap-3 text-h4 leading-none text-ink">
      <Image
        src="/logo.png"
        alt="Cervixel logo"
        width={32}
        height={32}
        className="h-8 w-auto"
      />
      <span className="font-display">Cervixel</span>
    </p>
  );
}
