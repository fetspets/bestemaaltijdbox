// Herbruikbaar label voor betaalde/gesponsorde plaatsingen.
// Volgt het bestaande pill/badge-patroon (zie src/app/page.tsx badge en de
// "✓ Actief"-pill in src/app/kortingscodes/page.tsx). Altijd in of direct boven
// het gesponsorde element, met leesbaar contrast.

export default function GesponsordLabel({
  variant = 'op-licht',
  tekst = 'Gesponsord',
}: {
  variant?: 'op-licht' | 'op-donker';
  tekst?: string;
}) {
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
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        padding: '2px 8px',
        borderRadius: 100,
        whiteSpace: 'nowrap',
        ...stijl,
      }}
    >
      {tekst}
    </span>
  );
}
