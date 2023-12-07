/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          "bright-blue": "#3a7bfd",
          "gradient-start": "#57ddff",
          "gradient-end": "#c058f3",
        },
        scheme: {
          light: {
            100: "#fafafa",
            200: "#e4e5f1",
            300: "#d2d3db",
            400: "#9394a5",
            500: "#484b6a",
          },
          dark: {
            100: "#161722",
            200: "#25273c",
            300: "#cacde8",
            400: "#e4e5f1",
            500: "#777a92",
            600: "#4d5066",
            700: "#393a4c",
          },
        },
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "5rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
