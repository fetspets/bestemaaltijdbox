import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';

export const metadata: Metadata = {
  title: {
    default: 'Beste maaltijdbox België 2026 – Vergelijk + tot €60 korting',
    template: '%s | BesteMaaltijdbox.be',
  },
  description: 'Vergelijk de beste maaltijdboxen in België (HelloFresh, Foodbag, Marley Spoon). Bekijk prijzen, reviews en kortingen tot €60 voor nieuwe klanten.',
  keywords: ['beste maaltijdbox belgië', 'maaltijdbox vergelijken', 'hellofresh kortingscode', 'foodbag review', 'maaltijdbox 2026'],
  openGraph: {
    title: 'Beste maaltijdbox België 2026 – Vergelijk + tot €60 korting',
    description: 'Vergelijk de beste maaltijdboxen in België (HelloFresh, Foodbag, Marley Spoon). Bekijk prijzen, reviews en kortingen tot €60 voor nieuwe klanten.',
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
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <meta name="impact-site-verification" value="ddc95da5-4d50-49e0-96be-d2667999833a" />
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

        {/* Impact */}
        <Script id="impact-tracking" strategy="afterInteractive">{`
          (function(i,m,p,a,c,t){c.ire_o=p;c[p]=c[p]||function(){(c[p].a=c[p].a||[]).push(arguments)};t=a.createElement(m);var z=a.getElementsByTagName(m)[0];t.async=1;t.src=i;z.parentNode.insertBefore(t,z)})('https://utt.impactcdn.com/P-A3156055-c1b3-48e7-b323-0b6e5e0452691.js','script','impactStat',document,window);impactStat('transformLinks');impactStat('trackImpression');
        `}</Script>

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