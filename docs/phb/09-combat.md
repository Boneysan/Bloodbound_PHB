---
title: Combat
description: Initiative, actions, damage types, special manoeuvres, and the full combat system of Nosgoth.
---
# Chapter 9: Combat and Damage Types in Nosgoth
In the cursed land of Nosgoth, combat is a brutal dance of blood and shadow, where steel clashes with sorcery, and the veil between Material and Spectral realms quivers. Whether wielding a reaver blade, weaving glyphs of decay, or phasing through realms to strike from the unseen, every action carries weight—and a price. This chapter combines the rules for combat with the diverse damage types that define Nosgoth’s conflicts, using the D6 dice success system to resolve attacks, defenses, and special maneuvers. Prepare to face the consequences of power in a world where survival demands sacrifice.

## At a glance
- 9.1 Combat Overview
- 9.2 Initiative
- 9.3 Actions: Attacking
- 9.4 Defense and Armor
- 9.5 Damage and Health
- 9.6 Extra Successes: Enhancing Actions
- 9.7 Damage Types and Effects
- 9.8 Reactions
- 9.9 Advantage and Disadvantage
- 9.10 Special Actions
- 9.11 Critical Hits and Failures
- 9.12 Environmental Combat
- 9.13 Combat Example
- 9.14 Story Arcs and Sessions
- 9.15 GM Guidance

Note on terminology: DV is for attacks, DR is for checks and saves, and Armor is flat mitigation. A creature is Bloodied at 50% of its maximum HP or lower. Resistance halves damage after Armor interaction, while Immunity negates it entirely. Effects that bypass Resistance do not bypass Immunity unless they say so explicitly. Force, Spectral, and Entropic interactions are detailed in Chapters 5 (Magic) and 8 (Corruption).

## 9.1 Combat Overview

Combat in *Legacy of Kain: Bloodbound RPG* is structured into rounds, each representing 6–10 seconds of chaotic, high-stakes action. Within each round, combatants act in initiative order, weaving a tapestry of strikes, spells, and tactical decisions. A combatant’s turn consists of:

- **1 Action**: Attack, cast a spell, use an ability, disengage, or perform another significant task.
- **1 Bonus Action**: A swift secondary action granted *only* when a class ability, perk, lineage trait, or spell specifically states it requires a Bonus Action. A character may take only **one Bonus Action per turn**.
- **1 Movement**: Move up to your Speed stat (in tiles, typically 5 feet per tile).
- **1 Reaction**: Respond to a trigger (e.g., an attack or enemy movement) once per round.
- **Free Actions**: Minor activities that don't consume your primary Action, Bonus Action, or Reaction. Examples include dropping an item, speaking briefly (up to 10 words), or drawing a weapon as part of an attack action.

Combat is visceral yet strategic, encouraging players to leverage terrain, realm-shifting, and creative use of successes to outmaneuver foes. The Game Master (GM) ensures the tone remains dark and cinematic, adjudicating outcomes to reflect Nosgoth’s unforgiving nature.

## 9.2 Initiative

Combat begins with determining who acts first, reflecting the razor-sharp instincts required to survive Nosgoth’s dangers.

- **Roll Initiative**: Each combatant rolls a dice pool equal to their Shadow + Tactics or Shadow + Concentration (player’s choice). Each die showing a 5 or 6 counts as one success.
- **Order**: The combatant with the highest number of successes acts first. Ties are broken by the highest Shadow stat, then by GM discretion (e.g., narrative context or environmental factors).
- **Example**: Kain (Shadow 4, Tactics 2) rolls 6 dice, scoring 6, 5, 4, 3, 2, 1 (2 successes). A Sarafan knight (Shadow 3, Tactics 3) rolls 6 dice, scoring 6, 6, 5, 4, 3, 2 (3 successes). The knight acts first.

## 9.3 Actions: Attacking

To strike an enemy, whether with claw, blade, or spell, follow these steps:

- **Declare Target and Roll**: Roll a dice pool equal to the relevant Attribute + Skill, plus your **Combat Bonus** (+1 die at levels 5, 10, 15, and 20; max +4). Combat Bonus applies to all attack rolls, including melee, ranged, and spell attacks. For example, Fury + Weapon Mastery for melee, Shadow + Weapon Mastery for finesse, or Soul + Glyphcasting for spells.
- **Count Successes**: Each die showing a 5 or 6 counts as one success.
- **Compare to Defense Value (DV)**: The target's DV is the number of successes required to hit. DV is typically 1 + (higher of Shadow or Will), modified by armor, perks, or effects. **DV Cap:** A character's DV from attributes, armor, and perks cannot exceed 6; only temporary cover and active defense reactions can push it higher.
- **Resolve Hit**: If successes meet or exceed the DV, the attack hits. Deal damage based on the weapon or ability, reduced by the target’s armor (unless bypassed by damage type). Extra successes (beyond DV) can enhance the attack (see Section 9.6).

