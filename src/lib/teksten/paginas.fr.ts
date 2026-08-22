/**
 * Franse inhoud van de drie statische pagina's.
 *
 * Deze stonden tot fase 6 volledig in het Nederlands, ook op hun Franse URL.
 * Bij privacy en voorwaarden is dat niet alleen slordig maar juridisch
 * onduidelijk: een Franstalige bezoeker krijgt dan voorwaarden in een taal
 * die hij niet hoeft te begrijpen.
 *
 * De inhoud is aangepast, niet vertaald: de Franse "over ons" legt uit dat de
 * leverbaarheid per regio een expliciet onderdeel van de beoordeling is, want
 * dat is wat de Franstalige ranglijst anders maakt.
 */

export interface StatischePagina {
  metaTitle: string;
  metaDescription: string;
  alineas: Array<{ kop?: string; tekst: string[] }>;
}

export const overOnsFr: StatischePagina = {
  metaTitle: 'À propos de BesteMaaltijdbox.be — comparatif indépendant',
  metaDescription:
    "Qui se cache derrière BesteMaaltijdbox.be ? Comment nous évaluons chaque box repas belge, et pourquoi la zone de livraison pèse dans notre classement francophone.",
  alineas: [
    {
      kop: 'Comment cela a commencé',
      tekst: [
        "BesteMaaltijdbox.be est né d'une question toute simple : quel box repas convient réellement aux ménages belges ? En ligne, nous ne trouvions que des articles vagues qui ne répondaient pas aux questions pratiques. Combien cela coûte-t-il réellement par mois ? Peut-on résilier facilement ? Est-ce intéressant pour deux personnes ?",
        "Nous avons décidé de creuser. Nous analysons tous les box repas actifs en Belgique — de HelloFresh et Foodbag à Marley Spoon et aux acteurs belges plus petits — sur la base de retours d'utilisateurs, de données publiques et des informations officielles des fournisseurs. Le résultat : un aperçu honnête et indépendant que nous mettons régulièrement à jour.",
      ],
    },
    {
      kop: 'Notre méthode',
      tekst: [
        "Nous évaluons chaque box sur cinq critères : le goût, le rapport qualité-prix, la flexibilité, la durabilité et la facilité. Les notes reposent sur des retours d'utilisateurs, des données d'avis publiques et les informations officielles des fournisseurs.",
        "Pour la version francophone, un sixième élément pèse lourd : la zone de livraison. Trois des huit fournisseurs actifs — Marley Spoon, Foodprepper et Ekomenu — ne livrent qu'en Flandre et à Bruxelles. Un classement qui recommanderait ces box à un lecteur wallon serait inutile, quelle que soit leur qualité. Notre classement francophone place donc les fournisseurs qui ne desservent pas la Wallonie plus bas, et le dit explicitement sur chaque page concernée.",
      ],
    },
    {
      kop: 'Notre engagement',
      tekst: [
        "Nos notes et notre classement sont totalement indépendants et ne sont jamais rémunérés. Aucun fournisseur ne peut acheter une meilleure note ou une position plus haute. Nous percevons une petite commission si vous souscrivez via nos liens — cela n'a aucune influence sur nos évaluations ni sur nos recommandations.",
        "Ce qui est possible en revanche : certains fournisseurs paient pour de la visibilité supplémentaire, par exemple une bannière ou un encadré mis en avant. Ces placements payants sont toujours clairement identifiés comme « Sponsorisé » et n'ont aucun lien avec la façon dont nous notons et classons. L'ordre rédactionnel du site n'en est pas modifié.",
        "Si un fournisseur obtient une mauvaise note chez nous, nous le disons — même s'il paie pour de la visibilité.",
      ],
    },
  ],
};

