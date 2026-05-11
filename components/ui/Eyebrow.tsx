import type { ElementType, HTMLAttributes, ReactNode } from "react";

/* Eyebrow signature treatment — design-system.md §3.3.
   All-caps + a 1px ink underline rule that spans only the text width
   (display:inline-block is the trick — border-bottom inherits the inline
   width, not the parent column). The `text-eyebrow` utility owns the type;
   the underline rule is owned here.

   The `color` prop is intentionally inert. Spec §11.4 #1 locks the brand to
   ink — no saturated accents. Earlier teal/amber/neutral consumers keep
   compiling; all three render identically. Do not wire it up. */

export type EyebrowColor = "teal" | "amber" | "neutral";

export interface EyebrowProps extends HTMLAttributes<HTMLElement> {
  color?: EyebrowColor;
  as?: ElementType;
  children: ReactNode;
}

export default function Eyebrow({
  color: _color = "neutral",
  as: Tag = "span",
  className,
  children,
  ...rest
}: EyebrowProps) {
  void _color; // see note at top
  const classes = [
    "text-eyebrow text-ink inline-block pb-2 border-b border-ink",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
}
