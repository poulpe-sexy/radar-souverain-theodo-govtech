/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#1A1F4B',
        brandBlue: '#2D6A9F',
        coral: '#E8553D',
        lightbg: '#F5F7FA',
        darktext: '#111827',
        graytext: '#6B7280',
        lightborder: '#E5E7EB',
        ringAdopt: '#0F8B5F',
        ringTrial: '#D4910F',
        ringAssess: '#7C6CC4',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Trebuchet MS', 'Calibri', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
