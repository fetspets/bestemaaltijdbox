import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Foodbag kortingscode mei 2026 — €60 korting op je eerste 3 bestellingen',
  description: 'Het actuele Foodbag welkomstaanbod voor nieuwe klanten in België: €60 korting (3x €20) op je eerste 3 bestellingen. Bekijk de voorwaarden.',
  alternates: { canonical: 'https://www.bestemaaltijdbox.be/kortingscode/foodbag' },
  openGraph: {
    title: 'Foodbag kortingscode mei 2026 — €60 korting op je eerste 3 bestellingen',
    description: 'Het actuele Foodbag welkomstaanbod voor nieuwe klanten in België: €60 korting (3x €20) op je eerste 3 bestellingen. Bekijk de voorwaarden.',
    url: 'https://www.bestemaaltijdbox.be/kortingscode/foodbag',
    type: 'article',
    locale: 'nl_BE',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
