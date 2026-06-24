import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ha: {
          bg: "#f3f1ea",
          surface: "#fffdf9",
          "surface-raised": "#faf8f3",
          "surface-card": "#f7f5ef",
          text: "#1a1a1a",
          muted: "#5c6b63",
          border: "#cfd9d2",
          "border-strong": "#b8c5bc",
          navy: "#14213d",
          green: "#2d4636",
          orange: "#d36b31",
        },
        italy: {
          green: { DEFAULT: "#009246", dark: "#007A3A" },
          red: { DEFAULT: "#CE2B37", dark: "#B02530" },
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        ha: "0 10px 36px rgba(20, 33, 61, 0.11)",
        "ha-soft": "0 2px 14px rgba(20, 33, 61, 0.07)",
      },
    },
  },
  plugins: [],
};

export default config;
