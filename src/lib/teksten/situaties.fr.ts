import type { Situatie } from '../situaties';

/**
 * Franse teksten per situatiepagina.
 *
 * De scherpste verschillen met het Nederlands zitten bij vegan en bio:
 * Ekomenu is de enige volledig biologische en plantaardige box van het land
 * én levert niet in Wallonië. De Nederlandse pagina kan die aanbevelen; de
 * Franse moet uitleggen dat het antwoord afhangt van waar je woont.
 *
 * Alleen tekst staat hier. Iconen, sleutels en de blokstructuur die naar
 * aanbieders verwijst komen uit situaties.ts.
 */
export const situatiesFr: Record<string, Partial<Situatie>> = {
  koppel: {
    titel: 'Pour les couples',
    h1: 'Box repas pour deux en Belgique (2026) : lequel vous convient ?',
    intro:
      "Cuisiner à deux, c'est plus qu'un repas — c'est un moment ensemble. Mais quel box correspond vraiment à votre rythme, et lequel livre chez vous ?",
    uitleg:
      "Un box repas pour deux règle trois problèmes concrets : plus besoin de faire les courses chaque semaine, vous mangez plus varié sans y réfléchir, et vous ne jetez presque rien puisque tout arrive dosé. Attention toutefois à la zone de livraison : sur les six fournisseurs adaptés aux couples, deux ne desservent pas la Wallonie. Nous les avons comparés sur le prix, la variété, la flexibilité et la couverture.",
    seoTitel: 'Meilleur box repas pour 2 personnes en Belgique 2026',
    seoDesc:
      "Quel box repas pour un couple ? Prix, variété et livraison comparés pour 2 personnes, avec la zone de couverture de chaque fournisseur.",
    faqKop: 'Questions fréquentes pour les couples',
    faq: [
      {
        q: 'Combien de repas par semaine est réaliste pour un couple ?',
        a: "La plupart des couples commencent avec trois repas par semaine : cela couvre les soirs chargés et laisse de la place pour un restaurant ou une improvisation le week-end. Vous pouvez toujours ajuster ou sauter une semaine.",
      },
      {
        q: 'Quels box livrent en Wallonie pour un couple ?',
        a: "HelloFresh, Foodbag, Factor et Foodmaker livrent dans tout le pays. Crowd Cooks couvre les grandes villes wallonnes. Marley Spoon, Foodprepper et Ekomenu se limitent à la Flandre et à Bruxelles.",
      },
      {
        q: 'Quel est le moins cher pour deux personnes ?',
        a: "HelloFresh avec sa réduction de bienvenue est l'option la moins chère les premières semaines, et il livre partout. Si vous êtes à Bruxelles ou en Flandre, Foodprepper descend plus bas encore sur le prix par portion.",
      },
      {
        q: 'Peut-on mettre en pause ou résilier chaque semaine ?',
        a: "Oui. HelloFresh, Foodbag et Marley Spoon permettent de mettre en pause ou de résilier chaque semaine. Foodbag et Foodprepper n'imposent même aucun abonnement.",
      },
    ],
    nietGeschiktAls: [],
    blokken: [
      {
        type: 'infokaarten',
        kop: 'Ce qui compte pour un couple',
        items: [
          {
            icon: '📍',
            titel: 'La zone de livraison',
            tekst: "Vérifiez-la avant tout le reste. Marley Spoon et Foodprepper ne livrent pas en Wallonie ; HelloFresh, Foodbag, Factor et Foodmaker si.",
          },
          {
            icon: '💶',
            titel: 'Le prix pour deux',
            tekst: "Comptez six portions par semaine (2 personnes × 3 repas). Cela monte vite : de 33 € chez HelloFresh à 57 € chez Foodbag.",
          },
          {
            icon: '🍽️',
            titel: 'La variété',
            tekst: "À deux, on se lasse plus vite que seul. Choisissez un fournisseur avec 40+ recettes par semaine pour ne jamais répéter.",
          },
          {
            icon: '🔀',
            titel: 'La flexibilité',
            tekst: "Pouvez-vous sauter une semaine facilement ? HelloFresh, Foodbag et Marley Spoon permettent d'adapter jusqu'à 5 jours avant.",
          },
        ],
      },
      {
        type: 'topAanbieders',
        kop: 'Notre top 3 pour les couples',
        items: [
          {
            slug: 'hellofresh',
            badge: '⭐ Meilleur choix',
            badgeAchtergrond: '#E8F5EE',
            badgeTekst: '#1B4332',
            tagline: 'Livre partout · le plus grand choix de recettes',
            waarom:
              "Avec plus de 40 recettes par semaine, un couple ne mange presque jamais deux fois la même chose. HelloFresh est flexible — pause ou résiliation jusqu'à 5 jours avant la livraison — et surtout, il livre dans les trois régions. Pour un couple wallon, c'est le point de départ évident.",
            deal: "jusqu'à 60 € de réduction sur vos 3 premières box — appliqué automatiquement via notre lien",
          },
          {
            slug: 'foodbag',
            badge: '🇧🇪 Belge',
            badgeAchtergrond: '#DBEAFE',
            badgeTekst: '#1E40AF',
            tagline: 'Ingrédients belges · livre aussi en Wallonie',
            waarom:
              "Les couples qui veulent manger belge choisissent Foodbag. Les ingrédients viennent de fermes locales via une filière courte, ce qui se remarque à la fraîcheur. Cinq styles de cuisine, dont la ligne Sana de Sandra Bekkari, laissent de la marge si vos goûts divergent. Livraison gratuite dans tout le pays.",
            deal: '3 × 20 € de réduction — appliqué automatiquement via notre lien, aucun code à saisir',
          },
          {
            slug: 'foodmaker',
            badge: '👨‍🍳 Sans cuisiner',
            badgeAchtergrond: '#FEF3C7',
            badgeTekst: '#92400E',
            tagline: 'Plats belges prêts · livraison gratuite nationale',
            waarom:
              "Pour les couples qui n'ont pas envie de cuisiner tous les soirs. Foodmaker prépare ses plats à Anvers, avec une collaboration signée Jeroen Meus, et livre gratuitement dans tout le pays sans abonnement. Une trentaine de plats par semaine, dont une gamme entièrement végane.",
            deal: 'Aucun code permanent — consultez leur offre de bienvenue actuelle',
          },
        ],
      },
      {
        type: 'overigeAanbieders',
        kop: 'Les autres options pour un couple',
        items: [
          {
            slug: 'factor',
            omschrijving:
              "Plats de chef prêts à réchauffer, sans cuisson. Livre dans toute la Belgique. Pratique les soirs chargés, mais vous perdez le plaisir de cuisiner ensemble. Comptez 5,99 € de livraison.",
          },
          {
            slug: 'marley-spoon',
            omschrijving:
              "Les recettes les plus travaillées de notre comparatif et la meilleure note de goût — mais la livraison s'arrête à la Flandre et à Bruxelles. Si vous habitez en Wallonie, ce n'est pas une option.",
          },
          {
            slug: 'foodprepper',
            omschrijving:
              "L'option la plus rapide : un repas frais en 15 minutes, sans abonnement et au prix par portion le plus bas. Livraison limitée à la Flandre et à Bruxelles.",
          },
        ],
      },
      {
        type: 'tabel',
        kop: 'Comparatif : 6 fournisseurs pour un couple',
        slugs: ['hellofresh', 'foodbag', 'foodmaker', 'factor', 'marley-spoon', 'foodprepper'],
        portiesPerWeek: 6,
        kolommen: [
          {
            kop: 'Livre en Wallonie',
            soort: 'tekst',
            waarden: {
              hellofresh: 'Oui',
              foodbag: 'Oui',
              foodmaker: 'Oui',
              factor: 'Oui',
              'marley-spoon': 'Non',
              foodprepper: 'Non',
            },
          },
          { kop: '€/portion', soort: 'portie' },
          { kop: '€/semaine (2p, 3×)', soort: 'weekprijs' },
          { kop: 'Recettes/semaine', soort: 'recepten' },
          { kop: 'Réduction', soort: 'korting' },
        ],
        voetnoot:
          "Le prix par semaine inclut les frais de livraison lorsqu'ils s'appliquent (5,99 € chez Marley Spoon et Factor). Prix indicatifs — vérifiez les tarifs actuels sur le site du fournisseur.",
      },
      {
        type: 'scenarios',
        kop: 'Lequel choisir ?',
        items: [
          {
            scenario: 'Vous habitez en Wallonie',
            aanbeveling: 'HelloFresh ou Foodbag',
            slug: 'hellofresh',
            uitleg:
              "Ce sont les deux seuls box à cuisiner qui livrent au sud du pays. HelloFresh pour le choix et le prix, Foodbag si vous tenez aux ingrédients belges. Les deux livrent gratuitement.",
            achtergrond: '#E8F5EE',
            rand: '#BBF7D0',
          },
          {
            scenario: 'Vous voulez le meilleur rapport qualité-prix',
            aanbeveling: 'HelloFresh',
            slug: 'hellofresh',
            uitleg:
              "Avec la réduction de bienvenue (jusqu'à 60 € sur vos trois premières box), vous payez 5 à 6 € par personne et par soir les premières semaines. Après, HelloFresh reste parmi les box à cuisiner les moins chers de Belgique.",
            achtergrond: '#DBEAFE',
            rand: '#BFDBFE',
          },
          {
            scenario: 'Vous voulez vraiment prendre plaisir à cuisiner',
            aanbeveling: 'Marley Spoon ou Foodbag',
            slug: 'foodbag',
            uitleg:
              "Marley Spoon pour le défi culinaire (recettes de chef, 45 à 60 minutes) — à condition d'être en Flandre ou à Bruxelles. Foodbag si vous voulez aussi la qualité belge et une livraison partout.",
            achtergrond: '#F3E8FF',
            rand: '#DDD6FE',
          },
        ],
      },
      {
        type: 'slotCta',
        kop: 'Prêts à commencer ?',
        tekst:
          "HelloFresh est le box repas le plus choisi par les couples en Belgique, et l'un des rares à livrer dans les trois régions. Avec la réduction de bienvenue, c'est aussi la façon la moins chère de tester.",
        slug: 'hellofresh',
        knoptekst: "Activer jusqu'à 60 € de réduction →",
        subtekst: "Jusqu'à 60 € sur vos 3 premières box · automatique via le lien · résiliable à tout moment",
      },
    ],
  },

  vegan: {
    titel: 'Box repas végétal',
    h1: 'Meilleur box repas végétal en Belgique 2026 — et le problème wallon',
    intro:
      "L'alimentation végétale progresse en Belgique. Mais le seul box entièrement végétal du pays ne livre pas partout, et cela change la réponse selon l'endroit où vous habitez.",
    uitleg:
      "Il faut être direct : Ekomenu est le seul box 100 % végétal et biologique de Belgique, et il ne livre qu'en Flandre et à Bruxelles. Si vous habitez en Wallonie, aucun fournisseur entièrement végétal ne vous dessert aujourd'hui. Il reste les options végétariennes de HelloFresh et la ligne veggie de Foodbag, qui livrent tous deux dans tout le pays — mais ce ne sont pas des box végétaux. Nous expliquons ci-dessous ce que cela signifie concrètement.",
    seoTitel: 'Box repas végétal en Belgique 2026 — livraison en Wallonie ?',
    seoDesc:
      "Le seul box 100 % végétal de Belgique ne livre pas en Wallonie. Nos alternatives végétariennes qui couvrent tout le pays, comparées honnêtement.",
    faqKop: 'Questions fréquentes sur les box végétaux',
    faq: [
      {
        q: 'Existe-t-il un box 100 % végétal qui livre en Wallonie ?',
        a: "Non, pas aujourd'hui. Ekomenu est le seul fournisseur entièrement végétal et biologique de Belgique, et sa livraison s'arrête à la Flandre et à Bruxelles. En Wallonie, il faut composer avec les recettes végétariennes de HelloFresh ou la ligne veggie de Foodbag.",
      },
      {
        q: 'Quelle est la différence entre végétal et végétarien ?',
        a: "Un box végétal ne contient aucun produit animal : ni viande, ni poisson, ni œufs, ni produits laitiers. Un box végétarien exclut la viande et le poisson mais peut contenir œufs, fromage ou lait. HelloFresh, Foodbag et Marley Spoon proposent des recettes végétariennes ; aucun n'est un box végétal.",
      },
      {
        q: 'Un box végétal coûte-t-il plus cher ?',
        a: "Non, plutôt l'inverse. Ekomenu coûte moins par portion que HelloFresh ou Marley Spoon. Le tarif plus élevé de ces derniers s'explique par leur offre plus large, pas par la présence de viande.",
      },
    ],
    nietGeschiktAls: [],
  },

  gezin: {
    titel: 'Pour les familles',
    h1: 'Meilleur box repas pour les familles en Belgique (2026)',
    intro:
      "Quel box convient à une famille avec enfants ? Nous avons comparé les portions, le temps de préparation, les recettes adaptées aux enfants et — surtout — qui livre chez vous.",
    uitleg:
      "Comment servir des repas variés un mardi soir chargé, avec des enfants qui attendent et des devoirs à finir ? Un box repas répond à cela, à condition qu'il livre dans votre région. HelloFresh va jusqu'à six personnes et couvre tout le pays, Wallonie comprise. Foodbag propose la ligne Busy Day, prête en vingt minutes, et livre également partout. Foodprepper est plus rapide encore mais s'arrête à la Flandre et à Bruxelles.",
    seoTitel: 'Box repas pour famille en Belgique 2026 — rapide et adapté aux enfants',
    seoDesc:
      "Quel box repas pour une famille ? Portions, temps de préparation et zone de livraison comparés, avec les options adaptées aux enfants.",
    faqKop: 'Questions fréquentes pour les familles',
    faq: [
      {
        q: 'Quel box est le plus rapide pour une famille ?',
        a: "La ligne Busy Day de Foodbag propose des repas prêts en vingt minutes, avec peu de vaisselle, et livre dans tout le pays. Les recettes Quick & Easy de HelloFresh demandent 25 à 30 minutes. Les deux tiennent la route un soir de semaine.",
      },
      {
        q: 'Quel box propose les plus grandes portions ?',
        a: "Foodbag et HelloFresh proposent des box jusqu'à cinq personnes. HelloFresh est le seul à aller jusqu'à six, ce qui est utile pour les grandes familles ou quand quelqu'un s'ajoute régulièrement à table.",
      },
      {
        q: 'Et si un enfant est difficile ?',
        a: "HelloFresh dispose d'un filtre « Famille » permettant de sélectionner des recettes adaptées aux enfants. La ligne Originals de Foodbag contient beaucoup de classiques belges qui passent bien auprès des plus jeunes.",
      },
      {
        q: 'Et en cas d’allergie alimentaire ?',
        a: "HelloFresh propose les filtres par allergène les plus complets (gluten, lactose, fruits à coque). Foodbag en propose moins, mais les listes d'ingrédients sont détaillées par recette, ce qui permet de vérifier soi-même.",
      },
    ],
    nietGeschiktAls: [
      "Vous cuisinez seulement une ou deux fois par semaine — le coût par repas devient alors élevé.",
      "Vos enfants mangent très peu de choses différentes ; la variété devient un inconvénient plutôt qu'un atout.",
      "Vous habitez en Wallonie et visez un fournisseur qui n'y livre pas — vérifiez toujours votre code postal.",
    ],
  },

  vegetarisch: {
    titel: 'Végétarien',
    h1: 'Meilleur box repas végétarien en Belgique (2026)',
    intro:
      "Manger végétarien sans y consacrer votre soirée ? Nous avons comparé les fournisseurs sur leur offre végétarienne, leur prix et leur zone de livraison.",
    uitleg:
      "Presque tous les box proposent des recettes végétariennes, mais l'offre varie fortement. HelloFresh en propose chaque semaine dans un catalogue de plus de quarante recettes et livre dans tout le pays. Foodbag a une ligne veggie complète et couvre également la Wallonie. Ekomenu est entièrement végétal, mais s'arrête à la Flandre et à Bruxelles — ce qui l'exclut pour une partie de nos lecteurs.",
    seoTitel: 'Box repas végétarien en Belgique 2026 — comparé et testé',
    seoDesc:
      "Quel box repas végétarien choisir en Belgique ? Offre, prix et livraison comparés, y compris pour la Wallonie.",
    faqKop: 'Questions fréquentes sur les box végétariens',
    faq: [
      {
        q: 'Quel box végétarien livre en Wallonie ?',
        a: "HelloFresh et Foodbag livrent dans tout le pays et proposent tous deux des recettes végétariennes. Ekomenu, entièrement végétal, ne livre qu'en Flandre et à Bruxelles.",
      },
      {
        q: 'Combien de recettes végétariennes par semaine ?',
        a: "Chez HelloFresh, comptez plusieurs recettes végétariennes chaque semaine dans un catalogue de plus de quarante. Foodbag propose une ligne veggie dédiée. Ekomenu est intégralement végétal, donc toutes ses recettes le sont.",
      },
      {
        q: 'Un box végétarien est-il moins cher ?',
        a: "Pas nécessairement. Le prix par portion dépend surtout du fournisseur et non de la présence de viande. Ekomenu, entièrement végétal, est moins cher que plusieurs box classiques.",
      },
    ],
    nietGeschiktAls: [
      "Vous voulez du 100 % végétal et habitez en Wallonie — aucun fournisseur ne vous dessert aujourd'hui.",
      "Vous voulez chaque semaine une grande variété végétarienne ; l'offre reste plus limitée que le catalogue complet.",
    ],
  },

  budget: {
    titel: 'Petit budget',
    h1: 'Box repas pas cher en Belgique (2026) — le vrai prix par semaine',
    intro:
      "Le prix par portion est trompeur. Ce qui compte, c'est le total par semaine, frais de livraison compris — et le fait que le fournisseur livre bien chez vous.",
    uitleg:
      "Un box qui affiche le prix par portion le plus bas n'est pas forcément le moins cher : les frais de livraison changent le calcul, et certains fournisseurs imposent un minimum de commande. Nous comparons le coût réel par semaine pour deux personnes et trois repas. Attention : le fournisseur le moins cher au prix par portion, Foodprepper, ne livre pas en Wallonie.",
    seoTitel: 'Box repas pas cher en Belgique 2026 — prix réel par semaine',
    seoDesc:
      "Quel est le box repas le moins cher en Belgique ? Prix par semaine réel, frais de livraison inclus, et qui livre en Wallonie.",
    faqKop: 'Questions fréquentes sur le budget',
    faq: [
      {
        q: 'Quel est le box le moins cher qui livre en Wallonie ?',
        a: "HelloFresh, surtout avec la réduction de bienvenue sur les trois premières box, et avec une livraison gratuite. Factor a un prix par portion plus bas mais facture 5,99 € de livraison, ce qui rapproche les deux.",
      },
      {
        q: 'Faut-il compter les frais de livraison ?',
        a: "Oui, toujours. Factor et Marley Spoon facturent 5,99 € par livraison, Crowd Cooks 4,90 €. Sur une commande hebdomadaire, cela représente plus de 250 € par an. HelloFresh, Foodbag, Foodmaker et Foodprepper livrent gratuitement.",
      },
      {
        q: 'Un box repas est-il moins cher que les courses ?',
        a: "Par portion, vous payez généralement plus qu'au supermarché. Mais les quantités sont exactes, donc vous jetez très peu. Si vous gaspillez régulièrement ou commandez souvent à emporter, l'écart réel est plus faible qu'il n'y paraît.",
      },
    ],
    nietGeschiktAls: [
      "Vous cherchez uniquement le prix le plus bas, sans tenir compte du gaspillage ou du temps.",
      "Vous cuisinez déjà efficacement à partir de promotions et de restes.",
    ],
  },

  singles: {
    titel: 'Pour une personne',
    h1: 'Box repas pour une personne en Belgique (2026)',
    intro:
      "Cuisiner pour soi, c'est souvent trop d'ingrédients pour trop peu de repas. Quels fournisseurs proposent réellement des portions individuelles, et lesquels livrent chez vous ?",
    uitleg:
      "Peu de box sont conçus pour une seule personne. HelloFresh est le seul grand fournisseur à proposer une formule pour une personne, avec livraison gratuite dans tout le pays. Les plats prêts de Factor et Foodmaker conviennent bien aussi : vous commandez le nombre exact de repas, sans reste. Foodprepper permet également de commander à l'unité, mais uniquement en Flandre et à Bruxelles.",
    seoTitel: 'Box repas pour 1 personne en Belgique 2026 — sans gaspillage',
    seoDesc:
      "Quel box repas pour une personne seule ? Portions individuelles, prix et livraison comparés pour toute la Belgique.",
    faqKop: 'Questions fréquentes pour une personne',
    faq: [
      {
        q: 'Quel box propose des portions pour une personne ?',
        a: "HelloFresh est le seul grand box à cuisiner qui propose une formule pour une personne, avec livraison gratuite partout. Factor et Foodmaker livrent des plats individuels prêts à réchauffer, ce qui revient au même sans cuisiner.",
      },
      {
        q: 'Est-ce rentable pour une seule personne ?',
        a: "Le prix par portion est un peu plus élevé sur les petites formules, mais vous ne jetez rien. Pour qui cuisine seul et gaspille souvent des ingrédients frais, le coût réel est souvent comparable aux courses classiques.",
      },
      {
        q: 'Puis-je commander sans abonnement ?',
        a: "Oui. Foodbag et Foodmaker n'imposent aucun abonnement et livrent dans tout le pays. Foodprepper non plus, mais uniquement en Flandre et à Bruxelles.",
      },
    ],
    nietGeschiktAls: [
      "Vous mangez rarement chez vous ou avez un rythme très irrégulier.",
      "Vous cuisinez volontiers en grande quantité pour congeler ; un box perd alors son intérêt.",
    ],
  },

  bio: {
    titel: 'Bio',
    h1: 'Box repas bio en Belgique 2026 — et pourquoi la Wallonie est mal servie',
    intro:
      "Manger bio via un box repas est possible en Belgique, mais l'offre est étroite — et le seul fournisseur entièrement biologique ne livre pas partout.",
    uitleg:
      "Un seul fournisseur belge travaille exclusivement avec des ingrédients certifiés biologiques : Ekomenu. Son problème, pour une partie de nos lecteurs, est sa zone de livraison, limitée à la Flandre et à Bruxelles. En Wallonie, il n'existe aujourd'hui aucun box entièrement bio. Foodbag propose des ingrédients belges en filière courte sans être certifié bio, ce qui reste l'alternative la plus proche au sud du pays.",
    seoTitel: 'Box repas bio en Belgique 2026 — livraison en Wallonie ?',
    seoDesc:
      "Le seul box 100 % bio de Belgique ne livre pas en Wallonie. Quelles alternatives pour manger local et de saison au sud du pays ?",
    faqKop: 'Questions fréquentes sur le bio',
    faq: [
      {
        q: 'Existe-t-il un box bio qui livre en Wallonie ?',
        a: "Non. Ekomenu est le seul box entièrement biologique de Belgique et ne livre qu'en Flandre et à Bruxelles. En Wallonie, Foodbag est l'alternative la plus proche : ingrédients belges en filière courte, mais sans certification bio.",
      },
      {
        q: 'Les ingrédients Ekomenu sont-ils tous certifiés bio ?',
        a: "Oui, sans exception. C'est le seul fournisseur de notre comparatif dont l'intégralité des ingrédients est certifiée biologique.",
      },
      {
        q: 'Le bio revient-il plus cher ?',
        a: "Pas ici. Ekomenu coûte moins par portion que plusieurs box non bio, notamment HelloFresh et Marley Spoon. La contrainte est la zone de livraison, pas le prix.",
      },
    ],
    nietGeschiktAls: [
      "Vous habitez en Wallonie et voulez du 100 % certifié bio — aucun fournisseur ne vous dessert.",
      "Vous voulez un très large choix de recettes ; l'offre bio reste plus restreinte.",
    ],
  },
};
