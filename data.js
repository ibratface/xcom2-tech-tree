// built in base
facilities = {
    laboratory: {
        requires: 'mission_gatecrasher',
        cost: {
            supplies: 125,
            upkeep: 35,
            power: 3,
        }
    },
    additional_research_station: {
        requires: 'laboratory',
        cost: {
            supplies: 125,
            upkeep: 40,
            power: 3,
        }
    },
    workshop: {
        requires: 'mission_gatecrasher',
        cost: {
            supplies: 125,
            upkeep: 35,
            power: 1,
        }
    },
    additional_workbench: {
        requires: 'workshop',
        cost: {
            supplies: 100,
            upkeep: 40,
            power: 2,
        }
    },
    power_relay: {
        requires: 'mission_gatecrasher',
        cost: {
            supplies: 80,
            upkeep: 10,
            power: -3,
        }
    },
    power_conduit: {
        requires: 'power_relay',
        cost: {
            supplies: 80,
            upkeep: 10,
            power: -2,
        }
    },
    guerilla_tactics_school: {
        requires: 'mission_gatecrasher',
        cost: {
            supplies: 85,
            upkeep: 25,
            power: 3,
        }
    },
    resistance_comms: {
        requires: 'resistance_communications',
        cost: {
            supplies: 110,
            upkeep: 25,
            power: 3,
        }
    },
    additional_comm_station: {
        requires: ['resistance_comms'],
        cost: {
            supplies: 125,
            upkeep: 35,
            power: 4,
        }
    },
    advanced_warface_center: {
        requires: ['alien_biotech'],
        cost: {
            supplies: 115,
            upkeep: 35,
            power: 3,
        }
    },
    proving_grounds: {
        requires: ['advent_officer_autopsy'],
        cost: {
            supplies: 100,
            upkeep: 25,
            power: 3,
        }
    },
    defense_matrix: {
        requires: ['advent_turret_breakdown'],
        cost: {

            supplies: 75,
            upkeep: 10,
            power: 2,
        }
    },
    quad_turrets: {
        requires: ['defense_matrix'],
        cost: {
            supplies: 75,
            upkeep: 10,
            power: 2,
        }
    },
    psi_lab: {
        requires: ['psionics'],
        cost: {
            supplies: 175,
            elerium: 10,
            upkeep: 55,
            power: 5,
        }
    },
    second_cell: {
        requires: ['psi_lab'],
        cost: {
            supplies: 225,
            elerium: 10,
            upkeep: 50,
            power: 5,
        }
    },
    elerium_conduit: {
        requires: ['power_relay', 'elerium_research'],
        cost: {
            supplies: 150,
            elerium: 20,
            upkeep: 20,
            power: -6,
        }
    },
    shadow_chamber: {
        requires: ['alien_encryption'],
        cost: {
            supplies: 125,
            upkeep: 30,
            power: 5,
        }
    },
    psionic_gate: {
        requires: ['shadow_chamber', 'psionic_gate_item'],
        cost: {
            supplies: 200,
            upkeep: 50,
            power: 4,
        }
    },
}

