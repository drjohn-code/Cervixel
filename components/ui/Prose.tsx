import type { ElementType, HTMLAttributes, ReactNode } from "react";

export interface ProseProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  children: ReactNode;
}

export default function Prose({
  as: Tag = "div",
  className,
  children,
  ...rest
}: ProseProps) {
  const classes = ["prose-cervixel", className].filter(Boolean).join(" ");
  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
}
