import KortingscodeDetail, { type KortingscodeTekst } from '@/components/KortingscodeDetail';

const TEKST: Record<'nl' | 'fr', KortingscodeTekst> = {
  nl: {
    kruimelHome: 'Home',
    kruimelCodes: 'Kortingscodes',
    kruimelNaam: 'Crowd Cooks kortingscode',
    badge: '✓ Gecontroleerd geldig 2026',
    h1: 'Crowd Cooks kortingscode 2026 — tot €60 welkomstkorting',
    intro: <>Met de Crowd Cooks welkomstdeal krijg je <strong>€20 korting in je eerste week</strong> en daarna <strong>€10 korting per week gedurende 4 weken</strong> — samen tot <strong>€60 voordeel</strong>. Geldig voor nieuwe klanten — de korting wordt <strong>automatisch toegepast via onze link</strong>, je hoeft geen code in te voeren.</>,
    voordeelLabel: 'Jouw voordeel',
    voordeelGroot: 'tot €60 korting',
    voordeelSub: '€20 in week 1 + 4× €10 — geen code nodig',
    ctaTekst: 'Activeer tot €60 korting bij Crowd Cooks →',
    stappenKop: 'Hoe activeer je de korting?',
    stapLabel: 'Stap',
    stappen: [
      'Klik op "Activeer tot €60 korting bij Crowd Cooks" hierboven',
      'Je gaat via onze link naar Crowd Cooks en maakt een account aan',
      'De korting staat al klaar — je hoeft geen code in te voeren',
      'Geniet van €20 korting in week 1 en €10 korting per week gedurende 4 weken (tot €60 totaal)',
    ],
    voorwaardenKop: 'Voorwaarden',
    voorwaarden: [
      'Geldig voor nieuwe Crowd Cooks-klanten',
      '€20 korting op je eerste week',
      '€10 korting per week gedurende 4 weken',
      'Totale besparing tot €60',
      'Automatisch toegepast via onze link — geen code nodig',
      'Bezorging €4,90 op zondag of maandag in België',
    ],
    overKop: 'Waarom Crowd Cooks?',
    overAlineas: [
      'Crowd Cooks is een Belgische kant-en-klare maaltijdservice — geen kookbox, maar verse maaltijden bereid door chefs die je in een paar minuten opwarmt. Elke week kies je uit 12 nieuwe gerechten met royale porties van 450+ gram, 5 dagen houdbaar in de koelkast. De bezorging (€4,90) gebeurt op zondag of maandag en het abonnement is flexibel: pauzeren of annuleren kan met één klik. Ideaal voor drukke professionals, singles en koppels die gezond willen eten zonder kooktijd.',
    ],
    reviewTekst: 'Lees onze volledige Crowd Cooks review →',
    allesTekst: '← Alle kortingscodes bekijken',
  },
  fr: {
    kruimelHome: 'Accueil',
    kruimelCodes: 'Codes promo',
    kruimelNaam: 'Code promo Crowd Cooks',
    badge: '✓ Validité vérifiée 2026',
    h1: "Code promo Crowd Cooks 2026 — jusqu'à 60 € de réduction de bienvenue",
    intro: <>Avec l&apos;offre de bienvenue de Crowd Cooks, vous recevez <strong>20 € de réduction la première semaine</strong>, puis <strong>10 € de réduction par semaine pendant 4 semaines</strong> — soit <strong>jusqu&apos;à 60 € d&apos;avantage</strong>. Valable pour les nouveaux clients : la réduction est <strong>appliquée automatiquement via notre lien</strong>, aucun code à saisir.</>,
    waarschuwing: 'Crowd Cooks ne livre pas partout en Belgique. Vérifiez votre code postal sur le site de Crowd Cooks avant de commander.',
    voordeelLabel: 'Votre avantage',
    voordeelGroot: "jusqu'à 60 €",
    voordeelSub: '20 € la semaine 1 + 4 x 10 € — sans code',
    ctaTekst: "Activer jusqu'à 60 € de réduction chez Crowd Cooks →",
    stappenKop: 'Comment activer la réduction ?',
    stapLabel: 'Étape',
    stappen: [
      "Cliquez sur « Activer jusqu'à 60 € de réduction chez Crowd Cooks » ci-dessus",
      'Notre lien vous amène chez Crowd Cooks, où vous créez un compte',
      'La réduction est déjà prête : aucun code à saisir',
      "Profitez de 20 € de réduction la première semaine, puis de 10 € par semaine pendant 4 semaines (jusqu'à 60 € au total)",
    ],
    voorwaardenKop: 'Conditions',
    voorwaarden: [
      'Valable pour les nouveaux clients Crowd Cooks',
      '20 € de réduction la première semaine',
      '10 € de réduction par semaine pendant 4 semaines',
      "Économie totale jusqu'à 60 €",
      'Appliquée automatiquement via notre lien — sans code',
      'Livraison 4,90 € le dimanche ou le lundi (selon votre code postal)',
    ],
    overKop: 'Pourquoi Crowd Cooks ?',
    overAlineas: [
      "Crowd Cooks est un service belge de plats préparés : pas un box à cuisiner, mais des repas frais préparés par des chefs, à réchauffer en quelques minutes. Chaque semaine, vous choisissez parmi 12 nouveaux plats aux portions généreuses (450 g et plus), qui se conservent 5 jours au réfrigérateur. La livraison (4,90 €) a lieu le dimanche ou le lundi et l'abonnement est flexible : pause ou annulation en un clic. Idéal pour les professionnels pressés, les personnes seules et les couples qui veulent manger sainement sans cuisiner.",
    ],
    reviewTekst: 'Lire notre avis complet sur Crowd Cooks →',
    allesTekst: '← Voir tous les codes promo',
  },
};

export default async function CrowdCooksKortingscode({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <KortingscodeDetail
      slug="crowd-cooks"
      t={TEKST[locale === 'fr' ? 'fr' : 'nl']}
      kleur={{ accent: '#1B4332', achtergrond: '#E8F5EE', rand: '#A7DFC0', link: '#1B4332' }}
    />
  );
}
