import type { Metadata } from 'next';
import './globals.css';
import { Bricolage_Grotesque } from 'next/font/google';

// Load font with a CSS variable
const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bricolage',
});

export const metadata: Metadata = {
  title: 'Bookmaarks',
  description: 'AI-powered bookmark manager that auto-tags, summarizes, and sorts — so you dont have to.',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={bricolage.variable}>
      <body>{children}</body>
    </html>
  );
}
