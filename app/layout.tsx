import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = { title: "Franck Personal Hub", description: "Votre espace personnel de pilotage." };
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space", display: "swap" });
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="fr"><body className={`${manrope.variable} ${spaceGrotesk.variable}`}>{children}</body></html>; }
