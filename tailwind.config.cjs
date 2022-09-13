/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Nunito Sans", "sans-serif"],
    },
    fontWeight: {
      light: 300,
      regular: 400,
      "semi-bold": 600,
      "extra-bold": 800,
    },
    colors: {
      "dark-blue": "#2B3844",
      "very-dark-blue-dm": "#202C36",
      "very-dark-blue-lm": "#111517",
      "dark-gray": "#858585",
      "very-light-gray": "#f2f2f2",
      white: "#fff",
    },
    extend: {
      borderRadius: {
        5: "0.3125rem",
        6: "0.375rem",
      },
    },
  },
  plugins: [],
};
