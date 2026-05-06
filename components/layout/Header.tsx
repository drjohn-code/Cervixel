import Link from "next/link";
import MobileMenu from "./MobileMenu";

const NAV_LINKS = [
  { href: "/products/cervixscan", label: "CervixScan" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
] as const;

export default function Header() {
  return (
    <header className="relative z-30 border-b border-border bg-bg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-xl font-bold text-primary"
          aria-label="Cervixel — Home"
        >
          Cervixel
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Primary navigation" className="hidden md:flex md:items-center md:gap-6">
          <ul className="flex items-center gap-6 list-none">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-text hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/products/cervixscan"
            className="ml-4 inline-flex min-h-[48px] items-center rounded bg-accent px-5 py-2 text-sm font-semibold text-white hover:bg-accent-dark transition-colors"
          >
            Preorder Now
          </Link>
        </nav>

        <MobileMenu links={NAV_LINKS} />
      </div>
    </header>
  );
}
