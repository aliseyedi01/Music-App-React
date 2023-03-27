/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light_bg_Main: "#e9e7e7",
        light_bg_Side: "#d3cfcf",
        light_txt_Main: "#632c3b",
        dark_bg_Main: "#212121",
        dark_bg_Side: "#171618",
        dark_bg_Second: "#171618",
        dark_txt_Main: "#dca54c",
      },
      fontFamily: {
        Lemon: ['"Lemon"', "serif"],
        Lobster: ['"Lobster"', "serif"],
        Ubuntu: ['"Ubuntu"', "serif"],
        Montserrat: ['"Montserrat Alternates"', "sans-serif"],
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
