import type { ReactNode } from 'react';
import HelloFreshGidsen from '@/components/HelloFreshGidsen';
import HelloFreshNovemberActie from '@/components/HelloFreshNovemberActie';
import Link from '@/components/TaalLink';
import { laatstBijgewerkt } from '@/lib/site';

// De metadata voor deze route staat in layout.tsx. Stond hier eerder ook,
// met een afwijkende titel; Next koos dan deze en de layout-versie was dood.

interface Tekst {
  home: string;
  codes: string;
  kruimel: string;
  badge: string;
  h1: (datum: string) => string;
  intro: ReactNode;
  kaartTitel: string;
  kaartSub: string;
  cta: ReactNode;
  kaartNoot: string;
  stappenKop: string;
  stappen: string[];
  voorwaardenKop: string;
  voorwaarden: string[];
  /** Oude GreenPan-actie: de verwijzing van de oude actiepagina komt hier aan. */
  greenpanKop: string;
  greenpan: string[];
  waaromKop: string;
  waarom: string;
  review: string;
  alles: string;
}

const TEKST: Record<'nl' | 'fr', Tekst> = {
  nl: {
    home: 'Home',
    codes: 'Kortingscodes',
    kruimel: 'HelloFresh kortingscode',
    badge: '🔥 Tijdelijke actie',
    h1: d => `HelloFresh kortingscode ${d} — tot €70 korting op je eerste 3 boxen`,
    intro: <>
      HelloFresh geeft nieuwe klanten momenteel{' '}
      <strong>tot €70 korting verdeeld over je eerste 3 boxen</strong>. De korting wordt{' '}
      <strong>automatisch toegepast via onze link</strong> — je hoeft geen code in te voeren.
      Exclusief voor nieuwe klanten in België.
    </>,
    kaartTitel: 'Tot €70 korting op je eerste 3 boxen',
    kaartSub: 'Automatisch toegepast via onze link · geen code nodig',
    cta: <>Activeer deal &amp; ga naar HelloFresh →</>,
    kaartNoot: 'Korting verdeeld over je eerste 3 boxen · enkel nieuwe klanten',
    stappenKop: 'Hoe activeer je de korting?',
    stappen: [
      'Klik op "Activeer deal" hierboven.',
      'Je wordt doorgestuurd naar HelloFresh — geen code nodig, de korting staat klaar via onze link.',
      'Meld je aan als nieuwe klant en stel je eerste box samen.',
      'De korting wordt automatisch verdeeld over je eerste 3 boxen — samen tot €70 voordeel (€45 + €15 + €10).',
    ],
    voorwaardenKop: 'Actievoorwaarden (samenvatting)',
    voorwaarden: [
      'Exclusief voor nieuwe klanten of klanten die >1 jaar geleden hebben opgezegd',
      'Kortingsverdeling over je eerste 3 boxen: €45 + €15 + €10 (samen €70)',
      'Eerste bezorging gratis, daarna worden bezorgkosten aangerekend',
      'Korting vervalt 56 dagen na bestelling van je 1e box',
      'Wekelijks opzegbaar + 14 dagen herroepingsrecht',
    ],
    greenpanKop: 'Krijg je nog een gratis GreenPan-pan bij HelloFresh?',
    greenpan: [
      'Nee. De actie waarbij nieuwe klanten een gratis GreenPan-pan kregen, liep in mei en juni 2026 en is afgelopen. Bij onze laatste controle (13 oktober 2026) zagen we geen nieuwe actie met een pan.',
      'Wat er nu wel is: tot €70 korting op je eerste 3 boxen (€45 + €15 + €10), automatisch via onze link. Komt er een nieuwe pan-actie, dan zetten we die hier.',
    ],
    waaromKop: 'Waarom HelloFresh?',
    waarom: 'HelloFresh is de grootste maaltijdbox ter wereld en ook in België de populairste keuze. Met meer dan 80 recepten per week, levering in heel België en een score van 8,4/10 op deze site biedt het de beste balans tussen prijs, variatie en gemak. Bereidingstijd gemiddeld 25–35 minuten.',
    review: 'Lees onze volledige HelloFresh review →',
    alles: '← Alle kortingscodes bekijken',
  },
  fr: {
    home: 'Accueil',
    codes: 'Codes promo',
    kruimel: 'Code promo HelloFresh',
    badge: '🔥 Offre temporaire',
    h1: d => `Code promo HelloFresh ${d} — jusqu’à 70 € de réduction sur vos 3 premières box`,
    intro: <>
      HelloFresh offre actuellement aux nouveaux clients{' '}
      <strong>jusqu&apos;à 70 € de réduction répartis sur les 3 premières box</strong>. La réduction est{' '}
      <strong>appliquée automatiquement via notre lien</strong> : aucun code à saisir.
      Réservé aux nouveaux clients en Belgique, Wallonie comprise.
    </>,
    kaartTitel: 'Jusqu’à 70 € de réduction sur vos 3 premières box',
    kaartSub: 'Appliquée automatiquement via notre lien · sans code',
    cta: <>Activer l&apos;offre et aller chez HelloFresh →</>,
    kaartNoot: 'Réduction répartie sur vos 3 premières box · nouveaux clients uniquement',
    stappenKop: 'Comment activer la réduction ?',
    stappen: [
      'Cliquez sur « Activer l’offre » ci-dessus.',
      'Vous arrivez chez HelloFresh : aucun code à saisir, la réduction est prête via notre lien.',
      'Inscrivez-vous comme nouveau client et composez votre première box.',
      'La réduction est répartie automatiquement sur vos 3 premières box : jusqu’à 70 € au total (45 € + 15 € + 10 €).',
    ],
    voorwaardenKop: 'Conditions de l’offre (résumé)',
    voorwaarden: [
      'Réservé aux nouveaux clients ou aux clients ayant résilié il y a plus d’un an',
      'Répartition sur vos 3 premières box : 45 € + 15 € + 10 € (70 € au total)',
      'Première livraison gratuite, ensuite des frais de livraison sont facturés',
      'Résiliable chaque semaine + droit de rétractation de 14 jours',
    ],
    greenpanKop: 'Reçoit-on encore une poêle GreenPan offerte chez HelloFresh ?',
    greenpan: [
      "Non. L'action qui offrait une poêle GreenPan aux nouveaux clients a eu lieu en mai et juin 2026 et est terminée. Lors de notre dernier contrôle (13 octobre 2026), nous n'avons vu aucune nouvelle action avec une poêle.",
      "Ce qui existe aujourd'hui : jusqu'à 70 € de réduction sur vos 3 premières box (45 € + 15 € + 10 €), automatiquement via notre lien. Si une nouvelle action avec une poêle arrive, nous l'ajouterons ici.",
    ],
    waaromKop: 'Pourquoi HelloFresh ?',
    waarom: 'HelloFresh est le plus grand box repas au monde et aussi le choix le plus populaire en Belgique. Avec plus de 80 recettes par semaine, une livraison dans toute la Belgique (Wallonie comprise) et une note de 8,4/10 sur ce site, il offre le meilleur équilibre entre prix, variété et facilité. Temps de préparation : 25 à 35 minutes en moyenne.',
    review: 'Lire notre avis complet sur HelloFresh →',
    alles: '← Voir tous les codes promo',
  },
};

