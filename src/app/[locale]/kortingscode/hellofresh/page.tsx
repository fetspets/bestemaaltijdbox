import type { ReactNode } from 'react';
import HelloFreshGidsen from '@/components/HelloFreshGidsen';
import HelloFreshNovemberActie from '@/components/HelloFreshNovemberActie';
import Link from '@/components/TaalLink';
import { laatstBijgewerkt } from '@/lib/site';
import { faqJsonLd } from '@/lib/seo';

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
  /** Waarom andere sites hogere bedragen tonen (gecontroleerd op hellofresh.be). */
  bedragenKop: string;
  bedragen: string[];
  nietWerktKop: string;
  nietWerkt: string[];
  faqKop: string;
  faq: Array<{ q: string; a: string }>;
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
      'Nee. De actie waarbij nieuwe klanten een gratis GreenPan-pan kregen, liep in mei en juni 2026 en is afgelopen. Bij onze laatste controle (2 november 2026) zagen we geen nieuwe actie met een pan.',
      'Wat er nu wel is: tot €70 korting op je eerste 3 boxen (€45 + €15 + €10), automatisch via onze link. Wie zich tot en met 30 november 2026 inschrijft, krijgt er bovendien een gratis Peugeot-molenset bij. Komt er een nieuwe pan-actie, dan zetten we die hier.',
    ],
    bedragenKop: 'Waarom zie je elders €75, €90 of zelfs €110 korting?',
    bedragen: [
      'Wie op "HelloFresh kortingscode" zoekt, ziet bedragen die flink uiteenlopen. Dat komt meestal doordat kortingssites Nederlandse acties (voor hellofresh.nl) of oudere acties tonen, of de gratis eerste levering meetellen.',
      'Wij keken op 23 november 2026 op hellofresh.be zelf: daar staat voor nieuwe klanten in België "tot €70 korting". Dat is ook wat je via onze link krijgt: €45 + €15 + €10 op je eerste 3 boxen.',
    ],
    nietWerktKop: 'Werkt je HelloFresh-kortingscode niet? De 5 vaakste oorzaken',
    nietWerkt: [
      'Je was de afgelopen 12 maanden al klant: de welkomstkorting is enkel voor nieuwe klanten of wie langer dan een jaar geleden opzegde.',
      'Iemand op hetzelfde adres had al een box met welkomstkorting: HelloFresh kan de korting per huishouden beperken.',
      'Het is een Nederlandse code: die is bedoeld voor hellofresh.nl en niet voor de Belgische site.',
      'Je probeert twee acties te combineren: kortingen zijn meestal niet cumuleerbaar.',
      'De code is verlopen: kortingssites laten oude codes vaak staan. Via onze link heb je geen code nodig, de korting staat er automatisch op.',
    ],
    faqKop: 'Veelgestelde vragen over HelloFresh-korting',
    faq: [
      { q: 'Is er een HelloFresh Black Friday-korting in 2026?', a: 'Bij onze controle op 23 november 2026 toonde de Black Friday-pagina van HelloFresh België dezelfde welkomstkorting als de rest van het jaar: tot €70 op je eerste 3 boxen. Een extra Black Friday-korting zagen we niet. Komt die er toch, dan vermelden we ze hier.' },
      { q: 'Heb ik een kortingscode nodig voor HelloFresh?', a: 'Nee. Via onze link wordt de welkomstkorting automatisch toegepast wanneer je je als nieuwe klant inschrijft. Je hoeft niets in te vullen.' },
      { q: 'Krijg ik ook korting als bestaande klant?', a: 'De welkomstkorting is enkel voor nieuwe klanten of klanten die langer dan een jaar geleden opzegden. Als bestaande klant kan je wel vrienden uitnodigen via je account; zij krijgen dan korting op hun eerste box.' },
      { q: 'Kan ik HelloFresh na de korting gewoon stopzetten?', a: 'Ja. Je abonnement is wekelijks te pauzeren of op te zeggen via je account, ook tijdens de periode waarin je korting krijgt. Let wel op de deadline om een levering nog aan te passen.' },
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
      "Non. L'action qui offrait une poêle GreenPan aux nouveaux clients a eu lieu en mai et juin 2026 et est terminée. Lors de notre dernier contrôle (2 novembre 2026), nous n'avons vu aucune nouvelle action avec une poêle.",
      "Ce qui existe aujourd'hui : jusqu'à 70 € de réduction sur vos 3 premières box (45 € + 15 € + 10 €), automatiquement via notre lien. En vous inscrivant jusqu'au 30 novembre 2026, vous recevez en plus un set de moulins Peugeot offert. Si une nouvelle action avec une poêle arrive, nous l'ajouterons ici.",
    ],
    bedragenKop: 'Pourquoi voit-on ailleurs 75 €, 90 € voire 110 € de réduction ?',
    bedragen: [
      'En cherchant « code promo HelloFresh », on tombe sur des montants très différents. La plupart du temps, les sites de codes promo affichent des offres néerlandaises (pour hellofresh.nl), d’anciennes actions, ou comptent la première livraison gratuite.',
      'Nous avons vérifié le 23 novembre 2026 directement sur hellofresh.be : pour les nouveaux clients en Belgique, c’est « jusqu’à 70 € de réduction ». C’est aussi ce que vous obtenez via notre lien : 45 € + 15 € + 10 € sur vos 3 premières box.',
    ],
    nietWerktKop: 'Votre code promo HelloFresh ne fonctionne pas ? Les 5 causes les plus fréquentes',
    nietWerkt: [
      'Vous étiez déjà client au cours des 12 derniers mois : l’offre de bienvenue est réservée aux nouveaux clients ou à ceux qui ont résilié il y a plus d’un an.',
      'Quelqu’un à la même adresse a déjà reçu une box avec la réduction de bienvenue : HelloFresh peut limiter l’offre par ménage.',
      'C’est un code néerlandais : il est prévu pour hellofresh.nl et non pour le site belge.',
      'Vous essayez de cumuler deux offres : les réductions ne sont généralement pas cumulables.',
      'Le code a expiré : les sites de codes laissent souvent d’anciens codes en ligne. Via notre lien, aucun code n’est nécessaire, la réduction est appliquée automatiquement.',
    ],
    faqKop: 'Questions fréquentes sur les réductions HelloFresh',
    faq: [
      { q: 'Y a-t-il une réduction Black Friday chez HelloFresh en 2026 ?', a: 'Lors de notre contrôle du 23 novembre 2026, la page Black Friday de HelloFresh Belgique affichait la même offre de bienvenue que le reste de l’année : jusqu’à 70 € sur vos 3 premières box. Nous n’avons pas vu de réduction Black Friday supplémentaire. Si elle arrive, nous l’indiquerons ici.' },
      { q: 'Ai-je besoin d’un code promo pour HelloFresh ?', a: 'Non. Via notre lien, l’offre de bienvenue est appliquée automatiquement lorsque vous vous inscrivez comme nouveau client. Vous n’avez rien à saisir.' },
      { q: 'Ai-je droit à une réduction en tant que client existant ?', a: 'L’offre de bienvenue est réservée aux nouveaux clients ou à ceux qui ont résilié il y a plus d’un an. En tant que client, vous pouvez par contre parrainer des amis via votre compte ; ils reçoivent alors une réduction sur leur première box.' },
      { q: 'Puis-je arrêter HelloFresh après la réduction ?', a: 'Oui. Votre abonnement peut être mis en pause ou résilié chaque semaine via votre compte, même pendant la période de réduction. Faites juste attention à la date limite pour modifier une livraison.' },
    ],
    waaromKop: 'Pourquoi HelloFresh ?',
    waarom: 'HelloFresh est le plus grand box repas au monde et aussi le choix le plus populaire en Belgique. Avec plus de 80 recettes par semaine, une livraison dans toute la Belgique (Wallonie comprise) et une note de 8,4/10 sur ce site, il offre le meilleur équilibre entre prix, variété et facilité. Temps de préparation : 25 à 35 minutes en moyenne.',
    review: 'Lire notre avis complet sur HelloFresh →',
    alles: '← Voir tous les codes promo',
  },
};

