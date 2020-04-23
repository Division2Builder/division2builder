export default [
    {
        name: 'Police SW Backpack',
        type: 'backpack',
        brandSet: 'providence',
        armor: 130844,
        primaryAttribute: {name: 'Weapon Damage', type: 'offensive', value: 15},
        secondaryAttributes: [
            {name: 'Critical Hit Chance', type: 'offensive', value: 6},
            {name: 'Critical Hit Damage', type: 'offensive', value: 12},
        ],
        talent: {
            name: 'Vigilance',
            desc: 'Increases total weapon damage by 25%. Taking damage disables this buff for 4s.',
            icon: 'vigilance'
        },
        isNamed: false,
        isExotic: false,
        isGearSet: false
    }
]