# Sponsoring — Factor Meals

Betaalde samenwerking met **Factor Meals**. Dit document beschrijft de looptijd, wat automatisch verdwijnt, wat permanent blijft, en wat er handmatig moet gebeuren bij (niet-)verlenging.

## Looptijd

- **Live:** maandag **27 juli 2026**
- **Einde:** **27 oktober 2026** (volle 3 maanden)

Beide datums staan op één plek: `src/lib/sponsoring.ts` (`startDatum` / `eindDatum`). De datumbepaling gebeurt **server-side** (nooit uit de browserklok); de betrokken routes draaien met `export const revalidate = 3600` (ISR), zodat de tijdelijke onderdelen binnen ~1 uur na de einddatum vanzelf verschijnen/verdwijnen, zonder redeploy.

## Wat verdwijnt automatisch op 27 okt 2026

Deze onderdelen zijn server-gated op de sponsoringsperiode en verdwijnen **zonder tussenkomst**:

| Onderdeel | Bestand |
|---|---|
| Sitewide gesponsorde banner | `src/components/SponsoredBanner.tsx` (via `src/app/layout.tsx`) |
| Homepage "In de kijker"-blok | `src/app/HomePageClient.tsx` (via server-`page.tsx`) |
| Uitgelicht BESTE40-blok bovenaan kortingscodes | `src/app/kortingscodes/page.tsx` |
| HelloFresh-banner komt automatisch terug | `layout.tsx` toont `HelloFreshDealBanner` weer zodra de Factor-banner inactief is |

Waarschuwing: `src/lib/sponsoring.ts` logt tijdens `next build` een `console.warn` als de sponsoring binnen 14 dagen verloopt (zie de deploy-logs).

## Wat blijft permanent staan

Deze content blijft na 27 okt gewoon bestaan (organisch verkeer) en is **niet** tijdgebonden:

- **3 blogs**: `factor-review-belgie`, `kant-en-klare-maaltijden-zonder-koken-belgie`, `gezond-eten-zonder-tijd-belgie` (`src/lib/blog.ts`).
- **3 vergelijkpagina's**: `/vergelijk/factor-vs-{hellofresh,foodbag,marley-spoon}` (`src/lib/factorVergelijkingen.ts` + `src/components/FactorVergelijkingPagina.tsx`).
- **Factor-review + kortingscodepagina**: `/aanbieder/factor`, `/kortingscode/factor`.
- **Ranking**: Factor staat op **#5 (7,8)** — dit was een herbeoordeling op inhoudelijke gronden en blijft staan, los van de sponsoring.
- De **BESTE40-code** blijft in de normale kortingscodes-lijst met vervaldatum "t.e.m. 27/10/2026".

De gesponsorde blogs en vergelijkpagina's houden hun **"in samenwerking met Factor / Gesponsord"-disclosure** — die hoort daar te blijven zolang de content bestaat.

## Bij NIET-verlenging (na 27 okt) — handmatig

De tijdelijke plaatsingen verdwijnen vanzelf. Wat je zelf nog kan doen:

1. In `src/lib/sponsoring.ts` de Factor-entry uit `sponsoringen` verwijderen (opruimen; niet strikt nodig, maar netjes).
2. `BESTE40` op de kortingscodes-pagina op `actief: false` zetten of verwijderen als de code niet meer geldig is (`src/app/kortingscodes/page.tsx`), en de vervaldatum-vermelding weghalen.
3. Overweeg of de permanente content (blogs/vergelijkingen) blijft staan — meestal wél (SEO-waarde), met behoud van de disclosure. Als de commerciële relatie volledig stopt, kan de "in samenwerking met Factor"-regel eventueel worden aangepast naar een neutrale affiliate-disclosure.

## Bij verlenging — handmatig

1. Pas `eindDatum` (en eventueel `startDatum`) aan in `src/lib/sponsoring.ts`.
2. Update de vervaldatum-teksten "t.e.m. 27/10/2026" op de kortingscodes-pagina.
3. Klaar — de plaatsingen blijven/komen automatisch binnen het nieuwe venster.

## Lokale preview

`SPONSORING_PREVIEW=1` in `.env.local` (gitignored) forceert de plaatsingen actief, ongeacht de datum. In productie staat dit niet aan.

## Nog openstaand

- **Tracking per plaatsing (Fase 3)**: bron-parameter per plaatsing doorgeven aan het affiliate-netwerk. Geblokkeerd op de exacte Impact/sjv.io sub-ID-parameternaam — op te vragen bij Factor/het netwerk. De bron-identifiers staan al klaar in `sponsoring.ts` (`tracking.banner` / `tracking.homepageBlok`).

## Performance

Gemeten met de banner actief (dev): **CLS = 0** — geen layout shift, want de banner zit in de server-gerenderde HTML. Ook geen shift bij een teruggekeerde bezoeker die de banner eerder wegklikte. Banner ≈ 47px hoog op desktop, ~17% van het scherm op mobiel, zonder horizontale overflow.
