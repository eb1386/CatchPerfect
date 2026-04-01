/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#fec205',
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#fec205',
          500: '#eab308',
          600: '#ca8a04',
          dark: '#17263a',
        },
      },
    },
  },
  plugins: [],
};