**Example**: Raziel (Fury 3, Weapon Mastery 4) attacks a vampire hunter (DV 2, Armor 1) with a reaver blade (Slashing, 3 damage). He rolls 7 dice, getting 6, 6, 5, 4, 3, 2, 1 (3 successes). The attack hits (3 ≥ 2), dealing 3 damage minus Armor 1 = 2 damage. The extra success can add +1 damage (total 3) or inflict standard Bleeding (1 damage at the start of each turn for 1d3 rounds).

## 9.4 Defense and Armor

Surviving Nosgoth’s battlefields requires cunning defense and resilience.

While skill checks are made against a static DR, attacks in combat are resolved by comparing your successes against your opponent's **Defense Value (DV)**. A character's DV is a dynamic score that reflects their innate evasiveness, armor, and training, making them a much harder target than a simple locked door.

- **Defense Value (DV)**: A passive score (1 + higher of Shadow or Will, plus modifiers) that attackers must meet or exceed to hit. DV from attributes, armor, and perks is **capped at 6**; only temporary cover and active defense reactions can push it higher.
- **Armor**: Reduces incoming physical damage (Bludgeoning, Piercing, Slashing) by a flat amount (e.g., 1-3, depending on gear). For example, Leather Armor reduces damage by 1, while Sarafan Plate reduces by 3. Some damage types (e.g., Spectral, Force, or specific Entropic effects) ignore armor entirely.
- **Active Defense**: Characters can use their Reaction (see Section 9.8) to actively defend with skills like Shadow + Evasion (Dodge) or Fury + Weapon Mastery (Parry).

## 9.5 Damage and Health

Damage reflects the toll of Nosgoth’s brutal conflicts, from claw slashes to soul-rending glyphs.

