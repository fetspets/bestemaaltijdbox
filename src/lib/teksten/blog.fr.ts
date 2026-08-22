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
          'HelloFresh : à partir de 7,99 € la portion, livraison gratuite, livre dans tout le pays',
          'Foodbag : à partir de 9,50 €, ingrédients belges en filière courte, livre aussi en Wallonie',
          'Ekomenu : à partir de 6,18 €, entièrement bio — mais pas de livraison en Wallonie',
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
        a: "HelloFresh, avec la livraison gratuite et une réduction de bienvenue allant jusqu'à 60 €. Foodprepper est moins cher par portion mais ne livre pas au sud du pays.",
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
          'Connectez-vous sur hellofresh.be → « Mon compte » → « Abonnement »',
          'Cliquez sur « Mettre en pause » ou « Résilier l’abonnement »',
          'Délai : au moins 5 jours avant la date de livraison suivante',
        ],
      },
      { type: 'h2', text: 'Résilier Foodbag' },
      {
        type: 'p',
        text: "Foodbag demande de résilier via votre compte en ligne ou via le service client. Notez que Foodbag permet aussi de commander ponctuellement, sans abonnement du tout.",
      },
      {
        type: 'ul',
        items: [
          'Connectez-vous sur foodbag.be → « Mon profil » → « Gérer l’abonnement »',
          'Choisissez « Arrêter l’abonnement »',
          'Délai : 5 jours ouvrables avant la livraison suivante',
        ],
      },
      { type: 'h2', text: 'Résilier Marley Spoon' },
      {
        type: 'ul',
        items: [
          'Connectez-vous sur marleyspoon.com → « Compte » → « Paramètres d’abonnement »',
          'Descendez jusqu’à « Mettre fin à l’abonnement »',
          'Délai : 6 jours avant la livraison — plus strict que chez les autres',
        ],
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
        text: "En vacances ou simplement besoin d'une pause ? HelloFresh, Foodbag et Marley Spoon permettent de sauter une livraison chaque semaine sans mettre fin à l'abonnement. Vous gardez vos réductions en cours et votre historique de recettes.",
      },
      { type: 'h2', text: 'Et si vous êtes en retard ?' },
      {
        type: 'p',
        text: "Contactez immédiatement le service client par chat ou par e-mail. Dans la plupart des cas, une demande rapide et motivée est acceptée. Les fournisseurs qui appliquent un délai le font pour des raisons logistiques, pas pour vous retenir.",
      },
      { type: 'h2', text: 'Sans abonnement, sans résiliation' },
      {
        type: 'p',
        text: "Foodprepper, Foodmaker et Foodbag permettent de commander sans abonnement : rien à résilier, vous commandez simplement quand cela vous arrange. Attention, Foodprepper ne livre qu'en Flandre et à Bruxelles.",
      },
    ],
    faq: [
      {
        q: 'Quel est le délai de résiliation le plus court ?',
        a: "Ekomenu accepte une résiliation jusqu'à 4 jours ouvrables avant la livraison. HelloFresh et Foodbag demandent 5 jours, Marley Spoon 6 — le plus strict du comparatif.",
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
        text: "HelloFresh propose chaque semaine 8 à 12 recettes végétariennes dans un catalogue de plus de 40. Un filtre « Veggie » permet de les isoler en un clic. L'offre va des pâtes rapides aux currys plus élaborés. Avantage décisif pour un lecteur francophone : HelloFresh livre dans les trois régions.",
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
        text: "Pour manger entièrement végétal, Ekomenu reste le meilleur choix en Belgique — à condition d'habiter en Flandre ou à Bruxelles. Si vous voulez rester flexible (parfois viande, parfois non), HelloFresh l'emporte grâce à l'ampleur du choix et à sa couverture nationale. En Wallonie et pour du végétal de qualité, Foodbag est l'option la plus solide.",
      },
    ],
    faq: [
      {
        q: 'Existe-t-il un box entièrement végétal livré en Wallonie ?',
        a: "Non. Ekomenu est le seul box entièrement végétal de Belgique et ne livre qu'en Flandre et à Bruxelles. En Wallonie, il faut composer avec les recettes végétariennes de HelloFresh ou la ligne veggie de Foodbag.",
      },
      {
        q: 'Combien de recettes végétariennes par semaine chez HelloFresh ?',
        a: "Entre 8 et 12 par semaine, dans un catalogue de plus de 40 recettes. Un filtre dédié permet de les afficher directement.",
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
          'Factor et Marley Spoon facturent 5,99 € par livraison, Crowd Cooks 4,90 €',
          'HelloFresh, Foodbag, Foodmaker, Ekomenu et Foodprepper livrent gratuitement',
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
};
