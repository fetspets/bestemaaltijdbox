import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'HelloFresh kortingscode mei-juni 2026 — Gratis GreenPan™ + tot €60 korting',
  description: 'Activeer de HelloFresh welkomstdeal: gratis GreenPan™ braadpan t.w.v. tot €119,90 + tot €60 korting. Tijdelijke actie geldig t.e.m. 15 juni 2026 voor nieuwe klanten in België.',
  alternates: { canonical: 'https://www.bestemaaltijdbox.be/kortingscode/hellofresh' },
  openGraph: {
    title: 'HelloFresh kortingscode mei-juni 2026 — Gratis GreenPan™ + tot €60 korting',
    description: 'Activeer de HelloFresh welkomstdeal: gratis GreenPan™ braadpan t.w.v. tot €119,90 + tot €60 korting. Actie t.e.m. 15 juni 2026.',
    url: 'https://www.bestemaaltijdbox.be/kortingscode/hellofresh',
    type: 'article',
    locale: 'nl_BE',
  },
};

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
        🔥 Tijdelijke actie — t.e.m. 15 juni 2026
      </div>

      {/* H1 */}
      <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(24px, 5vw, 36px)', fontWeight: 900, color: '#1C1C1C', lineHeight: 1.15, marginBottom: 12 }}>
        HelloFresh kortingscode mei-juni 2026 — Gratis GreenPan™ + tot €60 korting
      </h1>

      <p style={{ fontSize: 15, color: '#4B5563', lineHeight: 1.7, marginBottom: 28 }}>
        HelloFresh heeft momenteel de sterkste welkomstdeal van alle Belgische maaltijdboxen:{' '}
        <strong>een gratis GreenPan™ braadpan t.w.v. tot €119,90</strong> plus{' '}
        <strong>tot €60 korting</strong> op je eerste boxen. Exclusief voor nieuwe klanten, geldig t.e.m. 15 juni 2026.
      </p>

      {/* Promo-kaart */}
      <div style={{
        background: 'linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)',
        border: '2px solid #86EFAC',
        borderRadius: 20, padding: '28px 24px', textAlign: 'center', marginBottom: 24,
      }}>
        <div style={{ fontSize: 40, marginBottom: 10 }}>🍳</div>
        <div style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(20px, 5vw, 28px)', fontWeight: 900, color: '#1B4332', lineHeight: 1.2, marginBottom: 8 }}>
          Gratis GreenPan™ + tot €60 korting
        </div>
        <div style={{ fontSize: 14, color: '#4B5563', marginBottom: 20, lineHeight: 1.6 }}>
          Pan t.w.v. tot €119,90 · totale waarde tot bijna €180
        </div>
        <Link
          href="/hellofresh-greenpan-kortingscode"
          style={{
            display: 'block', background: '#1B4332', color: 'white',
            textAlign: 'center', padding: '15px 20px', borderRadius: 12,
            fontWeight: 700, fontSize: 16, textDecoration: 'none',
            marginBottom: 10,
          }}
        >
          Toon kortingscode & activeer deal →
        </Link>
        <div style={{ fontSize: 12, color: '#6B7280', lineHeight: 1.5 }}>
          ⚠️ Gratis pan na minimaal 5 boxen binnen 8 weken
        </div>
      </div>

      {/* Stappenplan */}
      <div style={{ marginBottom: 32 }}>
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 16, color: '#1C1C1C' }}>
          Hoe activeer je de deal?
        </h2>
        <ol style={{ paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            'Klik op "Toon kortingscode & activeer deal" hierboven.',
            'Op de volgende pagina zie je de kortingscode na één klik onthullen.',
            'Meld je aan bij HelloFresh tussen 15 mei en 15 juni 2026.',
            'Plak de code bij checkout voor tot €60 korting.',
            'Bestel minimaal 5 boxen binnen 8 weken → ontvang je gratis GreenPan per e-mail.',
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
            'Kortingsverdeling: €30 op 1e box, €10 op 2e box, €5 op 3e box',
            'Gratis GreenPan™ na minimaal 5 boxen binnen 8 weken (via aparte code per e-mail)',
            'Pan bestellen op greenpan.be uiterlijk 28 augustus 2026',
            'Aanmeldperiode: 15 mei t.e.m. 15 juni 2026',
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
