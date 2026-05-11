import type { CSSProperties, ReactNode } from "react";
import Container from "./Container";
import Eyebrow, { type EyebrowColor } from "./Eyebrow";
import GlassPanel from "./GlassPanel";

/* Hero composition. Two display modes:
   - variant="glass" — content wraps inside a GlassPanel. Used for the big
     marketing heroes (homepage, about, services hub) on a mood wash with a
     line-art SVG aside. Spec §7.3.
   - variant="plain" — bare layout (no glass). Used for utility heroes
     (contact, individual service pages). */

export type HeroSize = "display" | "h1";
export type HeroVariant = "glass" | "plain";
export type HeroWash = "none" | "mist" | "blush" | "sand" | "sage";

export interface HeroProps {
  eyebrow?: ReactNode;
  /** Inert — kept for back-compat with prior teal/amber/neutral call sites. */
  eyebrowColor?: EyebrowColor;
  headline: ReactNode;
  subhead?: ReactNode;
  cta?: ReactNode;
  aside?: ReactNode;
  size?: HeroSize;
  variant?: HeroVariant;
  wash?: HeroWash;
  /** Override default glass panel max-width (560px). Only honoured when variant="glass". */
  glassMaxWidth?: string;
  className?: string;
}

const WASH_HEX: Record<Exclude<HeroWash, "none">, string> = {
  mist: "#E8E9EF",
  blush: "#F3DCEA",
  sand: "#EFE8DC",
  sage: "#DDE8DD",
};

const HEADLINE_CLASS: Record<HeroSize, string> = {
  display: "text-display-lg md:text-display-xl text-ink",
  h1: "text-h1 text-ink",
};

export default function Hero({
  eyebrow,
  eyebrowColor,
  headline,
  subhead,
  cta,
  aside,
  size = "display",
  variant = "plain",
  wash = "none",
  glassMaxWidth,
  className,
}: HeroProps) {
  const washStyle: CSSProperties =
    wash !== "none"
      ? {
          backgroundImage: `linear-gradient(120deg, ${WASH_HEX[wash]} 0%, #FFFFFF 70%)`,
        }
      : {};

  const sectionClasses = [
    /* Tighter vertical padding than the original spec — calibrated so a glass-
       panel hero (eyebrow + headline + subhead + stacked CTAs + line-art
       aside) fits a 1440×900 viewport without scroll. */
    "relative w-full overflow-hidden pt-12 pb-16 md:pt-16 md:pb-20",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const headlineClass = HEADLINE_CLASS[size];

  /* Horizontal in all heroes. The earlier stacked variant existed to equalise
     widths when secondary buttons carried a chip; with chip removed, primary
     and secondary widths are close enough that flex-wrap reads cleanly and
     saves ~70px of vertical space in the glass-panel hero. */
  const ctaWrapperClass = "mt-2 flex flex-wrap items-center gap-3";

  const InnerContent = (
    <div className="flex flex-col gap-6">
      {eyebrow ? <Eyebrow color={eyebrowColor}>{eyebrow}</Eyebrow> : null}
      <h1 className={headlineClass}>{headline}</h1>
      {subhead ? (
        <p className="text-body-lg text-muted max-w-xl">{subhead}</p>
      ) : null}
      {cta ? <div className={ctaWrapperClass}>{cta}</div> : null}
    </div>
  );

  return (
    <section className={sectionClasses} style={washStyle}>
      <Container>
        <div
          className={
            aside
              ? "grid items-center gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-12"
              : "max-w-3xl"
          }
        >
          {variant === "glass" ? (
            <GlassPanel maxWidth={glassMaxWidth ?? "560px"}>
              {InnerContent}
            </GlassPanel>
          ) : (
            InnerContent
          )}
          {aside ? <div className="w-full text-ink">{aside}</div> : null}
        </div>
      </Container>
    </section>
  );
}
