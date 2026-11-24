import Link from '@/components/TaalLink';

/** Compacte verwijzing naar de keuzetest, voor situatiepagina's, gidsen en algemene blogs. */
export default function QuizTeaser({ taal }: { taal: 'nl' | 'fr' }) {
  const fr = taal === 'fr';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', background: '#FFFBEB', border: '1.5px solid #FCD34D', borderRadius: 14, padding: '16px 18px', margin: '32px 0' }}>
      <div style={{ fontSize: 30 }} aria-hidden="true">🧭</div>
      <div style={{ flex: '1 1 220px' }}>
        <div style={{ fontFamily: 'Fraunces, serif', fontSize: 17, fontWeight: 900, color: '#1C1C1C', marginBottom: 2 }}>
          {fr ? 'Vous hésitez encore ?' : 'Twijfel je nog?'}
        </div>
        <div style={{ fontSize: 14, color: '#4B5563', lineHeight: 1.5 }}>
          {fr ? '7 questions, 1 minute : découvrez quelle box repas vous convient.' : '7 vragen, 1 minuut: ontdek welke maaltijdbox bij jou past.'}
        </div>
      </div>
      <Link href="/welke-maaltijdbox" data-plaatsing="quiz-teaser" style={{ background: '#1B4332', color: 'white', padding: '10px 16px', borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none', whiteSpace: 'nowrap' }}>
        {fr ? 'Faire le test →' : 'Doe de test →'}
      </Link>
    </div>
  );
}
