import type { Aanbieder } from '../aanbieders';

/**
 * Franse teksten per aanbieder.
 *
 * Dit is bewust GEEN vertaling van de Nederlandse tekst. De Franstalige lezer
 * zit grotendeels in Wallonië en Brussel, en daar geldt een ander verhaal:
 * Marley Spoon, Foodprepper en Ekomenu leveren niet in Wallonië. Een letterlijk
 * vertaalde pagina zou die lezer boxen aanraden die hij niet kan bestellen —
 * en zou voor Google bovendien duplicate content zijn van de Nederlandse versie.
 *
 * Alleen tekstvelden staan hier. Prijzen, scores, bezorgkosten, status en
 * affiliate-links komen uit aanbieders.ts en zijn taalonafhankelijk.
 */

/** De tekstvelden die per taal verschillen. */
export type AanbiederTeksten = Pick<
  Aanbieder,
  | 'tagline'
  | 'beschrijving'
  | 'uitgebreideReview'
  | 'kenmerken'
  | 'pros'
  | 'cons'
  | 'besteVoor'
  | 'opzegTermijn'
> &
  Partial<Pick<Aanbieder, 'seoTitle' | 'seoDescription' | 'ctaSubtekst' | 'ctaTekst' | 'ctaTekst2' | 'kortingsCode' | 'badge'>>;

