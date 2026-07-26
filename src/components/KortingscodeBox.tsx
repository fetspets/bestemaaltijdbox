import Link from 'next/link';
import { getAanbieder } from '@/lib/aanbieders';

// Herbruikbare kortingscode-box voor gesponsorde content. Toont de code
// prominent (uit de databron `aanbieders.ts` → kortingsCode.code, niet hardcoded)
// met een CTA naar /ga/<partnerSlug>. rel consistent met de andere Factor-CTA's.
export default function KortingscodeBox({
  partnerSlug = 'factor',
  ctaTekst,
}: {
  partnerSlug?: string;
  ctaTekst: string;
}) {
  const aanbieder = getAanbieder(partnerSlug);
  const code = aanbieder?.kortingsCode?.code;

  return (
    <div style={{ background: 'linear-gradient(180deg, #FFFBEB 0%, #FFFFFF 70%)', border: '1.5px solid #FCD34D', borderRadius: 14, padding: '20px 22px', margin: '28px 0' }}>
      {code && (
        <>
          <div style={{ fontSize: 12, fontWeight: 600, color: '#92400E', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>Kortingscode</div>
          <div style={{ fontFamily: 'monospace', fontSize: 28, fontWeight: 900, color: '#B45309', letterSpacing: '0.05em', marginBottom: 6 }}>{code}</div>
          <div style={{ fontSize: 13, color: '#4B5563', marginBottom: 14, lineHeight: 1.5 }}>Automatisch toegepast via onze link — je hoeft de code niet zelf in te voeren.</div>
        </>
      )}
      <Link href={`/ga/${partnerSlug}`} rel="noopener sponsored nofollow" style={{ display: 'inline-block', background: '#B45309', color: 'white', padding: '13px 24px', borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
        {ctaTekst} →
      </Link>
    </div>
  );
}
