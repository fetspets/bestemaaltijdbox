import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Factor kortingscode mei 2026 — 40% korting op je eerste box',
  description: 'Het actuele Factor welkomstvoordeel voor nieuwe klanten in België: 40% korting op je eerste box met kant-en-klare maaltijden zonder kookgedoe.',
  alternates: { canonical: 'https://www.bestemaaltijdbox.be/kortingscode/factor' },
  openGraph: {
    title: 'Factor kortingscode mei 2026 — 40% korting op je eerste box',
    description: 'Het actuele Factor welkomstvoordeel voor nieuwe klanten in België: 40% korting op je eerste box met kant-en-klare maaltijden zonder kookgedoe.',
    url: 'https://www.bestemaaltijdbox.be/kortingscode/factor',
    type: 'article',
    locale: 'nl_BE',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
