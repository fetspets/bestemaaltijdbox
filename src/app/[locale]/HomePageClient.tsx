'use client';
import Link from 'next/link';
import type { Aanbieder } from '@/lib/aanbieders';
import type { Locale } from '@/i18n/routing';
import { laatstBijgewerkt } from '@/lib/site';
import { absoluteUrl } from '@/lib/seo';
import GesponsordLabel from '@/components/GesponsordLabel';
import Quiz from '@/components/Quiz';
import { useTranslations } from 'next-intl';


/** De ItemList-markup hangt af van de lijst en dus van de taal. */
function bouwJsonLd(lijst: Aanbieder[], taal: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: taal === 'fr' ? 'Meilleur box repas en Belgique 2026' : 'Beste Maaltijdbox België 2026',
    description: taal === 'fr'
      ? 'Comparaison indépendante des box repas en Belgique'
      : 'Onafhankelijke vergelijking van maaltijdboxen in België',
    numberOfItems: lijst.length,
    itemListElement: lijst.map((a, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: a.naam,
      url: absoluteUrl(taal === 'fr' ? `/fr/fournisseur/${a.slug}` : `/aanbieder/${a.slug}`),
    })),
  };
}

function ScoreBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 4 }}>{label}</div>
      <div className="score-bar"><div className="score-bar-fill" style={{ width: `${value * 10}%` }} /></div>
      <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--green)', marginTop: 3 }}>{value}</div>
    </div>
  );
}

const accentColors: Record<string, string> = {
  hellofresh: '#1B4332', foodbag: '#1E40AF', 'marley-spoon': '#7C3AED',
};

