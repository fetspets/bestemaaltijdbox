import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';

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
  verification: {
    google: 'dgD6dFbp4JHPwAeuIu27zU6WTq1wEII8Sj_RsjngfgA',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,700;0,9..144,900;1,9..144,700&family=DM+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
         <Script
    id="organization-schema"
    type="application/ld+json"
    strategy="beforeInteractive"
  >
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "BesteMaaltijdbox",
      "url": "https://www.bestemaaltijdbox.be",
      "logo": "https://www.bestemaaltijdbox.be/logo.png"
    })}
  </Script>
        <Navbar />
        <main>{children}</main>
        <Footer />
         {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-MPESC3XFFN" />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-MPESC3XFFN');
        `}} />
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: `
          var _TradeTrackerTagOptions = {
            t: 'a',
            s: '507243',
            chk: '13932be1a3acb66bb8b510c670298bb4',
            overrideOptions: {}
          };
          (function() {var tt = document.createElement('script'), s = document.getElementsByTagName('script')[0]; tt.setAttribute('type', 'text/javascript'); tt.setAttribute('src', (document.location.protocol == 'https:' ? 'https' : 'http') + '://tm.tradetracker.net/tag?t=' + _TradeTrackerTagOptions.t + '&s=' + _TradeTrackerTagOptions.s + '&chk=' + _TradeTrackerTagOptions.chk); s.parentNode.insertBefore(tt, s);})();
        `}} />
      </body>
    </html>
  );
}
