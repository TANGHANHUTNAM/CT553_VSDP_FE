/** @type {import('tailwindcss').Config} */
import { COLOR_PRIMARY } from "./src/constant/colorCustomize";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: COLOR_PRIMARY,
      },
    },
  },
  plugins: [],
};