export const aanbiedersFr: Record<string, AanbiederTeksten> = {
  hellofresh: {
    tagline: 'Leader du marché — livre partout en Belgique, Wallonie comprise',
    beschrijving:
      "HelloFresh est le box repas le plus utilisé en Belgique, et l'un des rares à livrer dans les trois régions. Avec plus de 40 recettes par semaine, la livraison gratuite et un abonnement que vous pouvez mettre en pause chaque semaine, c'est le point de départ le plus sûr si vous habitez en Wallonie.",
    opzegTermijn: "5 jours avant la livraison",
    uitgebreideReview: {
      intro:
        "Si vous cherchez un box repas en Wallonie, la liste des candidats est plus courte qu'il n'y paraît : sur les huit fournisseurs actifs en Belgique, trois ne livrent qu'en Flandre et à Bruxelles. HelloFresh fait partie de ceux qui couvrent tout le territoire, et c'est en grande partie ce qui explique sa position.",
      testervaring:
        "Les retours d'utilisateurs sont constants sur la livraison : colis réfrigéré, bien emballé, à l'heure. Les fiches recettes sont claires, avec photos et étapes numérotées, et existent en français — un point qui n'est pas acquis chez tous les concurrents. Comptez 25 à 40 minutes de préparation. Le reproche qui revient : davantage d'emballage plastique que chez les acteurs locaux.",
      voorWie:
        "HelloFresh convient aux couples, aux familles et aux personnes seules qui veulent varier sans y consacrer une soirée. La variété (40+ recettes) permet de composer autour des goûts de chacun. Moins indiqué si vous tenez au circuit court ou au bio : l'approvisionnement est international, ce qui explique aussi le prix.",
      hoeWerktHet:
        "Vous composez votre box sur hellofresh.be : nombre de personnes (1 à 6) et nombre de repas par semaine (3 à 5). Chaque semaine, vous choisissez vous-même vos recettes parmi l'offre. La livraison est gratuite et plusieurs jours sont proposés. Pause ou résiliation jusqu'à 5 jours avant la livraison suivante.",
      vergelijking:
        "Face à Foodbag, HelloFresh est moins cher mais moins local — les deux livrent en Wallonie. Marley Spoon propose des recettes plus travaillées mais ne livre pas au sud du pays, ce qui le sort d'office de la comparaison pour une grande partie des lecteurs francophones. Pour un premier essai avec réduction, HelloFresh reste l'option la plus accessible.",
      eindoordeel:
        "HelloFresh mérite sa première place, et davantage encore pour un lecteur wallon : c'est la combinaison la plus complète de couverture nationale, de choix et de prix. La réduction de bienvenue rend le test peu risqué.",
    },
    kenmerken: ['✓ Livraison gratuite', '✓ Résiliable chaque semaine', '✓ 40+ recettes/semaine', '✓ Livre en Wallonie'],
    pros: [
      "Livre dans toute la Belgique, Wallonie comprise",
      'Le plus grand choix de recettes (40+ par semaine)',
      'Livraison gratuite',
      'Pause et résiliation flexibles',
      'Fiches recettes et service client en français',
    ],
    cons: [
      'Ingrédients non belges',
      'Plus de plastique que chez les acteurs locaux',
      'Prix standard élevé après la période de bienvenue',
    ],
    besteVoor: 'le meilleur choix global, surtout en Wallonie',
    ctaSubtekst: "jusqu'à 60 € de réduction sur vos 3 premières box — appliqué automatiquement via notre lien",
    seoTitle: 'HelloFresh avis (2026) : que vaut-il vraiment en Belgique ?',
    seoDescription:
      "Notre avis sur HelloFresh en Belgique : prix, choix de recettes, livraison en Wallonie et flexibilité. Comparé aux alternatives qui livrent au sud du pays.",
  },

  foodbag: {
    tagline: 'Ingrédients belges en circuit court — livre aussi en Wallonie',
    beschrijving:
      "Foodbag travaille avec des producteurs belges et livre dans tout le pays, Wallonie comprise. C'est le choix des lecteurs qui veulent manger local sans renoncer à la livraison à domicile. Plus cher que la moyenne, ce que la filière courte explique en partie.",
    opzegTermijn: 'aucun abonnement obligatoire',
    uitgebreideReview: {
      intro:
        "Foodbag appartient au groupe Colruyt et mise sur une chaîne d'approvisionnement courte : les ingrédients viennent de fermes belges. Pour un lecteur wallon, c'est surtout l'un des rares acteurs vraiment locaux qui livrent au sud du pays.",
      testervaring:
        "La fraîcheur est le point fort qui revient le plus souvent, en particulier sur les légumes et la viande. Les livreurs sont internes, ce qui se voit sur la régularité des créneaux. Comptez 25 à 35 minutes en cuisine. Le prix par portion est parmi les plus élevés du marché : c'est le compromis assumé.",
      voorWie:
        "Pour qui veut manger belge et local, et accepte de payer davantage pour cela. Les cinq styles de cuisine, dont la ligne Sana, laissent de la marge si les goûts divergent dans le ménage. Moins indiqué si le budget est le critère principal.",
      hoeWerktHet:
        "Vous commandez sur foodbag.be sans abonnement obligatoire : vous passez commande quand cela vous arrange. La livraison est gratuite, du vendredi au lundi, partout en Belgique. Vous choisissez chaque semaine parmi les recettes disponibles.",
      vergelijking:
        "Foodbag est plus cher que HelloFresh mais nettement plus local. Face à Foodprepper, qui appartient au même groupe, la différence est le temps : Foodprepper vise 15 minutes, Foodbag une vraie séance de cuisine — mais Foodprepper ne livre pas en Wallonie, ce qui tranche la question pour beaucoup de lecteurs.",
      eindoordeel:
        "Le meilleur compromis pour qui veut du belge et du frais avec une livraison nationale. Le prix reste le principal frein.",
    },
    kenmerken: ['🇧🇪 Ingrédients belges', '✓ Livraison gratuite', '✓ Sans abonnement', '✓ Livre en Wallonie'],
    pros: [
      'Ingrédients belges en circuit court',
      'Livre dans toute la Belgique, Wallonie comprise',
      'Aucun abonnement obligatoire',
      'Livreurs internes, créneaux fiables',
      'Cinq styles de cuisine',
    ],
    cons: ['Prix par portion élevé', 'Moins de recettes par semaine que HelloFresh'],
    besteVoor: 'manger belge et local avec livraison nationale',
    ctaSubtekst: '3 × 20 € de réduction · appliqué automatiquement via notre lien',
    seoTitle: 'Foodbag avis (2026) : le box repas belge en circuit court',
    seoDescription:
      "Notre avis sur Foodbag : ingrédients belges, livraison gratuite dans tout le pays et sans abonnement. Prix, qualité et comparaison avec les alternatives.",
  },

  'marley-spoon': {
    tagline: 'Recettes de chef — mais pas de livraison en Wallonie',
    beschrijving:
      "Marley Spoon propose les recettes les plus travaillées de notre comparatif. Attention toutefois : la livraison est limitée à la Flandre et à Bruxelles. Si vous habitez en Wallonie, ce fournisseur n'est pas une option.",
    opzegTermijn: '5 jours avant la livraison',
    uitgebreideReview: {
      intro:
        "Disons-le d'emblée : Marley Spoon ne livre pas en Wallonie. Si vous habitez au sud du pays, cet avis n'a d'intérêt que pour comprendre ce que vous ne pouvez pas commander. À Bruxelles, en revanche, l'offre est disponible et vaut le détour.",
      testervaring:
        "C'est la meilleure note de goût de notre comparatif. Les recettes demandent plus de technique et davantage de temps — 45 à 60 minutes plutôt que 30 — mais le résultat s'en ressent. Les mélanges d'épices et la qualité des produits se situent au-dessus de la moyenne. Frais de livraison de 5,99 € par commande, à intégrer au calcul.",
      voorWie:
        "Pour les Bruxellois et les Flamands qui considèrent la cuisine comme un moment en soi. À éviter si vous cherchez la rapidité, si le budget est serré, ou si vous habitez en Wallonie — la livraison n'y est tout simplement pas proposée.",
      hoeWerktHet:
        "Commande sur marleyspoon.be, choix des recettes chaque semaine, pause ou résiliation jusqu'à 5 jours avant la livraison. Les frais de port de 5,99 € s'ajoutent au prix par portion.",
      vergelijking:
        "Marley Spoon bat HelloFresh sur le goût et la profondeur culinaire, mais perd sur le prix, la livraison et la couverture géographique. Pour un lecteur francophone hors Bruxelles, la comparaison s'arrête à la zone de livraison.",
      eindoordeel:
        "Excellent produit, disponibilité limitée. À Bruxelles, c'est le choix des amateurs de cuisine. En Wallonie, tournez-vous vers Foodbag ou HelloFresh.",
    },
    kenmerken: ['👨‍🍳 Recettes de chef', '⚠️ Pas de livraison en Wallonie', '✓ 40+ recettes/semaine', '+ 5,99 € de livraison'],
    pros: [
      'La meilleure note de goût du comparatif',
      'Recettes plus travaillées et plus variées',
      'Grand choix hebdomadaire',
    ],
    cons: [
      'Ne livre pas en Wallonie — Flandre et Bruxelles uniquement',
      'Frais de livraison de 5,99 € par commande',
      'Temps de préparation plus long (45 à 60 minutes)',
    ],
    besteVoor: 'les amateurs de cuisine à Bruxelles et en Flandre',
    ctaSubtekst: 'réduction appliquée automatiquement via notre lien · vérifiez votre code postal',
    seoTitle: 'Marley Spoon avis (2026) : livre-t-il en Wallonie ?',
    seoDescription:
      "Marley Spoon ne livre qu'en Flandre et à Bruxelles. Notre avis complet : qualité des recettes, prix, frais de livraison et alternatives pour la Wallonie.",
  },

  foodprepper: {
    tagline: 'Prêt en 15 minutes — Flandre et Bruxelles uniquement',
    beschrijving:
      "Foodprepper livre des ingrédients déjà préparés : légumes précuits, viande marinée, sauces prêtes. Vous assemblez en un quart d'heure. La livraison est toutefois limitée à la Flandre et à Bruxelles — pas de Wallonie.",
    opzegTermijn: 'aucun abonnement obligatoire',
    uitgebreideReview: {
      intro:
        "Foodprepper est la formule la plus rapide du marché belge, mais sa zone de livraison couvre uniquement la Flandre et la Région de Bruxelles-Capitale. Pour un lecteur wallon, c'est rédhibitoire ; pour un Bruxellois pressé, c'est probablement le meilleur rapport temps-qualité.",
      testervaring:
        "Le gain de temps est réel : le travail de découpe et de marinade est déjà fait, il reste à cuire et assembler. Quinze minutes suffisent, sans planche à découper ni vaisselle en pile. La contrepartie est un menu plus restreint que chez HelloFresh, et une offre qui change d'une semaine à l'autre.",
      voorWie:
        "Pour les Bruxellois et Flamands qui disposent de peu de temps en semaine et veulent aussi couvrir le petit-déjeuner et le midi via un seul fournisseur. Sans objet si vous habitez en Wallonie.",
      hoeWerktHet:
        "Commande sur foodprepper.be sans abonnement obligatoire, avec un minimum de commande de 55 €. La livraison est gratuite. Vous commandez ponctuellement ou chaque semaine, à votre rythme.",
      vergelijking:
        "Foodprepper et Foodbag appartiennent au même groupe mais visent des usages opposés : quinze minutes contre une vraie séance de cuisine. Foodbag livre en Wallonie, Foodprepper non — ce qui tranche pour une bonne partie des lecteurs francophones.",
      eindoordeel:
        "Le choix le plus efficace pour Bruxelles et la Flandre. En Wallonie, il faut se tourner vers Factor pour du prêt-à-réchauffer ou vers Foodbag pour du frais à cuisiner.",
    },
    kenmerken: ['⚡ Prêt en 15 minutes', '⚠️ Pas de livraison en Wallonie', '✓ Sans abonnement', '✓ Livraison gratuite'],
    pros: [
      'La formule la plus rapide : 15 minutes',
      'Aucun abonnement, aucun préavis',
      'Livraison gratuite',
      'Couvre aussi petit-déjeuner et déjeuner',
    ],
    cons: [
      'Ne livre pas en Wallonie — Flandre et Bruxelles uniquement',
      'Menu plus restreint que la concurrence',
      'Minimum de commande de 55 €',
    ],
    besteVoor: 'les soirées pressées à Bruxelles et en Flandre',
    ctaSubtekst: '3 × 15 € de réduction · appliqué automatiquement via notre lien',
    seoTitle: 'Foodprepper avis (2026) : livre-t-il en Wallonie ?',
    seoDescription:
      "Foodprepper prépare vos repas en 15 minutes, mais ne livre qu'en Flandre et à Bruxelles. Notre avis : prix, qualité et alternatives pour la Wallonie.",
  },

  factor: {
    tagline: 'Plats prêts à réchauffer — livrés partout en Belgique',
    beschrijving:
      "Factor livre des plats déjà cuisinés qu'il suffit de réchauffer : aucune préparation, aucune vaisselle. La livraison couvre toute la Belgique, ce qui en fait l'une des rares options prêtes à consommer accessibles en Wallonie.",
    opzegTermijn: 'résiliable chaque semaine',
    uitgebreideReview: {
      intro:
        "Factor ne relève pas vraiment du box repas classique : rien n'est à cuisiner. Les plats arrivent préparés et se réchauffent en quelques minutes. Pour un lecteur wallon, l'intérêt principal est la couverture nationale — la plupart des concurrents rapides s'arrêtent à Bruxelles.",
      testervaring:
        "Les portions sont correctes et les plats tiennent la route pour du prêt-à-réchauffer. Le choix hebdomadaire est plus limité que chez les box à cuisiner, avec une rotation par styles diététiques. Des frais de livraison de 5,99 € s'ajoutent, ce qui change le calcul par rapport au prix par portion affiché.",
      voorWie:
        "Pour qui n'a ni le temps ni l'envie de cuisiner, ou pour les semaines chargées. Moins indiqué si vous cherchez le plaisir de cuisiner ou une grande variété.",
      hoeWerktHet:
        "Vous choisissez vos plats sur le site, ils arrivent prêts. Réchauffage au micro-ondes ou au four. Résiliation ou pause possible chaque semaine.",
      vergelijking:
        "Face à Foodprepper, Factor va plus loin : il n'y a rien à assembler. Et surtout, Factor livre en Wallonie alors que Foodprepper non. Face à HelloFresh, c'est un usage différent : gain de temps maximal contre plaisir de cuisiner.",
      eindoordeel:
        "La meilleure option prête à consommer disponible partout en Belgique. Pensez à intégrer les frais de livraison dans votre comparaison.",
    },
    kenmerken: ['⚡ Aucun temps de cuisson', '✓ Livre partout en Belgique', '✓ Résiliable chaque semaine', '+ 5,99 € de livraison'],
    pros: [
      'Aucune préparation nécessaire',
      'Livre dans toute la Belgique, Wallonie comprise',
      'Résiliable chaque semaine',
      'Plusieurs styles diététiques',
    ],
    cons: [
      'Frais de livraison de 5,99 € par commande',
      'Choix hebdomadaire limité',
      "Aucune expérience de cuisine",
    ],
    besteVoor: 'manger sans cuisiner, partout en Belgique',
    ctaSubtekst: '40 % de réduction sur votre première box · appliqué automatiquement via notre lien',
    seoTitle: 'Factor avis (2026) : des plats prêts livrés en Wallonie',
    seoDescription:
      "Notre avis sur Factor : plats prêts à réchauffer, livrés dans toute la Belgique. Prix par portion, frais de livraison et comparaison avec les box à cuisiner.",
  },

  'crowd-cooks': {
    tagline: 'Plats belges préparés par des chefs — large couverture wallonne',
    beschrijving:
      "Crowd Cooks prépare des plats belges à réchauffer, avec de grosses portions. La livraison couvre Bruxelles, le Brabant wallon, Liège, Charleroi et Namur, en plus de la Flandre — une couverture wallonne bien plus large que la moyenne des concurrents rapides.",
    opzegTermijn: 'résiliable chaque semaine',
    uitgebreideReview: {
      intro:
        "Crowd Cooks est un service belge de plats préparés par des chefs. Ce qui le distingue pour un lecteur francophone : la zone de livraison inclut explicitement Liège, Charleroi, Namur et le Brabant wallon, là où plusieurs concurrents s'arrêtent à Bruxelles.",
      testervaring:
        "Les portions sont généreuses — plus de 450 grammes — et les plats restent dans un registre belge reconnaissable. Douze nouveaux plats par semaine, livrés le dimanche ou le lundi, ce qui convient bien à qui planifie la semaine à l'avance. Les frais de livraison de 4,90 € sont à prévoir.",
      voorWie:
        "Pour qui veut du belge sans cuisiner, avec de vraies portions. Le créneau du dimanche ou lundi suppose toutefois d'anticiper : ce n'est pas une solution de dernière minute.",
      hoeWerktHet:
        "Vous composez votre commande en ligne et recevez les plats prêts le dimanche ou le lundi. Rien à cuisiner, seulement à réchauffer. Résiliable chaque semaine.",
      vergelijking:
        "Face à Factor, Crowd Cooks est plus belge et plus copieux, mais son créneau de livraison est plus rigide. Face à Foodbag, la différence est simple : ici, vous ne cuisinez pas.",
      eindoordeel:
        "Une bonne option pour les grandes villes wallonnes si vous cherchez du prêt-à-réchauffer belge. Vérifiez votre code postal avant de commander.",
    },
    kenmerken: ['🇧🇪 Plats belges', '✓ Grosses portions (450 g+)', '✓ Liège, Charleroi, Namur', '+ 4,90 € de livraison'],
    pros: [
      'Livre dans les grandes villes wallonnes',
      'Portions généreuses de plus de 450 g',
      'Plats belges préparés par des chefs',
      'Aucune cuisson nécessaire',
    ],
    cons: [
      'Livraison le dimanche ou le lundi uniquement',
      'Frais de livraison de 4,90 €',
      'Couverture partielle — vérifiez votre code postal',
    ],
    besteVoor: 'des plats belges prêts, dans les grandes villes wallonnes',
    ctaSubtekst: "jusqu'à 60 € de réduction · le code s'affiche sur la page de commande",
    seoTitle: 'Crowd Cooks avis (2026) : livraison à Liège, Charleroi et Namur',
    seoDescription:
      "Notre avis sur Crowd Cooks : plats belges prêts à réchauffer, livrés dans les grandes villes wallonnes. Portions, prix et zone de livraison détaillée.",
  },

  foodmaker: {
    tagline: 'Qualité artisanale anversoise — livrée dans toute la Belgique',
    beschrijving:
      "Foodmaker prépare des plats à réchauffer à Anvers, avec une collaboration signée Jeroen Meus. La livraison est gratuite dans tout le pays, Wallonie comprise, et il n'y a pas d'abonnement obligatoire.",
    opzegTermijn: 'aucun abonnement obligatoire',
    uitgebreideReview: {
      intro:
        "Foodmaker est un acteur belge de plats préparés, basé à Anvers. Pour le lecteur francophone, deux éléments comptent : la livraison gratuite partout en Belgique et l'absence d'abonnement, ce qui permet de tester sans engagement.",
      testervaring:
        "L'offre est large pour du prêt-à-réchauffer — une trentaine de plats par semaine — et inclut une gamme entièrement végane. La qualité est constante, avec un positionnement artisanal assumé. Minimum de commande de 39,90 €.",
      voorWie:
        "Pour qui veut de la qualité belge sans cuisiner ni s'engager. Convient bien aux personnes seules et aux ménages au rythme irrégulier, puisque rien n'oblige à commander chaque semaine.",
      hoeWerktHet:
        "Vous commandez quand cela vous arrange, sans abonnement. Livraison gratuite dans toute la Belgique, minimum 39,90 € par commande. Les plats se réchauffent en quelques minutes.",
      vergelijking:
        "Face à Factor, Foodmaker est plus belge et livre gratuitement, mais impose un minimum de commande. Face à Crowd Cooks, la couverture nationale est plus large et les créneaux plus souples.",
      eindoordeel:
        "Une valeur sûre si vous cherchez du belge prêt à réchauffer sans engagement, où que vous habitiez dans le pays.",
    },
    kenmerken: ['👨‍🍳 Recettes Jeroen Meus', '🇧🇪 Artisanal belge', '✓ Sans abonnement', '✓ Livraison gratuite nationale'],
    pros: [
      'Livraison gratuite dans toute la Belgique',
      'Aucun abonnement obligatoire',
      'Gamme végane complète',
      'Une trentaine de plats par semaine',
    ],
    cons: ['Minimum de commande de 39,90 €', 'Aucune réduction de bienvenue permanente', 'Prix par portion élevé'],
    besteVoor: 'du belge prêt à réchauffer, sans engagement',
    seoTitle: 'Foodmaker avis (2026) : plats belges livrés partout en Belgique',
    seoDescription:
      "Notre avis sur Foodmaker : plats préparés à Anvers, livraison gratuite nationale et sans abonnement. Prix, choix et gamme végane.",
  },

  ekomenu: {
    tagline: '100 % bio et végétal — Flandre et Bruxelles uniquement',
    beschrijving:
      "Ekomenu est le seul box entièrement biologique et végétal de Belgique. La livraison se limite toutefois à la Flandre et à Bruxelles : la Wallonie n'est pas desservie.",
    opzegTermijn: 'résiliable chaque semaine',
    uitgebreideReview: {
      intro:
        "Ekomenu occupe une niche que personne d'autre ne couvre en Belgique : 100 % bio et 100 % végétal. Le problème pour une partie de nos lecteurs est simple : la livraison ne dépasse pas la Flandre et Bruxelles.",
      testervaring:
        "Les ingrédients sont certifiés biologiques et la qualité des légumes s'en ressent. Le prix par portion est plus bas que chez plusieurs concurrents non bio, ce qui surprend. L'offre hebdomadaire est plus restreinte, logique pour une gamme entièrement végétale.",
      voorWie:
        "Pour les Bruxellois et Flamands qui mangent végétal et tiennent au bio, sans vouloir filtrer les recettes chaque semaine. Sans objet en Wallonie.",
      hoeWerktHet:
        "Commande sur ekomenu.be, livraison gratuite en Flandre et à Bruxelles, résiliable chaque semaine.",
      vergelijking:
        "Aucun concurrent belge ne propose une offre entièrement bio et végétale. La vraie comparaison porte donc sur la zone de livraison : en Wallonie, il faut se rabattre sur les options végétariennes de HelloFresh ou la ligne veggie de Foodbag.",
      eindoordeel:
        "Le meilleur choix végétal du pays, mais uniquement si vous habitez en Flandre ou à Bruxelles.",
    },
    kenmerken: ['🌱 100 % bio et végétal', '⚠️ Pas de livraison en Wallonie', '✓ Livraison gratuite', '✓ Résiliable chaque semaine'],
    pros: [
      'Seul box 100 % bio et végétal de Belgique',
      'Prix par portion inférieur à plusieurs concurrents',
      'Livraison gratuite',
    ],
    cons: [
      'Ne livre pas en Wallonie — Flandre et Bruxelles uniquement',
      'Offre hebdomadaire restreinte',
      'Aucune réduction de bienvenue permanente',
    ],
    besteVoor: 'manger bio et végétal à Bruxelles ou en Flandre',
    seoTitle: 'Ekomenu avis (2026) : le box bio et végétal livre-t-il en Wallonie ?',
    seoDescription:
      "Ekomenu est le seul box 100 % bio et végétal de Belgique, mais ne livre qu'en Flandre et à Bruxelles. Notre avis et les alternatives pour la Wallonie.",
  },

  'carrefour-simply-you': {
    tagline: 'Service arrêté en 2026',
    beschrijving:
      "Carrefour a mis fin à son service Simply You Box en 2026. Cette page reste en ligne pour les lecteurs qui cherchent encore ce nom et sont redirigés vers des alternatives disponibles.",
    opzegTermijn: 'service arrêté',
    uitgebreideReview: {
      intro: "Le service Simply You Box de Carrefour n'est plus disponible en Belgique depuis 2026.",
      testervaring: "Aucune évaluation actuelle possible : le service a été arrêté.",
      voorWie: "Sans objet — voyez les alternatives ci-dessous.",
      hoeWerktHet: "Le service n'est plus proposé.",
      vergelijking:
        "Pour un profil comparable et une livraison nationale, HelloFresh et Foodbag sont les remplaçants les plus proches.",
      eindoordeel: "Service arrêté. Tournez-vous vers HelloFresh ou Foodbag.",
    },
    kenmerken: ['⚠️ Service arrêté en 2026'],
    pros: [],
    cons: ['Service arrêté — plus de commande possible'],
    besteVoor: 'service arrêté',
    seoTitle: 'Carrefour Simply You Box : service arrêté — les alternatives',
    seoDescription:
      "La Simply You Box de Carrefour a été arrêtée en 2026. Voici les box repas comparables qui livrent toujours en Belgique.",
  },
};
