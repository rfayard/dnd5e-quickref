FR_data_movement = [
    {
        type: "Mouvement",
        title: "Déplacement",
        icon: "run",
        subtitle: "Coût: 1,5 m par 1,5 m",
        description: "Coût de déplacement : 1,5 m par 1,5 m parcouru",
        reference: "MDJ, p. 190.",
        bullets: [
            "Si vous avez plus d’une vitesse, comme votre vitesse de marche et une vitesse de vol, vous pouvez intervertir entre vos différentes vitesses durant votre déplacement. Quand vous changez, soustrayez la distance que vous avez déjà parcouru à la nouvelle vitesse.",
            "Vous pouvez traverser la case d’une créature non-hostile.",
            "Vous pouvez traverser la case d’une créature hostile seulement si la créature est d’au minimum deux tailles supérieure ou inférieure à vous.",
            "La case d’une autre créature est un terrain difficile pour vous.",
            "Peut-importe si la créature est un ami ou un ennemi, vous ne pouvez pas volontairement finir votre déplacement sur sa case."
        ]
    },
    {
        type: "Mouvement",
        title: "Escalade",
        icon: "crags",
        subtitle: "Coût: 3 m par 1,5 m",
        description: "Coût de déplacement: 3 m par 1,5 m esacaladés",
        reference: "PHB, pg. 182.",
        bullets: [
            "Peut engendrer un test de <em>force (Athlétisme)</em> si l'escalade est difficile."
        ]
    },
    {
        type: "Mouvement",
        title: "Nage",
        icon: "at-sea",
        subtitle: "Coût: 3 m par 1,5 m",
        description: "Coût de déplacement: 3 m par 1,5 m nagés",
        reference: "PHB, pg. 182.",
        bullets: [
            "Peut engendrer un test de <em>force (Athlétisme)</em> si la nage est difficile."
        ]
    },
    {
        type: "Mouvement",
        title: "Se jeter à terre",
        icon: "falling",
        subtitle: "Cost: 0 m",
        description: "Coût de déplacement: 0 m (gratuit)",
        reference: "PHB, pgs. 190-191,292.",
        bullets: [
            "Vous pouvez vous jeter à terre sans utiliser votre vitesse.",
            "Pour bouger une fois à terre, vous devez ramper ou utiliser de la magie telle que téléportation.",
            "S’incliner vous donne le statut <strong>à terre</strong> (Les attaques au corps à corps contre vous ont un avantage, les attaques à distance contre vous ont un désavantage, vos propres attaques ont un désavantage)."
        ]
    },
    {
        type: "Mouvement",
        title: "Ramper",
        icon: "crawl",
        subtitle: "Coût: 3 m par 1,5 m",
        description: "Coût de déplacement: 3 m par 1,5 m rampés",
        reference: "PHB, pg. 182.",
        bullets: [

        ]
    },
    {
        type: "Mouvement",
        title: "Se lever",
        icon: "strong",
        subtitle: "Coût: la moitié de votre vitesse",
        description: "Coût de déplacement: la moitié de votre vitesse",
        reference: "PHB, pg. 190-191.",
        bullets: [
            "Vous ne pouvez pas vous lever si nous n’avez pas assez de déplacement restant ou si votre vitesse est égale à 0."
        ]
    },
    {
        type: "Mouvement",
        title: "Saut en hauteur",
        icon: "wingfoot",
        subtitle: "Coût: 1,5 m par 1,5 m",
        description: "Coût de déplacement: 1,5 m par 1,5 m sautés",
        
        reference: "PHB, pg. 182.",
        bullets: [
            "Vous pouvez sauter en l’air à un nombre de mètres égaux à <strong>1 + votre modificateur de Force divisé par trois</strong> si vous prenez votre élan sur au moins trois mètres immédiatement avant le saut.",
            "Quand vous faites un saut en hauteur sans prendre d’élan, vous ne pouvez sauter que la moitié de cette distance.",
            "Vous pouvez tendre vos bras de la moitié de votre taille au-dessus de vous pendant le saut.",
            "Dans certaines circonstances, votre MJ peut vous autoriser à faire un test de <em>Force (Athlétisme)</em> pour sauter plus haut que vous ne le pourriez normalement"
        ]
    },
    {
        type: "Mouvement",
        title: "Saut en longueur",
        icon: "wingfoot",
        subtitle: "Coût: 1,5 m par 1,5 m",
        description: "Coût de déplacement: 1,5 m par 1,5 m sautés",
        reference: "PHB, pg. 182.",
        bullets: [
            "Vous couvrez un nombre de mètres égal à votre score de <strong>Force divisé par 3</strong> si vous prenez votre élan sur au moins trois mètres immédiatement avant le saut.",
            "Quand vous faites un saut en longueur sans prendre d’élan, vous ne pouvez sauter que la moitié de cette distance.",
            "Peut engendrer un jet DD 10 en <em>Force (Athlétisme)</em> pour passer un obstacle bas (pas plus haut qu’un quart de la distance du saut). Vous vous cognez dans l’obstacle sur un échec du jet.",
            "Peut engendrer un jet DD 10 en <em>Dextérité (Acrobatie)</em> pour atterrir sur un terrain difficile. Vous tombez <strong>à terre</strong> sur un échec du jet."
        ]
    },
    {
        type: "Mouvement",
        title: "Improviser",
        icon: "juggler",
        subtitle: "Toute acrobatie qui n'est pas sur cette liste",
        description: "Faites n’importe quel mouvement ou acrobatie que vous pouvez imaginer",
        bullets: [
            "Quand vous décrivez un type de mouvement détaillé nulle part ailleurs dans les règles, le MJ vous dit si l’action est réalisable et quel type de jet vous devez faire, pour déterminer l’échec ou la réussite de votre action."
        ]
    },
    {
        type: "Mouvement",
        title: "Terrain difficile",
        icon: "stone-pile",
        subtitle: "Modificateur de coût: +1,5 m par 1,5 m",
        reference: "PHB, pg. 182.",
        description: "Vous déplacer dans un terrain difficile coûte 1,5 mètres supplémentaire par 1,5 mètres de mouvement.",
        bullets: [
        ]
    },
    {
        type: "Mouvement",
        title: "Déplacer une créature aggrippée",
        icon: "grab",
        subtitle: "Modificateur: vitesse réduite de moitié",
        description: "Trainer ou porter une créature agrippée avec vous",
        reference: "PHB, pg. 195.",
        bullets: [
            "Si vous bougez en agrippant une autre créature, votre vitesse est divisée par deux, sauf si la créature fait au moins deux tailles de moins que vous.",
            "Voir l’action d’attaque pour comment agripper une créature."
        ]
    }
]
