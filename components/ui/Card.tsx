import Link from "next/link";
import type { ElementType, HTMLAttributes, ReactNode } from "react";

/* Card variants — design-system.md §7.4.
   - default    : surface bg, hairline border, no shadow at rest
   - feature    : 40px padding, used for marketing emphasis
   - quote      : subtle ink-tinted surface, 1.5px ink left rule
   - image-led  : image fills top at 4:3, content (eyebrow/h3/cta) below */

export type CardVariant = "default" | "feature" | "quote" | "image-led";

export interface CardProps extends HTMLAttributes<HTMLElement> {
  variant?: CardVariant;
  href?: string;
  as?: ElementType;
  /** For image-led cards — rendered into the top 4:3 panel. */
  media?: ReactNode;
  children: ReactNode;
}

const BASE_CLASSES =
  "border border-border bg-surface transition-all duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)]";

const VARIANT_CLASSES: Record<CardVariant, string> = {
  default: "rounded-lg p-6",
  feature: "rounded-xl p-10",
  quote: "rounded-xl p-10 bg-[color:var(--color-gray-50)] border-l-[1.5px] border-l-ink",
  "image-led": "rounded-lg p-0 overflow-hidden",
};

const HOVER_CLASSES =
  "hover:-translate-y-0.5 hover:shadow-sm hover:border-border-strong block";

export default function Card({
  variant = "default",
  href,
  as,
  className,
  media,
  children,
  ...rest
}: CardProps) {
  const classes = [
    BASE_CLASSES,
    VARIANT_CLASSES[variant],
    href ? HOVER_CLASSES : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const inner =
    variant === "image-led" ? (
      <>
        {media ? (
          <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-border">
            {media}
          </div>
        ) : null}
        <div className="p-6">{children}</div>
      </>
    ) : (
      children
    );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    );
  }

  const Tag: ElementType = as ?? "div";
  return (
    <Tag className={classes} {...rest}>
      {inner}
    </Tag>
  );
}
