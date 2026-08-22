import type { Metadata } from 'next';
import { LAATST_BIJGEWERKT } from '@/lib/site';
import { buildMetadata, SITE_URL, absoluteUrl } from '@/lib/seo';

const CANONICAL = '/kortingscode/foodprepper';

export const metadata: Metadata = buildMetadata({
  pad: CANONICAL,
  titel: `Foodprepper kortingscode ${LAATST_BIJGEWERKT} — €45 korting zonder abonnement`,
  beschrijving: 'Het actuele Foodprepper welkomstvoordeel: €45 korting (3x €15) op je eerste 3 bestellingen — geen abonnement, geen verplichtingen.',
  type: 'article',
});

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is de Foodprepper welkomstkorting nog geldig?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, de welkomstkorting is actief gecontroleerd geldig t.e.m. 01/01/2027 en wordt automatisch toegepast via onze link — je hoeft geen code in te voeren. Controleer ook altijd de actuele geldigheid op foodprepper.be zelf.',
      },
    },
    {
      '@type': 'Question',
      name: 'Voor hoeveel bestellingen geldt de korting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De welkomstkorting geeft 3x €15 korting — één keer per bestelling op je eerste drie bestellingen. Totale besparing: €45.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik de korting combineren met andere acties?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee, de welkomstkorting is niet combineerbaar met andere promoties of kortingsacties van Foodprepper.',
      },
    },
    {
      '@type': 'Question',
      name: 'Geldt de korting ook bij een abonnement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Foodprepper werkt zonder verplicht abonnement. Je bestelt wanneer je wil. De welkomstkorting geldt voor nieuwe klanten op de eerste drie bestellingen, ongeacht of je regelmatig of eenmalig bestelt, en wordt automatisch toegepast via onze link.',
      },
    },
  ],
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Kortingscodes', item: absoluteUrl('/kortingscodes') },
    { '@type': 'ListItem', position: 3, name: 'Foodprepper kortingscode', item: absoluteUrl(CANONICAL) },
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
