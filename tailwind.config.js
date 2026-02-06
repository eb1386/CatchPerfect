/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#e8edf5',
          100: '#c5d1e8',
          200: '#9fb2d9',
          300: '#7893ca',
          400: '#5a7bbe',
          500: '#3c63b2',
          600: '#2e4f94',
          700: '#1e3a6e',
          800: '#122752',
          900: '#0a1a3a',
          950: '#050e20',
        },
        gold: {
          50: '#fefbe8',
          100: '#fdf5c4',
          200: '#fce98c',
          300: '#fad74a',
          400: '#f7c619',
          500: '#e7ae0c',
          600: '#c78708',
          700: '#9f610a',
          800: '#834d10',
          900: '#703f14',
          950: '#412007',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
