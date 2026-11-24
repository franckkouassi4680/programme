import type { Config } from "tailwindcss";
const config: Config = { darkMode: "class", content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"], theme: { extend: { colors: {
  brand: "#1687C9", ink: "#172B3C",
  violet: { 50: "#EFF9FD", 100: "#DDF2FA", 200: "#BCE5F4", 300: "#8BCFEA", 400: "#55B4DB", 500: "#2799CA", 600: "#1687C9", 700: "#0869A8", 800: "#0B5688", 900: "#10476F", 950: "#0B2F4B" },
  orange: { 50: "#FFF5F1", 100: "#FFE6DC", 200: "#FFD0BE", 300: "#FFB096", 400: "#FA8967", 500: "#EF6846", 600: "#D94E32", 700: "#B73D2A", 800: "#963527", 900: "#7B3026", 950: "#43160F" }
}, boxShadow: { soft: "0 8px 28px rgba(28, 73, 101, .06)" } } }, plugins: [] };
export default config;
