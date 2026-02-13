import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        journal: {
          "lu-dark": "#0f172a",
          "lu-navy": "#1e3a5f",
          "k-light": "#eff6ff",
          "k-border": "#93c5fd",
          "k-accent": "#2563eb",
          "a-light": "#faf5ff",
          "a-border": "#c4b5fd",
          "a-accent": "#7c3aed",
          "prompt-bg": "#f0fdfa",
          "prompt-border": "#5eead4",
          "prompt-text": "#134e4a",
          "reflect-bg": "#fffbeb",
          "reflect-border": "#fde68a",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
