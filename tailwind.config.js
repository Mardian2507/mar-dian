/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        bg1: "url('/assets/bg1.webp')",
        bg2: "url('/assets/bg2.webp')",
      },
      colors: {
        primary: "#5651e5",
        secondary: "#0f172a",
        light: "#f8fafc",
        danger: "#ef4444",
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const utilities = {
        ".bg-search": {
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' opacity='50' viewBox='0 0 35 35' stroke-width='2' stroke='currentColor' class='w-6 h-6'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z' /%3E%3C/svg%3E%0A")`,
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "right",
          backgroundPositionY: "4px",
        },
      };

      addUtilities(utilities);
    }),
  ],
};
