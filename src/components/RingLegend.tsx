import type { FC } from 'react';
import type { RingMeta } from '../data/radar-data';

interface RingLegendProps {
  rings: RingMeta[];
  activeRing: string | null;
  onRingClick: (ringId: string | null) => void;
}

const RingLegend: FC<RingLegendProps> = ({ rings, activeRing, onRingClick }) => (
  <div className="flex flex-wrap gap-2 justify-center">
    <button
      onClick={() => onRingClick(null)}
      className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
        activeRing === null
          ? 'bg-navy text-white border-navy'
          : 'bg-white text-graytext border-lightborder hover:border-navy hover:text-navy'
      }`}
    >
      Tous
    </button>
    {rings.map((ring) => (
      <button
        key={ring.id}
        onClick={() => onRingClick(activeRing === ring.id ? null : ring.id)}
        className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
          activeRing === ring.id
            ? 'text-white border-transparent'
            : 'bg-white text-darktext border-lightborder hover:border-current'
        }`}
        style={
          activeRing === ring.id
            ? { backgroundColor: ring.color, borderColor: ring.color }
            : { '--hover-color': ring.color } as React.CSSProperties
        }
        title={ring.description}
      >
        <span
          className="w-2.5 h-2.5 rounded-full flex-shrink-0"
          style={{ backgroundColor: activeRing === ring.id ? 'white' : ring.color }}
        />
        {ring.label}
      </button>
    ))}
  </div>
);

export default RingLegend;
