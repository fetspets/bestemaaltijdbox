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
    url: 'https://bestemaaltijdbox.be',
    siteName: 'BesteMaaltijdbox.be',
    locale: 'nl_BE',
    type: 'website',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://bestemaaltijdbox.be' },
  verification: {
    google: 'dgD6dFbp4JHPwAeuIu27zU6WTq1wEII8Sj_RsjngfgA',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-48x48.png', type: 'image/png', sizes: '48x48' },
    ],
    apple: '/favicon-180x180.png',
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "BesteMaaltijdbox",
            "url": "https://bestemaaltijdbox.be",
            "logo": "https://bestemaaltijdbox.be/favicon-180x180.png"
          })}}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MPESC3XFFN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MPESC3XFFN');
          `}
        </Script>

        {/* TradeTracker */}
        <Script id="tradetracker" strategy="afterInteractive">
          {`
            var _TradeTrackerTagOptions = {
              t: 'a',
              s: '507243',
              chk: '13932be1a3acb66bb8b510c670298bb4',
              overrideOptions: {}
            };
            (function() {
              var tt = document.createElement('script'),
                s = document.getElementsByTagName('script')[0];
              tt.setAttribute('type', 'text/javascript');
              tt.setAttribute('src', (document.location.protocol == 'https:' ? 'https' : 'http') + '://tm.tradetracker.net/tag?t=' + _TradeTrackerTagOptions.t + '&s=' + _TradeTrackerTagOptions.s + '&chk=' + _TradeTrackerTagOptions.chk);
              s.parentNode.insertBefore(tt, s);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}