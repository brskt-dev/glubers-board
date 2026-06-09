import type { Metadata } from "next";
import { Press_Start_2P, VT323 } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/AppShell";

// Fonte pixel para títulos/labels e fonte retrô para o corpo do texto.
// Self-hosted via next/font (sem requisição externa em runtime, sem layout shift).
const fontPixel = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
});

const fontBody = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Glubers Board — Inverno Eterno",
    template: "%s · Glubers Board",
  },
  description:
    "Companion board do servidor Minecraft dos Glubers: missões, objetivos da colônia, crônicas e players da vila congelada.",
  applicationName: "Glubers Board",
  keywords: [
    "Glubers",
    "Minecraft",
    "colônia",
    "inverno eterno",
    "missões",
    "crônicas",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${fontPixel.variable} ${fontBody.variable}`}>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
