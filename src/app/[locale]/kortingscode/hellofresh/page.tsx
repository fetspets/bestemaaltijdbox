import Link from 'next/link';
import { LAATST_BIJGEWERKT } from '@/lib/site';

// De metadata voor deze route staat in layout.tsx. Stond hier eerder ook,
// met een afwijkende titel; Next koos dan deze en de layout-versie was dood.

export default function HelloFreshKortingscode() {
  return (
    <div style={{ maxWidth: 680, margin: '0 auto', padding: '40px 20px 64px' }}>

      {/* Breadcrumb */}
      <div style={{ fontSize: 13, color: '#9CA3AF', marginBottom: 28, display: 'flex', flexWrap: 'wrap', gap: '2px 4px', alignItems: 'center' }}>
        <Link href="/" style={{ color: '#9CA3AF', textDecoration: 'none', whiteSpace: 'nowrap' }}>Home</Link>
        <span aria-hidden="true">→</span>
        <Link href="/kortingscodes" style={{ color: '#9CA3AF', textDecoration: 'none', whiteSpace: 'nowrap' }}>Kortingscodes</Link>
        <span aria-hidden="true">→</span>
        <strong style={{ color: '#1C1C1C', whiteSpace: 'nowrap' }}>HelloFresh kortingscode</strong>
      </div>

      {/* Badge */}
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#FEF3C7', border: '1px solid #FCD34D', borderRadius: 100, padding: '5px 14px', fontSize: 12, fontWeight: 700, color: '#92400E', marginBottom: 16 }}>
        🔥 Tijdelijke actie · {LAATST_BIJGEWERKT}
      </div>

      {/* H1 */}
      <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(24px, 5vw, 36px)', fontWeight: 900, color: '#1C1C1C', lineHeight: 1.15, marginBottom: 12 }}>
        HelloFresh kortingscode {LAATST_BIJGEWERKT} — tot €60 korting op je eerste 3 boxen
      </h1>

      <p style={{ fontSize: 15, color: '#4B5563', lineHeight: 1.7, marginBottom: 28 }}>
        HelloFresh geeft nieuwe klanten momenteel{' '}
        <strong>tot €60 korting verdeeld over je eerste 3 boxen</strong>. De korting wordt{' '}
        <strong>automatisch toegepast via onze link</strong> — je hoeft geen code in te voeren.
        Exclusief voor nieuwe klanten in België.
      </p>

      {/* Promo-kaart */}
      <div style={{
        background: 'linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)',
        border: '2px solid #86EFAC',
        borderRadius: 20, padding: '28px 24px', textAlign: 'center', marginBottom: 24,
      }}>
        <div style={{ fontSize: 40, marginBottom: 10 }}>🥗</div>
        <div style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(20px, 5vw, 28px)', fontWeight: 900, color: '#1B4332', lineHeight: 1.2, marginBottom: 8 }}>
          Tot €60 korting op je eerste 3 boxen
        </div>
        <div style={{ fontSize: 14, color: '#4B5563', marginBottom: 20, lineHeight: 1.6 }}>
          Automatisch toegepast via onze link · geen code nodig
        </div>
        <Link
          href="/ga/hellofresh"
          rel="noopener sponsored nofollow"
          style={{
            display: 'block', background: '#1B4332', color: 'white',
            textAlign: 'center', padding: '15px 20px', borderRadius: 12,
            fontWeight: 700, fontSize: 16, textDecoration: 'none',
            marginBottom: 10,
          }}
        >
          Activeer deal &amp; ga naar HelloFresh →
        </Link>
        <div style={{ fontSize: 12, color: '#6B7280', lineHeight: 1.5 }}>
          Korting verdeeld over je eerste 3 boxen · enkel nieuwe klanten
        </div>
      </div>

      {/* Stappenplan */}
      <div style={{ marginBottom: 32 }}>
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 16, color: '#1C1C1C' }}>
          Hoe activeer je de korting?
        </h2>
        <ol style={{ paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            'Klik op "Activeer deal" hierboven.',
            'Je wordt doorgestuurd naar HelloFresh — geen code nodig, de korting staat klaar via onze link.',
            'Meld je aan als nieuwe klant en stel je eerste box samen.',
            'De korting wordt automatisch verdeeld over je eerste 3 boxen — samen tot €60 voordeel.',
          ].map((stap, i) => (
            <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 14, color: '#4B5563', lineHeight: 1.6, background: 'white', border: '1px solid #E8E3DC', borderRadius: 10, padding: '12px 14px' }}>
              <span style={{ width: 24, height: 24, borderRadius: '50%', background: '#1B4332', color: 'white', fontWeight: 800, fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {i + 1}
              </span>
              {stap}
            </li>
          ))}
        </ol>
      </div>

      {/* Voorwaarden */}
      <div style={{ background: 'white', border: '1.5px solid #E5E7EB', borderRadius: 12, padding: 20, marginBottom: 32 }}>
        <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: 16, fontWeight: 800, marginBottom: 12, color: '#1C1C1C' }}>
          Actievoorwaarden (samenvatting)
        </h3>
        <ul style={{ paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
          {[
            'Exclusief voor nieuwe klanten of klanten die >1 jaar geleden hebben opgezegd',
            'Kortingsverdeling over je eerste 3 boxen: €27,50 + €10 + €7,50 (= €45 effectief, door HelloFresh gecommuniceerd als "tot €60")',
            'Eerste bezorging gratis, daarna worden bezorgkosten aangerekend',
            'Korting vervalt 70 dagen na bestelling van je 1e box',
            'Wekelijks opzegbaar + 14 dagen herroepingsrecht',
          ].map((v, i) => (
            <li key={i} style={{ fontSize: 13, color: '#4B5563', display: 'flex', gap: 8 }}>
              <span style={{ color: '#1B4332', fontWeight: 700, flexShrink: 0 }}>✓</span>
              {v}
            </li>
          ))}
        </ul>
      </div>

      {/* Over HelloFresh */}
      <div style={{ marginBottom: 32 }}>
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 12, color: '#1C1C1C' }}>
          Waarom HelloFresh?
        </h2>
        <p style={{ fontSize: 15, color: '#4B5563', lineHeight: 1.7, marginBottom: 12 }}>
          HelloFresh is de grootste maaltijdbox ter wereld en ook in België de populairste keuze.
          Met meer dan 40 recepten per week, gratis bezorging en een score van 8,4/10 op deze site
          biedt het de beste balans tussen prijs, variatie en gemak. Bereidingstijd gemiddeld 25–35 minuten.
        </p>
        <Link href="/aanbieder/hellofresh" style={{ fontSize: 14, fontWeight: 700, color: '#1B4332', textDecoration: 'underline' }}>
          Lees onze volledige HelloFresh review →
        </Link>
      </div>

      <Link href="/kortingscodes" style={{ fontSize: 14, color: '#9CA3AF', textDecoration: 'none' }}>
        ← Alle kortingscodes bekijken
      </Link>
    </div>
  );
}
