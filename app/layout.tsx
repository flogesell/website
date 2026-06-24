import type { Metadata } from 'next';
import './globals.css';
import Script from 'next/script';

const BASE_URL = 'https://flogesell.de';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Flo Gesell – IT-Consultant & Fullstack Developer',
    template: '%s | Flo Gesell',
  },
  description:
    'IT-Consultant and Fullstack Developer at uniqbit AG. Specializing in React, Next.js, Angular and React Native. Guest lecturer at TH Augsburg. Based in Augsburg, Germany.',
  keywords: [
    'Flo Gesell',
    'Florian Gesell',
    'IT-Consultant',
    'Fullstack Developer',
    'React',
    'Next.js',
    'Angular',
    'React Native',
    'TypeScript',
    'uniqbit',
    'Augsburg',
    'Web Developer',
    'Mobile Developer',
  ],
  authors: [{ name: 'Florian Gesell', url: BASE_URL }],
  creator: 'Florian Gesell',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'Flo Gesell',
    title: 'Flo Gesell – IT-Consultant & Fullstack Developer',
    description:
      'IT-Consultant and Fullstack Developer at uniqbit AG. Building web and mobile apps with React, Next.js and Angular. Guest lecturer at TH Augsburg.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flo Gesell – IT-Consultant & Fullstack Developer',
    description:
      'IT-Consultant and Fullstack Developer at uniqbit AG. Building web and mobile apps with React, Next.js and Angular.',
  },
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
        data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
      />
      <body>{children}</body>
    </html>
  );
}
