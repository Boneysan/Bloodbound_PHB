---
title: Spellcasting & Magic
description: Magic in Nosgoth — spell tiers, casting mechanics, corruption dice, and the full spell compendium.
---
# Chapter 5: Spellcasting in Nosgoth

Magic in Nosgoth is a volatile fusion of soul force, elemental essence, and corrupted power. It serves as both a tool and a curse, capable of shaping reality while often exacting a steep toll on the caster. Characters harness spells through skill checks, drawing upon their attributes and training in various magical disciplines. This chapter outlines the fundamentals of spellcasting, from basic mechanics to advanced techniques, resource management, and a comprehensive compendium of spells.

## At a glance
- Spell Categories and Tiers
- Spellcasting Basics
- The Spellcasting Process
- Advanced Spell Mechanics
- Corruption Dice in Spellcasting
- Reactions to Spells
- Resource Pools
- Defining a "Scene" in Spellcasting
- Learning and Preparing Spells
- Spell Compendium

Note on terminology: DV is for attacks, DR is for checks and saves, and Armor is flat mitigation. Damage types like Force, Spectral, and Entropic have special interactions detailed in Chapters 5, 8, and 9.

## 5.1 Spell Categories and Tiers

Spells are divided into four primary categories, each with distinct flavors and applications:

- **Glyph Spells:** Quick-cast arcane inscriptions for battlefield traps, wards, or utility effects.
- **Blood Spells:** Fueled by vitae (blood) and sacrifice; potent but risky, manipulating life force directly.
- **Ritual Spells:** Extended invocations with lasting or narrative-altering effects, such as summoning spirits or consecrating land.
- **Forbidden Spells:** Reality-warping powers drawn from entropy, madness, or ancient Hylden lore, often risking Corruption.

Spells are further organized into four tiers based on character level and complexity:

- **Initiate Tier:** Levels 1–5 (basic effects, lower costs).
- **Adept Tier:** Levels 6–10 (moderate power, increased versatility).
- **Expert Tier:** Levels 11–15 (potent crowd control and high-impact effects).
- **Master Tier:** Levels 16–20 (epic, reality-altering magic).

## 5.2 Spellcasting Basics

- **Action to Cast:** Most spells require an Action, though some use a Bonus Action or Reaction as specified.
- **Concentration:** Certain spells demand ongoing focus. A caster can concentrate on only one spell at a time; starting a new one ends the previous. If damaged while concentrating, make a Concentration check (Will attribute + Concentration skill rank successes vs. a DR based on the damage or situation). Concentration breaks if incapacitated or voluntarily ended (no action required).
- **Components:** Spells may require Somatic (S; gestures, needs a free hand), Verbal (V; incantations, needs clear speech), or Material (M; ingredients or foci, consumed unless noted otherwise).
- **Range and Targeting:** Spells specify range (e.g., touch, 30 feet) and targets (creatures, objects, areas, self). Line of sight and a clear path (line of effect) are usually required; obstructions like total cover block most spells.
- **Difficulty Ratings (DR):** Saving throws against spells use the listed DR. Unless a spell says otherwise, a combat spell's save DR equals its tier base plus the caster's relevant casting attribute modifier: Initiate 1, Adept 2, Expert 3, Master 4; add +0 if the casting attribute is 1-2, +1 if it is 3-4, or +2 if it is 5. A spell's DR is normally capped at 5 unless the spell or a specific feature says otherwise.

### Save Types Quick Reference

When a spell lists a save (e.g., *DR 2 Blood save*), the target rolls **Attribute + one of the listed skills for that save type** vs. the DR. Do not substitute a different skill unless the spell explicitly tells you to.

| Save Type | Dice Pool | Resists |
|---|---|---|
| **Blood save** | Blood + Evasion or Unarmed Combat | Physical effects: binding, poison, disease, bodily manipulation, knockback |
| **Will save** | Will + Concentration or Insight | Mental effects: fear, charm, confusion, psychic intrusion, concentration breaks |
| **Soul save** | Soul + Concentration or Forbidden Knowledge | Spiritual effects: soul drain, corruption, death magic, spectral possession |
| **Evasion save** | Shadow + Evasion | Dodge effects: area blasts, traps, cones, sweeping ground hazards |
| **Fury save** | Fury + Weapon Mastery or Unarmed Combat | Raw force: breaking bonds, resisting a shove or knockback by brute strength |

*When a spell names an attribute directly (e.g., "Soul attribute"), it should also name the defending skill. If it does not, use the default skill pairing from the save table above.*

## 5.3 The Spellcasting Process

1. **Choose the Spell:** Select from your known or prepared list. Review type, casting time, cost, range, duration, components, and requirements.
2. **Determine Spell Type & Required Roll:**
   - **Core Dice Mechanic:** Roll D6s equal to Attribute + Skill rank; successes are 5s or 6s.
   - **Attack Spells:** Roll Attribute + Spellcasting Skill (e.g., Soul + Rituals) vs. target's Defense Value (DV). Spell attacks count as attacks for Combat Bonus and similar effects unless a source says otherwise. Successes ≥ DV hit.
   - **Save-Based Spells:** Target rolls Attribute + one of the spell's listed defending skills vs. the spell's DR. Unless a spell says otherwise, use the tier-and-attribute DR rule from Section 5.2.
   - **Utility/Ritual Spells:** May require a caster skill check vs. GM-set DR or auto-succeed if conditions met.
   - **Forbidden Spells:** Often use high DR saves (3–4+); may require or allow Corruption Dice.
