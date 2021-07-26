FR_data_environment_obscurance = [
    {
        type: "Environnement",
        title: "Visibilité réduite",
        icon: "high-grass",
        subtitle: "Désavantage sur la Perception",
        description: "Une faible lumière, une légère brume ou un léger feuillage.",
        reference: "PHB, pg. 183.",
        bullets: [
            "Les créatures ont des <strong>désavantages sur les tests de Sagesse (Perception)</strong> qui s’appuient sur la vision."
        ]
    },
    {
        type: "Environnement",
        title: "Visibilité nulle",
        icon: "fog",
        subtitle: "Pratiquement aveugle",
        description: "L'obscurité, un brouillard opaque, une végétation dense",
        reference: "PHB, pg. 183.",
        bullets: [
            "Une créature dans une zone de visibilité nulle a le statut <strong>aveuglé</strong>."
        ]
    }
]

FR_data_environment_light = [
    {
        type: "Environnement",
        title: "Lumière vive",
        icon: "sun",
        subtitle: "Visibilité totale",
        description: "Lumière vive qui permet à la plupart des créatures de voir normalement.",
        reference: "PHB, pg. 183.",
        bullets: [
            "Même les mauvais temps permettent une lumière vive, tout comme les torches, les lanternes, les feux et toutes les autres sources de lumières avec un rayon spécifique."
        ]
    },
    {
        type: "Environnement",
        title: "Lumière faible",
        icon: "sun-cloud",
        subtitle: "Visibilité réduite",
        description: "Lumière faible, aussi appelée pénombre",
        reference: "PHB, pg. 183.",
        bullets: [
            "Crée une zone <strong>visibilité réduite</strong>.",
            "Une zone de lumière faible est habituellement entre une source de lumière vive, comme une torche, et les ténèbres environnantes.",
            "La lumière douce de l’aube et du crépuscule est aussi considérée comme une lumière faible. Une pleine lune particulièrement lumineuse peut être considérée comme une lumière faible."
        ]
    },
    {
        type: "Environnement",
        title: "Ténèbres",
        icon: "moon-bats",
        subtitle: "Visibilité nulle",
        description: "Les ténèbres créent une zone de visibilité nulle",
        reference: "PHB, pg. 183.",
        bullets: [
            "Créent une zone de <strong>visibilité nulle</strong>.",
            "Les personnages font face aux ténèbres la nuit en extérieur (la plupart du temps même sous la lumière de la lune), aux confins d'un donjon plongé dans l'obscurité ou d'une vaste chambre souterraine, ou dans une zone de ténèbres magiques."
        ]
    }
]

FR_data_environment_vision = [
    {
        type: "Environnement",
        title: "Vision aveugle",
        icon: "blindfold",
        subtitle: "Perception sans vision",
        description: "Percevez le monde qui vous entoure sans se fier à la vue, jusqu'à une certaine distance",
        reference: "PHB, pg. 183.",
        bullets: [
            "Les créatures sans yeux, tels que les vases, les créatures dotées d’écholocalisation ou dotées de sens accrus, tels que les chauves-souris et les vrais dragons, ont ce sens."
        ]
    },
    {
        type: "Environnement",
        title: "Vision dans le noir",
        icon: "night-vision",
        subtitle: "Vision limitée dans les ténèbres",
        description: "Une créature avec Vision dans le noir peut mieux voir dans les ténèbres ou si la luminosité est faible, jusqu'à une certaine distance",
        reference: "PHB, pgs. 183-184.",
        bullets: [
            "Sur une certaine distance, une créature dotée de Vision dans le noir peut <strong>voir dans les ténèbres comme s’il s’agissait d’une lumière faible</strong>, par conséquent les zones de ténèbres semblent faiblement éclairées pour cette créature.",
            "Cependant, cette créature ne peut pas discerner les couleurs dans les ténèbres, seulement les nuances de gris.",
            "Beaucoup de créatures, dans les mondes de D&D, surtout celles qui vivent sous terre, ont la capacité de voir dans le noir."
        ]
    },
    {
        type: "Environnement",
        title: "Vision parfaite",
        icon: "gaze",
        subtitle: "Voir dans les ténèbres",
        description: "Une créature dotée de vision parfaite perçoit toute chose sous sa véritable forme, indépendamment de son environnement",
        reference: "PHB, pg. 184.",
        bullets: [
            "Une créature dotée d'une vision parfaite peut, jusqu'à une certaine distance, percevoir des créatures et des objets invisibles, détecter automatiquement les illusions visuelles et réussir les jets de sauvegarde contre celles-ci, percevoir la véritable forme d’une métamorphe ou d’une créature transformée par la magie.",
            "De plus, la créature peut voir dans le Plan Éthéré."
        ]
    }
]

FR_data_environment_cover = [
    {
        type: "Environnement",
        title: "Abri partiel",
        icon: "smaller-broken-wall",
        subtitle: "Un muret, un meuble ou une créature",
        description: "Une cible possède un abri partiel si un obstacle bloque au moins la moitié de son corps.",
        reference: "PHB, pg. 196.",
        bullets: [
            "L’obstacle peut-être un muret, un large meuble, un tronc d’arbre étroit, ou une autre créature, peut importe si cette créature est ennemie ou alliée.",
            "Une cible qui bénéficie d’un abri partiel applique un <strong>bonus de +2 à sa CA et à ses jets de sauvegarde de Dextérité</strong>.",
            "Si une cible est derrière plusieurs sources d’abri, seul l'abri possédant octroyant le plus grand degré de protection est pris en compte."
        ]
    },
    {
        type: "Environnement",
        title: "Abri important",
        icon: "broken-wall",
        subtitle: "Herse, meurtrière",
        description: "Une cible possède un abri important si un obstacle bloque au moins les trois quarts de son corps.",
        reference: "PHB, pg. 196.",
        bullets: [
            "L’obstacle pourrait être une herse, une meurtrière ou un gros tronc d’arbre.",
            "Une cible qui bénéficie d’un abri important applique un <strong>bonus de +5 à sa CA</strong> et à ses <strong>jets de sauvegarde de Dextérité</strong>.",
            "Si une cible est derrière plusieurs sources d’abri, seul l'abri possédant octroyant le plus grand degré de protection est pris en compte."
        ]
    },
    {
        type: "Environnement",
        title: "Abri total",
        icon: "brick-wall",
        subtitle: "Complètement couvert",
        description: "Une cible possède un abri total si elle est complément dissimulée par un obstacle.",
        reference: "PHB, pg. 196.",
        bullets: [
            "Une cible qui bénéficie d’un abri total <strong>ne peux pas être ciblé directement par une attaque ou un sort</strong>, bien que certains sorts puissent atteindre leur cible en l’incluant dans sa zone d’effet.",
            "Si une cible est derrière plusieurs sources d’abri, seul l'abri possédant octroyant le plus grand degré de protection est pris en compte."
        ]
    }
]
