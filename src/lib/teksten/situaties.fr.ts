import type { Situatie } from '../situaties';

/**
 * Franse teksten per situatiepagina.
 *
 * De scherpste verschillen met het Nederlands zitten bij vegan en bio:
 * Ekomenu is de enige volledig biologische box in onze vergelijking (niet
 * volledig plantaardig: er staat ook vis en vlees op het menu) én levert niet
 * in Wallonië. De Nederlandse pagina kan die aanbevelen; de
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
            tekst: "Comptez six portions par semaine (2 personnes × 3 repas). Cela monte vite : de 28,50 € chez Foodprepper à 50,60 € chez Foodbag, hors frais de livraison éventuels.",
          },
          {
            icon: '🍽️',
            titel: 'La variété',
            tekst: "À deux, on se lasse plus vite que seul. Choisissez un grand menu : HelloFresh et Marley Spoon proposent plus de 80 recettes par semaine, Foodbag une quarantaine.",
          },
          {
            icon: '🔀',
            titel: 'La flexibilité',
            tekst: "Pouvez-vous sauter une semaine facilement ? Chez HelloFresh, jusqu'à quelques jours avant la livraison ; chez Marley Spoon, au moins une semaine avant. Foodbag et Foodprepper se commandent sans abonnement.",
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
              "Avec plus de 80 recettes par semaine, un couple ne mange presque jamais deux fois la même chose. HelloFresh est flexible — pause ou résiliation jusqu'à quelques jours avant la livraison — et surtout, il livre dans les trois régions. Pour un couple wallon, c'est le point de départ évident.",
            deal: "jusqu'à 70 € de réduction sur vos 3 premières box — appliqué automatiquement via notre lien",
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
          "Le prix par semaine inclut les frais de livraison lorsqu'ils s'appliquent (5,99 € chez Factor et HelloFresh, 6,99 € chez Marley Spoon). Prix indicatifs — vérifiez les tarifs actuels sur le site du fournisseur.",
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
              "Ce sont les deux seuls box à cuisiner qui livrent au sud du pays. HelloFresh pour le choix et le prix, Foodbag si vous tenez aux ingrédients belges. Foodbag livre gratuitement ; chez HelloFresh, seule la première livraison est offerte.",
            achtergrond: '#E8F5EE',
            rand: '#BBF7D0',
          },
          {
            scenario: 'Vous voulez le meilleur rapport qualité-prix',
            aanbeveling: 'HelloFresh',
            slug: 'hellofresh',
            uitleg:
              "Avec la réduction de bienvenue (jusqu'à 70 € sur vos trois premières box), vous payez 5 à 6 € par personne et par soir les premières semaines. Après, HelloFresh reste parmi les box à cuisiner les moins chers de Belgique.",
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
        knoptekst: "Activer jusqu'à 70 € de réduction →",
        subtekst: "Jusqu'à 70 € sur vos 3 premières box · automatique via le lien · résiliable à tout moment",
      },
    ],
  },

  vegan: {
    titel: 'Box repas végétal',
    h1: 'Meilleur box repas végétal en Belgique 2026 — et le problème wallon',
    intro:
      "L'alimentation végétale progresse en Belgique. Mais aucun box de notre comparatif n'est 100 % végétal, et celui qui offre le plus de choix ne livre pas partout.",
    uitleg:
      "Il faut être direct : aucun box de notre comparatif n'est entièrement végétal. Ekomenu offre le plus de plats végans (avec un filtre), est 100 % bio, mais ne livre qu'en Flandre et à Bruxelles. Marley Spoon permet de choisir « végan » comme préférence, également en Flandre et à Bruxelles uniquement. Il reste les options végétariennes de HelloFresh et la ligne veggie de Foodbag, qui livrent tous deux dans tout le pays — mais ce ne sont pas des box végétaux. Nous expliquons ci-dessous ce que cela signifie concrètement.",
    seoTitel: 'Box repas végétal en Belgique 2026 — livraison en Wallonie ?',
    seoDesc:
      "Aucun box de notre comparatif n'est 100 % végétal. Où trouver le plus de plats végans, et quelles options livrent en Wallonie ? Comparatif honnête.",
    faqKop: 'Questions fréquentes sur les box végétaux',
    faq: [
      {
        q: 'Existe-t-il un box 100 % végétal qui livre en Wallonie ?',
        a: "Non, pas parmi les box que nous comparons. Ekomenu, qui offre le plus de plats végans et est 100 % bio, ne livre qu'en Flandre et à Bruxelles. En Wallonie, il faut composer avec les recettes végétariennes de HelloFresh ou la ligne veggie de Foodbag.",
      },
      {
        q: 'Quelle est la différence entre végétal et végétarien ?',
        a: "Un box végétal ne contient aucun produit animal : ni viande, ni poisson, ni œufs, ni produits laitiers. Un box végétarien exclut la viande et le poisson mais peut contenir œufs, fromage ou lait. HelloFresh, Foodbag, Marley Spoon et Ekomenu proposent des recettes végétariennes ou véganes ; aucun n'est un box entièrement végétal.",
      },
      {
        q: 'Un box végétal coûte-t-il plus cher ?',
        a: "Non, plutôt l'inverse. Ekomenu coûte moins par portion que HelloFresh ou Marley Spoon. Le tarif plus élevé de ces derniers s'explique par leur offre plus large, pas par la présence de viande.",
      },
    ],
    nietGeschiktAls: [],
    blokken: [
      {
        type: 'notitie',
        kop: '⚠️ À lire avant tout : où habitez-vous ?',
        achtergrond: '#FEF3C7',
        rand: '#FCD34D',
        regels: [
          {
            label: 'En Flandre ou à Bruxelles :',
            tekst: "Ekomenu vous livre. C'est le box qui offre le plus de plats végans (avec un filtre) et il est 100 % bio, même s'il propose aussi du poisson et de la viande.",
          },
          {
            label: 'En Wallonie :',
            tekst: "Ekomenu ne livre pas chez vous, et aucun fournisseur n'est entièrement végétal. Il vous reste les recettes végétariennes de HelloFresh et la ligne veggie de Foodbag, qui livrent partout — mais ce ne sont pas des box végétaux et une sélection hebdomadaire reste nécessaire.",
          },
        ],
      },
      {
        type: 'topAanbieders',
        kop: 'Les quatre options, classées par disponibilité',
        items: [
          {
            slug: 'hellofresh',
            badge: '⭐ Livre partout',
            badgeAchtergrond: '#E8F5EE',
            badgeTekst: '#1B4332',
            tagline: 'Recettes végétariennes · livraison dans tout le pays',
            waarom:
              "HelloFresh propose chaque semaine une sélection végétarienne dans un catalogue de plus de 80 recettes, et livre dans les trois régions. C'est l'option la plus accessible si vous habitez en Wallonie et voulez manger végétal plusieurs fois par semaine. Attention : ce n'est pas un box végétal — vous devez sélectionner activement, et la plupart des recettes contiennent viande ou poisson.",
            deal: "jusqu'à 70 € de réduction sur vos 3 premières box — appliqué automatiquement via notre lien",
            waarschuwing: '⚠️ Pas 100 % végétal',
          },
          {
            slug: 'foodbag',
            badge: '🇧🇪 Belge',
            badgeAchtergrond: '#FEF9C3',
            badgeTekst: '#854D0E',
            tagline: 'Ligne veggie · ingrédients belges · livre en Wallonie',
            waarom:
              "Foodbag propose cinq styles de cuisine, dont une ligne veggie composée de plats végétariens et végétaux, avec des ingrédients de fermes belges. Livraison gratuite dans tout le pays. Là encore, ce n'est pas un box végétal : les autres lignes contiennent viande et poisson.",
            deal: '3 × 20 € de réduction — appliqué automatiquement via notre lien',
            waarschuwing: '⚠️ Pas 100 % végétal',
          },
          {
            slug: 'ekomenu',
            badge: '🌱 Le plus de choix végan',
            badgeAchtergrond: '#E8F5EE',
            badgeTekst: '#1B4332',
            tagline: '100 % bio, filtre végan — Flandre et Bruxelles uniquement',
            waarom:
              "Ekomenu travaille avec des ingrédients 100 % bio et propose chaque semaine plusieurs plats végans, faciles à trouver grâce au filtre. Ce n'est pas un box entièrement végétal : le menu compte aussi du poisson et de la viande. Le prix par portion est même inférieur à celui de plusieurs box classiques. Le seul obstacle est la carte : la livraison s'arrête à la Flandre et à Bruxelles.",
            deal: 'Aucun code permanent — consultez leur offre de bienvenue sur ekomenu.be',
            waarschuwing: '⚠️ Pas de livraison en Wallonie',
          },
          {
            slug: 'marley-spoon',
            badge: '👨‍🍳 Recettes de chef',
            badgeAchtergrond: '#F3E8FF',
            badgeTekst: '#7C3AED',
            tagline: 'Préférence végane · Flandre et Bruxelles uniquement',
            waarom:
              "Marley Spoon inclut des recettes végétariennes et véganes dans son menu hebdomadaire et permet de choisir « végan » comme préférence. Ce n'est pas un box végétal, et la livraison ne dépasse pas la Flandre et Bruxelles — deux restrictions qui l'écartent pour une grande partie des lecteurs francophones.",
            deal: 'Réduction appliquée automatiquement via notre lien — vérifiez votre code postal',
            waarschuwing: '⚠️ Pas 100 % végétal · pas en Wallonie',
          },
        ],
      },
      {
        type: 'tabel',
        kop: 'Comparatif : 4 fournisseurs pour une alimentation végétale',
        slugs: ['hellofresh', 'foodbag', 'ekomenu', 'marley-spoon'],
        portiesPerWeek: 6,
        kolommen: [
          {
            kop: 'Livre en Wallonie',
            soort: 'tekst',
            waarden: {
              hellofresh: 'Oui',
              foodbag: 'Oui',
              ekomenu: 'Non',
              'marley-spoon': 'Non',
            },
          },
          {
            kop: 'Offre végétale',
            soort: 'tekst',
            waarden: {
              hellofresh: 'Recettes végétariennes',
              foodbag: 'Ligne veggie',
              ekomenu: 'Filtre végan · 100 % bio',
              'marley-spoon': 'Préférence végane',
            },
          },
          { kop: '€/portion', soort: 'portie' },
          { kop: 'Note', soort: 'score' },
          { kop: 'Réduction', soort: 'korting' },
        ],
        voetnoot:
          'Prix indicatifs — vérifiez les tarifs actuels sur le site du fournisseur.',
      },
      {
        type: 'scenarios',
        kop: 'Quelle option pour quelle situation ?',
        items: [
          {
            scenario: 'Vous mangez végan et habitez en Flandre ou à Bruxelles',
            aanbeveling: 'Ekomenu',
            slug: 'ekomenu',
            uitleg:
              "Le plus de plats végans par semaine, et 100 % bio. Activez le filtre végan pour ne voir que ce qui vous convient. Consultez leur offre de bienvenue en cours.",
            achtergrond: '#E8F5EE',
            rand: '#BBF7D0',
          },
          {
            scenario: 'Vous voulez du végétal et habitez en Wallonie',
            aanbeveling: 'HelloFresh ou Foodbag',
            slug: 'hellofresh',
            uitleg:
              "Aucun box entièrement végétal ne livre en Wallonie, et Ekomenu non plus. HelloFresh propose une sélection végétarienne chaque semaine, Foodbag une ligne veggie avec des ingrédients belges. Les deux livrent au sud du pays (gratuitement chez Foodbag ; chez HelloFresh, la première livraison est offerte).",
            achtergrond: '#DBEAFE',
            rand: '#BFDBFE',
          },
          {
            scenario: 'Vous voulez manger végétal quelques fois par semaine',
            aanbeveling: 'HelloFresh',
            slug: 'hellofresh',
            uitleg:
              "Avec plus de 80 recettes hebdomadaires, vous composez vous-même : deux ou trois repas végétariens par semaine sans vous engager sur un box entièrement végétal. C'est aussi l'entrée la moins chère grâce à la réduction de bienvenue.",
            achtergrond: '#FEF3C7',
            rand: '#FCD34D',
          },
        ],
      },
      {
        type: 'slotCta',
        kop: 'Manger végétal, où que vous habitiez',
        tekst:
          "Si Ekomenu livre chez vous, c'est là que vous trouverez le plus de plats végans. Sinon, HelloFresh reste la façon la plus simple de composer des repas végétariens chaque semaine, avec livraison partout en Belgique.",
        slug: 'hellofresh',
        knoptekst: 'Voir HelloFresh →',
        subtekst: 'Livraison gratuite dans les trois régions · résiliable à tout moment',
      },
    ],
  },

  gezin: {
    titel: 'Pour les familles',
    h1: 'Meilleur box repas pour les familles en Belgique (2026)',
    intro:
      "Quel box convient à une famille avec enfants ? Nous avons comparé le nombre de personnes possible, le temps de préparation, les recettes adaptées aux enfants et — surtout — qui livre chez vous.",
    uitleg: '',
    uitlegParagraphs: [
      "Un mardi soir chargé : les enfants ont faim, les devoirs ne sont pas finis et personne n'a envie de réfléchir au contenu du frigo. C'est exactement le problème qu'un box repas résout — mais pour une famille, d'autres critères comptent que pour un couple.",
      "Regardez d'abord le nombre de personnes. HelloFresh et Marley Spoon vont jusqu'à 6, Foodbag jusqu'à 5 ; Foodprepper, Factor et Ekomenu s'arrêtent à 4. Ensuite, la cuisine : HelloFresh et Marley Spoon proposent chacun une préférence de menu familiale, qui place les recettes adaptées aux enfants en tête de votre menu. Foodbag cuisine avec des ingrédients belges et a une ligne rapide Quick&Easy.",
      "Et surtout, vérifiez où vous habitez : Marley Spoon, Foodprepper et Ekomenu ne livrent qu'en Flandre et à Bruxelles. En Wallonie, le choix se fait entre HelloFresh, Foodbag et Factor. Consultez notre <a href=\"/fr/comparatif/hellofresh-vs-foodbag\" style=\"color:#1B4332;font-weight:600;text-decoration:underline\">comparatif HelloFresh ou Foodbag</a> pour départager les deux.",
    ],
    seoTitel: 'Box repas pour famille en Belgique 2026 — jusqu’à 6 personnes',
    seoDesc:
      "Quel box repas pour votre famille ? Nombre de personnes, recettes pour enfants, temps de préparation et zone de livraison de 6 fournisseurs comparés.",
    faqKop: 'Questions fréquentes pour les familles',
    faq: [
      {
        q: 'Pour combien de personnes peut-on commander ?',
        a: "HelloFresh et Marley Spoon vont jusqu'à 6 personnes ; chez HelloFresh, une famille plus grande peut commander un box supplémentaire. Foodbag va jusqu'à 5 personnes et vous choisissez le nombre par plat. Foodprepper, Factor et Ekomenu livrent jusqu'à 4 personnes.",
      },
      {
        q: 'Quels box livrent en Wallonie pour une famille ?',
        a: "HelloFresh, Foodbag et Factor livrent dans tout le pays. Marley Spoon, Foodprepper et Ekomenu se limitent à la Flandre et à Bruxelles.",
      },
      {
        q: 'Quel box propose des recettes pour les enfants ?',
        a: "Chez HelloFresh, choisissez la préférence de menu familiale : les recettes pour la famille apparaissent en tête de votre menu. Marley Spoon a une préférence équivalente, avec des recettes classiques et simples. Dans les deux cas, vous pouvez ensuite choisir dans tout le menu.",
      },
      {
        q: 'Quel box est le plus rapide un soir d’école ?',
        a: "Foodprepper est le plus rapide : les ingrédients sont préparés, vous êtes à table en un quart d'heure (Flandre et Bruxelles uniquement). Foodbag a une ligne Quick&Easy et un filtre par temps de préparation, et HelloFresh signale ses recettes les plus rapides. Pour ne pas cuisiner du tout, Factor est prêt à réchauffer.",
      },
      {
        q: 'Et en cas d’allergie alimentaire ?',
        a: "Tous les grands fournisseurs indiquent les allergènes par recette, et vous choisissez vous-même chaque semaine. Marley Spoon a une préférence sans gluten ajouté, mais elle ne convient pas en cas de maladie cœliaque à cause du risque de contamination croisée. En cas d'allergie sévère, vérifiez toujours la liste des ingrédients.",
      },
    ],
    nietGeschiktAls: [
      "Vous cuisinez seulement une ou deux fois par semaine — le coût par repas pèse alors plus lourd.",
      "Vos enfants ne mangent qu'une poignée de plats et refusent la nouveauté.",
      "Vous habitez en Wallonie et visez un fournisseur qui n'y livre pas — vérifiez toujours votre code postal.",
    ],
    blokken: [
      {
        type: 'infokaarten',
        kop: 'Ce qui compte pour une famille',
        items: [
          { icon: '📍', titel: 'La zone de livraison', tekst: "HelloFresh, Foodbag et Factor livrent dans toute la Belgique. Marley Spoon, Foodprepper et Ekomenu s'arrêtent à la Flandre et à Bruxelles." },
          { icon: '👨‍👩‍👧‍👦', titel: 'Le nombre de personnes', tekst: "HelloFresh et Marley Spoon vont jusqu'à 6, Foodbag jusqu'à 5. Foodprepper, Factor et Ekomenu s'arrêtent à 4." },
          { icon: '🧒', titel: 'Des recettes pour les enfants', tekst: "HelloFresh et Marley Spoon ont une préférence de menu familiale qui place les plats simples et classiques en tête du menu." },
          { icon: '⏱️', titel: 'Le temps un soir d’école', tekst: "Foodprepper est prêt en 15 minutes. Foodbag a une ligne Quick&Easy, HelloFresh signale ses recettes les plus rapides. Factor se réchauffe simplement." },
        ],
      },
      {
        type: 'topAanbieders',
        kop: 'Notre top 3 pour les familles',
        items: [
          {
            slug: 'hellofresh',
            badge: '⭐ Meilleur choix',
            badgeAchtergrond: '#E8F5EE',
            badgeTekst: '#1B4332',
            tagline: "Jusqu'à 6 personnes · menu familial · toute la Belgique",
            waarom:
              "Avec plus de 80 recettes par semaine et la préférence de menu familiale, vous trouvez facilement des plats que les enfants aiment — et vous pouvez les choisir ensemble. HelloFresh livre jusqu'à 6 personnes (un box supplémentaire pour une famille plus grande) et couvre les trois régions.",
            deal: "jusqu'à 70 € de réduction sur vos 3 premières box — appliqué automatiquement via notre lien",
          },
          {
            slug: 'foodbag',
            badge: '🇧🇪 Belge',
            badgeAchtergrond: '#DBEAFE',
            badgeTekst: '#1E40AF',
            tagline: 'Ingrédients belges · livraison gratuite · avec ou sans abonnement',
            waarom:
              "Foodbag cuisine avec des ingrédients de fournisseurs belges et propose cinq styles, dont la ligne rapide Quick&Easy et Kant&Klaar pour les soirs vraiment chargés. Vous choisissez le nombre de personnes par plat, pouvez payer en chèques-repas, et la livraison est toujours gratuite, Wallonie comprise.",
            deal: '3 × 20 € de réduction — appliqué automatiquement via notre lien, aucun code à saisir',
          },
          {
            slug: 'factor',
            badge: '🍱 Sans cuisiner',
            badgeAchtergrond: '#FEF3C7',
            badgeTekst: '#92400E',
            tagline: 'Plats prêts · livre dans toute la Belgique',
            waarom:
              "Pour les soirs où personne n'a envie de cuisiner : Factor livre des plats prêts à réchauffer en quelques minutes, dans tout le pays. Limité à 4 personnes, et la livraison est payante, mais c'est la solution la plus simple pour une famille wallonne pressée.",
            deal: 'Jusqu’à 40 % sur votre première box + réduction et cadeaux sur les suivantes',
          },
        ],
      },
      {
        type: 'overigeAanbieders',
        kop: 'Les autres options pour une famille',
        items: [
          { slug: 'marley-spoon', omschrijving: "Plus de 80 recettes, des box pour 2, 3, 4 ou 6 personnes et une préférence de menu familiale. Mais la livraison s'arrête à la Flandre et à Bruxelles, et les modifications se font au moins une semaine à l'avance." },
          { slug: 'foodprepper', omschrijving: "Le box à cuisiner le plus rapide : ingrédients préparés, un quart d'heure en cuisine, sans abonnement et au prix par portion le plus bas. Jusqu'à 4 personnes, en Flandre et à Bruxelles uniquement." },
          { slug: 'ekomenu', omschrijving: "100 % bio et jusqu'à 4 personnes. Une option pour les familles qui veulent manger bio, avec livraison en Flandre et à Bruxelles uniquement." },
        ],
      },
      {
        type: 'tabel',
        kop: 'Comparatif : 6 fournisseurs pour une famille',
        slugs: ['hellofresh', 'foodbag', 'factor', 'marley-spoon', 'foodprepper', 'ekomenu'],
        portiesPerWeek: 12,
        kolommen: [
          { kop: 'Livre en Wallonie', soort: 'tekst', waarden: { hellofresh: 'Oui', foodbag: 'Oui', factor: 'Oui', 'marley-spoon': 'Non', foodprepper: 'Non', ekomenu: 'Non' } },
          { kop: 'Max. personnes', soort: 'tekst', waarden: { hellofresh: '6', foodbag: '5', factor: '4', 'marley-spoon': '6', foodprepper: '4', ekomenu: '4' } },
          { kop: '€/portion', soort: 'portie' },
          { kop: 'Recettes/semaine', soort: 'recepten' },
          { kop: 'Réduction', soort: 'korting' },
        ],
        voetnoot:
          "Le prix par portion est le prix indicatif pour 2 personnes ; pour 4 personnes, il est plus bas chez la plupart des fournisseurs. Factor, HelloFresh et Marley Spoon facturent la livraison, les autres livrent gratuitement. Vérifiez les tarifs actuels sur le site du fournisseur.",
      },
      {
        type: 'scenarios',
        kop: 'Lequel convient à votre famille ?',
        items: [
          {
            scenario: 'Vous habitez en Wallonie',
            aanbeveling: 'HelloFresh ou Foodbag',
            slug: 'hellofresh',
            uitleg: "Les deux seuls box à cuisiner qui livrent au sud du pays. HelloFresh pour le choix et les familles jusqu'à 6 personnes, Foodbag pour les ingrédients belges et la livraison gratuite.",
            achtergrond: '#E8F5EE',
            rand: '#BBF7D0',
          },
          {
            scenario: 'Grande famille ou enfants difficiles',
            aanbeveling: 'HelloFresh',
            slug: 'hellofresh',
            uitleg: "Jusqu'à 6 personnes, plus de 80 recettes et un menu familial : le plus de choix pour trouver ce que tout le monde aime.",
            achtergrond: '#DBEAFE',
            rand: '#BFDBFE',
          },
          {
            scenario: 'Chaque minute compte',
            aanbeveling: 'Foodprepper ou Factor',
            slug: 'factor',
            uitleg: "Foodprepper est prêt en 15 minutes, en Flandre et à Bruxelles. Factor se réchauffe en quelques minutes et livre partout, Wallonie comprise.",
            achtergrond: '#FEF3C7',
            rand: '#FDE68A',
          },
        ],
      },
      {
        type: 'slotCta',
        kop: 'Prêts à commencer ?',
        tekst:
          "HelloFresh offre le plus grand choix aux familles : jusqu'à 6 personnes, un menu familial et une livraison dans les trois régions. Avec la réduction de bienvenue, c'est aussi la façon la moins chère de tester.",
        slug: 'hellofresh',
        knoptekst: "Activer jusqu'à 70 € de réduction →",
        subtekst: "Jusqu'à 70 € sur vos 3 premières box · automatique via le lien · résiliable chaque semaine",
      },
    ],
  },

  vegetarisch: {
    uitlegParagraphs: [
      "Tous les box repas avec des « options végétariennes » ne conviennent pas à ceux qui mangent vraiment végétarien ou végan. La différence tient au choix qui vous reste : certains box ne proposent que quelques recettes végétariennes par semaine à côté de la viande et du poisson, d'autres ont une large offre végétarienne avec un filtre. Aucun box entièrement végétarien ne figure dans notre comparatif.",
      "Ekomenu a la plus large offre végétarienne de notre comparatif et travaille avec des ingrédients 100 % bio. Ce n'est pas un box entièrement végétarien (le menu compte aussi du poisson et de la viande), mais le filtre végétarien ou végan vous montre uniquement ce qui vous convient. Le « Groenteteller » vous aide à suivre si vous mangez assez de légumes chaque semaine. Lisez notre <a href=\"/fr/fournisseur/ekomenu\" style=\"color:#1B4332;font-weight:600;text-decoration:underline\">avis complet sur Ekomenu</a> pour tous les détails. Inconvénient : Ekomenu livre uniquement en Flandre et à Bruxelles, pas en Wallonie.",
      "Si vous voulez manger végétarien mais pas votre partenaire, ou si vous habitez en Wallonie, HelloFresh est l'option la plus pratique : vous choisissez chaque semaine vos recettes, y compris entièrement végétales, et il livre partout en Belgique. Il faut alors filtrer activement chaque semaine. Marley Spoon offre la même liberté, mais uniquement en Flandre et à Bruxelles. Voir notre <a href=\"/fr/fournisseur/hellofresh\" style=\"color:#1B4332;font-weight:600;text-decoration:underline\">avis sur HelloFresh</a>.",
    ],
    titel: 'Végétarien',
    h1: 'Meilleur box repas végétarien en Belgique (2026)',
    intro:
      "Manger végétarien sans y consacrer votre soirée ? Nous avons comparé les fournisseurs sur leur offre végétarienne, leur prix et leur zone de livraison.",
    uitleg:
      "Presque tous les box proposent des recettes végétariennes, mais l'offre varie fortement. HelloFresh en propose chaque semaine dans un catalogue de plus de quatre-vingts recettes et livre dans tout le pays. Foodbag a une ligne veggie complète et couvre également la Wallonie. Ekomenu a la plus large offre végétarienne et est 100 % bio, mais s'arrête à la Flandre et à Bruxelles — ce qui l'exclut pour une partie de nos lecteurs.",
    seoTitel: 'Box repas végétarien en Belgique 2026 — comparatif honnête',
    seoDesc:
      "Quel box repas végétarien choisir en Belgique ? Offre, prix et livraison comparés, y compris pour la Wallonie.",
    faqKop: 'Questions fréquentes sur les box végétariens',
    faq: [
      {
        q: 'Quel box végétarien livre en Wallonie ?',
        a: "HelloFresh et Foodbag livrent dans tout le pays et proposent tous deux des recettes végétariennes. Ekomenu, qui a la plus large offre végétarienne, ne livre qu'en Flandre et à Bruxelles.",
      },
      {
        q: 'Combien de recettes végétariennes par semaine ?',
        a: "Chez HelloFresh, comptez plusieurs recettes végétariennes chaque semaine dans un catalogue de plus de quatre-vingts. Foodbag propose une ligne veggie dédiée. Ekomenu propose plus de 35 plats par semaine, dont une grande partie végétarienne.",
      },
      {
        q: 'Un box végétarien est-il moins cher ?',
        a: "Pas nécessairement. Le prix par portion dépend surtout du fournisseur et non de la présence de viande. Ekomenu, 100 % bio, est moins cher par portion que plusieurs box classiques.",
      },
    ],
    nietGeschiktAls: [
      "Vous voulez la plus large offre végétarienne et habitez en Wallonie — Ekomenu ne vous dessert pas.",
      "Vous voulez chaque semaine une grande variété végétarienne ; l'offre reste plus limitée que le catalogue complet.",
    ],
  },

  budget: {
    uitlegParagraphs: [
      "Le box repas le moins cher n'est pas toujours la meilleure affaire. <a href=\"/fr/fournisseur/factor\" style=\"color:#1B4332;font-weight:600;text-decoration:underline\">Factor</a> a le prix par portion le plus bas (4,99 €), mais facture 5,99 € de livraison : pour deux personnes, comptez environ 35 € par semaine. <a href=\"/fr/fournisseur/hellofresh\" style=\"color:#1B4332;font-weight:600;text-decoration:underline\">HelloFresh</a> semble plus cher à première vue (7,92 €/portion), mais avec jusqu'à 70 € de réduction de bienvenue et la première livraison offerte, c'est souvent le choix le plus avantageux les premières semaines. Ensuite, HelloFresh facture aussi 5,99 € de livraison par box. Les deux livrent en Wallonie. <a href=\"/fr/fournisseur/foodprepper\" style=\"color:#1B4332;font-weight:600;text-decoration:underline\">Foodprepper</a> est une option intermédiaire sans abonnement (45 € de réduction de bienvenue), mais uniquement en Flandre et à Bruxelles.",
      "Calculez toujours le vrai montant par semaine : prix par portion × nombre de portions + livraison − réduction de bienvenue. Un prix par portion bas avec une livraison chère peut revenir plus cher qu'un box « plus cher » avec livraison gratuite et une belle réduction de bienvenue. Notre <a href=\"/fr/guide/goedkoopste-maaltijdbox-belgie\" style=\"color:#1B4332;font-weight:600;text-decoration:underline\">guide du box repas le moins cher</a> détaille le calcul par fournisseur.",
    ],
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
        a: "HelloFresh, surtout avec la réduction de bienvenue sur les trois premières box et la première livraison offerte. Factor a un prix par portion plus bas mais facture 5,99 € de livraison, ce qui rapproche les deux.",
      },
      {
        q: 'Faut-il compter les frais de livraison ?',
        a: "Oui, toujours. Factor facture 5,99 € par livraison, Marley Spoon 6,99 €, Crowd Cooks 4,90 € et HelloFresh 5,99 € à partir de la deuxième box. Sur une commande hebdomadaire, cela représente plus de 250 € par an. Foodbag, Foodmaker et Foodprepper livrent gratuitement.",
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
      "Cuisiner pour soi, c'est souvent trop d'ingrédients pour trop peu de repas. Quels box livrent vraiment pour une personne, quel est le minimum à commander, et lesquels livrent chez vous ?",
    uitleg: '',
    uitlegParagraphs: [
      "Quand on vit seul, on achète vite un sachet d'épinards pour un seul repas et on jette le reste. Un box repas règle ce problème — à condition qu'il livre des portions pour une personne.",
      "C'est possible chez plus de fournisseurs qu'on ne le pense. HelloFresh livre chacun de ses box pour une personne, avec au minimum trois plats par semaine et une livraison dans toute la Belgique, Wallonie comprise. Marley Spoon a une formule séparée pour une personne, avec des recettes très rapides et des options prêtes, mais ne livre qu'en Flandre et à Bruxelles. Lisez notre <a href=\"/fr/fournisseur/hellofresh\" style=\"color:#1B4332;font-weight:600;text-decoration:underline\">avis complet sur HelloFresh</a> pour tous les détails.",
      "Pas envie de cuisiner ? Factor et Foodmaker livrent des portions prêtes à réchauffer, partout en Belgique. Foodbag et Foodprepper se commandent sans abonnement — pratique pour tester d'abord.",
    ],
    seoTitel: 'Box repas pour 1 personne en Belgique 2026 — 6 options comparées',
    seoDesc:
      "Quels box repas livrent vraiment pour une personne ? HelloFresh, Factor, Foodbag et d'autres comparés sur le minimum, le prix et la zone de livraison.",
    faqKop: 'Questions fréquentes pour une personne',
    faq: [
      {
        q: 'Quel box livre pour une personne en Belgique ?',
        a: "HelloFresh livre tous ses box pour une personne, dans tout le pays. Marley Spoon a une formule séparée pour une personne, mais seulement en Flandre et à Bruxelles. Factor et Foodmaker livrent des portions individuelles prêtes à réchauffer. Chez Foodbag, vous choisissez le nombre de personnes par plat.",
      },
      {
        q: 'Que faut-il commander au minimum ?',
        a: "Chez HelloFresh, trois plats par semaine ; deux plats par semaine ne sont pas possibles pour une personne. Chez Foodbag, trois plats minimum par commande, avec ou sans abonnement. Foodprepper et Foodmaker se commandent sans abonnement.",
      },
      {
        q: 'Est-ce rentable pour une seule personne ?',
        a: "Le prix par portion est généralement un peu plus élevé pour une personne que pour deux. En contrepartie, vous ne jetez presque rien puisque tout arrive dosé. Si vous laissez souvent des légumes frais se perdre, le coût réel est proche de vos courses habituelles.",
      },
      {
        q: 'Puis-je commander sans abonnement en Wallonie ?',
        a: "Oui. Foodbag et Foodmaker n'imposent aucun abonnement et livrent dans tout le pays. Foodprepper non plus, mais uniquement en Flandre et à Bruxelles.",
      },
    ],
    nietGeschiktAls: [
      "Vous ne mangez chez vous qu'une ou deux fois par semaine — vous n'atteindrez pas le minimum de la plupart des box.",
      "Vous cuisinez volontiers en grande quantité pour congeler ; un box perd alors son intérêt.",
      "Vous partez souvent à l'improviste et oubliez la date limite pour sauter une semaine.",
    ],
    blokken: [
      {
        type: 'infokaarten',
        kop: 'Ce qui compte quand on mange seul',
        items: [
          { icon: '📍', titel: 'La zone de livraison', tekst: "HelloFresh, Foodbag, Factor et Foodmaker livrent dans toute la Belgique. Marley Spoon et Foodprepper s'arrêtent à la Flandre et à Bruxelles." },
          { icon: '🧑', titel: 'Vraiment pour une personne', tekst: "HelloFresh livre chaque box pour une personne. Marley Spoon a une formule séparée. Factor et Foodmaker livrent des portions individuelles." },
          { icon: '📦', titel: 'Le minimum', tekst: "HelloFresh demande trois plats par semaine pour une personne. Foodbag trois plats par commande, mais sans abonnement obligatoire." },
          { icon: '🔓', titel: 'Abonnement ou non', tekst: "Foodbag, Foodprepper et Foodmaker se commandent sans abonnement. Chez HelloFresh, Marley Spoon et Factor, vous mettez en pause ou résiliez chaque semaine." },
        ],
      },
      {
        type: 'topAanbieders',
        kop: 'Notre top 3 pour une personne',
        items: [
          {
            slug: 'hellofresh',
            badge: '⭐ Meilleur choix',
            badgeAchtergrond: '#E8F5EE',
            badgeTekst: '#1B4332',
            tagline: 'Chaque box pour une personne · toute la Belgique',
            waarom:
              "HelloFresh livre tous ses box pour une personne, avec des portions pesées pour un seul repas. Vous choisissez au moins trois plats par semaine parmi plus de 80 recettes, et mettez en pause ou résiliez depuis votre compte. Il livre dans les trois régions.",
            deal: "jusqu'à 70 € de réduction sur vos 3 premières box — appliqué automatiquement via notre lien",
          },
          {
            slug: 'factor',
            badge: '🍱 Sans cuisiner',
            badgeAchtergrond: '#FEF3C7',
            badgeTekst: '#92400E',
            tagline: 'Portions prêtes · toute la Belgique',
            waarom:
              "Pas envie de cuisiner après le travail ? Factor livre des plats prêts par portion, à réchauffer en quelques minutes. Vous commandez exactement le nombre de repas qu'il vous faut, sans reste. Livraison dans tout le pays, mais payante.",
            deal: 'Jusqu’à 40 % sur votre première box + réduction et cadeaux sur les suivantes',
          },
          {
            slug: 'foodbag',
            badge: '🇧🇪 Belge',
            badgeAchtergrond: '#DBEAFE',
            badgeTekst: '#1E40AF',
            tagline: 'Sans abonnement · livraison gratuite partout',
            waarom:
              "Foodbag cuisine avec des ingrédients belges et livre gratuitement dans tout le pays, Wallonie comprise. Vous choisissez le nombre de personnes par plat et commandez au moins trois plats, avec ou sans abonnement — idéal pour tester sans engagement.",
            deal: '3 × 20 € de réduction — appliqué automatiquement via notre lien, aucun code à saisir',
          },
        ],
      },
      {
        type: 'overigeAanbieders',
        kop: 'Les autres options pour une personne',
        items: [
          { slug: 'foodmaker', omschrijving: "Plats belges prêts, sans abonnement et livrés gratuitement dans tout le pays. Une alternative à Factor si vous ne voulez pas vous engager." },
          { slug: 'marley-spoon', omschrijving: "Une formule séparée pour une personne, avec des recettes très rapides et des options prêtes. Livraison en Flandre et à Bruxelles uniquement ; les modifications se font au moins une semaine à l'avance." },
          { slug: 'foodprepper', omschrijving: "Prêt en 15 minutes grâce aux ingrédients préparés, sans abonnement et au prix par portion le plus bas. Flandre et Bruxelles uniquement." },
        ],
      },
      {
        type: 'tabel',
        kop: 'Comparatif : 6 fournisseurs pour une personne',
        slugs: ['hellofresh', 'factor', 'foodbag', 'foodmaker', 'marley-spoon', 'foodprepper'],
        portiesPerWeek: 3,
        kolommen: [
          { kop: 'Livre en Wallonie', soort: 'tekst', waarden: { hellofresh: 'Oui', factor: 'Oui', foodbag: 'Oui', foodmaker: 'Oui', 'marley-spoon': 'Non', foodprepper: 'Non' } },
          { kop: 'Pour 1 personne', soort: 'tekst', waarden: { hellofresh: 'Oui, chaque box', factor: 'Oui, par portion', foodbag: 'Au choix par plat', foodmaker: 'Oui, par portion', 'marley-spoon': 'Oui, formule séparée', foodprepper: 'Oui' } },
          { kop: 'Abonnement', soort: 'tekst', waarden: { hellofresh: 'Oui, résiliable', factor: 'Oui, résiliable', foodbag: 'Facultatif', foodmaker: 'Non', 'marley-spoon': 'Oui, résiliable', foodprepper: 'Non' } },
          { kop: '€/portion', soort: 'portie' },
          { kop: 'Réduction', soort: 'korting' },
        ],
        voetnoot:
          "Le prix par portion est le prix indicatif pour 2 personnes ; pour une personne, il est généralement un peu plus élevé. Factor, HelloFresh et Marley Spoon facturent la livraison. Vérifiez les tarifs actuels sur le site du fournisseur.",
      },
      {
        type: 'scenarios',
        kop: 'Lequel vous convient ?',
        items: [
          {
            scenario: 'Vous aimez cuisiner, même pour vous seul',
            aanbeveling: 'HelloFresh',
            slug: 'hellofresh',
            uitleg: "Chaque box pour une personne, plus de 80 recettes et une livraison dans toute la Belgique. Avec la réduction de bienvenue, les premières semaines sont les moins chères.",
            achtergrond: '#E8F5EE',
            rand: '#BBF7D0',
          },
          {
            scenario: 'Vous ne voulez pas cuisiner',
            aanbeveling: 'Factor ou Foodmaker',
            slug: 'factor',
            uitleg: "Des portions prêtes à réchauffer, livrées partout. Factor a la plus grosse réduction de bienvenue ; Foodmaker fonctionne sans abonnement et livre gratuitement.",
            achtergrond: '#FEF3C7',
            rand: '#FDE68A',
          },
          {
            scenario: 'Vous voulez tester sans engagement',
            aanbeveling: 'Foodbag',
            slug: 'foodbag',
            uitleg: "Commandez une fois, sans abonnement, avec livraison gratuite dans tout le pays. Vous choisissez le nombre de personnes par plat.",
            achtergrond: '#DBEAFE',
            rand: '#BFDBFE',
          },
        ],
      },
      {
        type: 'slotCta',
        kop: 'Prêt à commencer ?',
        tekst:
          "HelloFresh est le box à cuisiner le plus flexible pour une personne en Belgique : chaque box se commande pour un, avec livraison dans les trois régions. Avec la réduction de bienvenue, c'est la façon la moins chère de tester.",
        slug: 'hellofresh',
        knoptekst: "Activer jusqu'à 70 € de réduction →",
        subtekst: "Jusqu'à 70 € sur vos 3 premières box · automatique via le lien · résiliable chaque semaine",
      },
    ],
  },

  bio: {
    uitlegParagraphs: [
      "Pour manger vraiment bio, <a href=\"/fr/fournisseur/ekomenu\" style=\"color:#1B4332;font-weight:600;text-decoration:underline\">Ekomenu</a> est le meilleur choix de notre comparatif : c'est le seul box qui travaille uniquement avec des ingrédients biologiques, et chaque commande affiche votre empreinte CO2. Avec plus de 35 plats par semaine, dont une grande partie végétarienne, mais aussi du poisson et de la viande, c'est un box complet. Détail étonnant : Ekomenu coûte à partir de 6,42 € par portion, moins que HelloFresh (7,92 €) ou Marley Spoon (7,79 €). Attention : Ekomenu ne livre pas en Wallonie.",
      "<a href=\"/fr/fournisseur/foodbag\" style=\"color:#1B4332;font-weight:600;text-decoration:underline\">Foodbag</a> est la meilleure alternative si vous mangez aussi de la viande ou si vous habitez en Wallonie. Foodbag n'est pas certifié bio, mais travaille avec des fermes belges et ses propres livreurs : une chaîne plus courte et des ingrédients frais. Pour manger de façon consciente sans aller jusqu'au bio strict, c'est un bon compromis. Voir la différence en détail dans notre <a href=\"/fr/comparatif/hellofresh-vs-ekomenu\" style=\"color:#1B4332;font-weight:600;text-decoration:underline\">comparatif avec Ekomenu</a>.",
      "D'autres acteurs belges, plus petits, proposent aussi du bio. eFarmz travaille avec des produits bio et belges, livre dans toute la Belgique et au Luxembourg — donc aussi en Wallonie — avec ou sans abonnement. Little Green Box est une coopérative aux produits bio et locaux.",
    ],
    titel: 'Bio',
    h1: 'Box repas bio en Belgique 2026 — et pourquoi la Wallonie est mal servie',
    intro:
      "Manger bio via un box repas est possible en Belgique, mais l'offre est étroite — et le seul box 100 % bio de notre comparatif ne livre pas partout.",
    uitleg:
      "Dans notre comparatif, un seul fournisseur travaille exclusivement avec des ingrédients biologiques : Ekomenu. Son problème, pour une partie de nos lecteurs, est sa zone de livraison, limitée à la Flandre et à Bruxelles. En Wallonie, eFarmz propose des produits bio et belges (il ne figure pas encore dans notre comparatif). Foodbag propose des ingrédients belges en filière courte sans être certifié bio, ce qui reste l'alternative la plus proche au sud du pays.",
    seoTitel: 'Box repas bio en Belgique 2026 — livraison en Wallonie ?',
    seoDesc:
      "Le seul box 100 % bio de notre comparatif ne livre pas en Wallonie. Quelles alternatives pour manger bio, local et de saison au sud du pays ?",
    faqKop: 'Questions fréquentes sur le bio',
    faq: [
      {
        q: 'Existe-t-il un box bio qui livre en Wallonie ?',
        a: "Pas parmi les box de notre comparatif : Ekomenu, le seul entièrement bio, ne livre qu'en Flandre et à Bruxelles. eFarmz, un acteur belge plus petit avec des produits bio, livre en revanche dans toute la Belgique. Foodbag est une autre alternative : ingrédients belges en filière courte, mais pas bio.",
      },
      {
        q: 'Les ingrédients Ekomenu sont-ils tous bio ?',
        a: "Oui. Ekomenu annonce des ingrédients 100 % bio. C'est le seul fournisseur de notre comparatif dans ce cas.",
      },
      {
        q: 'Le bio revient-il plus cher ?',
        a: "Pas ici. Ekomenu coûte moins par portion que plusieurs box non bio, notamment HelloFresh et Marley Spoon. La contrainte est la zone de livraison, pas le prix.",
      },
    ],
    nietGeschiktAls: [
      "Vous habitez en Wallonie et voulez Ekomenu — il ne vous dessert pas (regardez plutôt du côté d'eFarmz).",
      "Vous voulez un très large choix de recettes ; l'offre bio reste plus restreinte.",
    ],
  },
};
