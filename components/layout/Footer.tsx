import Link from "next/link";

const SECONDARY_NAV = [
  { href: "/blog", label: "Blog" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/cookies", label: "Cookie Policy" },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand + NAP — byte-identical to CLAUDE §2 */}
          <div>
            <p className="text-base font-bold text-primary">Cervixel</p>
            <address className="mt-3 not-italic text-sm text-muted leading-loose">
              Kastonu gatve 4<br />
              01107, Vilnius, Lithuania<br />
              <a
                href="tel:+37066957208"
                className="hover:text-primary transition-colors"
              >
                +370 669 57208
              </a>
              <br />
              <a
                href="mailto:info@cervixel.com"
                className="hover:text-primary transition-colors"
              >
                info@cervixel.com
              </a>
            </address>
          </div>

          {/* Secondary navigation */}
          <nav aria-label="Footer navigation">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Company
            </p>
            <ul className="mt-3 space-y-2 list-none">
              {SECONDARY_NAV.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social placeholder */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Follow us
            </p>
            <p className="mt-3 text-sm text-muted">LinkedIn coming soon.</p>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between text-xs text-muted">
          <p>&copy; {year} Cervixel UAB. All rights reserved.</p>
          <p>Biotechnology &middot; Vilnius, Lithuania</p>
        </div>
      </div>
    </footer>
  );
}
