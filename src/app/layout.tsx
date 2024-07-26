import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brainwave",
  description: "Brainwave, o software completo baseado em inteligência artificial 4.0",
  icons: {
      icon: "/favicon/favicon.svg",
      shortcut: "/favicon/favicon.svg"
  },
  authors: {
      name: "Bruno Carvalho Feitosa",
      url: "https://br.linkedin.com/in/bruno-carvalho-feitosa"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