- **Damage Calculation**: Based on the weapon or ability (e.g., Reaver Blade: 3 Slashing damage, Fire Glyph: 4 Fire damage). Resolve damage using the order below so Armor, Resistance, Immunity, and special riders apply consistently.
- **Health Points (HP)**: Tracks physical endurance. At 0 HP, a character falls **Unconscious** and begins making **Death Saves** (see below).
- **Bloodied Threshold**: A creature is **Bloodied** when its current HP is at or below 50% of its maximum HP.
- **TV (Threat Value)**: Every creature has a TV representing its relative power. TV is used by GMs for encounter design and by certain character abilities (e.g., Sangromancer feeding restores BP based on the target's TV).
- **Wounds and Sanity Loss**: Some attacks (e.g., cursed weapons, Spectral or Entropic damage) inflict Wounds (lasting injuries) or Corruption (spiritual taint), detailed in Chapter 8.
- **Healing**: Limited in Nosgoth, often requiring blood consumption (for vampires), glyphs, or rare artifacts. Entropic damage cannot be healed by non-magical means until a rest.

### Damage Resolution Order

Unless a specific ability says otherwise, resolve damage in this order:

1. Start with the attack or effect's listed damage.
2. Apply the damage type's Armor rule: normal reduction, halved Armor, bypassed Armor, or ignored physical Armor.
3. Apply flat Armor reduction if that damage type still interacts with Armor.
4. Apply **Resistance** or any vulnerability-like doubling effect.
5. Apply **Immunity** if present; Immunity reduces the damage to 0 and prevents the associated rider unless the source explicitly bypasses Immunity.
6. Apply any surviving non-damage rider that is written to occur even on 0 damage or on a successful save.

If an effect says it **bypasses Resistance**, it ignores only Step 4. It does not defeat Immunity unless it says so explicitly.

**Example**: A Dumahim vampire (HP 10, Armor 2) takes 5 Piercing damage from a spear (ignores 1 Armor). After Armor, 4 damage is applied (5 – 1 = 4), reducing HP to 6.

### 9.5.1 Death Saves

When a character drops to 0 HP, they fall Unconscious and begin making Death Saves at the start of each of their turns:

| Roll (1d6) | Result |
| :--- | :--- |
| **5-6** | Success — accumulate 3 to stabilize (unconscious but no longer dying) |
| **2-4** | Failure — accumulate 3 and the character dies |
| **1** | Critical Failure — counts as 2 failures |

- **Taking Damage at 0 HP:** Each hit = 1 automatic failure. A Critical Hit = 2 failures.
- **Healing at 0 HP:** Any healing resets death save progress and restores consciousness.
- **Vampiric Frenzy (Vampires only):** Instead of death saves, a vampire at 0 HP may enter a **Frenzy** — acting for 1d3 rounds with Advantage on all attacks but unable to distinguish friend from foe. At the end, the vampire falls unconscious and dies unless they feed on blood during the Frenzy. If a frenzied vampire successfully feeds, they regain HP equal to the target's TV (min 1), end the Frenzy immediately, and are no longer dying.
- **Permanent Death:** Certain attacks (Soul Reaver consumption, immolation by Spectral Fire) cause instant permanent death at the GM's discretion.

## 9.6 Extra Successes: Enhancing Actions

Nosgoth’s warriors turn success into dominance. Extra successes (beyond those needed to meet DV or DR) allow enhanced outcomes, tailored to the damage type.

### In Combat:
- **+1 Damage**: Add 1 damage per extra success (maximum +3).
- **Status Effects**:
  - **Physical**: *Staggered* (cannot take Reactions) or *Bleeding* (standard: 1 damage at the start of each turn for 1d3 rounds, unless the source says otherwise).
  - **Elemental**: *Slowed* (movement halved) or *Shocked* (disadvantage on attacks).
  - **Force**: *Prone* (target falls) or *Pushed* (moved 5-10 ft).
  - **Spectral**: *Soul Drain* (target loses 1 Soul Energy, attacker gains 1).
  - **Radiant**: *Blinded* (disadvantage on attacks/perception) or *Purged* (ends 1 shadowy effect).
  - **Entropic**: *Decay* (target cannot heal HP this round) or *Corrupted* (increases Corruption Level by 1).
- **Multi-Target Strike**: Hit additional targets (GM discretion for area or sweeping attacks).
- **Bypass Armor**: Ignore 1 point of armor per extra success (if applicable).

### Outside Combat:
- Perform actions with precision or flair (e.g., silent lockpicking).
- Complete tasks faster or stealthily.
- Gain narrative advantages (e.g., repositioning, uncovering hidden lore).
- Create stunts (e.g., leaping to a chandelier, grabbing a relic mid-fight).

**Example**: Kain rolls 5 successes against a foe with DV 2 using a Spectral attack. With 3 extra successes, he could deal +3 damage, inflict Soul Drain, or bypass 3 points of armor.

The GM adjudicates extra success outcomes, balancing player creativity with narrative coherence. Players are encouraged to propose flavorful effects tied to damage types.

## 9.7 Damage Types and Effects

Nosgoth’s conflicts are shaped by diverse damage types, consolidated into six categories to reflect the supernatural and physical forces at play.

### 9.7.1 Physical Damage
- **Includes**: Bludgeoning, Piercing, Slashing.
- **Definition**: Mundane trauma from weapons, claws, or falling debris.
- **Effects**: Reduced by Armor. Effective against most biological foes.
  - *Bludgeoning* tends to Stagger.
  - *Piercing* tends to ignore 1 Armor naturally.
  - *Slashing* tends to cause Bleeding.

Bleeding uses the glossary definition unless a source provides custom numbers. Standard Bleeding deals 1 damage at the start of each turn for 1d3 rounds. If a source applies stronger Bleeding, a different duration, or separate Bleeding applications, that source text overrides the standard version.

Unless a source explicitly says otherwise, recurring effects resolve at the start of the affected creature's turn. This includes damage over time, Corruption gained over time, and repeating regeneration or healing.

### 9.7.2 Elemental Damage
- **Includes**: Fire, Cold, Lightning.
- **Definition**: Raw natural energies, often summoned by glyphs or alchemical items.
- **Effects**: Halves Armor effectiveness (round down).
  - *Fire* causes Burning (damage at the start of each turn).
  - *Cold* causes Slowed or Frozen.
  - *Lightning* causes Shocked (disadvantage).

### 9.7.3 Force Damage
- **Includes**: Telekinesis, gravity magic, pure magical impact.
- **Definition**: Concentrated kinetic energy that slams opponents.
- **Effects**: Bypasses Physical Armor entirely.
  - Primarily causes *Knockback* (Pushed 5-10ft) or *Prone*.

### 9.7.4 Spectral Damage
- **Includes**: Ghostly wails, spectral blades, raw soul energy.
- **Definition**: Attacks that target the living soul or spiritual essence directly.
- **Effects**: Ignores all Physical Armor. Resisted by Will or Soul attributes.
  - **Crosses Realms**: Spectral damage crosses the veil between the Material and Spectral realms freely. An attack dealing Spectral damage can target a creature in a different realm without penalty (see [Chapter 11, Section 11.5.3](./11-realms-terrain-arcane-power.md#1153-combat-across-the-veil)).
  - Often drains resources (Soul Energy) or damages creatures in the Spectral Realm.
- **Soul Reaver Blade**: A unique damage-dealing keyword. A **Soul Reaver Blade** (whether the artifact itself or a class-simulated version) always deals **Spectral** damage, ignores all Physical Armor, and bypasses Resistance to Spectral damage. On a Critical Hit, it consumes 1 SE from the target (if they have it) and transfers it to the wielder.

### 9.7.5 Radiant Damage
- **Includes**: Holy light, "Spectral Fire" (purifying aspect), divine energy.
- **Definition**: Anathema to the undead and the corrupted.
- **Effects**: Deals **double damage** to Undead and Spectral entities.
  - Causes *Blindness* in creatures of darkness.

### 9.7.6 Entropic Damage
- **Includes**: Necrotic, Corruption, Void, Hylden energies.
- **Definition**: Forces that unravel reality, rot flesh, or warp the mind.
- **Effects**: Damage cannot be healed by non-magical means until a rest.
  - Increases the target's Corruption Level or inflicts *Decay*.

### Damage Type Summary Table

Use [Chapter 12: Glossary, Section 12.4](./12-glossary.md) as the canonical source for named condition definitions and durations. This chapter summarizes combat usage; the glossary governs final wording.

| Damage Type      | Key Property                                  | Common Status Effect on Extra Success |
| :--------------- | :-------------------------------------------- | :------------------------------------ |
| **Physical**     | Reduced by Armor                              | Bleeding, Staggered                   |
| **Elemental**    | Halves Armor                                  | Burning, Slowed, Shocked              |
| **Force**        | Bypasses Armor                                | Prone, Pushed                         |
| **Spectral**     | Ignores Physical Armor; Hits Spectral foes    | Soul Drain                            |
| **Radiant**      | Double Dmg vs Undead/Spectral                 | Blinded, Purged                       |
| **Entropic**     | Prevents Healing; Adds Corruption             | Decay, Corrupted                      |

## 9.8 Reactions

Reactions are swift, instinctive responses that turn defense into opportunity, usable once per round on another creature’s turn.

- **Mechanics**:
  - Triggered by specific events (e.g., being attacked, enemy movement).
  - Require a skill check or specific ability (e.g., Shadow + Evasion for Dodge).
  - Must be declared before damage is applied (for defensive reactions).
- **Common Reactions**:
  - **Dodge** (Shadow + Evasion): Avoid a melee or ranged attack.
  - **Parry** (Fury + Weapon Mastery): Reduce melee damage with a weapon or shield.
  - **Counterspell** (Soul + Glyphcasting or Forbidden Knowledge): Negate a magical effect targeting you.
  - **Opportunity Attack**: When a creature moves out of your reach, you may make one basic melee attack against it.
  - **Spectral Shift**: Phase between Material and Spectral realms (requires specific trait or spell).
- **Reaction Rolls**: Roll Attribute + Skill. Successes reduce damage or effects:
  - 1 Success: Reduce damage by 1.
  - 2 Successes: Reduce damage by 2 or negate one status rider attached to the triggering effect.
  - 3+ Successes: Halve the triggering damage after all other mitigation or fully evade, depending on the reaction used and GM discretion.
- **Rules Notes**:
  - You must be conscious and able to act.
  - A failed reaction expends your reaction for the round.
  - Each character has 1 Reaction per round. Only a feature that explicitly states it grants an extra Reaction changes that.

**Example**: A Turelim warrior is hit by a Fire Glyph (4 Fire damage, Armor is halved). They use a Dodge reaction (Shadow 3 + Evasion 2), rolling 5 dice and getting 2 successes, reducing damage by 2.

## 9.9 Advantage and Disadvantage

Situational factors can grant you **Advantage** or impose **Disadvantage** on a roll. This system gives you a second chance—either to turn failure into success, or to have your success snatched away by fate.

**Advantage (Re-roll Failures)**

When you have Advantage, roll your dice pool once. After the roll, you may **pick up any dice that failed (showing 4 or less) and re-roll them**. Add any new successes to your initial total. This gives you a chance to improve a mediocre outcome.

**Disadvantage (Re-roll Half Successes)**

When you have Disadvantage, roll your dice pool once. After the roll, you must **pick up half of your successes (round up) and re-roll them**. Only those re-rolled dice that still show 5 or 6 count as successes; the rest become failures. Successes not selected for re-rolling are kept.

**Canceling**

If you have both Advantage and Disadvantage from different sources, they cancel each other out, and you simply roll your dice pool once as normal.

**Example**: Raziel attacks from a shadowfield (Advantage) but is Blinded by Radiant damage (Disadvantage). The effects cancel, and he rolls normally.

## 9.10 Special Actions

Nosgoth’s warriors wield powers beyond mortal limits, from soul-rending magic to realm-shifting maneuvers.

- **Spellcasting**: Roll Soul + Glyphcasting to cast spells, with successes determining effect strength (see Chapter 5: Spellcasting and Magic).
- **Disengage**: Spend your Action to focus entirely on movement. You do not provoke opportunity attacks until the start of your next turn.
- **Two-Weapon Fighting**: If you are wielding two **Light** weapons, you may use a Bonus Action to make one additional attack with the secondary weapon after taking the Attack action. This secondary attack does not add your attribute successes to the damage (base weapon damage + extra successes only).
- **Grapples**: Roll Fury + Unarmed Combat against the target's Fury + Unarmed Combat or Shadow + Evasion (target's choice). Success results in the **Grappled** condition (target speed is 0). To escape, the target must spend an Action and succeed on a contested check.
- **Shoves**: Roll Fury + Unarmed Combat against the target's Fury + Unarmed Combat or Shadow + Evasion (target's choice). On a success, the target is either knocked **Prone** or **Pushed** 5 feet away from you.
- **Shifting Realms**: Some abilities allow switching between Material and Spectral realms, granting tactical advantages (e.g., bypassing walls, attacking ethereal foes).
- **Pushing Rolls**: When you fail a roll, you may be able to push it by drawing on your inner Corruption. See Chapter 8: Corruption for the full mechanics.

## 9.11 Critical Hits and Failures

Exceptional skill or catastrophic missteps shape Nosgoth’s battles.

- **Critical Hit**: In combat, a Critical Hit is achieved by **exceeding the target's DV by 2 or more successes**. This represents a perfectly placed strike or dominating advantage, granting one or more of the following benefits by spending Extra Successes:
  - **Bonus Damage**: Deal +1 additional damage per extra success (maximum +3).
  - **Status Effect**: Apply a potent status effect associated with the damage type (e.g., **Stunned** for one round).
  - **Bypass Armor**: Ignore 1 point of the target's Armor per extra success (maximum equal to the weapon's base damage).
  - **Tactical Advantage**: The GM may introduce a unique narrative outcome, such as dismembering a limb, destroying a held item, or creating an opening for an ally.

