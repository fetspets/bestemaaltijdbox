import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--ink)',
        color: 'white',
        fontFamily: 'Outfit, sans-serif',
      }}
    >
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '20px',
                fontWeight: 900,
                marginBottom: '12px',
              }}
            >
              BesteMaaltijdbox
            </div>
            <p style={{ fontSize: '13px', color: '#aaa', lineHeight: 1.7 }}>
              Onafhankelijke vergelijking van alle maaltijdboxen in België.
              Geen betaalde posities — alleen eerlijke reviews.
            </p>
          </div>

          {/* Links */}
          <div>
            <div
              style={{
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#888',
                marginBottom: '12px',
              }}
            >
              Aanbieders
            </div>
            <div className="flex flex-col gap-2">
              {[
                { href: '/aanbieder/hellofresh', label: 'HelloFresh review' },
                { href: '/aanbieder/foodbag', label: 'Foodbag review' },
                { href: '/aanbieder/marley-spoon', label: 'Marley Spoon review' },
                { href: '/aanbieder/15gram', label: '15gram review' },
                { href: '/aanbieder/ekomenu', label: 'Ekomenu review' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ fontSize: '13px', color: '#bbb', textDecoration: 'none' }}
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Filters */}
          <div>
            <div
              style={{
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#888',
                marginBottom: '12px',
              }}
            >
              Op situatie
            </div>
            <div className="flex flex-col gap-2">
              {[
                { href: '/voor/koppel', label: 'Beste box voor koppels' },
                { href: '/voor/gezin', label: 'Beste box voor gezinnen' },
                { href: '/voor/vegetariers', label: 'Beste vegetarische box' },
                { href: '/voor/budget', label: 'Goedkoopste maaltijdbox' },
                { href: '/voor/bio', label: 'Beste biologische box' },
                { href: '/kortingscodes', label: 'Alle kortingscodes' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ fontSize: '13px', color: '#bbb', textDecoration: 'none' }}
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
          style={{ borderTop: '1px solid #333', fontSize: '12px', color: '#666' }}
        >
          <div>
            © 2026 BesteMaaltijdbox.be · Onafhankelijke vergelijkingssite
          </div>
          <div>
            <strong style={{ color: '#888' }}>Affiliate disclosure:</strong>{' '}
            Deze site bevat affiliate links. We ontvangen een kleine commissie als
            je via onze links bestelt, zonder meerprijs voor jou.
          </div>
        </div>
      </div>
    </footer>
  );
}
