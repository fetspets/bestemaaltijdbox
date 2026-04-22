import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HelloFresh kortingscode HELLO85FL (2026) – €50 korting op 4 boxen | BesteMaaltijdbox.be',
  description: 'Gebruik HelloFresh kortingscode HELLO85FL en bespaar €50 op je eerste 4 boxen. €25 op box 1, €10 op box 2, €10 op box 3, €5 op box 4. Exclusief voor nieuwe klanten.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
