/* Per-service line-art for image-led cards on the services hub.
   Each is a single-concept abstract — minimal lines, monochrome
   currentColor, sparse labels. Same visual language as BiologyLine /
   DataLine / GeneralLine. Aspect 4:3 (480 × 360). */

interface ServiceLineProps {
  className?: string;
}

const COMMON_SVG_PROPS = {
  viewBox: "0 0 480 360",
  preserveAspectRatio: "xMidYMid meet",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: "1",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  xmlns: "http://www.w3.org/2000/svg",
};

const LABEL_GROUP_PROPS = {
  fontFamily: "var(--font-sans)",
  fontSize: "10",
  fontWeight: 500,
  letterSpacing: "0.1em",
  fill: "currentColor",
  stroke: "none",
};

/* CRISPR assay development — molecular curves with cut-site marker. */
export function AssayDevLine({ className }: ServiceLineProps) {
  return (
    <svg
      role="img"
      aria-label="Abstract molecular curves with a cut-site marker."
      className={className}
      {...COMMON_SVG_PROPS}
    >
      <path d="M 40 120 C 140 60, 220 220, 320 140 C 380 100, 420 160, 460 130" />
      <path d="M 40 220 C 140 280, 220 120, 320 200 C 380 240, 420 180, 460 210" opacity="0.65" />
      <line x1="240" y1="40" x2="240" y2="320" strokeDasharray="4 6" opacity="0.55" />
      <circle cx="240" cy="40" r="3" fill="currentColor" />
      <circle cx="240" cy="320" r="3" fill="currentColor" />
      <circle cx="120" cy="100" r="2.5" fill="currentColor" />
      <circle cx="360" cy="160" r="2.5" fill="currentColor" />
      <circle cx="120" cy="240" r="2.5" fill="currentColor" />
      <circle cx="360" cy="200" r="2.5" fill="currentColor" />
      <g {...LABEL_GROUP_PROPS}>
        <text x="246" y="36">CUT</text>
        <text x="40" y="60">D 57</text>
        <text x="406" y="280">N 23</text>
      </g>
    </svg>
  );
}

/* Molecular diagnostics consulting — intersecting circles (Venn-style). */
export function ConsultingLine({ className }: ServiceLineProps) {
  return (
    <svg
      role="img"
      aria-label="Abstract intersecting circles representing strategic diagnostic decisions."
      className={className}
      {...COMMON_SVG_PROPS}
    >
      <circle cx="190" cy="180" r="120" opacity="0.85" />
      <circle cx="290" cy="180" r="120" opacity="0.85" />
      <circle cx="240" cy="100" r="120" opacity="0.55" />
      <line x1="240" y1="40" x2="240" y2="320" opacity="0.20" />
      <line x1="60" y1="200" x2="420" y2="200" opacity="0.20" />
      <circle cx="240" cy="180" r="3" fill="currentColor" />
      <circle cx="190" cy="60" r="2.5" fill="currentColor" />
      <circle cx="290" cy="60" r="2.5" fill="currentColor" />
      <circle cx="240" cy="300" r="2.5" fill="currentColor" />
      <g {...LABEL_GROUP_PROPS}>
        <text x="60" y="64">PLATFORM</text>
        <text x="338" y="64">MARKET</text>
        <text x="186" y="332">EVIDENCE</text>
      </g>
    </svg>
  );
}

/* Clinical validation support — checklist + timeline. */
export function ValidationLine({ className }: ServiceLineProps) {
  return (
    <svg
      role="img"
      aria-label="Abstract clinical timeline with checked study milestones."
      className={className}
      {...COMMON_SVG_PROPS}
    >
      {/* Timeline */}
      <line x1="60" y1="180" x2="420" y2="180" />
      {/* Milestone markers */}
      {[100, 180, 260, 340].map((x) => (
        <circle key={x} cx={x} cy="180" r="6" fill="none" />
      ))}
      <circle cx="100" cy="180" r="3" fill="currentColor" />
      <circle cx="180" cy="180" r="3" fill="currentColor" />
      <circle cx="260" cy="180" r="3" fill="currentColor" />
      {/* Vertical drop-lines to labels */}
      <line x1="100" y1="186" x2="100" y2="240" opacity="0.45" />
      <line x1="180" y1="186" x2="180" y2="260" opacity="0.45" />
      <line x1="260" y1="186" x2="260" y2="240" opacity="0.45" />
      <line x1="340" y1="186" x2="340" y2="260" opacity="0.45" />
      {/* Sub-curves above */}
      <path d="M 60 100 Q 140 140, 220 100 T 420 100" opacity="0.5" />
      <path d="M 60 60 Q 140 100, 220 60 T 420 60" opacity="0.3" />
      {/* Check marks at milestones */}
      <path d="M 95 180 l 4 5 l 8 -10" stroke="currentColor" strokeWidth="1.4" opacity="0.0" />
      <g {...LABEL_GROUP_PROPS}>
        <text x="80" y="260">DESIGN</text>
        <text x="158" y="280">PROTOCOL</text>
        <text x="240" y="260">ENROL</text>
        <text x="320" y="280">REPORT</text>
      </g>
    </svg>
  );
}

