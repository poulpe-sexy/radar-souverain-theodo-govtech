import { type FC } from 'react';
import type { CategoryMeta } from '../data/radar-data';

interface HeroProps {
  categories: CategoryMeta[];
  activeCategory: string | null;
  onCategoryChange: (id: string | null) => void;
  blipCount: number;
}

const Hero: FC<HeroProps> = ({ categories, activeCategory, onCategoryChange, blipCount }) => (
  <section className="relative overflow-hidden bg-grey-050 pt-10 pb-0">
    <div
      className="hero-ellipse"
      style={{ width: 500, height: 500, background: '#FF512C', top: -200, right: -150 }}
    />
    <div
      className="hero-ellipse"
      style={{ width: 400, height: 400, background: '#294F73', bottom: -150, left: -100 }}
    />

    <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
      <nav className="text-sm text-grey-400 mb-6 font-inter">
        <span>Accueil</span>
        <span className="mx-2">›</span>
        <span>Radars</span>
        <span className="mx-2">›</span>
        <span className="text-darkest font-medium">Technologies Souveraines</span>
      </nav>

      <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-semibold text-darkest leading-tight mb-4">
        Radar des Technologies
        <br />
        Souveraines
      </h1>

      <p className="text-grey-500 text-base md:text-lg max-w-2xl mb-10 font-inter leading-relaxed">
        {blipCount} solutions françaises et européennes passées au crible par l'équipe
        Theodo GovTech pour le secteur public.
      </p>

      <div className="flex overflow-x-auto gap-0 border-b border-grey-100 -mx-4 px-4 md:mx-0 md:px-0 thin-scroll">
        <button
          onClick={() => onCategoryChange(null)}
          className={`relative flex-shrink-0 px-5 py-3 text-sm font-medium font-inter transition-colors whitespace-nowrap ${
            activeCategory === null ? 'tab-active text-darkest' : 'text-grey-400 hover:text-grey-600'
          }`}
        >
          Tous
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onCategoryChange(cat.id)}
            className={`relative flex-shrink-0 px-5 py-3 text-sm font-medium font-inter transition-colors whitespace-nowrap ${
              activeCategory === cat.id
                ? 'tab-active text-darkest'
                : 'text-grey-400 hover:text-grey-600'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
