import { notFound } from 'next/navigation';
import Link from 'next/link';
import { aanbieders, getAanbieder } from '@/lib/aanbieders';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return aanbieders.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getAanbieder(slug);
  if (!a) return {};
  return {
    title: `${a.naam} Review België 2026 — Is het de beste maaltijdbox?`,
    description: `Eerlijke review van ${a.naam} in België. Prijs: €${a.prijsPerPortie}/portie. Score: ${a.score}/10. ${a.beschrijving}`,
  };
}

export default async function AanbiederPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = getAanbieder(slug);
  if (!a) notFound();

  const scoreLabels: Record<string, string> = {
    smaak: 'Smaak',
    prijskwaliteit: 'Prijs-kwaliteit',
    flexibiliteit: 'Flexibiliteit',
    duurzaamheid: 'Duurzaamheid',
    gemak: 'Gemak',
  };

  return (
    <div style={{ background: 'var(--paper)' }}>
      {/* Breadcrumb */}
      <div style={{ background: 'white', borderBottom: '1px solid var(--rule)' }}>
        <div className="max-w-5xl mx-auto px-6 py-3" style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: 'var(--muted)' }}>
          <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Home</Link>
          {' → '}
          <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Vergelijken</Link>
          {' → '}
          <span style={{ color: 'var(--ink)', fontWeight: 600 }}>{a.naam}</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-10">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '48px', alignItems: 'start' }}>

          {/* ── LEFT CONTENT ── */}
          <div>
            {/* Header */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '48px' }}>{a.logo}</span>
                <div>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '4px' }}>
                    Review
                  </div>
                  <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
                    {a.naam}
                  </h1>
                </div>
              </div>

              <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '18px', color: 'var(--muted)', marginBottom: '12px' }}>
                {a.tagline}
              </p>

              {/* Meta */}
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: 'var(--muted)', display: 'flex', gap: '16px', flexWrap: 'wrap', padding: '12px 0', borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)' }}>
                <span>Door <strong style={{ color: 'var(--ink)' }}>Redactie BesteMaaltijdbox</strong></span>
                <span>•</span>
                <span>Bijgewerkt <strong style={{ color: 'var(--ink)' }}>maart 2026</strong></span>
                <span>•</span>
                <span>Getest over <strong style={{ color: 'var(--ink)' }}>4 weken</strong></span>
              </div>
            </div>

            {/* Score breakdown */}
            <div style={{ background: 'white', border: '2px solid var(--ink)', padding: '24px', marginBottom: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700 }}>
                  Onze score
                </div>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', fontWeight: 900, color: 'var(--accent)', lineHeight: 1 }}>
                  {a.score}
                  <span style={{ fontSize: '20px', color: 'var(--muted)', fontFamily: 'Outfit, sans-serif', fontWeight: 400 }}>/10</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {Object.entries(a.scores).map(([key, val]) => (
                  <div key={key}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'Outfit, sans-serif', fontSize: '13px', marginBottom: '4px' }}>
                      <span style={{ fontWeight: 600 }}>{scoreLabels[key]}</span>
                      <span style={{ fontWeight: 700, color: val >= 8 ? 'var(--accent)' : 'var(--ink)' }}>{val}</span>
                    </div>
                    <div className="score-bar">
                      <div className="score-bar-fill" style={{ width: `${val * 10}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick specs */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '32px' }}>
              {[
                { icon: '💰', label: 'Prijs per portie', val: `€${a.prijsPerPortie.toFixed(2)}` },
                { icon: '📋', label: 'Recepten per week', val: `${a.aantalRecepten}+` },
                { icon: '🚚', label: 'Bezorging', val: a.bezorging === 'gratis' ? 'Gratis' : `€${a.bezorgkost}` },
                { icon: '👥', label: 'Personen', val: a.personenOpties.join(' of ') },
                { icon: '📅', label: 'Opzegbaar', val: a.opzegbaar },
                { icon: '🇧🇪', label: 'Belgisch', val: a.belgisch ? 'Ja' : 'Nee' },
              ].map((s) => (
                <div key={s.label} style={{ background: 'white', border: '1px solid var(--rule)', borderRadius: '6px', padding: '14px', textAlign: 'center', fontFamily: 'Outfit, sans-serif' }}>
                  <div style={{ fontSize: '20px', marginBottom: '4px' }}>{s.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: '15px', marginBottom: '2px' }}>{s.val}</div>
                  <div style={{ fontSize: '11px', color: 'var(--muted)' }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '32px' }}>
              {a.tags.map((tag) => (
                <span key={tag} style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: 600, padding: '4px 12px', background: '#f5f5f5', border: '1px solid var(--rule)', borderRadius: '4px' }}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Review tekst */}
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', fontWeight: 700, marginBottom: '12px' }}>
              Onze bevindingen na 4 weken testen
            </h2>
            <p style={{ fontFamily: 'Source Serif 4, serif', fontSize: '16px', lineHeight: 1.8, color: '#333', marginBottom: '32px' }}>
              {a.uitgebreideReview}
            </p>

            {/* Pros & Cons */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '32px' }}>
              <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '8px', padding: '20px' }}>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#16a34a', marginBottom: '12px' }}>
                  ✓ Voordelen
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {a.pros.map((pro) => (
                    <li key={pro} style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', color: '#166534', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                      <span style={{ color: '#16a34a', fontWeight: 700, flexShrink: 0 }}>+</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '8px', padding: '20px' }}>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#dc2626', marginBottom: '12px' }}>
                  ✗ Nadelen
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {a.cons.map((con) => (
                    <li key={con} style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', color: '#991b1b', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                      <span style={{ color: '#dc2626', fontWeight: 700, flexShrink: 0 }}>−</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Verdict */}
            <div style={{ background: '#fff9f8', border: '3px solid var(--accent)', borderRadius: '8px', padding: '24px', marginBottom: '32px' }}>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent)', marginBottom: '8px' }}>
                Ons verdict
              </div>
              <p style={{ fontFamily: 'Source Serif 4, serif', fontSize: '16px', lineHeight: 1.7, color: '#333' }}>
                {a.beschrijving} {a.belgisch && 'Als Belgisch bedrijf draagt het ook bij aan de lokale economie. '}
                {a.kortingscode
                  ? `Gebruik kortingscode ${a.kortingscode} voor ${a.kortingBedrag}.`
                  : 'Bekijk de huidige aanbiedingen op hun website.'}
              </p>
            </div>

            {/* CTA bottom */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a
                href={`/ga/${a.slug}`}
                className="btn-affiliate"
                target="_blank"
                rel="noopener noreferrer nofollow"
                style={{ fontSize: '16px', padding: '16px' }}
              >
                Probeer {a.naam} →
              </a>
              {a.kortingscode && (
                <div className="code-pill" style={{ fontSize: '14px', padding: '12px' }}>
                  Code: <strong>{a.kortingscode}</strong> — {a.kortingBedrag}
                </div>
              )}
            </div>
          </div>

          {/* ── RIGHT STICKY SIDEBAR ── */}
          <div style={{ position: 'sticky', top: '20px' }}>
            <div style={{ background: 'white', border: '3px solid var(--ink)', padding: '24px' }}>
              {/* Logo + score */}
              <div style={{ textAlign: 'center', marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid var(--rule)' }}>
                <div style={{ fontSize: '48px', marginBottom: '8px' }}>{a.logo}</div>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', fontWeight: 700, marginBottom: '4px' }}>{a.naam}</div>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: 'var(--muted)', marginBottom: '12px' }}>{a.tagline}</div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', gap: '4px' }}>
                  <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, color: 'var(--accent)' }}>{a.score}</span>
                  <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '16px', color: 'var(--muted)' }}>/10</span>
                </div>
              </div>

              {/* Price */}
              <div style={{ textAlign: 'center', marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid var(--rule)' }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', fontWeight: 900 }}>
                  €{a.prijsPerPortie.toFixed(2)}
                </div>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: 'var(--muted)' }}>per portie</div>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#16a34a', fontWeight: 600, marginTop: '4px' }}>
                  {a.bezorging === 'gratis' ? '✓ Gratis bezorging' : `Bezorging: €${a.bezorgkost}`}
                </div>
              </div>

              {/* Key facts */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px', fontFamily: 'Outfit, sans-serif', fontSize: '13px' }}>
                {[
                  { k: 'Recepten/week', v: `${a.aantalRecepten}+` },
                  { k: 'Personen', v: a.personenOpties.join(' of ') },
                  { k: 'Opzegbaar', v: a.opzegbaar },
                  { k: 'Belgisch', v: a.belgisch ? '🇧🇪 Ja' : 'Nee' },
                  { k: 'Vegetarisch', v: a.vegetarisch ? '✓ Ja' : 'Nee' },
                ].map((f) => (
                  <div key={f.k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid var(--rule)' }}>
                    <span style={{ color: 'var(--muted)' }}>{f.k}</span>
                    <span style={{ fontWeight: 600 }}>{f.v}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a
                  href={`/ga/${a.slug}`}
                  className="btn-affiliate"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  Bezoek {a.naam} →
                </a>
                {a.kortingscode && (
                  <div className="code-pill">
                    Code: <strong>{a.kortingscode}</strong>
                    <div style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '2px' }}>{a.kortingBedrag}</div>
                  </div>
                )}
                <Link href="/" className="btn-secondary" style={{ textAlign: 'center' }}>
                  ← Terug naar vergelijking
                </Link>
              </div>
            </div>

            {/* Affiliate disclosure */}
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: 'var(--muted)', marginTop: '12px', lineHeight: 1.5, padding: '0 4px' }}>
              <strong>Affiliate disclosure:</strong> Als je via onze link bestelt ontvangen we een kleine commissie, zonder meerprijs voor jou. Dit beïnvloedt onze review niet.
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
