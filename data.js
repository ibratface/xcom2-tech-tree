// built in base
facilities = {
    laboratory: {
        requires: ['mission_gatecrasher'],
        cost: {
            supplies: [125, 125, 125, 150],
            upkeep: [35, 35, 35, 35],
            power: [3, 3, 3, 3],
        }
    },
    additional_research_station: {
        requires: ['laboratory'],
        cost: {
            supplies: [125, 125, 125, 150],
            upkeep: [40, 40, 40, 40],
            power: [3, 3, 3, 3],
        }
    },
    workshop: {
        requires: ['mission_gatecrasher'],
        cost: {
            supplies: [125, 125, 125, 150],
            upkeep: [35, 35, 35, 35],
            power: [1, 1, 1, 1],
        }
    },
    additional_workbench: {
        requires: ['workshop'],
        cost: {
            supplies: [100, 100, 100, 100],
            upkeep: [4, 40, 40, 40],
            power: [2, 2, 2, 2],
        }
    },
    power_relay: {
        requires: ['mission_gatecrasher'],
        cost: {
            supplies: [80, 80, 80, 100],
            upkeep: [10, 10, 10, 10],
            power: [+3, +3, +3, +3],
        }
    },
    power_conduit: {
        requires: ['power_relay'],
        cost: {
            supplies: [80, 80, 80, 80],
            upkeep: [10, 10, 10, 10],
            power: [+2, +2, +2, +2],
        }
    },
    guerilla_tactics_school: {
        requires: ['mission_gatecrasher'],
        cost: {
            supplies: [85, 85, 85, 100],
            upkeep: [25, 25, 25, 25],
            power: [3, 3, 3, 3],
        }
    },
    resistance_comms: {
        requires: ['resistance_communications'],
        cost: {
            supplies: [110, 110, 110, 160],
            upkeep: [25, 25, 25, 25],
            power: [3, 3, 3, 3],
        }
    },
    additional_comm_station: {
        requires: ['resistance_comms', 'resistance_radio'],
        cost: {
            supplies: [125, 125, 125, 125],
            upkeep: [35, 35, 35, 35],
            power: [4, 4, 4, 4],
        }
    },
    advanced_warfare_center: {
        requires: ['alien_biotech'],
        cost: {
            supplies: [115, 115, 115, 175],
            upkeep: [35, 35, 35, 35],
            power: [3, 3, 3, 3],
        }
    },
    proving_grounds: {
        requires: ['advent_officer_autopsy'],
        cost: {
            supplies: [100, 100, 100, 125],
            upkeep: [25, 25, 25, 25],
            power: [3, 3, 3, 3],
        }
    },
    defense_matrix: {
        requires: ['advent_turret_breakdown'],
        cost: {
            supplies: [75, 75, 75, 150],
            upkeep: [10, 10, 10, 10],
            power: [2, 2, 2, 2],
        }
    },
    quad_turrets: {
        requires: ['defense_matrix'],
        cost: {
            supplies: [75, 75, 75, 75],
            upkeep: [10, 10, 10, 10],
            power: [2, 2, 2, 2],
        }
    },
    psi_lab: {
        requires: ['psionics'],
        cost: {
            supplies: [175, 175, 175, 250],
            elerium: [10, 10, 10, 20],
            upkeep: [55, 55, 55, 55],
            power: [5, 5, 5, 5],
        }
    },
    second_cell: {
        requires: ['psi_lab'],
        cost: {
            supplies: [225, 225, 225, 225],
            elerium: [10, 10, 10, 10],
            upkeep: [50, 50, 50, 50],
            power: [5, 5, 5, 5],
        }
    },
    elerium_conduit: {
        requires: ['elerium_research', 'power_relay'],
        cost: {
            supplies: [150, 150, 150, 150],
            elerium: [20, 20, 20, 20],
            upkeep: [20, 20, 20, 20],
            power: [+6, +6, +6, +6],
        }
    },
    shadow_chamber: {
        requires: ['alien_encryption'],
        cost: {
            supplies: [125, 125, 125, 200],
            upkeep: [30, 30, 30, 30],
            power: [5, 5, 5, 5],
        }
    },
    upgraded_shadow_chamber: {
        requires: ['shadow_chamber', 'psionic_gate'],
        cost: {
            supplies: [200, 200, 200, 200],
            upkeep: [50, 50, 50, 50],
            power: [4, 4, 4, 4],
        }
    },
}

