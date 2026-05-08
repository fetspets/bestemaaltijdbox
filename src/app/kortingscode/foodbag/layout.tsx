import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Foodbag kortingscode FOODBAGx60 (2026) — €60 korting op je eerste 3 bestellingen | BesteMaaltijdbox.be',
  description: 'Exclusieve Foodbag kortingscode voor mei 2026 — bespaar op je eerste bestellingen. Bekijk de actuele deal op BesteMaaltijdbox.be.',
  alternates: { canonical: 'https://www.bestemaaltijdbox.be/kortingscode/foodbag' },
  openGraph: {
    title: 'Foodbag kortingscode FOODBAGx60 (2026) — €60 korting op je eerste 3 bestellingen',
    description: 'Exclusieve Foodbag kortingscode voor mei 2026 — bespaar op je eerste bestellingen. Bekijk de actuele deal op BesteMaaltijdbox.be.',
    url: 'https://www.bestemaaltijdbox.be/kortingscode/foodbag',
    type: 'article',
    locale: 'nl_BE',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
