import type { Metadata } from 'next';
import HomePageClient from './HomePageClient';
import { buildMetadata } from '@/lib/seo';
import { actieveAanbiedersVoor, gerangschiktVoor } from '@/lib/teksten';
import { LAATST_BIJGEWERKT } from '@/lib/site';
import { isSponsoringActief } from '@/lib/sponsoring';
import type { Locale } from '@/i18n/routing';

// ISR (uurlijks): server-datum schuift mee zodat het tijdelijke gesponsorde
// Factor-blok automatisch verdwijnt na de looptijd, zonder rebuild.
export const revalidate = 3600;

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  const n = actieveAanbiedersVoor(locale as Locale).length;
  return buildMetadata({
    locale: locale as Locale,
    route: '/',
    titel: `Beste maaltijdbox België 2026 — ${n} boxen eerlijk vergeleken`,
    beschrijving: `Vergelijk HelloFresh, Foodbag, Marley Spoon en ${n - 3} anderen op prijs, smaak en kortingen. Onafhankelijk beoordeeld · bijgewerkt ${LAATST_BIJGEWERKT} · deals tot €60.`,
    keywords: ['beste maaltijdbox belgië', 'maaltijdbox vergelijken', 'hellofresh kortingscode', 'foodbag review', 'maaltijdbox 2026'],
  });
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const taal = locale as Locale;
  // Datumbepaling gebeurt hier server-side; de client krijgt enkel een boolean,
  // dus de zichtbaarheid hangt nooit van de browserklok af.
  const sponsoringActief = isSponsoringActief('homepageBlok');

  // In het Frans staan de aanbieders die niet in Wallonië leveren achteraan.
  return <HomePageClient sponsoringActief={sponsoringActief} aanbieders={gerangschiktVoor(taal)} taal={taal} />;
}
