/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },

      colors: {
        orange: {
          100: "#f9e6e6",
          200: "#f3cdcd",
          300: "#ecb3b5",
          400: "#e69a9c",
          500: "#e08183",
          600: "#b36769",
          700: "#864d4f",
          800: "#5a3434",
          900: "#2d1a1a",
        },

        black: {
          100: "#fff7f1",
          200: "#fff0e2",
          300: "#ffe8d4",
          400: "#ffe1c5",
          500: "#ffd9b7",
          600: "#ccae92",
          700: "#99826e",
          800: "#665749",
          900: "#332b25",
        },

        gray: {
          100: "#e5eee9",
          200: "#cbddd3",
          300: "#b2ccbe",
          400: "#98bba8",
          500: "#7eaa92",
          600: "#658875",
          700: "#4c6658",
          800: "#32443a",
          900: "#19221d",
        },
      },
    },
  },
  plugins: [],
};