3. **Spend Resources:**
   - **Blood Points (BP):** For Blood spells; costs 1–3+ based on tier. Regain via feeding or rituals.
   - **Soul Energy (SE):** For Glyph, Ritual, Forbidden spells; costs 1 (Initiate) to 4+ (Master). Regain via rest or sources.
   - **Corruption Dice (CD):** Add bonus dice to rolls but risk Corruption (see Section V).
   - Other costs: HP sacrifice, Concentration, or specific materials.
4. **Resolve the Effect:** Apply damage, conditions, or changes. Extra successes enable stunts (e.g., +damage, status effects, precision).
5. **Apply Corruption (If Applicable):** See Section V.

## 5.4 Advanced Spell Mechanics

- **Area of Effect (AoE):** Affects shapes like radii or cones; targets save to halve/negate. No attack roll needed for point-targeted AoE.
- **Resistances and Immunities:** Resistance halves damage after the relevant Armor interaction. Immunity negates the damage or effect entirely. Effects that bypass Resistance do not bypass Immunity unless they say so explicitly. Corrupted beings may still be vulnerable to holy effects if a source grants that weakness.
- **Critical Spell Effects:** Attack rolls with 3+ successes or exceeding DV by 2+ deal bonus damage, inflict status, or trigger spell-specific effects.
- **Mastery Piercing (Armor Gate):** To ensure high-level magic remains effective against the most heavily armored foes, all **Master Tier** spells and **Signature Upgrades** (from class features) automatically ignore up to 3 points of a target's Armor. Additionally, any spell that achieves 4+ successes on its casting roll ignores 2 points of Armor regardless of its tier. These effects stack if both conditions are met.
- **Spell Damage Scaling:** Damaging spell attacks and instantaneous combat spells follow the game's normal damaging-ability scaling unless a spell says otherwise. Ongoing hazards, persistent auras, summons, and long-form rituals do not gain this automatic scaling unless their text explicitly says they do.
- **Combat Control Durations:** As a baseline, a combat spell that denies actions, spellcasting, movement, or targeting should either last no longer than 3 rounds, require Concentration, or allow an end-of-turn repeat save. Longer lockouts should generally be reserved for rituals, scene powers, or spells that clearly state an exceptional cost or restriction.
- **Spell Duration:** Instantaneous, rounds/minutes, concentration-based, or permanent until dispelled.

## 5.5 Corruption Dice in Spellcasting

Corruption Dice (CD) tap perilous energies, especially for Forbidden spells or pushing limits.

- **Using CD:** Add to Forbidden spell rolls for potency or push failed rolls (reroll non-successes +1 CD).
- **Consequences:**
  - Each '1' on CD increases Corruption Level by 1.
  - At 3+ Corruption, '1's also trigger a 2d6 roll on the Corruption Dice Failure Table (e.g., Specter Cling: a hostile spirit attaches; Crimson Hunger: intense bloodlust; Eldritch Attention: draws otherworldly notice).
  - Escalating Corruption unlocks perks but imposes penalties (detailed in Corruption rules).

## 5.6 Reactions to Spells

Use your single Reaction per round to respond:

- **Counterspell:** Contested roll (Relevant Attribute + Magical Skill) vs. incoming spell's DR or caster's roll.
- **Evasion:** Shadow/Will + Evasion to halve/negate AoE effects.
- **Absorb:** Will + Concentration to reduce damage or negate status post-hit.
- **Spell-Specific:** Perks may grant unique reactions.

## 5.7 Resource Pools

- **Soul Energy (SE):** Maximum = 3 + Will attribute + (Character Level / 2, rounded up). Start combat at maximum; regain via rest, soul shards, or channeling.
- **Blood Points (BP):** Maximum = 4 + Shadow attribute + (Character Level / 2, rounded up). Start combat at maximum (if not starved); regain via feeding or relics.

## 5.8 Defining a "Scene" in Spellcasting

A "scene" is a distinct narrative segment (e.g., combat encounter, social negotiation, exploration of a chamber). Abilities limited to "once per scene" refresh when the GM declares a new scene begins. If an effect repeats each minute, resolve it at the end of each full minute unless the source says otherwise.

## 5.9 Learning and Preparing Spells

- **Class Lists:** Spell access is class-based and curated. A spell-using class gains access only to the spells, schools, or tags listed in its class entry.
- **Known vs. Prepared Spells:** A class either knows spells permanently or prepares them from its class list, as stated in the class entry. If a class entry does not say otherwise, treat it as a known-spell caster.
- **Starting Spells:** Spell-using characters begin with a small set of tier-appropriate spells from their class list, as shown in their class entry.
- **Leveling Up:** When a class grants spell progression, learn one new spell from your class list that you are high enough tier to cast. A known-spell caster may also replace one known spell with another spell from a tier they can cast. A prepared caster instead expands the set of spells they may prepare.
- **Discovery:** Learn via scrolls, tomes, mentors, or glyphs. Requires skill check (e.g., Will + Forbidden Knowledge) and downtime/resources (GM sets DR based on tier/rarity).

