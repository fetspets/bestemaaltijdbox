import type { Metadata } from 'next';
import { LAATST_BIJGEWERKT } from '@/lib/site';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  pad: '/kortingscode/hellofresh',
  titel: `HelloFresh kortingscode ${LAATST_BIJGEWERKT} — tot €60 korting op je eerste 3 boxen`,
  beschrijving: 'Activeer de HelloFresh welkomstdeal: tot €60 korting verdeeld over je eerste 3 boxen. Automatisch via onze link — geen code nodig. Voor nieuwe klanten in België.',
  type: 'article',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
