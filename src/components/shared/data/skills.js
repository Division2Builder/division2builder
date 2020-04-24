/**
 * saving all data as string so we can attach symbols
 * decided we"re not doing math with these, just show base + skill tier
 */
export default [
    {
        name: "Burn Sticky Bomb",
        baseStats: {
            Cooldown: "60s",
            Damage: "1,552,877",
            Duration: "12.7s",
            "PvP Damage": "341,632"
        },
        modifiers: {
            "Burn Damage": {
                modifies: ["Damage", "PvP Damage"],
                tiers: ["+10%", "+20%", "+30%", "+40%", "+50%", "+60%"]
            },
            Duration: {
                modifies: ["Duration"],
                tiers: ["+40%", "+40%", "+60%", "+80%", "+100%", "+120%"]
            },
            "Skill Haste": {
                modifies: ["Cooldown"],
                tiers: ["15%", "30%", "45%", "60%", "75%", "90%"]
            }
        }
    }, {
        name: "Explosive Sticky Bomb",
        baseStats: {
            Cooldown: "60s",
            Damage: "1,459,970",
            "Blast Radius": "3m",
            Duration: "10.5s",
            "PvP Damage": "321,193"
        },
        tiers: {
            1: {

            },
            2: {

            },
            3: {

            },
            4: {

            },
            5: {

            },
            6: {

            }
        }
    }, {
        name: "Trap",
        baseStats: {
            Cooldown: "60s",
        },
        tiers: {
            1: {

            },
            2: {

            },
            3: {

            },
            4: {

            },
            5: {

            },
            6: {

            }
        }
    }, {
        name: "Decoy",
        baseStats: {
            Cooldown: "60s",
        },
        tiers: {
            1: {

            },
            2: {

            },
            3: {

            },
            4: {

            },
            5: {

            },
            6: {

            }
        }
    }, {
        name: "Pulse",
        baseStats: {
            Cooldown: "60s",
        },
        tiers: {
            1: {

            },
            2: {

            },
            3: {

            },
            4: {

            },
            5: {

            },
            6: {

            }
        }
    }, {
        name: "Turret",
        baseStats: {
            Cooldown: "60s",
        },
        tiers: {
            1: {

            },
            2: {

            },
            3: {

            },
            4: {

            },
            5: {

            },
            6: {

            }
        }
    }, {
        name: "Hive",
        baseStats: {
            Cooldown: "60s",
        },
        tiers: {
            1: {

            },
            2: {

            },
            3: {

            },
            4: {

            },
            5: {

            },
            6: {

            }
        }
    }, {
        name: "Chem Launcher",
        baseStats: {
            Cooldown: "60s",
        },
        tiers: {
            1: {

            },
            2: {

            },
            3: {

            },
            4: {

            },
            5: {

            },
            6: {

            }
        }
    }, {
        name: "Firefly",
        baseStats: {
            Cooldown: "60s",
        },
        tiers: {
            1: {

            },
            2: {

            },
            3: {

            },
            4: {

            },
            5: {

            },
            6: {

            }
        }
    }, {
        name: "Seeker Mine",
        baseStats: {
            Cooldown: "60s",
        },
        tiers: {
            1: {

            },
            2: {

            },
            3: {

            },
            4: {

            },
            5: {

            },
            6: {

            }
        }
    }, {
        name: "Drone",
        baseStats: {
            Cooldown: "60s",
        },
        tiers: {
            1: {

            },
            2: {

            },
            3: {

            },
            4: {

            },
            5: {

            },
            6: {

            }
        }
    }, {
        name: "Shield",
        baseStats: {
            Cooldown: "1s",
        },
        tiers: {
            1: {

            },
            2: {

            },
            3: {

            },
            4: {

            },
            5: {

            },
            6: {

            }
        }
    }
];
