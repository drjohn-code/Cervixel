import type { ElementType, HTMLAttributes } from "react";

/* Container widths per design-system.md §4.3:
   - narrow  →   880px (form pages, narrow content)
   - default →  1120px (default marketing container)
   - wide    →  1280px (full-bleed hero with side gutter)
   Side gutter: clamp(1.5rem, 5vw, 4rem). */

export type ContainerVariant = "narrow" | "default" | "wide";

export interface ContainerProps extends HTMLAttributes<HTMLElement> {
  variant?: ContainerVariant;
  as?: ElementType;
}

const VARIANT_CLASSES: Record<ContainerVariant, string> = {
  narrow: "max-w-[880px]",
  default: "max-w-[1120px]",
  wide: "max-w-[1280px]",
};

const GUTTER_STYLE = {
  paddingLeft: "clamp(1.5rem, 5vw, 4rem)",
  paddingRight: "clamp(1.5rem, 5vw, 4rem)",
} as const;

export default function Container({
  variant = "default",
  as: Tag = "div",
  className,
  style,
  children,
  ...rest
}: ContainerProps) {
  const classes = ["mx-auto w-full", VARIANT_CLASSES[variant], className]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag
      className={classes}
      style={{ ...GUTTER_STYLE, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