export const privacyFr: StatischePagina = {
  metaTitle: 'Politique de confidentialité — BesteMaaltijdbox.be',
  metaDescription:
    "Politique de confidentialité de BesteMaaltijdbox.be : quelles données nous traitons, comment fonctionnent nos liens d'affiliation et quels sont vos droits.",
  alineas: [
    {
      kop: '1. Qui sommes-nous ?',
      tekst: [
        "BesteMaaltijdbox.be est un site de comparaison indépendant pour les box repas en Belgique. Pour toute question relative à cette politique, écrivez-nous à info@bestemaaltijdbox.be.",
      ],
    },
    {
      kop: '2. Quelles données traitons-nous ?',
      tekst: [
        "Nous ne demandons aucune donnée personnelle : vous ne devez ni créer de compte ni laisser d'adresse e-mail pour utiliser le site.",
        "Nous utilisons Google Analytics pour comprendre quelles pages sont consultées et comment le site est utilisé. Ces données sont agrégées et ne permettent pas de vous identifier personnellement.",
        "Lorsque vous cliquez sur un lien vers un fournisseur, un cookie d'affiliation est déposé par le réseau concerné (Impact, TradeTracker ou Daisycon). Il permet au fournisseur de savoir que la visite vient de notre site.",
      ],
    },
    {
      kop: '3. Cookies',
      tekst: [
        "Nous utilisons des cookies pour les statistiques de visite et le suivi d'affiliation. Vous pouvez à tout moment supprimer les cookies via les paramètres de votre navigateur ou en bloquer le dépôt.",
      ],
    },
    {
      kop: '4. Liens d’affiliation',
      tekst: [
        "Nous percevons une commission lorsque vous souscrivez un abonnement via nos liens. Cela ne vous coûte rien de plus et n'influence pas nos notes ni notre classement.",
      ],
    },
    {
      kop: '5. Vos droits',
      tekst: [
        "Conformément au RGPD, vous avez le droit de consulter, corriger ou faire supprimer vos données. Comme nous ne conservons aucune donnée personnelle identifiable, il y a en pratique peu à consulter — mais vous pouvez toujours nous contacter à info@bestemaaltijdbox.be.",
      ],
    },
  ],
};

export const voorwaardenFr: StatischePagina = {
  metaTitle: 'Conditions générales — BesteMaaltijdbox.be',
  metaDescription:
    "Conditions générales d'utilisation de BesteMaaltijdbox.be : usage du site, exactitude des informations, liens d'affiliation et responsabilité.",
  alineas: [
    {
      kop: '1. Informations sur le site',
      tekst: [
        "BesteMaaltijdbox.be est un site de comparaison indépendant pour les box repas en Belgique. Nous ne vendons aucun produit et ne sommes partie à aucun contrat que vous concluez avec un fournisseur.",
      ],
    },
    {
      kop: '2. Exactitude des informations',
      tekst: [
        "Nous faisons notre possible pour maintenir les prix, les offres et les zones de livraison à jour. Les fournisseurs peuvent toutefois modifier leurs tarifs et leurs conditions à tout moment. Vérifiez toujours les informations actuelles sur le site du fournisseur avant de commander.",
        "Les prix indiqués sont indicatifs et peuvent varier selon la formule, le nombre de personnes et les promotions en cours. Les zones de livraison mentionnées reflètent la situation au moment de la dernière mise à jour.",
      ],
    },
    {
      kop: '3. Liens d’affiliation',
      tekst: [
        "Ce site contient des liens d'affiliation. Si vous souscrivez un abonnement via l'un de ces liens, nous percevons une commission. Cela ne vous coûte rien de plus. Nos notes et notre classement sont établis indépendamment et ne sont jamais rémunérés.",
        "Les placements payants — bannières ou encadrés mis en avant — sont toujours identifiés comme « Sponsorisé ». Ils n'influencent pas l'ordre rédactionnel du site.",
      ],
    },
    {
      kop: '4. Responsabilité',
      tekst: [
        "Nous ne sommes pas responsables des accords conclus entre vous et un fournisseur, ni des éventuelles erreurs de prix ou de disponibilité sur les sites des fournisseurs. Toute réclamation relative à une commande doit être adressée directement au fournisseur.",
      ],
    },
    {
      kop: '5. Droit applicable',
      tekst: [
        "Le droit belge s'applique à l'utilisation de ce site. Pour toute question, contactez-nous à info@bestemaaltijdbox.be.",
      ],
    },
  ],
};
