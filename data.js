const DATA = {
  gangs: [
    {
    id: "carnival_of_terror",
    name: "Carnival of Terror",
    keywords: ["gang_hierarchy_leader", "plentiful"],
    settlements: [],
    fighters: [
      {id: "ringleader", "name": "Ring Master", "role": "Leader", "rating": 300},
      {id: "homesless", "name": "Homeless Man", "role": "Ganger", "rating": 130},
      {id: "fireperformer", "name": "Fire Performer", "role": "Champion", "rating": 240},
      {id: "j3a", "name": "Jonny 3-Arms", "role": "Ganger", "rating": 90},
      {id: "lmercu", "name": "Lady Mercury", "role": "Ganger", "rating": 90},
      {id: "slug", "name": "Slug", "role": "Ganger", "rating": 145},
      {id: "freak", "name": "The FREAK", "role": "Brute", "rating": 250}
      ]
    },
    {
    id: "the_drama_queens",
    name: "The Drama Queens",
    keywords: ["gang_fighter", "nerves_of_steel", "hip_shooting"],
    settlements: [],
    fighters: [
        {id: "billy_shakes", "name": "Billy Shakes", "role": "Leader", "rating": 210},
        {id: "iago", "name": "Iago", "role": "Champion", "rating": 160},
        {id: "lear", "name": "Lear", "role": "Champion", "rating": 245},
        {id: "hamlet", "name": "Hamlet", "role": "Specialist", "rating": 160},
        {id: "mercutio", "name": "Mercutio", "role": "Ganger", "rating": 70},
        {id: "horatio", "name": "Horatio", "role": "Ganger", "rating": 70},
        {id: "macbeth", "name": "MacBeth", "role": "Juve", "rating": 50},
        {id: "titania", "name": "Titania", "role": "Prospect", "rating": 80},
        {id: "henry", "name": "Henry", "role": "Brute", "rating": 205}
      ]
    },
    {
      id: "o_blocks",
      name: "O Block",
      keywords: ["fast_shot", "gunfighter", "true_grit"],
      settlements: [],
      fighters: [
          {id: "oswitch", "name": "Oblock Switchyion", "role": "Leader", "rating": 330},
          {id: "dtmil", "name": "DT Millz", "role": "Champion", "rating": 225},
          {id: "vonin", "name": "Von Incarnate", "role": "Champion", "rating": 170},
          {id: "nephe", "name": "Nephew", "role": "Ganger", "rating": 90},
          {id: "luca", "name": "Luca Brasi", "role": "Ganger", "rating": 115},
          {id: "47", "name": "47", "role": "Ganger", "rating": 100},
          {id: "slid2", "name": "Mr Slide Two Times", "role": "Specialist", "rating": 125},
          {id: "biggieche", "name": "Biggie Chee", "role": "Prospect", "rating": 95}
        ]
    },
    {
      id: "dhunt",
      name: "Dark Hunters",
      keywords: ["infiltrate", "nerves_of_steel", "fearsome"],
      settlements: [],
      fighters: [
          {id: "sal", "name": "Sally", "role": "Leader", "rating": 385},
          {id: "mstr", "name": "Mysterious Stranger", "role": "Champion", "rating": 260},
          {id: "Cainx", "name": "Cain Xavier", "role": "Ganger", "rating": 135},
          {id: "delvol", "name": "Delius Voldus", "role": "Ganger", "rating": 90},
          {id: "enokz", "name": "Enok the Zealot", "role": "Ganger", "rating": 120},
          {id: "servit", "name": "Servitor Z-00", "role": "Ganger", "rating": 65},
          {id: "fimalk", "name": "Fiori Malok", "role": "Champion", "rating": 145}
        ]
    },
    {
      id: "ahs",
      name: "The Apostles of Hollow Saints",
      keywords: [],
      settlements: [],
      fighters: [
          {id: "priest", "name": "Redemptor Priest", "role": "Leader", "rating": 270},
          {id: "fbrand", "name": "Firebrand", "role": "Champion", "rating": 245},
          {id: "deacon", "name": "Deacon", "role": "Champion", "rating": 245},
          {id: "bret1", "name": "Brethren 1", "role": "Specialist", "rating": 95},
          {id: "bret2", "name": "Brethren 2", "role": "Ganger", "rating": 95},
          {id: "bret3", "name": "Brethren 3", "role": "Ganger", "rating": 95},
          {id: "bret4", "name": "Brethren 4", "role": "Ganger", "rating": 95},
          {id: "bpick1", "name": "Bonepicker 1", "role": "Juve", "rating": 30},
          {id: "bpick2", "name": "Bonepicker 2", "role": "Juve", "rating": 30},
          {id: "bpick3", "name": "Bonepicker 3", "role": "Juve", "rating": 30},
          {id: "chrub", "name": "Cherub-Servitor", "role": "Exotic Beast", "rating": 0},
          {id: "chrub2", "name": "Cherub-Servitor 2", "role": "Exotic Beast", "rating": 0}
        ]
    }
  ],
  keywords: {
    gang_hierarchy_leader: {
      name: "Gang Hierarchy (Leader)",
      definition: "During a battle, once this fighter's gang has failed a Bottle test, during any End phase in which this fighter passes its Cool check and does not flee the battlefield, any friendly gang fighters that are within 12\" of this fighter will automatically pass their Cool check and will not flee the battlefield. Additionally, during Campaign play this fighter may perform post-battle actions."
    },
    gang_hierarchy_champion: {
      name: "Gang Hierarchy (Champion)",
      definition: "During a battle, once this fighter's gang has failed a Bottle test, during any End phase in which this fighter passes its Cool check and does not flee the battlefield, any friendly gang fighters that are within 6\" of this fighter will automatically pass their Cool check and will not flee the battlefield."
    },
    knockback: {
      name: "Knockback",
      definition: "When a weapon with the Knockback trait hits a fighter, if the hit roll is equal to or higher than the target's Strength, they are immediately moved 1\" directly away from the attacking model. If the fighter cannot be moved the full 1\" because of impassable terrain or another model, they move as far as possible and the attack's Damage is increased by 1. If a Blast weapon has the Knockback trait, roll a D6 for each fighter that is hit. If the result is equal to or higher than their Strength, they are knocked back as described above - however, they are moved directly away from the centre of the Blast marker instead. If the centre of the Blast marker was over the centre of their base, roll a Scatter dice to determine which way they are moved. If a Melee weapon has the Knockback trait, the attacking fighter can choose to follow the target up, moving directly towards them after they have been knocked back to remain in base contact. If the attack was made across a barricade, the attacker cannot do this. If any part of the knocked back fighter's base crosses the edge of a platform, make an Initiative test. If this is failed, they will fall. If this is passed, they stop moving at the edge of the platform."
    },
    master_crafted: {
      name: "Master-Crafted",
      definition: "Once per battle, a weapon with the Master-crafted trait may re-roll a single failed hit roll."
    },
    plentiful: {
      name: "Plentiful",
      definition: "Ammunition for this weapon is incredibly common. When reloading it, no Ammo test is required - it is automatically reloaded."
    },
    additional_attacks_x: {
      name: "Additional Attacks (X)",
      definition: "A weapon with this Trait may perform X additional attacks when taking an Attack (Basic) action or making Reaction attacks. Note that a weapon with this Trait may never be selected to make normal attacks with, if a fighter has no weapons without this Trait and with either the Melee or Sidearm traits they will perform unarmed attacks. Additionally, a weapon with the Additional Attacks (X) trait does not count against the maximum number of weapons a fighter may carry."
    },
    arc_x: {
      name: "Arc (X)",
      definition: "This Trait indicates the vision arcs into which a weapon fitted to a vehicle can fire, as shown in brackets after the name of the Trait. These are Front, Left, Right, Rear and All Round. All Round means the weapon can fire into all four arcs. Players should note that this Trait is determined by the vehicle rather than the weapon. Therefore, it is not uncommon for this Trait to be applied differently to the same weapon when that weapon is fitted onto a different vehicle."
    },
    assault_shield_energy_shield: {
      name: "Assault Shield/Energy Shield",
      definition: "An assault/energy shield grants a +2 armour save modifier (to a maximum of 2+) against melee attacks that originate from within the fighter's vision arc (the 90° arc to their front), and a +1 armour save modifier against ranged attacks that originate from within the fighter's vision arc; check this before the fighter is placed Prone and is Pinned. If it is not clear whether the attacker is within the target's Front arc, use a Vision Arc template to check - if the centre of the attacker's base is within the arc, the assault/energy shield can be used. Against attacks with the Blast trait, use the centre of the Blast marker in place of the attacker. If the target does not have a facing (for example, if they are Prone), the assault/energy shield cannot be used."
    },
    backstab: {
      name: "Backstab",
      definition: "If the attacker is not within the target's vision arc, add 1 to the attack's Strength."
    },
    blaze: {
      name: "Blaze",
      definition: "After an attack with the Blaze trait has been resolved, roll a D6 if the target was hit but not taken Out of Action or Wrecked. On a 4+, they become subject to the Blaze condition."
    },
    burrowing: {
      name: "Burrowing",
      definition: "Burrowing weapons can be fired at targets outside of the firer's line of sight. When firing at a target outside of line of sight do not make an attack roll, instead place the 3\" Blast marker anywhere on the battlefield, then move it 2D6\" in a direction determined by the Scatter dice. If a Hit is rolled on the Scatter dice, the Blast marker does not move. At the start of the End phase of the round in which this weapon was fired, before step 1, any fighters touched by the marker are hit by the weapon. Note that this Blast marker can move through impassable terrain such as walls and may move off the battlefield. If the Blast marker does move off the battlefield, the attack will have no effect. Burrowing weapons are capable of digging through several levels of wall and flooring, and can be used regardless of where the fighter is positioned on the battlefield."
    },
    chem_delivery: {
      name: "Chem Delivery",
      definition: "When a weapon with the Chem Delivery trait is used, the fighter declares what kind of chem they are firing at the target. This can be any chem the fighter is equipped with (note that firing the weapon does not cost a dose of the chem and that friendly fighters cannot be targeted), or if the weapon also has the Toxin or Gas trait, the fighter can use these Traits instead. Instead of making a Wound roll for a Chem Delivery attack, roll a D6. If the result is equal to or higher than the target's Toughness, or is a natural 6, the target is affected by the chosen chem just as if they had taken a dose. If the roll is lower than the target's Toughness, they shrug off the chem's effects."
    },
    combi: {
      name: "Combi",
      definition: "A combi-weapon has two profiles. When it is fired, pick one of the two profiles and use it for the attack. Due to the compact nature of these weapons, they often have less capacity for ammunition, and are prone to jamming and other minor issues. When making an Ammo test for either of the weapons, roll twice and apply the worst result. However, unlike most weapons that have two profiles, ammo for the two parts of the combi-weapon are tracked separately - if one profile runs Out of Ammo, the other can still fire unless it has also run Out of Ammo."
    },
    concussion: {
      name: "Concussion",
      definition: "Any fighter hit by a Concussion weapon will have their Initiative reduced by 2, to a minimum of 6+, until the end of the round. Any vehicle hit by a Concussion weapon will suffer a -2 penalty to all Handling tests until the end of the round."
    },
    crew_operated: {
      name: "Crew Operated",
      definition: "This Trait indicates that a weapon fitted to a vehicle is operated by the crew of the vehicle. This weapon may be used during the vehicle's activation. It uses the BS characteristic of the vehicle's crew. In addition, the Unwieldy trait has no effect on this weapon."
    },
    cursed: {
      name: "Cursed",
      definition: "A fighter hit by a weapon with the Cursed trait must pass a Willpower test or gain the Insane condition."
    },
    deflagrate: {
      name: "Deflagrate",
      definition: "After fully resolving a hit with this weapon against a fighter, if any damage was inflicted, the fighter suffers an additional automatic hit with the weapon's profile. This additional hit will not itself cause an additional hit."
    },
    defoliate: {
      name: "Defoliate",
      definition: "Carnivorous Plants hit by a weapon with the Defoliate Trait immediately take D3 Damage. Brainleaf Zombies hit by a weapon with the Defoliate Trait lose a wound and are removed from the battlefield if they suffer an Out of Action result on the Injury dice."
    },
    demolitions: {
      name: "Demolitions",
      definition: "Grenades with the Demolitions trait can be used when making close combat attacks against scenery targets (such as locked doors or scenario objectives). A fighter who uses a grenade in this way makes one attack (regardless of how many Attack dice they would normally roll), which hits automatically."
    },
    digi: {
      name: "Digi",
      definition: "A Digi weapon is usually worn mounted on a ring or hidden inside a glove. It can be used in addition to any other Melee weapon carried by the fighter, granting an additional close combat attack. A weapon with this Trait does not count towards the maximum number of weapons a fighter can carry. However, the maximum number of weapons with this Trait a fighter can carry is 10."
    },
    disarm: {
      name: "Disarm",
      definition: "If the hit roll for an attack made with a Disarm weapon is a natural 6, the target cannot use any weapons when making Reaction attacks for the remainder of that round - they make unarmed attacks instead."
    },
    drag: {
      name: "Drag",
      definition: "If a fighter is hit by a Drag weapon but not taken Out of Action, the attacker can attempt to drag the target closer after the attack has been resolved. If they do, roll a D6. If the score is equal to or higher than the target's Strength, the target is dragged D3\" straight towards the attacker, stopping if they hit any terrain. If they move into another fighter (other than the attacker), both fighters are moved the remaining distance towards the attacker. If the weapon also has the Impale special rule and hits more than one fighter, only the last fighter to be hit can be dragged."
    },
    entangle: {
      name: "Entangle",
      definition: "Hits scored by weapons with the Entangle trait cannot be negated by the Parry trait. In addition, if the hit roll for an Entangle weapon is a natural 6, any Reaction attacks made by the target have an additional -2 hit modifier."
    },
    esoteric: {
      name: "Esoteric",
      definition: "An Esoteric weapon does not conform to standard Imperial patterns or fittings, as such they may never be given any Weapon Accessories, upgraded or modified in any way."
    },
    exclusive: {
      name: "Exclusive",
      definition: "An Exclusive weapon cannot be purchased from the Trading Post, a gang may only purchase it if it appears on their gang equipment lists."
    },
    fear: {
      name: "Fear",
      definition: "If this attack would result in an Injury roll being made for any reason, no Injury roll is made and instead the opposing player makes a Nerve test for the target, subtracting 2 from the result. If the test fails, the target is immediately Broken and runs for cover."
    },
    firestorm_x: {
      name: "Firestorm (X)",
      definition: "When firing with a Firestorm weapon, a successful hit roll scores a number of hits to the model closest to the weapon equal to the number of bullet holes on the Firepower dice. In addition, the controlling player can roll more than one Firepower dice, up to the number shown in brackets (for example, when firing a Firestorm (2) weapon, up to two Firepower dice can be rolled). Make an Ammo check for each Ammo symbol that is rolled. If any of them fail, the gun runs Out of Ammo. If two or more of them fail, the gun has jammed and cannot be used for the rest of the battle."
    },
    fixed: {
      name: "Fixed",
      definition: "A fixed weapon is not included on a fighter's card, but is instead represented by a weapon on its own base. Fixed weapons can only be moved by fighters who begin their activation in base contact with the weapon and take the Move Weapon (Double) action. This action allows a fighter to move up to their Movement characteristic and then place the weapon in base contact with themselves when they finish moving. Fighters in base contact with a fixed weapon count it as if it were a weapon on their Fighter card (i.e., they can aim, shoot and reload it as normal), provided there are no enemy fighters also in base contact with the weapon."
    },
    flare: {
      name: "Flare",
      definition: "A model hit by a weapon with the Flare trait, or who is touched by a Blast marker fired from a weapon with the Flare trait, is Revealed if the battlefield is in darkness (see Pitch Black). If a weapon has both the Flare trait and the Blast (X\") trait, after determining where the Blast marker ends up, leave it in place. In the End phase, roll a D6. On a 4+, the flare goes out and the marker is removed, otherwise it remains in play. While the Blast marker is on the battlefield, all models touched by it are Revealed."
    },
    flash: {
      name: "Flash",
      definition: "If a model is hit by a weapon with the Flash trait, no wound roll is made. Instead, if the target is a fighter they must make an Initiative test, and if they are a vehicle they must make a Handling test. If the test is failed, they become subject to the Blind condition. A Blind model loses their Ready marker; if they do not have a Ready marker, they do not gain a Ready marker at the start of the following round. Until the next time the model is activated, they cannot make any attacks other than Reaction attacks, for which any hit rolls will only succeed on a natural 6."
    },
    force: {
      name: "Force",
      definition: "In the hands of a non-psyker a Force Weapon has no additional effects. However, when wielded by a fighter with either the Sanctioned Psyker or Non-sanctioned Psyker special rule, the weapon gains both the Power and Sever traits."
    },
    gas: {
      name: "Gas",
      definition: "When a fighter is hit by an attack made by a weapon with the Gas trait, they do not become Prone and Pinned and a wound roll is not made. Instead, roll a D6. If the result is equal to or higher than the target's Toughness, or is a natural 6, make an Injury roll for them (regardless of their Wounds characteristic). Otherwise, they shrug off the effects of the gas. No save roll can be made against a weapon with this Trait. When a vehicle is hit by an attack made by a weapon with the Gas trait a wound roll is not made. Instead, roll a D6. If the result is equal to or higher than the target's rear Toughness, or is a natural 6, they suffer a Driver Wounded result on the Crew Damage table. If the roll is lower than the target's Toughness, they shrug off the effects of the gas. No save roll can be made against a weapon with this Trait."
    },
    graviton_pulse: {
      name: "Graviton Pulse",
      definition: "Instead of rolling to wound normally with this weapon, any fighter caught in the Blast must instead roll equal to or under their Strength on a D6 (a roll of 6 always counts as a fail), or suffer Damage with no armour save allowed; any vehicle caught in the Blast must instead roll equal or over the Toughness value of the facing hit on a D6 (a roll of a 6 always counts as a success), or suffer a hit to the Body with no armour save allowed. After the weapon has been fired, leave the Blast marker in place. For the remainder of the round, any model moving through this area will use 2\" of their Movement for every 1\" they move (note this affects all vehicles regardless of their Locomotive special rule). Remove the Blast marker during the End phase."
    },
    grenade: {
      name: "Grenade",
      definition: "Despite being Wargear, grenades are treated as a special type of ranged weapon. A fighter equipped with grenades can throw one as a Shoot (Basic) action. Grenades do not have a Short range, and their Long range is determined by multiplying the fighter's Strength by the amount shown. A fighter can only carry a limited number of grenades. The Firepower dice does not need to be rolled when attacking with a grenade. Instead, after the attack has been resolved, it is assumed that the Ammo symbol has been rolled and an Ammo test is made automatically. If this is failed, grenades cannot be reloaded; the fighter has run out of that type of grenade and cannot use them for the remainder of the battle."
    },
    gunk: {
      name: "Gunk",
      definition: "A fighter hit by a weapon with the Gunk Trait becomes subject to the Gunked condition. Gunked fighters reduce their Movement characteristic by 1 to a minimum of 1 and don't add D3\" to their movement when making a Charge action. In addition, they subtract 1 from the dice roll when making an Initiative check. Gunked fighters are also more flammable and catch fire on a 2+, rather than a 4+, when hit by a weapon with the Blaze trait. The Gunked condition lasts until the End phase or until the fighter catches fire after being hit by a weapon with the Blaze Trait."
    },
    haemophagic: {
      name: "Haemophagic",
      definition: "When resolving a Toxin attack with this weapon, apply a +1 modifier if this weapon has previously hit the target."
    },
    haywire: {
      name: "Haywire",
      definition: "When a vehicle is hit by a weapon with this Trait, instead of rolling to wound roll a D6; on a result of 4+ the vehicle is wounded. If a weapon with the Haywire trait has a Strength of * then it causes no damage to fighters and does not cause them to become Prone and Pinned, otherwise resolve any hits normally."
    },
    hexagrammatic: {
      name: "Hexagrammatic",
      definition: "The ammo used by this weapon has been specially treated to defeat psychic defences and severely harm Psykers. Hits from weapons with this Trait ignore saves provided by psychic powers. Additionally, weapons with this Trait will inflict double damage against Psykers."
    },
    impale: {
      name: "Impale",
      definition: "If an attack made by this weapon hits a fighter and wounds the target, and the save roll is unsuccessful (or no save roll is made), the projectile continues through them and might hit another model! Trace a straight line from the target, directly away from the attacker. If there are any models within 1\" of this line, and within the weapon's Long range, the one that is closest to the target is at risk of being hit. Roll a D6. On a 3 or more, resolve the weapon's attack against that model, subtracting 1 from the Strength. The projectile can continue through multiple fighters in this way, but if the Strength is reduced to 0, it cannot hit any more models."
    },
    lance: {
      name: "Lance",
      definition: "While subjected to the Mounted condition, increase the Strength characteristic of this weapon by 1 for any attacks made as part of a Ride By or a Charge (Double) action."
    },
    lance_bomb: {
      name: "Lance-Bomb",
      definition: "The first successful hit scored by this weapon each battle is resolved using the Primed profile, all subsequent hits are resolved using the Spent profile."
    },
    limited: {
      name: "Limited",
      definition: "This special rule is applied to some special ammo types which can be purchased for weapons. If a weapon fails an Ammo test while using Limited ammo, they have run out - that ammo type is deleted from their Fighter or Vehicle card, and cannot be used again until more of that special ammo is purchased from the Trading Post. This is in addition to the normal rules for the weapon running Out of Ammo. The weapon can still be reloaded as normal, using its remaining profile(s)."
    },
    melee: {
      name: "Melee",
      definition: "This weapon can be used during close combat attacks."
    },
    melta: {
      name: "Melta",
      definition: "If a Short range attack from a weapon with this Trait reduces a fighter to 0 wounds, no Injury dice are rolled - instead, any Injury dice that would be rolled cause an automatic Out of Action result. If a Short range attack from a weapon with this Trait wounds a vehicle, roll an additional Damage dice. If a weapon with this Trait has no Short range, then the Trait applies to all attacks made by it."
    },
    paired: {
      name: "Paired",
      definition: "A fighter that is armed with Paired weapons counts as being armed with dual weapons with the Melee trait for the purposes of calculating the number of Attack dice they will roll. Additionally, when making a Charge (Double) action, their Attacks characteristic is doubled. Fighters subject to the Mounted condition gain no benefit from this Trait"
    },
    parry: {
      name: "Parry",
      definition: "After an enemy makes close combat attacks against a fighter armed with a Parry weapon, the fighter can force the attacking player to re-roll one successful hit. If the fighter is armed with two Parry weapons, they can force the attacking player to re-roll two successful hits instead."
    },
    passenger_operated: {
      name: "Passenger Operated",
      definition: "This Trait indicates that a weapon fitted to a vehicle is operated by fighters other than the Crew of the vehicle. This weapon may be used during a fighter's activation as if they were equipped with it as long as they are within 1\" of the weapon. A weapon with this Trait cannot be fired more than once per round. In addition, the Unwieldy trait has no effect on this weapon."
    },
    phase: {
      name: "Phase",
      definition: "Save rolls granted by armour or field armour cannot bemade against a weapon with this Trait. If the target ishit, treat them as having no save. Note, however, that saves granted by a special rule may still be made-this Trait only ignores armour and field armour. Vehicles cannot make armour saves against a weaponwith this Trait."
    },
    power: {
      name: "Power",
      definition: "The weapon is surrounded by a crackling power field. Attacks made by Power weapons cannot be Parried except by other weapons with the Power trait. In addition, if the hit roll for a Power weapon is a natural 6, no save roll can be made against the attack (except Field armour save rolls) and its Damage is increased by 1."
    },
    power_pack: {
      name: "Power Pack",
      definition: "A weapon with this trait is worn mounted on the power pack of an Ironhead Squat and does not count towards the maximum number of weapons a fighter can carry. However, a fighter cannot have more than two weapons with this trait. If the weapon also has the Melee or Sidearm trait it can be used in addition to any other weapon carried by the fighter, granting an additional close combat attack."
    },
    pulverise: {
      name: "Pulverise",
      definition: "After making an Injury roll for an attack made by this weapon, the attacking player can roll a D6. If the result is equal to or higher than the target's Toughness, or is a natural 6, they can change one Injury dice from a Flesh Wound result to a Serious Injury result, or if targeting a vehicle roll an additional Damage dice."
    },
    rad_phage: {
      name: "Rad-phage",
      definition: "After fully resolving any successful hits a fighter suffers from a weapon with this Trait, roll an additional D6. On a 4+, the fighter will suffer an additional Flesh Wound."
    },
    rapid_fire_x: {
      name: "Rapid Fire (X)",
      definition: "When firing with a Rapid Fire weapon, a successful hit roll scores a number of hits equal to the number of bullet holes on the Firepower dice. In addition, the controlling player can roll more than one Firepower dice, up to the number shown in brackets (for example, when firing a Rapid Fire (2) weapon, up to two Firepower dice can be rolled). Make an Ammo test for each Ammo symbol that is rolled. If any of them fail, the gun runs Out of Ammo. If two or more of them fail, the gun has jammed and cannot be used for the rest of the battle. If a Rapid Fire weapon scores more than one hit, the hits can be split between multiple targets. The first must be allocated to the original target, but the remainder can be allocated to other models within 3\" of the first who are also within range and line of sight. These must not be any harder to hit than the original target - if a target in the open is hit, an obscured target cannot have hits allocated to it. Allocate all of the hits before making any wound rolls."
    },
    reckless: {
      name: "Reckless",
      definition: "Reckless weapons are indiscriminate in what they target: Before making a ranged attack with a Reckless weapon, randomly determine the target of the attack from all eligible models (including friendly models) within this model's line of sight and range of the weapon. Attacks made with a Reckless weapon that also has the Melee trait are randomly distributed between any models (including friendly models) that are in base contact with this fighter. Attacks made with a Reckless weapon that also has the Versatile trait are randomly distributed between any models (including friendly models) that are within the weapon's Long range. If the weapon also has the Rapid Fire (X) trait, then any additional hits generated from the Firepower dice must be distributed among the maximum number of eligible targets. If there are more hits than eligible targets, the attacker may choose where any spare hits are allocated."
    },
    rending: {
      name: "Rending",
      definition: "If the roll to wound with a Rending weapon is a 6, then the attack causes 1 extra point of Damage if the target is a fighter, or rolls an extra Damage dice if the target is a vehicle."
    },
    scarce: {
      name: "Scarce",
      definition: "Ammunition is hard to come by for Scarce weapons, and as such they cannot be reloaded - once they run Out of Ammo, they cannot be used again during the battle."
    },
    scattershot: {
      name: "Scattershot",
      definition: "When a target is hit by a Scattershot attack, make D6 wound rolls instead of 1."
    },
    seismic: {
      name: "Seismic",
      definition: "If a fighter hit by a weapon with this Trait is Standing and Active, they will always become Prone and Pinned - even if they have an ability that would normally allow them to avoid becoming Prone and Pinned by ranged attacks. If a vehicle is hit by a weapon with this Trait, after the attack has been fully resolved the vehicle must make a Loss of Control test. In addition, if the wound roll for a Seismic weapon is a natural 6, no save roll can be made against that attack."
    },
    sever: {
      name: "Sever",
      definition: "If a wound roll from a weapon with this Trait reduces a fighter to 0 wounds, no Injury dice are rolled - instead, any Injury dice that would be rolled cause an automatic Out of Action result."
    },
    shield_breaker: {
      name: "Shield Breaker",
      definition: "Weapons with this Trait ignore the effects of the Assault Shield/Energy Shield trait. In addition, when a target equipped with Field Armour is wounded by a weapon with this Trait, they must roll two dice when making a Field Armour save and choose the lower result."
    },
    shock: {
      name: "Shock",
      definition: "If the hit roll for a Shock weapon is a natural 6, the wound roll is considered to automatically succeed (no wound roll needs to be made)."
    },
    shred: {
      name: "Shred",
      definition: "If the wound roll for a weapon with this trait is a natural 6, then the Armour Penetration of the weapon is doubled."
    },
    sidearm: {
      name: "Sidearm",
      definition: "Weapons with this Trait can be used to make ranged attacks, and can also be used in close combat to make a single attack. Note that their Accuracy bonus only applies when making a ranged attack, not when used to make a close combat attack."
    },
    silent: {
      name: "Silent",
      definition: "In scenarios that use the Sneak Attack special rules, there is no test to see whether the alarm is raised when this weapon is fired. Additionally, if using the Visibility (X\") rules, a model using this weapon that is Hidden does not become Revealed."
    },
    single_shot: {
      name: "Single Shot",
      definition: "This weapon can only be used once per battle. After use, it counts as having automatically failed an Ammo test. There is no need to roll the Firepower dice unless the weapon also has the Rapid Fire (X) trait."
    },
    smoke: {
      name: "Smoke",
      definition: "Smoke weapons do not cause hits on models - they do not cause Pinning, and cannot inflict wounds. Instead, mark the location where they hit with a marker. They generate an area of dense smoke, which extends 2.5\" out from the centre of the marker, vertically as well as horizontally. Models can move through the smoke, but it blocks line of sight, so attacks cannot be made into, out of or through it. In the End phase, roll a D6. On a 4 or less, the cloud dissipates and the marker is removed."
    },
    template: {
      name: "Template",
      definition: "Template weapons use the Flame template to determine how many targets they hit."
    },
    toxin: {
      name: "Toxin",
      definition: "Instead of making a wound roll for a Toxin attack, roll a D6. If the result is equal to or higher than the target's Toughness, or is a natural 6, make an Injury roll for them (regardless of their Wounds characteristic). If the roll is lower than the target's Toughness, they shrug off the toxin's effects. This attack has no effect on vehicles."
    },
    twin_linked: {
      name: "Twin-linked",
      definition: "When a model makes a ranged attack with this weapon, they may re-roll any number of the Ammo dice rolled. However, they must accept the result of the re-roll, even if it is worse."
    },
    unstable: {
      name: "Unstable",
      definition: "If the Ammo symbol is rolled on the Firepower dice when attacking with this weapon, there is a chance that, in addition to needing an Ammo test, the weapon will prove as hazardous to its user as the enemy. Roll a D6. On a 1, 2 or 3, something has gone wrong; if the attacker is a fighter they are taken Out of Action, if the weapon is mounted on a vehicle the vehicle suffers a Catastrophic Hit to the body and the weapon cannot be used again for the rest of the battle. The attack is still resolved against the target."
    },
    unwieldy: {
      name: "Unwieldy",
      definition: "A Shoot action made with this weapon counts as a Double action as opposed to a Basic action. In addition, a fighter who uses a weapon with both the Unwieldy and Melee traits in close combat cannot use a second weapon at the same time - this one requires both hands to use."
    },
    versatile: {
      name: "Versatile",
      definition: "The wielder of a Versatile weapon does not need to be in base contact with an enemy model in order to engage them in melee during their activation. They may engage and make close combat attacks against an enemy model during their activation, so long as the distance between their base and that of the enemy model is equal to or less than the distance shown for the Versatile weapon's Long range characteristic. For example, a fighter armed with a Versatile weapon with a Long range of 2\" may engage an enemy model that is up to 2\" away. The enemy model is considered to be engaged, but may not in turn be Engaging the fighter armed with the Versatile weapon unless they too are armed with a Versatile weapon, and so may not be able to make Reaction attacks. At all other times other than during this fighter's activation, Versatile has no effect."
    },
    vortex: {
      name: "Vortex",
      definition: "A fighter who is hit by a weapon with the Vortex trait must make an Initiative test. If successful, move them the shortest distance to avoid the Blast marker. Otherwise, they immediately go Out of Action. Any obstacles touched by a Vortex Blast marker are also removed from the battlefield. If a vehicle is hit by a weapon with the Vortex trait, they are immediately Wrecked and removed from the battlefield. After working out the effects of an attack with a weapon with the Vortex trait, leave the blast marker on the battlefield. At the start of each End phase, roll on the Vortex Stability table for each Vortex Blast marker:"
    },
    web: {
      name: "Web",
      definition: "If the wound roll for a Web attack against a fighter is successful, no wound is inflicted, and no save roll or Injury roll is made. Instead, the target automatically becomes Webbed."
    },
    terrify: {
      name: "Terrify(Double)",
      definition: "Choose a single enemy fighter that is both within 18\" and line of sight of this fighter. That fighter must immediately take a Nerve test with a -3 modifier applied to the roll or become subject to the Broken condition."
    }
  },
  settlements: {
    archaeotech_device: {
      name: "Archaeotech Device",
      description: "Your gang has discovered a strange device from the distant past. Once per battle, one fighter from your gang may use a special Free action to activate the device. Roll a D6: On a 1-2, nothing happens. On a 3-4, all fighters within 6\" gain a 6+ save until the end of the round. On a 5-6, all friendly fighters within 6\" may immediately make a free Move (Simple) action."
    },
    generatorium: {
      name: "Generatorium",
      description: "Your gang controls a power generator. At the start of each battle, nominate one fighter - that fighter's weapons with the Shock trait gain +1 Strength for the duration of the battle."
    },
    water_still: {
      name: "Water Still",
      description: "Your gang has access to clean water. All fighters in your gang gain +1 to their Recovery tests made during the End Phase of each round."
    },
    smelting_works: {
      name: "Smelting Works",
      description: "Your gang controls a smelting facility. Once per battle, you may re-roll a single failed Ammo check."
    },
    workshop: {
      name: "Workshop",
      description: "Your gang has access to a well-equipped workshop. At the start of each battle, nominate one fighter - that fighter may repair a single weapon with the Unstable or Scarce trait, removing that trait for the duration of the battle."
    },
    gambling_den: {
      name: "Gambling Den",
      description: "Your gang runs a gambling operation. If you win the battle, gain an additional D6x10 credits. If you lose, lose D3x10 credits."
    },
    fighting_pit: {
      name: "Fighting Pit",
      description: "Your gang operates a fighting pit. One fighter from your crew gains the Combat Master skill for the duration of the battle (nominate during deployment)."
    },
    doc_shop: {
      name: "Doc Shop",
      description: "Your gang has access to medical facilities. Roll a D6 for each Seriously Injured fighter at the end of the battle: on a 6, they count as having rolled Out Cold instead of their actual result."
    }
  },
  tactics: {
    decks: [
      {
        id: "John_deck",
        name: "John's Deck",
        cards: [
          {
            id:"t_click",
            name:"...Click",
            text:"<b>Play this gang tactic after an enemy model has completed a Shoot (Basic) action after fully resolving any hits.</b><br/><br/>\
            The weapon that was used to make the Shoot (Basic) action immediately runs Out of Ammo as if it had failed an Ammo test."
          },
          {
            id:"t_b_and_switch",
            name:"Bait and Switch",
            text:"<b>Play this card instead of activating a fighter.</b><br/><br/>\
            Take a Ready marker from any of your fighters and place it on a fighter who has already activated this round."
          },
          {
            id:"t_bd_champ",
            name:"Blood-Drenched Champion",
            text:"<b>Play this card instead of activating a fighter.</b><br/><br/>\
            An enemy fighter of your choice that is visible to your leader must pass a Nerve test, subtracting 2 from the result, or become Broken."
          },
          {
            id:"t_blust",
            name:"Bloodlust",
            text:"<b>Play this card when a friendly fighter makes a Charge (Double) action.</b><br/><br/>\
            Choose a friendly visible fighter with a Ready marker within 8\" of the charging fighter. Once the charging fighter's Charge is fully resolved, the chosen fighter may immediately make a Charge (Double) action. Remove their Ready marker once this is Resolved."
          },
          {
            id:"t_dirty_tactics",
            name:"Dirty Tactics",
            text:"<b>Play this gang tactic at the end of a friendly fighter's activation.</b><br/><br/>\
            Immediately activate another Ready friendly fighter anywhere on the battlefield."
          },
          {
            id:"t_fight_another_day",
            name:"Fight Another Day",
            text:"<b>Play this gang tactic when a friendly fighter is taken Out of Action.</b><br/><br/>\
            Do not make a Lasting Injury roll against the fighter. Instead, treat the fighter as being Out Cold, as if a roll of 12-26 on the Lasting Injury table had been made against them."
          },
          {
            id:"t_rat_warren",
            name:"Rat Warren",
            text:"<b>Play this gang tactic after your opponent activates one of their fighters.</b><br/><br/>\
            If the fighter they have just activated does not have line of sight to any friendly fighters, they must make an Intelligence check. If this check is failed, you may place that fighter anywhere within 6\" of their current location. You may not place that fighter within 3\" of any of your fighters."
          },
          {
            id:"t_rise_f_ashes",
            name:"Rise From the Ashes",
            text:"<b>Play this gang tactic at the start of any round, before players Roll of Priority.</b><br/><br/>\
            For the duration of this round and the following two rounds, your gang automatically passes all Bottle tests."
          },
          {
            id:"t_s_tinnels",
            name:"Service Tunnels",
            text:"<b>Play when deploying your gang.</b><br/><br/>\
            One fighter chosen by you from your starting Crew gains the Infiltrate skill for the duration of this battle and may be deployed accordingly."
          },
          {
            id:"t_sum_s",
            name:"Sump Slump",
            text:"<b>Play at the start of any turn.</b><br/><br/>\
            Immediately remove D3 Barricades of your choice from anywhere on the board."
          },
          {
            id:"t_tainted_meat",
            name:"Tainted Meat",
            text:"<b>Play this card immediately after it has been drawn during Gang Tactics & Bonuses of the pre-battle sequence.</b><br/><br/>\
            Nominate one fighter from your opponent's starting Crew. That fighter starts this battle with one Flesh Wound."
          },
          {
            id:"t_wyd_coin",
            name:"Wyrd Occurrence",
            text:"<b>Play this gang tactic when activating a friendly fighter.</b><br/><br/>\
            This fighter immediately performs one of the following Wyrd Power actions (without the need to make a Willpower check). Their activation then ends: <br/>\
            Chronomancy - Freeze Time (Double), <br/>\
            Divination - Misfortune (Basic), <br/>\
            Pyromancy - Molten Bolt (Basic)."
          }
        ]
      },
      {
        id: "connor_deck",
        name: "Connor's Deck",
        cards: [
          {
            id:"t_click2",
            name:"...Click",
            text:"<b>Play this gang tactic after an enemy model has completed a Shoot (Basic) action after fully resolving any hits.</b><br/><br/>\
            The weapon that was used to make the Shoot (Basic) action immediately runs Out of Ammo as if it had failed an Ammo test."
          },
          {
            id:"t_cloying_darkness",
            name:"Cloying Darkness",
            text:"<b>Play this gang tactic when an enemy fighter performs a Fight (Basic) action.</b><br/><br/>\
            Darkness swirls around the enemy fighter, seeming to grasp at their weapons. Apply a -D3 modifier to the fighter's Hit roll."
          },
          {
            id:"t_dancing_shadows",
            name:"Dancing Shadows",
            text:"<b>Play this card when an enemy fighter makes a ranged attack.</b><br/><br/>\
            The attacking enemy fighter must pass an Intelligence check. If they fail, the attack automatically misses and their activation ends."
          },
          {
            id:"t_darkness_decends",
            name:"Darkness Decends",
            text:"<b>Play at the start of any round other than the first, after rolling for Priority.</b><br/><br/>\
            At a pre-planned signal, the lights go out and the battlefield is plunged into darkness. For the remainder of the battle, the Pitch Black scenario rules are in effect. During each End phase, your opponent may roll a D6. On a 6, the Pitch Black rules are lifted and the lights come back on."
          },
          {
            id:"t_disquieting_susurration",
            name:"Disquieting Susurration",
            text:"<b>Play this gang tactic when a friendly Delaque fighter fails their Willpower check to perform a Wyrd Power action.</b><br/><br/>\
            You may immediately re-roll the failed Willpower check. However, you must accept the result of the second roll, even if it is worse than the first."
          },
          {
            id:"t_faces_of_gloom",
            name:"Faces of Gloom",
            text:"<b>Play this gang tactic when an enemy fighter performs a Shoot (Basic) action.</b><br/><br/>\
            Faces loom from the darkness of the underhive, making the fighter think they are surrounded by enemies. Apply a -D3 modifier to the fighter's Hit roll."
          },
          {
            id:"t_fear_of_betrayal",
            name:"Fear of Betrayal",
            text:"<b>Play this card instead of activating a fighter.</b><br/><br/>\
            An enemy fighter of your choice with a Ready marker must pass a Cool check or immediately make a Shoot (Basic) action against the closest visible fighter from their own gang, as if they were an enemy fighter. They then lose their Ready marker."
          },
          {
            id:"t_mass_infiltration",
            name:"Mass Infiltration",
            text:"<b>Play this card during deployment.</b><br/><br/>\
            Choose D3 fighters in your Crew. For the duration of this battle, these fighters gain the Infiltrate skill."
          },
          {
            id:"t_over_here",
            name:"Over Here...",
            text:"<b>Play when an enemy model makes a Move (Simple) action.</b><br/><br/>\
            Instead of moving normally, the chosen enemy fighter moves D6\" in a direction chosen by you, stopping if they come into contact with any terrain."
          },
          {
            id:"t_shape_shifting",
            name:"Shape Shifting",
            text:"<b>Play this gang tactic when a friendly Delaque fighter becomes Seriously Injured.</b><br/><br/>\
            Immediately remove the Seriously Injured fighter from the battlefield and replace them with another member of the gang that is not currently on the battlefield (i.e., a fighter that is not part of your starting Crew). Do not make a Lasting Injury roll against the Seriously injured fighter. Instead, they go straight into Recovery as if a roll of 31-45, Grievous Injury, had been made against them."
          },
          {
            id:"t_shooting_at_shadows",
            name:"Shooting at Shadows",
            text:"<b>Play this gang tactic when a friendly Delaque fighter is hit by an enemy ranged attack.</b><br/><br/>\
            Roll a D6. On a 2+, the hit has no effect against the chosen fighter. On a 1, they are affected as normal but this gang tactic is not discarded."
          },
          {
            id:"t_snakes_in_the_dark",
            name:"Snakes in the Dark",
            text:"<b>Play this gang tactic at the start of the Deployment step of the pre-battle sequence, before any fighters have been deployed.</b><br/><br/>\
            If the scenario requires you to deploy your gang first, you may redeploy any number of your fighters after your opponent has deployed their gang. In other words, you may remove any number of your fighters from the battlefield and deploy them again. Redeployed fighters must follow the deployment rules as determined by the scenario."
          }
        ]
      },
      {
        id: "Matthews_deck",
        name: "Matthew's Deck",
        cards: [
          {
            id:"t_click3",
            name:"...Click",
            text:"<b>Play this gang tactic after an enemy model has completed a Shoot (Basic) action after fully resolving any hits.</b><br/><br/>\
            The weapon that was used to make the Shoot (Basic) action immediately runs Out of Ammo as if it had failed an Ammo test."
          },
          {
            id:"t_blood_money",
            name:"Blood Money",
            text:"<b>Play this card when an enemy Champion or Leader is taken Out of Action.</b><br/><br/>\
            Your gang immediately adds a number of credits equal to half the Champion's or Leader's cost (rounding up) to its stash."
          },
          {
            id:"t_crossfire",
            name:"Crossfire",
            text:"<b>Play this card when a fighter makes a ranged attack against a target who has already been shot at by a friendly fighter.</b><br/><br/>\
            The hit roll succeeds automatically."
          },
          {
            id:"t_point_blank_shot",
            name:"Point-Blank Shot",
            text:"<b>Play this card when a fighter makes a Fight action or a Charge action.</b><br/><br/>\
            Pick one of the fighter's ranged weapons that does not have the Blast trait or Template trait. For the duration of this turn, that weapon can be used in close combat in the same way as a pistol."
          },
          {
            id:"t_prop_prep_2",
            name:"Proper Preparation",
            text:"<b>Play this gang tactic before either player deploys their gang.</b><br/><br/>\
            One friendly fighter's weapons all gain the Plentiful trait, unless they already have the Scarce trait in which case they lose the Scarce trait."
          },
          {
            id:"t_reckless_charge",
            name:"Reckless Charge",
            text:"<b>Play this card when a fighter makes a Charge (Double) action.</b><br/><br/>\
           The fighter counts as having rolled a 3 on the D3 to determine their maximum charge range."
          },
          {
            id:"t_rejuve_stimm",
            name:"Rejuve Stimm",
            text:"<b>Play this card instead of activating a fighter.</b><br/><br/>\
            Choose any friendly fighter who has suffered at least one Wound. This fighter immediately regains any lost Wounds."
          },
          {
            id:"t_snapfire",
            name:"Snap Fire",
            text:"<b>Play this card after an enemy fighter completes an attack with a ranged weapon.</b><br/><br/>\
            A readied fighter in your gang may immediately take a shot at the enemy fighter with a Pistol or Basic weapon. However, they must subtract 1 from the hit roll."
          },
          {
            id:"t_reload",
            name:"Reload!",
            text:"<b>Play this gang tactic at the start of any End phase.</b><br/><br/>\
            Every friendly model may perform an immediate free Reload (Simple) action."
          },
          {
            id:"t_service_tinnels1",
            name:"Service Tunnels",
            text:"<b>Play when deploying your gang.</b><br/><br/>\
            One fighter chosen by you from your starting Crew gains the Infiltrate skill for the duration of this battle and may be deployed accordingly."
          },
          {
            id:"t_suppressing_fire",
            name:"Suppressing Fire",
            text:"<b>Play this card after a friendly model fails to hit with a Shoot (Basic) action.</b><br/><br/>\
            The target of the Shoot (Basic) action is placed Prone and Pinned."
          },
          {
            id:"t_whats_a_few_teeth11",
            name:"Whats a Few Teeth",
            text:"<b>Play this when a friendly fighter suffers a Flesh Wound.</b><br/><br/>\
            The Flesh Wound is ignored. Any other effects of the injury still apply."
          }
        ]
      },{
        id: "codys_deck",
        name: "Cody's Deck",
        cards: [
          {
            id:"t_click4",
            name:"...Click",
            text:"<b>Play this gang tactic after an enemy model has completed a Shoot (Basic) action after fully resolving any hits.</b><br/><br/>\
            The weapon that was used to make the Shoot (Basic) action immediately runs Out of Ammo as if it had failed an Ammo test."
          },
          {
            id:"t_dre_surge",
            name:"Adrenaline Surge",
            text:"<b>Play this gang tactic when activating a friendly fighter.</b><br/><br/>\
            The fighter may perform an additional action this activation."
          },
          {
            id:"t_ampavk",
            name:"Ammo Pack",
            text:"<b>Play this gang tactic instead of activating a fighter.</b><br/><br/>\
            Choose a friendly Orlock fighter with the Munitioneer Skill. All friendly fighters within 6\" and line of sight of that fighter that have the Out of Ammo condition may immediately perform a free Reload (Simple) action. A fighter can perform this action even if they would normally be unable to do so (for example, if their weapon has the Scarce trait). Seriously Injured fighters, however, are not affected by this gang tactic."
          },
          {
            id:"t_cfire",
            name:"CrossFire",
            text:"<b>Play this card when a fighter makes a ranged attack against a target who has already been shot at by a friendly fighter.</b><br/><br/>\
            The hit roll succeeds automatically."
          },
          {
            id:"t_prop_prep_3",
            name:"Proper Preparation",
            text:"<b>Play this gang tactic before either player deploys their gang.</b><br/><br/>\
            One friendly fighter's weapons all gain the Plentiful trait, unless they already have the Scarce trait in which case they lose the Scarce trait."
          },
          {
            id:"t_healthy_p",
            name:"Healthy Paranoia",
            text:"<b>Play when activating a fighter.</b><br/><br/>\
           Tuck this card under that fighter's card. For the rest of the battle, the fighter has a 360° vision arc."
          },
          {
            id:"t_last_g",
            name:"Last Gasp",
            text:"<b>Play this gang tactic when a friendly fighter is taken Out of Action.</b><br/><br/>\
            Before the fighter is removed from play, they may perform either a free Shoot (Basic) or Fight (Basic) action."
          },
          {
            id:"t_luck_find",
            name:"Lucky Find",
            text:"<b>Play this gang tactic when activating a model with at least one weapon Out of Ammo.</b><br/><br/>\
            One of the model's weapons is automatically reloaded, no Ammo test is needed."
          },
          {
            id:"t_poimfbl",
            name:"Point Blank Shot",
            text:"<b>Play this card when a fighter makes a Fight action or a Charge action.</b><br/><br/>\
            Pick one of the fighter's ranged weapons that does not have the Blast trait or Template trait. For the duration of this turn, that weapon can be used in close combat in the same way as a pistol."
          },
          {
            id:"t_seismic",
            name:"Seismic Surprise",
            text:"<b>Play this gang tactic when a friendly Orlock fighter performs a Shoot (Basic) action with a frag grenade.</b><br/><br/>\
            Until the end of their activation, this fighter's frag grenades gain the Seismic trait."
          },
          {
            id:"t_solidarity",
            name:"Solidarity",
            text:"<b>Play at the start of any round.</b><br/><br/>\
            For the duration of the round, fighters from your gang automatically pass any Cool checks they make as long as they are within 6\" of another fighter from your gang."
          },
          {
            id:"t_tnails",
            name:"Tough as Nail",
            text:"<b>Play this gang tactic during the Priority phase of any round, after Roll for Priority, but before Ready Fighters.</b><br/><br/>\
            Choose a friendly Orlock fighter with the Gang Hierarchy (x) special rule. For the remainder of this battle, roll a D6 each time the chosen fighter suffers a wound (roll separately for each wound caused by a single attack). On a 2+, that wound is ignored. On a 1, the fighter suffers the wound as normal and this gang tactic is immediately discarded.\
            Should the fighter suffer an injury without suffering a wound (for example, due to a weapon with the Gas trait), this gang tactic is immediately discarded."
          }
        ]
      },{
        id: "seths_deck",
        name: "Seth's Deck",
        cards: [
          {
            id:"t_click5",
            name:"...Click",
            text:"<b>Play this gang tactic after an enemy model has completed a Shoot (Basic) action after fully resolving any hits.</b><br/><br/>\
            The weapon that was used to make the Shoot (Basic) action immediately runs Out of Ammo as if it had failed an Ammo test."
          },
          {
            id:"t_dre_surge2",
            name:"Adrenaline Surge",
            text:"<b>Play this gang tactic when activating a friendly fighter.</b><br/><br/>\
            The fighter may perform an additional action this activation."
          },
          {
            id:"t_babds",
            name:"Bait and Switch",
            text:"<b>Play this card instead of activating a fighter.</b><br/><br/>\
            Take a Ready marker from any of your fighters and place it on a fighter who has already activated this round."
          },
          {
            id:"t_cfaith",
            name:"Call the Faithful",
            text:"<b>Play this card after both sides have deployed.</b><br/><br/>\
            You may add an extra D3 fighters to your Crew (potentially exceeding the normal Crew size for the scenario). These fighters must be chosen randomly from any fighters not already included in your Crew."
          },
          {
            id:"t_ducj3",
            name:"Duck and Cover",
            text:"<b>Play this card when activating a fighter.</b><br/><br/>\
           This turn, the fighter may make two Shoot (Basic) actions, provided they use the same Basic or Pistol weapon for both. After resolving these actions, the fighter may move D3\"."
          },
          {
            id:"t_e_damn",
            name:"Effigy of the Damned",
            text:"<b>Play at the start of any turn.</b><br/><br/>\
           Choose a terrain feature at least 6\" in diameter or a board tile. For the duration of this turn, any models entering or beginning their turns in the affected area must roll to see if they catch fire, just as if they had been hit by a weapon with the Blaze trait."
          },
          {
            id:"t_faithres",
            name:"Faithful and Resolved",
            text:"<b>Play this gang tactic when activating a friendly fighter.</b><br/><br/>\
            The fighter may immediately perform a Universal Article of Faith; no Faith dice are rolled and the Threshold test is automatically passed."
          },
          {
            id:"t_luck_shottt",
            name:"Lucky Shot",
            text:"<b>Play this card after making either a hit roll, a wound roll or an injury roll.</b><br/><br/>\
            You may immediately re-roll all of the dice for the roll you have just made. You must accept the result of the second roll, even if it is worse than the first."
          },
          {
            id:"t_wagain",
            name:"Wrong Again",
            text:"<bPlay when one of your fighters is hit by a ranged attack.</b><br/><br/>\
            Choose any other friendly fighter within range and line of sight of the attacking model. This chosen fighter becomes the new target for the attack, which is resolved as normal."
          },
          {
            id:"t_npris",
            name:"No Prisoners",
            text:"<b>Play at the start of any End phase.</b><br/><br/>\
            For the duration of the End phase, Seriously Injured enemy models making Recovery tests must roll two Injury dice and pick the worst result."
          },
          {
            id:"t_puritythfire",
            name:"Purity Through Fire",
            text:"<b>Play this gang tactic when a friendly House Cawdor fighter makes a Shoot (Basic) or Fight (Basic) action using a weapon with the Blaze trait.</b><br/><br/>\
            Until the end of the fighter's activation, hit targets become subject to the Blaze condition on a 2+, rather than the usual 4+."
          },
          {
            id:"t_refire",
            name:"Reaction Fire",
            text:"<b>Play this gang tactic when an enemy model activates, before they perform any actions.</b><br/><br/>\
           A friendly fighter may immediately perform a Shoot (Basic) action targeting the enemy model. This does not remove their Ready marker if they have one."
          }
        ]
      },
      {
        id: "underdog",
        name: "Underdog Deck",
        cards: [
          {id:"t_scavenge",name:"Scavenge",text:"Start of battle. Gain D3 random equipment items from common list."},
          {id:"t_rad",name:"Rad Pulse",text:"Action. Place 3\" blast within 12\". All fighters take S3 hit ignoring armor."},
          {id:"t_desperate",name:"Desperate Measures",text:"Play when making injury roll. Add +1 to the roll."},
          {id:"t_booby",name:"Booby Trap",text:"Deploy phase. Place marker in terrain. First enemy within 2\" takes S4 D2 hit."}
        ]
      }
    ]
  },
  scenarios: [
    {   
        id:"s_gunktank",
        name:"Gunk Tank",
        text:"Two gangs scramble to drain the most gunk from an abandoned gunk tank.<br/><br/> \
        <b>Battlefield</b> Standard Setup, Place Gunk Tank in center of field <br/><br/> \
        <b>Crews</b> Both Teams use Random Selection (7) <br/><br/> \
        <b>Deployment</b> 12 inches from centerline, Defender deploys first <br/><br/> \
        <b>Gang Tactics</b> Choose 2. Gain +1 random for every 100 < than opponent <br/><br/> \
        <b>Ending the Battle</b> Only one gang remains on the field <br/><br/> \
        <b>Victory</b> The gang that escaped with the most gunk tokens is the winner -- otherwise the battle is a draw <br/><br/> \
        <b>Rewards</b><br/>Credits: D6*10 for each Gunk Tank <br/><br/>\
        Experience: 1xp for participation; Each fighter that escaped with gunk tank also earns 1xp.<br/><br/>\
        Reputation: If either gang bottled out, they lose 1 Reputation.<br/><br/> \
        Resources: Each Gunk tank is worth D6 Power or D6 Sustenance <br/><br/> \
        <b>The Gunk Tank</b> Central to the fight is the Gunk Tank, with both sides trying to siphon off as much precious gunk as they can while stopping their opponent from doing the same. The Gunk Tank can be represented by any suitable large container (ideally at least 3\" in diameter) <br/><br/>\
        In addition to the standard rules for a Gunk Tank (see page 50), a fighter in base contact with the Gunk Tank can make the Siphon (Double) action. If successful, place a gunk token on their Fighter card or next to their model to show they are in possession of precious gunk. A fighter can only carry one gunk token at a time, and if Seriously Injured or taken Out of Action will drop their gunk token (place the token next to the downed fighter or where they were before they are removed from the battlefield). <br/><br/>\
        <b>Lugging Gunk</b><br/>Carrying gunk is not without its dangers. A fighter carrying a gunk token is more flammable and if hit by a weapon with the Blaze trait is automatically set on fire without the need to roll (note this does not cause them to drop their gunk token). <br/><br/> \
        The purpose of gunk is to escape with it, and any fighter carrying a gunk token may be removed from the battlefield by moving into base contact with any battlefield edge. Fighters removed in this way do not count as either Seriously Injured or Out of Action for the purposes of Bottle tests. <br/><br/> \
        If one gang forces the other gang to flee or takes all of their fighters Out of Action, they add D3 gunk tokens to their total before ending the battle. <br/>"
    },
    {
      id:"s_mining_expedition",
      name:"Mining Expedition",
      text:"In the Mining Expedition scenario, two gangs fight to extract precious scrap from the underhive. <br/><br/> \
        <b>Battlefield</b> Standard Setup. When setting up terrain, the players should designate four pieces of terrain as Prospecting Sites (see opposite). These pieces should be roughly 4\" across and at least 8\" from any battlefield edge. <br/><br/> \
        <b>Crews</b> Both Teams use Custom Selection (10)<br/><br/> \
        <b>Deployment</b> 12 inches from centerline, Defender deploys first<br/><br/> \
        <b>Gang Tactics</b> Choose 2. Gain +1 random for every 100 < than opponent <br/><br/> \
        <b>Ending the Battle</b> The battle ends when either all sites have been successfully prospected or only one gang has fighters remaining on the battlefield. <br/><br/> \
        <b>Victory</b> The gang who prospected the most sites is the winner; if both gangs mined out the same number of sites then the battle is a draw. <br/><br/> \
        <b>Rewards</b> <br/> \
        Credits: Each mined out site adds 2D6x10 credits to the Stash of the gang who mined it out. <br/><br/> \
        Experience: Each fighter who took part in the battle earns 1 XP. <br/> \
        Each fighter gains 1 XP for each site they mined out.<br/><br/> \
        Reputation: If either gang bottled out, they lose 1 Reputation. <br/><br/> \
        Resources: Each mined out site is worth 2D6 Salvage to the gang who mined it out.<br/><br/> \
        <b>Prospecting Sites</b> Gangs are looking for rich seams of scrap to mine. A Standing Active fighter who is wholly within a Prospecting Site and who is at least 6\" from any enemy fighters may make the Prospect (Double) action. When this action is performed, roll on the table below to find the effects: <br/><br/>\
        <table style=\"font-size:12px;\"> \
          <thead>\
            <tr><th width=\"20%\">2D6</th><th>Result</th></tr> \
          </thead>\
          <tbody>\
            <tr><td width=\"20%\" style=\"font-weight:900;background:#d94f2e;color:#fafaf5;\">2</td><td>Sink hole! - The fighter must make an Initiative check. If they pass, they are Seriously Injured. If they fail, they are taken Out of Action.</td></tr>\
            <tr><td width=\"20%\" style=\"font-weight:900;background:#d94f2e;color:#fafaf5;\">3-5</td><td>Damn thing bit me! - The fighter finds nothing and also suffers an immediate S1 D1 hit.</td></tr>\
            <tr><td width=\"20%\" style=\"font-weight:900;background:#d94f2e;color:#fafaf5;\">6-9</td><td>There might be something here... - The fighter doesn't find anything yet, but if they make the Prospect (Double) action again on their next activation they can roll 3D6 instead of 2D6 to see what they find.</td></tr>\
            <tr><td width=\"20%\" style=\"font-weight:900;background:#d94f2e;color:#fafaf5;\">10+</td><td>Some good scrap here! - The fighter finds a rich seam of scrap to mine. Make a note of the gang who found the seam and place a token next to the site to indicate it has been mined out. Do not make any more rolls to prospect this site.</td></tr>\
          </tbody>\
        </table>"
    },
    {
      id:"s_big_score",
      name:"The Big Score",
      text:"In The Big Score scenario, two gangs fight to loot an abandoned settlement whose defences are still active. <br/><br/> \
        <b>Battlefield</b> Standard Setup. <br/><br/> \
        <b>Crews</b> Both Teams use Custom Selection (10)<br/><br/> \
        <b>Deployment</b> 12 inches from centerline, Defender deploys first<br/><br/> \
        <b>Gang Tactics</b> Choose 2. Gain +1 random for every 100 < than opponent <br/><br/> \
        <b>Ending the Battle</b> The battle ends when one gang gets three or more Loot caskets into their deployment zone, or only one gang has fighters remaining on the battlefield. <br/><br/> \
        <b>Victory</b> The gang that has the most Loot caskets in their deployment zone at the end of the battle is the winner, otherwise the battle is a draw. <br/><br/> \
        <b>Rewards</b> <br/> \
        Credits: Each Loot casket adds 2D6x10 credits to the gang's Stash. <br/><br/> \
        Experience: Each fighter who took part in the battle earns 1 XP. <br/><br/> \
        Reputation: The winner gains D3. <br/> \
        If either gang bottled out, they lose 1 Reputation. <br/><br/> \
        Resources: Each Loot casket is worth D6 Power, D6 Salvage or D6 Sustenance (roll randomly to determine which type).<br/><br/> \
        <b>The Score</b> News has come down of a rich stash out in the badzones; the only trouble is it is well defended, not to mention more than one gang is gunning for it. After both crews have deployed, players take turns (starting with the player who has priority) placing Loot caskets within 6\" of the centre of the battlefield, until six caskets have been placed. Next, players take turns placing defences (see Outlander Terrain) anywhere on the battlefield (these can include minefields), until six defences have been placed. Defences are automated and treat both gangs as enemies. <br/><br/>\
        <table style=\"font-size:12px;\"> \
          <thead>\
            <tr><th width=\"20%\">D6</th><th>Result</th></tr> \
          </thead>\
          <tbody>\
            <tr><td width=\"20%\" style=\"font-weight:900;background:#d94f2e;color:#fafaf5;\">1</td><td>The fighter suffers a Strength 6 hit with an AP of -1 and a Damage of 2. If they are Seriously Injured as a result, they are dragged away into the darkness and taken Out of Action.</td></tr>\
            <tr><td width=\"20%\" style=\"font-weight:900;background:#d94f2e;color:#fafaf5;\">2-3</td><td>A nightmarish creature emerges from the shadows, seeking easy prey. The fighter cannot make any actions during this activation as they are too busy driving the creature away.</td></tr>\
            <tr><td width=\"20%\" style=\"font-weight:900;background:#d94f2e;color:#fafaf5;\">4-5</td><td>The fighter hesitates, hearing a noise in the darkness. They can only make one action this turn.</td></tr>\
            <tr><td width=\"20%\" style=\"font-weight:900;background:#d94f2e;color:#fafaf5;\">6</td><td>	The fighter goes unnoticed and can act normally.</td></tr>\
          </tbody>\
        </table>"
    }
  ],
  hires: {
    pools: [
      {
        id: "bounty",
        name: "Bounty Hunters",
        fighters: [
          {id:"bh_kara",name:"Kara Nine-Fingers",role:"Bounty Hunter",rating:160},
          {id:"bh_slate",name:"Slate Merdena",role:"Bounty Hunter",rating:155},
          {id:"bh_yar",name:"Yar Umbra",role:"Bounty Hunter",rating:165}
        ]
      },
      {
        id: "hired",
        name: "Hired Guns",
        fighters: [
          {id:"hg_rogue",name:"Rogue Doc",role:"Hired Gun",rating:90},
          {id:"hg_dome",name:"Dome Runner",role:"Hired Gun",rating:85},
          {id:"hg_hive",name:"Hive Scum",role:"Hired Gun",rating:70}
        ]
      },
      {
        id: "hangers",
        name: "Hangers-on",
        fighters: [
          {id:"ho_ammo",name:"Ammo-Jack",role:"Hanger-on",rating:40},
          {id:"ho_sloppo",name:"Slopper",role:"Hanger-on",rating:35}
        ]
      }
    ]
  },
  injuries: [
    "Flesh Wound",
    "Concussion",
    "Grievous Injury",
    "Critical Injury",
    "Old Battle Wound",
    "Hobbled",
    "Enfeebled",
    "Partially Deafened",
    "Hand Injury",
    "Head Injury",
    "Eye Injury",
    "Chest Wound",
    "Spinal Injury",
    "Leg Injury",
    "Arm Injury"
  ],
  battleOutcome: {
  creditsEarned: 0,
  repEarned: 0,
  resources: '',
  won: false
},
  actions: [
    {
      id: "a_move",
      action: "Move",
      type: "Simple",

      
    }

]
};