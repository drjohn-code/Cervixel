import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
  Ref,
} from "react";

/* Pill-shaped CTA with a circular arrow chip on the trailing edge.
   Spec: design-system.md §7.1 + §6.2. The chip is omitted on the `ghost`
   and `link` variants. The `link` variant is kept for back-compat — it
   renders as inline underlined text, not a pill. */

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "destructive"
  | "link";
export type ButtonSize = "sm" | "md" | "lg" | "xl";

interface CommonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
}

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
    ref?: Ref<HTMLButtonElement>;
  };

type ButtonAsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps | "href"> & {
    href: string;
    ref?: Ref<HTMLAnchorElement>;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const PILL_BASE =
  "group relative inline-flex items-center justify-center rounded-pill font-medium transition-colors duration-[160ms] ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 disabled:border-transparent";

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: "bg-ink text-white hover:bg-ink-700 active:bg-[#0A1923]",
  secondary:
    "bg-transparent text-ink border-[1.5px] border-ink hover:bg-[rgba(14,34,51,0.06)] active:bg-[rgba(14,34,51,0.10)]",
  ghost: "bg-transparent text-ink hover:bg-[rgba(14,34,51,0.06)]",
  destructive: "bg-error text-white hover:opacity-90 active:opacity-100",
  link: "text-ink underline underline-offset-[3px] decoration-1 hover:decoration-2 transition-[text-decoration-thickness]",
};

interface SizeSpec {
  height: string;
  px: string;
  text: string;
  chip: string;
  chipIcon: number;
}

const SIZE_SPECS: Record<ButtonSize, SizeSpec> = {
  sm: { height: "h-9", px: "pl-4 pr-1.5", text: "text-body-sm", chip: "size-6", chipIcon: 12 },
  md: { height: "h-12", px: "pl-6 pr-2", text: "text-body", chip: "size-8", chipIcon: 16 },
  lg: { height: "h-14", px: "pl-7 pr-2", text: "text-body", chip: "size-9", chipIcon: 18 },
  xl: { height: "h-16", px: "pl-8 pr-2.5", text: "text-body-lg", chip: "size-10", chipIcon: 20 },
};

const SIZE_NO_CHIP_PX: Record<ButtonSize, string> = {
  sm: "px-4",
  md: "px-6",
  lg: "px-7",
  xl: "px-8",
};

/* Per-user override of design-system.md §7.1: secondary no longer renders a
   trailing chip. Spec change intentional — see commit log. */
const CHIP_VARIANT_CLASSES: Record<"primary" | "destructive", string> = {
  primary: "bg-white text-ink",
  destructive: "bg-white text-error",
};

function ChevronRight({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="9 6 15 12 9 18" />
    </svg>
  );
}

interface RenderArgs {
  variant: ButtonVariant;
  size: ButtonSize;
  children: ReactNode;
  className: string | undefined;
}

function buildPillClasses({ variant, size, className }: RenderArgs): string {
  const spec = SIZE_SPECS[size];
  const hasChip = variant === "primary" || variant === "destructive";
  const padding = hasChip ? spec.px : SIZE_NO_CHIP_PX[size];
  return [
    PILL_BASE,
    spec.height,
    spec.text,
    padding,
    "gap-2",
    VARIANT_CLASSES[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

function ChipIfNeeded({
  variant,
  size,
}: {
  variant: ButtonVariant;
  size: ButtonSize;
}) {
  if (variant !== "primary" && variant !== "destructive") return null;
  const spec = SIZE_SPECS[size];
  const chipClasses = [
    "inline-flex shrink-0 items-center justify-center rounded-full transition-transform duration-[160ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[2px] group-disabled:group-hover:translate-x-0",
    spec.chip,
    CHIP_VARIANT_CLASSES[variant],
  ].join(" ");
  return (
    <span aria-hidden="true" className={chipClasses}>
      <ChevronRight size={spec.chipIcon} />
    </span>
  );
}

function PillContent({
  variant,
  size,
  children,
}: {
  variant: ButtonVariant;
  size: ButtonSize;
  children: ReactNode;
}) {
  if (variant === "link") {
    return <>{children}</>;
  }
  return (
    <>
      <span>{children}</span>
      <ChipIfNeeded variant={variant} size={size} />
    </>
  );
}

export default function Button(props: ButtonProps) {
  if ("href" in props && props.href !== undefined) {
    const {
      href,
      ref,
      variant = "primary",
      size = "md",
      className,
      children,
      ...rest
    } = props;
    if (variant === "link") {
      return (
        <Link
          href={href}
          ref={ref}
          className={[VARIANT_CLASSES.link, className].filter(Boolean).join(" ")}
          {...rest}
        >
          {children}
        </Link>
      );
    }
    return (
      <Link
        href={href}
        ref={ref}
        className={buildPillClasses({ variant, size, className, children })}
        {...rest}
      >
        <PillContent variant={variant} size={size}>
          {children}
        </PillContent>
      </Link>
    );
  }

  const {
    ref,
    variant = "primary",
    size = "md",
    className,
    children,
    ...rest
  } = props;

  if (variant === "link") {
    return (
      <button
        ref={ref}
        className={[VARIANT_CLASSES.link, className].filter(Boolean).join(" ")}
        {...rest}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      ref={ref}
      className={buildPillClasses({ variant, size, className, children })}
      {...rest}
    >
      <PillContent variant={variant} size={size}>
        {children}
      </PillContent>
    </button>
  );
}