export default async function HelloFreshKortingscode({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const taal = locale === 'fr' ? 'fr' : 'nl';
  const t = TEKST[taal];
  const datum = laatstBijgewerkt(taal);

  return (
    <div style={{ maxWidth: 680, margin: '0 auto', padding: '40px 20px 64px' }}>

      {/* Breadcrumb */}
      <div style={{ fontSize: 13, color: '#9CA3AF', marginBottom: 28, display: 'flex', flexWrap: 'wrap', gap: '2px 4px', alignItems: 'center' }}>
        <Link href="/" style={{ color: '#9CA3AF', textDecoration: 'none', whiteSpace: 'nowrap' }}>{t.home}</Link>
        <span aria-hidden="true">→</span>
        <Link href="/kortingscodes" style={{ color: '#9CA3AF', textDecoration: 'none', whiteSpace: 'nowrap' }}>{t.codes}</Link>
        <span aria-hidden="true">→</span>
        <strong style={{ color: '#1C1C1C', whiteSpace: 'nowrap' }}>{t.kruimel}</strong>
      </div>

      {/* Badge */}
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#FEF3C7', border: '1px solid #FCD34D', borderRadius: 100, padding: '5px 14px', fontSize: 12, fontWeight: 700, color: '#92400E', marginBottom: 16 }}>
        {t.badge} · {datum}
      </div>

      {/* H1 */}
      <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(24px, 5vw, 36px)', fontWeight: 900, color: '#1C1C1C', lineHeight: 1.15, marginBottom: 12 }}>
        {t.h1(datum)}
      </h1>

      <p style={{ fontSize: 15, color: '#4B5563', lineHeight: 1.7, marginBottom: 28 }}>
        {t.intro}
      </p>

      <HelloFreshNovemberActie taal={taal} plaatsing="hellofresh-actie-kortingscode" />

      {/* Promo-kaart */}
      <div style={{
        background: 'linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)',
        border: '2px solid #86EFAC',
        borderRadius: 20, padding: '28px 24px', textAlign: 'center', marginBottom: 24,
      }}>
        <div style={{ fontSize: 40, marginBottom: 10 }}>🥗</div>
        <div style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(20px, 5vw, 28px)', fontWeight: 900, color: '#1B4332', lineHeight: 1.2, marginBottom: 8 }}>
          {t.kaartTitel}
        </div>
        <div style={{ fontSize: 14, color: '#4B5563', marginBottom: 20, lineHeight: 1.6 }}>
          {t.kaartSub}
        </div>
        <Link data-plaatsing="kortingscode-cta"
          href="/ga/hellofresh"
          rel="noopener sponsored nofollow"
          style={{
            display: 'block', background: '#1B4332', color: 'white',
            textAlign: 'center', padding: '15px 20px', borderRadius: 12,
            fontWeight: 700, fontSize: 16, textDecoration: 'none',
            marginBottom: 10,
          }}
        >
          {t.cta}
        </Link>
        <div style={{ fontSize: 12, color: '#6B7280', lineHeight: 1.5 }}>
          {t.kaartNoot}
        </div>
      </div>

      {/* Stappenplan */}
      <div style={{ marginBottom: 32 }}>
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 16, color: '#1C1C1C' }}>
          {t.stappenKop}
        </h2>
        <ol style={{ paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {t.stappen.map((stap, i) => (
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
          {t.voorwaardenKop}
        </h3>
        <ul style={{ paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
          {t.voorwaarden.map((v, i) => (
            <li key={i} style={{ fontSize: 13, color: '#4B5563', display: 'flex', gap: 8 }}>
              <span style={{ color: '#1B4332', fontWeight: 700, flexShrink: 0 }}>✓</span>
              {v}
            </li>
          ))}
        </ul>
      </div>

      {/* GreenPan: wie de oude actiepagina zocht, komt hier terecht */}
      <div id="greenpan" style={{ marginBottom: 32, scrollMarginTop: 80 }}>
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 12, color: '#1C1C1C' }}>
          {t.greenpanKop}
        </h2>
        {t.greenpan.map((alinea, i) => (
          <p key={i} style={{ fontSize: 15, color: '#4B5563', lineHeight: 1.7, marginBottom: 10 }}>{alinea}</p>
        ))}
      </div>

      <HelloFreshGidsen taal={taal} />

      {/* Over HelloFresh */}
      <div style={{ marginBottom: 32 }}>
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 12, color: '#1C1C1C' }}>
          {t.waaromKop}
        </h2>
        <p style={{ fontSize: 15, color: '#4B5563', lineHeight: 1.7, marginBottom: 12 }}>
          {t.waarom}
        </p>
        <Link href="/aanbieder/hellofresh" style={{ fontSize: 14, fontWeight: 700, color: '#1B4332', textDecoration: 'underline' }}>
          {t.review}
        </Link>
      </div>

      <Link href="/kortingscodes" style={{ fontSize: 14, color: '#9CA3AF', textDecoration: 'none' }}>
        {t.alles}
      </Link>
    </div>
  );
}
