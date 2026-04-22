import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getVergelijking, generateVergelijkingStaticParams } from '@/lib/vergelijkingen';
import { getAanbieder } from '@/lib/aanbieders';

export async function generateStaticParams() {
  return generateVergelijkingStaticParams();
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const v = getVergelijking(slug);
  if (!v) return {};
  const a1 = getAanbieder(v.aanbieder1Slug)!;
  const a2 = getAanbieder(v.aanbieder2Slug)!;
  return {
    title: `${a1.naam} vs ${a2.naam} (2026) – Welke past het best bij jou?`,
    description: `Twijfel tussen ${a1.naam} en ${a2.naam} (2026)? Prijs, smaak & kortingen eerlijk vergeleken. Maak direct de juiste keuze en bespaar.`,
  };
}

const accentColors: Record<string, string> = {
  hellofresh: '#1B4332',
  foodbag: '#1E40AF',
  'marley-spoon': '#7C3AED',
  ekomenu: '#166534',
  'carrefour-simply-you': '#1B4332',
  factor: '#7C3AED',
  foodmaker: '#1B4332',
};

const categorieLabelMap: Record<string, string> = {
  prijs: 'Prijs per portie',
  smaak: 'Smaak',
  variatie: 'Receptvariatie',
  flexibiliteit: 'Flexibiliteit',
  bezorging: 'Bezorging',
  duurzaamheid: 'Duurzaamheid',
};

const categorieValueMap = (slug: string, cat: string) => {
  const a = getAanbieder(slug);
  if (!a) return '—';
  switch (cat) {
    case 'prijs': return `v.a. €${a.prijsPerPortie.toFixed(2)}/portie`;
    case 'smaak': return `${a.score.smaak}/10`;
    case 'variatie': return `${a.receptenPerWeek}+ recepten/week`;
    case 'flexibiliteit': return `${a.score.flexibiliteit}/10`;
    case 'bezorging': return a.gratisBezorging ? 'Gratis' : `€${a.bezorgkosten}`;
    case 'duurzaamheid': return `${a.score.duurzaamheid}/10`;
    default: return '—';
  }
};

