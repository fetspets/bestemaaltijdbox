import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Crowd Cooks kortingscode mei 2026 — tot €60 welkomstkorting',
  description: 'Het actuele Crowd Cooks welkomstvoordeel voor nieuwe klanten in België: tot €60 korting op je eerste boxen met kant-en-klare chef-maaltijden en gratis bezorging.',
  alternates: { canonical: 'https://bestemaaltijdbox.be/kortingscode/crowd-cooks' },
  openGraph: {
    title: 'Crowd Cooks kortingscode mei 2026 — tot €60 welkomstkorting',
    description: 'Het actuele Crowd Cooks welkomstvoordeel voor nieuwe klanten in België: tot €60 korting op je eerste boxen met kant-en-klare chef-maaltijden en gratis bezorging.',
    url: 'https://bestemaaltijdbox.be/kortingscode/crowd-cooks',
    type: 'article',
    locale: 'nl_BE',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
