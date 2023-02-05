/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e6e7ee",
        secondary: "#d1d9e6",
        "blue": "#44476a",
        light: "#535151",
        white: "#fff",
      },
    },
  },
  plugins: [],
};