- **Critical Failure**: A Critical Failure occurs when a player **pushes a roll** by using a Corruption Die and the subsequent roll results in **0 successes** while the **Corruption Die shows a 1**. This triggers a dire consequence, such as a weapon breaking, a spell backfiring spectacularly, or a new, immediate threat appearing on the scene, as determined by the GM.

> *GM Note — Crit Scaling by DV:* The 2+ success crit threshold means high-level characters will crit frequently against low-DV enemies (mook tier, DV 2–3) and rarely against high-DV enemies (Boss/Legendary, DV 5–6). This is intentional — capstone characters should feel devastating against weaker foes while elite enemies remain a real threat. When designing encounters, calibrate enemy DV to the experience you want at the table: a swarm of DV 3 mooks is a victory lap; a DV 6 Boss is a real fight.

**Example**: A Melchiahim claws at a foe (DV 3) with Entropic damage, rolling 5 successes (critical hit). The GM allows +2 damage and Decay.

## 9.12 Environmental Combat

Nosgoth’s battlefields are as deadly as its warriors, with shifting realms and cursed terrain.

- **Material and Spectral Realms**: Characters with realm-shifting abilities can interact with both planes, gaining tactical edges (e.g., attacking through Spectral rifts).
- **Glyph Traps and Shadowfields**: Environmental hazards (e.g., traps dealing 2 Fire or Entropic damage, fields granting advantage) challenge combatants. Roll Soul + Glyphcasting or Thievery to disarm or manipulate.
- **Terrain Interaction**: Use Fury + Athletics to destroy objects (e.g., crumbling pillars, DR 2) or create cover.

