import KortingscodeDetail, { type KortingscodeTekst } from '@/components/KortingscodeDetail';

const TEKST: Record<'nl' | 'fr', KortingscodeTekst> = {
  nl: {
    kruimelHome: 'Home',
    kruimelCodes: 'Kortingscodes',
    kruimelNaam: 'Factor kortingscode',
    badge: '✓ Gecontroleerd geldig 2026',
    h1: 'Factor kortingscode 2026 — 40% korting op je eerste box',
    intro: <>Met de exclusieve Factor welkomstdeal bespaar je <strong>40% op je eerste box</strong> en nog eens <strong>25% op elk van de volgende vijf boxen</strong>. Geldig voor nieuwe klanten — de korting wordt <strong>automatisch toegepast via onze link</strong>, je hoeft geen code in te voeren.</>,
    voordeelLabel: 'Jouw voordeel',
    voordeelGroot: '40% + 25%',
    voordeelSub: '40% op je eerste box + 25% op de volgende vijf — geen code nodig',
    ctaTekst: 'Activeer 40% korting bij Factor →',
    stappenKop: 'Hoe activeer je de korting?',
    stapLabel: 'Stap',
    stappen: [
      'Klik op "Activeer 40% korting bij Factor" hierboven',
      'Je gaat via onze link naar Factor en maakt een account aan',
      'De korting staat al klaar — je hoeft geen code in te voeren',
      'Geniet van 40% korting op je eerste box én 25% korting op elk van de volgende vijf boxen',
    ],
    voorwaardenKop: 'Voorwaarden',
    voorwaarden: [
      'Geldig voor nieuwe Factor-klanten',
      '40% korting op je eerste box',
      '25% korting op elk van de volgende vijf boxen',
      'Korting automatisch toegepast via de link — geen code nodig',
      'Flexibel abonnement — wekelijks aanpasbaar of te pauzeren',
      'Bezorging in heel België (bezorgkosten €5,99)',
    ],
    overKop: 'Waarom Factor?',
    overAlineas: [
      'Factor (van de HelloFresh Group) is geen klassieke kookbox — het zijn kant-en-klare chef-maaltijden die je in 2–3 minuten opwarmt in de magnetron. Met 18 gerechten per week en 5 dieetstijlen (waaronder High-Protein en Calorie-Conscious) is Factor ideaal voor drukke professionals en sporters die gezond willen eten zonder kooktijd. Bezorging elke week op zondag of maandag in heel België.',
    ],
    reviewTekst: 'Lees onze volledige Factor review →',
    allesTekst: '← Alle kortingscodes bekijken',
  },
  fr: {
    kruimelHome: 'Accueil',
    kruimelCodes: 'Codes promo',
    kruimelNaam: 'Code promo Factor',
    badge: '✓ Validité vérifiée 2026',
    h1: 'Code promo Factor 2026 — 40 % de réduction sur votre première box',
    intro: <>Avec l&apos;offre de bienvenue exclusive de Factor, vous économisez <strong>40 % sur votre première box</strong>, puis <strong>25 % sur chacune des cinq box suivantes</strong>. Valable pour les nouveaux clients : la réduction est <strong>appliquée automatiquement via notre lien</strong>, aucun code à saisir.</>,
    voordeelLabel: 'Votre avantage',
    voordeelGroot: '40 % + 25 %',
    voordeelSub: '40 % sur la première box + 25 % sur les cinq suivantes — sans code',
    ctaTekst: 'Activer 40 % de réduction chez Factor →',
    stappenKop: 'Comment activer la réduction ?',
    stapLabel: 'Étape',
    stappen: [
      'Cliquez sur « Activer 40 % de réduction chez Factor » ci-dessus',
      'Notre lien vous amène chez Factor, où vous créez un compte',
      'La réduction est déjà prête : aucun code à saisir',
      'Profitez de 40 % sur votre première box et de 25 % sur chacune des cinq box suivantes',
    ],
    voorwaardenKop: 'Conditions',
    voorwaarden: [
      'Valable pour les nouveaux clients Factor',
      '40 % de réduction sur la première box',
      '25 % de réduction sur chacune des cinq box suivantes',
      'Réduction appliquée automatiquement via le lien — sans code',
      'Abonnement flexible — modifiable ou suspendu chaque semaine',
      'Livraison dans toute la Belgique, Wallonie comprise (frais de livraison 5,99 €)',
    ],
    overKop: 'Pourquoi Factor ?',
    overAlineas: [
      "Factor (du groupe HelloFresh) n'est pas un box à cuisiner classique : ce sont des plats de chef prêts à manger, à réchauffer 2 à 3 minutes au micro-ondes. Avec 18 plats par semaine et 5 styles alimentaires (dont High-Protein et Calorie-Conscious), Factor convient aux professionnels pressés et aux sportifs qui veulent manger sainement sans cuisiner. Livraison chaque semaine le dimanche ou le lundi, partout en Belgique.",
    ],
    reviewTekst: 'Lire notre avis complet sur Factor →',
    allesTekst: '← Voir tous les codes promo',
  },
};

export default async function FactorKortingscode({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <KortingscodeDetail
      slug="factor"
      t={TEKST[locale === 'fr' ? 'fr' : 'nl']}
      kleur={{ accent: '#7C3AED', achtergrond: '#F5F3FF', rand: '#C4B5FD', link: '#7C3AED' }}
    />
  );
}
