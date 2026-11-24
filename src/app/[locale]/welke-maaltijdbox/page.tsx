import type { Metadata } from 'next';
import Link from '@/components/TaalLink';
import Quiz from '@/components/Quiz';
import type { Locale } from '@/i18n/routing';
import { buildMetadata, faqJsonLd } from '@/lib/seo';

// Eigen pagina voor de keuzetest. De quiz op de homepage scoort sterk (bijna
// iedereen die start, maakt hem af; de helft klikt door naar een aanbieder),
// en "welke maaltijdbox (kiezen)" heeft eigen zoekvolume.

const T = {
  nl: {
    titel: 'Welke maaltijdbox past bij mij? Doe de test (1 minuut)',
    beschrijving: '7 korte vragen over je gezin, budget en kooktijd, en je weet welke Belgische maaltijdbox bij je past. Ook als je met maaltijdcheques wilt betalen of geen abonnement wilt.',
    kruimel: 'Welke maaltijdbox past bij mij?',
    h1: 'Welke maaltijdbox past bij mij?',
    intro: 'Beantwoord 7 korte vragen en we tonen de maaltijdbox die het best bij jou past. We houden rekening met je gezin, je budget, je kooktijd, of je in Wallonië woont, of je met maaltijdcheques wilt betalen en of je liever geen abonnement neemt.',
    hoeKop: 'Hoe kiest de test?',
    hoe: [
      'Elk antwoord geeft punten aan de aanbieders die daar het best scoren in onze reviews: prijs per portie, keuze, bereidingstijd, dieetopties en flexibiliteit.',
      'Harde voorwaarden gaan voor: wil je met maaltijdcheques betalen of zonder abonnement bestellen, dan krijg je enkel aanbieders te zien die dat echt toelaten.',
      'Je ziet daarna waarom die box bij je past en kan meteen de review of de vergelijking lezen.',
    ],
    verderKop: 'Liever zelf vergelijken?',
    verder: [
      { href: '/', label: 'Alle maaltijdboxen in België gerangschikt' },
      { href: '/gids/goedkoopste-maaltijdbox-belgie', label: 'Wat is de goedkoopste maaltijdbox?' },
      { href: '/blog/maaltijdbox-zonder-abonnement-belgie', label: 'Maaltijdbox zonder abonnement' },
      { href: '/blog/maaltijdbox-maaltijdcheques-belgie', label: 'Maaltijdbox betalen met maaltijdcheques' },
    ],
    faq: [
      { q: 'Welke maaltijdbox is de beste in België?', a: 'Dat hangt af van wat je zoekt: de goedkoopste, de meeste keuze, de snelste of zonder abonnement. Daarom vraagt de test eerst naar je situatie en toont hij dan de box die daar het best bij past.' },
      { q: 'Is de test gratis en moet ik iets invullen?', a: 'De test is gratis en anoniem. Je vult geen naam of e-mailadres in.' },
      { q: 'Kan ik een maaltijdbox kiezen zonder abonnement?', a: 'Ja. Kies je in de test voor zonder abonnement, dan krijg je enkel aanbieders te zien waar je per box kan bestellen.' },
    ],
    faqKop: 'Veelgestelde vragen',
  },
  fr: {
    titel: 'Quelle box repas me convient ? Faites le test (1 minute)',
    beschrijving: '7 questions rapides sur votre foyer, votre budget et votre temps en cuisine, et vous savez quelle box repas belge vous convient. Aussi pour payer en chèques-repas ou sans abonnement.',
    kruimel: 'Quelle box repas me convient ?',
    h1: 'Quelle box repas me convient ?',
    intro: 'Répondez à 7 questions rapides et nous vous montrons la box repas qui vous convient le mieux. Nous tenons compte de votre foyer, votre budget, votre temps en cuisine, si vous habitez en Wallonie, si vous voulez payer en chèques-repas et si vous préférez éviter un abonnement.',
    hoeKop: 'Comment le test choisit-il ?',
    hoe: [
      'Chaque réponse donne des points aux fournisseurs qui obtiennent les meilleurs résultats dans nos avis : prix par portion, choix, temps de préparation, options alimentaires et flexibilité.',
      'Les conditions strictes passent avant : si vous voulez payer en chèques-repas ou commander sans abonnement, vous ne voyez que des fournisseurs qui le permettent vraiment.',
      'Vous voyez ensuite pourquoi cette box vous convient et pouvez lire directement l’avis ou le comparatif.',
    ],
    verderKop: 'Vous préférez comparer vous-même ?',
    verder: [
      { href: '/', label: 'Toutes les box repas en Belgique classées' },
      { href: '/gids/goedkoopste-maaltijdbox-belgie', label: 'Quelle est la box repas la moins chère ?' },
      { href: '/blog/maaltijdbox-zonder-abonnement-belgie', label: 'Box repas sans abonnement' },
      { href: '/blog/maaltijdbox-maaltijdcheques-belgie', label: 'Payer une box repas en chèques-repas' },
    ],
    faq: [
      { q: 'Quelle est la meilleure box repas en Belgique ?', a: 'Cela dépend de ce que vous cherchez : la moins chère, le plus de choix, la plus rapide ou sans abonnement. C’est pourquoi le test vous interroge d’abord sur votre situation, puis montre la box qui y correspond le mieux.' },
      { q: 'Le test est-il gratuit et dois-je laisser mes coordonnées ?', a: 'Le test est gratuit et anonyme. Vous ne donnez ni nom ni adresse e-mail.' },
      { q: 'Puis-je choisir une box repas sans abonnement ?', a: 'Oui. Si vous choisissez « sans abonnement » dans le test, vous ne voyez que des fournisseurs chez qui vous pouvez commander box par box.' },
    ],
    faqKop: 'Questions fréquentes',
  },
} as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = T[locale === 'fr' ? 'fr' : 'nl'];
  return buildMetadata({
    locale: locale as Locale,
    route: '/welke-maaltijdbox',
    pad: '/welke-maaltijdbox',
    titel: t.titel,
    beschrijving: t.beschrijving,
    type: 'website',
  });
}

