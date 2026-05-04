import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HelloFresh kortingscode BESTE60 (2026) – €60 korting voor nieuwe klanten | BesteMaaltijdbox.be',
  description: 'Gebruik exclusieve HelloFresh kortingscode BESTE60 en bespaar €60 op je eerste boxen. Geldig voor nieuwe klanten in België.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
