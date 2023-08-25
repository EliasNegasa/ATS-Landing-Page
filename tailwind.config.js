/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      purple: '#565BEF',
      'light-purple': '#A722F4',
      blue: '#2e10b6',
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
      transparent: colors.transparent,
      body: '#6f7c8a',
    },
    fontFamily: {
      rubik: "'Rubik', sans-serif",
      mulish: "'Mulish', sans-serif",
    },
    extend: {
      fontSize: {
        '4.5xl': '2.5rem',
      },
    },
  },
  plugins: [],
};
