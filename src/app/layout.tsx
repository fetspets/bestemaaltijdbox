import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Beste Maaltijdbox België 2026 — Onafhankelijke Vergelijking',
    template: '%s | BesteMaaltijdbox.be',
  },
  description: 'Onafhankelijke vergelijking van alle maaltijdboxen in België. Reviews, prijzen en kortingscodes voor HelloFresh, Foodbag, Marley Spoon en meer.',
  keywords: ['beste maaltijdbox belgië', 'maaltijdbox vergelijken', 'hellofresh kortingscode', 'foodbag review', 'maaltijdbox 2026'],
  openGraph: {
    title: 'Beste Maaltijdbox België 2026',
    description: 'Onafhankelijke vergelijking van alle Belgische maaltijdboxen.',
    url: 'https://www.bestemaaltijdbox.be',
    siteName: 'BesteMaaltijdbox.be',
    locale: 'nl_BE',
    type: 'website',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.bestemaaltijdbox.be' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,700;0,9..144,900;1,9..144,700&family=DM+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
