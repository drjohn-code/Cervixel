/* Data / abstract line art — concentric circles + tangent arcs + sparse
   data labels. Used on the services hub hero. Spec §9.2. */

export interface DataLineProps {
  className?: string;
  ariaLabel?: string;
}

export default function DataLine({
  className,
  ariaLabel = "Abstract line drawing of intersecting circles and arcs with sparse data labels.",
}: DataLineProps) {
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
      {/* Concentric circles — slightly off-centre */}
      <circle cx="240" cy="280" r="200" opacity="0.55" />
      <circle cx="240" cy="280" r="150" opacity="0.65" />
      <circle cx="240" cy="280" r="100" opacity="0.85" />
      <circle cx="240" cy="280" r="50" />

      {/* Secondary smaller circle to the lower-right — overlap creates intersection */}
      <circle cx="340" cy="420" r="120" opacity="0.45" />
      <circle cx="340" cy="420" r="70" opacity="0.55" />

      {/* Tangent / chord lines */}
      <line x1="40" y1="280" x2="440" y2="280" opacity="0.30" />
      <line x1="240" y1="80" x2="240" y2="540" opacity="0.30" />
      <line x1="80" y1="120" x2="400" y2="440" opacity="0.25" />

      {/* Plot points on the rings */}
      <circle cx="240" cy="80" r="3" fill="currentColor" />
      <circle cx="440" cy="280" r="3" fill="currentColor" />
      <circle cx="240" cy="480" r="3" fill="currentColor" />
      <circle cx="40" cy="280" r="3" fill="currentColor" />
      <circle cx="380" cy="180" r="2" fill="currentColor" />
      <circle cx="100" cy="180" r="2" fill="currentColor" />
      <circle cx="380" cy="380" r="2" fill="currentColor" />
      <circle cx="100" cy="380" r="2" fill="currentColor" />

      {/* Inner hub */}
      <circle cx="240" cy="280" r="4" fill="currentColor" />

      {/* Sparse data labels */}
      <g
        fontFamily="var(--font-sans)"
        fontSize="11"
        fontWeight="500"
        letterSpacing="0.1em"
        fill="currentColor"
        stroke="none"
      >
        <text x="232" y="68">D 57</text>
        <text x="452" y="284">N 23</text>
        <text x="232" y="500">J 52</text>
        <text x="14" y="284">T 27</text>
        <text x="392" y="170">M 41</text>
        <text x="74" y="170">A 18</text>
        <text x="392" y="394">P 33</text>
      </g>
    </svg>
  );
}
