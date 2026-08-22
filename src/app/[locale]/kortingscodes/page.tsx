import Link from 'next/link';
import type { Metadata } from 'next';
import type { Locale } from '@/i18n/routing';
import { buildMetadata } from '@/lib/seo';
import GesponsordLabel from '@/components/GesponsordLabel';
import { actieveAanbiedersVoor, aanbiederVoor } from '@/lib/teksten';
import { getActieveSponsoring } from '@/lib/sponsoring';
import { LAATST_BIJGEWERKT } from '@/lib/site';

// ISR: het gesponsorde, uitgelichte Factor-blok verdwijnt vanzelf na de
// sponsoringsperiode (server-side datumcheck, niet uit de browserklok).
export const revalidate = 3600;

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale: locale as Locale,
    route: '/kortingscodes',
    pad: '/kortingscodes',
    titel: `Kortingscodes maaltijdbox België ${LAATST_BIJGEWERKT} — bespaar tot €60 op je eerste box`,
    beschrijving: `Het actuele overzicht van geldige aanbiedingen voor HelloFresh, Foodbag, Marley Spoon en meer. Bespaar tot €60 op je eerste box. Bijgewerkt ${LAATST_BIJGEWERKT}.`,
    type: 'website',
  });
}

// Slugs met een eigen /kortingscode/<slug>-detailpagina (voor de "Bekijk details"-link).
const heeftDetailpagina = new Set(['hellofresh', 'foodbag', 'foodprepper', 'factor', 'crowd-cooks']);

// Afgeleid uit de centrale bron: een aanbieder heeft een lopende deal zodra
// hij een kortingsCode draagt. Stopgezette aanbieders vallen al weg via
// actieveAanbieders.


// Alleen op deze pagina stuurt HelloFresh eerst naar zijn eigen
// kortingscodepagina; elders blijft de CTA rechtstreeks /ga/hellofresh.
const dealCta: Record<string, string> = {
  hellofresh: '/kortingscode/hellofresh',
};

