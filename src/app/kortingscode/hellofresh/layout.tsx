import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HelloFresh kortingscode BESTE60 (2026) – tot €60 korting + gratis extras | BesteMaaltijdbox.be',
  description: 'Gebruik exclusieve HelloFresh kortingscode BESTE60: tot €60 korting op je eerste boxen én 8 weken gratis extra\'s per box. Enkel voor nieuwe klanten in België.',
  alternates: { canonical: 'https://www.bestemaaltijdbox.be/kortingscode/hellofresh' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
