import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#3ADC90",
        green_dark: "#0f5b38",
        green_hover: "#45e298",
        green_light: "#eefff7",
        blue: "#3A68DC",
        blue_hover: "#4c78e8",
        red: "#DC3A3A",
        red_dark: "#6b1010",
        red_hover: "#bb2d2d",
        red_light: "#fdf1f1",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
