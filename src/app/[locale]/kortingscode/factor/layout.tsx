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
    params: { slug: 'factor' },
    pad: '/kortingscode/factor',
    titel: `Factor kortingscode ${LAATST_BIJGEWERKT} — 40% korting op je eerste box`,
    beschrijving: 'Het actuele Factor welkomstvoordeel voor nieuwe klanten in België: 40% korting op je eerste box met kant-en-klare maaltijden zonder kookgedoe.',
    type: 'article',
  });
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
