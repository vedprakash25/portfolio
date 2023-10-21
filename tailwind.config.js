/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e6e7ee",
        secondary: "#d1d9e6",
        blue: "#44476a",
        light: "#535151",
        white: "#fff",
      },
      animation: {
        fadeIn: "show 600ms ease-in-out",
        fadeInSlow: "show 1000ms ease-in-out",
      },
      keyframes: {
        show: {
          from: {
            transform: "translateY(100%)"
          },
          to: {
            opacity: "translateY(0%)"
          }
        }
      }

    },
  },
  plugins: [],
};
