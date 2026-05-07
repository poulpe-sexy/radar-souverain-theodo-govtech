import { useState, useMemo, useCallback, useRef, type FC } from 'react';
import type { Blip, RingMeta, CategoryMeta } from '../data/radar-data';

interface RadarChartProps {
  blips: Blip[];
  rings: RingMeta[];
  categories: CategoryMeta[];
  activeCategory: string | null;
  highlightedBlipId: number | null;
  onBlipClick: (blip: Blip) => void;
}

const CX = 350;
const CY = 350;
const RING_RADII = [110, 220, 320];
const LABEL_RADIUS = 348;
const SECTOR_ANGLE = (2 * Math.PI) / 9;
const START_ANGLE = -Math.PI / 2 - SECTOR_ANGLE / 2;

const RING_FILLS = [
  'rgba(15, 139, 95, 0.07)',
  'rgba(212, 145, 15, 0.06)',
  'rgba(124, 108, 196, 0.05)',
];

function seededJitter(seed: number, range: number): number {
  const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453123;
  return (x - Math.floor(x) - 0.5) * 2 * range;
}

function polarToCartesian(angle: number, radius: number): [number, number] {
  return [CX + radius * Math.cos(angle), CY + radius * Math.sin(angle)];
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
  const midAngle = (sectorStart + sectorStart + SECTOR_ANGLE) / 2;
  const jitterA = SECTOR_ANGLE * 0.28;
  const r = midR + seededJitter(blip.id * 3, jitterR);
  const a = midAngle + seededJitter(blip.id * 7, jitterA);
  return polarToCartesian(a, r);
}

const RING_IDS: Record<string, number> = { adopt: 0, trial: 1, assess: 2 };

const LABEL_LINES: Record<string, string[]> = {
  'Cloud & Infrastructure': ['Cloud &', 'Infrastructure'],
  'Communication & Messagerie': ['Communication', '& Messagerie'],
  'Suite Collaborative': ['Suite', 'Collaborative'],
  'Wiki & Documentation': ['Wiki &', 'Documentation'],
  'Gestion de Projet': ['Gestion', 'de Projet'],
  'IA & LLMs': ['IA & LLMs'],
  'Cybersécurité': ['Cybersécurité'],
  'Identité & Signature': ['Identité &', 'Signature'],
  'Low-Code / No-Code': ['Low-Code /', 'No-Code'],
};

