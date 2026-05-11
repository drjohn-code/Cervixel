import type { HTMLAttributes, ReactNode } from "react";

/* Frosted-glass panel — design-system.md §7.3.
   Visuals (backdrop-filter, radius, padding clamp, shadow, @supports
   fallback) all live in the .glass-panel class in app/globals.css. */

export interface GlassPanelProps extends HTMLAttributes<HTMLDivElement> {
  /** Constrain width per spec (max 560px). Override only for unusual layouts. */
  maxWidth?: string;
  children: ReactNode;
}

export default function GlassPanel({
  maxWidth = "560px",
  className,
  style,
  children,
  ...rest
}: GlassPanelProps) {
  const classes = ["glass-panel", className].filter(Boolean).join(" ");
  return (
    <div className={classes} style={{ maxWidth, ...style }} {...rest}>
      {children}
    </div>
  );
}
