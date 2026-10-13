'use client';
import { useTranslations } from 'next-intl';
import Link from '@/components/TaalLink';
import Taalwissel from '@/components/Taalwissel';
import { useState } from 'react';

export default function Navbar() {
  const t = useTranslations('nav');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
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
              { href: '/', label: t('vergelijken') },
              { href: '/kortingscodes', label: t('kortingscodes') },
              { href: '/blog', label: t('blog') },
              { href: '/gids/goedkoopste-maaltijdbox-belgie', label: t('goedkoopste') },
              { href: '/voor/koppel', label: t('voorKoppels') },
              { href: '/voor/gezin', label: t('voorGezinnen') },
            ].map(link => (
              <Link key={link.href} href={link.href} style={{ padding: '6px 12px', fontSize: 13, fontWeight: 600, color: 'var(--ink)', textDecoration: 'none', borderRadius: 6, fontFamily: 'DM Sans, sans-serif' }}>
                {link.label}
              </Link>
            ))}
            <Taalwissel />
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
              { href: '/', label: `🏆 ${t('vergelijken')}` },
              { href: '/kortingscodes', label: `🏷️ ${t('kortingscodes')}` },
              { href: '/voor/koppel', label: `👫 ${t('voorKoppels')}` },
              { href: '/voor/gezin', label: `👨‍👩‍👧 ${t('voorGezinnen')}` },
              { href: '/voor/singles', label: `🧑 ${t('voorSingles')}` },
              { href: '/voor/vegetarisch', label: `🌱 ${t('vegetarisch')}` },
              { href: '/voor/budget', label: `💰 ${t('budget')}` },
              { href: '/blog', label: `📝 ${t('blog')}` },
              { href: '/vergelijk/hellofresh-vs-foodbag', label: '⚖️ HelloFresh vs Foodbag' },
              { href: '/vergelijk/hellofresh-vs-marley-spoon', label: '⚖️ HelloFresh vs Marley Spoon' },
              { href: '/gids/goedkoopste-maaltijdbox-belgie', label: `💰 ${t('gidsGoedkoopste')}` },
              { href: '/over-ons', label: `ℹ️ ${t('overOns')}` },
            ].map(link => (
              <Link key={link.href} href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{ display: 'block', padding: '14px 20px', fontSize: 15, fontWeight: 600, color: 'var(--ink)', borderBottom: '1px solid var(--rule)', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif' }}>
                {link.label}
              </Link>
            ))}
            {/* De taalwissel staat op desktop in de balk; op gsm hoort hij hier. */}
            <div style={{ padding: '14px 20px' }} onClick={() => setMenuOpen(false)}>
              <Taalwissel />
            </div>
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
