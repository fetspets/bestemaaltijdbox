import KortingscodeDetail, { type KortingscodeTekst } from '@/components/KortingscodeDetail';

const TEKST: Record<'nl' | 'fr', KortingscodeTekst> = {
  nl: {
    kruimelHome: 'Home',
    kruimelCodes: 'Kortingscodes',
    kruimelNaam: 'Foodprepper kortingscode',
    badge: '✓ Gecontroleerd geldig t.e.m. 01/01/2027',
    h1: 'Foodprepper kortingscode – bespaar tot €45 op je eerste bestellingen',
    intro: <>Met de Foodprepper welkomstdeal krijg je 3x €15 korting op je eerste drie bestellingen. Totale besparing: <strong>€45</strong>. Exclusief voor nieuwe klanten — de korting wordt <strong>automatisch toegepast via onze link</strong>, je hoeft geen code in te voeren.</>,
    voordeelLabel: 'Jouw voordeel',
    voordeelGroot: '€45 korting',
    voordeelSub: '3x €15 over je eerste 3 bestellingen — geen code nodig',
    voordeelNoot: 'Geldig voor nieuwe klanten. Controleer geldigheid op foodprepper.be.',
    ctaTekst: '€15 korting op de eerste 3 bestellingen →',
    stappenKop: 'Hoe activeer je de korting?',
    stapLabel: 'Stap',
    stappen: [
      'Ga naar foodprepper.be via de knop hierboven',
      'Stel je weekmenu samen',
      'De korting staat al klaar — je hoeft geen code in te voeren',
      'Geniet van €15 korting — geldt voor je eerste 3 bestellingen',
    ],
    voorwaardenKop: 'Voorwaarden',
    voorwaarden: [
      'Geldig voor nieuwe Foodprepper-klanten',
      '3x €15 korting verspreid over de eerste 3 bestellingen',
      'Geldig t.e.m. 01/01/2027',
      'Niet combineerbaar met andere acties',
      'Geen verplicht abonnement — bestel wanneer je wil',
      'Gratis levering in Vlaanderen en Brussel',
    ],
    overKop: 'Wat is Foodprepper?',
    overAlineas: [
      'Foodprepper is de snelste maaltijdbox van België — maaltijden staan in 15 minuten op tafel dankzij voorgesneden en voorbereide ingrediënten. Ideaal voor drukke avonden en gezinnen die weinig tijd hebben om uitgebreid te koken.',
      'De box wordt bezorgd met gratis levering, werkt zonder verplicht abonnement en gebruikt Belgische ingrediënten. Je kiest zelf wanneer je bestelt — wekelijks of eenmalig.',
    ],
    reviewTekst: 'Lees onze volledige Foodprepper review →',
    allesTekst: '← Alle kortingscodes bekijken',
  },
  fr: {
    kruimelHome: 'Accueil',
    kruimelCodes: 'Codes promo',
    kruimelNaam: 'Code promo Foodprepper',
    badge: "✓ Validité vérifiée jusqu'au 01/01/2027",
    h1: "Code promo Foodprepper — jusqu'à 45 € de réduction sur vos premières commandes",
    intro: <>Avec l&apos;offre de bienvenue de Foodprepper, vous recevez 3 x 15 € de réduction sur vos trois premières commandes. Économie totale : <strong>45 €</strong>. Réservé aux nouveaux clients : la réduction est <strong>appliquée automatiquement via notre lien</strong>, aucun code à saisir.</>,
    waarschuwing: "Foodprepper livre uniquement en Flandre et à Bruxelles, pas en Wallonie. En Wallonie, regardez plutôt HelloFresh ou Foodbag.",
    voordeelLabel: 'Votre avantage',
    voordeelGroot: '45 € de réduction',
    voordeelSub: '3 x 15 € sur vos 3 premières commandes — sans code',
    voordeelNoot: 'Valable pour les nouveaux clients. Vérifiez la validité sur foodprepper.be.',
    ctaTekst: '15 € de réduction sur les 3 premières commandes →',
    stappenKop: 'Comment activer la réduction ?',
    stapLabel: 'Étape',
    stappen: [
      'Rendez-vous sur foodprepper.be via le bouton ci-dessus',
      'Composez votre menu de la semaine',
      'La réduction est déjà prête : aucun code à saisir',
      'Profitez de 15 € de réduction sur chacune de vos 3 premières commandes',
    ],
    voorwaardenKop: 'Conditions',
    voorwaarden: [
      'Valable pour les nouveaux clients Foodprepper',
      '3 x 15 € de réduction répartis sur les 3 premières commandes',
      "Valable jusqu'au 01/01/2027",
      'Non cumulable avec d’autres promotions',
      'Sans abonnement obligatoire — commandez quand vous voulez',
      'Livraison gratuite en Flandre et à Bruxelles (pas en Wallonie)',
    ],
    overKop: "Qu'est-ce que Foodprepper ?",
    overAlineas: [
      'Foodprepper est le box repas le plus rapide de Belgique : vos repas sont prêts en 15 minutes grâce à des ingrédients déjà découpés et préparés. Idéal pour les soirées chargées et les familles qui ont peu de temps pour cuisiner.',
      "La livraison est gratuite, il n'y a pas d'abonnement obligatoire et les ingrédients sont belges. Vous commandez quand vous voulez, chaque semaine ou ponctuellement.",
    ],
    reviewTekst: 'Lire notre avis complet sur Foodprepper →',
    allesTekst: '← Voir tous les codes promo',
  },
};

export default async function FoodprepperKortingscode({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <KortingscodeDetail
      slug="foodprepper"
      t={TEKST[locale === 'fr' ? 'fr' : 'nl']}
      kleur={{ accent: '#EA580C', achtergrond: '#FFF7ED', rand: '#FED7AA', link: '#EA580C' }}
    />
  );
}
