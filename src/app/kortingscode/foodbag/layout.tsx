import type { Metadata } from 'next';
import { LAATST_BIJGEWERKT } from '@/lib/site';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  pad: '/kortingscode/foodbag',
  titel: `Foodbag kortingscode ${LAATST_BIJGEWERKT} — €60 korting op je eerste 3 bestellingen`,
  beschrijving: 'Het actuele Foodbag welkomstaanbod voor nieuwe klanten in België: €60 korting (3x €20) op je eerste 3 bestellingen. Bekijk de voorwaarden.',
  type: 'article',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