## 5.10 Spell Compendium

This compendium lists spells by tier and category. Chapter 3 assigns class access through curated class spell lists. Costs assume SE for Glyph, Ritual, and Forbidden spells, and BP for Blood spells. Casting time is 1 Action unless specified otherwise. Unless a spell says otherwise, save-based combat spells use the DR model in Section 5.2, spell attacks count as attacks for Combat Bonus, and damaging spell attacks or instantaneous combat spells scale using the normal damaging-ability rule.

When a class feature and a spell share a name, treat the Chapter 5 spell as the generic base version of that technique. The class feature is that class's **Signature Upgrade**. If an ability, perk, or class feature references the named class feature, use the class-feature text. Learning or preparing the generic spell does not grant the Signature Upgrade.

**Access Tags:** `SR` = Soul Reaver, `SM` = Shadowmancer, `SG` = Sangromancer, `GW` = Glyphwright, `WB` = Warden of Balance, `HW` = Hylden Warlock.

### 5.10.1 Initiate Tier (Levels 1–5)

#### Glyph Spells
- **Glyph of Anchoring** [GW, SR, WB]: Cost: 1 SE. Touch; triggers on teleportation attempt adjacent. DR 2 Will save or teleport fails.
- **Glyph of Binding Light** [GW, WB]: Cost: 1 SE. Touch; triggers on approach. DR 2 Evasion save or Restrained 1 round.
- **Glyph of Delay** [GW]: Cost: 0 SE (modifies another glyph). Delays trigger by 1 round.
- **Glyph of Detection** [GW, WB]: Cost: 1 SE. 1 min cast; detects chosen type (Undead, Magic) within 15 ft, alerts caster.
- **Glyph of Flame** [GW]: Cost: 1 SE. Touch; triggers on approach. 3 Elemental (Fire) damage in 5-ft radius (DR 2 Evasion halves).
- **Glyph of Frost** [GW]: Cost: 1 SE. Touch; triggers on approach. 1 Elemental (Cold) damage + speed -10 ft 1 round (DR 2 Fury negates speed reduction).
- **Glyph of Sparks** [GW]: Cost: 1 SE. Touch; triggers on approach. 1 Elemental (Lightning) damage + DR 2 Will save or Blinded 1 round.
- **Glyph of Thorns** [GW, SR]: Cost: 1 SE. Touch; triggers on entry. 2 Spectral damage + DR 2 Evasion save or speed halved 1 round.
- **Glyph of Warding** [GW, WB]: Cost: 1 SE. Touch; triggers on interaction without passphrase. Alarm + minor effect (e.g., flash, tether, shock).

#### Blood Spells
- **Blood Leash** [SG]: Cost: 1 BP. 30 ft; DR 2 Blood save or tethered (max 15 ft away) for concentration up to 1 min.
- **Blood Mark** [SG]: Cost: 1 BP. Touch/30 ft; attacks against the target have Advantage for 2 rounds.
- **Blood Thread** [SG]: Cost: 1 BP. 30 ft; create sticky thread for manipulation or tripwire.
- **Blood Trace** [SG]: Cost: 1 BP. 1 min cast; sense direction/distance to blood sample's owner for 10 min.
- **Coagulate** [SG]: Cost: 1 BP. Touch; end Bleeding or stabilize dying target.
- **Crimson Slash** [SG]: Cost: 1 BP. Self/15 ft; form blade (3 Physical (Slashing) + standard Bleeding) or whip (2 Physical (Slashing) + DR 2 Evasion or standard Bleeding).
- **Hemostatic Pulse** [SG]: Cost: 1 BP. Touch; heal 2 HP (1/min limit).
- **Minor Bloodshield** [SG]: Cost: 1 BP. Reaction/Bonus; grant 3 + Soul Temporary HP.
- **Pulse Spike** [SG]: Cost: 1 BP. 30 ft; spell attack, 1 Spectral damage + DR 2 Blood save or Disadvantage on the target's next attack or check.
- **Sanguine Dart** [SG]: Cost: 1 BP. 30 ft; spell attack, 3 Physical (Piercing) with Advantage if the target is Bleeding.

#### Ritual Spells
- **Altar Blessing** [WB]: Cost: 2 SE. 10 min; touch altar; grant Advantage on one relevant check or +1 HP healing to contemplators (once each).
- **Bind Soul** [SR, WB, HW]: Cost: 2 SE. 10 min; touch corpse/willing; store soul fragment in receptacle.
- **Breath of Ancients** [WB, SR]: Cost: 2 SE. 10 min; at historical site; gain cryptic vision of past event.
- **Echo Word** [GW, SM]: Cost: 1 SE. 1 min; touch; store phrase, echoes on trigger.
- **Lantern Rite** [SR, WB]: Cost: 1 SE. Self; 30-ft light reveals invisible/ethereal for concentration up to 10 min.
- **Memory Script** [GW, SM]: Cost: 1 SE/50 words. 1 min/25 words; touch; invisible script revealed by keyword.
- **Rite of Stone** [GW, WB]: Cost: 2 SE. 10 min; touch stone; reinforce, alarm, or hide small object for 24 hrs.
- **Soul Flicker** [SR, SM]: Cost: 1 SE. Self; attacks against you have Disadvantage until your next turn (no offensive actions).
- **Spirit Echo** [SR, SM, WB, HW]: Cost: 1 SE. 1 min; self; sense spiritual traces in 30-ft area (number, emotion).
- **Warding Circle** [GW, WB]: Cost: 2 SE. 1 min; 10-ft circle; blocks chosen type + bonuses for 1 hr.

