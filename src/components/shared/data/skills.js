/**
 * saving all data as string so we can attach symbols
 * decided we"re not doing math with these, just show base + skill tier
 */
export default {
    "Sticky Bomb": [
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
                    tiers: ["+15%", "+30%", "+45%", "+60%", "+75%", "+90%"]
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
            modifiers: {
                "Burn": {
                    modifies: ["Damage"],
                    tiers: ["+10%", "+20%", "+30%", "+40%", "+50%", "+60%"]
                },
            }
        }
    ],
    "Trap": [
        {
            name: "Shock Trap",
            baseStats: {
                Cooldown: "50s",
                Traps: "6",
                "Shock Radius": "2m",
                "Shock Duration": "6s",
                Duration: "30s",
                "PvP Shock Effect Duration": "1.8s",
            },
            modifiers: {
                "Traps": {
                    modifies: ["Traps"],
                    tiers: ["+2", "+2", "+4", "+6", "+8", "+10"]
                },
                "Shock Radius": {
                    modifies: ["Shock Radius"],
                    tiers: ["+10%", "+20%", "+30%", "+40%", "+50%", "+60%"]
                },
                "Shock Duration": {
                    modifies: ["Shock Duration"],
                    tiers: ["+10%", "+20%", "+30%", "+40%", "+50%", "+60%"]
                },
            }
        }
    ],
    "Decoy": [
        {
            name: "Holographic Distraction",
            baseStats: {
                Cooldown: "25s",
                Duration: "15s",
                Health: "929,072 HP",
                Threat: "100%",
            },
            modifiers: {
                "Duration": {
                    modifies: ["Duration"],
                    tiers: ["+15%", "+30%", "+45%", "+60%", "+75%", "+90%"]
                },
                "Health": {
                    modifies: ["Health"],
                    tiers: ["+50%", "+100%", "+150%", "+200%", "+250%", "+300%"]
                },
                "Threat": {
                    modifies: ["Threat"],
                    tiers: ["+15%", "+30%", "+45%", "+60%", "+75%", "+90%"]
                },
            }
        }
    ],
    "Pulse": [
        {
            name: "Scanner Pulse",
            baseStats: {
                Cooldown: "60s",
            },
            modifiers: {
                "Cooldown": {
                    modifies: ["Cooldown"],
                    tiers: ["+10%", "+20%", "+30%", "+40%", "+50%", "+60%"]
                },
            }
        }, {
            name: "Remote Pulse",
            baseStats: {
                Cooldown: "60s",
            },
            modifiers: {
                "Cooldown": {
                    modifies: ["Cooldown"],
                    tiers: ["+10%", "+20%", "+30%", "+40%", "+50%", "+60%"]
                },
            }
        }, {
            name: "Jammer Pulse",
            baseStats: {
                Cooldown: "60s",
            },
            modifiers: {
                "Cooldown": {
                    modifies: ["Cooldown"],
                    tiers: ["+10%", "+20%", "+30%", "+40%", "+50%", "+60%"]
                },
            }
        }, {
            name: "Banshee Pulse",
            baseStats: {
                Cooldown: "60s",
            },
            modifiers: {
                "Cooldown": {
                    modifies: ["Cooldown"],
                    tiers: ["+10%", "+20%", "+30%", "+40%", "+50%", "+60%"]
                },
            }
        }
    ],
    "Turret": [
        {
            name: "Assault Turret",
            baseStats: {
                Cooldown: "60s",
            },
            modifiers: {
                "Cooldown": {
                    modifies: ["Cooldown"],
                    tiers: ["+10%", "+20%", "+30%", "+40%", "+50%", "+60%"]
                },
            }
        }, {
            name: "Incinerator Turret",
            baseStats: {
                Cooldown: "60s",
            },
            modifiers: {
                "Cooldown": {
                    modifies: ["Cooldown"],
                    tiers: ["+10%", "+20%", "+30%", "+40%", "+50%", "+60%"]
                },
            }
        }, {
            name: "Sniper Turret",
            baseStats: {
                Cooldown: "60s",
            },
            modifiers: {
                "Cooldown": {
                    modifies: ["Cooldown"],
                    tiers: ["+10%", "+20%", "+30%", "+40%", "+50%", "+60%"]
                },
            }
        }, {
            name: "Artillery Turret",
            baseStats: {
                Cooldown: "60s",
            },
            modifiers: {
                "Cooldown": {
                    modifies: ["Cooldown"],
                    tiers: ["+10%", "+20%", "+30%", "+40%", "+50%", "+60%"]
                },
            }
        }
    ],
    "Hive": [
        {
            name: "Restorer Hive",
            baseStats: {
                Cooldown: "60s",
            },
            modifiers: {
                "Cooldown": {
                    modifies: ["Cooldown"],
                    tiers: ["+10%", "+20%", "+30%", "+40%", "+50%", "+60%"]
                },
            }
        }, {
            name: "Stinger Hive",
            baseStats: {
                Cooldown: "60s",
            },
            modifiers: {
                "Cooldown": {
                    modifies: ["Cooldown"],
                    tiers: ["+10%", "+20%", "+30%", "+40%", "+50%", "+60%"]
                },
            }
        }, {
            name: "Reviver Hive",
            baseStats: {
                Cooldown: "60s",
            },
            modifiers: {
                "Cooldown": {
                    modifies: ["Cooldown"],
                    tiers: ["+10%", "+20%", "+30%", "+40%", "+50%", "+60%"]
                },
            }
        }, {
            name: "Booster Hive",
            baseStats: {
                Cooldown: "60s",
            },
            modifiers: {
                "Cooldown": {
                    modifies: ["Cooldown"],
                    tiers: ["+10%", "+20%", "+30%", "+40%", "+50%", "+60%"]
                },
            }
        }, {
            name: "Artificer Hive",
            baseStats: {
                Cooldown: "60s",
            },
            modifiers: {
                "Cooldown": {
                    modifies: ["Cooldown"],
                    tiers: ["+10%", "+20%", "+30%", "+40%", "+50%", "+60%"]
                },
            }
        }
    ],
    "Chem Launcher": [
        {
            name: "Reinforcer Chem Launcher",
            baseStats: {
                Cooldown: "60s",
            },
            modifiers: {
                "Cooldown": {
                    modifies: ["Cooldown"],
                    tiers: ["+10%", "+20%", "+30%", "+40%", "+50%", "+60%"]
                },
            }
        }, {
            name: "Firestarter Chem Launcher",
            baseStats: {
                Cooldown: "60s",
            },
            modifiers: {
                "Cooldown": {
                    modifies: ["Cooldown"],
                    tiers: ["+10%", "+20%", "+30%", "+40%", "+50%", "+60%"]
                },
            }
        }, {
            name: "Riot Foam Chem Launcher",
            baseStats: {
                Cooldown: "60s",
            },
            modifiers: {
                "Cooldown": {
                    modifies: ["Cooldown"],
                    tiers: ["+10%", "+20%", "+30%", "+40%", "+50%", "+60%"]
                },
            }
        }, {
            name: "Oxidizer Chem Launcher",
            baseStats: {
                Cooldown: "60s",
            },
            modifiers: {
                "Cooldown": {
                    modifies: ["Cooldown"],
                    tiers: ["+10%", "+20%", "+30%", "+40%", "+50%", "+60%"]
                },
            }
        }
    ],
    "Firefly": [
        {
            name: "Blinder Firefly",
            baseStats: {
                Cooldown: "60s",
            },
            modifiers: {
                "Cooldown": {
                    modifies: ["Cooldown"],
                    tiers: ["+10%", "+20%", "+30%", "+40%", "+50%", "+60%"]
                },
            }
        }, {
            name: "Burster Firefly",
            baseStats: {
                Cooldown: "60s",
            },
            modifiers: {
                "Cooldown": {
                    modifies: ["Cooldown"],
                    tiers: ["+10%", "+20%", "+30%", "+40%", "+50%", "+60%"]
                },
            }
        }, {
            name: "Demolisher Firefly",
            baseStats: {
                Cooldown: "60s",
            },
            modifiers: {
                "Cooldown": {
                    modifies: ["Cooldown"],
                    tiers: ["+10%", "+20%", "+30%", "+40%", "+50%", "+60%"]
                },
            }
        },
    ],
    "Seeker Mine": [
        {
            name: "Explosive Seeker Mine",
            baseStats: {
                Cooldown: "60s",
            },
            modifiers: {
                "Cooldown": {
                    modifies: ["Cooldown"],
                    tiers: ["+10%", "+20%", "+30%", "+40%", "+50%", "+60%"]
                },
            }
        }, {
            name: "Airburst Seeker Mine",
            baseStats: {
                Cooldown: "60s",
            },
            modifiers: {
                "Cooldown": {
                    modifies: ["Cooldown"],
                    tiers: ["+10%", "+20%", "+30%", "+40%", "+50%", "+60%"]
                },
            }
        }, {
            name: "Cluster Seeker Mine",
            baseStats: {
                Cooldown: "60s",
            },
            modifiers: {
                "Cooldown": {
                    modifies: ["Cooldown"],
                    tiers: ["+10%", "+20%", "+30%", "+40%", "+50%", "+60%"]
                },
            }
        }, {
            name: "Mender Seeker Mine",
            baseStats: {
                Cooldown: "60s",
            },
            modifiers: {
                "Cooldown": {
                    modifies: ["Cooldown"],
                    tiers: ["+10%", "+20%", "+30%", "+40%", "+50%", "+60%"]
                },
            }
        }
    ],
    "Drone": [
        {
            name: "Striker Drone",
            baseStats: {
                Cooldown: "60s",
            },
            modifiers: {
                "Cooldown": {
                    modifies: ["Cooldown"],
                    tiers: ["+10%", "+20%", "+30%", "+40%", "+50%", "+60%"]
                },
            }
        }, {
            name: "Defender Drone",
            baseStats: {
                Cooldown: "60s",
            },
            modifiers: {
                "Cooldown": {
                    modifies: ["Cooldown"],
                    tiers: ["+10%", "+20%", "+30%", "+40%", "+50%", "+60%"]
                },
            }
        }, {
            name: "Bombardier Drone",
            baseStats: {
                Cooldown: "60s",
            },
            modifiers: {
                "Cooldown": {
                    modifies: ["Cooldown"],
                    tiers: ["+10%", "+20%", "+30%", "+40%", "+50%", "+60%"]
                },
            }
        }, {
            name: "Fixer Drone",
            baseStats: {
                Cooldown: "60s",
            },
            modifiers: {
                "Cooldown": {
                    modifies: ["Cooldown"],
                    tiers: ["+10%", "+20%", "+30%", "+40%", "+50%", "+60%"]
                },
            }
        }, {
            name: "Tactician Drone",
            baseStats: {
                Cooldown: "60s",
            },
            modifiers: {
                "Cooldown": {
                    modifies: ["Cooldown"],
                    tiers: ["+10%", "+20%", "+30%", "+40%", "+50%", "+60%"]
                },
            }
        }
    ],
    "Ballistic Shield": [
        {
            name: "Bulwark Ballistic Shield",
            baseStats: {
                Cooldown: "1s",
            },
            modifiers: {
                "Cooldown": {
                    modifies: ["Cooldown"],
                    tiers: ["+10%", "+20%", "+30%", "+40%", "+50%", "+60%"]
                },
            }
        }, {
            name: "Crusader Ballistic Shield",
            baseStats: {
                Cooldown: "1s",
            },
            modifiers: {
                "Cooldown": {
                    modifies: ["Cooldown"],
                    tiers: ["+10%", "+20%", "+30%", "+40%", "+50%", "+60%"]
                },
            }
        }, {
            name: "Deflector Ballistic Shield",
            baseStats: {
                Cooldown: "1s",
            },
            modifiers: {
                "Cooldown": {
                    modifies: ["Cooldown"],
                    tiers: ["+10%", "+20%", "+30%", "+40%", "+50%", "+60%"]
                },
            }
        }, {
            name: "Striker Shield",
            baseStats: {
                Cooldown: "1s",
            },
            modifiers: {
                "Cooldown": {
                    modifies: ["Cooldown"],
                    tiers: ["+10%", "+20%", "+30%", "+40%", "+50%", "+60%"]
                },
            }
        }
    ]
}
