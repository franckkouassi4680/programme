import type { Config } from "tailwindcss";
const config: Config = { darkMode: "class", content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"], theme: { extend: { colors: { brand: "#7C3AED", ink: "#1F2937" }, boxShadow: { soft: "0 18px 45px rgba(31, 41, 55, .08)" } } }, plugins: [] };
export default config;
