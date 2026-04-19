import Link from 'next/link';

export const metadata = {
  title: 'Algemene voorwaarden — BesteMaaltijdbox.be',
  description: 'Lees de algemene voorwaarden en disclaimer van BesteMaaltijdbox.be. Informatief karakter, affiliate disclosure en intellectueel eigendom.',
};

export default function VoorwaardenPage() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '32px 20px 64px' }}>

      {/* Breadcrumb */}
      <div style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 24 }}>
        <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Home</Link>
        {' → '}
        <strong style={{ color: 'var(--ink)' }}>Algemene voorwaarden</strong>
      </div>

      <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 38, fontWeight: 900, lineHeight: 1.1, marginBottom: 8 }}>
        Algemene voorwaarden
      </h1>
      <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 32 }}>Laatst bijgewerkt: april 2026</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

        <div style={{ background: 'white', borderRadius: 16, padding: 28, border: '1px solid var(--rule)' }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 12 }}>1. Informatief karakter</h2>
          <p style={{ fontSize: 14, lineHeight: 1.8, color: '#374151' }}>
            BesteMaaltijdbox.be is een onafhankelijke vergelijkingssite. Alle informatie op deze website — inclusief reviews, scores, prijzen en aanbevelingen — heeft een <strong>puur informatief karakter</strong> en mag niet worden beschouwd als professioneel advies.
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.8, color: '#374151', marginTop: 12 }}>
            Prijzen, bezorgvoorwaarden en productaanbod van aanbieders kunnen wijzigen. We streven ernaar informatie up-to-date te houden, maar raden aan om altijd de actuele voorwaarden te controleren op de website van de betreffende aanbieder vóór je een aankoop doet.
          </p>
        </div>

        <div style={{ background: 'white', borderRadius: 16, padding: 28, border: '1px solid var(--rule)' }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 12 }}>2. Affiliate links & commissies</h2>
          <p style={{ fontSize: 14, lineHeight: 1.8, color: '#374151' }}>
            BesteMaaltijdbox.be werkt met affiliate links. Als je via een link op onze site een aankoop doet of een abonnement afsluit, ontvangen wij mogelijk een kleine commissie van de betreffende aanbieder. <strong>Dit is zonder extra kost voor jou.</strong>
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.8, color: '#374151', marginTop: 12 }}>
            De commissies hebben <strong>geen invloed op onze rankings, scores of aanbevelingen</strong>. Aanbieders kunnen niet betalen voor een hogere positie. Onze beoordelingen zijn uitsluitend gebaseerd op eigen tests en objectieve criteria.
          </p>
        </div>

        <div style={{ background: 'white', borderRadius: 16, padding: 28, border: '1px solid var(--rule)' }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 12 }}>3. Intellectueel eigendom</h2>
          <p style={{ fontSize: 14, lineHeight: 1.8, color: '#374151' }}>
            Alle inhoud op BesteMaaltijdbox.be — inclusief teksten, afbeeldingen, scores en vergelijkingen — is eigendom van BesteMaaltijdbox.be, tenzij anders vermeld. Overname of reproductie is enkel toegestaan mits uitdrukkelijke schriftelijke toestemming en met duidelijke bronvermelding.
          </p>
        </div>

        <div style={{ background: 'white', borderRadius: 16, padding: 28, border: '1px solid var(--rule)' }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 12 }}>4. Aansprakelijkheid</h2>
          <p style={{ fontSize: 14, lineHeight: 1.8, color: '#374151' }}>
            BesteMaaltijdbox.be is niet aansprakelijk voor eventuele schade die voortvloeit uit het gebruik van informatie op deze website, noch voor de inhoud van externe websites waarnaar gelinkt wordt. Aan de informatie op onze site kunnen geen rechten worden ontleend.
          </p>
        </div>

        <div style={{ background: 'white', borderRadius: 16, padding: 28, border: '1px solid var(--rule)' }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 12 }}>5. Toepasselijk recht</h2>
          <p style={{ fontSize: 14, lineHeight: 1.8, color: '#374151' }}>
            Op het gebruik van BesteMaaltijdbox.be is het Belgisch recht van toepassing. Eventuele geschillen worden voorgelegd aan de bevoegde rechtbanken in België.
          </p>
        </div>

        <div style={{ background: '#E8F5EE', borderRadius: 16, padding: 24, border: '1px solid #A7DFC0' }}>
          <p style={{ fontSize: 14, color: '#166534', margin: 0 }}>
            Vragen over deze voorwaarden? Stuur een mail naar <strong>info@bestemaaltijdbox.be</strong>. Zie ook ons{' '}
            <Link href="/privacy" style={{ color: '#1B4332', fontWeight: 700 }}>privacybeleid</Link>.
          </p>
        </div>

      </div>

      <div style={{ marginTop: 32 }}>
        <Link href="/" style={{ fontSize: 14, color: 'var(--muted)', textDecoration: 'none' }}>← Terug naar de vergelijking</Link>
      </div>
    </div>
  );
}
