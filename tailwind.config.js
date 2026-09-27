/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./public/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        // Deep indigo/purple night sky — page & card backgrounds
        night: {
          950: "#08051A",
          900: "#0F0A24",
          800: "#170F35",
          700: "#211648",
        },
        // Near-white lavender text tones (light-on-dark, WCAG AA checked)
        mist: {
          50: "#FBFAFF",
          100: "#F5F3FA",
          300: "#C9C2DE",
          400: "#A79FC7",
        },
        // Gold/amber — primary accent, CTAs, prices
        gold: {
          300: "#FDE68A",
          400: "#FBBF24",
          500: "#F5B700",
          600: "#D89B00",
        },
        // Festive red — secondary accent, warnings
        ember: {
          400: "#F2545B",
          500: "#E63946",
          600: "#C1121F",
          900: "#3A0A10",
        },
      },
      fontFamily: {
        display: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