#### Forbidden Spells
- **Blind Insight** [HW, WB]: Cost: 1 SE (+1 Corruption). 1 min; self; gain disturbing truth about danger.
- **Dissonant Pulse** [HW, WB]: Cost: 1 SE. Self; 10-ft radius; DR 2 Will save or break concentration and suffer Disadvantage on the next Focus-based check.
- **Echo of Rot** [HW]: Cost: 1 SE. 30 ft; DR 2 Blood save or halved healing + decay odor for 3 rounds.
- **Eldritch Gasp** [HW]: Cost: 1 SE. 15-ft cone; DR 2 Blood save or 1 Spectral damage + silenced 1 round.
- **Glyph Disruptor** [GW, HW]: Cost: 1 SE. 30 ft; Soul + Forbidden vs. DR to dispel glyph.
- **Hex of Pain** [SM, HW]: Cost: 1 SE. 30 ft; DR 2 Will save or suffer Disadvantage on attacks and checks for 1 round.
- **Minor Rift** [SR, HW]: Cost: 1 SE. 30 ft; pull object 10 ft or make 5-ft area difficult terrain 1 round.
- **Nightmare Seed** [SM, HW]: Cost: 1 SE. Touch sleeping; nightmares deny rest + DR 2 Will or Frightened 10 min.
- **Shadow Infestation** [SM, HW]: Cost: 1 SE. 30 ft; DR 2 Will save or suffer Disadvantage on Observation checks in dim light for 1 min.
- **Whispershade** [SR, SM, HW]: Cost: 1 SE. Bonus; 60 ft; one-way telepathic whispers for concentration 1 min.

### 5.10.2 Adept Tier (Levels 6–10)

#### Glyph Spells
- **Glyph of Binding** [GW, WB]: Cost: 2 SE. Touch; triggers on entry; DR 2 Evasion or Restrained for Soul rounds (up to 3 targets).
- **Glyph of Chains** [GW, WB, HW]: Cost: 2 SE. Touch; triggers on large creature; DR 3 Blood or Restrained + no teleport 1 min.
- **Glyph of Cinders** [GW]: Cost: 2 SE. Touch; triggers on approach; creatures in the 10-ft area take 2 Elemental (Fire) damage at the start of each turn for 3 rounds + difficult terrain.
- **Glyph of Displacement** [GW, HW]: Cost: 2 SE. Touch; triggers on touch; DR 2 Will or teleport 15 ft random.
- **Glyph of Echoes** [GW]: Cost: 2 SE. Touch; records/copies halved Initiate/Adept glyph 1 round later.
- **Glyph of Entropy** [GW, HW]: Cost: 2 SE. Touch; triggers on spellcast; DR 2 Will or fail spell + equipment flaw 1 min.
- **Glyph of Quicksand** [GW, HW]: Cost: 2 SE. Touch earth; triggers on entry; DR 2 Blood or Restrained in 15x15 ft area + 1 Corruption if sunk.
- **Glyph of Severance** [GW, SR, HW]: Cost: 2 SE. Touch; triggers on touch; 4 Spectral damage + DR 2 Blood or sever non-magical item.
- **Glyph of Silence** [GW, SM, WB]: Cost: 2 SE. Touch; triggers on sound/entry; 10-ft silence 1 min.
- **Shatter Sigil** [GW, HW]: Cost: 2 SE. 30 ft; Soul + Glyph vs. DR to dispel glyph safely.

#### Blood Spells
- **Bleeding Curse** [SG]: Cost: 2 BP. 30 ft; DR 3 Will or, for 1 minute while you maintain concentration, any Physical damage the target takes also inflicts standard Bleeding.
- **Blood Mirror** [SG]: Cost: 2 BP. Reaction on damage; reflect half damage as Spectral damage to attacker.
- **Blood Puppet** [SG]: Cost: 2 BP. 30 ft Bleeding target; DR 2 Will or control next turn (non-suicidal). The Sangromancer's **Blood Puppet** class feature is the Signature Upgrade of this spell.
- **Blood Scent** [SG]: Cost: 1 BP. Bonus; self; detect Bleeding or Bloodied creatures within 60 ft for 10 min.
- **Crimson Bind** [SG]: Cost: 2 BP. 10-ft radius in 60 ft; DR 2 Blood/Evasion or Rooted/speed halved for Soul rounds. The Sangromancer's **Crimson Bind** class feature is the Signature Upgrade of this spell.
- **Crimson Mantle** [SG]: Cost: 2 BP. Bonus; self; +1 Armor 1 min + attacker DR 2 Will or Disadvantage on their next attack.
- **Echo Wound** [SG]: Cost: 1 BP. Reaction on enemy healing; half healed as Physical damage + healer DR 2 Will or 1 Corruption.
- **Hemorrhage Halo** [SG]: Cost: 2 BP. Self; 10-ft radius; DR 2 Blood or 2 Spectral damage plus standard Bleeding.
- **Sangral Lance** [SG]: Cost: 2 BP. 60-ft line; spell attack, 5 Physical (Piercing) + DR 2 Blood or standard Bleeding; pierce second target on extra successes.
- **Vital Hook** [SG]: Cost: 2 BP. 30 ft; spell attack, 2 Spectral damage + Bonus pull 10 ft (DR 2 Blood) for concentration 1 min.

