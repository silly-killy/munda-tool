const DATA = {
  gangs: [
    {
    id: "carnival_of_terror",
    name: "Carnival of Terror",
    fighters: [
      {id: "ringleader", "name": "Ring Master", "role": "Leader", "rating": 260},
      {id: "jester", "name": "Jester", "role": "Ganger", "rating": 90},
      {id: "fireperformer", "name": "Fire Performer", "role": "Champion", "rating": 245},
      {id: "strongman", "name": "The Strong Man", "role": "Champion", "rating": 175},
      {id: "harlequin", "name": "Harlequin", "role": "Ganger", "rating": 95},
      {id: "magician", "name": "The Magician", "role": "Ganger", "rating": 80},
      {id: "freak", "name": "The FREAK", "role": "Brute", "rating": 210},
      {id: "ricco", "name": "Ricco Nasty", "role": "Ganger", "rating": 80}
      ]
    },
    {
    id: "the_drama_queens",
    name: "The Drama Queens",
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
      fighters: [
          {id: "sal", "name": "Sally", "role": "Leader", "rating": 380},
          {id: "mstr", "name": "Mysterious Stranger", "role": "Champion", "rating": 260},
          {id: "Cainx", "name": "Cain Xavier", "role": "Ganger", "rating": 160},
          {id: "delvol", "name": "Delius Voldus", "role": "Ganger", "rating": 115},
          {id: "enokz", "name": "Enok the Zealot", "role": "Ganger", "rating": 125},
          {id: "servit", "name": "Servitor Z-00", "role": "Ganger", "rating": 65},
          {id: "fimalk", "name": "Fiori Malok", "role": "Champion", "rating": 145}
        ]
    }

  ],
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