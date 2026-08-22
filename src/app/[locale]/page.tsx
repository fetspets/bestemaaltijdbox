import HomePageClient from './HomePageClient';
import { isSponsoringActief } from '@/lib/sponsoring';

// ISR (uurlijks): server-datum schuift mee zodat het tijdelijke gesponsorde
// Factor-blok automatisch verdwijnt na de looptijd, zonder rebuild.
export const revalidate = 3600;

export default function HomePage() {
  // Datumbepaling gebeurt hier server-side; de client krijgt enkel een boolean,
  // dus de zichtbaarheid hangt nooit van de browserklok af.
  const sponsoringActief = isSponsoringActief('homepageBlok');

  return <HomePageClient sponsoringActief={sponsoringActief} />;
}