const H2 = { fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 12, color: '#1C1C1C' } as const;
const P = { fontSize: 15, color: '#4B5563', lineHeight: 1.7, marginBottom: 10 } as const;

export default async function HelloFreshKortingscode({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const taal = locale === 'fr' ? 'fr' : 'nl';
  const t = TEKST[taal];
  const datum = laatstBijgewerkt(taal);

  return (
    <div style={{ maxWidth: 680, margin: '0 auto', padding: '40px 20px 64px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(t.faq)) }} />

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

      {/* Waarom elders hogere bedragen */}
      <div style={{ marginBottom: 32 }}>
        <h2 style={H2}>{t.bedragenKop}</h2>
        {t.bedragen.map((alinea, i) => (
          <p key={i} style={P}>{alinea}</p>
        ))}
      </div>

      {/* Code werkt niet */}
      <div style={{ marginBottom: 32 }}>
        <h2 style={H2}>{t.nietWerktKop}</h2>
        <ol style={{ paddingLeft: 20, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {t.nietWerkt.map((r, i) => (
            <li key={i} style={{ fontSize: 15, color: '#4B5563', lineHeight: 1.7 }}>{r}</li>
          ))}
        </ol>
        <Link data-plaatsing="kortingscode-nietwerkt" href="/ga/hellofresh" rel="noopener sponsored nofollow" style={{ display: 'inline-block', marginTop: 14, fontSize: 14, fontWeight: 700, color: '#1B4332', textDecoration: 'underline' }}>
          {taal === 'fr' ? 'Obtenir la réduction sans code →' : 'Krijg de korting zonder code →'}
        </Link>
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

      {/* FAQ */}
      <div style={{ marginBottom: 32 }}>
        <h2 style={H2}>{t.faqKop}</h2>
        {t.faq.map(({ q, a }) => (
          <div key={q} style={{ marginBottom: 16 }}>
            <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: 16, fontWeight: 800, marginBottom: 6, color: '#1C1C1C' }}>{q}</h3>
            <p style={{ ...P, marginBottom: 0 }}>{a}</p>
          </div>
        ))}
      </div>

      <HelloFreshGidsen taal={taal} metKortingscode={false} />

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
