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
  const stijl =
    variant === 'op-donker'
      ? { background: 'rgba(255,255,255,0.22)', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.35)' }
      : { background: '#FEF3C7', color: '#92400E', border: '1px solid #FCD34D' };

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