const RadarChart: FC<RadarChartProps> = ({
  blips,
  rings,
  categories,
  activeCategory,
  highlightedBlipId,
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
    (blip: Blip) => !activeCategory || blip.category === activeCategory,
    [activeCategory]
  );

  return (
    <div className="relative w-full flex justify-center">
      <svg
        ref={svgRef}
        viewBox="-70 -30 850 760"
        className="w-full max-w-[600px] h-auto"
        role="img"
        aria-label="Radar des technologies souveraines"
      >
        <defs>
          <filter id="blip-shadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="1" stdDeviation="2" floodOpacity="0.15" />
          </filter>
        </defs>

        {/* Ring fills — draw largest first */}
        {[2, 1, 0].map((idx) => (
          <circle
            key={`ring-fill-${idx}`}
            cx={CX}
            cy={CY}
            r={RING_RADII[idx]}
            fill={RING_FILLS[idx]}
            stroke="#EAECF0"
            strokeWidth="1"
          />
        ))}

        {/* Sector divider lines */}
        {categories.map((_, i) => {
          const angle = START_ANGLE + i * SECTOR_ANGLE;
          const [x2, y2] = polarToCartesian(angle, RING_RADII[2]);
          return (
            <line key={`div-${i}`} x1={CX} y1={CY} x2={x2} y2={y2} stroke="#D0D5DD" strokeWidth="0.75" />
          );
        })}

        {/* Ring labels */}
        {rings.map((ring, i) => {
          const r = i === 0 ? RING_RADII[0] / 2 : (RING_RADII[i] + RING_RADII[i - 1]) / 2;
          const [lx, ly] = polarToCartesian(-Math.PI / 2, r);
          return (
            <text
              key={`rl-${ring.id}`}
              x={lx}
              y={ly}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="11"
              fontWeight="600"
              fill={ring.color}
              fillOpacity={0.65}
              className="pointer-events-none"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {ring.label.toUpperCase()}
            </text>
          );
        })}

        {/* Category labels */}
        {categories.map((cat, i) => {
          const midAngle = START_ANGLE + i * SECTOR_ANGLE + SECTOR_ANGLE / 2;
          const [lx, ly] = polarToCartesian(midAngle, LABEL_RADIUS);
          let anchor: string;
          if (lx < CX - 30) anchor = 'end';
          else if (lx > CX + 30) anchor = 'start';
          else anchor = 'middle';
          const dimmed = activeCategory !== null && activeCategory !== cat.id;
          const parts = LABEL_LINES[cat.label] || [cat.label];
          return (
            <g key={cat.id} className="transition-opacity duration-300" opacity={dimmed ? 0.2 : 1}>
              {parts.map((line, li) => (
                <text
                  key={li}
                  x={lx}
                  y={ly + (li - (parts.length - 1) / 2) * 13}
                  textAnchor={anchor}
                  dominantBaseline="middle"
                  className="radar-section-label pointer-events-none"
                  fontSize="9.5"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {line}
                </text>
              ))}
            </g>
          );
        })}

        {/* Blips */}
        {blipPositions.map(({ blip, x, y }, idx) => {
          const ring = rings.find((r) => r.id === blip.ring);
          const active = isActive(blip);
          const isPulsing = pulsingId === blip.id;
          const isHighlighted = highlightedBlipId === blip.id;

          return (
            <g
              key={blip.id}
              className="blip-enter cursor-pointer"
              style={{ animationDelay: `${idx * 18}ms` }}
              opacity={active ? 1 : 0.1}
              onClick={() => handleBlipClick(blip)}
              onMouseEnter={() => {
                if (!active) return;
                const svg = svgRef.current;
                if (!svg) return;
                const rect = svg.getBoundingClientRect();
                const scaleX = rect.width / 700;
                const scaleY = rect.height / 700;
                setTooltip({ blip, x: x * scaleX + rect.left, y: y * scaleY + rect.top });
              }}
              onMouseLeave={() => setTooltip(null)}
              role="button"
              tabIndex={active ? 0 : -1}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') handleBlipClick(blip);
              }}
            >
              <circle
                cx={x}
                cy={y}
                r={isHighlighted ? 16 : 14}
                fill={isHighlighted ? '#1D2939' : (ring?.color ?? '#667085')}
                className={`transition-all duration-200 ${isPulsing ? 'blip-pulse' : ''}`}
                filter="url(#blip-shadow)"
              />
              <text
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={isHighlighted ? '11' : '10'}
                fontWeight="700"
                fill="white"
                className="pointer-events-none select-none"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {blip.id}
              </text>
            </g>
          );
        })}

        {/* Center */}
        <circle cx={CX} cy={CY} r={16} fill="white" stroke="#EAECF0" strokeWidth="1" />
        <text
          x={CX}
          y={CY}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="7"
          fontWeight="800"
          fill="#1D2939"
          className="pointer-events-none select-none"
          style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.05em' }}
        >
          TGT
        </text>
      </svg>

      {tooltip && (
        <div
          className="fixed z-30 pointer-events-none"
          style={{ left: tooltip.x, top: tooltip.y, transform: 'translate(-50%, -120%)' }}
        >
          <div className="bg-darkest text-white text-xs font-semibold px-3 py-2 rounded-lg shadow-lg whitespace-nowrap font-inter">
            <span className="block">{tooltip.blip.name}</span>
            <span className="text-grey-400 font-normal text-[11px]">
              {rings.find((r) => r.id === tooltip.blip.ring)?.label}
            </span>
          </div>
          <div className="w-0 h-0 mx-auto border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-darkest" />
        </div>
      )}
    </div>
  );
};

export default RadarChart;
