import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';

/**
 * Laadt de UI-teksten voor de actieve taal. De inhoudelijke content
 * (aanbieders, blogs, gidsen) komt niet hiervandaan maar uit lib/ —
 * dit bestand gaat alleen over knoplabels, koppen en microcopy.
 */
export default getRequestConfig(async ({ requestLocale }) => {
  const gevraagd = await requestLocale;
  const locale = hasLocale(routing.locales, gevraagd) ? gevraagd : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
