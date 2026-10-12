import Link from '@/components/TaalLink';
import { SITE_URL, absoluteUrl } from '@/lib/seo';
import { aanbiederVoor } from '@/lib/teksten';
import { lokaliseerPad } from '@/i18n/paden';
import type { Locale } from '@/i18n/routing';
import type { FactorVergelijking } from '@/lib/factorVergelijkingen';
import GesponsordLabel from '@/components/GesponsordLabel';

const FACTOR_ACCENT = '#B45309';
const kookboxAccent: Record<string, string> = {
  hellofresh: '#1B4332',
  foodbag: '#1E40AF',
  'marley-spoon': '#7C3AED',
};

const LABELS = {
  nl: {
    home: 'Home', vergelijk: 'Vergelijk', badge: '✓ Onafhankelijk vergeleken · 2026',
    h1: (n: string) => `Factor vs ${n}: opwarmen of zelf koken?`,
    sponsor: (n: string) => `Deze pagina kwam tot stand in samenwerking met Factor. Onze scores en rangschikking blijven onafhankelijk — ${n} scoort in onze test hoger dan Factor.`,
    totaalscore: '/10 totaalscore', va: 'v.a.', portie: 'portie',
    overzicht: 'Snel overzicht', kenmerk: 'Kenmerk',
    rijen: ['Bereidingswijze', 'Kooktijd', 'Prijs per portie', 'Bezorging', 'Recepten per week', 'Levergebied', 'Onze score'],
    kantEnKlaar: 'Kant-en-klaar (opwarmen)', zelfKoken: 'Zelf koken', gratis: 'Gratis', heelBelgie: 'Heel België',
    voetnoot: 'Prijzen zijn richtprijzen en kunnen wijzigen. Reken je werkelijke weekprijs: portieprijs × porties + bezorgkost − welkomstkorting.',
    kies: (n: string) => `Kies ${n} als…`, verdict: '⚖️ Ons verdict',
    verdictKop: (n: string) => `Factor of ${n} — het hangt af van jou`,
    bekijk: (n: string) => `Bekijk ${n} →`, faq: 'Veelgestelde vragen',
    alle: '← Bekijk alle maaltijdboxen', review: (n: string) => `Volledige ${n} review →`,
    geld: (x: number) => `€${x.toFixed(2).replace('.', ',')}`,
  },
  fr: {
    home: 'Accueil', vergelijk: 'Comparatif', badge: '✓ Comparaison indépendante · 2026',
    h1: (n: string) => `Factor ou ${n} : réchauffer ou cuisiner ?`,
    sponsor: (n: string) => `Cette page a été réalisée en collaboration avec Factor. Nos notes et notre classement restent indépendants : ${n} obtient une meilleure note que Factor dans notre test.`,
    totaalscore: '/10 note globale', va: 'dès', portie: 'portion',
    overzicht: 'Aperçu rapide', kenmerk: 'Critère',
    rijen: ['Préparation', 'Temps de cuisine', 'Prix par portion', 'Livraison', 'Recettes par semaine', 'Zone de livraison', 'Notre note'],
    kantEnKlaar: 'Plat préparé (à réchauffer)', zelfKoken: 'À cuisiner', gratis: 'Gratuite', heelBelgie: 'Toute la Belgique',
    voetnoot: 'Les prix sont indicatifs et peuvent changer. Calculez votre prix réel par semaine : prix par portion × portions + livraison − réduction de bienvenue.',
    kies: (n: string) => `Choisissez ${n} si…`, verdict: '⚖️ Notre verdict',
    verdictKop: (n: string) => `Factor ou ${n} : tout dépend de vous`,
    bekijk: (n: string) => `Voir ${n} →`, faq: 'Questions fréquentes',
    alle: '← Voir tous les box repas', review: (n: string) => `Avis complet sur ${n} →`,
    geld: (x: number) => `${x.toFixed(2).replace('.', ',')} €`,
  },
};

