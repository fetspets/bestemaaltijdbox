import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  /**
   * Alles behalve API-routes, Next-interne paden en bestanden met een
   * extensie. `/ga/` staat er expliciet buiten: dat is de affiliate-redirect
   * en die mag geen taalprefix krijgen, anders breken bestaande links.
   */
  matcher: ['/((?!api|ga|_next|_vercel|.*\\..*).*)'],
};
