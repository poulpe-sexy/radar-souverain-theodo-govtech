import { useState, useCallback, type FC } from 'react';
import radarData from './data/radar-data';
import type { Blip } from './data/radar-data';
import Hero from './components/Hero';
import RadarChart from './components/RadarChart';
import BlipList from './components/BlipList';
import DetailDrawer from './components/DetailDrawer';

const App: FC = () => {
  const [selectedBlip, setSelectedBlip] = useState<Blip | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [highlightedBlipId, setHighlightedBlipId] = useState<number | null>(null);

  const handleBlipClick = useCallback((blip: Blip) => {
    setSelectedBlip(blip);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedBlip(null);
  }, []);

  const { meta, blips } = radarData;

  return (
    <div className="min-h-screen bg-white">
      <Hero blipCount={blips.length} />

      <main className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Left column: Radar + Legend */}
          <div className="hidden md:block lg:sticky lg:top-6 lg:w-[55%] space-y-6 flex-shrink-0">
            <div className="glass-card p-5 rounded-2xl">
              <RadarChart
                blips={blips}
                rings={meta.rings}
                categories={meta.categories}
                activeCategory={activeCategory}
                highlightedBlipId={highlightedBlipId}
                onBlipClick={handleBlipClick}
              />
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <h3 className="font-poppins font-semibold text-base text-darkest mb-5">
                Comment lire notre radar
              </h3>
              <div className="space-y-4">
                {meta.rings.map((ring) => (
                  <div key={ring.id} className="flex items-start gap-3">
                    <span
                      className="w-3 h-3 rounded-full mt-0.5 flex-shrink-0"
                      style={{ backgroundColor: ring.color }}
                    />
                    <div>
                      <span
                        className="text-sm font-semibold font-inter"
                        style={{ color: ring.color }}
                      >
                        {ring.label}
                      </span>
                      <p className="text-sm text-grey-500 leading-relaxed mt-0.5 font-inter">
                        {ring.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column: Blip list */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-poppins font-semibold text-lg text-darkest">
                Solutions
                <span className="ml-2 text-grey-400 font-normal text-sm font-inter">
                  ({blips.length})
                </span>
              </h2>
            </div>
            <BlipList
              blips={blips}
              rings={meta.rings}
              categories={meta.categories}
              onBlipClick={handleBlipClick}
              highlightedBlipId={highlightedBlipId}
              onBlipHover={setHighlightedBlipId}
              onCategoryToggle={setActiveCategory}
            />
          </div>
        </div>
      </main>

      <footer className="bg-darkest text-white/60 text-xs py-8 px-6 mt-12 text-center font-inter">
        <p>
          Radar élaboré par l'équipe{' '}
          <span className="text-white font-semibold">Theodo GovTech</span> · Mai 2026
        </p>
        <p className="mt-1.5 text-white/40">
          Sources : expertise terrain Theodo GovTech, Sommet de la Souveraineté Technologique IMA
          (2025 &amp; 2026)
        </p>
      </footer>

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
