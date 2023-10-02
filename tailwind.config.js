/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        carmesim: {
          '500': '#AA1515',
          '600': '#8B1414'
        },
        gray: {
          '100': '#E6E6E6',
          '300': '#C8C8C8',
          '600': '#3C3C3C',
          '900': '#272727'
        },
      }
    },
  },
  plugins: [],
};
