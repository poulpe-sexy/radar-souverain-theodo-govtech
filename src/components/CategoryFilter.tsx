import type { FC } from 'react';
import type { CategoryMeta } from '../data/radar-data';

interface CategoryFilterProps {
  categories: CategoryMeta[];
  activeCategory: string | null;
  onCategoryClick: (categoryId: string | null) => void;
}

const CategoryFilter: FC<CategoryFilterProps> = ({ categories, activeCategory, onCategoryClick }) => (
  <div className="flex flex-wrap gap-2 justify-center">
    <button
      onClick={() => onCategoryClick(null)}
      className={`px-3 py-1 rounded-md text-xs font-medium border transition-all ${
        activeCategory === null
          ? 'bg-navy text-white border-navy'
          : 'bg-white text-graytext border-lightborder hover:border-navy hover:text-navy'
      }`}
    >
      Toutes
    </button>
    {categories.map((cat) => (
      <button
        key={cat.id}
        onClick={() => onCategoryClick(activeCategory === cat.id ? null : cat.id)}
        className={`px-3 py-1 rounded-md text-xs font-medium border transition-all ${
          activeCategory === cat.id
            ? 'bg-navy text-white border-navy'
            : 'bg-white text-darktext border-lightborder hover:border-navy hover:text-navy'
        }`}
      >
        {cat.label}
      </button>
    ))}
  </div>
);

export default CategoryFilter;
