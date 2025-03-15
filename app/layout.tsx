import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";

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
      <Head>
        <script
          defer
          src="https://umami.flogesell.de/script.js"
          data-website-id="56d98434-216d-48f3-bdcf-237c510839ba"
        ></script>
      </Head>
      <body>{children}</body>
    </html>
  );
}
