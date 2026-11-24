import type { Config } from "tailwindcss";
const config: Config = { darkMode: "class", content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"], theme: { extend: { colors: {
  brand: "#1687C9", ink: "#172B3C",
  violet: { 50: "#EFF9FD", 100: "#DDF2FA", 200: "#BCE5F4", 300: "#8BCFEA", 400: "#55B4DB", 500: "#2799CA", 600: "#1687C9", 700: "#0869A8", 800: "#0B5688", 900: "#10476F", 950: "#0B2F4B" },
  orange: { 50: "#FFF5EF", 100: "#FFE7D5", 200: "#FFD1B0", 300: "#FFB17E", 400: "#F58D53", 500: "#E96B3D", 600: "#D64C32", 700: "#B63A2B", 800: "#943226", 900: "#772D24", 950: "#42150F" }
}, boxShadow: { soft: "0 8px 28px rgba(28, 73, 101, .06)" } } }, plugins: [] };
export default config;
