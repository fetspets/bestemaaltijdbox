'use client';
import { useState } from 'react';
import { useLocale } from 'next-intl';

/**
 * Toont een kortingscode pas nadat de bezoeker via onze affiliate-link naar
 * de aanbieder is gegaan.
 *
 * Foodbag en Foodprepper passen hun welkomstkorting niet automatisch toe: de
 * klant moet een code invullen. Staat die code gewoon op de pagina (of in het
 * zoekresultaat), dan kopieert een deel van de bezoekers ze en gaat rechtstreeks
 * naar de aanbieder — zonder klik, dus zonder commissie. Daarom:
 *  - de knop is een gewone link naar /ga/<slug> in een nieuw tabblad, zodat de
 *    affiliate-cookie gezet is vóór iemand de code ziet (en de klik geteld wordt
 *    door AffiliateTracker);
 *  - de code zit base64-gecodeerd in de props, zodat ze niet als leesbare tekst
 *    in de HTML staat en Google ze niet in een snippet kan tonen.
 */
export default function CodeOnthullen({
  slug,
  codeB64,
  naam,
  taal,
  plaatsing,
  compact = false,
}: {
  slug: string;
  codeB64: string;
  naam: string;
  taal?: 'nl' | 'fr';
  plaatsing: string;
  compact?: boolean;
}) {
  const [code, setCode] = useState<string | null>(null);
  const [gekopieerd, setGekopieerd] = useState(false);
  const locale = useLocale();
  const fr = (taal ?? locale) === 'fr';

  const codeVak = {
    display: 'inline-block',
    fontFamily: 'monospace',
    fontSize: compact ? 15 : 20,
    fontWeight: 800,
    letterSpacing: '0.08em',
    padding: compact ? '6px 12px' : '8px 16px',
    border: '2px dashed currentColor',
    borderRadius: 8,
    background: 'white',
    color: '#111827',
  } as const;

  if (code) {
    const kopieer = async () => {
      try {
        await navigator.clipboard.writeText(code);
        setGekopieerd(true);
      } catch {
        /* klembord geblokkeerd: de code staat zichtbaar, kopiëren kan manueel */
      }
    };
    return (
      <div style={{ marginTop: compact ? 6 : 14 }}>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
          <span style={codeVak}>{code}</span>
          <button
            type="button"
            onClick={kopieer}
            style={{ fontSize: 13, fontWeight: 700, padding: compact ? '6px 10px' : '9px 14px', borderRadius: 8, border: '1px solid #9CA3AF', background: 'white', cursor: 'pointer' }}
          >
            {gekopieerd ? (fr ? 'Copié ✓' : 'Gekopieerd ✓') : fr ? 'Copier' : 'Kopieer'}
          </button>
        </div>
        <div style={{ fontSize: 12, color: '#4B5563', marginTop: 8, lineHeight: 1.5 }}>
          {fr
            ? `${naam} s’est ouvert dans un nouvel onglet. Saisissez ce code lors du paiement.`
            : `${naam} is geopend in een nieuw tabblad. Vul deze code in bij het afrekenen.`}
        </div>
      </div>
    );
  }

  return (
    <div style={{ marginTop: compact ? 6 : 14 }}>
      <a
        href={`/ga/${slug}`}
        target="_blank"
        rel="noopener sponsored nofollow"
        data-plaatsing={plaatsing}
        onClick={() => {
          try {
            setCode(atob(codeB64));
          } catch {
            setCode('');
          }
        }}
        style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', color: 'inherit' }}
      >
        <span style={{ ...codeVak, color: '#9CA3AF', letterSpacing: '0.2em' }}>••••••</span>
        <span style={{ fontSize: compact ? 13 : 14, fontWeight: 700, padding: compact ? '7px 10px' : '10px 14px', borderRadius: 8, background: '#111827', color: 'white' }}>
          {fr ? 'Afficher le code' : 'Toon code'}
        </span>
      </a>
    </div>
  );
}

