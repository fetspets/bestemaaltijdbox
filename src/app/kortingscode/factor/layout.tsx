import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Factor kortingscode BESTE40 (2026) — 40% korting op je eerste box | BesteMaaltijdbox.be',
  description: 'Gebruik Factor kortingscode BESTE40 en bespaar 40% op je eerste box en 25% op de volgende vijf boxen. Exclusief voor nieuwe klanten in België.',
  alternates: { canonical: 'https://www.bestemaaltijdbox.be/kortingscode/factor' },
  openGraph: {
    title: 'Factor kortingscode BESTE40 (2026) — 40% korting op je eerste box',
    description: 'Gebruik Factor kortingscode BESTE40 en bespaar 40% op je eerste box en 25% op de volgende vijf boxen. Exclusief voor nieuwe klanten in België.',
    url: 'https://www.bestemaaltijdbox.be/kortingscode/factor',
    type: 'article',
    locale: 'nl_BE',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