// science and engineering researches
research = {
    alien_biotech: {
        requires: ['mission_gatecrasher'],
    },
    advent_officer_autopsy: {
        requires: ['alien_biotech'],
        cost: {
            advent_officer_corpse: [1, 1, 1, 1]
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
        requires: ['alien_biotech'],
        cost: {
            faceless_corpse: 1
        },
        instant_cost: {
            faceless_corpse: 3
        },
    },
    chryssalid_autopsy: {
        requires: ['alien_biotech'],
        cost: {
            chryssalid_corpse: 1
        },
        instant_cost: {
            chryssalid_corpse: 15
        },
    },
    viper_autopsy: {
        requires: ['alien_biotech'],
        cost: {
            viper_corpse: 1
        },
        instant_cost: {
            viper_corpse: 5
        },
    },
    sectoid_autopsy: {
        requires: ['alien_biotech'],
        cost: {
            sectoid_corpse: 1
        },
        instant_cost: {
            sectoid_corpse: 6
        },
    },
    muton_autopsy: {
        requires: ['alien_biotech'],
        cost: {
            muton_corpse: 1
        },
        instant_cost: {
            muton_corpse: 5
        },
    },
    berserker_autopsy: {
        requires: ['alien_biotech'],
        cost: {
            berserker_corpse: 1
        },
        instant_cost: {
            berserker_corpse: 5
        },
    },
    archon_autopsy: {
        requires: ['alien_biotech'],
        cost: {
            archon_corpse: 1
        },
        instant_cost: {
            archon_corpse: 3
        },
    },
    gatekeeper_autopsy: {
        requires: ['alien_biotech'],
        cost: {
            gatekeeper_corpse: 1
        },
        instant_cost: {
            gatekeeper_corpse: 3
        },
    },
    andromedon_autopsy: {
        requires: ['alien_biotech'],
        cost: {
            andromedon_corpse: 1
        },
        instant_cost: {
            andromedon_corpse: 4
        },
    },
    psionics: {
        requires: ['sectoid_autopsy'],
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
        requires: ['hybrid_materials'],
        cost: {
            alloy: 10
        },
    },
    elerium_research: {
        requires: ['gauss_weapons', 'plated_armor'],
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
    plasma_rifle_research: {
        requires: ['elerium_research'],
        cost: {
            alloy: 10,
            elerium: 10,
        }
    },
    beam_cannon_research: {
        requires: ['plasma_rifle_research'],
        cost: {
            alloy: 5,
            elerium: 5,
        }
    },
    plasma_lance_research: {
        requires: ['plasma_rifle_research'],
        cost: {
            alloy: 5,
            elerium: 5,
        }
    },
    storm_gun_research: {
        requires: ['plasma_rifle_research'],
        cost: {
            alloy: 10,
        }
    },
    resistance_communications: {
        requires: ['mission_guerrilla_ops']
    },
    resistance_radio: {
        requires: ['resistance_communications']
    },
    battlefield_medicine: {
        requires: ['viper_autopsy'],
        cost: {
            supplies: 50,
            elerium_core: 1,
            viper_corpse: 2,
        },
    },
    blacksite_vial_research: {
        requires: ['blacksite_vial'],
    },
    psionic_gate_research: {
        requires: ['upgraded_shadow_chamber'],
    },
    codex_brain_research: {
        requires: ['codex_brain'],
    },
    alien_encryption: {
        requires: ['blacksite_vial', 'codex_brain'],
    },
    encrypted_codex_data: {
        requires: ['codex_brain_research'],
    },
    stasis_suit_research: {
        requires: ['stasis_suit'],
    },
    avatar_autopsy: {
        requires: ['psionic_gate_research', 'avatar_corpse', 'stasis_suit_research']
    }
}

// stuff used in combat
items = {
    flashbang_grenade: {
        requires: ['mission_gatecrasher']
    },
    medkit: {
        requires: ['mission_gatecrasher']
    },
    smoke_grenade: {
        requires: ['mission_gatecrasher']
    },
    smoke_bomb: {
        requires: ['advanced_explosives']
    },
    nano_medkit: {
        requires: ['battlefield_medicine']
    },
    mimic_beacon: {
        requires: ['faceless_autopsy']
    },
    hellweave: {
        requires: ['chryssalid_autopsy']
    },
    gremlin_mark_II: {
        requires: ['advent_mec_breakdown']
    },
    gremlin_mark_III: {
        requires: ['sectopod_breakdown']
    },
    battle_scanner: {
        requires: ['advent_trooper_autopsy']
    },
    arc_blade: {
        requires: ['advent_stun_lancer_autopsy']
    },
    plasma_blade: {
        requires: ['archon_autopsy']
    },
    overdrive_serum: {
        requires: ['berserker_autopsy']
    },
    alien_psi_amp: {
        requires: ['gatekeeper_autopsy']
    },
    incendiary_grenade: {
        requires: ['experimental_grenade']
    },
    incendiary_bomb: {
        requires: ['advanced_explosives']
    },
    acid_grenade: {
        requires: ['experimental_grenade']
    },
    acid_bomb: {
        requires: ['advanced_explosives']
    },
    gas_grenade: {
        requires: ['experimental_grenade']
    },
    gas_bomb: {
        requires: ['advanced_explosives']
    },
    ap_rounds: {
        requires: ['experimental_ammo']
    },
    tracer_rounds: {
        requires: ['experimental_ammo']
    },
    dragon_rounds: {
        requires: ['experimental_ammo']
    },
    talon_rounds: {
        requires: ['experimental_ammo']
    },
    venom_rounds: {
        requires: ['experimental_ammo']
    },
    proximity_mine: {
        requires: ['andromedon_autopsy']
    },
    plated_vest: {
        requires: ['experimental_armor'],
    },
    hazmat_vest: {
        requires: ['experimental_armor'],
    },
    stasis_vest: {
        requires: ['experimental_armor'],
    },
    predator_armor: {
        requires: ['plated_armor']
    },
    warden_armor: {
        requires: ['powered_armor']
    },
    mag_pistol: {
        requires: ['magnetic_weapons']
    },
    magnetic_rifles: {
        requires: ['magnetic_weapons']
    },
    shard_gun: {
        requires: ['magnetic_weapons']
    },
    mag_cannon: {
        requires: ['gauss_weapons']
    },
    gauss_rifle: {
        requires: ['gauss_weapons']
    },
    flame_thrower: {
        requires: ['experimental_heavy_weapon']
    },
    shredder_gun: {
        requires: ['experimental_heavy_weapon']
    },
    plasma_blaster: {
        requires: ['experimental_powered_weapon']
    },
    plasma_rifle: {
        requires: ['plasma_rifle_research']
    },
    beam_pistol: {
        requires: ['plasma_rifle_research']
    },
    beam_cannon: {
        requires: ['beam_cannon_research'],
        cost: {}
    },
    plasma_lance: {
        requires: ['plasma_lance_research'],
        cost: {}
    },
    storm_gun: {
        requires: ['storm_gun_research'],
        cost: {

        }
    },
    shredstorm_cannon: {
        requires: ['experimental_powered_weapon']
    },
    hellfire_projector: {
        requires: ['experimental_powered_weapon']
    },
    blaster_launcher: {
        requires: ['experimental_powered_weapon']
    },
}

// engineering build items
built_item = {
    build_flashbang_grenade: {
        requires: ['mission_gatecrasher'],
        cost: {
            supplies: 35
        }
    },
    build_medkit: {
        requires: ['mission_gatecrasher'],
        cost: {
            supplies: 35
        }
    },
    build_smoke_grenade: {
        requires: ['mission_gatecrasher'],
        cost: {
            supplies: 50
        }
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
    build_hellweave: {
        requires: ['chryssalid_autopsy'],
    },
    build_proximity_mine: {
        requires: ['andromedon_autopsy'],
    },
    build_mimic_beacon: {
        requires: ['faceless_autopsy'],
    }
}

// proving ground projects
projects = {
    experimental_grenade: {
        requires: ['proving_grounds']
    },
    experimental_ammo: {
        requires: ['proving_grounds']
    },
    experimental_armor: {
        requires: ['advent_shieldbearer_autopsy']
    },
    experimental_heavy_weapon: {
        requires: ['exo_suit']
    },
    experimental_powered_weapon: {
        requires: ['war_suit']
    },
    plasma_grenade: {
        requires: ['muton_autopsy']
    },
    advanced_explosives: {
        requires: ['plasma_grenade']
    },
    skulljack: {
        requires: ['proving_grounds']
    },
    skullmining: {
        requires: ['skulljack']
    },
    exo_suit: {
        requires: ['plated_armor']
    },
    spider_suit: {
        requires: ['plated_armor']
    },
    war_suit: {
        requires: ['powered_armor']
    },
    wraith_suit: {
        requires: ['powered_armor']
    },
}

// item drops
drops = {
    // faceless_corpse: {
    // },
    // chryssalid_corpse: {
    // },
    // viper_corpse: {
    // },
    // sectoid_corpse: {
    // },
    // muton_corpse: {
    // },
    // berserker_corpse: {
    // },
    // archon_corpse: {
    // },
    // gatekeeper_corpse: {
    // },
    // andromedon_corpse: {
    // },
    // facility_lead: {
    // },
    // datapad: {
    // },
    // data_cache: {
    // },
    psionic_gate: {
        requires: ['codex_brain_coordinates']
    },
    codex_brain: {
        requires: ['skulljack_officer']
    },
    stasis_suit: {
        requires: ['blacksite_vial_coordinates']
    },
    blacksite_vial: {
        requires: ['mission_blacksite'],
    },
    avatar_corpse: {
        requires: ['skulljack_codex'],
    }
}

// stuff that needs to happen
events = {
    mission_gatecrasher: {

    },
    mission_guerrilla_ops: {
        requires: ['mission_gatecrasher'],
    },
    radio_relay: {
        requires: ['resistance_radio']
    },
    blacksite_region: {
        requires: ['resistance_communications']
    },
    mission_blacksite: {
        requires: ['blacksite_region']
    },
    skulljack_officer: {
        requires: ['skulljack']
    },
    blacksite_vial_coordinates: {
        requires: ['blacksite_vial_research']
    },
    codex_brain_coordinates: {
        requires: ['codex_brain_research']
    },
    skulljack_codex: {
        requires: ['encrypted_codex_data']
    },
    broadcast_tower: {
        requires: ['avatar_autopsy']
    },
    final_mission: {
        requires: ['broadcast_tower']
    },
}