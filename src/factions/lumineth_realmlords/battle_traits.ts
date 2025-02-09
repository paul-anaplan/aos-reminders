import { tagAs } from 'factions/metatagger'
import { LUMINETH_REALMLORDS } from 'meta/factions'
import {
  BATTLESHOCK_PHASE,
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  DURING_SETUP,
  END_OF_COMBAT_PHASE,
  END_OF_SETUP,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SAVES_PHASE,
  SHOOTING_PHASE,
  START_OF_HERO_PHASE,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'

const BattleTraits = {
  [LUMINETH_REALMLORDS]: {
    effects: [
      {
        name: `Aetherquartz Reserve`,
        desc: `Each unit in a Lumineth Realm-Lords army starts the battle with 1 aetherquartz reserve. Once per phase you can say a unit will use its reserve to trigger 1 aetherquartz ability. However, if you do so, subtract 1 from the unit's Bravery characteristic for the remainder of the battle.`,
        when: [DURING_GAME],
      },
      {
        name: `Aetherquartz Reserve`,
        desc: `If a unit has triggered an aetherquartz ability, subtract 1 from the unit's Bravery characteristic for the remainder of the battle.`,
        when: [BATTLESHOCK_PHASE],
      },
      {
        name: `Aetherquartz Reserve - Heightened Reflexes`,
        desc: `Can be used when a unit is picked to be the target of an enemy attack. Add 1 to save rolls for attacks that target the unit until the end of the phase.`,
        when: [SAVES_PHASE],
      },
      {
        name: `Aetherquartz Reserve - Heightened Senses`,
        desc: `Can be used when a unit is picked to shoot or fight. Add 1 to hit rolls for attacks made by this unit until the end of the phase.`,
        when: [COMBAT_PHASE, SHOOTING_PHASE],
      },
      {
        name: `Aetherquartz Reserve - Magical Boost`,
        desc: `Can be used after a unit has attempted to cast a spell but before any unbinding rolls are made for that spell. Add 1 to the casting roll or reroll that casting roll.`,
        when: [HERO_PHASE],
      },
      {
        name: `Aetherquartz Reserve - Magical Insight`,
        desc: `The unit can attempt to cast 1 extra spell that phase.`,
        when: [START_OF_HERO_PHASE],
      },
      {
        name: `Absorb Dispair`,
        desc: `If a friendly unit uses its aetherquartz reserve while it is wholly within 18" of any friendly CATHALLARS, you can pick 1 to absorb the negative energy. A CATHALLAR cannot absorb negative energy more than once per phase. If a CATHALLAR absorbs the negative energy, do not subtract 1 from the units Bravery characteristic. Instead pick 1 enemy unit within 18" of that CATHALLAR and subtract 1 from their Bravery characteristic for the rest of the battle. An enemy unit cannot be affected by this ability more than once per battle.`,
        when: [WOUND_ALLOCATION_PHASE, COMBAT_PHASE, SHOOTING_PHASE, HERO_PHASE],
      },
      {
        name: `Deep Thinkers`,
        desc: `Pick any friendly SCINARI WIZARDS, you can declare they will contemplate. If you do so, in your next hero phase, the wizard that contemplated auto casts their first spell with a casting roll of 9 (do not roll 2D6) that cannot be modified (it can be unbound).`,
        when: [START_OF_HERO_PHASE],
      },
      {
        name: `Lightning Reactions`,
        desc: `When it is your turn to fight, you can pick 2 eligible units instead of 1. Each of these units can fight one after the other in the order of your choice.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Shining Company`,
        desc: `After a VANARI unit is set up, if the base of each model touches the bases of 2 other models in the same unit, they become a shining company. They remain a shining company until each model is no longer touching 2 other models from the same unit. Subtract 1 from hit rolls that target a shining company. However, a shining company cannot run or charge and can only move 1" when they pile-in.`,
        when: [DURING_SETUP, COMBAT_PHASE, SHOOTING_PHASE, MOVEMENT_PHASE, CHARGE_PHASE],
      },
      {
        name: `Shining Company`,
        desc: `Subtract 1 from hit rolls that target a VANARI shining company.`,
        when: [COMBAT_PHASE, SHOOTING_PHASE],
      },
      {
        name: `Shining Company`,
        desc: `A VANARI shining company can only move 1" when they pile-in.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Shining Company`,
        desc: `A VANARI shining company cannot run or charge.`,
        when: [MOVEMENT_PHASE, CHARGE_PHASE],
      },
      {
        name: `Enduring as Rock`,
        desc: `Before the first battle round, or at the start of your hero phase, pick any number of ALARITH units and say they are adopting a mountain stance. If they do so, weapons that target them with Rend -1 count as Rend -.`,
        when: [START_OF_HERO_PHASE, END_OF_SETUP],
      },
      {
        name: `Enduring as Rock`,
        desc: `If an ALARITH unit has adopted a mountain stance, weapons that target them with Rend -1 count as Rend -.`,
        when: [SAVES_PHASE],
      },
      {
        name: `Move Like the Wind`,
        desc: `When you make a pile in with a HURAKAN model, it does not need to finish the move closer to an enemy model.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Move Like the Wind`,
        desc: `When you make a pile in move with a HURAKAN model, if the unit made a charge move this turn, it can fly and move an additional 3".`,
        when: [CHARGE_PHASE, COMBAT_PHASE],
      },
      {
        name: `Tectonic Force`,
        desc: `Pick one enemy unit within 1" of each ALARITH unit. You cannot pick the same enemy unit more than once in the same phase. After you pick each unit, your opponent must move that unit 2" and that unit must finish more than 1" from any ALARITH units from your army if it is possible for it to do so. Once those enemy units have moved, any friendly ALARITH units within 3" of any unit can make a 1" pile-in move.`,
        when: [END_OF_COMBAT_PHASE],
      },
    ],
  },
}

// Always export using tagAs
export default tagAs(BattleTraits, 'battle_trait')
