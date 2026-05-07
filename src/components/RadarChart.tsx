import { useState, useMemo, useCallback, useRef, type FC } from 'react';
import type { Blip, RingMeta, CategoryMeta } from '../data/radar-data';

interface RadarChartProps {
  blips: Blip[];
  rings: RingMeta[];
  categories: CategoryMeta[];
  activeCategory: string | null;
  activeRing: string | null;
  onBlipClick: (blip: Blip) => void;
}

const CX = 350;
const CY = 350;
const RING_RADII = [110, 220, 320]; // adopt, trial, assess outer edges
const LABEL_RADIUS = 355;
const NUM_SECTORS = 9;
const SECTOR_ANGLE = (2 * Math.PI) / NUM_SECTORS;
// Start at top (-90°) and rotate so first sector is at top-center
const START_ANGLE = -Math.PI / 2 - SECTOR_ANGLE / 2;

// Deterministic jitter based on blip id to avoid layout shifts
function seededJitter(seed: number, range: number): number {
  const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453123;
  return (x - Math.floor(x) - 0.5) * 2 * range;
}

function polarToCartesian(angle: number, radius: number): [number, number] {
  return [CX + radius * Math.cos(angle), CY + radius * Math.sin(angle)];
}

function sectorPath(sectorIndex: number, innerR: number, outerR: number): string {
  const startA = START_ANGLE + sectorIndex * SECTOR_ANGLE;
  const endA = startA + SECTOR_ANGLE;
  const [x1, y1] = polarToCartesian(startA, outerR);
  const [x2, y2] = polarToCartesian(endA, outerR);
  const [x3, y3] = polarToCartesian(endA, innerR);
  const [x4, y4] = polarToCartesian(startA, innerR);
  const largeArc = SECTOR_ANGLE > Math.PI ? 1 : 0;
  if (innerR === 0) {
    return `M ${CX} ${CY} L ${x1} ${y1} A ${outerR} ${outerR} 0 ${largeArc} 1 ${x2} ${y2} Z`;
  }
  return `M ${x4} ${y4} L ${x1} ${y1} A ${outerR} ${outerR} 0 ${largeArc} 1 ${x2} ${y2} L ${x3} ${y3} A ${innerR} ${innerR} 0 ${largeArc} 0 ${x4} ${y4} Z`;
}

function ringInnerRadius(ringIndex: number): number {
  return ringIndex === 0 ? 0 : RING_RADII[ringIndex - 1];
}

function blipPosition(blip: Blip, categoryIndex: number, ringIndex: number): [number, number] {
  const innerR = ringInnerRadius(ringIndex);
  const outerR = RING_RADII[ringIndex];
  const midR = (innerR + outerR) / 2;
  const jitterR = (outerR - innerR) * 0.28;

  const sectorStart = START_ANGLE + categoryIndex * SECTOR_ANGLE;
  const sectorEnd = sectorStart + SECTOR_ANGLE;
  const midAngle = (sectorStart + sectorEnd) / 2;
  const jitterA = SECTOR_ANGLE * 0.28;

  const r = midR + seededJitter(blip.id * 3, jitterR);
  const a = midAngle + seededJitter(blip.id * 7, jitterA);

  return polarToCartesian(a, r);
}

const RING_IDS: Record<string, number> = { adopt: 0, trial: 1, assess: 2 };

// Category sector colors (light tints)
const SECTOR_TINTS = [
  '#E8F4FD', '#EAF7F0', '#FDF6E8', '#F0EAF9',
  '#FDF2EF', '#E8F4FD', '#EAF7F0', '#FDF6E8', '#F5F7FA',
];

