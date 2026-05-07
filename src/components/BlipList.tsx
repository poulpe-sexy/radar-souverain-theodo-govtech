import { useState, type FC } from 'react';
import type { Blip, RingMeta, CategoryMeta } from '../data/radar-data';

interface BlipListProps {
  blips: Blip[];
  rings: RingMeta[];
  categories: CategoryMeta[];
  activeCategory: string | null;
  activeRing: string | null;
  onBlipClick: (blip: Blip) => void;
}

const BlipList: FC<BlipListProps> = ({
  blips,
  rings,
  categories,
  activeCategory,
  activeRing,
  onBlipClick,
}) => {
  const [openCategories, setOpenCategories] = useState<Set<string>>(
    new Set(categories.map((c) => c.id))
  );

  const toggleCategory = (id: string) => {
    setOpenCategories((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const visibleCategories = activeCategory
    ? categories.filter((c) => c.id === activeCategory)
    : categories;

  return (
    <div className="space-y-2">
      {visibleCategories.map((cat) => {
        const catBlips = blips.filter(
          (b) =>
            b.category === cat.id && (activeRing === null || b.ring === activeRing)
        );
        if (catBlips.length === 0) return null;
        const isOpen = openCategories.has(cat.id);

        return (
          <div key={cat.id} className="border border-lightborder rounded-lg overflow-hidden bg-white">
            <button
              onClick={() => toggleCategory(cat.id)}
              className="w-full flex items-center justify-between px-4 py-3 hover:bg-lightbg transition-colors text-left"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-sm text-darktext">{cat.label}</span>
              <div className="flex items-center gap-2">
                <span className="text-xs text-graytext bg-lightbg border border-lightborder rounded-full px-2 py-0.5">
                  {catBlips.length}
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="currentColor"
                  className={`text-graytext transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                >
                  <path d="M2 4.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>

            {isOpen && (
              <ul className="divide-y divide-lightborder">
                {catBlips.map((blip) => {
                  const ring = rings.find((r) => r.id === blip.ring);
                  return (
                    <li key={blip.id}>
                      <button
                        onClick={() => onBlipClick(blip)}
                        className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-lightbg transition-colors text-left group"
                      >
                        <span
                          className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                          style={{ backgroundColor: ring?.color ?? '#6B7280' }}
                        >
                          {blip.id}
                        </span>
                        <span className="flex-1 text-sm text-darktext font-medium group-hover:text-navy transition-colors">
                          {blip.name}
                        </span>
                        {ring && (
                          <span
                            className="text-white text-xs font-medium px-2 py-0.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: ring.color }}
                          >
                            {ring.label}
                          </span>
                        )}
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="currentColor"
                          className="text-lightborder group-hover:text-brandBlue transition-colors flex-shrink-0"
                        >
                          <path d="M5 2.5l4.5 4.5L5 11.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default BlipList;
