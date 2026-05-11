import type { ReactNode } from "react";

export interface StatProps {
  value: ReactNode;
  label: ReactNode;
  description?: ReactNode;
  className?: string;
}

export default function Stat({
  value,
  label,
  description,
  className,
}: StatProps) {
  const classes = ["flex flex-col gap-3", className].filter(Boolean).join(" ");

  return (
    <div className={classes}>
      <span className="text-display-lg text-ink leading-none">{value}</span>
      <span className="text-eyebrow text-ink inline-block pb-2 border-b border-ink self-start">
        {label}
      </span>
      {description ? (
        <p className="text-body-sm text-muted max-w-xs">{description}</p>
      ) : null}
    </div>
  );
}
