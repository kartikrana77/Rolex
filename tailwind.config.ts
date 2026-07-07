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
        background: "#050505",
        "background-secondary": "#0A0A0C",
        accent: {
          blue: "#0050FF",
          gold: "#FFD700",
        },
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(circle at center, #050505 0%, #050815 100%)",
        "cta-gradient": "linear-gradient(135deg, #0050FF 0%, #FFD700 100%)",
      },
      fontFamily: {
        sans: ["Inter", "SF Pro Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