#### Ritual Spells
- **Ceremony of Sorrow** [WB]: Cost: 2 SE. 10 min; group mourning; remove 1 Corruption or recall memory.
- **Chrono-Ward Ritual** [GW, WB]: Cost: 2 SE. 1 min; touch; delay trigger by time condition + Initiate effect.
- **Communion of Shadows** [SM, HW]: Cost: 2 SE. 10 min in shadow; whispers (yes/no questions) or +2 Stealth in dim light.
- **Edict of Suspension** [WB]: Cost: 2 SE. 30 ft; DR 3 Will save or the target loses Reactions and its movement is halved until the end of its next turn.
- **Life Channel** [SG, WB]: Cost: Lose 1–(Level/2) HP. Touch; target heals twice sacrificed amount.
- **Litany of Focus** [GW, WB]: Cost: 1 SE. 1 min; touch; grant Advantage on Focus/detail checks for 1 hr.
- **Pillar Resonance** [WB]: Cost: 2 SE. 10 min at Pillar; vision/lore or +2 related skill check 1 hr.
- **Pillar Ward** [WB]: Cost: 2 SE. 15-ft radius in 30 ft; allies in the ward gain +1 die to Will saves, Soul saves, and Concentration checks while you maintain Concentration, up to 1 min.
- **Rite of Echoes** [WB]: Cost: 2 SE. 10 min at event site; +2 Social check related to echoes 1 hr.
- **Sanctify Blade** [WB]: Cost: 2 SE. 1 min; touch weapon; magical +2 vs. Undead/Corrupted or +1 protect ally 1 hr.
- **Soulweave** [SR, WB]: Cost: 2 SE. 30 ft; link 2 targets; DR 2 Will or share half damage for concentration 1 min.
- **Wraithwalk** [SR, SM]: Cost: 1 SE. Bonus; self; phase through creatures + no opportunity attacks until end of turn.

#### Forbidden Spells
- **Cursed Equation** [HW]: Cost: 2 SE (+1 Corruption). 30 ft; DR 3 Will or suffer Disadvantage on Will and Soul checks and lose Reactions while you maintain Concentration, up to 3 rounds. The target may repeat the save at the end of each of their turns, ending the effect on a success.
- **Darkness** [SM, HW]: Cost: 2 SE. 60 ft; create a 20-ft-radius sphere of magical darkness for Concentration, up to 1 min. Creatures without a feature that explicitly lets them see through magical darkness are effectively Blinded while inside it. Shadowmancers who gain **Darkness** from their class learn this spell without it counting against their spells known.
- **Dread Chain** [SR, SM, HW]: Cost: 2 SE. 30 ft; spell attack, 3 Spectral damage + DR 2 Will or Frightened + halved speed away 1 min.
- **Eyes Beyond** [SM, HW]: Cost: 2 SE (+1 Corruption). 1 min; self; see in darkness/invisible +1 Observation for 10 min (-1 social).
- **Fleshwarp** [HW]: Cost: 2 SE. Touch; DR 2 Blood or warp limb (-2 dice or halved speed) 1 min.
- **Madness Surge** [HW]: Cost: 2 SE (+1 Corruption). 30 ft; DR 2 Will or Confused 1 round (-1 die on success). The Hylden Warlock's **Madness Surge** class feature is the Signature Upgrade of this spell.
- **Omen Tether** [WB, HW]: Cost: 2 SE. 60 ft; DR 2 Will or suffer Disadvantage on one risky roll (Reaction to impose).
- **Phase Snare** [SR, HW]: Cost: 2 SE. 30 ft; DR 3 Soul save or take 2 Spectral damage and be unable to teleport, shift realms, or become incorporeal for 3 rounds. The target may repeat the save at the end of each of its turns, ending the restriction on a success.
- **Riftstep** [SR, SM, HW]: Cost: 2 SE. Bonus; self; teleport 30 ft.
- **Soul Lock** [SR, HW]: Cost: 2 SE. 30 ft; DR 3 Will or no healing/resurrection 1 round.
- **Spectral Lash** [SR, HW]: Cost: 2 SE. 15 ft; spell attack 5 Spectral damage (single) or 3 Spectral damage line (DR 2 Evasion).
- **Unravel Mind** [HW]: Cost: 2 SE (+1 Corruption). 30 ft; DR 3 Will or the target cannot cast spells or take complex actions while you maintain Concentration, up to 3 rounds. The target may repeat the save at the end of each of their turns, ending the effect on a success.

### 5.10.3 Expert Tier (Levels 11–15)

