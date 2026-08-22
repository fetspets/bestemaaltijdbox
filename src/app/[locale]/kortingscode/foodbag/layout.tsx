import type { Metadata } from 'next';
import { LAATST_BIJGEWERKT } from '@/lib/site';
import type { Locale } from '@/i18n/routing';
import { buildMetadata } from '@/lib/seo';

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale: locale as Locale,
    route: '/kortingscode/[slug]',
    params: { slug: 'foodbag' },
    pad: '/kortingscode/foodbag',
    titel: `Foodbag kortingscode ${LAATST_BIJGEWERKT} — €60 korting op je eerste 3 bestellingen`,
    beschrijving: 'Het actuele Foodbag welkomstaanbod voor nieuwe klanten in België: €60 korting (3x €20) op je eerste 3 bestellingen. Bekijk de voorwaarden.',
    type: 'article',
  });
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
