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
  'maaltijdbox-maaltijdcheques-belgie': {
    titel: 'Payer un box repas avec des titres-repas en Belgique : qui les accepte ?',
    metaTitle: 'Box repas et titres-repas en Belgique (2026) — qui les accepte ?',
    metaDescription:
      "Quel box repas accepte les titres-repas Monizze, Pluxee ou Edenred ? Foodbag, HelloFresh et Foodprepper comparés, avec la zone de livraison.",
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
            label: 'Plafond journalier :',
            tekst:
              "le montant maximum des titres-repas passe à 10 € par jour (contre 8 €). Cela représente un pouvoir d'achat plus élevé pour votre box hebdomadaire.",
          },
          {
            label: 'Ce que cela change concrètement :',
            tekst:
              "une commande Foodbag moyenne pour deux personnes (trois repas) coûte à partir de 50,60 € — avec vos titres-repas, une grande partie ne sort donc pas de votre poche.",
          },
        ],
      },
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
        q: 'Combien puis-je payer par jour avec des titres-repas ?',
        a: 'Depuis 2026, le plafond est de 10 € par jour et par chèque.',
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
