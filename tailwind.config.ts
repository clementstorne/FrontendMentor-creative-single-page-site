import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      red: "#F94F4F",
      "red-hover": "#FF9393",
      gray: "#191921",
      "gray-hover": "#434356",
      white: "#ffffff",
      "text-black": "#000000",
    },
    fontSize: {
      sm: ["16px", "19px"],
      base: ["18px", "32px"],
      lg: ["20px", "32px"],
      xl: ["56px", "64px"],
      "2xl": ["80px", "88px"],
    },
    extend: {
      spacing: {
        "5.5": "22px",
        "6.25": "25px",
        "6.5": "26px",
        "8.75": "35px",
      },
    },
  },
  plugins: [],
};
export default config;
