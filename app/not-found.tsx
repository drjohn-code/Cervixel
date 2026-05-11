import Link from "next/link";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Page Not Found – Cervixel CRISPR Diagnostic Resources",
  description:
    "The page you wanted is not available. Browse Cervixel's RapidCan product, biotech services, About, or Contact pages to find what you need.",
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
    href: "/products/rapidcan",
    label: "RapidCan product",
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
      <Container variant="narrow" className="py-20 sm:py-28">
        <Eyebrow>Error 404</Eyebrow>
        <h1 className="mt-6 text-display-lg text-ink">
          That page is not on this site
        </h1>
        <p className="mt-6 max-w-2xl text-body-lg text-muted">
          The link may be out of date, or the URL may have a typo. The pages
          below cover everything Cervixel currently publishes — pick the one
          closest to what you were looking for.
        </p>

        <ul className="mt-12 grid gap-3 list-none sm:grid-cols-2">
          {SHORTCUTS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block min-h-[48px] rounded-lg border border-border bg-surface p-5 transition-colors duration-[160ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-border-strong hover:shadow-sm"
              >
                <span className="block text-body font-semibold text-ink">
                  {item.label}
                </span>
                <span className="mt-1 block text-body-sm text-muted">
                  {item.description}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-12 text-body-sm text-muted">
          Still cannot find what you need? Email{" "}
          <a
            href="mailto:info@cervixel.com"
            className="font-medium text-ink underline underline-offset-[3px] decoration-1 hover:decoration-2"
          >
            info@cervixel.com
          </a>{" "}
          and we will route you to the right team.
        </p>
      </Container>
    </article>
  );
}
