import { TEntry } from 'types/data'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  END_OF_COMBAT_PHASE,
  HERO_PHASE,
  SAVES_PHASE,
  SHOOTING_PHASE,
  START_OF_HERO_PHASE,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'
import {
  AQSHY,
  CHAMON,
  CHARRWIND,
  DOLORUM,
  GENESISGATE,
  GHUR,
  GHYRAN,
  HELLEFlUX,
  HYSH,
  INVIDA,
  PRAETORIS,
  PROSPERIS,
  SHYISH,
  ULGU,
  VARANTHAX,
  YMETRICA,
} from 'types/realmscapes'

const RealmArtifacts: TEntry[] = [
  {
    name: `Everspring Diadem (${GHYRAN})`,
    effects: [
      {
        name: `Everspring Diadem (${GHYRAN})`,
        desc: `In your hero phase, you can heal 1 wound allocated to the bearer.`,
        when: [HERO_PHASE],
      },
    ],
  },
  {
    name: `Predator's Torc (${GHUR})`,
    effects: [
      {
        name: `Predator's Torc (${GHUR})`,
        desc: `You can reroll charge rolls for the bearer.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  {
    name: `Plate of Perfect Protection (${CHAMON})`,
    effects: [
      {
        name: `Plate of Perfect Protection (${CHAMON})`,
        desc: `If a weapon used for an attack that targets the bearer has a Rend characteristic of -1, change the Rend characteristic for that attack to '-'`,
        when: [SAVES_PHASE],
      },
    ],
  },
  {
    name: `Incandescent Rageblade (${AQSHY})`,
    effects: [
      {
        name: `Incandescent Rageblade (${AQSHY})`,
        desc: `Pick 1 of the bearer's melee weapons. If the unmodified hit roll for an attack made by that weapon is 6, that attack scores 2 hits on the target instead of 1. Make a wound and save roll for each hit.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  {
    name: `Gravesand Brooch (${SHYISH})`,
    effects: [
      {
        name: `Gravesand Brooch (${SHYISH})`,
        desc: `You can reroll save rolls of 1 for attacks that target the bearer.`,
        when: [SAVES_PHASE],
      },
    ],
  },
  {
    name: `Syari Trueblade (${HYSH})`,
    effects: [
      {
        name: `Syari Trueblade (${HYSH})`,
        desc: `You can reroll hit rolls of 1 for attacks made with a melee weapon by the bearer.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  {
    name: `Trickster's Foil (${ULGU})`,
    effects: [
      {
        name: `Trickster's Foil (${ULGU})`,
        desc: `You can reroll wound rolls of 1 for attacks made with a melee weapon by the bearer.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  {
    name: `The Fetch's Ring (${HELLEFlUX})`,
    effects: [
      {
        name: `The Fetch's Ring (${HELLEFlUX})`,
        desc: `Roll a D6 each time a wound or mortal wound is allocated to the bearer. On each 4+ the wound is negated and you cannot use this artifact to negate any further wounds this phase.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
    ],
  },
  {
    name: `Black Kraken Helm (${CHARRWIND})`,
    effects: [
      {
        name: `Black Kraken Helm (${CHARRWIND})`,
        desc: `Once per battle, you can roll a D6 for each enemy unit within 3" of the bearer. On a 4+ the target suffers D3 mortal wounds.`,
        when: [END_OF_COMBAT_PHASE],
      },
    ],
  },
  {
    name: `The Devourer (${VARANTHAX})`,
    effects: [
      {
        name: `The Devourer (${VARANTHAX})`,
        desc: `Each unmodified hit of 6 targeting a hero with the selected melee weapon inflicts 1 mortal wound in addition to normal damage.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  {
    name: `Sepulchral Plate (${PRAETORIS})`,
    effects: [
      {
        name: `Sepulchral Plate (${PRAETORIS})`,
        desc: `Roll D6 for each wound allocated to the bearer. On a 6 it is negated.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
    ],
  },
  {
    name: `The Fecund Flask (${INVIDA})`,
    effects: [
      {
        name: `The Fecund Flask (${INVIDA})`,
        desc: `Once per battle the bearer can roll a D6. On a 2+ all wounds allocated to the bearer are healed.  On a 1, the bearer is slain and replaced with a Beast of Nurgle within 1".`,
        when: [START_OF_HERO_PHASE],
      },
    ],
  },
  {
    name: `Prism of Amyntok (${YMETRICA})`,
    effects: [
      {
        name: `Prism of Amyntok (${YMETRICA})`,
        desc: `Pick 1 enemy unit within 8" of the bearer and roll 4 D6.  For each 6 the target suffers 1 mortal wound.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  {
    name: `Seed of Rebirth (${GENESISGATE})`,
    effects: [
      {
        name: `Seed of Rebirth (${GENESISGATE})`,
        desc: `The first time the bearer is slain roll a D6. On a 1, it is slain. On a 2+ the bearer is not slain, remaining wounds to allocate are negated, and the bearer heals D3 wounds currently allocated.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
    ],
  },
  {
    name: `Banshee Blade (${DOLORUM})`,
    effects: [
      {
        name: `Banshee Blade (${DOLORUM})`,
        desc: `For eac unmodified hit roll of 6 made with the selected weapon, roll 2D6. If the roll exceeds the target's bravery characteristic, the attack inflicts an additional D3 mortal wounds.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  {
    name: `Gildenbane (${PROSPERIS})`,
    effects: [
      {
        name: `Gildenbane (${PROSPERIS})`,
        desc: `Artifacts of power within 3" of the bearer of this artifact are deactivated (cannot be used). If the affected artifact is a weapon, the normal profile is used instead. `,
        when: [DURING_GAME],
      },
    ],
  },
]

export default RealmArtifacts
