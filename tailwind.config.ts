import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        italy: {
          green: { DEFAULT: "#009246", dark: "#007A3A" },
          white: { DEFAULT: "#FFFFFF" },
          red: { DEFAULT: "#CE2B37", dark: "#B02530" },
        },
        coral: { DEFAULT: "#FF6B6B", dark: "#E85555" },
        sunshine: { DEFAULT: "#FFD93D", dark: "#F0C419" },
        mint: { DEFAULT: "#6BCB77", dark: "#4FAF5A" },
        sky: { DEFAULT: "#4D96FF", dark: "#3A7DE0" },
        lavender: { DEFAULT: "#C77DFF", dark: "#A85FE0" },
      },
      fontFamily: {
        sans: ["var(--font-nunito)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
