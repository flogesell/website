import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Flo Gesell",
  description: "IT Consultant & Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        defer
        strategy="afterInteractive"
        async
        src="/stats/script.js"
        data-website-id="56d98434-216d-48f3-bdcf-237c510839ba"
      />
      <body>{children}</body>
    </html>
  );
}
