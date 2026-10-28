import createMiddleware from 'next-intl/middleware';
import { NextResponse, type NextRequest } from 'next/server';
import { routing } from './i18n/routing';
import { acties } from './lib/acties';

const intl = createMiddleware(routing);

// Tijdelijke actie-artikels: na de looptijd doorsturen naar de vaste
// kortingscodepagina, zodat het verkeer niet verloren gaat (zoals bij GreenPan).
const ACTIE_ARTIKELS: Array<{ actieId: string; slug: string; nl: string; fr: string }> = [
  {
    actieId: 'hellofresh-peugeot-2026',
    slug: 'hellofresh-peugeot-molens-actie',
    nl: '/kortingscode/hellofresh',
    fr: '/fr/code-promo/hellofresh',
  },
];

export default function proxy(request: NextRequest) {
  const pad = request.nextUrl.pathname;
  for (const a of ACTIE_ARTIKELS) {
    const fr = pad === `/fr/blog/${a.slug}`;
    if (!fr && pad !== `/blog/${a.slug}`) continue;
    const actie = acties.find(x => x.id === a.actieId);
    if (!actie) continue;
    const einde = new Date(`${actie.tot}T00:00:00`);
    einde.setDate(einde.getDate() + 1);
    if (new Date() >= einde) {
      return NextResponse.redirect(new URL(fr ? a.fr : a.nl, request.url), 308);
    }
  }
  return intl(request);
}

export const config = {
  /**
   * Alles behalve API-routes, Next-interne paden en bestanden met een
   * extensie. `/ga/` en `/og` (deelafbeeldingen) staan er expliciet buiten: dat is de affiliate-redirect
   * en die mag geen taalprefix krijgen, anders breken bestaande links.
   */
  matcher: ['/((?!api|ga|og|_next|_vercel|.*\\..*).*)'],
};
