/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e6e7ee",
        secondary: "#d1d9e6",
        "blue-000": "#e0e0ff",
        "blue-100": "#b2b2ff",
        "blue-200": "#31344b",
        "blue-300": "#44476a",
        light: "#535151",
        white: "#fff",
      },
    },
  },
  plugins: [],
};
