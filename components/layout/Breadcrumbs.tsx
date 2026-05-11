import Link from "next/link";

const SITE_URL =
  process.env["NEXT_PUBLIC_SITE_URL"] ?? "https://cervixel.com";

export type BreadcrumbItem = {
  label: string;
  href: string;
};

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${SITE_URL}${item.href}`,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="py-3">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-body-sm text-muted list-none">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            {index > 0 && (
              <span aria-hidden="true" className="text-gray-300">
                /
              </span>
            )}
            {index === items.length - 1 ? (
              <span aria-current="page" className="text-ink font-medium">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="hover:text-ink hover:underline underline-offset-4"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </nav>
  );
}