// Gedeelde render voor de gesponsorde Factor-vs-kookbox-pagina's.
// Eerlijke "hangt af van of je wil koken"-opzet — geen valse winnaar-claim.
export default function FactorVergelijkingPagina({ data, taal = 'nl' }: { data: FactorVergelijking; taal?: Locale }) {
  const L = LABELS[taal === 'fr' ? 'fr' : 'nl'];
  const factor = aanbiederVoor('factor', taal)!;
  const kookbox = aanbiederVoor(data.kookboxSlug, taal)!;
  const accent = kookboxAccent[data.kookboxSlug] ?? '#1B4332';
  const canonical = absoluteUrl(lokaliseerPad(`/vergelijk/${data.slug}`, taal));

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faq.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: L.home, item: taal === 'fr' ? absoluteUrl('/fr') : SITE_URL },
      { '@type': 'ListItem', position: 2, name: L.vergelijk, item: absoluteUrl(lokaliseerPad('/vergelijk', taal)) },
      { '@type': 'ListItem', position: 3, name: `Factor vs ${kookbox.naam}`, item: canonical },
    ],
  };

  const [rBereiding, rKooktijd, rPrijs, rBezorging, rRecepten, rGebied, rScore] = L.rijen;
  const tabel: Array<[string, string, string]> = [
    [rBereiding, L.kantEnKlaar, L.zelfKoken],
    [rKooktijd, '2–3 min', data.kookboxKooktijd],
    [rPrijs, `${L.va} ${L.geld(factor.prijsPerPortie)}`, `${L.va} ${L.geld(kookbox.prijsPerPortie)}`],
    [rBezorging, factor.gratisBezorging ? L.gratis : L.geld(factor.bezorgkosten ?? 0), kookbox.gratisBezorging ? L.gratis : L.geld(kookbox.bezorgkosten ?? 0)],
    [rRecepten, `${factor.receptenPerWeek}`, `${kookbox.receptenPerWeek}+`],
    [rGebied, L.heelBelgie, data.kookboxLevergebied],
    [rScore, `${factor.score.totaal.toFixed(1)}/10`, `${kookbox.score.totaal.toFixed(1)}/10`],
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 20px 64px' }}>
        {/* Breadcrumb */}
        <div style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 24 }}>
          <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>{L.home}</Link>
          {' → '}
          <span style={{ color: 'var(--muted)' }}>{L.vergelijk}</span>
          {' → '}
          <strong style={{ color: 'var(--ink)' }}>Factor vs {kookbox.naam}</strong>
        </div>

        {/* Header */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#E8F5EE', border: '1px solid #A7DFC0', borderRadius: 100, padding: '5px 14px', fontSize: 12, fontWeight: 600, color: '#1B4332', marginBottom: 16 }}>
            {L.badge}
          </div>
          <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(26px, 7vw, 42px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 16 }}>
            {L.h1(kookbox.naam)}
          </h1>
          {data.intro.map((p, i) => (
            <p key={i} style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, maxWidth: 680, marginBottom: 12 }}>{p}</p>
          ))}
        </div>

        {/* Sponsor-disclosure */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#FFFBEB', border: '1px solid #FDE68A', borderRadius: 10, padding: '10px 14px', marginBottom: 32 }}>
          <GesponsordLabel />
          <span style={{ fontSize: 13, color: '#92400E', lineHeight: 1.5 }}>
            {L.sponsor(kookbox.naam)}
          </span>
        </div>

        {/* Score-overzicht */}
        <div className="two-col-grid" style={{ marginBottom: 36 }}>
          {[{ a: factor, ac: FACTOR_ACCENT }, { a: kookbox, ac: accent }].map(({ a, ac }) => (
            <div key={a.slug} style={{ background: 'white', borderRadius: 16, border: `2px solid ${ac}`, padding: 24, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: ac }} />
              <div style={{ fontSize: 32, marginBottom: 8 }}>
                <img src={a.logo} alt={a.naam} style={{ height: a.slug === 'factor' ? 22 : 48, width: 'auto', maxWidth: 120, objectFit: 'contain' }} />
              </div>
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 900, marginBottom: 4 }}>{a.naam}</div>
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: 40, fontWeight: 900, color: ac, lineHeight: 1 }}>{a.score.totaal.toFixed(1)}</div>
              <div style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 12 }}>{L.totaalscore}</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: ac }}>{L.va} {L.geld(a.prijsPerPortie)}/{L.portie}</div>
              <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 4 }}>{a.tagline}</div>
            </div>
          ))}
        </div>

        {/* Snel overzicht */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 900, marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>{L.overzicht}</h2>
          <div style={{ borderRadius: 12, overflowX: 'auto', border: '1.5px solid var(--rule)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ background: '#1B4332', color: 'white' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, fontSize: 11, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{L.kenmerk}</th>
                  <th style={{ padding: '12px 16px', textAlign: 'center', fontWeight: 600, fontSize: 11, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Factor</th>
                  <th style={{ padding: '12px 16px', textAlign: 'center', fontWeight: 600, fontSize: 11, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{kookbox.naam}</th>
                </tr>
              </thead>
              <tbody>
                {tabel.map(([k, f, kb], i) => (
                  <tr key={k} style={{ borderBottom: '1px solid var(--rule)', background: i % 2 === 0 ? 'white' : '#FAFAFA' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 700 }}>{k}</td>
                    <td style={{ padding: '12px 16px', textAlign: 'center' }}>{f}</td>
                    <td style={{ padding: '12px 16px', textAlign: 'center' }}>{kb}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 12, color: 'var(--muted)', marginTop: 8 }}>{L.voetnoot}</p>
        </div>

        {/* Kies Factor als */}
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 900, marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>{L.kies('Factor')}</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {data.kiesFactorAls.map((item) => (
              <li key={item} style={{ display: 'flex', gap: 10, fontSize: 14, lineHeight: 1.6, color: '#4B5563', background: 'white', border: '1px solid var(--rule)', borderRadius: 8, padding: '12px 16px' }}>
                <span style={{ color: FACTOR_ACCENT, fontWeight: 700, flexShrink: 0 }}>✓</span>{item}
              </li>
            ))}
          </ul>
        </div>

        {/* Kies kookbox als */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 900, marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>{L.kies(kookbox.naam)}</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {data.kiesKookboxAls.map((item) => (
              <li key={item} style={{ display: 'flex', gap: 10, fontSize: 14, lineHeight: 1.6, color: '#4B5563', background: 'white', border: '1px solid var(--rule)', borderRadius: 8, padding: '12px 16px' }}>
                <span style={{ color: accent, fontWeight: 700, flexShrink: 0 }}>✓</span>{item}
              </li>
            ))}
          </ul>
        </div>

        {/* Verdict */}
        <div style={{ background: 'white', borderRadius: 16, border: `1.5px solid ${FACTOR_ACCENT}`, padding: 28, marginBottom: 40, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: FACTOR_ACCENT }} />
          <div style={{ fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 100, background: '#FEF3C7', color: '#92400E', display: 'inline-block', marginBottom: 12 }}>{L.verdict}</div>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 10 }}>{L.verdictKop(kookbox.naam)}</h2>
          <p style={{ fontSize: 14, lineHeight: 1.8, color: '#4B5563', marginBottom: 20 }}>{data.verdictTekst}</p>
          <div className="two-col-grid" style={{ gap: 12 }}>
            <Link href="/ga/factor" rel="noopener sponsored nofollow" style={{ display: 'block', background: FACTOR_ACCENT, color: 'white', textAlign: 'center', padding: '13px', borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
              {L.bekijk('Factor')}
            </Link>
            <Link data-plaatsing="factor-vergelijk" href={`/ga/${kookbox.slug}`} rel="noopener sponsored nofollow" style={{ display: 'block', background: 'white', color: accent, textAlign: 'center', padding: '13px', borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none', border: `2px solid ${accent}` }}>
              {L.bekijk(kookbox.naam)}
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>{L.faq}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {data.faq.map(({ q, a }) => (
              <div key={q} style={{ background: 'white', borderRadius: 12, padding: 20, border: '1px solid var(--rule)' }}>
                <div style={{ fontFamily: 'Fraunces, serif', fontSize: 14, fontWeight: 700, marginBottom: 8 }}>{q}</div>
                <div style={{ fontSize: 13, lineHeight: 1.7, color: '#4B5563' }}>{a}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer links */}
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', paddingTop: 24, borderTop: '1px solid var(--rule)' }}>
          <Link href="/" style={{ fontSize: 14, color: 'var(--muted)', textDecoration: 'none' }}>{L.alle}</Link>
          <Link href="/aanbieder/factor" style={{ fontSize: 14, color: 'var(--muted)', textDecoration: 'none' }}>{L.review('Factor')}</Link>
          <Link href={`/aanbieder/${kookbox.slug}`} style={{ fontSize: 14, color: 'var(--muted)', textDecoration: 'none' }}>{L.review(kookbox.naam)}</Link>
        </div>
      </div>
    </>
  );
}
