import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HelloFresh kortingscode mei 2026 — actueel welkomstvoordeel voor nieuwe klanten',
  description: 'Het actuele HelloFresh welkomstvoordeel voor nieuwe klanten in België. Bekijk hoe je profiteert en wat je effectief betaalt voor je eerste boxen.',
  alternates: { canonical: 'https://www.bestemaaltijdbox.be/kortingscode/hellofresh' },
  openGraph: {
    title: 'HelloFresh kortingscode mei 2026 — actueel welkomstvoordeel voor nieuwe klanten',
    description: 'Het actuele HelloFresh welkomstvoordeel voor nieuwe klanten in België. Bekijk hoe je profiteert en wat je effectief betaalt voor je eerste boxen.',
    url: 'https://www.bestemaaltijdbox.be/kortingscode/hellofresh',
    type: 'article',
    locale: 'nl_BE',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
