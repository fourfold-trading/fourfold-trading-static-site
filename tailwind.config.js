/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./public/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FFFBF5",
          100: "#FFF6E9",
          200: "#FBEBD1",
        },
        spice: {
          50: "#FDF1EB",
          100: "#FADFCF",
          300: "#E39A6B",
          500: "#C1622D",
          600: "#A64E22",
          700: "#853D1A",
        },
        turmeric: {
          400: "#E8B23D",
          500: "#D89B23",
        },
        espresso: {
          600: "#4A3327",
          700: "#3A2A20",
          800: "#2B1F17",
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
