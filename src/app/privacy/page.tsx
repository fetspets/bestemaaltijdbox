import Link from 'next/link';

export const metadata = {
  title: 'Privacybeleid — BesteMaaltijdbox.be',
  description: 'Privacybeleid van BesteMaaltijdbox.be. Hoe we omgaan met je gegevens en affiliate links.',
};

export default function PrivacyPage() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '32px 20px 64px' }}>

      <div style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 24 }}>
        <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Home</Link>
        {' → '}
        <strong style={{ color: 'var(--ink)' }}>Privacybeleid</strong>
      </div>

      <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 38, fontWeight: 900, marginBottom: 8 }}>Privacybeleid</h1>
      <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 40 }}>Laatst bijgewerkt: maart 2026</p>

      {[
        {
          titel: '1. Wie zijn wij?',
          tekst: 'BesteMaaltijdbox.be is een onafhankelijke Belgische vergelijkingssite voor maaltijdboxen. De site wordt beheerd door Stef Mariën, gevestigd in België. Contact: info@bestemaaltijdbox.be',
        },
        {
          titel: '2. Welke gegevens verzamelen we?',
          tekst: 'BesteMaaltijdbox.be verzamelt geen persoonlijke gegevens rechtstreeks van bezoekers. We gebruiken geen registratieformulieren of inlogfuncties. We maken gebruik van anonieme analysetools (zoals Google Analytics) om te begrijpen hoe bezoekers onze site gebruiken. Deze gegevens zijn volledig geanonimiseerd en worden niet gekoppeld aan individuele personen.',
        },
        {
          titel: '3. Affiliate links en cookies',
          tekst: 'Onze site bevat affiliate links naar maaltijdboxen zoals HelloFresh en Marley Spoon. Wanneer je op een dergelijke link klikt, kunnen cookies van derden (zoals Awin) worden geplaatst om bij te houden of je een aankoop doet. Dit stelt ons in staat een kleine commissie te ontvangen, zonder extra kosten voor jou. Deze affiliate relaties hebben geen invloed op onze rankings of aanbevelingen.',
        },
        {
          titel: '4. Cookies',
          tekst: 'We maken gebruik van functionele cookies (noodzakelijk voor de werking van de site) en analytische cookies (om het gebruik van de site te analyseren). Affiliate partners zoals Awin plaatsen tracking cookies wanneer je op een affiliate link klikt. Je kan cookies beheren via de instellingen van je browser.',
        },
        {
          titel: '5. Delen van gegevens',
          tekst: 'We verkopen, verhuren of delen je persoonlijke gegevens niet met derden, behalve voor zover noodzakelijk voor de werking van affiliate programma\'s (Awin) of analytische tools (Google Analytics). Beide partijen verwerken gegevens conform de GDPR.',
        },
        {
          titel: '6. Jouw rechten (GDPR)',
          tekst: 'Conform de Algemene Verordening Gegevensbescherming (GDPR) heb je het recht om inzage te vragen in je gegevens, onjuiste gegevens te laten corrigeren, je gegevens te laten verwijderen, bezwaar te maken tegen verwerking, en gegevensoverdraagbaarheid te verzoeken. Voor vragen of verzoeken: info@bestemaaltijdbox.be',
        },
        {
          titel: '7. Beveiliging',
          tekst: 'Onze website wordt gehost via Vercel en maakt gebruik van HTTPS-encryptie. We nemen redelijke technische en organisatorische maatregelen om je gegevens te beschermen.',
        },
        {
          titel: '8. Wijzigingen',
          tekst: 'We behouden het recht dit privacybeleid te wijzigen. De meest recente versie is altijd beschikbaar op deze pagina. Bij ingrijpende wijzigingen zullen we dit vermelden.',
        },
        {
          titel: '9. Contact',
          tekst: 'Voor vragen over dit privacybeleid kan je ons bereiken via info@bestemaaltijdbox.be',
        },
      ].map(({ titel, tekst }) => (
        <div key={titel} style={{ marginBottom: 32 }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 10, color: 'var(--ink)' }}>{titel}</h2>
          <p style={{ fontSize: 14, lineHeight: 1.8, color: '#4B5563' }}>{tekst}</p>
        </div>
      ))}

      <Link href="/" style={{ fontSize: 14, color: 'var(--muted)', textDecoration: 'none' }}>← Terug naar de vergelijking</Link>
    </div>
  );
}
