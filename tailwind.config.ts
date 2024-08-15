import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: "#030712",
      white: "#ffffff",
      blue:"#0284c7",
      "blue-2":"#0369a1",
      "lite-gray": "#f3f4f6",
      gray: "#6b7280",
      "dark-gray": "#111827",
      "lite-red": "#f87171",
      red: "#b91c1c",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: 'class',
};
export default config;
