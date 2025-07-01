import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Minecraft Bingo",
  description: "Simple Minecraft bingo generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
