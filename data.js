// built in base
facilities = {
    laboratory: {
        requires: null,
        supplies: 125,
        upkeep: 35,
        power: -3,
    },
    additional_research_station: {
        requires: 'laboratory',
        supplies: 125,
        upkeep: 40,
        power: -3,
    },
    workshop: {
        requires: null,
        supplies: 125,
        upkeep: 35,
        power: -1,
    },
    additional_workbench: {
        requires: 'workshop',
        supplies: 100,
        upkeep: 40,
        power: -2,
    },
    power_relay: {
        requires: null,
        supplies: 80,
        upkeep: 10,
        power: +3,
    },
    power_conduit: {
        requires: 'power_relay',
        supplies: 80,
        upkeep: 10,
        power: +2,
    },
    guerilla_tactics_school: {
        requires: null,
        supplies: 85,
        upkeep: 25,
        power: -3,
    },
    resistance_comms: {
        requires: null,
        supplies: 110,
        upkeep: 25,
        power: -3,
    },
    additional_comm_station: {
        requires: ['resistance_comms'],
        supplies: 125,
        upkeep: 35,
        power: -4,
    },
    advanced_warface_center: {
        requires: ['alien_biotech'],
        supplies: 115,
        upkeep: 35,
        power: -3,
    },
    proving_grounds: {
        requires: ['advent_officer_autopsy'],
        supplies: 100,
        upkeep: 25,
        power: -3,
    },
    defense_matrix: {
        requires: ['advent_turret_breakdown'],
        supplies: 75,
        upkeep: 10,
        power: -2,
    },
    quad_turrets: {
        requires: ['defense_matrix'],
        supplies: 75,
        upkeep: 10,
        power: -2,
    },
    psi_lab: {
        requires: ['psionics'],
        supplies: 175,
        elerium: 10,
        upkeep: 55,
        power: -5,
    },
    second_cell: {
        requires: ['psi_lab'],
        supplies: 225,
        elerium: 10,
        upkeep: 50,
        power: -5,
    },
    elerium_conduit: {
        requires: ['power_relay', 'elerium'],
        supplies: 150,
        elerium: 20,
        upkeep: 20,
        power: +6,
    },
    shadow_chamber: {
        requires: ['alien_encryption'],
        supplies: 125,
        upkeep: 30,
        power: -5,
    },
    psionic_gate: {
        requires: ['shadow_chamber', 'psionic_gate_item'],
        supplies: 200,
        upkeep: 50,
        power: -4,
    },
}

// science stuff
research = {
    faceless_autopsy: {
        requires: ['faceless_corpse'],
    },
    chryssalid_autopsy: {

    },
    viper_autopsy: {

    },
    sectoid_autopsy: {

    },
    berserker_autopsy: {

    },
    archon_autopsy: {

    },
    gatekeeper_autopsy: {

    },
    andromedon_autopsy: {

    },
    battlefield_medicine: {
        requires: ['viper_autopsy'],
    },
    alien_biotech: {

    },
    modular_weapons: {

    },
    hybrid_materials: {

    },
}

// stuff used in combat
items = {
    flashbang_grenade: {
        requires: null,
    },
    medkit: {
        requires: null,
    },
    smoke_grenade: {
        requires: null,
    },
    smoke_bomb: {
        requires: ['smoke_grenade', 'advanced_explosives'],
    },
    nano_medkit: {
        requires: ['medkit', 'battlefield_medicine'],
    },
    mimic_beacon: {
        requires: ['faceless_autopsy'],
    },
    hellweave: {
        requires: ['chryssalid_autopsy'],
    },
}

// item drops
drops = {

}

// stuff that needs to happen
events = {

}
