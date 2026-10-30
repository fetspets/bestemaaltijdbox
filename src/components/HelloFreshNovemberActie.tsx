import Link from '@/components/TaalLink';
import { actieveActie } from '@/lib/acties';

// Tijdelijke HelloFresh-actie (november 2026): gratis Peugeot-molenset bij de
// 5e box, bovenop de gewone welkomstkorting. Server-side gated op de looptijd.
export default function HelloFreshNovemberActie({ taal, plaatsing }: { taal: 'nl' | 'fr'; plaatsing: string }) {
  if (!actieveActie('hellofresh')) return null;
  const fr = taal === 'fr';
  return (
    <div style={{ background: 'linear-gradient(180deg, #FFF7ED 0%, #FFFFFF 75%)', border: '1.5px solid #FDBA74', borderRadius: 14, padding: '18px 20px', margin: '0 0 24px' }}>
      <a data-plaatsing={`${plaatsing}-beeld`} href="/ga/hellofresh" rel="noopener sponsored nofollow" style={{ float: 'right', marginLeft: 14, marginBottom: 8 }}>
        <img src={fr ? '/acties/hellofresh-peugeot-molens-fr.jpg' : '/acties/hellofresh-peugeot-molens.jpg'} alt={fr ? 'Moulins Peugeot Bistro Duo offerts chez HelloFresh' : 'Gratis Peugeot Bistro Duo-molenset bij HelloFresh'} width={110} height={110} style={{ borderRadius: 10, display: 'block' }} />
      </a>
      <div style={{ fontSize: 12, fontWeight: 700, color: '#C2410C', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>
        {fr ? '🎁 Uniquement en novembre' : '🎁 Alleen in november'}
      </div>
      <div style={{ fontFamily: 'Fraunces, serif', fontSize: 19, fontWeight: 900, lineHeight: 1.3, marginBottom: 8, color: '#1C1C1C' }}>
        {fr
          ? 'Un set de moulins à poivre et sel Peugeot Bistro Duo offert (valeur 56 €) et jusqu’à 70 € de réduction'
          : 'Gratis Peugeot Bistro Duo peper- en zoutmolenset (t.w.v. €56) én tot €70 korting'}
      </div>
      <ul style={{ margin: '0 0 12px', paddingLeft: 18, fontSize: 14, lineHeight: 1.7, color: '#4B5563' }}>
        {(fr
          ? ['Abonnez-vous entre le 1er et le 30 novembre via notre lien.', 'Recevez 4 box dans les 8 semaines.', 'Le set de moulins arrive automatiquement dans votre 5e box (dans la limite des stocks).']
          : ['Schrijf je in tussen 1 en 30 november via onze link.', 'Ontvang 4 boxen binnen 8 weken.', 'De molenset zit automatisch in je 5e box (zolang de voorraad strekt).']
        ).map(r => <li key={r}>{r}</li>)}
      </ul>
      <Link data-plaatsing={plaatsing} href="/ga/hellofresh" rel="noopener sponsored nofollow" style={{ display: 'inline-block', background: '#C2410C', color: 'white', padding: '11px 20px', borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
        {fr ? 'Profiter de l’offre →' : 'Claim de actie →'}
      </Link>
      <Link href="/blog/hellofresh-peugeot-molens-actie" style={{ display: 'inline-block', marginLeft: 14, fontSize: 13, fontWeight: 600, color: '#9A3412', textDecoration: 'underline' }}>
        {fr ? 'Comment ça marche ?' : 'Hoe werkt de actie?'}
      </Link>
      <div style={{ clear: 'both', fontSize: 11, color: 'var(--muted)', marginTop: 10, lineHeight: 1.5 }}>
        {fr
          ? 'Nouveaux clients uniquement · réduction jusqu’à 45 € + 15 € + 10 €, valable 49 jours après la commande de la 1re box · non cumulable avec d’autres offres.'
          : 'Enkel nieuwe klanten · korting tot €45 + €15 + €10, geldig tot 49 dagen na de bestelling van je 1e box · niet te combineren met andere acties.'}
      </div>
    </div>
  );
}
