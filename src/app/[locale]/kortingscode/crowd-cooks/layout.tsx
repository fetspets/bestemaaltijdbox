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
    params: { slug: 'crowd-cooks' },
    pad: '/kortingscode/crowd-cooks',
    titel: `Crowd Cooks kortingscode ${LAATST_BIJGEWERKT} — tot €60 welkomstkorting`,
    beschrijving: 'Het actuele Crowd Cooks welkomstvoordeel voor nieuwe klanten in België: tot €60 korting op je eerste boxen met kant-en-klare chef-maaltijden, vers bereid en thuisbezorgd.',
    type: 'article',
  });
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
