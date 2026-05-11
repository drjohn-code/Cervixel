import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import MobileMenu from "./MobileMenu";

const NAV_LINKS = [
  { href: "/products/rapidcan", label: "RapidCan" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

/* 72px sticky header with the spec hover-underline pattern (animates 0→100%
   width over 200ms). Spec §7.5. */

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-bg/80 backdrop-blur-md">
      <div
        className="mx-auto flex h-[72px] w-full max-w-[1280px] items-center justify-between"
        style={{ paddingInline: "clamp(1.5rem, 5vw, 4rem)" }}
      >
        {/* TODO: replace with ink-navy logo variant once design is updated. Current logo is teal which clashes with the ink-navy palette. */}
        <Link
          href="/"
          className="flex items-center gap-3 font-display text-h4 leading-none text-ink"
          aria-label="Cervixel — Home"
        >
          <Image
            src="/logo.png"
            alt="Cervixel logo"
            width={28}
            height={28}
            priority
            className="h-7 w-auto"
          />
          <span>Cervixel</span>
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex md:items-center md:gap-2"
        >
          <ul className="flex items-center gap-6 list-none">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group relative text-body-sm font-medium text-ink"
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-0 h-px w-0 bg-ink transition-[width] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full"
                  />
                </Link>
              </li>
            ))}
          </ul>
          <div className="ml-6">
            <Button href="/products/rapidcan/preorder" variant="primary" size="sm">
              Preorder
            </Button>
          </div>
        </nav>

        <MobileMenu links={NAV_LINKS} />
      </div>
    </header>
  );
}