**Example**: A Zephonim ambushes from a Spectral shadowfield (+2 advantage) and triggers a Fire Glyph trap (DR 2 to avoid, 2 Fire damage), forcing enemies to adapt or suffer.

## 9.13 Combat Example

**Setup**: Kain (Fury 4, Weapon Mastery 3, HP 12, DV 4, Armor 2) faces a Sarafan knight (DV 3, Armor 2, HP 10) on a cursed altar (+1 disadvantage to Kain).

- **Initiative**: Kain rolls Shadow 3 + Tactics 2 (5 dice: 2 successes). The knight rolls 3 successes, acting first.
- **Knight’s Turn**: Rolls Fury 3 + Weapon Mastery 4 (7 dice) for a Piercing attack (spear, 3 damage, ignores 1 Armor). Results: 6, 5, 4, 4, 3, 2, 1 — 2 successes. Misses Kain’s DV 4.
- **Kain's Turn**: Attacks with the Soul Reaver blade (3 Spectral damage, ignores Armor). Rolls Fury 4 + Weapon Mastery 3 = 7 dice, but the cursed altar imposes Disadvantage: after rolling, pick up **half of all successes (round up)** and re-roll them — only those re-rolled dice still showing 5–6 count; the rest become failures. Initial results: 6, 6, 5, 5, 4, 3, 2 — four potential successes. Half (round up) = 2 dice to re-roll. Re-rolling those two: 4, 2 → 0 new successes. Final: 2 successes (the two un-rerolled). Hits DV 3? No — 2 < 3, the attack misses. The altar's curse has done its work.
- **Knight’s Reaction**: If Kain had hit, the knight could have attempted a Parry reaction to reduce the incoming damage.
- **Next Round**: The knight fights on with depleted soul energy and reduced options.

