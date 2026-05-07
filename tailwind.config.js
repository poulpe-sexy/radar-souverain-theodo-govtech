import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    resolve(__dirname, 'index.html'),
    resolve(__dirname, 'src/**/*.{js,ts,jsx,tsx}'),
  ],
  theme: {
    extend: {
      colors: {
        darkest: '#1D2939',
        dark: '#294F73',
        secondary: '#FF512C',
        'secondary-light': '#FFBFA8',
        'grey-050': '#F6F7F8',
        'grey-100': '#EAECF0',
        'grey-200': '#D0D5DD',
        'grey-400': '#98A2B3',
        'grey-500': '#667085',
        'grey-600': '#5A5E73',
        adopt: '#0F8B5F',
        trial: '#D4910F',
        assess: '#7C6CC4',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