const H2 = { fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 900, marginBottom: 12, color: 'var(--ink)' } as const;
const P = { fontSize: 15, color: '#4B5563', lineHeight: 1.7 } as const;

export default async function WelkeMaaltijdboxPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const fr = locale === 'fr';
  const t = T[fr ? 'fr' : 'nl'];
  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '32px 20px 64px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd([...t.faq])) }} />
      <div style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 24 }}>
        <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>{fr ? 'Accueil' : 'Home'}</Link>
        {' → '}
        <strong style={{ color: 'var(--ink)' }}>{t.kruimel}</strong>
      </div>
      <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(28px, 7vw, 42px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 14 }}>{t.h1}</h1>
      <p style={{ ...P, marginBottom: 24 }}>{t.intro}</p>

      <div style={{ marginBottom: 40 }}>
        <Quiz />
      </div>

      <section style={{ marginBottom: 36 }}>
        <h2 style={H2}>{t.hoeKop}</h2>
        <ul style={{ paddingLeft: 20, margin: 0 }}>
          {t.hoe.map(r => <li key={r} style={{ ...P, marginBottom: 6 }}>{r}</li>)}
        </ul>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={H2}>{t.verderKop}</h2>
        <ul style={{ paddingLeft: 20, margin: 0, lineHeight: 2 }}>
          {t.verder.map(l => (
            <li key={l.href}><Link href={l.href} style={{ color: '#1B4332', fontWeight: 600, textDecoration: 'underline' }}>{l.label}</Link></li>
          ))}
        </ul>
      </section>

      <section>
        <h2 style={H2}>{t.faqKop}</h2>
        {t.faq.map(({ q, a }) => (
          <div key={q} style={{ marginBottom: 16 }}>
            <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: 17, fontWeight: 800, marginBottom: 6 }}>{q}</h3>
            <p style={{ ...P, margin: 0 }}>{a}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