#### Glyph Spells
- **Glyph Lockdown** [GW, WB]: Cost: 3 SE. Touch; triggers on entry; DR 3 Blood or Immobilized in 10-ft field 3 rounds.
- **Glyph of Collapse** [GW, HW]: Cost: 3 SE. 1 min; touch structure; triggers collapse; DR 3 Evasion or 6 Physical (Bludgeoning) + Restrained.
- **Glyph of Doom** [GW, HW]: Cost: 3 SE. Touch; triggers on damage; +3 damage to next 3 instances.
- **Glyph of Drowning** [GW]: Cost: 3 SE. Touch near water; triggers; DR 3 Evasion or suffocate 1 min.
- **Glyph of Echo Memory** [GW, WB]: Cost: 3 SE. 10 min; touch; records 2 rounds of sensory data on trigger.
- **Glyph of Gravity** [GW, WB, HW]: Cost: 3 SE. Touch; triggers; DR 3 Blood or Prone + halved speed 1 round in 10-ft area.
- **Glyph of Reflection** [GW, WB, HW]: Cost: 3 SE. Touch; reflects Adept or lower spell (opposed Will save).
- **Glyph of Ruin** [GW, HW]: Cost: 3 SE. Touch; triggers; creatures in the 15-ft aura have Disadvantage on saves and lose 5 max HP for 1 min.
- **Glyph of Silence Field** [GW, SM, WB]: Cost: 3 SE. Touch; 15-ft silence for concentration 10 min.

#### Blood Spells
- **Arterial Harvest** [SG]: Cost: 1 BP. Reaction on death within 30 ft; regain HP = level or 2 BP.
- **Blood Cyclone** [SG]: Cost: 3 BP. Self; 20-ft radius; 5 Physical (Slashing) + DR 3 Blood or pushed/Prone.
- **Bloodlash Field** [SG]: Cost: 3 BP. 15-ft square in 60 ft; 3 Physical (Slashing) + DR 2 Evasion or pulled/Rooted for concentration 1 min.
- **Bloodrite Brand** [SG]: Cost: 3 BP. 1 min; touch; permanent brand (fealty, outcast, or suffering).
- **Bone Siphon** [SG]: Cost: 3 BP. Touch; DR 3 Blood or 5 Spectral damage + brittle bones (+2 Bludgeoning/Slashing dmg) 1 min.
- **Crimson Shackle** [SG]: Cost: 3 BP. 30 ft; spell attack + DR 3 Fury to break Restrained for concentration 1 min.
- **Crimson Surge** [SG]: Cost: 3 BP (-2 HP to self). 15-ft cone; 6 Physical (Bludgeoning) + DR 3 Blood or Prone.
- **Curse of Ash** [SG]: Cost: 2 BP. 30 ft; DR 3 Blood or no healing + 2 Spectral damage on heal attempts 3 rounds.
- **Heartburst** [SG]: Cost: 4 BP. 30 ft; DR 3 Blood. On a failure, a target below 20 HP dies; otherwise it takes 8 Spectral damage. On a success, the target takes 4 Spectral damage instead. Once per long rest.
- **Viscera Torrent** [SG]: Cost: 3 BP (-2 HP to self). 30-ft cone; 4 Spectral damage + DR 3 Blood or Poisoned 1 min + -2 Stealth.

#### Ritual Spells
- **Beckon of the Deep** [HW]: Cost: 4 SE. 30 min near water; summon abyssal creature (DR 3–4 Soul + Rituals).
- **Hauntwalker** [SR, SM, WB, HW]: Cost: 3 SE. 10 min; summon minor spirit for scouting/distraction/info.
- **Judgment Sigil** [WB]: Cost: 3 SE. 20-ft radius in 60 ft; choose one mode when cast for Concentration, up to 3 rounds. **Protection:** allies in the area gain +1 die to Will saves, Soul saves, and Concentration checks. **Condemnation:** enemies in the area suffer -1 die on attack rolls.
- **Memory Tomb** [WB, HW]: Cost: 4 SE. 1 hr; touch; store memories from willing/corpse in repository.
- **Oracle's Insight** [WB, HW]: Cost: 3 SE. 10 min; self; 3 questions about problem (DR 2 Soul + Insight for clarity).
- **Past's Reflection Rite** [WB]: Cost: 3 SE. 10 min; self; vision of alternative outcomes + 2 questions.
- **Ritual of Awakening** [GW, HW]: Cost: 4 SE. 1 hr; touch; awaken item, construct, or spirit (DR 3 Soul + relevant skill).
- **Sanctify Ground** [WB]: Cost: 4 SE. 1 hr; 30-ft radius; damage/penalties to Undead/Corrupted + ally bonuses 24 hrs.
- **Soul Anchor** [SR, WB]: Cost: 3 SE. 10 min; touch; prevent death (to 1 HP) + +2 vs. Spectral attacks until long rest.
- **Spectral Crossing** [SR, SM]: Cost: 3 SE. Self or one willing creature within 10 ft; for 3 rounds, the target can move through creatures and non-warded solid objects as difficult terrain and does not provoke opportunity attacks.
- **Spiritforge Circle** [GW]: Cost: 3 SE. 1 hr; 10-ft circle; +2 Craft for magic items 8 hrs.
- **Temporal Delay** [GW, WB]: Cost: 3 SE. 1 min; touch; delay activation/process by up to Will rounds.