export default async function KortingscodesPagina({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const taal = locale as Locale;
  const actief = actieveAanbiedersVoor(taal);
  const metKorting = actief.filter(a => a.kortingsCode);
  const zonderKorting = actief.filter(a => !a.kortingsCode);
  // Server-side: toon het uitgelichte Factor-blok enkel binnen de sponsoringsperiode.
  const sponsoring = getActieveSponsoring();
  const factor = aanbiederVoor('factor', taal);

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 20px 64px' }}>

      {/* Breadcrumb */}
      <div style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 24 }}>
        <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Home</Link>
        {' → '}
        <strong style={{ color: 'var(--ink)' }}>Kortingscodes</strong>
      </div>

      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#E8F5EE', border: '1px solid #A7DFC0', borderRadius: 100, padding: '5px 14px', fontSize: 12, fontWeight: 600, color: '#1B4332', marginBottom: 16 }}>
          🏷️ Bijgewerkt {LAATST_BIJGEWERKT}
        </div>
        <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 42, fontWeight: 900, lineHeight: 1.1, marginBottom: 12 }}>
          Kortingscodes maaltijdbox<br />België 2026
        </h1>
        <p style={{ fontSize: 15, lineHeight: 1.8, color: '#4B5563', maxWidth: 600 }}>
          Alle actieve kortingscodes en welkomstdeals voor maaltijdboxen in België. We houden deze pagina maandelijks bij zodat je altijd de beste deal krijgt.
        </p>
      </div>

      {/* Uitgelicht — gesponsorde Factor-plaatsing (server-gated op de sponsoringsperiode, verdwijnt na 27/10/2026) */}
      {sponsoring?.partnerSlug === 'factor' && factor && (
        <div style={{ background: 'linear-gradient(180deg, #FFFBEB 0%, #FFFFFF 70%)', border: '1.5px solid #FCD34D', borderRadius: 16, padding: '22px 24px', marginBottom: 36, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, #F59E0B, #FBBF24)' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Uitgelicht</span>
            <GesponsordLabel />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap' }}>
            <div style={{ width: 56, height: 56, borderRadius: 12, background: 'white', border: '1.5px solid #FDE68A', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', flexShrink: 0 }}>
              <img src={factor.logo} alt="Factor" style={{ height: 22, width: 'auto', maxWidth: 44, objectFit: 'contain' }} />
            </div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 4 }}>
                Factor welkomstdeal
              </div>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#B45309', marginBottom: 4 }}>40% korting op je eerste box + 25% op de volgende vijf boxen</div>
              <div style={{ fontSize: 13, color: '#4B5563', marginBottom: 4 }}>Kant-en-klare chef-maaltijden zonder koken. De korting wordt automatisch toegepast via de link — je hoeft geen code in te voeren.</div>
              <div style={{ fontSize: 11, color: 'var(--muted)' }}>Geldig voor nieuwe klanten · Geldig t.e.m. 27/10/2026</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, minWidth: 160 }}>
              <div style={{ textAlign: 'center', padding: '10px', background: 'white', border: '1.5px dashed #FCD34D', borderRadius: 10, fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 900, color: '#B45309' }}>40% + 25%</div>
              <Link href="/ga/factor" rel="noopener sponsored nofollow" style={{ display: 'block', background: '#B45309', color: 'white', textAlign: 'center', padding: '11px', borderRadius: 10, fontWeight: 700, fontSize: 13, textDecoration: 'none' }}>Activeer deal →</Link>
            </div>
          </div>
        </div>
      )}

      {/* Actieve deals eerst */}
      <div style={{ marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--ink)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900 }}>Actieve deals</h2>
        <div style={{ fontSize: 13, color: 'var(--muted)' }}>Bijgewerkt {LAATST_BIJGEWERKT}</div>
      </div>

      {metKorting.map((a, i) => {
        const kc = a.kortingsCode!;
        return (
        <div key={a.slug} className="kortingen-row" style={{
          background: 'white', borderRadius: 16, border: '1.5px solid var(--rule)',
          padding: 24, marginBottom: 12,
          position: 'relative', overflow: 'hidden',
        }}>
          {i === 0 && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, #1B4332, var(--mint))' }} />}
          <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--cream)', border: '1.5px solid var(--rule)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, overflow: 'hidden' }}>
            {a.logo.startsWith('/') ? <img src={a.logo} alt={a.naam} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 6 }} /> : a.logo}
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
              <span style={{ fontFamily: 'Fraunces, serif', fontSize: 18, fontWeight: 700 }}>{a.naam}</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 100, background: '#E8F5EE', color: '#1B4332' }}>✓ Actief</span>
            </div>
            <div style={{ fontSize: 14, fontWeight: 700, color: a.merkKleur, marginBottom: 4 }}>{kc.deal}</div>
            <div style={{ fontSize: 13, color: '#4B5563', marginBottom: 4 }}>{kc.beschrijving}</div>
            <div style={{ fontSize: 11, color: 'var(--muted)' }}>{kc.voorwaarden}</div>
          </div>
          <div className="kortingen-cta" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ textAlign: 'center', padding: '10px', background: 'var(--cream)', borderRadius: 10, fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 900, color: a.merkKleur }}>
              {kc.bedragKort}
            </div>
            <Link href={dealCta[a.slug] ?? `/ga/${a.slug}`} style={{ display: 'block', background: a.merkKleur, color: 'white', textAlign: 'center', padding: '11px', borderRadius: 10, fontWeight: 700, fontSize: 13, textDecoration: 'none' }}>
              Activeer deal →
            </Link>
            {heeftDetailpagina.has(a.slug) && (
              <Link href={`/kortingscode/${a.slug}`} style={{ display: 'block', textAlign: 'center', padding: '8px', borderRadius: 10, fontWeight: 600, fontSize: 12, textDecoration: 'none', color: a.merkKleur, border: `1.5px solid ${a.merkKleur}` }}>
                Bekijk details →
              </Link>
            )}
          </div>
        </div>
        );
      })}

      {/* Geen actieve code */}
      <div style={{ marginTop: 40, marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--rule)' }}>
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, color: 'var(--muted)' }}>Geen actieve kortingscode</h2>
      </div>

      {zonderKorting.map(a => (
        <div key={a.slug} className="kortingen-row-inactive" style={{
          background: '#F9F9F9', borderRadius: 12, border: '1px solid var(--rule)',
          padding: 20, marginBottom: 10, opacity: 0.8,
        }}>
          <div style={{ width: 40, height: 40, borderRadius: 10, background: 'white', border: '1px solid var(--rule)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, overflow: 'hidden' }}>
            {a.logo.startsWith('/') ? <img src={a.logo} alt={a.naam} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 5 }} /> : a.logo}
          </div>
          <div>
            <div style={{ fontFamily: 'Fraunces, serif', fontSize: 16, fontWeight: 700, marginBottom: 2 }}>{a.naam}</div>
            <div style={{ fontSize: 13, color: 'var(--muted)' }}>
              Momenteel geen actieve kortingscode. Bekijk de website voor de huidige welkomstaanbieding.
            </div>
          </div>
          <Link href={`/aanbieder/${a.slug}`} style={{ fontSize: 13, fontWeight: 700, color: '#1B4332', textDecoration: 'none', whiteSpace: 'nowrap' }}>
            Bekijk review →
          </Link>
        </div>
      ))}

      {/* Info box */}
      <div style={{ marginTop: 48, background: 'white', borderRadius: 16, padding: 28, border: '1px solid var(--rule)' }}>
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 12 }}>Hoe gebruik je een kortingscode?</h2>
        <div className="two-col-grid">
          {[
            { num: '1', titel: 'Klik op "Activeer deal"', desc: 'Klik op de knop naast de maaltijdbox van je keuze. Je wordt doorgestuurd naar de website.' },
            { num: '2', titel: 'Kies je box', desc: 'Selecteer het aantal personen en maaltijden per week dat je wil ontvangen.' },
            { num: '3', titel: 'Korting wordt toegepast', desc: 'Je hebt geen code nodig — de korting wordt bij alle aanbieders automatisch toegepast via onze link. Rond gewoon je bestelling af en je voordeel staat al verrekend.' },
            { num: '4', titel: 'Direct opzegbaar', desc: 'Je zit nergens aan vast. De meeste aanbieders laat je wekelijks opzeggen of pauzeren.' },
          ].map(({ num, titel, desc }) => (
            <div key={num} style={{ display: 'flex', gap: 12 }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#1B4332', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, flexShrink: 0 }}>{num}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{titel}</div>
                <div style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.6 }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 24 }}>
        <Link href="/" style={{ fontSize: 14, color: 'var(--muted)', textDecoration: 'none' }}>← Terug naar alle maaltijdboxen</Link>
      </div>
    </div>
  );
}
