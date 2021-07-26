FR_data_action = [
    {
        title: "Attaque",
        icon: "crossed-swords",
        subtitle: "Attaque au corps à corps ou à distance",
        description: "Effectuez une attaque au corps à corps ou à distance avec votre arme",
        reference: "PHB, pgs. 192,194-195.",
        bullets: [
            "Certaines capacités, comme l'<em>Attaque supplémentaire</em> du Guerrier, vous permettent d'effectuer plus d'une attaque avec cette action. Chaque attaque requiet un jet séparé et peut cibler une créature différente. Vous pouvez vous déplacer entre ces attaques.",
            "Quand vous attaquez avec une arme de corps à corps légère, vous pouvez utiliser une action bonus pour attaquer avec votre autre main (voir l'action bonus <em>Attaque ambidextre</em>).",
            "Vous pouvez remplacer une de vos attaques de corps à corps par une <em>Empoignade</em> ou une <em>Bousculade</em>.",
            "Certaines conditions donnent un avantage durant l’attaque : les attaques contre les cibles aveuglées, paralysées, pétrifiées, restreintes, étourdies ou inconscientes ; les attaques de corps à corps contre des cibles a terre ; les attaques par des attaquants invisibles ou cachés.",
            "Certaines conditions donnent un désavantage durant l’attaque: les attaques contre les cibles invisibles ou cachées; les attaques à distance contre des cibles au sol; attaques par des attaquants aveuglés, effrayés, empoisonnés, ou restreints."
        ]
    },
    {
        title: "Empoignade",
        icon: "grab",
        subtitle: "Attaque spéciale au corps à corps",
        description: "Tenter d'attraper une créature ou de lutter avec elle.",
        reference: "PHB, pg. 195.",
        bullets: [
            "Vous pouvez utiliser une action d’<em>Attaque</em> pour faire une attaque spéciale au corps à corps, une empoignade. Si vous pouvez faire plusieurs attaques avec votre action d’attaque, cette action remplace une d’entre-elles.",
            "La cible de votre empoignade ne peut pas être plus d’une taille supérieure à la vôtre, et elle doit être à votre portée.",
            "En utilisant au moins une main libre, vous essayez de saisir une cible en faisait un test d'empoignade, un test de <em>Force (Athlétisme)</em> contesté par un test de <em>Force (Athlétisme)</em> ou <em>Dextérité (Acrobatie)</em> au choix de la cible.",
            "Si vous réussissez, la cible gagne le statut empoigné (sa vitesse est réduite à 0)."
        ]
    },
    {
        title: "Bousculer une créature",
        icon: "push",
        subtitle: "Attaque spéciale au corps à corps",
        description: "Vous bousculez une cible, soit pour la mettre à terre soit pour l’éloigner de vous",
        reference: "PHB, pg. 195.",
        bullets: [
            "Vous pouvez utiliser une action d’<em>Attaque</em> pour faire une attaque spéciale au corps à corps, une bousculade. Si vous pouvez faire plusieurs attaques avec votre action d’attaque, cette action remplace une d’entre-elles.",
            "La cible de votre bousculade ne peut pas être plus d’une taille supérieure à la vôtre, et elle doit être à votre portée.",
            "Vous faites un test de <em>Force (Athlétisme)</em> contesté par un test de <em>Force (Athlétisme)</em> ou <em>Dextérité (Acrobatie)</em> au choix de la cible.",
            "Si vous réussissez, soit la cible gagne le statut à terre, soit vous la repoussez de 1,5 mètres de vous."
        ]
    },
    {
        title: "Lancer un sort",
        icon: "magic-swirl",
        subtitle: "Temps d'incantation d'une action",
        description: "Lancez un sort avec un temps d’incantation d’une action",
        reference: "PHB, pg. 192.",
        bullets: [
            "Vous ne pouvez pas lancer un sort avec votre action et un sort différent avec votre action bonus dans le même tour, sauf si l’action est utilisée pour lancer un tour de magie.",
            "La cible d’un sort doit être dans la portée du sort. Pour cibler quelque chose, vous devez avoir un chemin dégagé jusqu’à la cible, il ne peut pas être derrière un abri total.",
            "Les sorts avec des composantes matérielles ne consument pas l’objet à moins que cela soit explicitement précisé. A moins que le coût d’un matériau vous soit donné, vous pouvez partir du principe que son coût est négligeable et que le matériau est simplement disponible dans une sacoche à composantes.",
            "Certains sorts requièrent que vous mainteniez votre concentration pour garder la magie activée. Si vous perdez votre concentration, le sort se termine. Vous perdez la concentration lors d’un sort si vous jetez un autre sort qui requiert de la concentration, ou lorsque vous êtes neutralisé. A chaque fois que vous prenez des dégâts, vous devez faire un <em>jet de sauvegarde de Constitution</em> pour maintenir votre concentration. Le DD est égal à 10 ou à la moitié des dégâts que vous prenez, selon le nombre le plus élevé."
        ]
    },
    {
        title: "Se précipiter",
        icon: "sprint",
        subtitle: "Double votre vitesse de mouvement",
        description: "Gagner du mouvement supplémentaire pour le tour actuel",
        reference: "PHB, pg. 192.",
        bullets: [
            "Cette augmentation est égale à votre vitesse, après avoir appliqué les modificateurs."
        ]
    },
    {
        title: "Se désengager",
        icon: "slalom",
        subtitle: "Empêche les attaques d'opportunités",
        description: "Votre mouvement ne provoque pas d’attaque d’opportunité pour le reste du tour.",
        reference: "PHB, pg. 192.",
        bullets: [
        ]
    },
    {
        title: "Esquiver",
        icon: "dodging",
        subtitle: "Améliore vos défenses",
        description: "Vous vous concentrez uniquement sur l’esquive d’attaque",
        reference: "PHB, pg. 192.",
        bullets: [
            "Jusqu’au début du prochain tour, chaque jet d’attaque contre vous à un désavantage si vous pouvez voir l’attaquant, et vos <em>jets de sauvegarde de Dextérité</em> ont un avantage.",
            "Vous perdez ce bénéfice si vous êtes <em>neutralisé</em> ou si votre vitesse tombe à 0."
        ]
    },
    {
        title: "Se libérer",
        icon: "breaking-chain",
        subtitle: "Se libérer d'une empoignade",
        description: "Se libérer d'une empoignade",
        reference: "PHB, pg. 195.",
        bullets: [
            "Pour s’échapper d’une empoignade, vous devez réussir un test de <em>Force (Athlétisme)</em> ou <em>Dextérité (Acrobatie)</em> contesté par un test de <em>Force (Athlétisme)</em> de l’attaquant.",
            "S’échapper d’autres éléments qui pourraient vous restreindre (comme des menottes) peut nécessiter un test de <em>Dextérité</em> ou de <em>Force</em>, en fonction de l’élément."
        ]
    },
    {
        title: "Aider",
        icon: "all-for-one",
        subtitle: "Donner un avantage à un allié",
        description: "Donnez un avantage à un allié sur un test de caractéristiques ou sur un jet d'attaque",
        reference: "PHB, pg. 192.",
        bullets: [
            "La cible gagne un avantage sur le prochain test de caractéristiques nécessaire à la tâche pour laquelle vous l’assistez.",
            "Autrement, la cible gagne un avantage sur le prochain jet d’attaque contre une créature située à 1,5 mètres de vous maximum.",
            "Cet avantage dure jusqu’au début de votre prochain tour."
        ]
    },
    {
        title: "Utiliser un objet",
        icon: "robber-hand",
        subtitle: "Interagir, utiliser une compétence spéciale",
        description: "Interagissez avec un deuxième objet ou utilisez des compétences spécifiques d’objets",
        reference: "PHB, pg. 193.",
        bullets: [
            "Vous pouvez interagir avec un objet librement durant votre tour (comme sortir une arme ou ouvrir une porte). Si vous voulez interagir avec un deuxième objet, utilisez cette action.",
            "Quand un objet requiert une action pour son utilisation, vous utilisez cette action."
        ]
    },
    {
        title: "Équipez un bouclier",
        icon: "attached-shield",
        subtitle: "Équiper ou retirer un bouclier",
        description: "Équiper ou retirer un bouclier",
        reference: "PHB, pgs. 144-146.",
        bullets: [
            "Un bouclier prend toujours une action a s’équiper ou à s’enlever.",
            "L’armure prend plusieurs minutes à s’équiper ou à s’enlever."
        ]
    },
    {
        title: "Se cacher",
        icon: "hood",
        subtitle: "",
        description: "Essayer de se cacher",
        reference: "PHB, pg. 192.",
        bullets: [
            "Vous ne pouvez pas vous cacher d’une créature qui peut vous voir. Vous devez être totalement à couvert, être dans une zone très sombre ou bloquer la vision de l’ennemi.",
            "Si vous faites du bruit (comme prévenir vos camarades ou renverser un vase), vous dévoilez votre position.",
            "Quand vous essayez de vous cacher, faites un test de <em>Dextérité (Discrétion)</em> et notez le résultat. Jusqu’à ce que vous soyez découvert ou que vous arrêtez de vous cacher, votre résultat conteste chaque test de <em>Sagesse (Perception)</em> de chaque créature qui chercherais votre présence.",
            "Une créature vous remarque même si elle ne cherche pas, sauf si votre test de <em>Discrétion</em> est plus haut que sa <em>Perception Passive</em>.",
            "En dehors des combats, vous pouvez aussi faire un test de <em>Dextérité (Discrétion)</em>, pour des actions comme vous cacher des ennemis, passer des gardes, s’enfuir sans être remarqué, ou s’approcher de quelqu’un sans être vu ou entendu."
        ]
    },
    {
        title: "Chercher",
        icon: "magnifying-glass",
        subtitle: "",
        description: "Votre attention se focalise sur la recherche de quelque chose",
        reference: "PHB, pg. 193.",
        bullets: [
            "En fonction de na nature de la recherche, le MJ peut vous demander un test de <em>Sagesse (Perception)</em> ou un test d’<em>Intelligence (Investigation)</em>."
        ]
    },
    {
        title: "Se tenir prêt",
        icon: "stopwatch",
        subtitle: "Choisir un déclencheur et une action",
        description: "Choisissez un élément déclencheur et une réaction en réponse",
        reference: "PHB, pg. 193.",
        bullets: [
            "D’abord, vous choisissez quelle circonstance perceptible (condition) va activer votre réaction.",
            "Puis, vous choisissez l’action que vous prendrez en réaction une fois la condition remplie, ou vous choisissez de vous déplacer en réaction.",
            "Quand la condition est remplie, vous pouvez décider d’effectuer votre réaction juste après ou bien d’ignorer la condition.",
            "Quand vous préparez un sort, vous le lancez normalement mais retenez son énergie, que vous relâchez avec votre réaction quand la condition est remplie. Pour être prêt, un sort doit avoir un temps d’incantation d’une action, et garder le sort prêt requiert de la concentration."
        ]
    },
    {
        title: "Utiliser une compétence de classe",
        icon: "embrassed-energy",
        subtitle: "Certaines capacités utilisent des actions",
        description: "Utiliser une compétence de race ou de classe qui requiert une action",
        reference: "See class page for more information.",
        bullets: [

        ]
    },
    {
        title: "Stabiliser une créature",
        icon: "first-aid",
        subtitle: "Administrer les premiers soins",
        description: "Empêche une créature mourante d'avoir besoin de faire des jets de sauvegarde contre la mort",
        reference: "PHB, pg. 197.",
        bullets: [
            "Faites un test de Sagesse (Médecine) avec un DD de 10.",
            "En cas de succès, la créature est stabilisé et n'a plus à faire de jets de sauvegarde contre la mort.",
            "Une créature stabilisée regagne 1 point de vie après 1d4 heures."
        ]
    },
    {
        title: "Improviser",
        icon: "think",
        subtitle: "Toute action qui n'est pas sur cette liste",
        description: "Effectuer n'importe quelle action que vous pouvez imaginer",
        reference: "PHB, pg. 193.",
        bullets: [
            "Quand vous décrivez un type d'action détaillé nulle part ailleurs dans les règles, le MJ vous dit si l’action est réalisable et quel type de jet vous devez faire, pour déterminer l’échec ou la réussite de votre action."
        ]
    }
]