#### Forbidden Spells
- **Cacophonic Flare** [HW]: Cost: 3 SE (+1 Corruption). Self; 20-ft radius; DR 3 Will or Deafened/Stunned + Blinded/ -1 Will 1 min.
- **Dark Reflection** [SM, HW]: Cost: 3 SE. Self; summon reflection (your stats, Spectral damage attacks, menace/teleport) 1 min.
- **Descent of Teeth** [SM, HW]: Cost: 3 SE. 10-ft radius in 60 ft; 5 Spectral damage + DR 3 Evasion or Bleeding that deals 2 damage at the start of each turn for 2 rounds.
- **Fatebind Curse** [WB, HW]: Cost: 4 SE (+2 Corruption). 10 min; curse with item; auto-fail/crit hit once/session until removed.
- **Night Sovereign's Path** [SM]: Cost: 3 SE. Bonus; teleport between shadows up to 60 ft. Until the start of your next turn, you are Invisible unless you attack, cast a damaging spell, or leave dim light or darkness.
- **Oblivion Whisper** [SM, HW]: Cost: 3 SE (+1 Corruption). Touch/15 ft; DR 3 Will or forget spell/clue 24 hrs.
- **Rift Pulse** [SR, HW]: Cost: 3 SE. 20-ft line; 5 Entropic (Void) damage + DR 3 Blood or pushed.
- **Rotmind Rift** [HW]: Cost: 3 SE (+1 Corruption). 30 ft; DR 3 Will or gain 1 Corruption at the start of each turn + random madness effect 1 min.
- **Mind Spike** [SR, HW]: Cost: 3 SE (+1 Corruption). 30 ft; 4 Spectral damage + DR 3 Will or Corruption Die/paranoia 1 round.
- **Soul Rend** [SR, HW]: Cost: 3 SE (+1 Corruption optional). 30 ft; spell attack, 4 Spectral damage. The target also loses 1 SE; if it has no SE, it instead suffers -1 die on Will saves and Soul saves until the end of its next turn. If you choose to gain 1 Corruption when you cast this spell, increase the damage to 6.
- **Soul Fracture** [SR, HW]: Cost: 3 SE (+1 Corruption). 30 ft; DR 3 Soul or -2 Will/Soul checks + increased SE costs 1 min; harder resurrection if killed.
- **Starving Veil** [SR, SM, HW]: Cost: 3 SE. Self; 15-ft aura; creatures in the aura take 2 Spectral damage at the start of each turn, and you heal 1 HP per creature damaged this way (max 2 HP per turn), for concentration 1 min.

### 5.10.4 Master Tier (Levels 16–20)

#### Glyph Spells
- **Eternal Glyph Lock** [GW, WB]: Cost: 5 SE. 1 hr; touch; permanent magical lock (DR 5 to breach) + defensive ward.
- **Glyph Nexus Gate** [GW, WB, HW]: Cost: 5 SE. 1 hr; link two locations for transport 1 week.
- **Glyph of Judgment** [GW, WB]: Cost: 4 SE. Touch; triggers on aggression; DR 3 Will or reflect half damage as Spectral damage 1 min.
- **Glyph of Obliteration** [GW, HW]: Cost: 5 SE. Touch; triggers; 8 Force damage + push in 20-ft radius (DR 4 Evasion halves).
- **Glyph of Time Sever** [GW, WB]: Cost: 5 SE. Touch; triggers; DR 4 Will or limited actions/reactions in 15-ft area 3 rounds.
- **Glyph of Unmaking** [GW, HW]: Cost: 5 SE. Touch; command trigger; dispel Expert or lower in 30-ft radius (opposed for Master).
- **Glyph of Unraveling** [GW, HW]: Cost: 4 SE. Touch; triggers on spell; DR 3 Will or fail + 4 Spectral damage/backlash.
- **Glyph Vortex** [GW, SR, HW]: Cost: 4 SE. Touch; triggers; pull + 4 Spectral damage in 15-ft area 3 rounds (DR 3 Blood).
- **Nexus Glyph** [GW]: Cost: 4 SE. Touch; store/activate 3 Initiate/Adept glyphs on one trigger.
- **Sanctum Glyph** [GW, WB]: Cost: 5 SE. 10 min; 30x30 ft area; +1 DV/saves, anti-scrying/teleport 24 hrs.

#### Blood Spells
- **Blood Oblivion** [SG]: Cost: 5 BP (+1 Corruption). Touch; DR 4 Will or erase memories/skills permanently.
- **Blood Resurrection** [SG]: Cost: 5 BP (-1 max HP). 10 min; touch corpse; revive with half HP (up to 1 day dead).
- **Crimson Godseed** [SG]: Cost: 5 BP (-3 max HP). 1 hr; vampiric transformation or boost (+1 attribute/spell).
- **Crimson Reaping** [SG]: Cost: 5 BP. Self; 15-ft radius; 6 Spectral damage plus standard Bleeding (DR 3 Evasion halves); execute creatures below 25% HP.
- **Hemodominate** [SG]: Cost: 5 BP. 30 ft Bleeding; DR 3 Will or full control 1 min (once/long rest). The Sangromancer's **Hemodominate** class feature is the Signature Upgrade of this spell.
- **Sanguine Eclipse** [SG]: Cost: 5 BP. 30-ft radius in 120 ft; obscured + 3 Spectral damage + exhaustion (DR 3 Blood) + halved healing 1 min.
- **Sanguine Swarm** [SG]: Cost: 4 BP (-5 HP). 30 ft; summon swarm (5 Spectral damage + Frightened) for concentration 1 min.
- **Throne of Veins** [SG]: Cost: 4 BP. Self; +2 Armor + tendril pull/Prone + +1 save DR 10 min.
- **Vital Dominion** [SG]: Cost: 5 BP. Self; 30-ft aura; choose siphon/deaccelerate/puppet effects 1 min.
- **Wound Reversal** [SG]: Cost: 4 BP. 30 ft; swap HP totals between 2 targets (DR 3 Blood).

