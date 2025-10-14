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
}

  ],
  tactics: {
    decks: [
      {
        id: "connor_deck",
        name: "Connor's Deck",
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
}
};