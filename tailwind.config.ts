import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#3ADC90",
        green_hover: "#45e298",
        green_light: "#eefff7",
        blue: "#3A68DC",
        blue_hover: "#4c78e8",
        red: "#DC3A3A",
        red_hover: "#bb2d2d",
        red_light: "#fdf1f1",
      },
    },
  },
  plugins: [],
};
export default config;
