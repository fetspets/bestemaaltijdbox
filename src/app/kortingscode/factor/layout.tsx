import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Factor kortingscode BESTE40 (2026) — 40% korting op je eerste box | BesteMaaltijdbox.be',
  description: 'Exclusieve Factor kortingscode voor mei 2026 — bespaar tot 40% op je eerste bestellingen. Bekijk de actuele deal op BesteMaaltijdbox.be.',
  alternates: { canonical: 'https://www.bestemaaltijdbox.be/kortingscode/factor' },
  openGraph: {
    title: 'Factor kortingscode BESTE40 (2026) — 40% korting op je eerste box',
    description: 'Exclusieve Factor kortingscode voor mei 2026 — bespaar tot 40% op je eerste bestellingen. Bekijk de actuele deal op BesteMaaltijdbox.be.',
    url: 'https://www.bestemaaltijdbox.be/kortingscode/factor',
    type: 'article',
    locale: 'nl_BE',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
