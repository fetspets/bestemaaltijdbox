import Link from '@/components/TaalLink';
import { getActieveSponsoring, permanentUitgelichtKortingscodes } from '@/lib/sponsoring';
import { acties } from '@/lib/acties';

// Links naar de drie gesponsorde HelloFresh-gidsen, op de pagina's waar
// twijfelaars over HelloFresh al zitten (review, kortingscode, vergelijkingen).
// Server-side gated: verschijnt vanaf de start van de HelloFresh-samenwerking
// (28/10/2026) en blijft daarna staan, net als de blogs zelf.
const GIDSEN = [
  { href: '/blog/hoe-werkt-hellofresh', nl: 'Hoe werkt HelloFresh? Dit moet je weten vóór je eerste box', fr: 'Comment fonctionne HelloFresh ? À savoir avant votre première box' },
  { href: '/blog/hellofresh-menu-recepten', nl: 'Het HelloFresh-menu uitgelegd: wat kan je elke week kiezen?', fr: 'Le menu HelloFresh expliqué : que choisir chaque semaine ?' },
  { href: '/blog/hellofresh-pauzeren-week-overslaan', nl: 'HelloFresh pauzeren: tot wanneer kan het en wat met je korting?', fr: 'Pause HelloFresh : jusqu’à quand et quid de votre réduction ?' },
];

export default function HelloFreshGidsen({ taal }: { taal: 'nl' | 'fr' }) {
  const vanaf = new Date(`${permanentUitgelichtKortingscodes.vanaf}T00:00:00`);
  const zichtbaar = getActieveSponsoring()?.partnerSlug === 'hellofresh' || new Date() >= vanaf;
  if (!zichtbaar) return null;
  const fr = taal === 'fr';
  // Tijdelijke actiegids (Peugeot, november 2026) tot het einde van de actie.
  const peugeot = acties.find(a => a.id === 'hellofresh-peugeot-2026');
  const peugeotEinde = peugeot ? new Date(`${peugeot.tot}T00:00:00`) : undefined;
  if (peugeotEinde) peugeotEinde.setDate(peugeotEinde.getDate() + 1);
  const lijst = peugeotEinde && new Date() < peugeotEinde
    ? [{ href: '/blog/hellofresh-peugeot-molens-actie', nl: 'Alleen in november: zo krijg je de gratis Peugeot-molens', fr: 'Uniquement en novembre : les moulins Peugeot offerts' }, ...GIDSEN]
    : GIDSEN;
  return (
    <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 12, padding: '18px 20px', margin: '0 0 28px' }}>
      <div style={{ fontFamily: 'Fraunces, serif', fontSize: 17, fontWeight: 800, marginBottom: 10, color: '#1B4332' }}>
        {fr ? 'Vous hésitez encore ? Nos guides HelloFresh' : 'Twijfel je nog? Onze HelloFresh-gidsen'}
      </div>
      <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9, fontSize: 15 }}>
        {lijst.map(g => (
          <li key={g.href}>
            <Link href={g.href} style={{ color: '#1B4332', fontWeight: 600, textDecoration: 'underline' }}>{fr ? g.fr : g.nl}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