export default async function VergelijkingPagina({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const v = getVergelijking(slug);
  if (!v) notFound();

  const a1 = getAanbieder(v.aanbieder1Slug)!;
  const a2 = getAanbieder(v.aanbieder2Slug)!;
  const winnaar = getAanbieder(v.verdictSlug)!;

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: v.faq.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  const categories = Object.keys(v.winnaarPerCategorie) as Array<keyof typeof v.winnaarPerCategorie>;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 20px 64px' }}>

        {/* Breadcrumb */}
        <div style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 24 }}>
          <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Home</Link>
          {' → '}
          <span style={{ color: 'var(--muted)' }}>Vergelijk</span>
          {' → '}
          <strong style={{ color: 'var(--ink)' }}>{a1.naam} vs {a2.naam}</strong>
        </div>

        {/* Header */}
        <div style={{ marginBottom: 36 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#E8F5EE', border: '1px solid #A7DFC0', borderRadius: 100, padding: '5px 14px', fontSize: 12, fontWeight: 600, color: '#1B4332', marginBottom: 16 }}>
            ✓ Onafhankelijk vergeleken · april 2026
          </div>
          <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(26px, 7vw, 42px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 12 }}>
            {a1.naam} vs {a2.naam}:<br />welke maaltijdbox is beter?
          </h1>
          <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, maxWidth: 600 }}>
            We vergeleken {a1.naam} en {a2.naam} op prijs, smaak, variatie, flexibiliteit, bezorging en duurzaamheid. Eerlijk en onafhankelijk — geen betaalde posities.
          </p>
        </div>

        {/* Score-overzicht: 2 kolommen */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 36 }}>
          {[a1, a2].map(a => (
            <div key={a.slug} style={{
              background: 'white', borderRadius: 16, border: `2px solid ${v.verdictSlug === a.slug ? accentColors[a.slug] : 'var(--rule)'}`,
              padding: 24, textAlign: 'center', position: 'relative', overflow: 'hidden',
            }}>
              {v.verdictSlug === a.slug && (
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: accentColors[a.slug] }} />
              )}
              {v.verdictSlug === a.slug && (
                <div style={{ display: 'inline-block', fontSize: 10, fontWeight: 700, padding: '3px 10px', borderRadius: 100, background: '#E8F5EE', color: '#1B4332', marginBottom: 10 }}>⭐ Onze keuze</div>
              )}
              <div style={{ fontSize: 32, marginBottom: 8 }}>
                {a.logo.startsWith('/') ? <img src={a.logo} alt={a.naam} style={{ width: 48, height: 48, objectFit: 'contain' }} /> : a.logo}
              </div>
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 900, marginBottom: 4 }}>{a.naam}</div>
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: 40, fontWeight: 900, color: accentColors[a.slug], lineHeight: 1 }}>{a.score.totaal.toFixed(1)}</div>
              <div style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 12 }}>/10 totaalscore</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: accentColors[a.slug] }}>v.a. €{a.prijsPerPortie.toFixed(2)}/portie</div>
              <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 4 }}>{a.tagline}</div>
            </div>
          ))}
        </div>

        {/* Categorie-voor-categorie tabel */}
        <div style={{ marginBottom: 36 }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 900, marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>
            Categorie per categorie
          </h2>
          <div style={{ borderRadius: 12, overflow: 'hidden', border: '1.5px solid var(--rule)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ background: '#1B4332', color: 'white' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, fontSize: 11, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Categorie</th>
                  <th style={{ padding: '12px 16px', textAlign: 'center', fontWeight: 600, fontSize: 11, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{a1.naam}</th>
                  <th style={{ padding: '12px 16px', textAlign: 'center', fontWeight: 600, fontSize: 11, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{a2.naam}</th>
                  <th style={{ padding: '12px 16px', textAlign: 'center', fontWeight: 600, fontSize: 11, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Winnaar</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((cat, i) => {
                  const winnaarSlug = v.winnaarPerCategorie[cat];
                  return (
                    <tr key={cat} style={{ borderBottom: '1px solid var(--rule)', background: i % 2 === 0 ? 'white' : '#FAFAFA' }}>
                      <td style={{ padding: '12px 16px', fontWeight: 700 }}>{categorieLabelMap[cat]}</td>
                      <td style={{ padding: '12px 16px', textAlign: 'center', fontWeight: winnaarSlug === a1.slug ? 700 : 400, color: winnaarSlug === a1.slug ? accentColors[a1.slug] : 'var(--ink)' }}>
                        {categorieValueMap(a1.slug, cat)}
                        {winnaarSlug === a1.slug && <span style={{ marginLeft: 6, fontSize: 12, color: '#16A34A' }}>✓</span>}
                      </td>
                      <td style={{ padding: '12px 16px', textAlign: 'center', fontWeight: winnaarSlug === a2.slug ? 700 : 400, color: winnaarSlug === a2.slug ? accentColors[a2.slug] : 'var(--ink)' }}>
                        {categorieValueMap(a2.slug, cat)}
                        {winnaarSlug === a2.slug && <span style={{ marginLeft: 6, fontSize: 12, color: '#16A34A' }}>✓</span>}
                      </td>
                      <td style={{ padding: '12px 16px', textAlign: 'center' }}>
                        <span style={{ fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 100, background: '#E8F5EE', color: '#1B4332' }}>
                          {getAanbieder(winnaarSlug)?.naam}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Eindverdicht */}
        <div style={{ background: 'white', borderRadius: 16, border: `1.5px solid ${accentColors[winnaar.slug]}`, padding: 28, marginBottom: 32, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: accentColors[winnaar.slug] }} />
          <div style={{ fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 100, background: '#E8F5EE', color: '#1B4332', display: 'inline-block', marginBottom: 12 }}>
            ⭐ Ons verdict
          </div>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 10 }}>
            Onze keuze: {winnaar.naam}
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.8, color: '#4B5563', marginBottom: 20 }}>{v.verdictTekst}</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <Link href={`/ga/${a1.slug}`} style={{ display: 'block', background: accentColors[a1.slug], color: 'white', textAlign: 'center', padding: '13px', borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
              Ga naar {a1.naam} →
            </Link>
            <Link href={`/ga/${a2.slug}`} style={{ display: 'block', background: 'white', color: accentColors[a2.slug], textAlign: 'center', padding: '13px', borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none', border: `2px solid ${accentColors[a2.slug]}` }}>
              Ga naar {a2.naam} →
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>
            Veelgestelde vragen
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {v.faq.map(({ q, a }) => (
              <div key={q} style={{ background: 'white', borderRadius: 12, padding: 20, border: '1px solid var(--rule)' }}>
                <div style={{ fontFamily: 'Fraunces, serif', fontSize: 14, fontWeight: 700, marginBottom: 8 }}>{q}</div>
                <div style={{ fontSize: 13, lineHeight: 1.7, color: '#4B5563' }}>{a}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer links */}
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <Link href="/" style={{ fontSize: 14, color: 'var(--muted)', textDecoration: 'none' }}>← Bekijk alle maaltijdboxen</Link>
          <Link href={`/aanbieder/${a1.slug}`} style={{ fontSize: 14, color: 'var(--muted)', textDecoration: 'none' }}>Volledige review {a1.naam} →</Link>
          <Link href={`/aanbieder/${a2.slug}`} style={{ fontSize: 14, color: 'var(--muted)', textDecoration: 'none' }}>Volledige review {a2.naam} →</Link>
        </div>
      </div>
    </>
  );
}
