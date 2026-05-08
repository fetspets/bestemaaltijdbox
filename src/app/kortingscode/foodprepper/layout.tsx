import type { Metadata } from 'next';

const CANONICAL = 'https://www.bestemaaltijdbox.be/kortingscode/foodprepper';

export const metadata: Metadata = {
  title: 'Foodprepper kortingscode mei 2026 — €45 korting zonder abonnement',
  description:
    'Het actuele Foodprepper welkomstvoordeel: €45 korting (3x €15) op je eerste 3 bestellingen — geen abonnement, geen verplichtingen.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Foodprepper kortingscode mei 2026 — €45 korting zonder abonnement',
    description:
      'Het actuele Foodprepper welkomstvoordeel: €45 korting (3x €15) op je eerste 3 bestellingen — geen abonnement, geen verplichtingen.',
    type: 'article',
    url: CANONICAL,
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is de kortingscode FOODPREPX45 nog geldig?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, de code FOODPREPX45 is actief gecontroleerd geldig t.e.m. 01/01/2027. Controleer ook altijd de actuele geldigheid op foodprepper.be zelf.',
      },
    },
    {
      '@type': 'Question',
      name: 'Voor hoeveel bestellingen geldt de korting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De kortingscode FOODPREPX45 geeft 3x €15 korting — één keer per bestelling op je eerste drie bestellingen. Totale besparing: €45.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik de code combineren met andere acties?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee, de code FOODPREPX45 is niet combineerbaar met andere promoties of kortingsacties van Foodprepper.',
      },
    },
    {
      '@type': 'Question',
      name: 'Geldt de korting ook bij een abonnement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Foodprepper werkt zonder verplicht abonnement. Je bestelt wanneer je wil. De kortingscode FOODPREPX45 geldt voor nieuwe klanten op de eerste drie bestellingen, ongeacht of je regelmatig of eenmalig bestelt.',
      },
    },
  ],
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bestemaaltijdbox.be' },
    { '@type': 'ListItem', position: 2, name: 'Kortingscodes', item: 'https://www.bestemaaltijdbox.be/kortingscodes' },
    { '@type': 'ListItem', position: 3, name: 'Foodprepper kortingscode', item: CANONICAL },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {children}
    </>
  );
}
