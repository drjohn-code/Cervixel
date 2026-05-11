import type { ReactNode } from "react";
import Eyebrow, { type EyebrowColor } from "./Eyebrow";

export type SectionHeaderAlign = "left" | "center";

export interface SectionHeaderProps {
  eyebrow?: ReactNode;
  /** Inert — kept for back-compat with prior call sites. */
  eyebrowColor?: EyebrowColor;
  title: ReactNode;
  lead?: ReactNode;
  align?: SectionHeaderAlign;
  className?: string;
}

const ALIGN_CLASSES: Record<SectionHeaderAlign, string> = {
  left: "text-left items-start",
  center: "text-center items-center mx-auto",
};

const LEAD_WIDTH: Record<SectionHeaderAlign, string> = {
  left: "max-w-2xl",
  center: "max-w-2xl mx-auto",
};

export default function SectionHeader({
  eyebrow,
  eyebrowColor,
  title,
  lead,
  align = "left",
  className,
}: SectionHeaderProps) {
  const wrapperClasses = [
    "flex flex-col gap-5 max-w-3xl",
    ALIGN_CLASSES[align],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrapperClasses}>
      {eyebrow ? <Eyebrow color={eyebrowColor}>{eyebrow}</Eyebrow> : null}
      <h2 className="text-h2 text-ink">{title}</h2>
      {lead ? (
        <p className={`text-body-lg text-muted ${LEAD_WIDTH[align]}`}>{lead}</p>
      ) : null}
    </div>
  );
}
