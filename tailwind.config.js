/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#1DC989",
        surface: "#F5F7FF",
        textPrimary: "#1F477D",
        textSecondary: "#597DAE",
        dull: "#BCBCBC",
      },
      fontFamily: {
        sans: ["Outfit"],
      },
    },
  },
  plugins: [],
};
