/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#cbd2d0',
          DEFAULT: '#3a3a3a',
          dark: '#212121'
        },
        secondary: '#fcab10',
      },
    },
  },
  plugins: [],
};
