import KortingscodeDetail, { type KortingscodeTekst } from '@/components/KortingscodeDetail';

const TEKST: Record<'nl' | 'fr', KortingscodeTekst> = {
  nl: {
    kruimelHome: 'Home',
    kruimelCodes: 'Kortingscodes',
    kruimelNaam: 'Foodbag kortingscode',
    badge: '✓ Gecontroleerd geldig t.e.m. 01/01/2027',
    h1: 'Foodbag kortingscode 2026 — €60 korting op je eerste 3 bestellingen',
    intro: <>Met de Foodbag welkomstdeal krijg je 3x €20 korting op je eerste drie bestellingen. Totale besparing: <strong>€60</strong>. Exclusief voor nieuwe klanten — de korting wordt <strong>automatisch toegepast via onze link</strong>, je hoeft geen code in te voeren.</>,
    voordeelLabel: 'Jouw voordeel',
    voordeelGroot: '€60 korting',
    voordeelSub: '3x €20 over je eerste 3 bestellingen — geen code nodig',
    ctaTekst: 'Activeer €60 korting bij Foodbag →',
    stappenKop: 'Hoe activeer je de korting?',
    stapLabel: 'Stap',
    stappen: [
      'Klik op "Activeer €60 korting bij Foodbag" hierboven',
      'Je gaat via onze link naar Foodbag en maakt een account aan',
      'De korting staat al klaar — je hoeft geen code in te voeren',
      'De €20 korting wordt automatisch toegepast op je eerste 3 bestellingen',
    ],
    voorwaardenKop: 'Voorwaarden',
    voorwaarden: [
      'Geldig voor nieuwe Foodbag-klanten',
      '3x €20 korting verspreid over de eerste 3 bestellingen',
      'Geldig t.e.m. 01/01/2027',
      'Niet combineerbaar met andere acties',
      'Bezorging gratis in heel België',
    ],
    overKop: 'Waarom Foodbag?',
    overAlineas: [
      'Foodbag is een 100% Belgische maaltijdbox met lokale ingrediënten van Belgische boerderijen. Eigendom van Colruyt Group. Met 40 gerechten per week, 5 kookstijlen en gratis bezorging in heel België is het een van de meest populaire keuzes voor Belgische gezinnen en koppels.',
    ],
    reviewTekst: 'Lees onze volledige Foodbag review →',
    allesTekst: '← Alle kortingscodes bekijken',
  },
  fr: {
    kruimelHome: 'Accueil',
    kruimelCodes: 'Codes promo',
    kruimelNaam: 'Code promo Foodbag',
    badge: "✓ Validité vérifiée jusqu'au 01/01/2027",
    h1: 'Code promo Foodbag 2026 — 60 € de réduction sur vos 3 premières commandes',
    intro: <>Avec l&apos;offre de bienvenue de Foodbag, vous recevez 3 x 20 € de réduction sur vos trois premières commandes. Économie totale : <strong>60 €</strong>. Réservé aux nouveaux clients : la réduction est <strong>appliquée automatiquement via notre lien</strong>, aucun code à saisir.</>,
    voordeelLabel: 'Votre avantage',
    voordeelGroot: '60 € de réduction',
    voordeelSub: '3 x 20 € sur vos 3 premières commandes — sans code',
    ctaTekst: 'Activer 60 € de réduction chez Foodbag →',
    stappenKop: 'Comment activer la réduction ?',
    stapLabel: 'Étape',
    stappen: [
      'Cliquez sur « Activer 60 € de réduction chez Foodbag » ci-dessus',
      'Notre lien vous amène chez Foodbag, où vous créez un compte',
      'La réduction est déjà prête : aucun code à saisir',
      'Les 20 € de réduction sont appliqués automatiquement sur vos 3 premières commandes',
    ],
    voorwaardenKop: 'Conditions',
    voorwaarden: [
      'Valable pour les nouveaux clients Foodbag',
      '3 x 20 € de réduction répartis sur les 3 premières commandes',
      "Valable jusqu'au 01/01/2027",
      'Non cumulable avec d’autres promotions',
      'Livraison gratuite dans toute la Belgique, Wallonie comprise',
    ],
    overKop: 'Pourquoi Foodbag ?',
    overAlineas: [
      "Foodbag est un box repas 100 % belge, avec des ingrédients locaux issus de fermes belges. Il appartient au groupe Colruyt. Avec 40 plats par semaine, 5 styles de cuisine et la livraison gratuite dans toute la Belgique, c'est l'un des choix les plus populaires auprès des familles et des couples belges.",
    ],
    reviewTekst: 'Lire notre avis complet sur Foodbag →',
    allesTekst: '← Voir tous les codes promo',
  },
};

export default async function FoodbagKortingscode({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <KortingscodeDetail
      slug="foodbag"
      t={TEKST[locale === 'fr' ? 'fr' : 'nl']}
      kleur={{ accent: '#1E40AF', achtergrond: '#EFF6FF', rand: '#BFDBFE', link: '#1B4332' }}
    />
  );
}
