import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  /**
   * Alles behalve API-routes, Next-interne paden en bestanden met een
   * extensie. `/ga/` en `/og` (deelafbeeldingen) staan er expliciet buiten: dat is de affiliate-redirect
   * en die mag geen taalprefix krijgen, anders breken bestaande links.
   */
  matcher: ['/((?!api|ga|og|_next|_vercel|.*\\..*).*)'],
};
