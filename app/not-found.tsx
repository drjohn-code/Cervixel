import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Page Not Found – Cervixel CRISPR Diagnostic Resources",
  description:
    "The page you wanted is not available. Browse Cervixel's CervixScan product, biotech services, About, or Contact pages to find what you need.",
  path: "/404",
  noindex: true,
});

const SHORTCUTS = [
  {
    href: "/",
    label: "Cervixel home",
    description: "Mission, products, and services overview.",
  },
  {
    href: "/products/cervixscan",
    label: "CervixScan product",
    description: "Our CRISPR-based rapid cervical cancer test.",
  },
  {
    href: "/services",
    label: "Biotech services",
    description: "Five consulting service lines for biotech and pharma.",
  },
  {
    href: "/about",
    label: "About Cervixel",
    description: "Founders, team, and the WHO 2030 mission.",
  },
  {
    href: "/contact",
    label: "Contact us",
    description: "Vilnius office, phone, email, and enquiry form.",
  },
] as const;

export default function NotFound() {
  return (
    <article className="bg-bg">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">
          Error 404
        </p>
        <h1 className="mt-3 text-4xl font-bold leading-tight text-text sm:text-5xl">
          That page is not on this site
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          The link may be out of date, or the URL may have a typo. The pages
          below cover everything Cervixel currently publishes — pick the one
          closest to what you were looking for.
        </p>

        <ul className="mt-10 grid gap-3 list-none sm:grid-cols-2">
          {SHORTCUTS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block min-h-[48px] rounded-lg border border-border bg-surface p-5 transition-colors hover:border-primary hover:bg-bg"
              >
                <span className="block text-base font-semibold text-primary">
                  {item.label}
                </span>
                <span className="mt-1 block text-sm text-muted">
                  {item.description}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-sm text-muted">
          Still cannot find what you need? Email{" "}
          <a
            href="mailto:info@cervixel.com"
            className="font-medium text-primary underline underline-offset-4 hover:text-primary-dark"
          >
            info@cervixel.com
          </a>{" "}
          and we will route you to the right team.
        </p>
      </div>
    </article>
  );
}
