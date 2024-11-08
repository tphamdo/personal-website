/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        extraLight: ['ExtraLight'],
        light: ['Light'],
        thin: ['Thin'],
        medium: ['Medium'],
        regular: ['Regular'],
        semibold: ['SemiBold'],
        bold: ['Bold'],
        extrabold: ['ExtraBold'],
      },
    },
  },
  plugins: [],
};
