'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top promo bar */}
      <div style={{ background: '#1B4332', color: 'white', textAlign: 'center', padding: '9px 16px', fontSize: 13, fontWeight: 500, lineHeight: 1.4 }}>
        🔥 <strong>Nieuw:</strong> Vergelijk alle maaltijdboxen in België en bespaar —{' '}
        <Link href="/kortingscodes" style={{ color: '#95D5B2', fontWeight: 700 }}>Bekijk de beste deals →</Link>
      </div>

      {/* Main nav */}
      <nav style={{ background: 'white', borderBottom: '3px solid var(--ink)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56 }}>

          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
            <span style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, color: 'var(--ink)' }}>
              BesteMaaltijdbox
            </span>
          </Link>

          {/* Desktop links */}
          <div style={{ display: 'flex', gap: 4, alignItems: 'center' }} className="desktop-nav">
            {[
              { href: '/', label: 'Vergelijken' },
              { href: '/kortingscodes', label: 'Kortingscodes' },
              { href: '/voor/koppel', label: 'Voor koppels' },
              { href: '/voor/gezin', label: 'Voor gezinnen' },
              { href: '/over-ons', label: 'Over ons' },
            ].map(link => (
              <Link key={link.href} href={link.href} style={{ padding: '6px 12px', fontSize: 13, fontWeight: 600, color: 'var(--ink)', textDecoration: 'none', borderRadius: 6, fontFamily: 'DM Sans, sans-serif' }}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'none', flexDirection: 'column', gap: 5 }}
            className="hamburger"
            aria-label="Menu"
          >
            <span style={{ display: 'block', width: 22, height: 2, background: 'var(--ink)', borderRadius: 2, transition: 'all 0.2s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ display: 'block', width: 22, height: 2, background: 'var(--ink)', borderRadius: 2, opacity: menuOpen ? 0 : 1, transition: 'all 0.2s' }} />
            <span style={{ display: 'block', width: 22, height: 2, background: 'var(--ink)', borderRadius: 2, transition: 'all 0.2s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ borderTop: '1px solid var(--rule)', background: 'white' }}>
            {[
              { href: '/', label: '🏆 Vergelijken' },
              { href: '/kortingscodes', label: '🏷️ Kortingscodes' },
              { href: '/voor/koppel', label: '👫 Voor koppels' },
              { href: '/voor/gezin', label: '👨‍👩‍👧 Voor gezinnen' },
              { href: '/voor/vegetarisch', label: '🌱 Vegetarisch' },
              { href: '/voor/budget', label: '💰 Budget' },
              { href: '/over-ons', label: 'ℹ️ Over ons' },
            ].map(link => (
              <Link key={link.href} href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{ display: 'block', padding: '14px 20px', fontSize: 15, fontWeight: 600, color: 'var(--ink)', borderBottom: '1px solid var(--rule)', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif' }}>
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
