import { useState, type FC } from 'react';
import type { Blip, RingMeta, CategoryMeta } from '../data/radar-data';

interface BlipListProps {
  blips: Blip[];
  rings: RingMeta[];
  categories: CategoryMeta[];
  activeCategory: string | null;
  onBlipClick: (blip: Blip) => void;
  highlightedBlipId: number | null;
  onBlipHover: (id: number | null) => void;
}

const BlipList: FC<BlipListProps> = ({
  blips,
  rings,
  categories,
  activeCategory,
  onBlipClick,
  highlightedBlipId,
  onBlipHover,
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
    <div>
      {visibleCategories.map((cat) => {
        const catBlips = blips.filter((b) => b.category === cat.id);
        if (catBlips.length === 0) return null;
        const isOpen = openCategories.has(cat.id);

        return (
          <div key={cat.id} className={isOpen ? 'accordion-open' : ''}>
            {/* Category header */}
            <button
              onClick={() => toggleCategory(cat.id)}
              className="w-full flex items-center justify-between py-3.5 group"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3">
                <h3 className="font-poppins font-semibold text-sm text-darkest uppercase tracking-wide">
                  {cat.label}
                </h3>
                <span className="text-xs text-grey-400 font-inter bg-grey-050 rounded-full px-2.5 py-0.5 border border-grey-100">
                  {catBlips.length}
                </span>
              </div>
              <svg
                className="accordion-icon w-5 h-5 text-grey-400 group-hover:text-darkest transition-colors flex-shrink-0"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <line x1="4" y1="10" x2="16" y2="10" className="horizontal" />
                <line x1="10" y1="4" x2="10" y2="16" className="vertical" />
              </svg>
            </button>

            {/* Accordion body */}
            {isOpen && (
              <div className="mt-2">
                {(['adopt', 'trial', 'assess'] as const).map((ringId) => {
                  const ringBlips = catBlips.filter((b) => b.ring === ringId);
                  if (ringBlips.length === 0) return null;
                  const ring = rings.find((r) => r.id === ringId)!;

                  return (
                    <div key={ringId} className="mb-3 last:mb-0">
                      <div className="flex items-center gap-2 mb-1.5 pl-1">
                        <span
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: ring.color }}
                        />
                        <span
                          className="text-xs font-semibold uppercase tracking-wide font-inter"
                          style={{ color: ring.color }}
                        >
                          {ring.label}
                        </span>
                      </div>

                      <div className="space-y-0.5">
                        {ringBlips.map((blip) => {
                          const isHighlighted = highlightedBlipId === blip.id;
                          return (
                            <button
                              key={blip.id}
                              onClick={() => onBlipClick(blip)}
                              onMouseEnter={() => onBlipHover(blip.id)}
                              onMouseLeave={() => onBlipHover(null)}
                              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-grey-050 transition-colors text-left group"
                            >
                              <span
                                className={`blip-dot w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 transition-all ${
                                  isHighlighted ? 'is-highlighted' : ''
                                }`}
                                style={
                                  isHighlighted
                                    ? undefined
                                    : { backgroundColor: ring.color, color: 'white' }
                                }
                              >
                                <span className="blip-num">{blip.id}</span>
                              </span>
                              <span className="flex-1 text-sm font-medium text-darkest group-hover:text-secondary transition-colors font-inter truncate">
                                {blip.name}
                              </span>
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                className="text-grey-200 group-hover:text-secondary transition-colors flex-shrink-0"
                              >
                                <path
                                  d="M6 3l5 5-5 5"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            <div className="border-b border-grey-100" />
          </div>
        );
      })}
    </div>
  );
};

export default BlipList;
