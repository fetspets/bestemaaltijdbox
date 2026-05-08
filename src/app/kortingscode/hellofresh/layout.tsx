import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HelloFresh kortingscode BESTE60 (2026) – tot €60 korting + gratis extras | BesteMaaltijdbox.be',
  description: 'Exclusieve HelloFresh kortingscode voor mei 2026 — bespaar tot €60 op je eerste boxen. Bekijk de actuele deal op BesteMaaltijdbox.be.',
  alternates: { canonical: 'https://www.bestemaaltijdbox.be/kortingscode/hellofresh' },
  openGraph: {
    title: 'HelloFresh kortingscode BESTE60 (2026) – tot €60 korting + gratis extras',
    description: 'Exclusieve HelloFresh kortingscode voor mei 2026 — bespaar tot €60 op je eerste boxen. Bekijk de actuele deal op BesteMaaltijdbox.be.',
    url: 'https://www.bestemaaltijdbox.be/kortingscode/hellofresh',
    type: 'article',
    locale: 'nl_BE',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
