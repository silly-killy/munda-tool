const DATA = {
  gangs: [
    {
      id: "goliath",
      name: "Goliath",
      fighters: [
        {id:"g_lead",name:"Goliath Leader",role:"Leader",rating:150},
        {id:"g_champ1",name:"Goliath Champion",role:"Champion",rating:110},
        {id:"g_champ2",name:"Stimmer",role:"Champion",rating:115},
        {id:"g_ganger1",name:"Goliath Ganger",role:"Ganger",rating:60},
        {id:"g_ganger2",name:"Goliath Ganger",role:"Ganger",rating:60},
        {id:"g_juve",name:"Goliath Juve",role:"Juve",rating:35}
      ]
    },
    {
      id: "escher",
      name: "Escher",
      fighters: [
        {id:"e_lead",name:"Escher Queen",role:"Leader",rating:145},
        {id:"e_champ1",name:"Escher Champion",role:"Champion",rating:105},
        {id:"e_champ2",name:"Death-Maiden",role:"Champion",rating:120},
        {id:"e_ganger1",name:"Escher Ganger",role:"Ganger",rating:55},
        {id:"e_ganger2",name:"Escher Ganger",role:"Ganger",rating:55},
        {id:"e_juve",name:"Little Sister",role:"Juve",rating:30}
      ]
    },
    {
      id: "orlock",
      name: "Orlock",
      fighters: [
        {id:"o_lead",name:"Road Boss",role:"Leader",rating:140},
        {id:"o_champ1",name:"Road Sergeant",role:"Champion",rating:100},
        {id:"o_champ2",name:"Arms Master",role:"Champion",rating:105},
        {id:"o_ganger1",name:"Gunner",role:"Ganger",rating:65},
        {id:"o_ganger2",name:"Orlock Ganger",role:"Ganger",rating:55},
        {id:"o_juve",name:"Greenhorn",role:"Juve",rating:30}
      ]
    },
    {
      id: "van_saar",
      name: "Van Saar",
      fighters: [
        {id:"v_lead",name:"Van Saar Prime",role:"Leader",rating:155},
        {id:"v_champ1",name:"Augmek",role:"Champion",rating:115},
        {id:"v_champ2",name:"Archeotek",role:"Champion",rating:120},
        {id:"v_ganger1",name:"Van Saar Tek",role:"Ganger",rating:70},
        {id:"v_ganger2",name:"Van Saar Ganger",role:"Ganger",rating:60},
        {id:"v_juve",name:"Van Saar Juve",role:"Juve",rating:35}
      ]
    },
    {
      id: "cawdor",
      name: "Cawdor",
      fighters: [
        {id:"c_lead",name:"Word-Keeper",role:"Leader",rating:135},
        {id:"c_champ1",name:"Cawdor Champion",role:"Champion",rating:95},
        {id:"c_champ2",name:"Sheen Bird",role:"Champion",rating:100},
        {id:"c_ganger1",name:"Cawdor Ganger",role:"Ganger",rating:50},
        {id:"c_ganger2",name:"Bonepicker",role:"Ganger",rating:45},
        {id:"c_juve",name:"Cawdor Juve",role:"Juve",rating:25}
      ]
    },
    {
      id: "delaque",
      name: "Delaque",
      fighters: [
        {id:"d_lead",name:"Master of Shadow",role:"Leader",rating:150},
        {id:"d_champ1",name:"Phantom",role:"Champion",rating:110},
        {id:"d_champ2",name:"Nacht-Ghul",role:"Champion",rating:115},
        {id:"d_ganger1",name:"Shadow",role:"Ganger",rating:60},
        {id:"d_ganger2",name:"Delaque Ganger",role:"Ganger",rating:55},
        {id:"d_juve",name:"Ghost",role:"Juve",rating:30}
      ]
    }
  ],
  tactics: {
    decks: [
      {
        id: "normal",
        name: "Normal Deck",
        cards: [
          {id:"t_overwatch",name:"Overwatch",text:"Reaction. When an enemy fighter moves within LoS, interrupt and make a ranged attack at -1 to hit."},
          {id:"t_ambush",name:"Ambush",text:"Play at start of round. One fighter can make a free Shoot action before Priority roll."},
          {id:"t_evade",name:"Evade",text:"Reaction. When targeted by ranged attack, roll Initiative. Success: attacker suffers -1 to hit."},
          {id:"t_medicae",name:"Medicae",text:"Action. Remove a Flesh Wound from a friendly fighter within 3\"."},
          {id:"t_smoke",name:"Smoke Grenades",text:"Action. Place 5\" smoke template within 6\". Blocks LoS until End Phase."},
          {id:"t_retreat",name:"Tactical Withdrawal",text:"Reaction. When bottled, one fighter may make free Move action toward table edge."}
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
      },
      {
        id: "dominance",
        name: "Dominance Deck",
        cards: [
          {id:"t_suppression",name:"Suppression Fire",text:"Action. Pin D3 enemy fighters within 18\" and LoS."},
          {id:"t_coordinate",name:"Coordinated Strike",text:"Play before activation. Up to 3 friendly fighters can activate together."},
          {id:"t_ruthless",name:"Ruthless Efficiency",text:"Play when taking fighter OoA. Gain +1 Rep for scenario."}
        ]
      }
    ]
  },
  scenarios: [
    {   
        id:"s_gunktank",
        name:"Gunk Tank",
        text:"<b>Standard battle.</b>  Two gangs scramble to drain the most gunk from an abandoned gunk tank.<br/><br/> \
        <b>Battlefield</b> Standard Setup, Place Gunk Tank in center of field <br/><br/> \
        <b>Crews</b> Both Teams use Random Selection (7) <br/><br/> \
        <b>Deployment</b> 12 inches from centerline, Defender deploys first <br/><br/> \
        <b>Gang Tactics</b> Choose 2. Gain +1 random for every 100 < than opponent <br/><br/> \
        <b>Ending the Battle</b> Only one gang remains on the field <br/><br/> \
        <b>Victory</b> The gang that escaped with the most gunk tokens is the winner -- otherwise the battle is a draw <br/><br/> \
        <b>Rewards</b><br/>Credits: D6*10 for each Gunk Tank <br/><br/>\
        Experience: 1xp for participation; Each fighter that escaped with gunk tank also earns 1xp.<br/><br/>\
        Reputation: If either gang bottled out, they lose 1 Reputation.\
        Resources: Each Gunk tank is worth D6 Power or D6 Sustenance <br/><br/> \
        <b>The Gunk Tank</b> Central to the fight is the Gunk Tank, with both sides trying to siphon off as much precious gunk as they can while stopping their opponent from doing the same. The Gunk Tank can be represented by any suitable large container (ideally at least 3\" in diameter) <br/><br/>\
        In addition to the standard rules for a Gunk Tank (see page 50), a fighter in base contact with the Gunk Tank can make the Siphon (Double) action. If successful, place a gunk token on their Fighter card or next to their model to show they are in possession of precious gunk. A fighter can only carry one gunk token at a time, and if Seriously Injured or taken Out of Action will drop their gunk token (place the token next to the downed fighter or where they were before they are removed from the battlefield). <br/><br/>\
        <b>Lugging Gunk</b><br/>Carrying gunk is not without its dangers. A fighter carrying a gunk token is more flammable and if hit by a weapon with the Blaze trait is automatically set on fire without the need to roll (note this does not cause them to drop their gunk token). <br/><br/> \
        The purpose of gunk is to escape with it, and any fighter carrying a gunk token may be removed from the battlefield by moving into base contact with any battlefield edge. Fighters removed in this way do not count as either Seriously Injured or Out of Action for the purposes of Bottle tests. <br/><br/> \
        If one gang forces the other gang to flee or takes all of their fighters Out of Action, they add D3 gunk tokens to their total before ending the battle. <br/>"
    },
    {id:"s_ambush",name:"Ambush",text:"Defender deploys first. Attacker enters from random edge. Kill/rout enemy to win."},
    {id:"s_skirmish",name:"Skirmish",text:"Random deployment. First blood scenario. First gang to take 3 enemies OoA wins."},
    {id:"s_salvage",name:"Salvage Operation",text:"5 loot markers. Carry off table edge. Gang with most loot wins."},
    {id:"s_sabotage",name:"Sabotage",text:"Attacker must destroy 3 objectives in enemy territory. Defender prevents."},
    {id:"s_tunnel",name:"Tunnel Skirmish",text:"Tight corridors. No long range. Close combat favored. Bottle test at 50%."}
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
  ]
};