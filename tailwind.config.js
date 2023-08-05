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
      },
    },
  },
  plugins: [],
};
