/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#cbcbff",
        secondary: "#d1d9e6",
        "blue-000": "#e0e0ff",
        "blue-100": "#b2b2ff",
        "blue-200": "#19528b",
        "blue-300": "#003f7f",
        light: "#535151",
      },
    },
  },
  plugins: [],
};
