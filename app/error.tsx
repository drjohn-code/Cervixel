// 'use client' is required by Next.js — global error boundaries must be Client Components.
"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface unexpected errors during development; production logging will hook into
    // the monitoring stack added in Phase 6.5 (Sentry / Vercel logs).
    if (process.env.NODE_ENV !== "production") {
      console.error("Cervixel app error:", error);
    }
  }, [error]);

  return (
    <article className="bg-bg">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-danger">
          Unexpected error
        </p>
        <h1 className="mt-3 text-3xl font-bold leading-tight text-text sm:text-4xl">
          Something went wrong on our side
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          The page could not be rendered. This has been recorded — try again,
          or head back to the homepage. If the problem keeps happening, email{" "}
          <a
            href="mailto:info@cervixel.com"
            className="font-medium text-primary underline underline-offset-4 hover:text-primary-dark"
          >
            info@cervixel.com
          </a>
          .
        </p>

        {error.digest && (
          <p className="mt-4 text-xs text-muted">
            Reference code: <code className="font-mono">{error.digest}</code>
          </p>
        )}

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="inline-flex min-h-[48px] items-center justify-center rounded bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex min-h-[48px] items-center justify-center rounded border border-border bg-bg px-6 py-3 text-sm font-semibold text-text transition-colors hover:border-primary hover:text-primary"
          >
            Return to Cervixel home
          </Link>
        </div>
      </div>
    </article>
  );
}
