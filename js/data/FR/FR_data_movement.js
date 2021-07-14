FR_data_movement = [
    {
        type: "Mouvement",
        title: "Déplacement",
        icon: "run",
        subtitle: "Coût: 9 m par 9 m",
        description: "Coût de déplacement : 9 m par 9 m parcouru",
        reference: "MDJ, p. 190.",
        bullets: [
            "Si vous avez plus d’une vitesse, comme votre vitesse de marche et une vitesse de vol, vous pouvez intervertir entre vos différentes vitesses durant votre déplacement. Quand vous changez, soustrayez la distance que vous avez déjà parcouru à la nouvelle vitesse.",
            "Vous pouvez traverser la case d’une créature non-hostile.",
            "Vous pouvez traverser la case d’une créature hostile seulement si la créature est d’au minimum deux tailles supérieure ou inférieure à vous. ",
            "La case d’une autre créature est un terrain difficile pour vous.",
            "Peut-importe si la créature est un ami ou un ennemi, vous ne pouvez pas volontairement finir votre déplacement sur sa case."
        ]
    },
    {
        type: "Mouvement",
        title: "Climb",
        icon: "crags",
        subtitle: "Cost: 10ft per 5ft",
        description: "Movement cost: 10ft per 5ft climbed",
        reference: "PHB, pg. 182.",
        bullets: [
            "May involve a Strength (Athletics) check if the climb is difficult"
        ]
    },
    {
        type: "Mouvement",
        title: "Swim",
        icon: "at-sea",
        subtitle: "Cost: 10ft per 5ft",
        description: "Movement cost: 10ft per 5ft swum",
        reference: "PHB, pg. 182.",
        bullets: [
            "May involve a Strength (Athletics) check if the swim is difficult"
        ]
    },
    {
        type: "Mouvement",
        title: "Drop prone",
        icon: "falling",
        subtitle: "Cost: 0ft",
        description: "Movement cost: 0ft (free)",
        reference: "PHB, pgs. 190-191,292.",
        bullets: [
            "You can drop prone without using any of your speed",
            "To move while prone, you must crawl or use magic such as teleportation",
            "Dropping prone adds the <i>Prone</i> condition (melee attacks against you have advantage, ranged attacks against you have disadvantage, your own attacks have disadvantage)"
        ]
    },
    {
        type: "Mouvement",
        title: "Crawl",
        icon: "crawl",
        subtitle: "Cost: 10ft per 5ft",
        description: "Movement cost: 10ft per 5ft crawled",
        reference: "PHB, pg. 182.",
        bullets: [

        ]
    },
    {
        type: "Mouvement",
        title: "Stand up",
        icon: "strong",
        subtitle: "Cost: half movement speed",
        description: "Movement cost: half of your speed",
        reference: "PHB, pg. 190-191.",
        bullets: [
            "You can't stand up if you don't have enough movement left or if your speed is 0"
        ]
    },
    {
        type: "Mouvement",
        title: "High jump",
        icon: "wingfoot",
        subtitle: "Cost: 5ft per 5ft",
        description: "Movement cost: 5ft per 5ft jumped",
        
        reference: "PHB, pg. 182.",
        bullets: [
            "You leap into the air a number of feet equal to <b>3 + your Strength modifier</b> if you move at least 10 feet on foot immediately before the jump.",
            "When you make a standing high jump, you can jump only half that distance.",
            "You can extend your arms half your height above yourself during the jump.",
            "In some circumstances, your DM might allow you to make a Strength (Athletics) check to jump higher than you normally can."
        ]
    },
    {
        type: "Mouvement",
        title: "Long jump",
        icon: "wingfoot",
        subtitle: "Cost: 5ft per 5ft",
        description: "Movement cost: 5ft per 5ft jumped",
        reference: "PHB, pg. 182.",
        bullets: [
            "You cover a number of feet up to your <b>Strength score</b> if you move at least 10 feet on foot immediately before the jump.",
            "When you make a standing long jump, you can leap only half that distance",
            "May involve a DC 10 Strength (Athletics) check to clear a low obstacle (no taller than a quarter of the jump's distance). You hit the obstacle on a failed check.",
            "May involve a DC 10 Dexterity (Acrobatics) check to land on your feet in difficult terrain. You land prone on a failed check."
        ]
    },
    {
        type: "Mouvement",
        title: "Improvise",
        icon: "juggler",
        subtitle: "Any stunt not on this list",
        description: "Perform any movement or stunt you can imagine",
        bullets: [
            "When you describe a kind of movement not detailed elsewhere in the rules, the DM tells you whether it is possible and what kind of roll you need to make, if any, to determine success or failure."
        ]
    },
    {
        type: "Mouvement",
        title: "Difficult terrain",
        icon: "stone-pile",
        subtitle: "Cost modifier: +5ft per 5ft",
        reference: "PHB, pg. 182.",
        description: "Moving in difficult terrain costs an additional 5ft per 5ft of movement",
        bullets: [
        ]
    },
    {
        type: "Mouvement",
        title: "Grapple move",
        icon: "grab",
        subtitle: "Modifier: speed halved",
        description: "Drag or carry the grappled creature with you",
        reference: "PHB, pg. 195.",
        bullets: [
            "If you move while grappling another creature, your speed is halved, unless the creature is two or more sizes smaller than you.",
            "See the attack action for how to grapple a creature."
        ]
    }
]