const RadarChart: FC<RadarChartProps> = ({
  blips,
  rings,
  categories,
  activeCategory,
  activeRing,
  onBlipClick,
}) => {
  const [tooltip, setTooltip] = useState<{ blip: Blip; x: number; y: number } | null>(null);
  const [pulsingId, setPulsingId] = useState<number | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const handleBlipClick = useCallback(
    (blip: Blip) => {
      setPulsingId(blip.id);
      setTimeout(() => setPulsingId(null), 500);
      onBlipClick(blip);
    },
    [onBlipClick]
  );

  const blipPositions = useMemo(() => {
    return blips.map((blip) => {
      const categoryIndex = categories.findIndex((c) => c.id === blip.category);
      const ringIndex = RING_IDS[blip.ring] ?? 2;
      const [x, y] = blipPosition(blip, categoryIndex, ringIndex);
      return { blip, x, y };
    });
  }, [blips, categories]);

  const isActive = useCallback(
    (blip: Blip) => {
      if (activeCategory && blip.category !== activeCategory) return false;
      if (activeRing && blip.ring !== activeRing) return false;
      return true;
    },
    [activeCategory, activeRing]
  );

  return (
    <div className="relative w-full flex justify-center">
      <svg
        ref={svgRef}
        viewBox="0 0 700 700"
        className="w-full max-w-[600px] h-auto"
        role="img"
        aria-label="Radar des technologies souveraines"
      >
        <defs>
          <filter id="blip-shadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="1" stdDeviation="2" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Background */}
        <circle cx={CX} cy={CY} r={RING_RADII[2] + 5} fill="#F0F4FF" />

        {/* Sector fills */}
        {categories.map((cat, i) => {
          const highlighted = activeCategory === cat.id;
          const dimmed = activeCategory !== null && activeCategory !== cat.id;
          return (
            <path
              key={cat.id}
              d={sectorPath(i, 0, RING_RADII[2])}
              fill={SECTOR_TINTS[i % SECTOR_TINTS.length]}
              opacity={dimmed ? 0.3 : highlighted ? 1 : 0.7}
              className="transition-opacity duration-300"
            />
          );
        })}

        {/* Ring fills */}
        {rings.map((ring, i) => (
          <circle
            key={ring.id}
            cx={CX}
            cy={CY}
            r={RING_RADII[i]}
            fill="none"
            stroke={ring.color}
            strokeWidth={activeRing === ring.id ? 3 : 1.5}
            strokeOpacity={activeRing && activeRing !== ring.id ? 0.25 : 0.5}
            className="transition-all duration-300"
          />
        ))}

        {/* Sector divider lines */}
        {categories.map((_, i) => {
          const angle = START_ANGLE + i * SECTOR_ANGLE;
          const [x2, y2] = polarToCartesian(angle, RING_RADII[2]);
          return (
            <line
              key={i}
              x1={CX}
              y1={CY}
              x2={x2}
              y2={y2}
              stroke="#CBD5E1"
              strokeWidth="1"
              strokeDasharray="4 3"
            />
          );
        })}

        {/* Ring labels (center dot for Adopt label) */}
        {rings.map((ring, i) => {
          const r = i === 0 ? RING_RADII[0] / 2 : (RING_RADII[i] + RING_RADII[i - 1]) / 2;
          // Place ring label at top of circle (angle = -PI/2)
          const labelAngle = -Math.PI / 2;
          const [lx, ly] = polarToCartesian(labelAngle, r);
          return (
            <text
              key={ring.id}
              x={lx}
              y={ly}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="11"
              fontWeight="700"
              fill={ring.color}
              fillOpacity={activeRing && activeRing !== ring.id ? 0.3 : 0.85}
              className="pointer-events-none transition-opacity duration-300"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              {ring.label.toUpperCase()}
            </text>
          );
        })}

        {/* Category labels */}
        {categories.map((cat, i) => {
          const midAngle = START_ANGLE + i * SECTOR_ANGLE + SECTOR_ANGLE / 2;
          const [lx, ly] = polarToCartesian(midAngle, LABEL_RADIUS);
          const isTop = ly < CY - 10;
          const isBottom = ly > CY + 10;
          let anchor: string;
          if (lx < CX - 20) anchor = 'end';
          else if (lx > CX + 20) anchor = 'start';
          else anchor = 'middle';

          const dimmed = activeCategory !== null && activeCategory !== cat.id;
          // Split label into two lines if needed
          const labelParts = cat.label.split(' & ');
          const line1 = labelParts[0] ?? cat.label;
          const line2 = labelParts[1];

          return (
            <g key={cat.id} className="transition-opacity duration-300" opacity={dimmed ? 0.3 : 1}>
              {line2 ? (
                <>
                  <text
                    x={lx}
                    y={isTop ? ly - 7 : isBottom ? ly - 5 : ly - 7}
                    textAnchor={anchor}
                    fontSize="10"
                    fontWeight="700"
                    fill="#1A1F4B"
                    className="pointer-events-none"
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                  >
                    {line1}
                  </text>
                  <text
                    x={lx}
                    y={isTop ? ly + 7 : isBottom ? ly + 9 : ly + 7}
                    textAnchor={anchor}
                    fontSize="10"
                    fontWeight="700"
                    fill="#1A1F4B"
                    className="pointer-events-none"
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                  >
                    & {line2}
                  </text>
                </>
              ) : (
                <text
                  x={lx}
                  y={ly}
                  textAnchor={anchor}
                  dominantBaseline="middle"
                  fontSize="10"
                  fontWeight="700"
                  fill="#1A1F4B"
                  className="pointer-events-none"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                  {cat.label}
                </text>
              )}
            </g>
          );
        })}

        {/* Blips */}
        {blipPositions.map(({ blip, x, y }, idx) => {
          const ring = rings.find((r) => r.id === blip.ring);
          const active = isActive(blip);
          const isPulsing = pulsingId === blip.id;

          return (
            <g
              key={blip.id}
              className={`blip-enter cursor-pointer`}
              style={{ animationDelay: `${idx * 18}ms` }}
              opacity={active ? 1 : 0.12}
              onClick={() => handleBlipClick(blip)}
              onMouseEnter={(e) => {
                if (!active) return;
                const svg = svgRef.current;
                if (!svg) return;
                const rect = svg.getBoundingClientRect();
                const scaleX = rect.width / 700;
                const scaleY = rect.height / 700;
                setTooltip({
                  blip,
                  x: x * scaleX + rect.left,
                  y: y * scaleY + rect.top,
                });
              }}
              onMouseLeave={() => setTooltip(null)}
              aria-label={`${blip.name} — ${ring?.label ?? blip.ring}`}
              role="button"
              tabIndex={active ? 0 : -1}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') handleBlipClick(blip);
              }}
            >
              <circle
                cx={x}
                cy={y}
                r={14}
                fill={ring?.color ?? '#6B7280'}
                className={`transition-transform duration-200 ${isPulsing ? 'blip-pulse' : ''}`}
                filter="url(#blip-shadow)"
              />
              <text
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize="10"
                fontWeight="700"
                fill="white"
                className="pointer-events-none select-none"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                {blip.id}
              </text>
            </g>
          );
        })}

        {/* Center logo */}
        <circle cx={CX} cy={CY} r={18} fill="white" />
        <text
          x={CX}
          y={CY}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="8"
          fontWeight="800"
          fill="#1A1F4B"
          className="pointer-events-none select-none"
          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
        >
          TGT
        </text>
      </svg>

      {/* Tooltip (portal-style, positioned fixed) */}
      {tooltip && (
        <div
          className="fixed z-30 pointer-events-none"
          style={{ left: tooltip.x, top: tooltip.y, transform: 'translate(-50%, -120%)' }}
        >
          <div className="bg-navy text-white text-xs font-semibold px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
            <span className="block">{tooltip.blip.name}</span>
            <span className="text-blue-200 font-normal">
              {(() => {
                const r = ['adopt','trial','assess'].indexOf(tooltip.blip.ring);
                return r === 0 ? 'Adopt' : r === 1 ? 'Trial' : 'Assess';
              })()}
            </span>
          </div>
          <div className="w-0 h-0 mx-auto border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-navy" />
        </div>
      )}
    </div>
  );
};

export default RadarChart;
