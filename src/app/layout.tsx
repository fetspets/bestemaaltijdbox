import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import HelloFreshDealBanner from '@/components/HelloFreshDealBanner';
import SponsoredBanner from '@/components/SponsoredBanner';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import AffiliateTracker from '@/components/AffiliateTracker';
import Script from 'next/script';
import { isSponsoringActief } from '@/lib/sponsoring';
import { actieveAanbieders } from '@/lib/aanbieders';
import { LAATST_BIJGEWERKT } from '@/lib/site';
import { SITE_URL, SITE_NAAM, STANDAARD_LOCALE } from '@/lib/seo';

const aantalAanbieders = actieveAanbieders.length;

// ISR: elk uur herbouwen zodat de server-datum meeschuift en tijdelijke
// gesponsorde plaatsingen automatisch verdwijnen na hun einddatum, zonder
// rebuild en zonder de browserklok te gebruiken.
export const revalidate = 3600;

export const metadata: Metadata = {
  // Maakt relatieve URL's in openGraph en alternates mogelijk.
  metadataBase: new URL(SITE_URL),
  title: {
    default: `Beste maaltijdbox België 2026 — ${aantalAanbieders} boxen eerlijk vergeleken`,
    template: '%s | BesteMaaltijdbox.be',
  },
  description: `Vergelijk HelloFresh, Foodbag, Marley Spoon en ${aantalAanbieders - 3} anderen op prijs, smaak en kortingen. Onafhankelijk beoordeeld · bijgewerkt ${LAATST_BIJGEWERKT} · deals tot €60.`,
  keywords: ['beste maaltijdbox belgië', 'maaltijdbox vergelijken', 'hellofresh kortingscode', 'foodbag review', 'maaltijdbox 2026'],
  openGraph: {
    title: `Beste maaltijdbox België 2026 — ${aantalAanbieders} boxen eerlijk vergeleken`,
    description: `Vergelijk HelloFresh, Foodbag, Marley Spoon en ${aantalAanbieders - 3} anderen op prijs, smaak en kortingen. Onafhankelijk beoordeeld · bijgewerkt ${LAATST_BIJGEWERKT} · deals tot €60.`,
    url: '/',
    siteName: SITE_NAAM,
    locale: STANDAARD_LOCALE,
    type: 'website',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
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
  const bannerActief = isSponsoringActief('banner');

  return (
    <html lang="nl">
      <head>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <meta name="impact-site-verification" value="075beb09-740b-4a00-a981-14a75a9e2f6c" />
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
            "name": SITE_NAAM,
            "url": SITE_URL,
            "logo": `${SITE_URL}/favicon-180x180.png`
          })}}
        />
      </head>
      <body>
        <Navbar />
        {/* Factor-banner op de plaats van de HelloFresh-banner; die laatste
            wordt tijdelijk verborgen zolang de Factor-sponsoring loopt. */}
        <SponsoredBanner active={bannerActief} />
        {!bannerActief && <HelloFreshDealBanner />}
        <main>{children}</main>
        <Footer />
        <CookieBanner />
        <AffiliateTracker />

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
