/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderColor: {
        primary: "rgb(85 81 227)",
        secondary: "#2b2d77",
      },

      animation: {
        gradient: "gradientMove 6s ease infinite",
        "pulse-slow": "pulseSlow 8s ease-in-out infinite",
      },

      keyframes: {
        gradientMove: {
          "0%, 100%": { transform: "translate(0px, 0px)" },
          "50%": { transform: "translate(-20px, 20px)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: 0.4 },
          "50%": { opacity: 0.8 },
        },
      },

      fontFamily: {
        "hero-font": "Sriracha",
      },
    },
  },
  plugins: [],
};
