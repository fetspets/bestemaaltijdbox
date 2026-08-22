import type { Vergelijking } from '../vergelijkingen';

/**
 * Franse teksten per vergelijking.
 *
 * Voor twee vergelijkingen verandert de strekking volledig: Foodprepper
 * levert niet in Wallonië, dus "Foodprepper of Foodbag?" is voor een Waalse
 * lezer geen keuze maar een mededeling. Die pagina's openen daarom met de
 * leverbaarheid in plaats van met het conceptverschil.
 *
 * Alleen tekst staat hier. Slugs, aanbieders, campagnes en de verdictSlug
 * komen uit vergelijkingen.ts.
 */
export const vergelijkingenFr: Record<string, Partial<Vergelijking>> = {
  'foodprepper-vs-foodbag': {
    seoTitle: 'Foodprepper ou Foodbag (2026) : lequel livre chez vous ?',
    seoDescription:
      "Foodprepper ne livre pas en Wallonie, Foodbag oui. Comparaison honnête des deux box du groupe Colruyt : temps de préparation, prix et zone de livraison.",
    h1: 'Foodprepper ou Foodbag : lequel pouvez-vous réellement commander ?',
    introParagrafen: [
      "Commençons par ce qui tranche la question pour beaucoup de lecteurs francophones : <strong>Foodprepper ne livre qu'en Flandre et à Bruxelles</strong>. Si vous habitez en Wallonie, la comparaison s'arrête là — Foodbag est le seul des deux qui vous livre.",
      "À Bruxelles, en revanche, les deux sont disponibles et le choix devient intéressant. Les deux appartiennent au même groupe (Smartmat, Colruyt Group) mais visent des usages opposés : Foodbag est un box à cuisiner classique, Foodprepper livre des ingrédients déjà préparés que vous assemblez en un quart d'heure.",
      "Ci-dessous, la comparaison complète sur le temps, le menu, le prix et la livraison.",
    ],
    blokken: [
      {
        type: 'kenmerkTabel',
        kop: 'En un coup d’œil',
        kolomSlugs: ['foodprepper', 'foodbag'],
        rijen: [
          { kenmerk: 'Livre en Wallonie', waarden: ['Non', 'Oui'] },
          { kenmerk: 'Zone de livraison', waarden: ['Flandre et Bruxelles', 'Toute la Belgique'] },
          { kenmerk: 'Temps de préparation', waarden: ['~15 min', '~30 min'] },
          { kenmerk: 'Types de repas', waarden: ['Petit-déjeuner, midi, soir, en-cas', 'Surtout le soir'] },
          { kenmerk: 'Abonnement obligatoire', waarden: ['Non', 'Non'] },
          { kenmerk: 'Livraison', waarden: ['Gratuite, dim/lun', 'Gratuite'] },
          { kenmerk: 'Ingrédients belges', waarden: ['Oui', 'Oui'] },
          { kenmerk: 'Maison mère', waarden: ['Smartmat / Colruyt Group', 'Smartmat / Colruyt Group'] },
        ],
        voetnoot:
          'Les prix peuvent changer. Vérifiez les tarifs actuels sur le site du fournisseur.',
      },
      {
        type: 'sectie',
        kop: 'La zone de livraison avant tout le reste',
        html: true,
        paragrafen: [
          "<strong>Foodprepper</strong> livre en Flandre et dans la Région de Bruxelles-Capitale. Pas en Wallonie. Ce n'est pas un détail administratif : si vous habitez à Liège, Namur ou Charleroi, vous ne pouvez tout simplement pas commander, quelle que soit la qualité du produit.",
          "<strong>Foodbag</strong> livre dans tout le pays, gratuitement, du vendredi au lundi. C'est l'un des rares acteurs vraiment locaux — ingrédients de fermes belges — qui dessert aussi le sud. Pour un lecteur wallon qui veut manger belge, c'est de fait le choix par défaut.",
        ],
      },
      {
        type: 'sectie',
        kop: 'Le temps : quinze minutes contre une vraie séance de cuisine',
        html: true,
        paragrafen: [
          "<strong>Foodprepper</strong> supprime la barrière du temps : le chef a déjà fait la découpe, la marinade et les sauces. Vous cuisez, réchauffez ou mélangez — et après quinze minutes, c'est prêt. Pas de cuisine à nettoyer, pas de longue préparation.",
          "<strong>Foodbag</strong> assume l'expérience classique : légumes belges frais, découpe et cuisson par vos soins, 25 à 35 minutes. Si cuisiner vous détend, vous y trouverez davantage. Si vous disposez de vingt minutes maximum en semaine, Foodbag peut sembler laborieux.",
        ],
      },
      {
        type: 'sectie',
        kop: 'Menu et variété',
        html: true,
        paragrafen: [
          "<strong>Foodprepper</strong> se distingue par une offre qui couvre toute la journée : petit-déjeuner, midi, soir et en-cas, avec un « marché frais » en ligne pour compléter. Le menu hebdomadaire tourne, mais reste plus restreint que chez Foodbag.",
          "<strong>Foodbag</strong> propose plus de 20 recettes par semaine réparties sur 5 styles de cuisine, dont la ligne Sana de Sandra Bekkari et les plats Busy Day prêts en 20 minutes. Petit-déjeuner et déjeuner n'en font pas partie.",
        ],
      },
      {
        type: 'kortingKaarten',
        items: [
          {
            slug: 'foodprepper',
            kop: '🏷️ Réduction de bienvenue Foodprepper',
            tekst:
              "3 × 15 € sur vos trois premières commandes (jusqu'à 45 €). Appliqué automatiquement via notre lien, aucun code à saisir. Réservé aux nouveaux clients ; vérifiez la validité et votre code postal sur foodprepper.be.",
            knoptekst: '15 € de réduction sur les 3 premières commandes →',
          },
          {
            slug: 'foodbag',
            kop: '🏷️ Réduction de bienvenue Foodbag',
            tekst:
              "3 × 20 € sur vos trois premières commandes (jusqu'à 60 €). Appliqué automatiquement via notre lien, aucun code à saisir. Réservé aux nouveaux clients ; vérifiez la validité sur foodbag.be.",
            knoptekst: 'Voir Foodbag →',
          },
        ],
      },
      {
        type: 'keuzelijst',
        kop: 'Choisissez Foodprepper si…',
        slug: 'foodprepper',
        items: [
          "Vous habitez en Flandre ou à Bruxelles — Foodprepper ne livre pas en Wallonie",
          'Vous voulez cuisiner moins de vingt minutes en semaine',
          'Vous voulez aussi couvrir le petit-déjeuner et le midi via un seul fournisseur',
          'Vous avez des enfants et peu de marge dans la routine du soir',
          'Vous voulez du frais sans le gros du travail de préparation',
        ],
      },
      {
        type: 'keuzelijst',
        kop: 'Choisissez Foodbag si…',
        slug: 'foodbag',
        items: [
          'Vous habitez en Wallonie — Foodbag y livre, Foodprepper non',
          'Vous aimez cuisiner et voyez cela comme un moment de détente',
          'Vous prenez volontiers trente minutes en soirée',
          'Vous voulez plus de variété : 20+ repas par semaine en 5 styles',
          'Vous voulez la ligne Sana de Sandra Bekkari ou les plats Busy Day',
        ],
      },
      {
        type: 'slotCta',
        kop: 'Pas encore décidé ?',
        tekst:
          "Aucun des deux n'impose d'abonnement : vous pouvez commander une fois et comparer vous-même. Vérifiez d'abord votre code postal si vous visez Foodprepper.",
        slug: 'foodprepper',
        knoptekst: 'Voir Foodprepper →',
        subtekst: 'Sans abonnement · livraison gratuite en Flandre et à Bruxelles',
        campagne: 'cta',
      },
    ],
    verdictKop: "Foodbag si vous êtes en Wallonie, sinon cela dépend de votre soirée",
    verdictTekst:
      "Il n'y a pas de gagnant absolu entre ces deux box — sauf sur un point : si vous habitez en Wallonie, seul Foodbag vous livre, et la question est réglée. À Bruxelles et en Flandre, choisissez selon votre rythme : Foodprepper si vous voulez manger en quinze minutes et couvrir aussi le petit-déjeuner et le midi, Foodbag si cuisiner fait partie de la soirée et que vous voulez plus de variété. Les deux utilisent des ingrédients belges et appartiennent au même groupe ; la différence est le concept, pas la qualité.",
    faq: [
      {
        q: 'Foodprepper livre-t-il en Wallonie ?',
        a: "Non. Foodprepper livre uniquement en Flandre et dans la Région de Bruxelles-Capitale. Si vous habitez en Wallonie, Foodbag est le seul des deux disponibles — il livre dans tout le pays, gratuitement.",
      },
      {
        q: 'Foodprepper et Foodbag sont-ils la même entreprise ?',
        a: "Ils appartiennent au même groupe : Smartmat NV, filiale du groupe Colruyt. Mais leur conception est totalement différente. Foodbag est un box à cuisiner classique, avec 25 à 35 minutes de préparation. Foodprepper livre des repas à moitié préparés que vous terminez en 15 minutes. Public, menu et expérience de commande sont distincts.",
      },
      {
        q: 'Lequel est le moins cher ?',
        a: "Foodbag coûte en moyenne plus cher par portion que Foodprepper. Le prix exact dépend toutefois des plats choisis et du nombre de personnes. Vérifiez les tarifs actuels sur foodprepper.be et foodbag.be, car ils évoluent. Les nouveaux clients Foodprepper reçoivent trois fois 15 € de réduction sur leurs trois premières commandes, appliqués automatiquement via notre lien.",
      },
      {
        q: 'Puis-je tester les deux ?',
        a: "Oui, aucun des deux n'impose d'abonnement : vous pouvez commander ponctuellement et comparer vous-même. Attention toutefois à la zone de livraison de Foodprepper si vous habitez au sud du pays.",
      },
    ],
  },

  'foodprepper-vs-hellofresh': {
    seoTitle: 'Foodprepper ou HelloFresh (2026) : lequel livre en Wallonie ?',
    seoDescription:
      "HelloFresh livre partout en Belgique, Foodprepper seulement en Flandre et à Bruxelles. Comparaison sur le temps de préparation, le menu et le prix.",
    h1: 'Foodprepper ou HelloFresh : lequel choisir en Belgique francophone ?',
    introParagrafen: [
      "La différence la plus concrète entre ces deux box n'est pas le temps de préparation mais la carte : <strong>HelloFresh livre dans les trois régions, Foodprepper uniquement en Flandre et à Bruxelles</strong>. En Wallonie, la comparaison n'a donc qu'un seul candidat.",
      "Pour un lecteur bruxellois, le choix se pose vraiment. HelloFresh est le leader mondial : plus de 40 recettes par semaine et des fiches en français. Foodprepper est belge, plus jeune, et construit autour d'une promesse : à table en quinze minutes, parce que les légumes sont précuits et la viande marinée.",
      "Nous comparons ci-dessous le temps, le menu, le prix, l'origine et la livraison.",
    ],
    verdictKop: 'HelloFresh en Wallonie, Foodprepper à Bruxelles si le temps presse',
    verdictTekst:
      "Si vous habitez en Wallonie, HelloFresh est le seul des deux qui vous livre — inutile d'aller plus loin. À Bruxelles et en Flandre, Foodprepper l'emporte sur la rapidité et l'ancrage belge : quinze minutes contre trente à quarante-cinq, et des fournisseurs locaux. HelloFresh garde l'avantage sur le choix (40+ recettes), la couverture et un prix par portion stable. Si vous aimez cuisiner, prenez HelloFresh ; si vous voulez surtout gagner du temps et que vous êtes dans la zone de livraison, prenez Foodprepper.",
    faq: [
      {
        q: 'HelloFresh livre-t-il en Wallonie ?',
        a: "Oui, HelloFresh livre dans toute la Belgique : Flandre, Bruxelles et Wallonie. Foodprepper se limite à la Flandre et à la Région de Bruxelles-Capitale. Pour un habitant de Wallonie, HelloFresh est le seul des deux possibles.",
      },
      {
        q: 'Foodprepper est-il moins cher que HelloFresh ?',
        a: "Cela dépend de vos choix. HelloFresh applique un prix fixe par portion. Foodprepper travaille avec un menu variable — vérifiez le tarif actuel sur foodprepper.be. Les nouveaux clients Foodprepper reçoivent trois fois 15 € de réduction via notre lien, ce qui rend les premières commandes moins chères. HelloFresh propose aussi une réduction de bienvenue.",
      },
      {
        q: 'Lequel convient le mieux aux familles pressées ?',
        a: "Foodprepper a un avantage pratique en semaine : prêt en quinze minutes grâce aux ingrédients préparés. HelloFresh demande 25 à 40 minutes. Mais HelloFresh offre plus de choix et couvre tout le pays, ce qui compte si vous voulez rester longtemps chez le même fournisseur sans lassitude.",
      },
      {
        q: 'Puis-je combiner les deux ?',
        a: "Oui, si vous êtes dans la zone de livraison de Foodprepper. Celui-ci n'impose pas d'abonnement, et HelloFresh se met en pause chaque semaine. Certains ménages commandent Foodprepper les semaines chargées et HelloFresh les semaines plus calmes.",
      },
    ],
  },

  'hellofresh-vs-foodbag': {
    seoTitle: 'HelloFresh ou Foodbag (2026) : lequel choisir en Belgique ?',
    seoDescription:
      "HelloFresh ou Foodbag : lequel est le moins cher et le meilleur ? Prix, goût et flexibilité comparés. Les deux livrent en Wallonie.",
    verdictTekst:
      "C'est la comparaison la plus utile pour un lecteur francophone, parce que les deux livrent dans tout le pays, Wallonie comprise. HelloFresh est nettement moins cher par portion et propose plus de recettes par semaine, ce qui aide à tenir sur la durée sans lassitude. Foodbag l'emporte sur le goût et la qualité des ingrédients : la filière est plus courte et cela se sent. Si le budget compte ou si vous voulez de la variété, prenez HelloFresh. Si vous tenez à manger belge et local, Foodbag le justifie — à condition d'accepter le prix.",
    faq: [
      {
        q: 'Les deux livrent-ils en Wallonie ?',
        a: "Oui, HelloFresh et Foodbag livrent dans toute la Belgique, Wallonie comprise, et tous deux gratuitement. C'est l'une des rares comparaisons de notre site où la zone de livraison ne départage pas les deux candidats.",
      },
      {
        q: 'Lequel est le moins cher : HelloFresh ou Foodbag ?',
        a: "HelloFresh est sensiblement moins cher par portion. Foodbag coûte nettement plus, ce qui reflète l'approvisionnement local et la filière courte. Si le budget est un critère, HelloFresh est le choix évident — surtout avec la réduction de bienvenue pour les nouveaux clients.",
      },
      {
        q: 'Quel box a les meilleurs ingrédients ?',
        a: "Foodbag l'emporte sur la qualité des ingrédients. Les produits viennent de fermes belges via une filière courte, ce qui se remarque à la fraîcheur. HelloFresh achète à l'international, ce qui explique le prix plus bas mais aussi la différence de ressenti.",
      },
      {
        q: 'Lequel est plus pratique si je manque de temps ?',
        a: "Foodbag propose une ligne « Busy Day » avec des repas prêts en 20 minutes. HelloFresh a une catégorie « Quick & Easy » en 25 à 30 minutes. Les deux sont faisables en semaine ; Foodbag a un léger avantage si la rapidité prime.",
      },
      {
        q: 'Puis-je résilier quand je veux ?',
        a: "Oui. HelloFresh et Foodbag se mettent en pause ou se résilient chaque semaine, jusqu'à 5 jours avant la livraison suivante. Foodbag permet en plus de commander ponctuellement, sans abonnement.",
      },
    ],
  },

  'hellofresh-vs-marley-spoon': {
    seoTitle: 'HelloFresh ou Marley Spoon (2026) : lequel livre en Wallonie ?',
    seoDescription:
      "Marley Spoon ne livre pas en Wallonie, HelloFresh oui. Comparaison du choix de recettes, du prix et de la qualité culinaire.",
    verdictTekst:
      "Pour une grande partie de nos lecteurs francophones, cette comparaison se règle sur un seul critère : Marley Spoon ne livre pas en Wallonie. Si vous habitez au sud du pays, HelloFresh est le seul des deux disponibles. À Bruxelles, le débat existe : Marley Spoon propose les recettes les plus travaillées de notre comparatif et la meilleure note de goût, mais demande plus de temps, coûte plus cher et facture 5,99 € de livraison. HelloFresh reste plus accessible, plus varié et sans frais de port.",
    faq: [
      {
        q: 'Marley Spoon livre-t-il en Wallonie ?',
        a: "Non, Marley Spoon livre actuellement uniquement en Flandre et à Bruxelles. Pour un habitant de Wallonie, HelloFresh est le seul des deux possibles. Foodbag est une autre alternative qui couvre tout le pays.",
      },
      {
        q: 'Lequel propose le plus de recettes ?',
        a: "HelloFresh propose davantage de recettes par semaine. Marley Spoon a une offre plus restreinte, mais des recettes plus élaborées, avec plus de technique et des mélanges d'épices de meilleure qualité.",
      },
      {
        q: 'À qui conviennent vraiment les recettes de Marley Spoon ?',
        a: "À ceux qui voient la cuisine comme un moment de détente et acceptent d'y consacrer 45 à 60 minutes. Si vous cherchez à manger vite après le travail, HelloFresh est plus réaliste.",
      },
      {
        q: 'Lequel est le meilleur pour débuter ?',
        a: "HelloFresh est plus accessible : instructions pas à pas, temps de préparation plus court et fiches recettes en français. Marley Spoon suppose une certaine aisance en cuisine.",
      },
    ],
  },

  'foodbag-vs-marley-spoon': {
    seoTitle: 'Foodbag ou Marley Spoon (2026) : le belge contre le chef',
    seoDescription:
      "Foodbag livre partout en Belgique, Marley Spoon seulement en Flandre et à Bruxelles. Comparaison sur les ingrédients, le prix et la livraison.",
    verdictTekst:
      "Foodbag et Marley Spoon jouent dans la même gamme de prix mais s'adressent à des publics différents — et surtout, ils ne couvrent pas le même territoire. Foodbag livre dans toute la Belgique avec des ingrédients belges et ses propres livreurs ; Marley Spoon s'arrête à la Flandre et à Bruxelles mais propose les recettes les plus abouties de notre comparatif. Pour un lecteur wallon, Foodbag est le seul des deux disponible. À Bruxelles, choisissez selon ce que vous cherchez : l'ancrage local ou la profondeur culinaire.",
    faq: [
      {
        q: 'Lequel livre en Wallonie ?',
        a: "Foodbag livre dans toute la Belgique, Wallonie comprise. Marley Spoon se limite actuellement à la Flandre et à Bruxelles. Si vous habitez en Wallonie, Foodbag est le seul des deux possible.",
      },
      {
        q: 'Quelle est la principale différence ?',
        a: "Foodbag travaille avec des ingrédients belges en circuit court et livre partout dans le pays. Marley Spoon mise sur des recettes de chef plus élaborées, mais avec une zone de livraison plus étroite et des frais de port de 5,99 €.",
      },
      {
        q: 'Les ingrédients de Foodbag sont-ils vraiment meilleurs ?',
        a: "Marley Spoon obtient la meilleure note de goût de notre comparatif, mais Foodbag se distingue sur l'origine : produits de fermes belges via une filière courte, ce qui se remarque à la fraîcheur des légumes.",
      },
      {
        q: 'Puis-je commander Foodbag sans abonnement ?',
        a: "Oui, Foodbag permet de commander ponctuellement, sans engagement. Marley Spoon fonctionne avec un abonnement, que vous pouvez toutefois mettre en pause ou résilier chaque semaine.",
      },
    ],
  },

  'hellofresh-vs-ekomenu': {
    seoTitle: 'HelloFresh ou Ekomenu (2026) : le bio livre-t-il en Wallonie ?',
    seoDescription:
      "Ekomenu est 100 % bio et végétal mais ne livre qu'en Flandre et à Bruxelles. HelloFresh couvre tout le pays. Comparaison prix, choix et livraison.",
    verdictTekst:
      "Ekomenu occupe une niche que personne d'autre ne couvre en Belgique : 100 % bio et 100 % végétal. Mais sa zone de livraison s'arrête à la Flandre et à Bruxelles, ce qui l'exclut d'office pour une grande partie de nos lecteurs. HelloFresh l'emporte sur le prix, la variété et la couverture nationale, et propose des recettes végétariennes sans être un box végétal. Si vous habitez en Wallonie et cherchez du végétal, la ligne veggie de Foodbag est l'alternative la plus proche.",
    faq: [
      {
        q: 'Ekomenu livre-t-il en Wallonie ?',
        a: "Non. Ekomenu livre actuellement uniquement en Flandre et à Bruxelles. HelloFresh couvre tout le pays, Wallonie comprise. Pour du végétal en Wallonie, regardez la ligne veggie de Foodbag.",
      },
      {
        q: 'Les ingrédients Ekomenu sont-ils vraiment 100 % bio ?',
        a: "Oui. Ekomenu est le seul box de notre comparatif dont tous les ingrédients sont certifiés biologiques, sans exception.",
      },
      {
        q: 'Ekomenu est-il plus cher que HelloFresh ?',
        a: "Ekomenu coûte plus par portion qu'HelloFresh à tarif standard. Avec la réduction de bienvenue HelloFresh, l'écart se creuse encore sur les premières commandes.",
      },
      {
        q: 'HelloFresh propose-t-il des options végétariennes ou véganes ?',
        a: "HelloFresh propose des recettes végétariennes, mais pas d'offre entièrement végane. Ekomenu est intégralement végétal, ce qui reste sa vraie différence — pour autant que vous soyez dans sa zone de livraison.",
      },
    ],
  },

  'crowd-cooks-vs-factor': {
    seoTitle: 'Crowd Cooks ou Factor (2026) : quels plats prêts en Wallonie ?',
    seoDescription:
      "Deux services de plats prêts à réchauffer comparés : Crowd Cooks est belge avec des frais de livraison plus bas, Factor couvre tout le pays.",
    verdictTekst:
      "Crowd Cooks et Factor jouent dans le même segment : rien à cuisiner, seulement à réchauffer. Bonne nouvelle pour un lecteur francophone, les deux sont accessibles au sud du pays — Factor livre partout en Belgique, Crowd Cooks couvre Bruxelles, le Brabant wallon, Liège, Charleroi et Namur. Crowd Cooks est plus belge, plus copieux (450 g et plus) et facture moins cher la livraison, mais impose un créneau du dimanche ou du lundi. Factor offre plus de souplesse et un prix d'entrée plus bas. Vérifiez d'abord votre code postal chez Crowd Cooks.",
    faq: [
      {
        q: 'Les deux livrent-ils en Wallonie ?',
        a: "Factor livre dans toute la Belgique. Crowd Cooks couvre une large partie de la Wallonie — dont Liège, Charleroi, Namur et le Brabant wallon — mais pas l'ensemble du territoire. Vérifiez votre code postal avant de commander.",
      },
      {
        q: 'Quelle est la principale différence ?',
        a: "Les deux livrent des plats prêts à réchauffer. Crowd Cooks est un service belge avec de grosses portions et une livraison le dimanche ou le lundi. Factor propose plus de styles diététiques et des créneaux plus souples.",
      },
      {
        q: 'Lequel est le moins cher ?',
        a: "Factor a un prix d'entrée par portion plus bas. Les frais de livraison sont proches : 5,99 € chez Factor, 4,90 € chez Crowd Cooks. Comptez le total par semaine plutôt que le prix par portion seul.",
      },
      {
        q: 'Puis-je mettre en pause ou résilier ?',
        a: "Oui, les deux fonctionnent avec un abonnement flexible que vous pouvez adapter, mettre en pause ou résilier chaque semaine.",
      },
    ],
  },
};
