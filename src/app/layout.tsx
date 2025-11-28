import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MEIFlow - Gestão Inteligente para MEIs",
  description: "Plataforma de gestão desenvolvida para atender microempreendedores individuais (MEIs) que precisam de uma solução simples, acessível e eficiente para organizar suas operações.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  );
}