// science and engineering researches
research = {
    advent_officer_autopsy: {
        requires: ['advent_officer_corpse'],
        cost: {
            advent_officer_corpse: 1
        },
    },
    advent_trooper_autopsy: {
        requires: ['advent_officer_autopsy'],
        cost: {
            advent_trooper_corpse: 1
        },
        instant_cost: {
            advent_trooper_corpse: 10
        },
    },
    advent_mec_breakdown: {
        requires: ['advent_officer_autopsy'],
        cost: {
            advent_mec_corpse: 1
        },
        instant_cost: {
            advent_mec_corpse: 3
        },
    },
    advent_stun_lancer_autopsy: {
        requires: ['advent_officer_autopsy'],
        cost: {
            advent_stun_lancer_corpse: 1
        },
        instant_cost: {
            advent_stun_lancer_corpse: 4
        },
    },
    advent_shieldbearer_autopsy: {
        requires: ['advent_officer_autopsy'],
        cost: {
            advent_shieldbearer_corpse: 1
        },
        instant_cost: {
            advent_shieldbearer_corpse: 4
        },
    },
    advent_turret_breakdown: {
        requires: ['advent_officer_autopsy'],
        cost: {
            advent_turret_corpse: 1
        },
        instant_cost: {
            advent_turret_corpse: 3
        },
    },
    sectopod_breakdown: {
        requires: ['advent_officer_autopsy'],
        cost: {
            sectopod_corpse: 1
        },
        instant_cost: {
            sectopod_corpse: 3
        },
    },

    faceless_autopsy: {
        requires: ['faceless_corpse'],
        cost: {
            faceless_corpse: 1
        },
        instant_cost: {
            faceless_corpse: 3
        },
    },
    chryssalid_autopsy: {
        requires: ['chryssalid_corpse'],
        cost: {
            chryssalid_corpse: 1
        },
        instant_cost: {
            chryssalid_corpse: 15
        },
    },
    viper_autopsy: {
        requires: ['viper_corpse'],
        cost: {
            viper_corpse: 1
        },
        instant_cost: {
            viper_corpse: 5
        },
    },
    sectoid_autopsy: {
        requires: ['sectoid_corpse'],
        cost: {
            sectoid_corpse: 1
        },
        instant_cost: {
            sectoid_corpse: 6
        },
    },
    muton_autopsy: {
        requires: ['muton_corpse'],
        cost: {
            muton_corpse: 1
        },
        instant_cost: {
            muton_corpse: 5
        },
    },
    berserker_autopsy: {
        requires: ['berserker_corpse'],
        cost: {
            berserker_corpse: 1
        },
        instant_cost: {
            berserker_corpse: 5
        },
    },
    archon_autopsy: {
        requires: ['archon_corpse'],
        cost: {
            archon_corpse: 1
        },
        instant_cost: {
            archon_corpse: 3
        },
    },
    gatekeeper_autopsy: {
        requires: ['gatekeeper_corpse'],
        cost: {
            gatekeeper_corpse: 1
        },
        instant_cost: {
            gatekeeper_corpse: 3
        },
    },
    andromedon_autopsy: {
        requires: ['andromedon_corpse'],
        cost: {
            andromedon_corpse: 1
        },
        instant_cost: {
            andromedon_corpse: 4
        },
    },
    psionics: {
        requires: ['sectoid_autopsy']
        cost: {
            elerium: 5
        }
    },
    alien_biotech: {
        requires: ['mission_gatecrasher']
    },
    modular_weapons: {
        requires: ['mission_gatecrasher']
    },
    magnetic_weapons: {
        requires: ['modular_weapons']
    },
    gauss_weapons: {
        requires: ['magnetic_weapons']
    },
    hybrid_materials: {
        requires: ['mission_gatecrasher'],
        cost: {
            advent_trooper_corpse: 2
        },
    },
    plated_armor: {
        cost: {
            alloy: 10
        },
    },
    elerium_research: {
        requires: ['gauss_weapons', 'plated_armor']
        cost: {
            elerium: 20
        },
    },
    powered_armor: {
        requires: ['elerium_research'],
        cost: {
            alloy: 20,
            elerium: 5,
        }
    },
    plasma_rifle: {
        requires: ['elerium_research'],
        cost: {
            alloy: 10,
            elerium: 10,
        }
    },
    beam_cannon: {
        requires: ['plasma_rifle'],
        cost: {
            alloy: 5,
            elerium: 5,
        }
    },
    plasma_lance: {
        requires: ['plasma_rifle'],
        cost: {
            alloy: 5,
            elerium: 5,
        }
    },
    storm_gun: {
        requires: ['plasma_rifle'],
        cost: {
            alloy: 10,
        }
    },
    resistance_communications: {
        requires: ['mission_guerrilla_ops']
    },
    battlefield_medicine: {
        requires: ['viper_autopsy'],
        cost: {
            supplies: 50,
            elerium_core: 1,
            viper_corpse: 2,
        },
    },
}

// stuff used in combat
items = {
    flashbang_grenade: {
        requires: ['build_flashbang_grenade'],
    },
    medkit: {
        requires: ['build_medkit'],
    },
    smoke_grenade: {
        requires: ['build_smoke_grenade'],
    },
    skulljack: {
        requires: ['build_skulljack'],
    },
    smoke_bomb: {
        requires: ['build_smoke_bomb'],
    },
    nano_medkit: {
        requires: ['build_nano_medkit'],
    },
    mimic_beacon: {
        requires: ['build_mimic_beacon'],
    },
    hellweave: {
        requires: ['build_hellweave'],
    },
}

// includes proving ground projects and build items
project = {
    build_flashbang_grenade: {
        requires: ['mission_gatecrasher'],
        cost: {
            supplies: 35,
        },
    },
    build_medkit: {
        requires: ['mission_gatecrasher'],
        cost: {
            supplies: 35,
        },
    },
    build_smoke_grenade: {
        requires: ['mission_gatecrasher'],
        cost: {
            supplies: 50,
        },
    },
    build_skulljack: {
        requires: ['proving_grounds'],
    },
    build_smoke_bomb: {
        requires: ['advanced_explosives'],
    },
    build_nano_medkit: {
        requires: ['battlefield_medicine'],
    },
}

// item drops
drops = {

}

// stuff that needs to happen
events = {

}