**Narrative**: Kain’s Soul Reaver blade tears at the Sarafan’s essence, the altar’s curse forcing resolve over raw power. The knight’s swift parry blunts the blow, but the spectral drain robs them of energy, fraying their defenses for the rounds ahead.

## 9.13.5 Short Rests and Long Rests

Many class abilities, perk costs, and recovery mechanics reference a **Short Rest** or **Long Rest**. These are defined as follows:

**Short Rest**
A period of approximately **1 hour** of rest during which characters may catch their breath, bind wounds, and recover minor resources. Characters must be free from active combat and immediate threat. Permitted activities include tending injuries, brief discussion, and light movement. A Short Rest restores any resource or ability marked "1/short rest."

**Long Rest**
A period of approximately **8 hours** of genuine recuperation - sleep, meditation, or deep trance (for vampires and wraiths). Characters must be in a safe or relatively safe location. A Long Rest restores any resource or ability marked "1/long rest," fully restores HP unless a rule says otherwise, and may allow corruption recovery or purification as described in Chapter 8. Characters may take only one Long Rest per 24-hour period.

## 9.14 Story Arcs and Sessions

Rules often reference a **Session** or an **Arc** for ability refreshes and timing.

- **Session:** One period of real-world play, typically 3-5 hours. "Once per session" abilities refresh at the start of each new gathering.
- **Arc:** A major story segment representing approximately **5 levels** of progression (e.g., Arc 1 is Levels 1-5, Arc 2 is Levels 6-10). "Once per arc" abilities refresh when the character reaches a level milestone that begins a new arc (Levels 6, 11, and 16) or whenever the GM declares an arc has reached its narrative conclusion.

---

## 9.15 GM Guidance

- **Balancing Encounters**: Set DV and HP to challenge but not overwhelm. A DV 3–5 foe suits most parties; DR 4+ tasks should be rare and climactic. Consider damage type resistances (e.g., undead immune to Entropic).
- **Cinematic Descriptions**: Describe extra successes vividly (e.g., “Your Spectral blade erupts, charring their soul as they stagger”). Tailor to damage types for flavor.
- **Environmental Depth**: Use Nosgoth’s terrain (e.g., blood fountains, Spectral rifts, Void-tainted zones) to reward clever tactics and reflect damage type hazards.
- **Corruption Risks**: Emphasize the cost of pushing rolls, tying failures to Nosgoth's dark themes (e.g., a critical failure with Entropic damage summons a spectral wraith).

Combat in Nosgoth is a crucible of power and peril, shaped by the interplay of physical, magical, and esoteric damage types. Whether you fight as a vampire lord, a Sarafan zealot, or a realm-shifting wraith, every strike and every wound shapes your fate and the cursed world around you.
