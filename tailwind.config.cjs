/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "992px" },
      md: { max: "768px" },
      sm: { max: "576px" },
      min2xl: { min: "1535px" },
    },
  },
  plugins: [],
};
