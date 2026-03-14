'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top promo bar */}
      <div className="top-bar">
        🔥 <strong>Nieuw:</strong> Vergelijk alle maaltijdboxen in België en bespaar — <Link href="/kortingscodes" style={{ color: '#95D5B2', fontWeight: 700 }}>Bekijk de beste deals →</Link>
      </div>

      {/* Main nav */}
      <nav
        style={{
          background: 'white',
          borderBottom: '3px solid var(--ink)',
        }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-6">
              <Link href="/" className="py-5 block" style={{ textDecoration: 'none' }}>
                <span
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '22px',
                    fontWeight: 900,
                    color: 'var(--ink)',
                    textDecoration: 'none',
                  }}
                >
                  BesteMaaltijdbox
                </span>
              </Link>

              {/* Desktop links */}
              <div style={{ display: 'flex', gap: '8px', marginLeft: '16px' }}>
                {[
                  { href: '/', label: 'Vergelijken' },
                  { href: '/kortingscodes', label: 'Kortingscodes' },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="py-5 px-4 text-sm font-medium hover:text-red-700 transition-colors"
                    style={{
                      color: 'var(--ink)',
                      textDecoration: 'none',
                      fontFamily: 'Outfit, sans-serif',
                      borderBottom: '3px solid transparent',
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right side */}
            <div
              style={{ color: 'var(--muted)', fontFamily: 'Outfit, sans-serif', fontSize: '12px' }}
            >
              Bijgewerkt: maart 2026
            </div>

            {/* Mobile hamburger - only shown on small screens */}
            <button
              className="md:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ display: 'none' }}
              aria-label="Menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className="md:hidden border-t"
            style={{ borderColor: 'var(--rule)', background: 'white' }}
          >
            {[
              { href: '/', label: 'Vergelijken' },
              { href: '/aanbieders', label: 'Alle aanbieders' },
              { href: '/kortingscodes', label: 'Kortingscodes' },
              { href: '/voor/koppel', label: 'Voor koppels' },
              { href: '/voor/gezin', label: 'Voor gezinnen' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-6 py-3 text-sm font-medium border-b"
                style={{
                  color: 'var(--ink)',
                  borderColor: 'var(--rule)',
                  fontFamily: 'Outfit, sans-serif',
                  textDecoration: 'none',
                }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
