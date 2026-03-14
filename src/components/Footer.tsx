import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: '#1C1C1C', color: 'white', padding: '48px 24px 24px', marginTop: 48 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 32, marginBottom: 40 }}>

          {/* Logo & beschrijving */}
          <div>
            <div style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 10 }}>BesteMaaltijdbox</div>
            <p style={{ fontSize: 13, color: '#9CA3AF', lineHeight: 1.7, marginBottom: 12 }}>
              Onafhankelijke vergelijking van alle maaltijdboxen in België. Geen betaalde posities — alleen eerlijke reviews.
            </p>
            <div style={{ fontSize: 12, color: '#6B7280' }}>© 2026 BesteMaaltijdbox.be</div>
          </div>

          {/* Aanbieders */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6B7280', marginBottom: 14 }}>Aanbieders</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                { naam: 'HelloFresh review', slug: 'hellofresh' },
                { naam: 'Foodbag review', slug: 'foodbag' },
                { naam: 'Marley Spoon review', slug: 'marley-spoon' },
                { naam: '15gram review', slug: '15gram' },
                { naam: 'Ekomenu review', slug: 'ekomenu' },
              ].map(a => (
                <Link key={a.slug} href={`/aanbieder/${a.slug}`} style={{ fontSize: 13, color: '#D1D5DB', textDecoration: 'none' }}>{a.naam}</Link>
              ))}
            </div>
          </div>

          {/* Op situatie */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6B7280', marginBottom: 14 }}>Op situatie</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                { label: 'Voor koppels', href: '/voor/koppel' },
                { label: 'Voor gezinnen', href: '/voor/gezin' },
                { label: 'Vegetarisch', href: '/voor/vegetarisch' },
                { label: 'Beste budget', href: '/voor/budget' },
                { label: 'Biologisch', href: '/voor/bio' },
              ].map(l => (
                <Link key={l.href} href={l.href} style={{ fontSize: 13, color: '#D1D5DB', textDecoration: 'none' }}>{l.label}</Link>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6B7280', marginBottom: 14 }}>Info</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                { label: 'Kortingscodes', href: '/kortingscodes' },
                { label: 'Over ons', href: '/over-ons' },
                { label: 'Privacybeleid', href: '/privacy' },
              ].map(l => (
                <Link key={l.href} href={l.href} style={{ fontSize: 13, color: '#D1D5DB', textDecoration: 'none' }}>{l.label}</Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ paddingTop: 24, borderTop: '1px solid #374151', fontSize: 12, color: '#6B7280', lineHeight: 1.6 }}>
          Affiliate disclosure: BesteMaaltijdbox.be ontvangt een kleine commissie wanneer je via onze links een abonnement afsluit. Dit is zonder meerprijs voor jou en heeft geen invloed op onze rankings.
        </div>
      </div>
    </footer>
  );
}
