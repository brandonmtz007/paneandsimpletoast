import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B1626",
        glass: {
          deep: "#194B6E",
          mid: "#3E82AC",
          light: "#7FB4D6",
          foam: "#F4FAFF",
        },
        suds: "#E7F3FA",
        steel: "#8C97A5",
        sunlit: "#E2A233",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      backgroundImage: {
        "glass-gradient":
          "linear-gradient(135deg, #164567 0%, #3E82AC 55%, #7FB4D6 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