#### Ritual Spells
- **Binding of the Starborn** [WB]: Cost: 5 SE. 1 hr under stars; summon celestial entity for task (DR 4 Soul + Rituals).
- **Chrono Collapse** [WB, HW]: Cost: 5 SE. 1 min; 20-ft radius in 120 ft; DR 4 Will save or limited actions 3 rounds.
- **Curse of the Nine Moons** [HW]: Cost: 5 SE. 1 hr night; lunar curse (madness/transformation/withering) until removed.
- **Dirge of Ruin** [WB, HW]: Cost: 5 SE. 10 min; 60-ft radius; 3 Spectral damage + -1 die actions (DR 2 Will save + Concentration to maintain).
- **Eternal Sigil** [GW, WB]: Cost: 5 SE. 1 hr; permanent ward (unbreachable, dimensional lock, elemental bane).
- **Invocation of Chains** [WB, HW]: Cost: 4 SE. 20-ft radius in 60 ft; DR 4 Evasion save or become Restrained while you maintain Concentration, up to 3 rounds. A restrained creature may repeat the save at the end of each of its turns, ending the effect on a success. Attacks and spell attacks that cross the boundary of the chained area have Disadvantage.
- **Last Rite of Balance** [WB]: Cost: 5 SE (-2 Exhaustion). 1 hr; cleanse 1-mile area of corruption (DR 4–5 Soul + Rituals).
- **Realmshift** [SR, WB, HW]: Cost: 5 SE. 10 min; 60-ft overlay Spectral/other plane (DR 3 Soul + Rituals per min).
- **Ritual of Eclipse** [SM, WB, HW]: Cost: 5 SE. 10 min; 1-mile twilight; weaken sunlight users + empower shadows 1 hr.
- **Soulforge Resurrection** [SG, WB, HW]: Cost: 5 SE/BP. 8 hrs; revive with full faculties (DR 4 Soul + Rituals).

#### Forbidden Spells
- **Annihilation Pulse** [HW]: Cost: 5 SE (-5 HP). Self; all other creatures in a 20-ft radius make a DR 4 Evasion save, taking 8 Entropic (Void) damage on a failure or 4 on a success.
- **Astral Shackle** [SR, HW]: Cost: 4 SE. 60 ft; DR 4 Soul save or become Paralyzed while you maintain Concentration, up to 3 rounds. The target repeats the save at the end of each of its turns, ending the paralysis on a success. If the target fails this save three times before the spell ends, it is also banished to an adjacent realm until the end of its next turn. Legendary creatures are immune to this banishment rider.
- **Black Spiral** [HW]: Cost: 5 SE (+2 Corruption). 20-ft radius in 60 ft; creatures in the area take 5 Entropic (Void) damage and are pulled up to 10 ft toward the center. They must then make a DR 4 Soul save or become Restrained while you maintain Concentration, up to 3 rounds. A restrained creature may repeat the save at the end of each of its turns, ending the effect on a success.
- **Corruption Crown** [SM, HW]: Cost: 4 SE (+1 Corruption). Self; +2 Intimidation/Deception + Charm on damage (DR 3 Will save) + dread aura 10 min.
- **Mind Rupture** [HW]: Cost: 4 SE (+2 Corruption). 30 ft; DR 3 Will save or madness until cured (once/long rest). The Hylden Warlock's **Mind Rupture** class feature is the Signature Upgrade of this spell.
- **Reaver Unleashed** [SR, HW]: Cost: 4 SE (+1 Corruption). 60-ft cone/30-ft burst; 7 Spectral damage (DR 3 Soul save halves) + Reaver boost 1 min.
- **Soul Storm** [SR, HW]: Cost: 5 SE. 30-ft radius in 120 ft; 6 Spectral damage + Frightened (DR 3 Will) + obscured 3 rounds. The Soul Reaver's **Soul Storm** class feature is the Signature Upgrade of this spell.
- **The God’s Rebuttal** [WB, HW]: Cost: 5 SE (+2 Corruption). Reaction on divine; opposed check to counter + 4 Entropic (Void) damage backlash.
- **The Whispering Gate** [HW]: Cost: 5 SE (+3 Corruption). 1 hr; open gate to hostile plane (DR 4 Soul + Forbidden Knowledge).
- **Void Chain** [SR, HW]: Cost: 4 SE. 60 ft; spell attack, 5 Void + DR 4 Blood or Restrained/pull + no teleport.