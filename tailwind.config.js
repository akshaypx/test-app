/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      grayScaleBlack: "#1E222B",
      black100: "#1B262E",
      black90: "#354349",
      black60: "#606D76",
      gray03: "#8891A5",
      black45: "#A9B4BC",
      black20: "#C5CDD2",
      black10: "#E7ECF0",
      black1: "#F8F9FB",
      primary: "#2A4BA0",
      primary2: "#153075",
      secondary: "#F9B023",
      secondary2: "#FFC83A",
      grayScaleBlack06: "#FAFBFD",
      grayScaleBlack02: "#616A7D",
    },
  },
  plugins: [],
};
