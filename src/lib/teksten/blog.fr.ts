import type { BlogPost } from '../blog';

/**
 * Franse blogposts.
 *
 * Geen vertalingen: dezelfde onderwerpen, maar geschreven voor een lezer in
 * Wallonië of Brussel. Waar het Nederlands een aanbieder zonder voorbehoud
 * kan aanraden, moet het Frans vaak eerst zeggen of die überhaupt levert.
 *
 * Alleen tekst staat hier. Slugs, datums, relatedSlugs en de sponsorvelden
 * komen uit blog.ts, zodat de disclosure van betaalde artikels niet per taal
 * kan wegvallen.
 */
export const blogFr: Record<string, Partial<BlogPost>> = {
  'hoe-werkt-hellofresh': {
    titel: 'Comment fonctionne HelloFresh ? De la commande à la box devant votre porte',
    metaTitle: 'Comment fonctionne HelloFresh ? À savoir avant votre première box (2026)',
    metaDescription: "Commande, choix des recettes, livraison et pause : HelloFresh en Belgique, étape par étape. Plus la date limite que beaucoup de nouveaux clients ratent et comment obtenir la réduction de bienvenue.",
    excerpt: "Vous choisissez une box, composez votre menu chaque semaine et tout arrive au frais chez vous. Mais il y a une date limite à connaître. HelloFresh en Belgique, étape par étape.",
    faqKop: 'Questions fréquentes sur le fonctionnement de HelloFresh',
    content: [
      { type: 'p', text: "HelloFresh est le plus grand box repas de Belgique, et l'un des rares box à cuisiner qui livrent aussi en Wallonie. Le principe est simple : vous choisissez vos recettes chaque semaine, HelloFresh livre les ingrédients dosés chez vous, et vous cuisinez avec une fiche étape par étape. Les nouveaux clients se posent pourtant souvent les mêmes questions. Jusqu'à quand puis-je modifier mon menu ? Et si je ne suis pas là ? Comment fonctionne la réduction ? Voici tout le parcours, de la commande à la cuisine." },
      { type: 'codebox', tekst: 'Voir le menu de la semaine' },
      { type: 'h2', text: 'Étape 1 : choisissez votre box' },
      { type: 'p', text: "Deux choix pour commencer : pour combien de personnes vous cuisinez (de 1 à 6) et combien de repas vous voulez par semaine (de 3 à 5). Vous pouvez modifier les deux chaque semaine. Si vous vivez seul, le minimum est de trois repas par semaine ; une box de deux repas pour une personne n'existe pas." },
      { type: 'h2', text: 'Étape 2 : composez votre menu' },
      { type: 'p', html: true, text: "Chaque semaine, vous choisissez parmi plus de 50 recettes, et beaucoup de plats existent en variante : avec des pâtes complètes, du poulet au lieu du bœuf, ou du poulet végétal. Des étiquettes comme Express, Saveurs de Belgique ou One Pot vous aident à choisir. Chaque recette affiche les valeurs nutritionnelles et les allergènes. Notre <a href=\"/fr/blog/hellofresh-menu-recepten\" style=\"color:#1B4332;font-weight:600;text-decoration:underline\">guide du menu HelloFresh</a> explique chaque étiquette." },
      { type: 'p', text: "Si vous ne choisissez rien, HelloFresh compose un menu pour vous. Pratique en cas d'oubli, mais ce ne sera pas forcément ce dont vous aviez envie." },
      { type: 'h2', text: 'Étape 3 : attention à la date limite' },
      {
        type: 'notitie',
        kop: 'La date limite que beaucoup de nouveaux clients ratent',
        achtergrond: '#FFFBEB',
        rand: '#FDE68A',
        regels: [
          { label: 'Quand ?', tekst: 'Modifier votre menu, sauter une semaine ou résilier est possible jusqu’à la date limite : 3 à 6 jours avant la livraison, selon votre jour de livraison.' },
          { label: 'Ensuite ?', tekst: 'Après la date limite, votre box est confirmée, facturée et livrée.' },
          { label: 'Astuce :', tekst: 'Dès votre première commande, ajoutez un rappel hebdomadaire dans votre agenda la veille de la date limite.' },
        ],
      },
      { type: 'h2', text: 'Étape 4 : la livraison' },
      { type: 'p', text: "Vous choisissez votre jour de livraison. HelloFresh livre dans toute la Belgique : Flandre, Bruxelles et Wallonie. La box arrive emballée au frais, pour que la viande, le poisson et les produits laitiers restent frais même si vous rentrez plus tard. Absent ? Indiquez où déposer la box : dans le garage, devant la porte ou chez les voisins. La première livraison est offerte ; ensuite, la livraison coûte 5,99 € par box, avec un supplément pour certains créneaux et certaines régions." },
      { type: 'h2', text: 'Étape 5 : cuisinez' },
      { type: 'p', text: "Chaque recette a sa fiche avec des instructions étape par étape et des photos, également dans l'application. La plupart des plats sont prêts en 25 à 40 minutes. Moins de temps ? Choisissez les recettes Express ou Cuisiné en 5 min. Les ingrédients de base comme l'huile, le sel, le poivre et parfois du beurre ou un œuf sont à prévoir vous-même ; c'est indiqué sur la recette." },
      { type: 'h2', text: 'Pause, modification ou arrêt' },
      { type: 'p', html: true, text: "Vous n'êtes engagé à rien. Depuis votre compte ou l'application, vous mettez une semaine (ou plus) en pause, changez votre créneau de livraison ou résiliez, toujours avant la date limite. Un délai de rétractation de 14 jours s'applique aussi. Comment fonctionne la pause et à quoi faire attention avec votre réduction de bienvenue : lisez <a href=\"/fr/blog/hellofresh-pauzeren-week-overslaan\" style=\"color:#1B4332;font-weight:600;text-decoration:underline\">mettre HelloFresh en pause</a>." },
      { type: 'h2', text: 'Combien ça coûte ?' },
      { type: 'p', html: true, text: "Les nouveaux clients reçoivent via notre lien jusqu'à 70 € de réduction sur leurs 3 premières box : 45 € sur la première, 15 € sur la deuxième et 10 € sur la troisième. Cette réduction expire 56 jours après la commande de votre première box. Ensuite, vous payez le prix normal plus 5,99 € de livraison par box. Dans <a href=\"/fr/blog/is-hellofresh-het-waard\" style=\"color:#1B4332;font-weight:600;text-decoration:underline\">HelloFresh vaut-il le coup ?</a>, nous calculons ce que cela coûte par portion par rapport au supermarché." },
      { type: 'codebox', tekst: 'Activer jusqu’à 70 € de réduction sur vos 3 premières box' },
      { type: 'h2', text: 'Pour qui HelloFresh fonctionne-t-il le mieux ?' },
      { type: 'ul', items: [
        'Oui : vous voulez de la variété chaque semaine sans chercher de recettes',
        'Oui : vous jetez souvent des légumes et des restes',
        'Oui : vous habitez en Wallonie et cherchez un box à cuisiner qui livre chez vous',
        'Moins : vous cuisinez au feeling, sans recette',
        'Moins : vous voulez uniquement des ingrédients belges ou bio',
      ]},
      { type: 'p', text: "Vous hésitez encore ? La première box avec la réduction de bienvenue est la façon la moins chère d'essayer. Après cette première livraison, vous pouvez simplement faire une pause ou arrêter." },
    ],
    faq: [
      { q: 'Faut-il commander chaque semaine chez HelloFresh ?', a: "Non. Vous avez un abonnement, mais chaque semaine, avant la date limite, vous pouvez sauter une semaine, faire une pause plus longue ou résilier depuis votre compte ou l'application." },
      { q: 'Jusqu’à quand puis-je modifier mon menu HelloFresh ?', a: 'Jusqu’à la date limite, qui tombe 3 à 6 jours avant la livraison selon votre jour de livraison. Ensuite, votre box est confirmée.' },
      { q: 'Et si je ne suis pas là à la livraison ?', a: 'La box est emballée au frais. Vous pouvez indiquer où la déposer, par exemple dans le garage, devant la porte ou chez les voisins.' },
      { q: 'HelloFresh livre-t-il en Wallonie ?', a: 'Oui. HelloFresh livre dans toute la Belgique, Wallonie comprise.' },
    ],
    relatedLinks: [
      { label: 'Le menu HelloFresh expliqué : toutes les étiquettes', href: '/blog/hellofresh-menu-recepten' },
      { label: 'Mettre HelloFresh en pause ou sauter une semaine', href: '/blog/hellofresh-pauzeren-week-overslaan' },
      { label: 'Code promo HelloFresh : jusqu’à 70 € de réduction', href: '/kortingscode/hellofresh' },
    ],
    keywords: ['comment fonctionne hellofresh', 'hellofresh belgique', 'hellofresh wallonie', 'commander hellofresh', 'livraison hellofresh'],
  },
  'hellofresh-menu-recepten': {
    titel: 'Le menu HelloFresh expliqué : que pouvez-vous choisir chaque semaine ?',
    metaTitle: 'Menu HelloFresh : que choisir chaque semaine ? (toutes les étiquettes)',
    metaDescription: "Express, Saveurs de Belgique, One Pot, Sport : Carb+… Qu'y a-t-il vraiment au menu HelloFresh et comment bien choisir ? Nous avons passé en revue un menu complet.",
    excerpt: "Plus de 50 recettes par semaine, des variantes et toute une série d'étiquettes. Nous avons passé en revue un menu HelloFresh complet pour expliquer ce que vous pouvez choisir.",
    faqKop: 'Questions fréquentes sur le menu HelloFresh',
    content: [
      { type: 'p', text: "En ouvrant HelloFresh pour la première fois, on découvre un long menu plein d'étiquettes : Express, Saveurs de Belgique, Signature, Sport : Carb+. Que signifient-elles, et combien de choix avez-vous vraiment ? Nous avons passé en revue le menu complet de fin octobre 2026." },
      { type: 'codebox', tekst: 'Voir le menu de la semaine' },
      { type: 'h2', text: 'Combien de choix ?' },
      { type: 'p', text: "HelloFresh annonce plus de 50 recettes par semaine. En comptant les variantes, il y en a bien davantage : beaucoup de plats existent avec des pâtes complètes, du poulet ou du poisson au lieu du bœuf, ou du poulet végétal. Le menu change chaque semaine, avec des nouveautés autour d'un noyau de favoris." },
      { type: 'h2', text: 'Les étiquettes du menu' },
      { type: 'p', text: 'Voici les étiquettes rencontrées dans le menu de la semaine, avec un exemple :' },
      { type: 'ul', items: [
        'Express : des recettes pour les soirs chargés.',
        'Cuisiné en 5 min : préparé frais et à table en cinq minutes.',
        'Saveurs de Belgique : une série de recettes à l’accent belge.',
        'Signature : les favoris qui reviennent régulièrement, comme le cheeseburger ou la shakshuka au fromage de chèvre.',
        'One Pot : tout dans une seule casserole, donc moins de vaisselle.',
        'Option airfryer : la recette peut se faire au airfryer, sans obligation.',
        'Sport : Carb+ : au moins 115 grammes de glucides par personne, pour les sportifs.',
        'Nouveau et Tendances food : des nouveautés et des tendances à tester chez soi, comme les tacos de sushi ou le döner maison.',
      ]},
      { type: 'p', text: "Des thèmes temporaires apparaissent aussi. La semaine que nous avons examinée comptait des recettes en collaboration avec Efteling et un plat Doritos Loaded." },
      { type: 'h2', text: 'Les variantes : la même recette, un peu différente' },
      { type: 'p', text: "Une bonne partie du menu existe en plusieurs versions. Le sauté bulgogi se fait avec du porc ou du poulet haché, les rigatoni avec du poulet végétal ou du vrai poulet, les fajitas avec des wraps classiques ou complets. Vous choisissez un plat qui vous tente et l'adaptez à ceux qui mangent avec vous." },
      { type: 'h2', text: 'Végétarien, allergies et valeurs nutritionnelles' },
      { type: 'p', text: "Chaque recette indique les valeurs nutritionnelles et les allergènes, pour que vous décidiez vous-même. Manger végétarien est simple : le menu examiné proposait notamment des lasagnes aux légumes, un ragoût de pois chiches à la harissa et un orzotto crémeux au citron, et plusieurs plats de viande ont une variante végétale. En cas d'allergie sévère, vérifiez la liste des ingrédients chaque semaine." },
      { type: 'h2', text: 'Bien choisir' },
      { type: 'ul', items: [
        'En semaine, choisissez les recettes Express ou Cuisiné en 5 min, et gardez les plats plus longs pour le week-end.',
        'Première commande ? Commencez par quelques recettes Signature : elles reviennent pour une raison.',
        'Vous cuisinez pour des enfants ou des mangeurs difficiles ? Regardez les variantes : le même plat au poulet ou sans sauce piquante est souvent un bon compromis.',
        'Choisissez toujours avant la date limite. Sinon, HelloFresh compose le menu pour vous.',
      ]},
      { type: 'p', text: "Bon à savoir pour les lecteurs francophones : HelloFresh livre dans toute la Belgique, Wallonie comprise, ce qui n'est pas le cas de plusieurs autres box à cuisiner." },
      { type: 'codebox', tekst: 'Activer jusqu’à 70 € de réduction sur vos 3 premières box' },
    ],
    faq: [
      { q: 'Combien de recettes HelloFresh propose-t-il par semaine ?', a: 'HelloFresh annonce plus de 50 recettes par semaine. Avec les variantes, comme les versions complètes, au poulet ou au poulet végétal, il y en a bien davantage.' },
      { q: 'Que signifie Express chez HelloFresh ?', a: "L'étiquette signale des recettes pensées pour les soirs chargés. Encore moins de temps ? Choisissez les recettes Cuisiné en 5 min." },
      { q: 'Peut-on manger végétarien avec HelloFresh ?', a: 'Oui. Le menu compte chaque semaine des recettes végétariennes, et plusieurs plats de viande ont une variante végétale.' },
      { q: 'Et si je ne choisis pas de recettes ?', a: 'HelloFresh compose alors un menu pour vous. Pour l’éviter, choisissez toujours avant la date limite, 3 à 6 jours avant la livraison.' },
    ],
    relatedLinks: [
      { label: 'Comment fonctionne HelloFresh ? Étape par étape', href: '/blog/hoe-werkt-hellofresh' },
      { label: 'Cuisiner végétarien avec un box repas', href: '/blog/vegetarisch-koken-maaltijdbox' },
      { label: 'Notre avis complet sur HelloFresh', href: '/aanbieder/hellofresh' },
    ],
    keywords: ['menu hellofresh', 'recettes hellofresh', 'menu hellofresh semaine', 'hellofresh express', 'hellofresh végétarien'],
  },
  'hellofresh-pauzeren-week-overslaan': {
    titel: 'Mettre HelloFresh en pause ou sauter une semaine : comment faire (et jusqu’à quand)',
    metaTitle: 'Pause HelloFresh : jusqu’à quand et quid de votre réduction ? (2026)',
    metaDescription: "Sauter une semaine, faire une pause plus longue ou changer de jour de livraison chez HelloFresh : la marche à suivre. Plus le piège de la réduction de bienvenue à connaître avant.",
    excerpt: "En voyage, au restaurant ou simplement pas envie ? Chez HelloFresh, vous mettez une semaine ou plus en pause. Comment faire, jusqu'à quand, et pourquoi réfléchir pendant la période de bienvenue.",
    faqKop: 'Questions fréquentes sur la pause HelloFresh',
    content: [
      { type: 'p', text: "Un abonnement à un box repas ressemble à un engagement, mais chez HelloFresh, c'est surtout un réglage par défaut : vous recevez une box chaque semaine, sauf si vous dites le contraire. En voyage, une semaine de restaurants ou simplement pas envie ? Mettez votre box en pause. Voici comment, et à quoi faire attention." },
      { type: 'h2', text: 'Pause ou résiliation : quelle différence ?' },
      { type: 'p', html: true, text: "Une pause signifie que vous ne recevez pas de box pendant une ou plusieurs semaines, mais votre compte et votre abonnement restent actifs. Ensuite, tout reprend normalement. La résiliation arrête complètement l'abonnement. Pour arrêter vraiment, lisez <a href=\"/fr/blog/hellofresh-opzeggen\" style=\"color:#1B4332;font-weight:600;text-decoration:underline\">résilier HelloFresh</a>." },
      { type: 'h2', text: 'Mettre une semaine en pause' },
      { type: 'ul', items: [
        'Connectez-vous à votre compte sur hellofresh.be ou ouvrez l’application.',
        'Allez dans vos prochaines livraisons.',
        'Choisissez la semaine à sauter et mettez-la en pause.',
        'Vérifiez ensuite que cette semaine apparaît bien en pause.',
      ]},
      { type: 'p', text: "Vous pouvez mettre plusieurs semaines d'affilée en pause de la même façon. Vous voulez finalement la box ? Retirez la pause, tant que la date limite n'est pas passée." },
      { type: 'h2', text: 'Jusqu’à quand ?' },
      {
        type: 'notitie',
        kop: 'La date limite',
        achtergrond: '#FFFBEB',
        rand: '#FDE68A',
        regels: [
          { label: 'Quand ?', tekst: 'Pause, modification ou résiliation : jusqu’à 3 à 6 jours avant la livraison, selon votre jour de livraison.' },
          { label: 'Trop tard ?', tekst: 'Après la date limite, la box est confirmée. Elle est livrée et facturée, même si vous n’en voulez plus.' },
          { label: 'Astuce :', tekst: 'Ajoutez un rappel hebdomadaire. Vous partez en voyage ? Mettez tout de suite en pause toutes les semaines d’absence.' },
        ],
      },
      { type: 'h2', text: 'Changer de jour plutôt que faire une pause' },
      { type: 'p', text: "Une pause n'est pas toujours nécessaire. Absent le lundi mais présent le mercredi ? Changez simplement le créneau de livraison de cette semaine dans votre compte ou l'application. Et si vous n'êtes pas là au moment de la livraison, indiquez où déposer la box réfrigérée, par exemple dans le garage ou chez les voisins." },
      { type: 'h2', text: 'Attention à votre réduction de bienvenue' },
      { type: 'p', text: "C'est là que ça coince souvent. Selon les conditions de l'offre HelloFresh, la réduction de bienvenue expire 56 jours après la commande de votre première box. Si vous faites une longue pause juste après la première box, la réduction sur les box 2 et 3 peut expirer avant que vous ne l'utilisiez. Et en cas de résiliation, l'offre est perdue, même si vous recommencez plus tard." },
      { type: 'ul', items: [
        'Vous voulez toute la réduction ? Recevez vos trois premières box dans ces 56 jours.',
        'Une pause est inévitable ? Gardez-la courte et calculez quand les 56 jours sont écoulés.',
        'Vous pensez arrêter ? Préférez la pause à la résiliation tant que vous n’êtes pas sûr.',
      ]},
      { type: 'h2', text: 'Pas encore client ?' },
      { type: 'p', html: true, text: "La facilité de mise en pause fait de HelloFresh un choix sûr pour essayer, d'autant qu'il livre aussi en Wallonie. Via notre lien, vous recevez jusqu'à 70 € de réduction sur vos 3 premières box : 45 €, 15 € puis 10 €. Tout le parcours est expliqué dans <a href=\"/fr/blog/hoe-werkt-hellofresh\" style=\"color:#1B4332;font-weight:600;text-decoration:underline\">Comment fonctionne HelloFresh ?</a>." },
      { type: 'codebox', tekst: 'Activer jusqu’à 70 € de réduction sur vos 3 premières box' },
    ],
    faq: [
      { q: 'Combien de temps puis-je mettre HelloFresh en pause ?', a: "Vous pouvez sauter une semaine ou mettre plusieurs semaines d'affilée en pause depuis votre compte ou l'application. L'abonnement reste actif et reprend ensuite." },
      { q: 'Jusqu’à quand puis-je sauter une box HelloFresh ?', a: 'Jusqu’à la date limite, 3 à 6 jours avant la livraison selon votre jour de livraison. Ensuite, la box est livrée et facturée.' },
      { q: 'Est-ce que je perds ma réduction en faisant une pause ?', a: 'Pas directement, mais la réduction de bienvenue expire 56 jours après la commande de la première box. Une pause trop longue peut vous faire perdre la réduction sur les box 2 et 3. En cas de résiliation, l’offre est perdue.' },
      { q: 'La pause coûte-t-elle quelque chose ?', a: 'Non. Une semaine en pause n’est ni livrée ni facturée.' },
    ],
    relatedLinks: [
      { label: 'Résilier HelloFresh : la marche à suivre', href: '/blog/hellofresh-opzeggen' },
      { label: 'Comment fonctionne HelloFresh ? Étape par étape', href: '/blog/hoe-werkt-hellofresh' },
      { label: 'Box repas sans abonnement', href: '/blog/maaltijdbox-zonder-abonnement-belgie' },
    ],
    keywords: ['pause hellofresh', 'sauter une semaine hellofresh', 'date limite hellofresh', 'changer jour livraison hellofresh', 'suspendre hellofresh'],
  },
  'hellofresh-alternatieven-belgie': {
    titel: 'Alternatives à HelloFresh en Belgique : quel box vous convient mieux ?',
    metaTitle: 'Alternatives à HelloFresh en Belgique (2026) : quel box vous convient ?',
    metaDescription: "Moins cher, plus belge ou sans cuisiner ? 5 alternatives à HelloFresh comparées sur le prix, la livraison et la réduction de bienvenue. Découvrez laquelle vous convient.",
    excerpt: "HelloFresh est le plus grand box repas de Belgique, mais pas le meilleur pour tout le monde. Cinq alternatives comparées : moins chères, plus belges, plus gourmandes ou sans cuisiner.",
    faqKop: 'Questions fréquentes sur les alternatives à HelloFresh',
    content: [
      { type: 'p', html: true, text: "HelloFresh est le plus grand box repas de Belgique, avec plus de 80 recettes par semaine et une livraison dans tout le pays. Pourtant, beaucoup de clients cherchent une alternative après quelques semaines : la réduction de bienvenue est épuisée, les frais de livraison font grimper le prix, ou l'on préfère des ingrédients belges, voire ne plus cuisiner du tout. Lisez aussi notre <a href=\"/fr/fournisseur/hellofresh\" style=\"color:#1B4332;font-weight:600;text-decoration:underline\">avis complet sur HelloFresh</a>." },
      { type: 'p', text: "Nous comparons ci-dessous cinq alternatives : en quoi sont-elles meilleures que HelloFresh, combien coûtent-elles et où livrent-elles ? En Wallonie, le choix se limite à Foodbag et Factor." },
      {
        type: 'tabel',
        kop: 'HelloFresh et 5 alternatives côte à côte',
        slugs: ['hellofresh', 'foodbag', 'factor', 'marley-spoon', 'foodprepper', 'ekomenu'],
        portiesPerWeek: 6,
        kolommen: [
          {
            kop: 'Mieux que HelloFresh pour',
            soort: 'tekst',
            waarden: {
              hellofresh: 'Référence : plus de 80 recettes par semaine',
              foodbag: 'Ingrédients belges, livraison gratuite, même sans abonnement',
              factor: 'Ne pas cuisiner : plats prêts à réchauffer',
              'marley-spoon': 'Recettes de chef plus élaborées',
              foodprepper: 'Prix par portion le plus bas, prêt en 15 minutes',
              ekomenu: '100 % bio',
            },
          },
          {
            kop: 'Livre en Wallonie',
            soort: 'tekst',
            waarden: {
              hellofresh: 'Oui',
              foodbag: 'Oui',
              factor: 'Oui',
              'marley-spoon': 'Non',
              foodprepper: 'Non',
              ekomenu: 'Non',
            },
          },
          { kop: '€/portion', soort: 'portie' },
          { kop: '€/semaine (2p, 3×)', soort: 'weekprijs' },
          { kop: 'Réduction', soort: 'korting' },
        ],
        voetnoot: "Prix par semaine frais de livraison compris lorsqu'ils s'appliquent (HelloFresh et Factor 5,99 €, Marley Spoon 6,99 € ; les autres livrent gratuitement). Prix indicatifs ; vérifiez les tarifs actuels sur le site du fournisseur.",
      },
      {
        type: 'topAanbieders',
        kop: 'Les 3 alternatives les plus solides',
        items: [
          {
            slug: 'foodbag',
            badge: '🇧🇪 Alternative belge',
            badgeAchtergrond: '#DBEAFE',
            badgeTekst: '#1E40AF',
            tagline: 'Ingrédients belges · livraison gratuite · avec ou sans abonnement',
            waarom: "Foodbag est l'alternative la plus proche de HelloFresh, mais belge : ingrédients de fournisseurs belges, cinq styles de cuisine et livraison dans tout le pays, Wallonie comprise. Comme la livraison est gratuite, vous payez souvent moins par semaine que chez HelloFresh pour 2 personnes et 3 repas. Et vous pouvez commander sans abonnement.",
            deal: '3 × 20 € de réduction sur vos 3 premières commandes, automatiquement via notre lien',
          },
          {
            slug: 'factor',
            badge: '⏱️ Sans cuisiner',
            badgeAchtergrond: '#FEF3C7',
            badgeTekst: '#92400E',
            tagline: 'Plats prêts · toute la Belgique',
            waarom: "Vous arrêtez HelloFresh parce que cuisiner après le travail devient trop lourd ? Factor appartient au même groupe que HelloFresh, mais livre des plats prêts à réchauffer en quelques minutes. Livraison dans tout le pays.",
            deal: '40 % sur votre premier box + 25 % sur les cinq suivants',
          },
          {
            slug: 'marley-spoon',
            badge: '👨‍🍳 Plus de saveur',
            badgeAchtergrond: '#F3E8FF',
            badgeTekst: '#7C3AED',
            tagline: 'Recettes de chef · plus de 80 plats par semaine',
            waarom: "Si HelloFresh vous semble trop simple, Marley Spoon fonctionne de la même façon, avec plus de 80 recettes au choix chaque semaine, mais des recettes plus élaborées. Attention : Marley Spoon ne livre qu'en Flandre et à Bruxelles, et les modifications se font au moins une semaine à l'avance.",
            deal: "consultez l'offre de bienvenue actuelle via notre lien",
          },
        ],
      },
      {
        type: 'overigeAanbieders',
        kop: 'Deux autres alternatives',
        items: [
          { slug: 'foodprepper', omschrijving: "L'alternative la moins chère : le prix par portion le plus bas, la livraison gratuite et aucun abonnement obligatoire. Grâce aux ingrédients préparés, un quart d'heure en cuisine suffit. Flandre et Bruxelles uniquement." },
          { slug: 'ekomenu', omschrijving: "Pour manger bio : Ekomenu est 100 % bio et livre gratuitement. Le menu propose aussi du poisson et de la viande. Flandre et Bruxelles uniquement." },
        ],
      },
      {
        type: 'scenarios',
        kop: 'Quelle alternative selon votre raison ?',
        items: [
          {
            scenario: 'Vous habitez en Wallonie',
            aanbeveling: 'Foodbag ou Factor',
            slug: 'foodbag',
            uitleg: "Ce sont les deux alternatives qui livrent au sud du pays. Foodbag si vous voulez cuisiner avec des ingrédients belges, Factor si vous ne voulez plus cuisiner.",
            achtergrond: '#E8F5EE',
            rand: '#BBF7D0',
          },
          {
            scenario: 'HelloFresh est trop cher après la réduction',
            aanbeveling: 'Foodbag ou Foodprepper',
            slug: 'foodbag',
            uitleg: "Foodbag livre gratuitement dans tout le pays. À Bruxelles et en Flandre, Foodprepper a le prix par portion le plus bas.",
            achtergrond: '#DBEAFE',
            rand: '#BFDBFE',
          },
          {
            scenario: 'Cuisiner vous prend trop de temps',
            aanbeveling: 'Factor',
            slug: 'factor',
            uitleg: "Des plats prêts à réchauffer, du même groupe que HelloFresh, livrés dans toute la Belgique.",
            achtergrond: '#FEF3C7',
            rand: '#FDE68A',
          },
        ],
      },
      { type: 'h2', text: 'Changer : comment résilier HelloFresh' },
      { type: 'p', html: true, text: "Vous pouvez mettre HelloFresh en pause ou résilier chaque semaine depuis votre compte, avant la date limite de votre prochaine livraison (généralement 3 à 6 jours avant). Pour une simple pause, vous pouvez aussi sauter des semaines. Les étapes exactes sont dans notre guide <a href=\"/fr/blog/hellofresh-opzeggen\" style=\"color:#1B4332;font-weight:600;text-decoration:underline\">pour résilier HelloFresh</a>. Astuce : la plupart des alternatives offrent une nouvelle réduction de bienvenue aux nouveaux clients." },
      {
        type: 'slotCta',
        kop: "L'alternative la plus choisie",
        tekst: "Foodbag est la plus proche de HelloFresh, avec des ingrédients belges, une livraison gratuite dans toute la Belgique et la possibilité de commander sans abonnement.",
        slug: 'foodbag',
        knoptekst: 'Voir Foodbag →',
        subtekst: '3 × 20 € de réduction · automatiquement via notre lien · livraison gratuite',
      },
    ],
    faq: [
      { q: "Quelle est l'alternative la moins chère à HelloFresh ?", a: "Foodprepper a le prix par portion le plus bas et livre gratuitement, mais seulement en Flandre et à Bruxelles. En Wallonie, Foodbag est l'alternative la plus avantageuse : aucun frais de livraison dans tout le pays." },
      { q: 'Foodbag est-il moins cher que HelloFresh ?', a: "Par portion, Foodbag est un peu plus cher, mais il livre gratuitement alors que HelloFresh facture 5,99 € par livraison. Pour 2 personnes et 3 repas par semaine, Foodbag revient donc généralement moins cher." },
      { q: 'Quel box ressemble le plus à HelloFresh ?', a: "Marley Spoon fonctionne presque de la même façon : plus de 80 recettes au choix chaque semaine et un abonnement que l'on peut mettre en pause. Les recettes sont plus élaborées, et Marley Spoon ne livre qu'en Flandre et à Bruxelles." },
      { q: 'Factor appartient-il à HelloFresh ?', a: "Oui, Factor fait partie du même groupe que HelloFresh. La grande différence : Factor livre des plats prêts à réchauffer, HelloFresh des ingrédients à cuisiner." },
      { q: 'Puis-je mettre HelloFresh en pause plutôt que résilier ?', a: "Oui. Vous pouvez sauter des livraisons ou mettre en pause chaque semaine depuis votre compte, avant la date limite de votre prochaine livraison." },
    ],
  },
  'is-hellofresh-het-waard': {
    titel: 'HelloFresh vaut-il le coup ? Ce que vous payez vraiment par rapport au supermarché',
    metaTitle: 'HelloFresh vaut-il le coup ? Voici ce que vous payez vraiment (2026)',
    metaDescription: "HelloFresh est-il plus cher que faire ses courses ? Nous faisons le calcul avec des prix belges : avec et sans réduction de bienvenue, livraison et coûts que l'on ne voit pas.",
    excerpt: "Avec la réduction de bienvenue, HelloFresh est bon marché les premières semaines. Ensuite, vous payez plus par portion qu'au supermarché. Quand cela vaut-il quand même la peine ?",
    faqKop: 'Questions fréquentes : HelloFresh vaut-il le coup ?',
    content: [
      { type: 'p', text: "La réponse courte : les premières semaines, grâce à la réduction de bienvenue, HelloFresh coûte autant ou moins que cuisiner soi-même. Ensuite, vous payez nettement plus par portion qu'au supermarché. Que cela en vaille la peine dépend de ce que vous jetez aujourd'hui, du temps dont vous disposez et du nombre de personnes à table." },
      { type: 'h2', text: 'Combien coûte vraiment HelloFresh ?' },
      {
        type: 'notitie',
        kop: 'Exemple : 2 personnes, 3 repas par semaine',
        achtergrond: '#F0FDF4',
        rand: '#BBF7D0',
        regels: [
          { label: 'Box 1, avec réduction de bienvenue :', tekst: "25,99 € pour 6 portions, première livraison offerte. Soit environ 4,33 € par portion (prix affiché sur la page HelloFresh via notre lien, le 13 octobre 2026)." },
          { label: 'Box 2 et 3 :', tekst: "jusqu'à 15 € et jusqu'à 10 € de réduction, plus 5,99 € de livraison. Vous êtes alors entre le prix de bienvenue et le prix normal." },
          { label: 'À partir du box 4, sans réduction :', tekst: '47,50 € plus 5,99 € de livraison = 53,49 € par semaine, soit environ 8,92 € par portion.' },
          { label: 'Faire ses courses soi-même :', tekst: '4 à 6 € par personne et par repas, selon un calcul de VRT NWS (2024). Un box repas y revenait à 6,50 à 10 €.' },
        ],
      },
      { type: 'p', html: true, text: "Sur le papier, après les semaines de bienvenue, HelloFresh coûte donc 3 à 5 € de plus par portion. Pour 2 personnes et 3 repas, cela fait 18 à 30 € par semaine. (Source des prix au supermarché : <a href=\"https://www.vrt.be/vrtnws/nl/2024/10/28/zelf-koken-maaltijdboxen-verspakket-goedkoopst/\" target=\"_blank\" rel=\"noopener\" style=\"color:#1B4332;text-decoration:underline\">VRT NWS</a>.)" },
      { type: 'h2', text: 'Ce que le prix ne montre pas' },
      {
        type: 'ul',
        items: [
          "Moins de gaspillage : vous recevez exactement les quantités nécessaires. Si vous laissez souvent des légumes se perdre, vos courses coûtent en réalité plus que le ticket de caisse.",
          "Pas de menu ni de liste de courses : vous choisissez chaque semaine parmi plus de 80 recettes et tout est livré. Moins de planification, et un trajet au magasin en moins.",
          "Les produits de base restent pour vous : huile, poivre, sel et parfois bouillon ne sont pas dans le box. C'est le cas de la plupart des box repas.",
          "La santé n'est pas la différence : les ingrédients d'un box ne sont pas plus sains que les mêmes ingrédients achetés en magasin. HelloFresh indique lui-même que plus de la moitié de son menu se compose de recettes équilibrées.",
        ],
      },
      { type: 'h2', text: 'Pour qui HelloFresh vaut-il le coup ?' },
      {
        type: 'ul',
        items: [
          "Les personnes seules et les couples qui jettent souvent de la nourriture ou n'aiment pas planifier.",
          "Ceux qui ont peu de temps mais veulent cuisiner frais, sans réfléchir chaque soir à ce qu'il y aura à table.",
          "Ceux qui veulent plus de variété : plus de 80 recettes par semaine vous sortent de vos cinq plats habituels.",
          "Moins pour les grandes familles : plus il y a de bouches, plus l'écart avec le supermarché grandit. C'est aussi la conclusion du calcul de la VRT.",
        ],
      },
      { type: 'h2', text: 'Moins cher que HelloFresh ?' },
      { type: 'p', html: true, text: "Si HelloFresh vous semble trop cher après la réduction, il existe des box moins chers. Foodbag livre gratuitement dans toute la Belgique, Wallonie comprise, même sans abonnement. À Bruxelles et en Flandre, Foodprepper a le prix par portion le plus bas. Toutes les options sont dans notre <a href=\"/fr/blog/hellofresh-alternatieven-belgie\" style=\"color:#1B4332;font-weight:600;text-decoration:underline\">comparatif des alternatives à HelloFresh</a>. Pour cuisiner au plus bas prix avec une recette, les <a href=\"/fr/blog/maaltijdbox-supermarkt-belgie\" style=\"color:#1B4332;font-weight:600;text-decoration:underline\">kits repas du supermarché</a> sont une option." },
      {
        type: 'slotCta',
        kop: 'Testez-le vous-même, sans risque',
        tekst: "La façon la moins chère de savoir si HelloFresh vous convient : essayez les premiers box avec la réduction de bienvenue et résiliez si cela ne vous plaît pas. Pause ou résiliation possible chaque semaine.",
        slug: 'hellofresh',
        knoptekst: 'Voir la réduction de bienvenue HelloFresh →',
        subtekst: "Jusqu'à 70 € sur vos 3 premières box · automatiquement via notre lien · résiliable chaque semaine",
      },
    ],
    faq: [
      { q: 'HelloFresh est-il moins cher que faire ses courses ?', a: "Seulement les premières semaines, grâce à la réduction de bienvenue. Ensuite, vous payez environ 8,92 € par portion (2 personnes, 3 repas, livraison comprise), contre environ 4 à 6 € par portion en faisant vos courses." },
      { q: 'HelloFresh est-il cher ?', a: "Sans réduction, un box pour 2 personnes et 3 repas coûte 47,50 € plus 5,99 € de livraison. C'est plus cher par portion qu'au supermarché, mais vous gaspillez moins et vous n'avez ni à planifier ni à faire les courses." },
      { q: 'HelloFresh est-il sain ?', a: "Cela dépend des recettes que vous choisissez. HelloFresh indique que plus de la moitié de son menu se compose de recettes équilibrées, avec les valeurs nutritionnelles de chaque recette." },
      { q: 'HelloFresh est-il belge ?', a: "Non, HelloFresh est une entreprise allemande basée à Berlin. Pour un box belge, regardez Foodbag ou Foodprepper." },
      { q: 'HelloFresh est-il bio ?', a: "Non, HelloFresh n'est pas un box bio. Pour du 100 % bio, Ekomenu est l'option de notre comparatif (Flandre et Bruxelles uniquement)." },
    ],
  },
  'maaltijdbox-supermarkt-belgie': {
    titel: 'Box repas de Delhaize, Colruyt, Carrefour ou AH : que recevez-vous vraiment ?',
    metaTitle: 'Box repas de Delhaize, Colruyt, Carrefour ou AH : que recevez-vous ?',
    metaDescription: "Les supermarchés vendent aussi des box et kits repas. Que contiennent-ils, combien coûtent-ils par personne et quand un vrai box repas est-il le meilleur choix ?",
    excerpt: "Delhaize, Colruyt, Carrefour et Albert Heijn vendent des kits repas de 5 à 7 €. Ce qu'ils contiennent, ce qui manque, et la comparaison avec un box repas livré.",
    faqKop: 'Questions fréquentes sur les box repas du supermarché',
    content: [
      { type: 'p', text: "En cherchant « box repas delhaize » ou « box repas colruyt », on ne trouve pas un box comme HelloFresh, mais des kits repas : un paquet de légumes, sauce ou épices et une recette pour un seul plat. La viande ou le poisson s'achètent généralement à part. C'est moins cher qu'un box repas, mais c'est tout autre chose." },
      { type: 'p', text: "Nous avons regardé l'offre des quatre grands supermarchés le 14 octobre 2026. Les prix peuvent varier selon le magasin et la semaine." },
      { type: 'h2', text: 'Delhaize : un box pour un plat' },
      { type: 'p', text: "Delhaize vend sous le nom « Boîte de repas » des paquets de légumes (découpés ou non) pour un plat, comme le waterzooi ou le poulet teriyaki. Ils coûtent 6,89 €, sont prévus pour 2 à 3 personnes et se préparent en 35 minutes environ. La viande est à ajouter vous-même ; l'emballage indique ce qu'il faut ajouter, avec une astuce végétarienne. En magasin ou en ligne, avec livraison à partir de 7,95 €." },
      { type: 'h2', text: 'Colruyt : BONI Freshbox et Foodbag' },
      { type: 'p', text: "Colruyt vend des kits BONI Freshbox pour 3 à 4 personnes, comme la moussaka ou le tandoori indien, pour environ 5,50 € (le prix varie selon le magasin). Par ailleurs, Foodbag appartient entièrement au groupe Colruyt depuis 2025. C'est un vrai box repas, avec tous les ingrédients pour au moins trois plats, et on peut aussi le retirer le lundi dans une centaine de points Collect&Go." },
      { type: 'h2', text: 'Carrefour : des kits repas' },
      { type: 'p', text: "Carrefour propose une rubrique de kits repas, par exemple un kit couscous pour 3 à 4 personnes. Le Simply You Box, l'ancien box repas de Carrefour, n'existe plus." },
      { type: 'h2', text: 'Albert Heijn Belgique : des kits frais' },
      { type: 'p', text: "Albert Heijn vend en Belgique une large gamme de kits frais, d'environ 5 à 7 € pour 2 à 4 personnes. Exemples : curry madras (4 personnes, 30 minutes, 5,99 €), nasi découpé (2 à 3 personnes, 15 minutes, 6,99 €). AH propose aussi des kits « complets »." },
      { type: 'h2', text: 'Kit repas ou box repas : la différence' },
      {
        type: 'ul',
        items: [
          "Prix : un kit coûte 5 à 7 € pour 2 à 4 personnes, mais sans viande ni poisson. Un box repas coûte de 4,75 à environ 9 € par portion, tout compris.",
          "Contenu : un kit, c'est un plat. Un box repas livre tous les ingrédients pour au moins trois plats, dosés par personne.",
          "Facilité : avec un kit, vous allez toujours au magasin et achetez le reste. Un box repas est livré chez vous.",
          "Choix : au supermarché, vous prenez ce qu'il y a ce jour-là. Chez HelloFresh, vous choisissez chaque semaine parmi plus de 80 recettes, chez Foodbag parmi une quarantaine.",
        ],
      },
      { type: 'p', text: "En bref : pour cuisiner au plus bas prix avec une recette, prenez un kit. Pour ne plus penser aux courses de toute la semaine, un box repas est le meilleur choix." },
      {
        type: 'topAanbieders',
        kop: 'Plutôt un vrai box repas livré chez vous ?',
        items: [
          {
            slug: 'foodbag',
            badge: '🇧🇪 Groupe Colruyt',
            badgeAchtergrond: '#DBEAFE',
            badgeTekst: '#1E40AF',
            tagline: 'Ingrédients belges · livraison gratuite · retrait Collect&Go',
            waarom: "Si vous faites déjà vos courses chez Colruyt, Foodbag est l'étape logique : entièrement au groupe Colruyt depuis 2025, avec des ingrédients belges et une livraison gratuite dans tout le pays, Wallonie comprise. Commande possible sans abonnement, et paiement en titres-repas.",
            deal: '3 × 20 € de réduction sur vos 3 premières commandes, automatiquement via notre lien',
          },
          {
            slug: 'hellofresh',
            badge: '⭐ Le plus de choix',
            badgeAchtergrond: '#E8F5EE',
            badgeTekst: '#1B4332',
            tagline: 'Plus de 80 recettes par semaine · toute la Belgique',
            waarom: "Le plus grand choix de tous les box, chaque semaine. Avec la réduction de bienvenue, les premiers box ne coûtent pas plus cher que faire ses courses.",
            deal: "jusqu'à 70 € de réduction sur vos 3 premières box, automatiquement via notre lien",
          },
          {
            slug: 'factor',
            badge: '⏱️ Sans cuisiner',
            badgeAchtergrond: '#FEF3C7',
            badgeTekst: '#92400E',
            tagline: 'Plats prêts · toute la Belgique',
            waarom: "Vous achetez surtout des plats préparés au supermarché ? Factor livre des plats prêts à réchauffer, dans tout le pays.",
            deal: '40 % sur votre premier box + 25 % sur les cinq suivants',
          },
        ],
      },
    ],
    faq: [
      { q: 'Delhaize a-t-il un box repas ?', a: "Delhaize vend des « Boîtes de repas » pour un plat, comme le waterzooi ou le poulet teriyaki, à 6,89 € pour 2 à 3 personnes. La viande est à ajouter vous-même. Nous n'avons pas trouvé chez Delhaize de box avec plusieurs plats par semaine livré à domicile." },
      { q: 'Colruyt a-t-il un box repas ?', a: "Oui : Foodbag appartient entièrement au groupe Colruyt depuis 2025. Colruyt vend aussi des kits BONI Freshbox pour 3 à 4 personnes, pour environ 5,50 €." },
      { q: 'Y a-t-il de la viande dans un kit repas ?', a: "Généralement pas. Les kits contiennent des légumes et une sauce ou des épices ; la viande ou le poisson s'achètent à part. Albert Heijn propose aussi des kits « complets »." },
      { q: 'Quel est le moins cher : un kit ou un box repas ?', a: "Le kit, même en comptant la viande. Un box repas coûte plus, mais livre tout pour plusieurs plats, dosé par personne." },
      { q: 'Le Simply You Box de Carrefour existe-t-il encore ?', a: "Non, le Simply You Box de Carrefour a été arrêté. Carrefour vend désormais des kits repas pour un plat." },
    ],
  },
  'maaltijdbox-maaltijdcheques-belgie': {
    titel: 'Payer un box repas avec des titres-repas en Belgique : qui les accepte ?',
    metaTitle: 'Payer un box repas en titres-repas (2026) : quels 3 box les acceptent et comment ?',
    metaDescription:
      "Oui, mais pas chez tous les box repas. Quels 3 box acceptent Monizze, Pluxee et Edenred, comment payer (même avec abonnement) et ce que vous pouvez acheter avec vos titres-repas.",
    excerpt:
      "Trois box repas acceptent les titres-repas électroniques Monizze, Pluxee (Sodexo) et Edenred : Foodbag, HelloFresh et Foodprepper. Mais l'un des trois ne livre pas en Wallonie.",
    faqKop: 'Questions fréquentes sur les titres-repas',
    content: [
      {
        type: 'tabel',
        kop: 'Quel box repas accepte les titres-repas ?',
        slugs: ['foodbag', 'hellofresh', 'foodprepper', 'marley-spoon', 'factor', 'ekomenu', 'foodmaker', 'crowd-cooks'],
        portiesPerWeek: 6,
        rijMarkering: {
          foodbag: 'positief',
          hellofresh: 'positief',
          foodprepper: 'positief',
          'marley-spoon': 'negatief',
          factor: 'negatief',
          ekomenu: 'negatief',
          foodmaker: 'negatief',
          'crowd-cooks': 'negatief',
        },
        kolommen: [
          {
            kop: 'Titres-repas',
            soort: 'tekst',
            waarden: {
              foodbag: '✅ OUI',
              hellofresh: '✅ OUI (via une étape)',
              foodprepper: '✅ OUI',
              'marley-spoon': '❌ NON',
              factor: '❌ NON',
              ekomenu: '❌ NON',
              foodmaker: '❌ NON',
              'crowd-cooks': '❌ NON',
            },
          },
          {
            kop: 'Livre en Wallonie',
            soort: 'tekst',
            waarden: {
              foodbag: 'Oui',
              hellofresh: 'Oui',
              foodprepper: 'Non',
              'marley-spoon': 'Non',
              factor: 'Oui',
              ekomenu: 'Non',
              foodmaker: 'Oui',
              'crowd-cooks': 'Partiellement',
            },
          },
          {
            kop: 'Émetteurs',
            soort: 'tekst',
            waarden: {
              foodbag: 'Monizze, Pluxee (Sodexo), Edenred',
              hellofresh: 'Monizze (via Virtual Visa), Edenred',
              foodprepper: 'Monizze, Pluxee (Sodexo), Edenred',
            },
          },
          {
            kop: 'Restriction',
            soort: 'tekst',
            waarden: {
              foodbag: 'Commande ponctuelle uniquement, pas en abonnement',
              hellofresh: "Il faut d'abord activer la carte Monizze Virtual Visa",
              foodprepper: 'Commande ponctuelle uniquement, pas en abonnement',
            },
          },
        ],
        voetnoot:
          "Émetteurs et restrictions vérifiés auprès des fournisseurs. En cas de doute, contrôlez les moyens de paiement sur leur page de commande.",
      },
      {
        type: 'winnaar',
        kop: '⭐ Le meilleur choix avec des titres-repas',
        slug: 'foodbag',
        prijsRegel: 'Monizze, Pluxee et Edenred — sans détour',
        dealRegel: "Aucun abonnement nécessaire, et livraison dans tout le pays, Wallonie comprise.",
        knoptekst: 'Voir Foodbag →',
        punten: [
          "Aucun abonnement — idéal pour un paiement ponctuel avec vos chèques",
          'Accepte Monizze, Pluxee et Edenred',
          'Ingrédients belges frais, livraison gratuite partout en Belgique',
        ],
      },
      { type: 'h2', text: 'Payer Foodbag avec des titres-repas' },
      {
        type: 'p',
        text: "Foodbag est le choix le plus simple : vous payez avec votre carte Monizze, Pluxee ou Edenred au moment de la commande. Attention, cela ne fonctionne que pour une commande ponctuelle. Si vous enregistrez votre commande en abonnement, les chèques ne peuvent pas être liés. Avantage supplémentaire pour un lecteur francophone : Foodbag livre dans les trois régions.",
      },
      { type: 'cta', tekst: 'Commander Foodbag avec des titres-repas', slug: 'foodbag' },
      { type: 'h2', text: 'Payer HelloFresh avec des titres-repas' },
      {
        type: 'p',
        text: "HelloFresh travaille avec Monizze et Edenred, mais demande une étape supplémentaire : activez la carte Monizze Virtual Visa dans l'application Monizze, puis ajoutez-la comme moyen de paiement dans votre compte HelloFresh. Via Edenred, vous utilisez les données figurant au dos de votre carte. Une fois configuré, votre abonnement HelloFresh est débité chaque semaine sur votre solde. HelloFresh livre également dans tout le pays.",
      },
      { type: 'cta', tekst: 'Voir HelloFresh', slug: 'hellofresh' },
      { type: 'h2', text: 'Payer Foodprepper avec des titres-repas' },
      {
        type: 'p',
        text: "Foodprepper accepte Monizze, Pluxee et Edenred. Comme chez Foodbag, cela vaut uniquement pour une commande ponctuelle, pas pour un abonnement récurrent. Réserve importante : Foodprepper ne livre qu'en Flandre et à Bruxelles. Si vous habitez en Wallonie, cette option ne vous concerne pas, même si vos chèques y sont acceptés.",
      },
      { type: 'cta', tekst: 'Commander Foodprepper', slug: 'foodprepper' },
      {
        type: 'infokaarten',
        kop: 'Payer avec des titres-repas en 3 étapes',
        items: [
          {
            icon: '1️⃣',
            titel: 'Choisissez un fournisseur qui les accepte et qui livre chez vous',
            tekst:
              "Foodbag, HelloFresh et Foodprepper sont les seuls box repas belges à accepter les titres-repas électroniques. Des trois, seuls Foodbag et HelloFresh livrent en Wallonie.",
          },
          {
            icon: '2️⃣',
            titel: 'Optez pour une commande ponctuelle',
            tekst:
              "Chez Foodbag et Foodprepper, le paiement par titres-repas ne fonctionne que pour une commande unique. Chez HelloFresh, l'abonnement est possible via la carte Monizze Virtual Visa ou via Edenred.",
          },
          {
            icon: '3️⃣',
            titel: 'Sélectionnez le moyen de paiement au moment de payer',
            tekst:
              "Choisissez votre carte Monizze, Pluxee ou Edenred sur la page de paiement. Chez HelloFresh via Monizze : ajoutez d'abord la carte Virtual Visa dans les paramètres de votre compte.",
          },
        ],
      },
      {
        type: 'notitie',
        kop: '💡 Nouveauté 2026 : plafond relevé',
        achtergrond: '#FEF3C7',
        rand: '#FCD34D',
        regels: [
          {
            label: 'Plafond par titre :',
            tekst:
              "depuis le 1er janvier 2026, un titre-repas peut valoir jusqu'à 10 € (contre 8 €). Ce n'est pas automatique : votre employeur ou votre secteur doit convenir de la hausse. Renseignez-vous auprès de votre employeur.",
          },
          {
            label: 'Ce que cela change concrètement :',
            tekst:
              "une commande Foodbag moyenne pour deux personnes (trois repas) coûte à partir de 50,60 € — avec vos titres-repas, une grande partie ne sort donc pas de votre poche.",
          },
        ],
      },
      { type: 'h2', text: 'Que peut-on acheter avec des titres-repas ?' },
      { type: 'p', text: "Les titres-repas sont destinés à l'alimentation. Vous pouvez les utiliser pour :" },
      { type: 'ul', items: [
        'Les courses au supermarché : légumes, fruits, pain, viande, poisson, plats préparés et boissons non alcoolisées.',
        'Le boulanger, le boucher, le traiteur et le marché, s’ils acceptent les titres-repas électroniques.',
        'Les restaurants, les sandwicheries et la livraison de repas.',
        'Les box repas : Foodbag, HelloFresh et Foodprepper.',
      ] },
      { type: 'p', text: "Non autorisés : l'alcool (même au supermarché), le tabac et tout ce qui n'est pas alimentaire, comme les produits d'entretien, les soins, la nourriture pour animaux ou les ustensiles de cuisine. Avec un box repas, vous dépensez donc vos titres-repas pour exactement ce à quoi ils servent : des ingrédients frais et une recette." },
      {
        type: 'slotCta',
        kop: 'Prêt à commander ?',
        tekst:
          "Foodbag est la façon la plus simple d'utiliser vos titres-repas : aucun abonnement nécessaire, les trois émetteurs sont acceptés, et la livraison couvre tout le pays.",
        slug: 'foodbag',
        knoptekst: 'Voir Foodbag →',
        subtekst: 'Monizze · Pluxee · Edenred · livraison gratuite partout en Belgique',
      },
    ],
    faq: [
      {
        q: 'Puis-je payer mon abonnement HelloFresh avec des titres-repas ?',
        a: "Oui, mais pas directement. Vous devez activer la carte Monizze Virtual Visa dans l'application Monizze et l'ajouter comme moyen de paiement chez HelloFresh. Via Edenred, vous utilisez les données de votre carte Edenred.",
      },
      {
        q: 'Puis-je payer Foodbag avec des titres-repas ?',
        a: "Oui. Foodbag accepte Monizze, Pluxee (Sodexo) et Edenred. Attention : uniquement pour une commande ponctuelle, pas pour un abonnement.",
      },
      {
        q: 'Quels box repas acceptent les titres-repas ?',
        a: "En Belgique, Foodbag, HelloFresh et Foodprepper sont les seuls box repas à accepter les titres-repas électroniques.",
      },
      {
        q: 'Lesquels acceptent les titres-repas ET livrent en Wallonie ?',
        a: "Foodbag et HelloFresh. Foodprepper accepte bien les titres-repas mais ne livre qu'en Flandre et à Bruxelles.",
      },
      {
        q: 'Quels émetteurs sont acceptés ?',
        a: 'Monizze, Pluxee (anciennement Sodexo) et Edenred (Ticket Restaurant).',
      },
      {
        q: 'Combien vaut un titre-repas ?',
        a: "Depuis le 1er janvier 2026, un titre-repas peut valoir jusqu'à 10 € par jour presté. La hausse de 8 à 10 € n'est pas automatique : votre employeur ou votre secteur doit la convenir.",
      },
      {
        q: 'Que peut-on acheter avec des titres-repas ?',
        a: "Uniquement de l'alimentation et des boissons non alcoolisées : au supermarché, chez le boulanger ou le boucher, au restaurant et chez les box repas comme Foodbag, HelloFresh et Foodprepper. L'alcool, le tabac et les produits non alimentaires (produits d'entretien, soins) sont exclus.",
      },
    ],
  },

  'maaltijdbox-zonder-abonnement-belgie': {
    titel: 'Box repas sans abonnement en Belgique 2026 : quelles options ?',
    metaTitle: 'Box repas sans abonnement en Belgique 2026 — options comparées',
    metaDescription:
      "Un box repas sans engagement ? Voyez quels fournisseurs belges livrent sans contrat fixe — et lesquels desservent la Wallonie.",
    excerpt:
      "Trois fournisseurs belges livrent sans abonnement obligatoire. Nous les comparons sur le prix, la livraison et la réduction de bienvenue — en commençant par la question de savoir qui livre chez vous.",
    faqKop: 'Questions fréquentes sur les box sans abonnement',
    content: [
      {
        type: 'p',
        html: true,
        text: "Vous voulez essayer un box repas sans vous engager ? Trois fournisseurs belges livrent sans abonnement obligatoire : <a href=\"/fr/fournisseur/foodprepper\" style=\"color:#1B4332;font-weight:600\">Foodprepper</a> et <a href=\"/fr/fournisseur/foodmaker\" style=\"color:#1B4332;font-weight:600\">Foodmaker</a> ne demandent réellement aucun abonnement, et <a href=\"/fr/fournisseur/foodbag\" style=\"color:#1B4332;font-weight:600\">Foodbag</a> permet aussi la commande ponctuelle.",
      },
      {
        type: 'p',
        html: true,
        text: "Une précision qui change tout selon l'endroit où vous habitez : <strong>Foodprepper ne livre qu'en Flandre et à Bruxelles</strong>. En Wallonie, il ne reste donc que Foodbag et Foodmaker. <em>Note : Carrefour Simply You proposait également une formule sans abonnement, mais le service a été arrêté en 2026.</em>",
      },
      {
        type: 'winnaar',
        kop: '🏆 Le meilleur box sans abonnement qui livre partout',
        slug: 'foodbag',
        prijsRegel: 'Commande ponctuelle · livraison gratuite dans tout le pays',
        dealRegel: '3 × 20 € de réduction sur vos trois premières commandes, appliqué automatiquement via notre lien.',
        knoptekst: 'Voir Foodbag →',
        alternatief: {
          inleiding: 'Vous cherchez le prix le plus bas et habitez en Flandre ou à Bruxelles ? →',
          slug: 'foodprepper',
          label: 'Foodprepper : à partir de 4,75 €/portion',
        },
      },
      {
        type: 'tabel',
        kop: 'Comparatif : les box sans abonnement',
        slugs: ['foodbag', 'foodmaker', 'foodprepper'],
        portiesPerWeek: 6,
        kolommen: [
          {
            kop: 'Livre en Wallonie',
            soort: 'tekst',
            waarden: { foodbag: 'Oui', foodmaker: 'Oui', foodprepper: 'Non' },
          },
          {
            kop: 'Abonnement',
            soort: 'tekst',
            waarden: {
              foodbag: 'Commande ponctuelle possible',
              foodmaker: 'Aucun abonnement requis',
              foodprepper: 'Aucun abonnement requis',
            },
          },
          { kop: '€/portion', soort: 'portie' },
          { kop: 'Livraison', soort: 'bezorging' },
          { kop: 'Réduction', soort: 'korting' },
        ],
        voetnoot:
          "Prix indicatifs — vérifiez les tarifs actuels sur le site du fournisseur. Les réductions valent pour les nouveaux clients et sont appliquées automatiquement via notre lien.",
      },
      {
        type: 'topAanbieders',
        kop: 'Les trois options en détail',
        items: [
          {
            slug: 'foodbag',
            badge: '🏆 Meilleur choix sans abonnement',
            badgeAchtergrond: '#DBEAFE',
            badgeTekst: '#1E40AF',
            tagline: 'Ingrédients belges · livre dans tout le pays',
            waarom:
              "Foodbag est le numéro deux du marché belge et appartient au groupe Colruyt. Ingrédients 100 % belges, cinq styles de cuisine dont la ligne Sana de Sandra Bekkari, et livraison gratuite dans les trois régions — Wallonie comprise. Aucun abonnement n'est nécessaire : vous commandez quand cela vous arrange. Via notre lien, vous recevez 3 × 20 € sur vos trois premières commandes, soit 60 € au total, sans code à saisir.",
            deal: '3 × 20 € de réduction sur les 3 premières commandes',
          },
          {
            slug: 'foodmaker',
            badge: '👨‍🍳 Qualité artisanale belge',
            badgeAchtergrond: '#FEF3C7',
            badgeTekst: '#92400E',
            tagline: 'Recettes Jeroen Meus · réchauffer, pas cuisiner',
            waarom:
              "Foodmaker est un service anversois de plats préparés, avec une collaboration signée Jeroen Meus. Vous réchauffez en quelques minutes, sans cuisiner. Aucun abonnement obligatoire, une trentaine de plats par semaine, une gamme entièrement végane et une livraison gratuite dans toute la Belgique. Commande minimum : 39,90 €.",
            deal: "Aucun code permanent — consultez leur offre de bienvenue actuelle",
          },
          {
            slug: 'foodprepper',
            badge: '💰 Le moins cher sans abonnement',
            badgeAchtergrond: '#E8F5EE',
            badgeTekst: '#1B4332',
            tagline: 'Prêt en 15 minutes · Flandre et Bruxelles uniquement',
            waarom:
              "Foodprepper est le box le plus rapide de Belgique : tout est sur la table en quinze minutes grâce aux légumes précuits, à la viande marinée et aux sauces prêtes. Aucun abonnement, aucun préavis — vous commandez ponctuellement ou chaque semaine. Presque tous les ingrédients viennent de fournisseurs belges. Réserve : la livraison s'arrête à la Flandre et à Bruxelles.",
            deal: '3 × 15 € de réduction sur les 3 premières commandes',
            waarschuwing: '⚠️ Pas de livraison en Wallonie',
          },
        ],
      },
      {
        type: 'scenarios',
        kop: 'Quelle option pour quelle situation ?',
        items: [
          {
            scenario: 'Vous habitez en Wallonie',
            aanbeveling: 'Foodbag',
            slug: 'foodbag',
            uitleg:
              "Le seul box à cuisiner sans abonnement qui livre au sud du pays, avec des ingrédients belges et la livraison gratuite. 60 € de réduction répartis sur vos trois premières commandes. Foodmaker est l'alternative si vous préférez ne pas cuisiner du tout.",
            achtergrond: '#DBEAFE',
            rand: '#93C5FD',
          },
          {
            scenario: 'Vous voulez essayer une seule fois, sans risque',
            aanbeveling: 'Foodprepper',
            slug: 'foodprepper',
            uitleg:
              "Aucun abonnement, aucun préavis, jusqu'à 45 € de réduction de bienvenue via notre lien. Idéal pour tester — à condition d'habiter en Flandre ou à Bruxelles.",
            achtergrond: '#F0FDF4',
            rand: '#BBF7D0',
          },
          {
            scenario: 'Vous ne voulez pas cuisiner du tout',
            aanbeveling: 'Foodmaker',
            slug: 'foodmaker',
            uitleg:
              "Recettes Jeroen Meus préparées à Anvers, prêtes en quelques minutes. Aucun abonnement, livraison gratuite dans tout le pays. Commande minimum de 39,90 €.",
            achtergrond: '#FFF7ED',
            rand: '#FED7AA',
          },
        ],
      },
    ],
    faq: [
      {
        q: 'Quels box repas sans abonnement livrent en Wallonie ?',
        a: "Foodbag et Foodmaker livrent dans tout le pays sans abonnement obligatoire. Foodprepper fonctionne aussi sans abonnement mais ne livre qu'en Flandre et à Bruxelles.",
      },
      {
        q: 'Quel box repas n’a pas d’abonnement ?',
        a: "Foodprepper et Foodmaker fonctionnent entièrement sans abonnement obligatoire : vous commandez quand cela vous arrange, sans engagement hebdomadaire ni préavis. Foodbag permet également la commande ponctuelle.",
      },
      {
        q: 'Puis-je commander un box repas une seule fois ?',
        a: "Oui. Chez Foodprepper et Foodmaker, la commande unique est le fonctionnement standard. Chez Foodbag aussi, vous pouvez commander sans contrat fixe. Vous testez ainsi sans engagement de long terme.",
      },
      {
        q: 'Quel est le box sans abonnement le moins cher ?',
        a: "Foodprepper, à partir de 4,75 € la portion avec livraison gratuite — mais uniquement en Flandre et à Bruxelles. En Wallonie, Foodbag est l'option la plus accessible à 8,43 € la portion, avec 60 € de réduction via notre lien.",
      },
    ],
  },

  'maaltijdbox-of-zelf-koken-belgie': {
    titel: 'Box repas ou cuisiner soi-même : lequel coûte vraiment le moins cher ?',
    metaTitle: 'Box repas ou courses en Belgique 2026 — le calcul complet',
    metaDescription:
      "Un box repas coûte-t-il vraiment plus cher que les courses ? Nous avons calculé, gaspillage et temps compris, avec les prix belges de 2026.",
    excerpt:
      "Beaucoup partent du principe qu'un box repas revient forcément plus cher que de cuisiner soi-même. En intégrant le gaspillage, le temps et les achats impulsifs, le tableau est plus nuancé.",
    faqKop: 'Questions fréquentes sur le coût',
    content: [
      {
        type: 'p',
        text: "Beaucoup partent du principe qu'un box repas revient plus cher que de faire ses courses. En intégrant le gaspillage alimentaire, le temps passé et les achats impulsifs, la comparaison devient nettement moins évidente. Nous avons fait le calcul avec les prix belges actuels.",
      },
      { type: 'h2', text: 'Le calcul : box repas contre supermarché' },
      {
        type: 'p',
        text: "Un repas du soir pour deux personnes coûte en moyenne 7 à 10 € au supermarché belge, à condition d'acheter exactement les bonnes quantités. Dans la pratique, vous achetez un paquet entier de crème, une botte de persil et un pot d'épices dont vous utiliserez un tiers.",
      },
      {
        type: 'p',
        text: "Les box repas livrent des quantités exactes : vous ne jetez rien. Cet écart de gaspillage peut représenter 30 à 60 € par mois pour un ménage de deux à quatre personnes.",
      },
      { type: 'h2', text: 'Combien coûte une portion en Belgique ?' },
      {
        type: 'ul',
        items: [
          'HelloFresh : à partir de 7,92 € la portion, livraison 5,99 € (première box offerte), livre dans tout le pays',
          'Foodbag : à partir de 8,43 €, ingrédients belges en filière courte, livre aussi en Wallonie',
          'Ekomenu : à partir de 6,42 €, entièrement bio — mais pas de livraison en Wallonie',
          'Foodprepper : à partir de 4,75 €, le prix le plus bas — Flandre et Bruxelles uniquement',
          'Factor : à partir de 4,99 €, plats prêts, + 5,99 € de livraison, couvre tout le pays',
        ],
      },
      { type: 'h2', text: 'Quand cuisiner soi-même revient moins cher' },
      {
        type: 'p',
        text: "Si vous faites vos courses avec discipline, jetez peu et achetez en gros, cuisiner vous-même reste moins cher — surtout pour des plats simples comme les pâtes, la soupe ou une omelette.",
      },
      {
        type: 'ul',
        items: [
          'Vous achetez de façon réfléchie et jetez peu',
          'Vous cuisinez en grande quantité et mangez les restes le lendemain',
          'Vous privilégiez les ingrédients de base : riz, légumineuses, légumes de saison',
          'Vous avez le temps de planifier vos repas et vos courses',
        ],
      },
      { type: 'h2', text: 'Quand le box repas devient plus malin' },
      {
        type: 'p',
        text: "Un box repas se justifie si vous êtes pressé, si vous jetez régulièrement des ingrédients frais ou si vous ne savez pas quoi cuisiner. Le coût invisible de la planification, des listes de courses et des trajets au magasin est systématiquement sous-estimé.",
      },
      {
        type: 'ul',
        items: [
          'Vous jetez régulièrement des ingrédients frais',
          'Vous avez peu de temps pour les courses et la planification',
          "Vous commandez souvent via Deliveroo ou Uber Eats — un box repas revient nettement moins cher",
          'Vous manquez d’inspiration et retombez toujours sur les mêmes plats',
        ],
      },
      { type: 'h2', text: 'Conclusion' },
      {
        type: 'p',
        text: "Si vous faites vos courses avec rigueur et économie, cuisiner soi-même reste moins cher. Pour la plupart des ménages belges pressés qui gaspillent régulièrement, l'écart réel est bien plus faible qu'il n'y paraît — et parfois inexistant. Vérifiez surtout, avant de comparer les prix, que le fournisseur livre chez vous : trois d'entre eux ne desservent pas la Wallonie.",
      },
    ],
    faq: [
      {
        q: 'Un box repas est-il plus cher que les courses ?',
        a: "Par portion, généralement oui. Mais les quantités exactes suppriment presque tout le gaspillage, qui représente 30 à 60 € par mois dans un ménage moyen. Si vous jetez souvent des produits frais, l'écart réel se réduit fortement.",
      },
      {
        q: 'Quel box est le moins cher en Wallonie ?',
        a: "HelloFresh, avec la première livraison offerte et une réduction de bienvenue allant jusqu'à 70 €. Foodprepper est moins cher par portion mais ne livre pas au sud du pays.",
      },
    ],
  },

  'hoe-maaltijdbox-opzeggen-belgie': {
    titel: 'Comment résilier un box repas en Belgique (étape par étape)',
    metaTitle: 'Résilier un box repas en Belgique 2026 — la marche à suivre',
    metaDescription:
      "Comment résilier votre box repas ? Marche à suivre pour HelloFresh, Foodbag, Marley Spoon et Ekomenu, avec les délais à respecter.",
    excerpt:
      "Résilier un box repas est simple chez la plupart des fournisseurs, mais chacun impose son délai. Voici la marche à suivre, fournisseur par fournisseur.",
    faqKop: 'Questions fréquentes sur la résiliation',
    content: [
      {
        type: 'p',
        text: "Résilier un box repas paraît souvent plus compliqué que ce ne l'est. Chez la plupart des fournisseurs belges, tout se fait en ligne depuis votre compte, sans appel téléphonique. Le point d'attention est le délai : passé celui-ci, la box suivante part quand même.",
      },
      { type: 'h2', text: 'Résilier HelloFresh' },
      {
        type: 'p',
        text: "HelloFresh fonctionne avec un abonnement hebdomadaire que vous pouvez mettre en pause ou arrêter à tout moment.",
      },
      {
        type: 'ul',
        items: [
          'Connectez-vous sur hellofresh.be → cliquez sur votre nom en haut à droite → paramètres du compte',
          'En bas de la page, choisissez la résiliation de l’abonnement',
          'Délai (23h59) : mercredi pour une livraison du samedi au lundi matin, jeudi du lundi après-midi au mercredi matin, dimanche du mercredi après-midi au jeudi',
          'Pause possible jusqu’à 4 semaines à l’avance, sans résilier',
        ],
      },
      {
        type: 'p',
        html: true,
        text: 'Tous les détails, et que faire si vous êtes en retard : <a href="/blog/hellofresh-opzeggen" style="color:#1B4332;font-weight:600">résilier HelloFresh</a>.',
      },
      { type: 'h2', text: 'Résilier Foodbag' },
      {
        type: 'p',
        text: "Foodbag demande de résilier via votre compte en ligne ou via le service client. Notez que Foodbag permet aussi de commander ponctuellement, sans abonnement du tout.",
      },
      {
        type: 'ul',
        items: [
          'Connectez-vous sur foodbag.be → vos données personnelles',
          'En bas, parmi vos abonnements actifs : choisissez d’arrêter l’abonnement',
          'Délai : avant la clôture des commandes pour votre jour de livraison (indiquée dans votre compte)',
          'Service client : foodlover@foodbag.be ou 09 298 05 10',
        ],
      },
      {
        type: 'p',
        html: true,
        text: 'Plus de détails, aussi sur les box sautées et les commandes ponctuelles : <a href="/blog/foodbag-opzeggen" style="color:#1B4332;font-weight:600">résilier Foodbag</a>.',
      },
      { type: 'h2', text: 'Résilier Marley Spoon' },
      {
        type: 'ul',
        items: [
          'Connectez-vous → page du compte → lien de résiliation en bas de la page',
          'Indiquez une raison ; vous recevez une confirmation par e-mail (conservez-la)',
          'Délai : jusqu’à 6 jours avant la livraison — plus strict que la plupart des autres',
          'Sauter une box est possible jusqu’à 4 semaines à l’avance',
        ],
      },
      {
        type: 'p',
        html: true,
        text: 'Tous les détails : <a href="/blog/marley-spoon-opzeggen" style="color:#1B4332;font-weight:600">résilier Marley Spoon</a>.',
      },
      { type: 'h2', text: 'Résilier Factor' },
      {
        type: 'ul',
        items: [
          'Connectez-vous → paramètres de l’abonnement',
          'Sous le statut : désactivez l’abonnement, confirmez l’annulation, indiquez une raison et validez',
          'Délai : indiqué par date de livraison dans votre compte ; ensuite, même le service client ne peut plus annuler',
          'La première box ne s’annule que via le service client',
        ],
      },
      {
        type: 'p',
        html: true,
        text: 'Aussi via l’application, et comment sauter une semaine : <a href="/blog/factor-opzeggen" style="color:#1B4332;font-weight:600">résilier Factor</a>.',
      },
      { type: 'h2', text: 'Résilier Ekomenu' },
      {
        type: 'ul',
        items: [
          'Connectez-vous sur ekomenu.be → « Mon compte » → « Abonnement »',
          'Choisissez « Mettre fin à l’abonnement »',
          'Délai : 4 jours ouvrables avant la livraison suivante',
        ],
      },
      { type: 'h2', text: 'Mettre en pause plutôt que résilier' },
      {
        type: 'p',
        text: "En vacances ou simplement besoin d'une pause ? HelloFresh, Foodbag, Marley Spoon et Factor permettent de sauter une livraison sans mettre fin à l'abonnement. Votre compte reste actif et vous n'avez pas à vous réinscrire.",
      },
      { type: 'h2', text: 'Et si vous êtes en retard ?' },
      {
        type: 'p',
        text: "Contactez immédiatement le service client. Ne comptez pas sur l'annulation de la box de la semaine : après le délai, les ingrédients sont commandés, et Factor précise par exemple que même le service client ne peut plus annuler. Vérifiez surtout que l'abonnement s'arrête à partir de la semaine suivante.",
      },
      { type: 'h2', text: 'Sans abonnement, sans résiliation' },
      {
        type: 'p',
        text: "Foodprepper, Foodmaker et Foodbag permettent de commander sans abonnement : rien à résilier, vous commandez simplement quand cela vous arrange. Attention, Foodprepper ne livre qu'en Flandre et à Bruxelles.",
      },
    ],
    faq: [
      {
        q: 'Quel délai faut-il respecter pour résilier ?',
        a: "Cela dépend du fournisseur et de votre jour de livraison. Chez HelloFresh, le délai tombe entre 2 et 5 jours avant la livraison selon le jour choisi. Marley Spoon est le plus strict : jusqu'à 6 jours avant. Factor et Foodbag affichent le délai exact dans votre compte.",
      },
      {
        q: 'Puis-je éviter complètement l’abonnement ?',
        a: "Oui. Foodbag, Foodmaker et Foodprepper permettent de commander ponctuellement, sans engagement ni préavis. Foodbag et Foodmaker livrent dans tout le pays ; Foodprepper uniquement en Flandre et à Bruxelles.",
      },
    ],
  },

  'vegetarisch-koken-maaltijdbox': {
    titel: 'Cuisiner végétarien avec un box repas : notre test',
    metaTitle: 'Box repas végétarien en Belgique 2026 — testé et comparé',
    metaDescription:
      "Quel box repas est le plus solide pour les végétariens ? HelloFresh, Ekomenu et Foodbag testés sur le choix, le goût et la livraison.",
    excerpt:
      "Nous avons testé trois box belges sur leur offre végétarienne : quelle est l'ampleur du choix, quel goût, et — question décisive au sud du pays — lesquels livrent en Wallonie ?",
    faqKop: 'Questions fréquentes sur le végétarien',
    content: [
      {
        type: 'p',
        text: "« Nous avons aussi des options végétariennes » peut signifier beaucoup de choses : de deux recettes par semaine à un abonnement entièrement végétal. Nous avons testé trois box belges sur ce point précis — et sur un critère que les comparatifs néerlandophones négligent : qui livre réellement en Wallonie.",
      },
      { type: 'h2', text: 'HelloFresh : large choix, y compris pour les flexitariens' },
      {
        type: 'p',
        text: "HelloFresh propose chaque semaine 8 à 12 recettes végétariennes dans un menu de plus de 50 recettes. Un filtre « Veggie » permet de les isoler en un clic. L'offre va des pâtes rapides aux currys plus élaborés. Avantage décisif pour un lecteur francophone : HelloFresh livre dans les trois régions.",
      },
      { type: 'h2', text: 'Ekomenu : végétarien et biologique — mais pas partout' },
      {
        type: 'p',
        text: "Ekomenu propose un abonnement dont toutes les recettes sont végétales, avec des ingrédients intégralement certifiés biologiques. C'est le meilleur produit du comparatif pour qui mange végétal. Réserve importante : la livraison s'arrête à la Flandre et à Bruxelles. En Wallonie, il n'est pas disponible.",
      },
      { type: 'h2', text: 'Foodbag : classiques belges, aussi en version veggie' },
      {
        type: 'p',
        text: "Foodbag répartit ses recettes végétariennes sur ses cinq styles de cuisine. L'offre est plus restreinte que chez HelloFresh, mais la qualité des ingrédients belges se remarque. Et Foodbag livre dans tout le pays, ce qui en fait l'alternative la plus proche d'Ekomenu au sud du sillon.",
      },
      { type: 'h2', text: 'Notre conclusion' },
      {
        type: 'p',
        text: "Pour manger végétal, c'est chez Ekomenu que vous trouverez le plus de plats végétariens et végans (avec un filtre, et 100 % bio) — à condition d'habiter en Flandre ou à Bruxelles. Si vous voulez rester flexible (parfois viande, parfois non), HelloFresh l'emporte grâce à l'ampleur du choix et à sa couverture nationale. En Wallonie et pour du végétal de qualité, Foodbag est l'option la plus solide.",
      },
    ],
    faq: [
      {
        q: 'Existe-t-il un box entièrement végétal livré en Wallonie ?',
        a: "Non. Aucun box de notre comparatif n'est entièrement végétal, et Ekomenu, qui offre le plus de plats végans, ne livre qu'en Flandre et à Bruxelles. En Wallonie, il faut composer avec les recettes végétariennes de HelloFresh ou la ligne veggie de Foodbag.",
      },
      {
        q: 'Combien de recettes végétariennes par semaine chez HelloFresh ?',
        a: "Entre 8 et 12 par semaine, dans un catalogue de plus de 80 recettes. Un filtre dédié permet de les afficher directement.",
      },
    ],
  },

  'maaltijdbox-starten-beginners': {
    titel: 'Débuter avec un box repas : ce qu’il faut savoir avant de commander',
    metaTitle: 'Débuter avec un box repas en Belgique 2026 — guide pour commencer',
    metaDescription:
      "Premier box repas ? Comment choisir, ce que cela coûte réellement, quels délais respecter et quels fournisseurs livrent chez vous.",
    excerpt:
      "Commander un premier box repas soulève toujours les mêmes questions : combien de repas, quel prix réel, et surtout — livre-t-il chez moi ? Voici ce qu'il faut vérifier avant de commencer.",
    faqKop: 'Questions fréquentes pour débuter',
    content: [
      {
        type: 'p',
        text: "Un premier box repas soulève toujours les mêmes questions : combien de repas commander, ce que cela coûte réellement une fois la réduction passée, et — la plus importante en Belgique francophone — si le fournisseur livre bien chez vous.",
      },
      { type: 'h2', text: 'Vérifiez d’abord la zone de livraison' },
      {
        type: 'p',
        text: "C'est l'étape que la plupart des guides oublient. Sur les huit fournisseurs actifs en Belgique, trois ne livrent qu'en Flandre et à Bruxelles : Marley Spoon, Foodprepper et Ekomenu. HelloFresh, Foodbag, Factor et Foodmaker couvrent tout le pays ; Crowd Cooks dessert les grandes villes wallonnes. Encodez votre code postal avant de comparer quoi que ce soit.",
      },
      { type: 'h2', text: 'Combien de repas commander la première semaine ?' },
      {
        type: 'p',
        text: "Trois repas par semaine pour deux personnes est le point de départ le plus courant. Cela couvre les soirs chargés sans remplir votre frigo, et vous laisse de la marge pour improviser le week-end. Vous pourrez toujours augmenter ensuite.",
      },
      { type: 'h2', text: 'Le prix réel, pas le prix affiché' },
      {
        type: 'p',
        text: "Le prix par portion ne dit pas tout. Comptez le total par semaine, frais de livraison inclus, et rappelez-vous que la réduction de bienvenue ne vaut que pour les premières box.",
      },
      {
        type: 'ul',
        items: [
          'Prix par semaine = portions × prix par portion + frais de livraison',
          'Factor facture 5,99 € par livraison, Marley Spoon 6,99 €, Crowd Cooks 4,90 €, HelloFresh 5,99 € à partir de la deuxième box',
          'Foodbag, Foodmaker, Ekomenu et Foodprepper livrent gratuitement',
          'La réduction de bienvenue couvre 3 à 5 box selon le fournisseur',
        ],
      },
      { type: 'h2', text: 'Notez le délai de résiliation' },
      {
        type: 'p',
        text: "C'est l'erreur la plus fréquente chez les débutants. HelloFresh et Foodbag demandent 5 jours avant la livraison, Marley Spoon 6, Ekomenu 4 jours ouvrables. Mettez un rappel dès votre première commande, surtout si vous voulez vous arrêter après la période de réduction.",
      },
      { type: 'h2', text: 'Ou commencez sans abonnement' },
      {
        type: 'p',
        text: "Si l'idée d'un abonnement vous freine, Foodbag et Foodmaker permettent de commander ponctuellement et livrent dans tout le pays. Vous testez ainsi sans aucun engagement ni délai à surveiller.",
      },
    ],
    faq: [
      {
        q: 'Combien de repas commander pour commencer ?',
        a: "Trois repas par semaine pour deux personnes est le format le plus courant pour débuter. Vous couvrez les soirs chargés sans surcharger votre frigo.",
      },
      {
        q: 'Puis-je essayer sans abonnement ?',
        a: "Oui. Foodbag et Foodmaker permettent une commande ponctuelle et livrent partout en Belgique. Foodprepper aussi, mais uniquement en Flandre et à Bruxelles.",
      },
      {
        q: 'Quel fournisseur livre en Wallonie ?',
        a: "HelloFresh, Foodbag, Factor et Foodmaker livrent dans tout le pays. Crowd Cooks couvre les grandes villes wallonnes. Marley Spoon, Foodprepper et Ekomenu ne livrent pas au sud du pays.",
      },
    ],
  },

  'factor-review-belgie': {
    titel: 'Factor : notre avis sur les plats prêts à réchauffer en Belgique',
    metaTitle: 'Factor avis Belgique 2026 — plats prêts testés honnêtement',
    metaDescription:
      "Notre avis sur Factor : plats de chef prêts à réchauffer, livrés dans toute la Belgique. Prix, goût, styles diététiques et pour qui cela vaut la peine.",
    excerpt:
      "Factor livre des plats de chef prêts à réchauffer en deux à trois minutes — aucune cuisson. Nous avons testé le prix, le goût, les cinq styles diététiques et la couverture de livraison.",
    faqKop: 'Questions fréquentes sur Factor',
    content: [
      {
        type: 'p',
        text: "Factor n'est pas un box repas classique où vous cuisinez, mais un service de plats préparés du groupe HelloFresh. Les plats arrivent frais et se réchauffent en deux à trois minutes au micro-ondes ou au four. Pour un lecteur francophone, un point compte particulièrement : Factor livre dans toute la Belgique, Wallonie comprise — ce qui n'est pas le cas de plusieurs concurrents du segment rapide.",
      },
      { type: 'h2', text: 'Qu’est-ce que Factor exactement ?' },
      {
        type: 'p',
        text: "Un service de plats cuisinés, livrés froids et prêts à réchauffer. Aucune découpe, aucune cuisson, aucune vaisselle. L'offre tourne autour de 18 plats par semaine, répartis en cinq styles diététiques.",
      },
      { type: 'h2', text: 'Comment commander ?' },
      {
        type: 'p',
        text: "Vous composez votre semaine sur factormeals.be, choisissez vos plats et votre jour de livraison. L'abonnement est flexible : modification, pause ou résiliation chaque semaine. Les frais de livraison s'élèvent à 5,99 € par livraison — à intégrer dans votre calcul, car ils s'ajoutent quel que soit le nombre de plats.",
      },
      { type: 'h2', text: 'Goût et qualité' },
      {
        type: 'p',
        text: "Pour un plat qu'on se contente de réchauffer, le goût est étonnamment correct. Dans notre évaluation, Factor obtient 7,8/10. Les utilisateurs apprécient surtout les cinq styles diététiques : High-Protein pour les sportifs, Calorie-Conscious pour qui surveille son apport.",
      },
      { type: 'h2', text: 'Combien coûte Factor réellement ?' },
      {
        type: 'p',
        text: "Le prix d'entrée est de 4,99 € la portion, l'un des plus bas du marché. Mais comptez les 5,99 € de livraison par commande : ils s'ajoutent au prix par portion. Pour deux personnes et trois repas par semaine, vous arrivez à 35,93 € par semaine.",
      },
      { type: 'h2', text: 'À qui Factor convient-il ?' },
      {
        type: 'p',
        text: "Factor est à son meilleur pour les professionnels pressés, les sportifs et toute personne qui veut manger équilibré sans temps de cuisson. Si vous rentrez et voulez manger tout de suite, sans courses ni vaisselle, c'est fait pour vous.",
      },
      { type: 'h2', text: 'Factor face à un box à cuisiner' },
      {
        type: 'p',
        text: "La grande différence avec HelloFresh ou Foodbag est que vous ne cuisinez pas. Cela fait gagner du temps, mais vous perdez le plaisir de préparer et une partie de la fraîcheur. Si vous cherchez du prêt-à-réchauffer belge avec de grosses portions, regardez Crowd Cooks ou Foodmaker.",
      },
      { type: 'h2', text: 'Notre verdict' },
      {
        type: 'p',
        text: "Factor est un choix solide dans le segment du prêt-à-réchauffer : beaucoup de choix, des styles diététiques lisibles et une livraison dans toute la Belgique. Les frais de livraison et l'absence d'expérience culinaire sont les principaux bémols. Pour qui veut manger équilibré sans y consacrer de temps, cela reste l'une des options les plus accessibles au sud du pays.",
      },
    ],
    faq: [
      {
        q: 'Factor livre-t-il en Wallonie ?',
        a: "Oui, Factor livre dans toute la Belgique, Wallonie comprise. C'est l'un des rares services de plats prêts à couvrir l'ensemble du territoire.",
      },
      {
        q: 'Combien coûte Factor par semaine ?',
        a: "À partir de 4,99 € la portion, plus 5,99 € de livraison par commande. Pour deux personnes et trois repas, comptez 35,93 € par semaine au tarif standard.",
      },
    ],
  },

  'kant-en-klare-maaltijden-zonder-koken-belgie': {
    titel: 'Plats préparés sans cuisiner en Belgique : comment ça marche et combien ça coûte',
    metaTitle: 'Plats préparés livrés en Belgique (2026) — guide et prix',
    metaDescription:
      "Des repas sans cuisiner, livrés à domicile : comment ça fonctionne, ce que ça coûte et quels fournisseurs existent en Belgique. Factor, Crowd Cooks et Foodmaker comparés.",
    excerpt:
      "Pas le temps ni l'envie de cuisiner ? Les services de plats préparés livrent des repas frais qu'il suffit de réchauffer. Fonctionnement, prix et fournisseurs disponibles en Belgique.",
    faqKop: 'Questions fréquentes sur les plats préparés',
    content: [
      {
        type: 'p',
        text: "Un box repas où vous cuisinez ne convient pas à tout le monde. Si vous rentrez et voulez manger tout de suite — sans découper, cuire ni faire la vaisselle — un service de plats préparés répond mieux au besoin. Bonne nouvelle pour la Belgique francophone : c'est le segment où la couverture de livraison est la plus large.",
      },
      { type: 'h2', text: 'Qu’est-ce qu’un service de plats préparés ?' },
      {
        type: 'p',
        text: "Contrairement à un box à cuisiner (HelloFresh, Foodbag), vous ne recevez pas des ingrédients et une recette mais un plat entièrement préparé, emballé au frais et conservable plusieurs jours. Le réchauffage prend deux à quatre minutes.",
      },
      { type: 'h2', text: 'Quels fournisseurs en Belgique ?' },
      {
        type: 'p',
        text: 'Trois services se distinguent, chacun avec son accent :',
      },
      {
        type: 'ul',
        items: [
          'Factor : le plus grand choix et cinq styles diététiques, livraison dans tout le pays, + 5,99 € par livraison',
          'Crowd Cooks : plats belges, portions de plus de 450 g, livraison à Bruxelles, Liège, Charleroi, Namur et en Brabant wallon, + 4,90 €',
          'Foodmaker : qualité artisanale anversoise avec Jeroen Meus, livraison gratuite nationale, minimum de commande 39,90 €',
        ],
      },
      { type: 'h2', text: 'Combien ça coûte ?' },
      {
        type: 'p',
        text: "Le prix par portion se situe dans la gamme premium propre au prêt-à-réchauffer. Factor démarre le plus bas à 4,99 € la portion mais facture 5,99 € de livraison. Crowd Cooks est plus cher par portion avec des frais de livraison plus faibles. Foodmaker livre gratuitement mais impose un minimum de 39,90 €.",
      },
      { type: 'h2', text: 'À qui cela convient-il ?' },
      {
        type: 'p',
        text: "Le prêt-à-réchauffer se justifie pour les professionnels pressés, les couples à deux revenus, les personnes seules et toute personne qui manque de temps mais veut manger chaud et varié. C'est une voie intermédiaire entre cuisiner soi-même et commander à emporter — plus frais que le second, plus rapide que le premier.",
      },
      { type: 'h2', text: 'Lequel choisir ?' },
      {
        type: 'p',
        text: "Vous cherchez le plus grand choix et des styles diététiques marqués (high-protein, calories contrôlées) ? Factor est le plus solide, et il livre partout. Vous voulez du belge avec de grosses portions ? Crowd Cooks, à condition que votre code postal soit couvert. Vous ne voulez aucun abonnement et une livraison gratuite ? Foodmaker.",
      },
    ],
    faq: [
      {
        q: 'Quels services de plats préparés livrent en Wallonie ?',
        a: "Factor et Foodmaker livrent dans toute la Belgique. Crowd Cooks couvre Bruxelles, le Brabant wallon, Liège, Charleroi et Namur, mais pas l'ensemble du territoire — vérifiez votre code postal.",
      },
      {
        q: 'Faut-il un abonnement ?',
        a: "Factor et Crowd Cooks fonctionnent avec un abonnement flexible, modifiable ou résiliable chaque semaine. Foodmaker n'impose aucun abonnement.",
      },
    ],
  },

  'gezond-eten-zonder-tijd-belgie': {
    titel: 'Manger équilibré sans temps : repas high-protein et contrôlés en calories livrés',
    metaTitle: 'Manger équilibré sans temps (2026) — repas high-protein livrés en Belgique',
    metaDescription:
      "Manger équilibré avec un agenda chargé ? Des repas prêts high-protein et contrôlés en calories, livrés à domicile. Comment ça marche et à quoi faire attention.",
    excerpt:
      "Manger équilibré échoue le plus souvent par manque de temps. Des repas prêts aux valeurs nutritionnelles fixes suppriment la planification — voici comment les intégrer sans se tromper.",
    faqKop: 'Questions fréquentes',
    content: [
      {
        type: 'p',
        text: "Vouloir manger équilibré et en avoir le temps sont deux choses différentes. Après une longue journée, la discipline s'effondre et on commande. Des repas prêts aux valeurs nutritionnelles fixes suppriment cette étape — à condition de savoir ce que vous achetez.",
      },
      { type: 'h2', text: 'Pourquoi le manque de temps sabote les bonnes intentions' },
      {
        type: 'p',
        text: "Cuisiner équilibré demande de la planification : courses, recettes, temps de préparation et vaisselle. Avec un agenda chargé, les soirs difficiles finissent en solutions rapides et moins équilibrées. Un repas déjà prêt et dont la composition est connue supprime le point de rupture.",
      },
      { type: 'h2', text: 'Qu’est-ce qui rend un repas « équilibré » ?' },
      {
        type: 'p',
        text: "Chez les services de plats préparés, les valeurs nutritionnelles sont indiquées par plat, ce qui permet de choisir en fonction de votre objectif plutôt qu'à l'estime.",
      },
      {
        type: 'ul',
        items: [
          'Apport protéique suffisant, surtout si vous faites du sport',
          'Densité calorique connue plutôt qu’estimée',
          'Portions de légumes réelles, pas symboliques',
          'Composition constante d’une semaine à l’autre',
        ],
      },
      { type: 'h2', text: 'Options high-protein et contrôlées en calories' },
      {
        type: 'p',
        text: "Factor propose cinq styles diététiques, dont High-Protein (apport protéique renforcé, prisé des sportifs) et Calorie-Conscious (apport calorique maîtrisé). Vous choisissez chaque semaine le style qui correspond à votre objectif, sans changer de fournisseur. Factor livre dans toute la Belgique, Wallonie comprise.",
      },
      { type: 'h2', text: 'Intégrer cela dans une semaine chargée' },
      {
        type: 'ul',
        items: [
          'Commencez par les trois soirs les plus chargés plutôt que toute la semaine',
          'Choisissez un jour de livraison fixe pour installer une routine',
          'Combinez avec des repas simples faits maison les soirs plus calmes',
          'Vérifiez votre code postal avant de comparer les prix',
        ],
      },
      { type: 'h2', text: 'Les réserves honnêtes' },
      {
        type: 'p',
        text: "Le prêt-à-réchauffer n'est ni gratuit ni parfait. Comptez les frais de livraison (5,99 € par livraison chez Factor), sachez que vous perdez l'expérience de cuisiner, et que l'emballage est plus important que si vous cuisiniez vous-même.",
      },
      { type: 'h2', text: 'Conclusion' },
      {
        type: 'p',
        text: "Manger équilibré avec un agenda chargé devient nettement plus réaliste avec des repas dont la valeur nutritionnelle est connue à l'avance. Factor est un choix solide grâce à ses styles high-protein et contrôlés en calories, et parce qu'il livre partout en Belgique — y compris là où plusieurs concurrents s'arrêtent.",
      },
    ],
    faq: [
      {
        q: 'Les repas high-protein sont-ils livrés en Wallonie ?',
        a: "Oui. Factor, qui propose les styles High-Protein et Calorie-Conscious, livre dans toute la Belgique, Wallonie comprise.",
      },
      {
        q: 'Faut-il commander toute la semaine ?',
        a: "Non. Commencez par les trois soirs les plus chargés. L'abonnement Factor se module chaque semaine.",
      },
    ],
  },
  'gamingavond-zonder-koken-gta-6': {
    titel: 'Soirée gaming sans cuisiner : que manger pour la sortie de GTA 6 ?',
    metaTitle: 'Manger en jouant : repas sans cuisiner pour GTA 6 (2026)',
    metaDescription: "Longue session de jeu ou soirée de lancement de GTA 6 ? Plats préparés et box repas rapides en Belgique comparés, avec la zone de livraison.",
    excerpt: "GTA 6 sort le 19 novembre 2026. Pour ne pas interrompre la partie, les plats préparés ou un box à cuisiner rapide sont la solution. Voici les options en Belgique, Wallonie comprise.",
    content: [
      { type: 'p', text: "GTA 6 sort le 19 novembre 2026. Pour beaucoup de joueurs, c'est une longue soirée (ou nuit) devant l'écran, seul ou entre amis. Cuisiner n'y a pas vraiment sa place, et commander une pizza chaque soir revient vite cher. Un box repas est un bon compromis : vous mangez chaud et varié sans lâcher la manette trop longtemps." },
      { type: 'p', text: "Il existe deux formules. Les plats préparés arrivent entièrement cuisinés : il suffit de les réchauffer. Le box à cuisiner contient les ingrédients et la recette. Pour une soirée gaming, le plat préparé est le plus simple, mais un box à cuisiner rapide coûte moins cher par portion." },
      { type: 'h2', text: 'Plats préparés : réchauffer et reprendre la partie' },
      { type: 'p', html: true, text: 'Si vous ne voulez vraiment pas cuisiner, trois services existent en Belgique. <a href="/fr/fournisseur/factor" style="color:#1B4332;font-weight:600">Factor</a> affiche le prix par portion le plus bas et livre dans tout le pays. <a href="/fr/fournisseur/foodmaker" style="color:#1B4332;font-weight:600">Foodmaker</a> fonctionne sans abonnement et livre aussi partout en Belgique. <a href="/fr/fournisseur/crowd-cooks" style="color:#1B4332;font-weight:600">Crowd Cooks</a> mise sur de grandes portions, mais ne livre pas partout : vérifiez votre code postal.' },
      {
        type: 'tabel',
        kop: 'Plats préparés comparés',
        slugs: ['factor', 'foodmaker', 'crowd-cooks'],
        portiesPerWeek: 6,
        kolommen: [
          { kop: '€/portion', soort: 'portie' },
          { kop: 'Livraison', soort: 'bezorging' },
          { kop: 'Offre de bienvenue', soort: 'korting' },
        ],
        voetnoot: "Prix et offres issus de notre comparatif actuel. Vérifiez les conditions chez le fournisseur.",
      },
      { type: 'cta', tekst: 'Voir Factor', slug: 'factor' },
      { type: 'h2', text: 'Cuisiner vite : prêt pour la prochaine mission' },
      { type: 'p', html: true, text: 'Si un quart d\'heure en cuisine ne vous dérange pas, un box à cuisiner revient moins cher. En Wallonie, <a href="/fr/fournisseur/hellofresh" style="color:#1B4332;font-weight:600">HelloFresh</a> est l\'option la plus pratique : plus de 80 recettes par semaine, dont vous choisissez les plus rapides. <a href="/fr/fournisseur/foodprepper" style="color:#1B4332;font-weight:600">Foodprepper</a> est prêt en environ 15 minutes, mais ne livre qu\'en Flandre et à Bruxelles.' },
      {
        type: 'tabel',
        kop: 'Box à cuisiner rapides comparés',
        slugs: ['hellofresh', 'foodprepper'],
        portiesPerWeek: 6,
        kolommen: [
          { kop: '€/portion', soort: 'portie' },
          { kop: 'Livraison', soort: 'bezorging' },
          { kop: 'Offre de bienvenue', soort: 'korting' },
        ],
        voetnoot: "Foodprepper ne livre pas en Wallonie. Prix et offres issus de notre comparatif actuel.",
      },
      { type: 'cta', tekst: 'Voir HelloFresh', slug: 'hellofresh' },
      { type: 'h2', text: 'Conseils pour votre soirée de lancement' },
      { type: 'ul', items: [
        "Commandez à temps. La plupart des fournisseurs ont une date limite de commande quelques jours avant la livraison : prévoyez une box livrée avant le 19 novembre.",
        "Choisissez une livraison juste avant la sortie. Les plats frais et préparés ne se conservent que quelques jours au réfrigérateur.",
        "Vous jouez entre amis ? Prévoyez des portions en plus. Dans un box à cuisiner, vous choisissez le nombre de personnes ; pour les plats préparés, commandez simplement plus de plats.",
        "Restez pratique : wraps, bowls et plats au four se mangent facilement entre deux missions.",
        "Pensez à mettre votre abonnement en pause après la sortie si vous voulez recuisiner vous-même. C'est possible chaque semaine chez la plupart des fournisseurs.",
      ]},
      { type: 'h2', text: 'Lequel choisir ?' },
      { type: 'p', text: "Pour ne pas cuisiner du tout, prenez des plats préparés : Factor pour le prix par portion le plus bas, Foodmaker si vous ne voulez pas d'abonnement, Crowd Cooks pour les grandes portions si votre commune est desservie. Si vous cuisinez vite, HelloFresh est le meilleur choix en Wallonie, et Foodprepper le plus rapide en Flandre et à Bruxelles." },
      { type: 'p', html: true, text: 'Consultez les offres de bienvenue actuelles sur notre <a href="/fr/codes-promo" style="color:#1B4332;font-weight:600">page des codes promo</a>. Nous recevons une petite commission via les liens de cette page, sans surcoût pour vous.' },
    ],
    faqKop: 'Questions fréquentes sur les repas pendant le gaming',
    faq: [
      { q: 'Quand sort GTA 6 ?', a: "GTA 6 sort le 19 novembre 2026. Pour avoir vos repas prêts le jour J, commandez quelques jours à l'avance : la plupart des fournisseurs ont une date limite de commande." },
      { q: 'Quel est le repas le plus simple pendant une session de jeu ?', a: "Un plat préparé à réchauffer. Chez Factor, Foodmaker et Crowd Cooks, votre repas est prêt en quelques minutes, sans cuisiner et presque sans vaisselle." },
      { q: 'Quelle est l\'option la moins chère sans cuisiner ?', a: "Factor a le prix par portion le plus bas parmi les plats préparés, mais comptez les frais de livraison. Si vous cuisinez en un quart d'heure, Foodprepper est moins cher par portion, mais il ne livre qu'en Flandre et à Bruxelles." },
      { q: 'Puis-je commander pour un groupe d\'amis ?', a: "Oui. Dans un box à cuisiner, vous choisissez le nombre de personnes ; pour les plats préparés, commandez des plats en plus. Prévoyez assez tôt pour que tout soit livré avant la soirée." },
    ],
  },

  'hellofresh-opzeggen': {
    titel: 'Résilier HelloFresh : arrêter ou mettre en pause votre abonnement (2026)',
    metaTitle: 'Résilier HelloFresh en Belgique (2026) — étapes et délai',
    metaDescription: "Résilier ou mettre en pause HelloFresh ? Les étapes dans votre compte, le délai exact selon votre jour de livraison et que faire si vous êtes en retard. Vérifié en octobre 2026.",
    excerpt: "Résilier HelloFresh prend une minute depuis votre compte. Le seul point d'attention est le délai, qui dépend de votre jour de livraison.",
    content: [
      { type: 'p', text: "Vous pouvez résilier HelloFresh à tout moment, sans préavis. Tout se fait depuis votre compte, sans appeler personne. Il faut seulement respecter le délai hebdomadaire : si vous résiliez trop tard, la box suivante part quand même. Voici les étapes et les délais tels que HelloFresh les publie (vérifié le 12 octobre 2026)." },
      { type: 'h2', text: 'Résilier HelloFresh en 3 étapes' },
      { type: 'ul', items: [
        'Connectez-vous sur hellofresh.be.',
        'Cliquez sur votre nom en haut à droite et ouvrez les paramètres de votre compte.',
        "Descendez jusqu'en bas de la page et choisissez la résiliation de l'abonnement. Vous recevez une confirmation par e-mail.",
      ]},
      { type: 'p', text: "Conservez cet e-mail de confirmation. Si une box vous est encore facturée par la suite, c'est votre preuve." },
      { type: 'h2', text: "Jusqu'à quand pouvez-vous résilier ?" },
      { type: 'p', text: 'Le délai dépend de votre jour de livraison et tombe chaque fois à 23h59 :' },
      { type: 'ul', items: [
        'Livraison le samedi, le dimanche ou le lundi matin : au plus tard le mercredi.',
        'Livraison le lundi après-midi, le mardi ou le mercredi matin : au plus tard le jeudi.',
        'Livraison le mercredi après-midi ou le jeudi : au plus tard le dimanche.',
      ]},
      { type: 'p', text: "Si vous résiliez après ce délai, la box de la semaine est encore livrée et facturée. L'abonnement s'arrête à partir de la semaine suivante." },
      { type: 'h2', text: 'Mettre en pause plutôt que résilier ?' },
      { type: 'p', text: "En vacances, ou simplement envie de ne pas cuisiner pendant quelques semaines ? Inutile de résilier : vous pouvez mettre votre box en pause jusqu'à 4 semaines à l'avance depuis votre compte. Le même délai s'applique. Avantage : votre compte reste actif et vous reprenez quand vous voulez." },
      { type: 'h2', text: 'Trop tard ? Voici quoi faire' },
      { type: 'p', text: "Contactez le service client au plus vite via le formulaire de contact sur hellofresh.be. Après le délai, les ingrédients sont déjà commandés : ne comptez pas sur l'annulation de cette box. Vérifiez en revanche que l'abonnement est bien arrêté pour les semaines suivantes." },
      { type: 'h2', text: 'Pourquoi on arrête, et quelle alternative' },
      { type: 'p', text: "Les raisons les plus fréquentes sont le prix une fois la réduction de bienvenue terminée et l'envie de ne plus cuisiner. Si vous ne voulez plus cuisiner, Factor livre des plats préparés dans toute la Belgique ; notez que Factor appartient au même groupe que HelloFresh. Si vous ne voulez plus d'abonnement, Foodbag et Foodmaker permettent de commander ponctuellement et livrent aussi en Wallonie." },
    ],
    faq: [
      { q: 'Puis-je résilier HelloFresh à tout moment ?', a: "Oui. Il n'y a pas de durée minimale. Il faut seulement résilier avant le délai hebdomadaire lié à votre jour de livraison, sinon la box de la semaine part quand même." },
      { q: 'Quel est le délai pour résilier HelloFresh ?', a: "Il dépend de votre jour de livraison. Pour une livraison le week-end ou le lundi matin, c'est le mercredi à 23h59. Du lundi après-midi au mercredi matin, c'est le jeudi à 23h59. Le mercredi après-midi ou le jeudi, c'est le dimanche à 23h59." },
      { q: 'Puis-je mettre HelloFresh en pause ?', a: "Oui, vous pouvez mettre votre box en pause jusqu'à 4 semaines à l'avance depuis votre compte. Le même délai s'applique." },
      { q: 'Dois-je appeler pour résilier ?', a: "Non. La résiliation se fait vous-même dans les paramètres de votre compte, et vous recevez une confirmation par e-mail." },
    ],
    faqKop: 'Questions fréquentes sur la résiliation de HelloFresh',
    relatedLinks: [
      { label: 'Résilier Factor, Foodbag et Marley Spoon : tous les fournisseurs', href: '/blog/hoe-maaltijdbox-opzeggen-belgie' },
      { label: 'Box repas sans abonnement en Belgique', href: '/blog/maaltijdbox-zonder-abonnement-belgie' },
      { label: 'Avis HelloFresh : prix, goût et livraison', href: '/aanbieder/hellofresh' },
    ],
    keywords: ['résilier hellofresh', 'hellofresh résiliation', 'arrêter hellofresh', 'hellofresh pause', 'annuler hellofresh'],
  },

  'factor-opzeggen': {
    titel: 'Résilier Factor : étapes, délai et annulation de la première box (2026)',
    metaTitle: 'Résilier Factor en Belgique (2026) — désactiver votre abonnement',
    metaDescription: "Résilier Factor sur ordinateur, mobile ou dans l'application, sauter une livraison et annuler votre première box. Les étapes décrites par Factor, vérifiées en octobre 2026.",
    excerpt: "Chez Factor, résilier revient à désactiver l'abonnement. C'est possible à tout moment, mais avant le délai hebdomadaire. La première box s'annule via le service client.",
    content: [
      { type: 'p', text: "Vous pouvez résilier Factor à tout moment depuis votre compte : dans les paramètres, on parle de désactiver l'abonnement. Attention au délai hebdomadaire : une fois passé, la commande est traitée et même le service client ne peut plus l'annuler. Les étapes ci-dessous viennent de la FAQ de Factor Belgique (vérifié le 12 octobre 2026)." },
      { type: 'h2', text: 'Résilier Factor sur ordinateur' },
      { type: 'ul', items: [
        "Connectez-vous et ouvrez les paramètres de l'abonnement.",
        "Descendez jusqu'au statut de l'abonnement et choisissez de le désactiver.",
        'Confirmez que vous voulez annuler, indiquez une raison et validez la désactivation.',
      ]},
      { type: 'h2', text: "Résilier Factor sur mobile ou dans l'application" },
      { type: 'p', text: "Dans un navigateur mobile, ouvrez le menu en haut à gauche, connectez-vous et allez dans les paramètres, puis suivez les mêmes étapes. Dans l'application Factor, allez dans votre profil, puis dans les données du compte et l'option de suppression du compte. Vous arrivez sur une page web où vous confirmez l'annulation de l'abonnement." },
      { type: 'h2', text: "Jusqu'à quand pouvez-vous résilier ?" },
      { type: 'p', text: "Le délai dépend de votre jour de livraison. Votre compte et l'application indiquent, pour chaque date de livraison, jusqu'à quand vous pouvez encore modifier. Cliquez sur la date pour voir l'heure exacte. Une fois le délai passé, les ingrédients sont commandés et le paiement est traité ; Factor précise que le service client ne peut plus rien annuler non plus." },
      { type: 'h2', text: 'Annuler votre première box Factor' },
      { type: 'p', text: "Vous venez de commander et ne voulez finalement pas de la première box ? Ce n'est pas possible depuis votre compte. Contactez le service client de Factor, avant le délai de cette première livraison." },
      { type: 'h2', text: 'Sauter une semaine plutôt que résilier' },
      { type: 'p', text: "Si vous voyagez souvent, sautez plutôt des livraisons. Connectez-vous, choisissez la date de livraison, ouvrez la modification de la commande et confirmez que vous sautez la livraison. Dans l'application, modifiez la livraison et choisissez de sauter la semaine. Jusqu'au délai, vous pouvez encore revenir en arrière." },
      { type: 'h2', text: 'Et si vous arrêtez Factor ?' },
      { type: 'p', text: "Si Factor vous revient trop cher, comparez avec Foodmaker : des plats préparés eux aussi, sans abonnement, et livrés dans tout le pays. Si vous voulez recommencer à cuisiner, HelloFresh livre en Wallonie et propose le plus grand choix de recettes." },
    ],
    faq: [
      { q: 'Comment résilier mon abonnement Factor ?', a: "Ouvrez les paramètres de l'abonnement, choisissez de le désactiver sous le statut, confirmez l'annulation, indiquez une raison et validez." },
      { q: 'Puis-je encore annuler ma première box Factor ?', a: "Oui, mais uniquement via le service client et avant le délai de cette livraison. Ce n'est pas possible depuis votre compte." },
      { q: 'Factor peut-il annuler une commande après le délai ?', a: "Non. Après le délai hebdomadaire, la commande est traitée. Selon Factor, le service client est lui aussi tenu par ce délai." },
      { q: 'Puis-je mettre Factor en pause ?', a: "Vous pouvez sauter une livraison chaque semaine depuis votre compte ou l'application. Pour une pause plus longue, sautez simplement plusieurs livraisons." },
    ],
    faqKop: 'Questions fréquentes sur la résiliation de Factor',
    relatedLinks: [
      { label: 'Résilier HelloFresh, Foodbag et Marley Spoon : tous les fournisseurs', href: '/blog/hoe-maaltijdbox-opzeggen-belgie' },
      { label: 'Avis Factor : des plats préparés testés', href: '/blog/factor-review-belgie' },
      { label: 'Plats préparés livrés à domicile comparés', href: '/blog/kant-en-klare-maaltijden-zonder-koken-belgie' },
    ],
    keywords: ['résilier factor', 'factor résiliation', 'annuler factor', 'désactiver factor', 'factor meals résilier'],
  },

  'marley-spoon-opzeggen': {
    titel: 'Résilier Marley Spoon : étapes et délai (2026)',
    metaTitle: 'Résilier Marley Spoon en Belgique (2026) — étapes et délai',
    metaDescription: "Résilier Marley Spoon ou sauter une box ? Les étapes dans votre compte, le délai de 6 jours et ce qui arrive à une box déjà en production. Vérifié en octobre 2026.",
    excerpt: "Marley Spoon a l'un des délais les plus longs parmi les grands box repas. La résiliation se fait depuis votre compte, idéalement au moins 6 jours avant la livraison.",
    content: [
      { type: 'p', text: "Vous pouvez résilier Marley Spoon à tout moment, entièrement en ligne. Le point d'attention est le délai, plus long que chez la plupart des autres box. Marley Spoon ne livre qu'en Flandre et à Bruxelles. Les étapes ci-dessous viennent du centre d'aide de Marley Spoon Belgique (vérifié le 12 octobre 2026)." },
      { type: 'h2', text: 'Résilier Marley Spoon en 4 étapes' },
      { type: 'ul', items: [
        'Connectez-vous et ouvrez la page de votre compte.',
        'En bas de la page, cliquez sur le lien de résiliation du compte.',
        'Indiquez brièvement pourquoi vous arrêtez.',
        'Vous recevez automatiquement une confirmation par e-mail. Conservez-la.',
      ]},
      { type: 'h2', text: 'Le délai : 6 jours avant la livraison' },
      { type: 'p', text: "Selon Marley Spoon, vous pouvez annuler vos commandes jusqu'à 6 jours avant la livraison. Modifier ou sauter une box reste possible jusqu'à 5 jours avant : c'est le moment où la box est facturée et où les ingrédients sont commandés. Dans votre compte, la liste des commandes en cours indique le temps qu'il vous reste pour chaque box." },
      { type: 'p', text: "Si une box est déjà en production au moment où vous résiliez, il se peut qu'elle vous soit encore livrée. Gardez donc une semaine de marge si vous ne voulez vraiment plus de box." },
      { type: 'h2', text: 'Sauter une box plutôt que résilier' },
      { type: 'p', text: "Pour une simple pause, vous pouvez sauter une box jusqu'à 4 semaines à l'avance. Ouvrez vos commandes, descendez jusqu'à la commande concernée, choisissez de la sauter sous le jour de livraison et confirmez. Si vous changez d'avis, vous pouvez réactiver la commande sur le site ou dans l'application." },
      { type: 'h2', text: 'Contacter Marley Spoon' },
      { type: 'p', text: "Si la résiliation ne fonctionne pas depuis votre compte, utilisez le formulaire de contact du centre d'aide de Marley Spoon, en précisant à partir de quelle date de livraison vous voulez arrêter." },
      { type: 'h2', text: 'Les alternatives' },
      { type: 'p', text: "Si vous ne voulez plus d'abonnement, Foodbag et Foodmaker permettent de commander ponctuellement. Si vous déménagez en Wallonie, HelloFresh y livre, contrairement à Marley Spoon." },
    ],
    faq: [
      { q: 'Comment résilier Marley Spoon ?', a: "Connectez-vous, ouvrez la page de votre compte et cliquez en bas sur le lien de résiliation. Indiquez une raison et vous recevez une confirmation par e-mail." },
      { q: 'Quel est le délai pour résilier Marley Spoon ?', a: "Selon Marley Spoon, vous pouvez annuler jusqu'à 6 jours avant la livraison. Modifier ou sauter une box reste possible jusqu'à 5 jours avant, quand la box est facturée." },
      { q: 'Vais-je encore recevoir une box après la résiliation ?', a: "C'est possible si la box était déjà en production. Résiliez donc bien à l'avance, idéalement une semaine avant la livraison suivante." },
      { q: 'Puis-je mettre Marley Spoon en pause ?', a: "Oui, vous pouvez sauter une box jusqu'à 4 semaines à l'avance depuis vos commandes." },
    ],
    faqKop: 'Questions fréquentes sur la résiliation de Marley Spoon',
    relatedLinks: [
      { label: 'Résilier HelloFresh, Factor et Foodbag : tous les fournisseurs', href: '/blog/hoe-maaltijdbox-opzeggen-belgie' },
      { label: 'Avis Marley Spoon : prix et goût', href: '/aanbieder/marley-spoon' },
      { label: 'Box repas sans abonnement en Belgique', href: '/blog/maaltijdbox-zonder-abonnement-belgie' },
    ],
    keywords: ['résilier marley spoon', 'marley spoon résiliation', 'arrêter marley spoon', 'marley spoon sauter une box', 'annuler marley spoon'],
  },

  'foodbag-opzeggen': {
    titel: 'Résilier ou mettre en pause Foodbag : mode d’emploi (2026)',
    metaTitle: 'Résilier Foodbag en Belgique (2026) — arrêter votre abonnement',
    metaDescription: "Arrêter votre abonnement Foodbag, sauter une box ou annuler une commande ponctuelle. Les étapes décrites par Foodbag, vérifiées en octobre 2026.",
    excerpt: "Un abonnement Foodbag s'arrête vous-même depuis vos données personnelles. Ensuite, vous pouvez toujours commander ponctuellement, sans abonnement.",
    content: [
      { type: 'p', text: "Résilier Foodbag est rapide et sans autre obligation. Vous arrêtez l'abonnement vous-même depuis votre compte. Ensuite, vous pouvez continuer à commander ponctuellement quand cela vous arrange, ce que la plupart des autres box ne permettent pas. Foodbag livre aussi en Wallonie. Les étapes ci-dessous viennent de la FAQ de Foodbag (vérifié le 12 octobre 2026)." },
      { type: 'h2', text: "Arrêter l'abonnement Foodbag" },
      { type: 'ul', items: [
        'Connectez-vous sur foodbag.be et ouvrez vos données personnelles.',
        'En bas de la page se trouvent vos abonnements actifs.',
        "Choisissez d'arrêter l'abonnement.",
      ]},
      { type: 'h2', text: "Jusqu'à quand pouvez-vous résilier ?" },
      { type: 'p', text: "Foodbag clôture les commandes par jour de livraison. Arrêtez votre abonnement avant la clôture des commandes pour votre jour de livraison : ensuite, la commande part chez les fournisseurs et ne peut plus être modifiée. Le moment exact est indiqué dans votre compte pour la prochaine livraison." },
      { type: 'h2', text: 'Sauter une box ou faire une pause' },
      { type: 'p', text: "Avec un abonnement, vous pouvez aussi sauter une seule commande ou faire une pause plus longue. Ouvrez le menu, choisissez la commande à sauter et indiquez que vous sautez cette box." },
      { type: 'h2', text: 'Annuler une commande ponctuelle' },
      { type: 'p', text: "Si vous avez commandé sans abonnement, l'annulation passe par le service client, et seulement avant le délai. Vous joignez Foodbag via foodlover@foodbag.be ou au 09 298 05 10." },
      { type: 'h2', text: 'Arrêter ou changer ?' },
      { type: 'p', text: "Comme Foodbag permet aussi de commander sans abonnement, vous n'êtes pas obligé de choisir entre tout ou rien. Si vous voulez essayer autre chose, HelloFresh propose plus de recettes et livre aussi dans tout le pays." },
    ],
    faq: [
      { q: 'Puis-je résilier mon abonnement Foodbag quand je veux ?', a: "Oui. Selon Foodbag, vous pouvez arrêter ou mettre en pause un abonnement quand vous voulez, sans autre obligation, depuis vos données personnelles." },
      { q: 'Puis-je encore commander chez Foodbag après avoir résilié ?', a: 'Oui. Après avoir arrêté votre abonnement, vous pouvez toujours commander ponctuellement, quand cela vous arrange.' },
      { q: 'Comment annuler une commande Foodbag ponctuelle ?', a: 'Via le service client (foodlover@foodbag.be ou 09 298 05 10), et uniquement avant le délai de commande.' },
    ],
    faqKop: 'Questions fréquentes sur la résiliation de Foodbag',
    relatedLinks: [
      { label: 'Résilier HelloFresh, Factor et Marley Spoon : tous les fournisseurs', href: '/blog/hoe-maaltijdbox-opzeggen-belgie' },
      { label: 'Avis Foodbag : prix, recettes et livraison', href: '/aanbieder/foodbag' },
      { label: 'Box repas sans abonnement en Belgique', href: '/blog/maaltijdbox-zonder-abonnement-belgie' },
    ],
    keywords: ['résilier foodbag', 'foodbag résiliation', 'arrêter foodbag', 'foodbag pause', 'annuler foodbag'],
  },
};
