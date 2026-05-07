import { useEffect, type FC } from 'react';
import type { Blip, RingMeta, CategoryMeta } from '../data/radar-data';

interface DetailDrawerProps {
  blip: Blip | null;
  rings: RingMeta[];
  categories: CategoryMeta[];
  onClose: () => void;
}

const DetailDrawer: FC<DetailDrawerProps> = ({ blip, rings, categories, onClose }) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (blip) {
      document.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [blip, onClose]);

  if (!blip) return null;

  const ring = rings.find((r) => r.id === blip.ring);
  const category = categories.find((c) => c.id === blip.category);

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 z-40 overlay-enter"
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label={`Détail : ${blip.name}`}
        className="fixed top-0 right-0 h-full w-full md:w-[480px] bg-white shadow-2xl z-50 flex flex-col drawer-enter"
      >
        <div
          className="flex items-start justify-between p-6 border-b border-grey-100"
          style={{ borderTopColor: ring?.color, borderTopWidth: 4 }}
        >
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              {ring && (
                <span
                  className="text-white text-xs font-bold px-3 py-1 rounded-full font-inter"
                  style={{ backgroundColor: ring.color }}
                >
                  {ring.label}
                </span>
              )}
              {category && (
                <span className="text-xs font-medium text-grey-500 bg-grey-050 px-3 py-1 rounded-full border border-grey-100 font-inter">
                  {category.label}
                </span>
              )}
            </div>
            <div className="flex items-center gap-3">
              <span
                className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                style={{ backgroundColor: ring?.color ?? '#667085' }}
              >
                {blip.id}
              </span>
              <h2 className="text-xl font-semibold text-darkest leading-tight truncate font-poppins">
                {blip.name}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="ml-4 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-grey-050 hover:bg-grey-100 transition-colors text-grey-400 hover:text-darkest"
            aria-label="Fermer"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M3.293 3.293a1 1 0 011.414 0L8 6.586l3.293-3.293a1 1 0 111.414 1.414L9.414 8l3.293 3.293a1 1 0 01-1.414 1.414L8 9.414l-3.293 3.293a1 1 0 01-1.414-1.414L6.586 8 3.293 4.707a1 1 0 010-1.414z" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto thin-scroll p-6 space-y-6">
          <section>
            <h3 className="text-xs font-bold text-grey-400 uppercase tracking-wider mb-3 font-inter">
              Description
            </h3>
            <p className="text-darkest text-sm leading-relaxed font-inter">{blip.description}</p>
          </section>

          <section>
            <h3 className="text-xs font-bold text-grey-400 uppercase tracking-wider mb-3 font-inter">
              Le point de vue Theodo GovTech
            </h3>
            <div
              className="bg-grey-050 rounded-lg p-4 text-sm leading-relaxed text-darkest font-inter"
            >
              {blip.pov}
            </div>
          </section>
        </div>

        <div className="p-4 border-t border-grey-100 bg-grey-050">
          <p className="text-xs text-grey-400 text-center font-inter">
            Radar Technologies Souveraines — Theodo GovTech · Mai 2026
          </p>
        </div>
      </aside>
    </>
  );
};

export default DetailDrawer;
