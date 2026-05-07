import type { FC } from 'react';

interface HeaderProps {
  title: string;
  subtitle: string;
  date: string;
}

const Header: FC<HeaderProps> = ({ title, subtitle, date }) => (
  <header className="bg-navy text-white py-8 px-6 md:px-12">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-2">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 flex-shrink-0">
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="32" r="30" fill="#1A1F4B" stroke="#7C6CC4" strokeWidth="2" />
              <circle cx="32" cy="32" r="20" fill="none" stroke="#D4910F" strokeWidth="2" />
              <circle cx="32" cy="32" r="10" fill="#0F8B5F" />
              <circle cx="44" cy="20" r="4" fill="#E8553D" />
            </svg>
          </div>
          <span className="text-coral font-bold tracking-widest text-xs uppercase">
            Theodo GovTech
          </span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold leading-tight">{title}</h1>
        <p className="text-blue-200 mt-1 text-sm md:text-base">{subtitle}</p>
      </div>
      <div className="text-right">
        <span className="bg-white/10 border border-white/20 rounded-full px-4 py-1 text-sm font-medium text-blue-100">
          Actualisation {date}
        </span>
      </div>
    </div>
  </header>
);

export default Header;
