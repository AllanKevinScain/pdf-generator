/** @type {import('tailwindcss').Config} */

import { theme } from "./src/assets/styles";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        ...theme,
      },
    },
  },
  plugins: [],
};
