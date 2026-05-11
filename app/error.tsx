// 'use client' is required by Next.js — global error boundaries must be Client Components.
"use client";

import { useEffect } from "react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      console.error("Cervixel app error:", error);
    }
  }, [error]);

  return (
    <article className="bg-bg">
      <Container variant="narrow" className="py-20 sm:py-28">
        <Eyebrow>Unexpected error</Eyebrow>
        <h1 className="mt-6 text-h1 text-ink">
          Something went wrong on our side
        </h1>
        <p className="mt-6 text-body-lg text-muted">
          The page could not be rendered. This has been recorded — try again,
          or head back to the homepage. If the problem keeps happening, email{" "}
          <a
            href="mailto:info@cervixel.com"
            className="font-medium text-ink underline underline-offset-[3px] decoration-1 hover:decoration-2"
          >
            info@cervixel.com
          </a>
          .
        </p>

        {error.digest && (
          <p className="mt-4 text-body-sm text-muted">
            Reference code: <code className="font-mono">{error.digest}</code>
          </p>
        )}

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button onClick={reset} variant="primary" size="lg">
            Try again
          </Button>
          <Button href="/" variant="secondary" size="lg">
            Return to Cervixel home
          </Button>
        </div>
      </Container>
    </article>
  );
}
