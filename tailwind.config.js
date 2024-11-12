/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{js,html}"],
  theme: {
    extend: {
      fontFamily: {
        anton: ["Anton", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        yellow: "#ffd15b",
        grey: "#7A7A7A",
        lightGrey: "#EDEDED",
      },
    },
  },
  plugins: [],
};
