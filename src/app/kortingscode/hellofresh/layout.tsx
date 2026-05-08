import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HelloFresh kortingscode mei 2026 — tot €60 korting + 8 weken gratis extras',
  description: 'Het actuele HelloFresh welkomstvoordeel voor nieuwe klanten in België: tot €60 korting + 8 weken gratis extras. Bekijk hoe je profiteert.',
  alternates: { canonical: 'https://www.bestemaaltijdbox.be/kortingscode/hellofresh' },
  openGraph: {
    title: 'HelloFresh kortingscode mei 2026 — tot €60 korting + 8 weken gratis extras',
    description: 'Het actuele HelloFresh welkomstvoordeel voor nieuwe klanten in België: tot €60 korting + 8 weken gratis extras. Bekijk hoe je profiteert.',
    url: 'https://www.bestemaaltijdbox.be/kortingscode/hellofresh',
    type: 'article',
    locale: 'nl_BE',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
