import { useState, useCallback, type FC } from 'react';
import radarData from './data/radar-data';
import type { Blip } from './data/radar-data';
import Header from './components/Header';
import RadarChart from './components/RadarChart';
import RingLegend from './components/RingLegend';
import CategoryFilter from './components/CategoryFilter';
import DetailDrawer from './components/DetailDrawer';
import BlipList from './components/BlipList';

const App: FC = () => {
  const [selectedBlip, setSelectedBlip] = useState<Blip | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeRing, setActiveRing] = useState<string | null>(null);

  const handleBlipClick = useCallback((blip: Blip) => {
    setSelectedBlip(blip);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedBlip(null);
  }, []);

  const handleCategoryClick = useCallback((id: string | null) => {
    setActiveCategory(id);
  }, []);

  const handleRingClick = useCallback((id: string | null) => {
    setActiveRing(id);
  }, []);

  const { meta, blips } = radarData;

  return (
    <div className="min-h-screen bg-lightbg">
      <Header title={meta.title} subtitle={meta.subtitle} date={meta.date} />

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        {/* Filters row */}
        <div className="mb-6 space-y-4">
          <div>
            <p className="text-xs font-bold text-graytext uppercase tracking-wider text-center mb-2">
              Filtrer par anneau
            </p>
            <RingLegend
              rings={meta.rings}
              activeRing={activeRing}
              onRingClick={handleRingClick}
            />
          </div>
          <div>
            <p className="text-xs font-bold text-graytext uppercase tracking-wider text-center mb-2">
              Filtrer par catégorie
            </p>
            <CategoryFilter
              categories={meta.categories}
              activeCategory={activeCategory}
              onCategoryClick={handleCategoryClick}
            />
          </div>
        </div>

        {/* Main content: radar + list */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Radar — hidden on mobile, shown from md+ */}
          <div className="hidden md:block lg:sticky lg:top-8 w-full lg:w-[600px] flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-sm border border-lightborder p-4">
              <RadarChart
                blips={blips}
                rings={meta.rings}
                categories={meta.categories}
                activeCategory={activeCategory}
                activeRing={activeRing}
                onBlipClick={handleBlipClick}
              />

              {/* Ring legend below radar */}
              <div className="mt-4 flex flex-wrap justify-center gap-4 px-2">
                {meta.rings.map((ring) => (
                  <div key={ring.id} className="flex items-start gap-2 max-w-[160px]">
                    <span
                      className="mt-0.5 w-3 h-3 rounded-full flex-shrink-0"
                      style={{ backgroundColor: ring.color }}
                    />
                    <div>
                      <span className="text-xs font-bold" style={{ color: ring.color }}>
                        {ring.label}
                      </span>
                      <p className="text-xs text-graytext leading-tight">{ring.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Solution list */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-bold text-darktext">
                Solutions
                <span className="ml-2 text-graytext font-normal text-sm">
                  (
                  {
                    blips.filter(
                      (b) =>
                        (activeCategory === null || b.category === activeCategory) &&
                        (activeRing === null || b.ring === activeRing)
                    ).length
                  }{' '}
                  / {blips.length})
                </span>
              </h2>
              {(activeCategory || activeRing) && (
                <button
                  onClick={() => {
                    setActiveCategory(null);
                    setActiveRing(null);
                  }}
                  className="text-xs text-coral font-medium hover:underline"
                >
                  Réinitialiser filtres
                </button>
              )}
            </div>
            <BlipList
              blips={blips}
              rings={meta.rings}
              categories={meta.categories}
              activeCategory={activeCategory}
              activeRing={activeRing}
              onBlipClick={handleBlipClick}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-navy text-white/60 text-xs py-6 px-6 mt-12 text-center">
        <p>
          Radar élaboré par l'équipe{' '}
          <span className="text-white font-semibold">Theodo GovTech</span> · Mai 2026
        </p>
        <p className="mt-1">
          Sources : expertise terrain Theodo GovTech, Sommet de la Souveraineté
          Technologique IMA (2025 &amp; 2026)
        </p>
      </footer>

      {/* Detail Drawer */}
      <DetailDrawer
        blip={selectedBlip}
        rings={meta.rings}
        categories={meta.categories}
        onClose={handleClose}
      />
    </div>
  );
};

export default App;
