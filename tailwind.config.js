/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ecf4f9",
        secondary: "#d1d9e6",
        blue: "#0c1030",
        darkblue: "#0c1030",
        light: "#535151",
        white: "#fff",
      },
      animation: {
        fadeIn: "show 600ms ease-in-out",
        fadeInSlow: "show 1000ms ease-in-out",
        fadeOut: "hide 600ms ease-in-out",
        fadeOutSlow: "hide 1000ms ease-in-out",
      },
      keyframes: {
        show: {
          from: {
            transform: "translateY(100%)",
          },
          to: {
            transform: "translateY(0%)",
          },
        },
        hide: {
          from: {
            transform: "translateY(0%)",
          },
          to: {
            transform: "translateY(100%)",
          },
        },
      },
    },
  },
  plugins: [],
};