/* Regulatory strategy — shield outline with structured grid inside (technical file). */
export function RegulatoryLine({ className }: ServiceLineProps) {
  return (
    <svg
      role="img"
      aria-label="Abstract shield containing a structured grid of evidence cells."
      className={className}
      {...COMMON_SVG_PROPS}
    >
      {/* Shield outline */}
      <path d="M 240 40 L 360 80 L 360 200 C 360 270, 310 310, 240 340 C 170 310, 120 270, 120 200 L 120 80 Z" />
      {/* Inner grid — 3x3 evidence cells */}
      <line x1="160" y1="120" x2="320" y2="120" opacity="0.45" />
      <line x1="160" y1="180" x2="320" y2="180" opacity="0.45" />
      <line x1="160" y1="240" x2="320" y2="240" opacity="0.45" />
      <line x1="200" y1="100" x2="200" y2="280" opacity="0.45" />
      <line x1="240" y1="100" x2="240" y2="280" opacity="0.45" />
      <line x1="280" y1="100" x2="280" y2="280" opacity="0.45" />
      <rect x="160" y="100" width="160" height="180" opacity="0.45" />
      {/* Plot points to suggest filled cells */}
      <circle cx="180" cy="140" r="2.5" fill="currentColor" />
      <circle cx="220" cy="200" r="2.5" fill="currentColor" />
      <circle cx="260" cy="140" r="2.5" fill="currentColor" />
      <circle cx="300" cy="260" r="2.5" fill="currentColor" />
      <circle cx="180" cy="260" r="2.5" fill="currentColor" />
      <g {...LABEL_GROUP_PROPS}>
        <text x="200" y="76">IVDR</text>
      </g>
    </svg>
  );
}

/* Global procurement — globe with meridians, sourcing nodes, and route arcs. */
export function ProcurementLine({ className }: ServiceLineProps) {
  return (
    <svg
      role="img"
      aria-label="Abstract globe with meridian arcs and connected sourcing nodes."
      className={className}
      {...COMMON_SVG_PROPS}
    >
      {/* Globe */}
      <circle cx="240" cy="180" r="120" />
      {/* Equator */}
      <ellipse cx="240" cy="180" rx="120" ry="40" opacity="0.55" />
      {/* Latitude bands */}
      <ellipse cx="240" cy="180" rx="120" ry="20" opacity="0.35" />
      <ellipse cx="240" cy="180" rx="120" ry="80" opacity="0.30" />
      {/* Meridians */}
      <ellipse cx="240" cy="180" rx="40" ry="120" opacity="0.45" />
      <ellipse cx="240" cy="180" rx="80" ry="120" opacity="0.30" />
      <line x1="240" y1="60" x2="240" y2="300" opacity="0.55" />
      {/* Sourcing nodes around the globe */}
      <circle cx="180" cy="120" r="3" fill="currentColor" />
      <circle cx="300" cy="140" r="3" fill="currentColor" />
      <circle cx="270" cy="220" r="3" fill="currentColor" />
      <circle cx="200" cy="240" r="3" fill="currentColor" />
      {/* External nodes (partner / customer) */}
      <circle cx="80" cy="80" r="2.5" fill="currentColor" />
      <circle cx="400" cy="80" r="2.5" fill="currentColor" />
      <circle cx="80" cy="280" r="2.5" fill="currentColor" />
      <circle cx="400" cy="280" r="2.5" fill="currentColor" />
      {/* Route arcs from external partners to globe nodes */}
      <path d="M 80 80 Q 130 60, 180 120" opacity="0.55" strokeDasharray="3 5" />
      <path d="M 400 80 Q 350 60, 300 140" opacity="0.55" strokeDasharray="3 5" />
      <path d="M 80 280 Q 130 280, 200 240" opacity="0.45" strokeDasharray="3 5" />
      <path d="M 400 280 Q 350 280, 270 220" opacity="0.45" strokeDasharray="3 5" />
      <g {...LABEL_GROUP_PROPS}>
        <text x="208" y="186">EU</text>
        <text x="40" y="74">AUDIT</text>
        <text x="372" y="74">REPORT</text>
      </g>
    </svg>
  );
}

/* Contract research — flask outline with measurement ticks. */
export function ContractLine({ className }: ServiceLineProps) {
  return (
    <svg
      role="img"
      aria-label="Abstract laboratory flask outline with measurement ticks."
      className={className}
      {...COMMON_SVG_PROPS}
    >
      {/* Flask body */}
      <path d="M 200 60 L 280 60 L 280 140 L 340 280 C 350 305, 330 320, 300 320 L 180 320 C 150 320, 130 305, 140 280 L 200 140 Z" />
      {/* Neck rim */}
      <line x1="195" y1="60" x2="285" y2="60" />
      {/* Measurement ticks on the right */}
      <line x1="320" y1="200" x2="335" y2="200" opacity="0.55" />
      <line x1="325" y1="220" x2="335" y2="220" opacity="0.55" />
      <line x1="320" y1="240" x2="335" y2="240" opacity="0.55" />
      <line x1="325" y1="260" x2="335" y2="260" opacity="0.55" />
      {/* Liquid line inside */}
      <path d="M 168 240 C 220 230, 280 250, 320 240 L 320 280 L 168 280 Z" opacity="0.3" />
      {/* Bubbles */}
      <circle cx="220" cy="250" r="3" fill="none" />
      <circle cx="240" cy="220" r="2" fill="none" />
      <circle cx="260" cy="240" r="2" fill="none" />
      {/* Floating plot points */}
      <circle cx="100" cy="80" r="2.5" fill="currentColor" />
      <circle cx="400" cy="120" r="2.5" fill="currentColor" />
      <circle cx="80" cy="280" r="2.5" fill="currentColor" />
      <g {...LABEL_GROUP_PROPS}>
        <text x="60" y="76">SCOPE</text>
        <text x="370" y="120">REPORT</text>
      </g>
    </svg>
  );
}
