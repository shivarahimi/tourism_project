import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

import localFontImporter from "next/font/local";

const faFont = localFontImporter({
  src: "../../public/fonts/yekan-regular.woff",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className={faFont.className}>{children}</body>
    </html>
  );
}
