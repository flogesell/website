import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
