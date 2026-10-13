import type { FactorVergelijking } from '../factorVergelijkingen';

/**
 * Franse teksten voor de Factor-vergelijkpagina's. Geschreven voor een lezer
 * in Wallonië of Brussel: waar een kookbox daar niet levert, staat dat erbij.
 * Slugs en cijfers komen uit factorVergelijkingen.ts en aanbieders.ts.
 */
export const factorVergelijkingenFr: Record<string, Partial<FactorVergelijking>> = {
  'factor-vs-hellofresh': {
    seoTitle: 'Factor ou HelloFresh 2026 : réchauffer ou cuisiner ?',
    seoDescription: 'Factor (plats préparés) ou HelloFresh (box à cuisiner) : prix, facilité, variété et pour qui chacun convient le mieux. Une comparaison honnête : tout dépend de votre envie de cuisiner.',
    kookboxKooktijd: '25–40 min',
    kookboxLevergebied: 'Toute la Belgique',
    intro: [
      "Factor et HelloFresh répondent tous deux à la question « qu'est-ce qu'on mange ce soir ? », mais de façon très différente. Avec HelloFresh, vous cuisinez vous-même des ingrédients frais ; avec Factor, vous réchauffez un plat préparé en 2 à 3 minutes. Cette différence détermine lequel vous convient.",
      "HelloFresh est notre numéro 1 et obtient une meilleure note globale (8,4 contre 7,8) : plus de variété (80+ recettes par semaine) et une solide offre de bienvenue. Factor mise sur la facilité maximale : rien à cuisiner, prêt en quelques minutes, avec cinq styles alimentaires comme High-Protein et Calorie-Conscious.",
      'La question clé est simple : avez-vous envie de cuisiner ou non ?',
    ],
    kiesFactorAls: [
      "Vous n'avez ni le temps ni l'envie de cuisiner et voulez manger tout de suite",
      'Vous voulez manger sainement avec des valeurs nutritionnelles fixes (High-Protein, Calorie-Conscious)',
      "Votre agenda est chargé et la facilité compte plus que le plaisir de cuisiner",
      'Vous cherchez le prix par portion le plus bas (4,99 €), en comptant les 5,99 € de livraison',
    ],
    kiesKookboxAls: [
      'Vous aimez cuisiner et le plaisir de cuisiner compte pour vous',
      'Vous voulez beaucoup de variété : plus de 80 recettes par semaine',
      'Vous cherchez le box le mieux noté (8,4/10 dans notre test)',
    ],
    verdictTekst: "Il n'y a pas de gagnant absolu : tout dépend de votre envie de cuisiner. HelloFresh obtient une meilleure note globale et convient mieux à ceux qui aiment cuisiner, veulent de la variété et une bonne offre de bienvenue. Factor est le meilleur choix si vous ne voulez pas cuisiner : prêt en 2 à 3 minutes, avec des styles alimentaires pour les sportifs et ceux qui surveillent leurs calories. Les deux livrent dans toute la Belgique, Wallonie comprise. Vous aimez cuisiner ? HelloFresh. Vous voulez juste réchauffer ? Factor.",
    faq: [
      { q: 'Quelle est la différence entre Factor et HelloFresh ?', a: 'Factor est un service de plats préparés : les repas arrivent frais et cuisinés, vous les réchauffez en 2 à 3 minutes. HelloFresh est un box à cuisiner classique : vous recevez des ingrédients frais et une recette, et vous cuisinez en 25 à 40 minutes.' },
      { q: 'Lequel est le moins cher : Factor ou HelloFresh ?', a: "Factor a le prix par portion le plus bas (dès 4,99 €), mais facture 5,99 € de livraison. HelloFresh coûte dès 7,92 € par portion, avec aussi 5,99 € de livraison par box (la première livraison est offerte) et jusqu'à 70 € de réduction de bienvenue. Calculez votre prix total : prix par portion × portions + livraison − réduction." },
      { q: 'Lequel obtient la meilleure note dans votre test ?', a: "HelloFresh obtient 8,4/10 et se classe n° 1 ; Factor obtient 7,8/10 et se classe n° 5. Ce sont toutefois deux catégories différentes, box à cuisiner et plats préparés : comparez surtout sur ce qui compte pour vous, cuisiner ou réchauffer." },
      { q: 'Puis-je résilier les deux quand je veux ?', a: 'Oui. Factor et HelloFresh fonctionnent tous deux avec un abonnement flexible que vous pouvez modifier, suspendre ou résilier chaque semaine.' },
      { q: 'Livrent-ils en Wallonie ?', a: 'Oui. Factor et HelloFresh livrent tous les deux dans toute la Belgique, Wallonie comprise.' },
    ],
  },
  'factor-vs-foodbag': {
    seoTitle: 'Factor ou Foodbag 2026 : plats préparés ou cuisine belge ?',
    seoDescription: 'Factor (à réchauffer) ou Foodbag (box à cuisiner belge) : prix, goût, ingrédients locaux et pour qui chacun convient le mieux. Une comparaison honnête.',
    kookboxKooktijd: '25–35 min',
    kookboxLevergebied: 'Toute la Belgique',
    intro: [
      "Factor et Foodbag représentent deux approches : réchauffer, ou cuisiner avec des ingrédients belges et locaux. Foodbag (groupe Colruyt) est notre meilleur box à cuisiner belge ; Factor est un service de plats préparés du groupe HelloFresh.",
      "Foodbag obtient une meilleure note globale (8,1 contre 7,8) et se distingue par le goût et des ingrédients frais et locaux, avec la meilleure note de goût de notre test, à égalité avec Marley Spoon (8,6). Factor mise sur la facilité : rien à cuisiner, cinq styles alimentaires et un prix par portion plus bas.",
      'Vous voulez cuisiner belge en connaissance de cause, ou simplement réchauffer un repas sain ?',
    ],
    kiesFactorAls: [
      "Vous n'avez ni le temps ni l'envie de cuisiner et voulez manger tout de suite",
      'Vous voulez manger sainement avec des valeurs nutritionnelles fixes (High-Protein, Calorie-Conscious)',
      'Vous cherchez le prix par portion le plus bas (4,99 € contre 8,43 €)',
      "La rapidité et la facilité comptent plus que l'origine locale",
    ],
    kiesKookboxAls: [
      'Vous voulez manger local et belge, avec des ingrédients frais',
      'Le goût et la fraîcheur comptent avant tout pour vous',
      'Vous aimez cuisiner et choisir parmi 5 styles de cuisine (dont la ligne Sana de Sandra Bekkari)',
      'Vous voulez la livraison gratuite dans toute la Belgique, Wallonie comprise',
    ],
    verdictTekst: "Il n'y a pas de gagnant absolu : tout dépend de votre envie de cuisiner. Foodbag obtient une meilleure note globale et convient mieux à ceux qui veulent cuisiner frais et belge, avec un excellent goût et des ingrédients locaux. Factor est le meilleur choix si vous ne voulez pas cuisiner : prêt en quelques minutes, avec des styles alimentaires et un prix par portion plus bas. Les deux livrent en Wallonie. Vous aimez cuisiner et le local ? Foodbag. Vous voulez juste réchauffer ? Factor.",
    faq: [
      { q: 'Quelle est la différence entre Factor et Foodbag ?', a: "Factor, ce sont des plats préparés à réchauffer en 2 à 3 minutes. Foodbag est un box à cuisiner classique avec des ingrédients frais et locaux belges, que vous préparez en 25 à 35 minutes. Foodbag appartient au groupe Colruyt, Factor au groupe HelloFresh." },
      { q: 'Lequel est le moins cher : Factor ou Foodbag ?', a: "Factor a un prix par portion bien plus bas (dès 4,99 € contre 8,43 € chez Foodbag), mais facture 5,99 € de livraison ; Foodbag livre gratuitement. Foodbag offre 60 € de réduction aux nouveaux clients, appliquée automatiquement via notre lien. Calculez votre prix total, livraison comprise." },
      { q: 'Lequel a le meilleur goût ?', a: "Foodbag obtient une meilleure note de goût dans notre test (8,6 contre 7,8), grâce à des ingrédients frais et locaux que vous cuisinez vous-même. Factor est étonnamment bon pour un plat à réchauffer, mais n'atteint pas la fraîcheur d'un repas cuisiné." },
      { q: 'Puis-je les utiliser sans abonnement ?', a: 'Chez Foodbag, vous pouvez commander ponctuellement, sans abonnement obligatoire. Factor fonctionne avec un abonnement flexible que vous pouvez modifier, suspendre ou résilier chaque semaine.' },
    ],
  },
  'factor-vs-marley-spoon': {
    seoTitle: 'Factor ou Marley Spoon 2026 : réchauffer ou cuisiner des recettes de chef ?',
    seoDescription: 'Factor (plats préparés) ou Marley Spoon (box de recettes de chef) : prix, goût, zone de livraison et pour qui chacun convient le mieux. Attention : Marley Spoon ne livre pas en Wallonie.',
    kookboxKooktijd: '45–60 min',
    kookboxLevergebied: 'Flandre et Bruxelles (pas la Wallonie)',
    intro: [
      "Marley Spoon et Factor ont des notes proches (7,9 contre 7,8), mais ils sont totalement différents. Marley Spoon est un box pour gourmets, avec des recettes de chef de 45 à 60 minutes ; Factor se réchauffe en 2 à 3 minutes.",
      "Marley Spoon a la meilleure note de goût de notre test (8,6) et le plus de profondeur culinaire, mais ne livre qu'en Flandre et à Bruxelles. Si vous habitez en Wallonie, seul Factor est une option. Factor livre dans toute la Belgique et mise sur la facilité et les styles alimentaires.",
      'La cuisine, pour vous, est-ce une détente, ou voulez-vous surtout manger vite et sainement ?',
    ],
    kiesFactorAls: [
      "Vous n'avez ni le temps ni l'envie de cuisiner et voulez manger tout de suite",
      "Vous habitez en Wallonie : Marley Spoon n'y livre pas, Factor livre dans toute la Belgique",
      'Vous voulez manger sainement avec des valeurs nutritionnelles fixes (High-Protein, Calorie-Conscious)',
      'Votre agenda est chargé et la rapidité compte plus que le plaisir de cuisiner',
    ],
    kiesKookboxAls: [
      'Cuisiner vous détend et vous voulez y consacrer 45 à 60 minutes',
      'Vous voulez la meilleure note de goût et des recettes de chef avec de la technique',
      'Vous voulez beaucoup de variété : plus de 80 recettes par semaine',
      "Vous habitez en Flandre ou à Bruxelles (Marley Spoon ne livre pas en Wallonie)",
    ],
    verdictTekst: "Il n'y a pas de gagnant absolu : tout dépend de votre envie de cuisiner, et de l'endroit où vous habitez. Les notes sont proches. Marley Spoon convient mieux à ceux qui aiment cuisiner et recherchent le meilleur goût et de la profondeur culinaire, mais il ne livre qu'en Flandre et à Bruxelles. Factor est le meilleur choix si vous ne voulez pas cuisiner, si vous habitez en Wallonie ou si vous voulez manger sainement avec des styles alimentaires. Vous aimez cuisiner et habitez à Bruxelles ? Marley Spoon. Vous voulez réchauffer ou habitez en Wallonie ? Factor.",
    faq: [
      { q: 'Quelle est la différence entre Factor et Marley Spoon ?', a: "Factor, ce sont des plats préparés à réchauffer en 2 à 3 minutes. Marley Spoon est un box à cuisiner avec des recettes de chef élaborées, qui demandent 45 à 60 minutes de préparation. Factor livre dans toute la Belgique ; Marley Spoon uniquement en Flandre et à Bruxelles." },
      { q: 'Lequel est le moins cher : Factor ou Marley Spoon ?', a: "Factor a le prix par portion le plus bas (dès 4,99 € contre 7,79 €). Factor facture 5,99 € de livraison, Marley Spoon 6,99 €. Marley Spoon propose une solide offre de bienvenue aux nouveaux clients (jusqu'à 50 % sur les premières box). Calculez votre prix total, livraison comprise." },
      { q: 'Marley Spoon livre-t-il en Wallonie ?', a: "Non. Marley Spoon livre uniquement en Flandre et dans la Région de Bruxelles-Capitale. Factor livre en revanche dans toute la Belgique, Wallonie comprise : un avantage pratique si vous y habitez." },
      { q: 'Lequel a le meilleur goût ?', a: "Marley Spoon obtient la meilleure note de goût de notre test (8,6), avec des recettes de chef et une attention à la technique. Factor est bon pour un plat à réchauffer, mais mise sur la facilité plutôt que sur la profondeur culinaire." },
    ],
  },
};
