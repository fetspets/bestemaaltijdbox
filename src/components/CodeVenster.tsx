'use client';
import { useEffect, useState } from 'react';
import { useLocale } from 'next-intl';
import { getAanbieder } from '@/lib/aanbieders';

/**
 * Bij aanbieders waar de klant zelf een code moet invullen (Foodbag,
 * Foodprepper) gaat elke /ga/-knop op de site anders naar de aanbieder zonder
 * dat de bezoeker de code kent. Dit onderschept die kliks site-breed:
 *  - de aanbieder opent via onze link in een nieuw tabblad (de klik telt, de
 *    affiliate-cookie staat);
 *  - op onze pagina verschijnt een venster met de code en een kopieerknop.
 * De code staat zo nooit als tekst in de HTML; ze komt uit de JS-bundel.
 *
 * Links met data-plaatsing die op '-code' eindigt (CodeOnthullen) tonen de
 * code zelf al en worden overgeslagen.
 */
export default function CodeVenster() {
  const locale = useLocale();
  const fr = locale === 'fr';
  const [open, setOpen] = useState<{ naam: string; code: string; href: string } | null>(null);
  const [gekopieerd, setGekopieerd] = useState(false);

  useEffect(() => {
    const klik = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
      const link = (e.target as HTMLElement).closest('a[href^="/ga/"]') as HTMLAnchorElement | null;
      if (!link) return;
      const plaatsing = link.getAttribute('data-plaatsing') ?? link.closest('[data-plaatsing]')?.getAttribute('data-plaatsing') ?? '';
      if (plaatsing.endsWith('-code')) return;
      const href = link.getAttribute('href') ?? '';
      const slug = href.split('?')[0].replace('/ga/', '');
      const aanbieder = getAanbieder(slug);
      const code = aanbieder?.kortingsCode?.code;
      if (!aanbieder || !code) return;

      e.preventDefault();
      window.open(href, '_blank', 'noopener');
      setGekopieerd(false);
      setOpen({ naam: aanbieder.naam, code, href });
    };
    // Capture-fase: vóór Next.js' Link-navigatie, maar AffiliateTracker
    // (bubbling op document) telt de klik nog steeds.
    document.addEventListener('click', klik, true);
    return () => document.removeEventListener('click', klik, true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(null);
    document.addEventListener('keydown', esc);
    return () => document.removeEventListener('keydown', esc);
  }, [open]);

  if (!open) return null;

  const kopieer = async () => {
    try {
      await navigator.clipboard.writeText(open.code);
      setGekopieerd(true);
    } catch {
      /* klembord geblokkeerd: code staat zichtbaar */
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={() => setOpen(null)}
      style={{ position: 'fixed', inset: 0, background: 'rgba(17,24,39,0.55)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16, zIndex: 100000 }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ background: 'white', borderRadius: 16, padding: '28px 22px 22px', maxWidth: 400, width: '100%', textAlign: 'center', position: 'relative', boxShadow: '0 20px 50px rgba(0,0,0,0.25)' }}
      >
        <button
          type="button"
          aria-label={fr ? 'Fermer' : 'Sluiten'}
          onClick={() => setOpen(null)}
          style={{ position: 'absolute', top: 8, right: 12, border: 'none', background: 'none', fontSize: 24, cursor: 'pointer', color: '#6B7280' }}
        >
          ×
        </button>
        <div style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 900, marginBottom: 6 }}>
          {fr ? `Votre code promo ${open.naam}` : `Jouw ${open.naam}-kortingscode`}
        </div>
        <div style={{ fontSize: 14, color: '#4B5563', marginBottom: 16, lineHeight: 1.5 }}>
          {fr
            ? `${open.naam} s’est ouvert dans un nouvel onglet. Saisissez ce code lors du paiement pour obtenir la réduction.`
            : `${open.naam} is geopend in een nieuw tabblad. Vul deze code in bij het afrekenen om de korting te krijgen.`}
        </div>
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', marginBottom: 14 }}>
          <span style={{ fontFamily: 'monospace', fontSize: 22, fontWeight: 800, letterSpacing: '0.08em', padding: '8px 16px', border: '2px dashed #111827', borderRadius: 8, color: '#111827' }}>
            {open.code}
          </span>
          <button
            type="button"
            onClick={kopieer}
            style={{ fontSize: 14, fontWeight: 700, padding: '10px 16px', borderRadius: 8, border: 'none', background: '#111827', color: 'white', cursor: 'pointer' }}
          >
            {gekopieerd ? (fr ? 'Copié ✓' : 'Gekopieerd ✓') : fr ? 'Copier' : 'Kopieer'}
          </button>
        </div>
        <div style={{ fontSize: 12, color: '#9CA3AF' }}>
          {fr ? 'Pas d’onglet ouvert ? Autorisez les pop-ups ou ' : 'Geen tabblad geopend? '}
          <a href={open.href} data-plaatsing="codevenster-code" target="_blank" rel="noopener sponsored nofollow" style={{ color: '#4B5563', textDecoration: 'underline' }}>
            {fr ? 'cliquez ici' : 'Klik hier'}
          </a>
        </div>
      </div>
    </div>
  );
}
