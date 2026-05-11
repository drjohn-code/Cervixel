import type { CSSProperties, HTMLAttributes } from "react";

/* Section wrapper. Two ways to colour the background:

   1. `wash` (preferred) — applies a soft mood-wash gradient per design-
      system.md §2.2: linear-gradient(120deg, [wash] 0%, #FFFFFF 70%).
      Values: "mist" | "blush" | "sand" | "sage" | "none".

   2. `tone` (legacy, kept for back-compat) — flat-colour fills:
      "default" → bg, "muted" → gray-100, "tinted" → wash-mist (no saturated
      teal anywhere — see spec §11.4 #1).

   When both are provided, `wash` wins. */

export type SectionTone = "default" | "muted" | "tinted";
export type SectionWash = "none" | "mist" | "blush" | "sand" | "sage";
export type SectionSize = "sm" | "md" | "lg";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  tone?: SectionTone;
  wash?: SectionWash;
  size?: SectionSize;
}

const TONE_CLASSES: Record<SectionTone, string> = {
  default: "bg-bg",
  muted: "bg-gray-100",
  tinted: "bg-[color:var(--color-wash-mist)]/40",
};

const WASH_HEX: Record<Exclude<SectionWash, "none">, string> = {
  mist: "#E8E9EF",
  blush: "#F3DCEA",
  sand: "#EFE8DC",
  sage: "#DDE8DD",
};

const SIZE_CLASSES: Record<SectionSize, string> = {
  sm: "py-12 md:py-16",
  md: "py-16 md:py-24",
  lg: "py-20 md:py-32",
};

export default function Section({
  tone = "default",
  wash = "none",
  size = "md",
  className,
  style,
  children,
  ...rest
}: SectionProps) {
  const useWash = wash !== "none";
  const washStyle: CSSProperties = useWash
    ? {
        backgroundImage: `linear-gradient(120deg, ${WASH_HEX[wash]} 0%, #FFFFFF 70%)`,
      }
    : {};

  const classes = [
    useWash ? "" : TONE_CLASSES[tone],
    SIZE_CLASSES[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section
      className={classes}
      style={{ ...washStyle, ...style }}
      {...rest}
    >
      {children}
    </section>
  );
}
