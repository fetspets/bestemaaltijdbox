import type { Gids } from '../gidsen';

/**
 * Franse teksten per gids.
 *
 * De Nederlandse gids zet Foodprepper neer als goedkoopste per portie.
 * Dat klopt, maar Foodprepper levert niet in Wallonië — dus voor een groot
 * deel van de Franstalige lezers is het antwoord op "welke is de goedkoopste"
 * een andere box. De Franse tabel toont daarom eerst wie er levert.
 */
export const gidsenFr: Record<string, Partial<Gids>> = {
  'goedkoopste-maaltijdbox-belgie': {
    titel: 'Box repas le moins cher en Belgique 2026 — le vrai prix par semaine',
    metaTitle: 'Box repas pas cher en Belgique 2026 — prix réel par semaine comparé',
    metaDescription:
      "Quel box repas est réellement le moins cher ? Prix par semaine pour 7 fournisseurs, frais de livraison inclus — et lesquels livrent en Wallonie.",
    broodkruimel: 'Box repas le moins cher',
    introParagrafen: [
      "Le prix par portion est une façon trompeuse de comparer les box repas. Factor semble le moins cher à 4,99 € la portion — mais avec 5,99 € de livraison par semaine, vous payez plus que chez Foodprepper (à partir de 4,75 €, livraison gratuite). Et Foodprepper, lui, ne livre pas en Wallonie. La vraie formule :",
    ],
    formule: 'prix par semaine = (portions × prix/portion) + frais de livraison',
    slotIntro:
      "Nous avons calculé le prix hebdomadaire pour deux personnes et trois repas (soit six portions) chez les sept fournisseurs, frais de livraison et offres de bienvenue compris. La colonne « Livre en Wallonie » indique lesquels sont réellement accessibles chez vous.",
    winnaar: {
      kop: '🏆 Le moins cher qui livre partout en Belgique',
      slug: 'hellofresh',
      naam: 'HelloFresh',
      prijsRegel: '47,94 €/semaine · livraison gratuite · livre en Wallonie',
      dealRegel: "Jusqu'à 60 € de réduction sur vos 3 premières box",
      alternatiefInleiding: 'Vous êtes en Flandre ou à Bruxelles et cherchez le prix par portion le plus bas ? →',
      alternatiefSlug: 'foodprepper',
      alternatiefLabel: 'Foodprepper : à partir de 4,75 €/portion',
    },
    prijsTabel: {
      kop: 'Comparatif : 2 personnes, 3 repas par semaine',
      subkop:
        'Calcul : 6 portions × prix/portion + frais de livraison. Classé par pertinence, pas uniquement par prix.',
      portiesPerWeek: 6,
      rijen: [
        { slug: 'hellofresh', badge: '⭐ Meilleur choix national' },
        { slug: 'ekomenu', badge: '🌱 Meilleur bio', noot: 'pas de livraison en Wallonie' },
        { slug: 'marley-spoon', badge: '🎯 Meilleure offre', noot: 'pas de livraison en Wallonie · + 5,99 € de livraison' },
        { slug: 'foodprepper', badge: '💸 Prix/portion le plus bas', noot: 'pas de livraison en Wallonie · min. 55 €' },
        { slug: 'factor', noot: '+ 5,99 € de livraison' },
        { slug: 'foodbag' },
        { slug: 'foodmaker' },
      ],
      voetnoot:
        "Prix indicatifs — vérifiez les tarifs actuels sur le site du fournisseur. Prix hebdomadaire calculé pour 2 personnes et 3 repas au tarif standard, hors réduction de bienvenue. Trois fournisseurs ne livrent pas en Wallonie : vérifiez votre code postal avant de comparer les prix.",
    },
    topKeuzes: {
      kop: 'Top 3 avec et sans offre de bienvenue',
      intro:
        "Les offres de bienvenue sont temporaires : elles ne valent que pour les nouveaux clients, sur les premières box. Voici la comparaison honnête — ce que vous payez avec l'offre, et ce que vous payez ensuite. Seul le premier de cette liste livre en Wallonie.",
      items: [
        {
          slug: 'hellofresh',
          badge: '⭐ Meilleur choix pour la plupart des gens',
          accent: '#1B4332',
          metDeal: "jusqu'à 60 € de réduction sur vos 3 premières box",
          naDeal: '47,94 €/semaine (tarif standard)',
          uitleg:
            "HelloFresh combine un grand choix (40+ recettes par semaine), la livraison gratuite, une offre de bienvenue solide et — ce qui compte ici — une livraison dans les trois régions. Répartition : 27,50 € sur la box 1, 10 € sur la box 2, 7,50 € sur la box 3. Aucun code à saisir. Résiliable chaque semaine, de 1 à 6 personnes.",
          dealOpmerking: "Jusqu'à 60 € sur vos 3 premières box · nouveaux clients · automatique via le lien · livre en Wallonie.",
        },
        {
          slug: 'ekomenu',
          badge: '🌱 Meilleur choix bio',
          accent: '#15803D',
          metDeal: '37,08 €/semaine',
          naDeal: '37,08 €/semaine (tarif standard)',
          uitleg:
            "Ekomenu est le box à cuisiner biologique le moins cher : 6,18 € la portion, livraison gratuite, sans frais supplémentaires. À 37,08 € par semaine pour deux personnes et trois repas, il se situe sous la plupart des box conventionnels. Résiliable chaque semaine. Réserve importante : la livraison s'arrête à la Flandre et à Bruxelles.",
          dealOpmerking: 'Ingrédients biologiques · livraison gratuite · pas de livraison en Wallonie.',
        },
        {
          slug: 'marley-spoon',
          badge: '🎯 Meilleure offre de bienvenue par portion',
          accent: '#7C3AED',
          metDeal: '~44 €/semaine en moyenne · box 1 à 25,99 € (50 % + livraison offerte)',
          naDeal: '58,01 €/semaine (tarif standard)',
          uitleg:
            "50 % + 20 % + 15 % + 10 % sur les quatre premières box rendent Marley Spoon particulièrement avantageux au démarrage : votre première box coûte 25,99 €, livraison comprise. Recettes de qualité chef, plus de 40 choix par semaine. Après la période de bienvenue : 52,02 €/semaine + 5,99 € de livraison. Livraison en Flandre et à Bruxelles uniquement.",
          dealOpmerking: 'Réduction automatique via le lien · 4 box · Flandre et Bruxelles uniquement.',
        },
      ],
    },
    verborgenKosten: {
      kop: 'Les coûts cachés à prendre en compte',
      items: [
        {
          icon: '📍',
          titel: 'La zone de livraison',
          tekst:
            "Le coût le plus élevé, c'est un box que vous ne pouvez pas commander. Marley Spoon, Foodprepper et Ekomenu ne livrent pas en Wallonie. Crowd Cooks couvre les grandes villes mais pas tout le territoire. Vérifiez votre code postal avant de comparer les prix.",
        },
        {
          icon: '📦',
          titel: 'Les frais de livraison',
          tekst:
            "Factor facture 5,99 € par livraison, Marley Spoon également — cela pèse sur une commande hebdomadaire. HelloFresh, Foodbag, Ekomenu et Foodprepper livrent gratuitement. Comparez toujours le prix par semaine, pas le prix par portion seul.",
        },
        {
          icon: '📈',
          titel: 'Le tarif après la période de bienvenue',
          tekst:
            "Les offres de bienvenue valent pour les nouveaux clients, sur les 3 à 5 premières box. Ensuite, le prix passe au tarif standard. Anticipez : mettez un rappel pour mettre en pause ou résilier si le tarif normal vous paraît élevé.",
        },
        {
          icon: '⏰',
          titel: 'Le délai de résiliation',
          tekst:
            "HelloFresh, Foodbag et Marley Spoon permettent de résilier ou mettre en pause jusqu'à 5 jours avant la livraison suivante. Passé ce délai, la box part quand même. Foodprepper et Foodmaker n'imposent aucun abonnement — donc aucun préavis.",
        },
      ],
    },
    faqKop: 'Questions fréquentes sur le prix',
    faq: [
      {
        q: 'Quel est le box repas le moins cher qui livre en Wallonie ?',
        a: "HelloFresh, à 47,94 € par semaine pour deux personnes et trois repas, livraison gratuite comprise, et avec une réduction de bienvenue allant jusqu'à 60 €. Factor affiche un prix par portion plus bas (4,99 €) mais facture 5,99 € de livraison, ce qui donne 35,93 € par semaine — moins cher, mais il s'agit de plats prêts et non d'un box à cuisiner.",
      },
      {
        q: 'Foodprepper est-il vraiment le moins cher ?',
        a: "Au prix par portion, oui : à partir de 4,75 € avec livraison gratuite, soit 28,50 € par semaine. Mais Foodprepper ne livre qu'en Flandre et à Bruxelles, et impose un minimum de commande de 55 €. Si vous habitez en Wallonie, ce prix ne vous concerne pas.",
      },
      {
        q: 'Combien coûte un box repas par mois en Belgique ?',
        a: "Pour un couple avec trois repas par semaine, comptez en moyenne 130 à 145 € par mois chez HelloFresh ou Marley Spoon au tarif standard. La réduction de bienvenue HelloFresh, jusqu'à 60 € sur les trois premières box, allège nettement les premières semaines. Foodbag est plus cher : environ 228 € par mois au tarif normal.",
      },
      {
        q: 'Quand un box repas devient-il moins cher que les courses ?',
        a: "Si vous jetez régulièrement des ingrédients, faites des achats impulsifs au supermarché ou commandez souvent à emporter. Les quantités exactes suppriment presque tout le gaspillage. En comptant aussi les trajets et le temps, l'écart se resserre encore.",
      },
    ],
    perSituatie: {
      kop: 'Le moins cher selon votre situation',
      items: [
        {
          situatie: 'Vous habitez en Wallonie',
          winnaarNaam: 'HelloFresh',
          slug: 'hellofresh',
          detail:
            "47,94 €/semaine au tarif standard, livraison gratuite, et jusqu'à 60 € de réduction sur les trois premières box. C'est le box à cuisiner le moins cher qui dessert réellement le sud du pays. Foodbag est l'alternative si vous voulez du belge et local.",
          achtergrond: '#F0FDF4',
          rand: '#BBF7D0',
        },
        {
          situatie: 'Vous habitez en Flandre ou à Bruxelles',
          winnaarNaam: 'Foodprepper',
          slug: 'foodprepper',
          detail:
            "À partir de 4,75 €/portion avec livraison gratuite, soit 28,50 €/semaine — le prix le plus bas du comparatif. Sans abonnement obligatoire, minimum de commande de 55 €, et prêt en quinze minutes.",
          achtergrond: '#EEF2FF',
          rand: '#C7D2FE',
        },
        {
          situatie: 'Vous cherchez du bio au meilleur prix',
          winnaarNaam: 'Ekomenu',
          slug: 'ekomenu',
          detail:
            "37,08 €/semaine, livraison gratuite, tout certifié biologique — moins cher que plusieurs box non bio. Uniquement en Flandre et à Bruxelles ; en Wallonie, aucun box entièrement bio n'est disponible.",
          achtergrond: '#FFF7ED',
          rand: '#FED7AA',
        },
        {
          situatie: 'Vous ne voulez aucun abonnement',
          winnaarNaam: 'Foodmaker',
          slug: 'foodmaker',
          detail:
            "Livraison gratuite dans tout le pays, aucun abonnement, minimum de commande de 39,90 €. Vous commandez quand cela vous arrange. Foodbag permet aussi la commande ponctuelle et livre partout.",
          achtergrond: '#F5F3FF',
          rand: '#DDD6FE',
        },
      ],
    },
  },
};
