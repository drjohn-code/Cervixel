/* General scientific abstract line art — ellipse + sinusoidal wave + scattered
   plot points and labels. Used on the about hero. Spec §9.2. */

export interface GeneralLineProps {
  className?: string;
  ariaLabel?: string;
}

export default function GeneralLine({
  className,
  ariaLabel = "Abstract line drawing of an orbital ellipse and waveform with scattered data points.",
}: GeneralLineProps) {
  return (
    <svg
      role="img"
      aria-label={ariaLabel}
      viewBox="0 60 480 500"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Tilted ellipse — orbital aesthetic */}
      <g transform="rotate(-18 240 300)">
        <ellipse cx="240" cy="300" rx="220" ry="120" opacity="0.7" />
        <ellipse cx="240" cy="300" rx="160" ry="80" opacity="0.45" />
      </g>

      {/* Sinusoidal waveform sliding through the centre */}
      <path d="M 30 320 Q 90 240, 150 320 T 270 320 T 390 320 T 470 320" opacity="0.85" />
      <path d="M 30 360 Q 90 280, 150 360 T 270 360 T 390 360 T 470 360" opacity="0.4" />

      {/* Crossing diagonals */}
      <line x1="40" y1="80" x2="440" y2="540" opacity="0.20" />
      <line x1="440" y1="80" x2="40" y2="540" opacity="0.20" />

      {/* Plot scatter on a baseline */}
      <line x1="40" y1="500" x2="440" y2="500" opacity="0.30" />
      <circle cx="80" cy="490" r="2.5" fill="currentColor" />
      <circle cx="130" cy="475" r="2.5" fill="currentColor" />
      <circle cx="180" cy="492" r="2.5" fill="currentColor" />
      <circle cx="230" cy="468" r="2.5" fill="currentColor" />
      <circle cx="280" cy="482" r="2.5" fill="currentColor" />
      <circle cx="330" cy="460" r="2.5" fill="currentColor" />
      <circle cx="380" cy="478" r="2.5" fill="currentColor" />
      <circle cx="430" cy="455" r="2.5" fill="currentColor" />

      {/* Floating plot markers near the ellipse */}
      <circle cx="120" cy="220" r="3" fill="currentColor" />
      <circle cx="380" cy="220" r="3" fill="currentColor" />
      <circle cx="240" cy="160" r="3" fill="currentColor" />
      <circle cx="240" cy="440" r="3" fill="currentColor" />

      {/* Hub */}
      <circle cx="240" cy="300" r="4" fill="currentColor" />

      {/* Sparse data labels */}
      <g
        fontFamily="var(--font-sans)"
        fontSize="11"
        fontWeight="500"
        letterSpacing="0.1em"
        fill="currentColor"
        stroke="none"
      >
        <text x="100" y="208">D 57</text>
        <text x="392" y="208">N 23</text>
        <text x="220" y="148">J 52</text>
        <text x="220" y="430">T 27</text>
        <text x="40" y="540">M 41</text>
        <text x="408" y="540">A 18</text>
      </g>
    </svg>
  );
}
