'use client';
import { useTranslations } from 'next-intl';
// Herbruikbaar label voor betaalde/gesponsorde plaatsingen.
// Volgt het bestaande pill/badge-patroon (zie src/app/page.tsx badge en de
// "✓ Actief"-pill in src/app/kortingscodes/page.tsx). Altijd in of direct boven
// het gesponsorde element, met leesbaar contrast.

export default function GesponsordLabel({
  variant = 'op-licht',
  tekst,
}: {
  variant?: 'op-licht' | 'op-donker';
  tekst?: string;
}) {
  const t = useTranslations('labels');
  const label = tekst ?? t('gesponsord');
  // Bewust subtiel gehouden (geen opvallende vulkleur), maar met leesbaar
  // contrast — de term "Gesponsord" moet duidelijk herkenbaar blijven.
  const stijl =
    variant === 'op-donker'
      ? { color: 'rgba(255,255,255,0.85)', border: '1px solid rgba(255,255,255,0.28)' }
      : { color: '#6B7280', border: '1px solid rgba(0,0,0,0.12)' };

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        fontSize: 9.5,
        fontWeight: 600,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        padding: '1px 7px',
        borderRadius: 100,
        whiteSpace: 'nowrap',
        background: 'transparent',
        ...stijl,
      }}
    >
      {label}
    </span>
  );
}