export default function HomePageClient({
  sponsoringActief,
  aanbieders: lijst,
  taal,
}: {
  sponsoringActief: boolean;
  aanbieders: Aanbieder[];
  taal: Locale;
}) {
  const t = useTranslations('home');
  const tf = useTranslations('homeFaq');
  const tc = useTranslations('cta');
  const tf2 = useTranslations('homeFaq2');
  const faqLijst = [0, 1, 2, 3].map(i => ({ q: tf(`v${i}`), a: tf(`a${i}`) }));
  const aantalAanbieders = lijst.length;
  const jsonLd = bouwJsonLd(lijst, taal);
  const top3 = lijst.slice(0, 3);
  const rest = lijst.slice(3);
  const factor = lijst.find(a => a.slug === 'factor');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: faqLijst.map(({ q, a }) => ({
          '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a },
        })),
      }) }} />

      {/* HERO */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 20px 24px' }}>
        <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(28px, 8vw, 52px)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 12 }}>
          {t('h1Regel1')}<br />{t('h1Regel2')} <span style={{ color: 'var(--mint)' }}>{t('h1Land')}</span> {t('h1Jaar')}
        </h1>
        <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.65, marginBottom: 20, maxWidth: 560 }}>
          {t('intro', { n: aantalAanbieders })}
        </p>

        {/* Stats */}
        <div style={{ display: 'flex', gap: 24, marginBottom: 24, flexWrap: 'wrap' }}>
          {[[String(aantalAanbieders), t('statBoxen')], ['5', t('statCriteria')], ['2026', t('statBijgewerkt')]].map(([num, label]) => (
            <div key={label}>
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: 28, fontWeight: 900, color: '#1B4332' }}>{num}</div>
              <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Trust card */}
        <div style={{ background: 'white', borderRadius: 16, padding: 20, boxShadow: '0 4px 24px rgba(0,0,0,.08)', border: '1px solid var(--rule)', marginBottom: 32 }}>
          <div style={{ fontFamily: 'Fraunces, serif', fontSize: 16, fontWeight: 700, marginBottom: 12 }}>{t('waaromVertrouwen')}</div>
          <div className="two-col-grid" style={{ gap: 10 }}>
            {[['🧪', t('uitgebreidOnderzocht')], ['📊', t('gebaseerdOpData')], ['🔄', t('regelmatigBijgewerkt')], ['🇧🇪', t('focusBelgie')]].map(([icon, text]) => (
              <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13 }}>
                <div style={{ width: 28, height: 28, borderRadius: 6, background: '#E8F5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, flexShrink: 0 }}>{icon}</div>
                {text}
              </div>
            ))}
          </div>
          <div style={{ marginTop: 12, padding: '8px 10px', background: 'var(--cream)', borderRadius: 8, fontSize: 11, color: 'var(--muted)', textAlign: 'center', border: '1px solid var(--rule)' }}>
            {t('disclosure')}
          </div>
        </div>

        {/* SECTION HEADER */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, paddingBottom: 14, borderBottom: '2px solid var(--ink)', flexWrap: 'wrap', gap: 8 }}>
          <h2 style={{ fontSize: 'clamp(20px, 5vw, 28px)', fontWeight: 900 }}>{t('onzeRankings')}</h2>
          <div style={{ fontSize: 13, color: 'var(--muted)' }}>{t('bijgewerktRegel', { datum: laatstBijgewerkt(taal), n: aantalAanbieders })}</div>
        </div>

        {/* TOP 3 CARDS */}
        {top3.map((a, i) => {
          const accent = accentColors[a.slug] || '#1B4332';
          return (
            <div key={a.slug} className={`ranking-card${i === 0 ? ' top' : ''}`} style={{ marginBottom: 16 }}>
              <div style={{ padding: '20px 20px 16px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 12 }}>
                  <div style={{ fontFamily: 'Fraunces, serif', fontSize: 40, fontWeight: 900, color: i === 0 ? '#C8EAD8' : 'var(--rule)', lineHeight: 1, flexShrink: 0 }}>{a.ranking}</div>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--cream)', border: '1.5px solid var(--rule)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, flexShrink: 0, overflow: 'hidden' }}>
                    {a.logo.startsWith('/')
                      ? <img src={a.logo} alt={a.naam} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 4 }} />
                      : a.logo}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap', marginBottom: 2 }}>
                      <span style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 700 }}>{a.naam}</span>
                      {a.badge && <span style={{ fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 100, background: a.badge.bg, color: a.badge.color, whiteSpace: 'nowrap' }}>{a.badge.label}</span>}
                    </div>
                    <div style={{ fontSize: 13, color: 'var(--muted)' }}>{a.tagline}</div>
                  </div>
                  <div style={{ textAlign: 'center', flexShrink: 0 }}>
                    <div style={{ fontFamily: 'Fraunces, serif', fontSize: 32, fontWeight: 900, color: '#1B4332', lineHeight: 1 }}>{a.score.totaal.toFixed(1)}</div>
                    <div style={{ fontSize: 11, color: 'var(--muted)' }}>/10</div>
                  </div>
                </div>

                <div style={{ fontSize: 14, lineHeight: 1.6, color: '#4B5563', marginBottom: 14 }}>{a.beschrijving}</div>

                <div className="ranking-stats-grid">
                  {[
                    { val: a.score.totaal.toFixed(1), key: 'Score' },
                    { val: `v.a. €${a.prijsPerPortie.toFixed(2)}`, key: t('perPortie') },
                    { val: `${a.receptenPerWeek}+`, key: 'Recepten' },
                    { val: a.gratisBezorging ? 'Gratis' : `€${a.bezorgkosten?.toFixed(2).replace('.', ',')}`, key: t('bezorging') },
                  ].map(({ val, key }) => (
                    <div key={key} style={{ padding: '8px 6px', borderRight: '1px solid var(--rule)', textAlign: 'center' }}>
                      <div style={{ fontWeight: 700, fontSize: 14 }}>{val}</div>
                      <div style={{ fontSize: 10, color: 'var(--muted)', marginTop: 1 }}>{key}</div>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 14 }}>
                  {a.kenmerken?.slice(0, 3).map(k => (
                    <span key={k} style={{ fontSize: 11, padding: '4px 10px', borderRadius: 6, fontWeight: 600, background: '#F3F4F6', color: '#6B7280' }}>{k}</span>
                  ))}
                </div>

                <Link href={a.ctaUrl || `/ga/${a.slug}`} style={{ display: 'block', background: accent, color: 'white', textAlign: 'center', padding: '13px', borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none', marginBottom: 4 }}>
                  {a.kortingsCode ? tc('activeerBedrag', { bedrag: a.kortingsCode.bedrag }) : tc('bekijkAanbieder', { naam: a.naam })}
                </Link>
                {a.ctaSubtekst && (
                  <div style={{ textAlign: 'center', fontSize: 11, color: 'var(--muted)', marginBottom: 8 }}>{a.ctaSubtekst}</div>
                )}
                <Link href={`/aanbieder/${a.slug}`} style={{ display: 'block', border: '1.5px solid var(--rule)', textAlign: 'center', padding: '11px', borderRadius: 10, fontWeight: 600, fontSize: 13, textDecoration: 'none', color: 'var(--ink)', marginTop: 8 }}>
                  Lees volledige review
                </Link>
              </div>

              <div className="ranking-scores-grid">
                <ScoreBar label="Smaak" value={a.score.smaak} />
                <ScoreBar label="Prijs" value={a.score.prijsKwaliteit} />
                <ScoreBar label="Flex." value={a.score.flexibiliteit} />
                <ScoreBar label="Duurzaam" value={a.score.duurzaamheid} />
                <ScoreBar label="Gemak" value={a.score.gemak} />
              </div>
            </div>
          );
        })}

        {/* MICRO-CONVERSION TIP */}
        <div style={{ background: '#FFFBEB', border: '1px solid #FDE68A', borderRadius: 10, padding: '10px 14px', fontSize: 12, color: '#92400E', marginBottom: 8 }}>
          💡 <strong>{t('tipLabel')}</strong> {t('tipTekst')}
        </div>

        {/* REST (#4+) */}
        <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '24px 0 12px' }}>{t('overigeAanbieders')}</div>
        {rest.map(a => (
          <div key={a.slug} className="small-card" style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8, padding: '14px 16px' }}>
            <div style={{ fontFamily: 'Fraunces, serif', fontSize: 28, fontWeight: 900, color: 'var(--rule)', lineHeight: 1, flexShrink: 0, minWidth: 28 }}>{a.ranking}</div>
            <div style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--cream)', border: '1px solid var(--rule)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0, overflow: 'hidden' }}>
              {a.logo.startsWith('/')
                ? <img src={a.logo} alt={a.naam} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 3 }} />
                : a.logo}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: 15, fontWeight: 700 }}>{a.naam} {a.belgisch && '🇧🇪'}</div>
              <div style={{ fontSize: 12, color: 'var(--muted)' }}>v.a. €{a.prijsPerPortie.toFixed(2)}/portie</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4, flexShrink: 0 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: '#E8F5EE', borderRadius: 100, padding: '3px 10px', fontSize: 12, fontWeight: 700, color: '#1B4332' }}>{a.score.totaal.toFixed(1)} ★</div>
              <Link href={`/aanbieder/${a.slug}`} style={{ fontSize: 12, fontWeight: 700, color: '#1B4332', textDecoration: 'none' }}>{t('review')}</Link>
            </div>
          </div>
        ))}

        {/* UITGELICHT — GESPONSORD (Factor). Onder de redactionele rangschikking;
            server-side gated via sponsoringActief zodat het na de looptijd verdwijnt. */}
        {sponsoringActief && factor && (
          <div style={{ marginTop: 28, marginBottom: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{t('inDeKijker')}</div>
              <GesponsordLabel />
            </div>
            <div style={{ background: 'linear-gradient(180deg, #FFFBEB 0%, #FFFFFF 60%)', border: '1.5px solid #FCD34D', borderRadius: 16, padding: '20px 20px 18px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, #F59E0B, #FBBF24)' }} />
              <div style={{ marginBottom: 14 }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', background: 'white', border: '1.5px solid #FDE68A', borderRadius: 12, padding: '10px 18px', marginBottom: 10 }}>
                  <img src={factor.logo} alt={factor.naam} style={{ height: 26, width: 'auto', display: 'block' }} />
                </div>
                <div style={{ fontSize: 13, color: 'var(--muted)' }}>{factor.tagline}</div>
              </div>

              <div style={{ fontSize: 14, lineHeight: 1.6, color: '#4B5563', marginBottom: 14 }}>{factor.beschrijving}</div>

              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 14 }}>
                {factor.kenmerken?.slice(0, 3).map(k => (
                  <span key={k} style={{ fontSize: 11, padding: '4px 10px', borderRadius: 6, fontWeight: 600, background: '#FEF3C7', color: '#92400E' }}>{k}</span>
                ))}
              </div>

              <Link href="/ga/factor" rel="noopener sponsored nofollow" style={{ display: 'block', background: '#B45309', color: 'white', textAlign: 'center', padding: '13px', borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none', marginBottom: 8 }}>
                {t('factorCta')}
              </Link>
              <Link href="/kortingscode/factor" style={{ display: 'block', border: '1.5px solid #FDE68A', textAlign: 'center', padding: '11px', borderRadius: 10, fontWeight: 600, fontSize: 13, textDecoration: 'none', color: '#92400E' }}>
                {t('bekijkDeal', { partner: 'Factor' })}
              </Link>
              <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 10, textAlign: 'center' }}>
                {t('gesponsordeUitleg')}
              </div>
            </div>
          </div>
        )}


        {/* QUIZ */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, paddingBottom: 14, borderBottom: '2px solid var(--ink)' }}>
            <h2 style={{ fontSize: 'clamp(18px, 4vw, 28px)', fontWeight: 900 }}>{t('welkePastBijJou')}</h2>
          </div>
          <p style={{ fontSize: 14, color: '#4B5563', marginBottom: 16, lineHeight: 1.6 }}>
            {t('quizIntro')}
          </p>
          <Quiz />
        </div>

        {/* VERGELIJKINGSTABEL */}
        <div style={{ marginTop: 48, marginBottom: 48 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, paddingBottom: 14, borderBottom: '2px solid var(--ink)', flexWrap: 'wrap', gap: 8 }}>
            <h2 style={{ fontSize: 'clamp(18px, 4vw, 26px)', fontWeight: 900 }}>{t('vergelijkAlle')}</h2>
            <div style={{ fontSize: 13, color: 'var(--muted)' }}>{aantalAanbieders} aanbieders</div>
          </div>
          <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 16 }}>{t('tabelIntro', { datum: laatstBijgewerkt(taal) })}</p>
          <div className="table-wrap" style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12, minWidth: 700 }}>
              <thead>
                <tr style={{ background: '#1B4332', color: 'white' }}>
                  {[t('aanbieder'), 'Score', t('prijsPortie'), t('minMaaltijden'), t('bezorgkost'), '🇧🇪', t('leverdagKiezen'), t('tijdslotKiezen'), t('losBestellen'), t('besteVoor'), ''].map(h => (
                    <th key={h} style={{ padding: '10px 10px', textAlign: 'left', fontWeight: 600, fontSize: 10, letterSpacing: '0.05em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {lijst.map((a, i) => {
                  const bezorgLabel = a.gratisBezorging ? 'Gratis' : `€${a.bezorgkosten?.toFixed(2).replace('.', ',')}`;
                  const bezorgGratis = a.gratisBezorging;
                  return (
                  <tr key={a.slug} style={{ borderBottom: '1px solid var(--rule)', background: i === 0 ? '#F0FDF4' : 'white' }}>
                    <td style={{ padding: '10px 10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontWeight: 600, whiteSpace: 'nowrap' }}>
                        <div style={{ width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', flexShrink: 0 }}>
                          {a.logo.startsWith('/')
                            ? <img src={a.logo} alt={a.naam} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                            : <span>{a.logo}</span>}
                        </div>
                        {a.naam}
                      </div>
                    </td>
                    <td style={{ padding: '10px 10px', fontWeight: 800, color: '#1B4332' }}>{a.score.totaal}</td>
                    <td style={{ padding: '10px 10px' }}>v.a. €{a.prijsPerPortie.toFixed(2).replace('.', ',')}</td>
                    <td style={{ padding: '10px 10px', textAlign: 'center' }}>{a.minMaaltijdenPerWeek === 1 ? '—' : `${a.minMaaltijdenPerWeek}/week`}</td>
                    <td style={{ padding: '10px 10px', color: bezorgGratis ? '#16A34A' : '#DC2626', fontWeight: 600 }}>{bezorgLabel}</td>
                    <td style={{ padding: '10px 10px', textAlign: 'center' }}>{a.belgisch ? '🇧🇪' : '—'}</td>
                    <td style={{ padding: '10px 10px', textAlign: 'center', color: a.leverdag ? '#16A34A' : '#DC2626', fontWeight: 700 }}>{a.leverdag ? '✓' : '✗'}</td>
                    <td style={{ padding: '10px 10px', textAlign: 'center', color: a.tijdstip ? '#16A34A' : '#DC2626', fontWeight: 700 }}>{a.tijdstip ? '✓' : '✗'}</td>
                    <td style={{ padding: '10px 10px', textAlign: 'center', color: a.losBestellenMogelijk ? '#16A34A' : '#DC2626', fontWeight: 700 }}>{a.losBestellenMogelijk ? '✓' : '✗'}</td>
                    <td style={{ padding: '10px 10px', fontSize: 11, color: '#374151', whiteSpace: 'nowrap' }}>{a.besteVoor}</td>
                    <td style={{ padding: '10px 10px' }}>
                      <Link href={`/aanbieder/${a.slug}`} style={{ color: '#1B4332', fontWeight: 700, textDecoration: 'none', fontSize: 11, whiteSpace: 'nowrap' }}>{t('review')}</Link>
                    </td>
                  </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div style={{ marginTop: 8, fontSize: 11, color: 'var(--muted)' }}>
            <strong>{t('leverdagKiezen')}</strong> <span dangerouslySetInnerHTML={{ __html: t('legenda') }} />
          </div>
        </div>

        {/* VERGELIJKINGEN & GIDSEN */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, paddingBottom: 14, borderBottom: '2px solid var(--ink)', flexWrap: 'wrap', gap: 8 }}>
            <h2 style={{ fontSize: 'clamp(18px, 4vw, 26px)', fontWeight: 900 }}>{t('vergelijkingenGidsen')}</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12 }}>
            {[
              { href: '/vergelijk/hellofresh-vs-foodbag', icon: '⚖️', label: t('l1'), sub: t('s1') },
              { href: '/vergelijk/hellofresh-vs-marley-spoon', icon: '⚖️', label: t('l2'), sub: t('s2') },
              { href: '/voor/gezin', icon: '👨‍👩‍👧', label: t('l3'), sub: t('s3') },
              { href: '/gids/goedkoopste-maaltijdbox-belgie', icon: '💰', label: t('l4'), sub: t('s4') },
            ].map(({ href, icon, label, sub }) => (
              <Link key={href} href={href} style={{ display: 'flex', alignItems: 'center', gap: 14, background: 'white', borderRadius: 12, border: '1px solid var(--rule)', padding: '16px 18px', textDecoration: 'none', color: 'var(--ink)' }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: '#E8F5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>{icon}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 2 }}>{label}</div>
                  <div style={{ fontSize: 12, color: 'var(--muted)' }}>{sub}</div>
                </div>
                <div style={{ marginLeft: 'auto', color: 'var(--muted)', fontSize: 16, flexShrink: 0 }}>→</div>
              </Link>
            ))}
          </div>
        </div>

        {/* UITLEG SECTIE */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            <div style={{ background: 'white', borderRadius: 16, padding: 24, border: '1px solid var(--rule)' }}>
              <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 14 }}>{t('hoeWerkt')}</h2>
              <p style={{ fontSize: 14, lineHeight: 1.8, color: '#4B5563', marginBottom: 10 }}>{t('uitleg1')}</p>
              <p style={{ fontSize: 14, lineHeight: 1.8, color: '#4B5563', marginBottom: 10 }}>{t('uitleg2')}</p>
              <p style={{ fontSize: 14, lineHeight: 1.8, color: '#4B5563' }}>{t('uitleg3')}</p>
            </div>
            <div style={{ background: 'white', borderRadius: 16, padding: 24, border: '1px solid var(--rule)' }}>
              <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 14 }}>{t('voorWie')}</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { icon: '👫', title: t('vw1t'), desc: t('vw1d') },
                  { icon: '👨‍👩‍👧', title: t('vw2t'), desc: t('vw2d') },
                  { icon: '🌱', title: t('vw3t'), desc: t('vw3d') },
                  { icon: '💰', title: t('vw4t'), desc: t('vw4d') },
                ].map(({ icon, title, desc }) => (
                  <div key={title} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <div style={{ fontSize: 18, flexShrink: 0, marginTop: 2 }}>{icon}</div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 1 }}>{title}</div>
                      <div style={{ fontSize: 12, color: '#6B7280', lineHeight: 1.5 }}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, paddingBottom: 14, borderBottom: '2px solid var(--ink)' }}>
            <h2 style={{ fontSize: 'clamp(18px, 4vw, 28px)', fontWeight: 900 }}>{t('veelgesteldeVragen')}</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 14 }}>
            {[
              ...[0, 1, 2, 3].map(i => ({ q: tf2(`v${i}`), a: tf2(`a${i}`) })),
            ].map(({ q, a }) => (
              <div key={q} style={{ background: 'white', borderRadius: 12, padding: 20, border: '1px solid var(--rule)' }}>
                <div style={{ fontFamily: 'Fraunces, serif', fontSize: 14, fontWeight: 700, marginBottom: 8, color: 'var(--ink)' }}>{q}</div>
                <div style={{ fontSize: 13, lineHeight: 1.7, color: '#4B5563' }}>{a}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}
