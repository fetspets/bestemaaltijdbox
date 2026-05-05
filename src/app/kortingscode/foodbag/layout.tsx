import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Foodbag kortingscode FOODBAGx60 (2026) — €60 korting op je eerste 3 bestellingen | BesteMaaltijdbox.be',
  description: 'Gebruik Foodbag kortingscode FOODBAGx60 en bespaar 3x €20 op je eerste drie bestellingen. Totaal €60 korting. Exclusief voor nieuwe klanten in België.',
  alternates: { canonical: 'https://www.bestemaaltijdbox.be/kortingscode/foodbag' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
