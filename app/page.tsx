import { buildMetadata } from "@/lib/seo/metadata";
import JsonLd from "@/components/ui/JsonLd";
import { buildOrganizationSchema, buildWebSiteSchema } from "@/lib/seo/schema";

export const metadata = buildMetadata({
  title: "Cervixel – CRISPR Diagnostics for Cervical Cancer Screening",
  description:
    "Cervixel develops CRISPR-based rapid diagnostic tests for cervical cancer. Preorder CervixScan and support the WHO 2030 elimination goal.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={buildOrganizationSchema()} />
      <JsonLd data={buildWebSiteSchema()} />
      <div className="flex min-h-96 items-center justify-center px-4">
        <p className="text-muted text-sm">
          Full homepage coming soon — Phase 4.
        </p>
      </div>
    </>
  );
}
