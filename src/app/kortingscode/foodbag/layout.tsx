import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Foodbag kortingscode mei 2026 — welkomstvoordeel voor nieuwe klanten',
  description: 'Het actuele Foodbag welkomstaanbod voor nieuwe klanten in België. Bekijk de voorwaarden en wat je écht betaalt voor je eerste 3 bestellingen.',
  alternates: { canonical: 'https://www.bestemaaltijdbox.be/kortingscode/foodbag' },
  openGraph: {
    title: 'Foodbag kortingscode mei 2026 — welkomstvoordeel voor nieuwe klanten',
    description: 'Het actuele Foodbag welkomstaanbod voor nieuwe klanten in België. Bekijk de voorwaarden en wat je écht betaalt voor je eerste 3 bestellingen.',
    url: 'https://www.bestemaaltijdbox.be/kortingscode/foodbag',
    type: 'article',
    locale: 'nl_BE',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
