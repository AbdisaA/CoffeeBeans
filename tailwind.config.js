// import "@material-tailwind/react";

// /** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#793D29",
        secondary: "#4F1809",
        hakimBrand: "#2F0C03",
      },
      fontFamily: {
        cursive: "cursive",
      },
    },
  },
  plugins: [],
};
