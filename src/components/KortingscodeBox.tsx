import Link from '@/components/TaalLink';

// Herbruikbare deal-box voor gesponsorde content. Toont géén kortingscode:
// de korting geldt automatisch via de affiliate-link, zodat de bezoeker
// verplicht via de CTA naar /ga/<partnerSlug> klikt en de klik telt.
// rel consistent met de andere Factor-CTA's.
export default function KortingscodeBox({
  partnerSlug = 'factor',
  ctaTekst,
  taal = 'nl',
}: {
  partnerSlug?: string;
  ctaTekst: string;
  taal?: 'nl' | 'fr';
}) {
  return (
    <div style={{ background: 'linear-gradient(180deg, #FFFBEB 0%, #FFFFFF 70%)', border: '1.5px solid #FCD34D', borderRadius: 14, padding: '20px 22px', margin: '28px 0' }}>
      <div style={{ fontSize: 13, color: '#4B5563', marginBottom: 14, lineHeight: 1.5 }}>{taal === 'fr' ? 'La réduction est appliquée automatiquement via notre lien — aucun code à saisir.' : 'De korting wordt automatisch toegepast via onze link — je hoeft geen code in te voeren.'}</div>
      <Link data-plaatsing="blog-kortingsbox" href={`/ga/${partnerSlug}`} rel="noopener sponsored nofollow" style={{ display: 'inline-block', background: '#B45309', color: 'white', padding: '13px 24px', borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
        {ctaTekst} →
      </Link>
    </div>
  );
}
