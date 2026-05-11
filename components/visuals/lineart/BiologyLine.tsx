/* Biology-themed line art — abstract intersecting helical curves with sparse
   floating data labels. Stroke = currentColor (set --color-ink on parent).
   Used on the homepage hero. Spec §9.2 — monochrome, 1px strokes, no fills. */

export interface BiologyLineProps {
  className?: string;
  ariaLabel?: string;
}

export default function BiologyLine({
  className,
  ariaLabel = "Abstract line drawing of intersecting molecular curves with sparse data labels.",
}: BiologyLineProps) {
  return (
    <svg
      role="img"
      aria-label={ariaLabel}
      viewBox="0 0 480 600"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background framing arc */}
      <ellipse cx="240" cy="300" rx="210" ry="270" opacity="0.18" />

      {/* Primary helical curves — two sinusoidal strands twisting around each other */}
      <path d="M 80 60 C 360 140, 120 240, 400 320 C 120 400, 360 500, 80 580" />
      <path d="M 400 60 C 120 140, 360 240, 80 320 C 360 400, 120 500, 400 580" />

      {/* Cross-bars between strands — DNA rung suggestion */}
      <line x1="120" y1="100" x2="360" y2="100" opacity="0.45" />
      <line x1="180" y1="160" x2="300" y2="160" opacity="0.45" />
      <line x1="120" y1="220" x2="360" y2="220" opacity="0.45" />
      <line x1="180" y1="280" x2="300" y2="280" opacity="0.45" />
      <line x1="120" y1="340" x2="360" y2="340" opacity="0.45" />
      <line x1="180" y1="400" x2="300" y2="400" opacity="0.45" />
      <line x1="120" y1="460" x2="360" y2="460" opacity="0.45" />
      <line x1="180" y1="520" x2="300" y2="520" opacity="0.45" />

      {/* Floating data points along the curves */}
      <circle cx="120" cy="100" r="3" fill="currentColor" />
      <circle cx="360" cy="100" r="3" fill="currentColor" />
      <circle cx="180" cy="160" r="2" fill="currentColor" />
      <circle cx="300" cy="160" r="2" fill="currentColor" />
      <circle cx="120" cy="220" r="3" fill="currentColor" />
      <circle cx="360" cy="220" r="3" fill="currentColor" />
      <circle cx="180" cy="280" r="2" fill="currentColor" />
      <circle cx="300" cy="280" r="2" fill="currentColor" />
      <circle cx="120" cy="340" r="3" fill="currentColor" />
      <circle cx="360" cy="340" r="3" fill="currentColor" />
      <circle cx="180" cy="400" r="2" fill="currentColor" />
      <circle cx="300" cy="400" r="2" fill="currentColor" />
      <circle cx="120" cy="460" r="3" fill="currentColor" />
      <circle cx="360" cy="460" r="3" fill="currentColor" />

      {/* Sparse data labels — Inter caption look. Drawn as text directly. */}
      <g
        fontFamily="var(--font-sans)"
        fontSize="11"
        fontWeight="500"
        letterSpacing="0.1em"
        fill="currentColor"
        stroke="none"
      >
        <text x="46" y="105">D 57</text>
        <text x="384" y="105">N 23</text>
        <text x="40" y="225">J 52</text>
        <text x="392" y="225">T 27</text>
        <text x="48" y="345">M 41</text>
        <text x="384" y="345">A 18</text>
        <text x="40" y="465">P 33</text>
        <text x="392" y="465">R 12</text>
      </g>

      {/* Tangent line through the centre — gives the composition a plane */}
      <line x1="40" y1="300" x2="440" y2="300" opacity="0.35" />
    </svg>
  );
}
