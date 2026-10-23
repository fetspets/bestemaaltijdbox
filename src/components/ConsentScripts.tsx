'use client';
import { useEffect, useState } from 'react';
import Script from 'next/script';

/**
 * Laadt Google Analytics en TradeTracker PAS nadat de bezoeker in de cookiebanner
 * "alle cookies" aanvaardde (localStorage 'cookieConsent' === 'all').
 * Daarvoor laadden beide scripts altijd, ook bij "Alleen functioneel".
 */
export const CONSENT_EVENT = 'cookie-consent-gewijzigd';

function heeftToestemming(): boolean {
  try {
    return window.localStorage.getItem('cookieConsent') === 'all';
  } catch {
    return false;
  }
}

export default function ConsentScripts() {
  const [toestemming, setToestemming] = useState(false);

  useEffect(() => {
    const bijwerken = () => setToestemming(heeftToestemming());
    bijwerken();
    window.addEventListener(CONSENT_EVENT, bijwerken);
    window.addEventListener('storage', bijwerken);
    return () => {
      window.removeEventListener(CONSENT_EVENT, bijwerken);
      window.removeEventListener('storage', bijwerken);
    };
  }, []);

  if (!toestemming) return null;

  return (
    <>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-MPESC3XFFN"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
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
            tt.setAttribute('src', 'https://tm.tradetracker.net/tag?t=' + _TradeTrackerTagOptions.t + '&s=' + _TradeTrackerTagOptions.s + '&chk=' + _TradeTrackerTagOptions.chk);
            s.parentNode.insertBefore(tt, s);
          })();
        `}
      </Script>
    </>
  );
}
