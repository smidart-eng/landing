import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F7F8FA",
        card: "#FFFFFF",
        text: "#0B0F17",
        muted: "#5B6475",
        border: "#E6E8EE",
        primary: {
          DEFAULT: "#183A8A",
          hover: "#142F6F",
        },
        accent: {
          DEFAULT: "#0F8A6A",
          hover: "#0C7459",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
        pill: "999px",
      },
      maxWidth: {
        container: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
