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
- **Concentration:** Certain spells demand ongoing focus. A caster can concentrate on only one spell at a time; starting a new one ends the previous. If damaged while concentrating, make a Concentration check (Will attribute + Concentration skill rank successes) against `DR 2`, or `DR 3` if a single hit dealt 5 or more damage, unless a spell or effect says otherwise. Concentration breaks if incapacitated or voluntarily ended (no action required).
- **Components:** Spells may require Somatic (S; gestures, needs a free hand), Verbal (V; incantations, needs clear speech), or Material (M; ingredients or foci, consumed unless noted otherwise).
- **Range and Targeting:** Spells specify range (e.g., touch, 30 feet) and targets (creatures, objects, areas, self). Line of sight and a clear path (line of effect) are usually required; obstructions like total cover block most spells.
- **Difficulty Ratings (DR):** Saving throws against spells use the listed DR. Unless a spell says otherwise, a combat spell's save DR equals its tier base plus the caster's relevant casting attribute modifier: Initiate 1, Adept 2, Expert 3, Master 4; add +0 if the casting attribute is 1-2, +1 if it is 3-4, or +2 if it is 5. A spell's DR is normally capped at 5 unless the spell or a specific feature says otherwise. Spells that list a specific DR use that as a **floor**, not a fixed value. If the formula above would produce a higher DR for your casting attribute, use the higher value.

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
   - **Blood Points (BP):** For Blood spells; costs 1–3+ based on tier. Regain via **feeding**, **blood relics** (see Ch. 7), or **blood rituals** performed during a short or long rest.
   - **Soul Energy (SE):** For Glyph, Ritual, Forbidden spells; costs 1 (Initiate) to 4+ (Master). Regain via rest or sources.
   - **Corruption Dice (CD):** Some Forbidden spells and desperate pushes use Corruption Dice; resolve them using Section 5.5 and Chapter 8.
   - Other costs: HP sacrifice, Concentration, or specific materials.
4. **Resolve the Effect:** Apply damage, conditions, or changes. Extra successes enable stunts (e.g., +damage, status effects, precision).
5. **Apply Corruption (If Applicable):** Resolve any listed Corruption cost, Corruption Dice, or push effect after the spell resolves.

## 5.4 Advanced Spell Mechanics

- **Area of Effect (AoE):** Affects shapes like radii or cones; targets save to halve/negate. No attack roll needed for point-targeted AoE. AoE spells that do not specify targeting affect **all creatures** in the area, including allies, unless the spell text says 'creatures of your choice,' 'enemies,' or 'allies.' If a spell says 'creatures' without qualification, it hits everything.
- **Resistances and Immunities:** Resistance halves damage after the relevant Armor interaction. Immunity negates the damage or effect entirely. Effects that bypass Resistance do not bypass Immunity unless they say so explicitly. Corrupted beings may still be vulnerable to holy effects if a source grants that weakness.
- **Critical Spell Effects:** Attack rolls with 3+ successes or exceeding DV by 2+ deal bonus damage, inflict status, or trigger spell-specific effects.
- **Mastery Piercing (Armor Gate):** To ensure high-level magic remains effective against the most heavily armored foes, all **Master Tier** spells and **Signature Upgrades** (from class features) automatically ignore up to 3 points of a target's Armor. Additionally, any spell that achieves 4+ successes on its casting roll ignores 2 points of Armor regardless of its tier. These effects stack if both conditions are met.
- **Mastery Bypass (Resistance/Immunity):** **Master Tier** spells and **Signature Upgrades** are exceptionally potent. They automatically ignore **Resistance** to their damage types. Furthermore, they treat **Immunity** as **Resistance** (taking half damage instead of none), unless the target has a specific feature stating it is immune even to Master-tier magic.
- **Spell Damage Scaling:** Damaging spell attacks and instantaneous combat spells follow the game's normal damaging-ability scaling unless a spell says otherwise. Ongoing hazards, persistent auras, summons, and long-form rituals do not gain this automatic scaling unless their text explicitly says they do. This asymmetry is intentional — ongoing auras are designed for tactical setup and area control, not sustained damage scaling.
- **Combat Control Durations:** As a baseline, a combat spell that denies actions, spellcasting, movement, or targeting should either last no longer than 3 rounds, require Concentration, or allow an end-of-turn repeat save. Longer lockouts should generally be reserved for rituals, scene powers, or spells that clearly state an exceptional cost or restriction.
- **Spell Duration:** Instantaneous, rounds/minutes, concentration-based, or permanent until dispelled.

## 5.5 Corruption Dice in Spellcasting

Corruption Dice (CD) in spellcasting represent a caster drawing on unstable, soul-rending power. Unlike corrupted perks, spells only use CD when a spell explicitly says so or when a caster chooses to push a Forbidden spell.

- **Spell-Specific Costs:** If a spell says to gain Corruption or roll Corruption Dice, resolve that exactly as written in the spell and apply the result after the spell finishes resolving.
- **Pushing a Forbidden Spell:** Once per spell cast, after rolling a Forbidden spell attack or caster check and before the outcome is finalized, you may choose to **Push** the spell by adding `1`, `2`, or `3` Corruption Dice to your pool. Each `5-6` rolled adds `+1 success` to the total, while each `1` adds `+1 Corruption Level` to your character.
- **Risk:** Each `1` rolled on Corruption Dice increases your Corruption by 1. Apply this using the current Corruption rules in Chapter 8.
- **Limits:** You cannot push a spell that has already been pushed, and pushing a spell never changes its range, duration, area, or target restrictions unless the spell says otherwise.
- **Design Rule:** If a Forbidden spell already has a listed Corruption cost, that listed cost is the primary balancing lever. Optional pushing exists to let casters gamble for reliability, not to replace the spell's normal risk.

## 5.6 Reactions to Spells

Use your single Reaction per round to respond:

- **Counterspell** (Reaction): Available to any character who can cast spells. Cost: 1 SE. Trigger: You see a creature within 60 feet begin casting a spell. Roll your relevant casting Attribute + Magical Skill (e.g., Soul + Glyphcasting, Will + Forbidden Knowledge). Contested against the caster's roll or, for non-attack spells, against the spell's DR. On a success, the spell is disrupted and fails. The SE cost is lost regardless of outcome.
- **Evasion:** Shadow/Will + Evasion to halve/negate AoE effects.
- **Absorb:** Will + Concentration to reduce damage or negate status post-hit.
- **Spell-Specific:** Perks may grant unique reactions.

## 5.7 Resource Pools

- **Soul Energy (SE):** Maximum = 3 + Will attribute + (Character Level / 2, rounded up). Start combat at maximum; regain via rest, soul shards, or channeling.
  - **SE Regeneration:** SE restores fully after a **long rest**. **Soul shards** (found as treasure or crafted by Glyphwrights) restore 1–2 SE as an Action (see Ch. 7 §7.X). **Channeling** at an Energy Foci (Ch. 11 §11.3) restores 1 SE after a successful attunement check during a short rest.
- **Blood Points (BP):** Maximum = 4 + Shadow attribute + (Character Level / 2, rounded up). Start combat at maximum (if not starved); regain via **feeding**, **blood relics** (see Ch. 7), or **blood rituals** performed during a short or long rest. **While in the Spectral Realm:** BP is suspended — it cannot be spent and abilities requiring it cannot be activated. Your BP pool is preserved intact and becomes available again when you return to the Material Realm. See [Chapter 11, Section 11.5.6](./11-realms-terrain-arcane-power.md#1156-spectral-action-restrictions).
  - **BP Regeneration:** BP restores fully after a **long rest** during which the character can feed. **Feeding** on a living or recently dead (within 1 hour) creature restores BP equal to half that creature's TV, rounded up, as an Action. Feeding on a willing creature restores 1 BP and takes 1 minute. **Relics** that restore BP are listed in Ch. 7 §7.X.
  - **Spectral Restriction:** Sangromancers are wholly Material-realm casters. Their spells require living blood and cannot function in the Spectral Realm. A Sangromancer who crosses the veil retains their BP pool but cannot access it until they return to the Material Realm.
- **Max HP Recovery:** Permanent maximum HP reduction (from Master-tier Blood spells) can only be restored by a **Soulforge Resurrection** ritual performed on the affected character (restoring all lost max HP), or by a **long rest** at a location with healing properties designated by the GM (restoring 1 lost max HP). Temporary max HP reduction (like Glyph of Ruin) cannot reduce a character's current HP below 1 — if a creature's max HP would drop below their current HP, their current HP drops to match the new maximum.

## 5.8 Defining a "Scene" in Spellcasting

A "scene" is a distinct narrative segment (e.g., combat encounter, social negotiation, exploration of a chamber). Abilities limited to "once per scene" refresh when the GM declares a new scene begins. If an effect repeats each minute, resolve it at the end of each full minute unless the source says otherwise.

## 5.9 Learning and Preparing Spells

- **Class Lists:** Spell access is class-based and curated. A spell-using class gains access only to the spells, schools, or tags listed in its class entry.
- **Known vs. Prepared Spells:** A class either knows spells permanently or prepares them from its class list, as stated in the class entry. If a class entry does not say otherwise, treat it as a known-spell caster.
- **Starting Spells:** Spell-using characters begin with a small set of tier-appropriate spells from their class list, as shown in their class entry.
- **Leveling Up:** When a class grants spell progression, learn one new spell from your class list that you are high enough tier to cast. A known-spell caster may also replace one known spell with another spell from a tier they can cast. A prepared caster instead expands the set of spells they may prepare.
- **Discovery:** Learn via scrolls, tomes, mentors, or glyphs. Requires skill check (e.g., Will + Forbidden Knowledge) and downtime/resources (GM sets DR based on tier/rarity).

## 5.10 Spell Compendium

This compendium lists spells by tier and category. Chapter 3 assigns class access through curated class spell lists. Costs assume SE for Glyph, Ritual, and Forbidden spells, and BP for Blood spells. Casting time is 1 Action unless specified otherwise. Unless a spell says otherwise, save-based combat spells use the DR model in Section 5.2, spell attacks count as attacks for Combat Bonus, and damaging spell attacks or instantaneous combat spells scale using the normal damaging-ability rule. Spells that list a specific DR use that as a **floor**, not a fixed value. If the §5.2 formula would produce a higher DR for your casting attribute, use the higher value. The listed DR represents the minimum a caster of that tier achieves.

When a class feature and a spell share a name, treat the Chapter 5 spell as the generic base version of that technique. The class feature is that class's **Signature Upgrade**. If an ability, perk, or class feature references the named class feature, use the class-feature text. Learning or preparing the generic spell does not grant the Signature Upgrade.

**Access Tags:** `SR` = Soul Reaver, `SM` = Shadowmancer, `SG` = Sangromancer, `GW` = Glyphwright, `WB` = Warden of Balance, `HW` = Hylden Warlock.

### 5.10.1 Initiate Tier (Levels 1–5)

#### Glyph Spells
- **Glyph of Anchoring** [GW, SR, WB]: Cost: 1 SE. Touch; lasts until triggered or until your next long rest. Choose a 5-foot space adjacent to the inscribed surface. The first creature that attempts to teleport or shift realms (see [Chapter 11, Section 11.5.2](./11-realms-terrain-arcane-power.md#1152-crossing-the-veil)) into, out of, or through that square triggers the glyph and must succeed on a DR 2 Will save or the teleport/shift fails and the action, spell, or effect is wasted. Because glyphs affect both realms simultaneously (Ch. 11 §11.5.3), this glyph also blocks realm-shift crossing attempts at Soul Portals from the Spectral side. A Spectral creature attempting to use a Soul Portal in the affected square must still succeed on the DR 2 Will save or the crossing fails.
- **Glyph of Binding Light** [GW, WB]: Cost: 1 SE. Touch; triggers on approach. DR 2 Evasion save or **Restrained** 1 round.
- **Glyph of Delay** [GW]: Cost: 0 SE (modifies another glyph). Delays trigger by 1 round.
- **Glyph of Detection** [GW, WB]: Cost: 1 SE. 1 minute to cast; touch; lasts 1 hour. Choose one category such as Undead, active magic, or a specific lineage. The glyph alerts you mentally the first time a creature, object, or effect of that type comes within 15 ft of it.
- **Glyph of Flame** [GW]: Cost: 1 SE. Touch; triggers on approach. 3 Elemental (Fire) damage in 5-ft radius (DR 2 Evasion halves).
- **Glyph of Frost** [GW]: Cost: 1 SE. Touch; triggers on approach. 1 Elemental (Cold) damage + speed -10 ft 1 round (DR 2 Fury negates speed reduction).
- **Glyph of Sparks** [GW]: Cost: 1 SE. Touch; triggers on approach. 1 Elemental (Lightning) damage + DR 2 Will save or **Blinded** 1 round.
- **Glyph of Thorns** [GW, SR]: Cost: 1 SE. Touch; triggers on entry. 2 Spectral damage + DR 2 Evasion save or speed halved 1 round.
- **Glyph of Warding** [GW, WB]: Cost: 1 SE. Touch; lasts until triggered or until your next long rest. Choose a passphrase and one minor rider when you cast it: flash, tether, or shock. A creature that touches or deliberately interacts with the warded object without the passphrase triggers the glyph, alerting you if you are on the same plane and applying the chosen rider: **flash** forces a DR 2 Will save or the creature is **Blinded** until the end of its next turn, **tether** reduces its speed to 0 (**Rooted**) until the end of its next turn, or **shock** deals 1 Elemental (Lightning) damage.

#### Blood Spells
- **Blood Leash** [SG]: Cost: 1 BP. 30 ft; DR 2 Blood save or tethered (**Restrained**; max 15 ft away) for concentration up to 1 min.
- **Blood Mark** [SG]: Cost: 1 BP. 30 ft; one creature you can see. Until the end of your next turn, the first attack made against the target each round has Advantage. If you touch a willing target while casting instead of targeting at range, the mark lasts until the end of the scene rather than until the end of your next turn.
- **Blood Thread** [SG]: Cost: 1 BP. 30 ft; create a visible, sticky blood-filament up to 15 ft long between two points or from your hand to one unattended object. The thread lasts for 10 minutes, can support negligible weight, and can be used as a tripwire, simple tether, or for manipulating Tiny unattended objects within range. A creature moving through the thread deliberately can do so freely; a creature that blunders through it triggers the thread and reveals its position to you if you are within 60 ft.
- **Blood Trace** [SG]: Cost: 1 BP. 1 min cast; sense direction/distance to blood sample's owner for 10 min.
- **Coagulate** [SG]: Cost: 1 BP. Touch; end **Bleeding** or stabilize dying target.
- **Crimson Slash** [SG]: Cost: 1 BP. Self/15 ft; form blade (3 Physical (Slashing) + standard **Bleeding**) or whip (2 Physical (Slashing) + DR 2 Evasion or standard **Bleeding**).
- **Hemostatic Pulse** [SG]: Cost: 1 BP. Touch; heal 2 HP. A creature can benefit from Hemostatic Pulse only once per minute — casting it again on the same target before that time has elapsed has no effect.
- **Minor Bloodshield** [SG]: Cost: 1 BP. Bonus Action or Reaction when you or a creature within 30 ft takes damage; the target gains temporary HP equal to `3 + your Soul`, applied before the triggering damage if cast as a Reaction. A creature can benefit from only one Minor Bloodshield at a time.
- **Pulse Spike** [SG]: Cost: 1 BP. 30 ft; spell attack, 3 Spectral damage + DR 2 Blood save or Disadvantage on the target's next two attack rolls or checks.
- **Sanguine Dart** [SG]: Cost: 1 BP. 30 ft; spell attack, 3 Physical (Piercing) with Advantage if the target is **Bleeding**.

#### Ritual Spells
- **Altar Blessing** [WB]: Cost: 2 SE. 10 minutes; touch an altar, shrine, or dedicated sacred focus; lasts 24 hours. Choose one blessing when you cast it: **Guidance** gives each creature that prays there once during the duration Advantage on one relevant Will, Soul, Rituals, or Insight check, or **Mercy** causes the first magical healing that creature receives within 1 hour of prayer to restore +1 HP. Each creature can gain the blessing only once per casting.
- **Bind Soul** [SR, WB, HW]: Cost: 2 SE. 10 minutes; touch one willing creature or one corpse that died within the last hour; duration special. You bind a fragment of the target's soul into a prepared vessel you touch during the casting. The vessel can hold the fragment until your next long rest. While stored, the fragment can be used as a narrative proof of identity, a component for another rite that names it, or a safeguard against effects that would fully annihilate that soul, at GM discretion.
- **Breath of Ancients** [WB, SR]: Cost: 2 SE. 10 minutes; self at a historical site or scene of powerful emotion; instantaneous. You receive a brief, symbolic vision of one significant past event tied to that location, usually no more than a minute of sensory impressions. The GM should provide at least one actionable clue, but the vision may be incomplete, metaphorical, or emotionally distorted.
- **Echo Word** [GW, SM]: Cost: 1 SE. 1 minute; touch; inscribe a tiny glyph on a surface or object and speak a phrase of up to 10 words. Choose a trigger: proximity (creature within 5 ft), a specific sound, or a keyword. When triggered, the glyph emits your recorded voice speaking the phrase at its original volume, then vanishes. Lasts until triggered or until your next long rest.
- **Lantern Rite** [SR, WB]: Cost: 1 SE. Self; 30-foot light reveals **Invisible** or **Incorporeal** creatures for Concentration, up to 10 minutes.
- **Memory Script** [GW, SM]: Cost: 1 SE. 1 minute; touch; inscribe invisible script of up to 100 words onto a surface or object you touch. The script is revealed to a viewer who speaks the chosen keyword within 1 foot of the surface. The script lasts until your next long rest unless you spend 1 additional SE when casting to make it permanent. For a permanent script, the casting time is 10 minutes.
- **Rite of Stone** [GW, WB]: Cost: 2 SE. 10 minutes; touch one stone surface or stone container; lasts 24 hours. Choose one mode: **reinforce** grants the object or a 5-foot stone section +3 effective HP against mundane damage, **alarm** causes the stone to emit an audible crack when a creature disturbs it, or **cache** conceals one Tiny object within the stone, requiring a DR 2 Observation or DR 2 Glyphcasting check to find.
- **Soul Flicker** [SR, SM]: Cost: 1 SE. Self; until the start of your next turn, all attacks against you are made with Disadvantage. While this effect is active, you cannot make attack rolls, cast damaging spells, or take any action that directly targets another creature with harm.
- **Spirit Echo** [SR, SM, WB, HW]: Cost: 1 SE. 1 min; self; make a Soul + Observation or Soul + Forbidden Knowledge check (DR 1). On a success, sense the number and general emotional state of spiritual traces in a 30-ft area. On a failure, sense only that spiritual traces are or are not present.
- **Warding Circle** [GW, WB]: Cost: 2 SE. 1 min; 10-ft circle; choose one creature type (e.g., Undead, Beast, Mortal). Creatures of that type cannot enter the circle or target those inside with melee attacks. Allies inside the circle gain +1 die to saves against the chosen type's abilities. Lasts 1 hour.

#### Forbidden Spells
- **Blind Insight** [HW, WB]: Cost: 1 SE and roll 1 Corruption Die. 1 minute; self; duration instantaneous. Ask the GM one question about the most immediate serious danger facing you, your allies, or your current objective. The answer must be truthful but may arrive as a symbolic omen, fragment, or sensory shock rather than plain language.
- **Dissonant Pulse** [HW, WB]: Cost: 1 SE. Self; 10-ft radius. Creatures of your choice in the area that are concentrating on a spell or sustained effect must make a DR 2 Will save. On a failure, their concentration ends and they have Disadvantage on the next Concentration or Focus-based check they make before the end of their next turn. On a success, they keep concentration but still suffer Disadvantage on that next check.
- **Echo of Rot** [HW]: Cost: 1 SE. 30 feet; DR 2 Blood save or halved healing + decay odor for 3 rounds.
- **Eldritch Gasp** [HW]: Cost: 1 SE. 15-ft cone; DR 2 Blood save or 1 Spectral damage + **Silenced** 1 round.
- **Glyph Disruptor** [GW, HW]: Cost: 1 SE. 30 ft; Soul + Forbidden vs. DR to dispel glyph.
- **Hex of Pain** [SM, HW]: Cost: 1 SE. 30 ft; DR 2 Will save or suffer Disadvantage on attacks and checks for 1 round.
- **Minor Rift** [SR, HW]: Cost: 1 SE. 30 ft; choose one unattended object of up to 20 pounds or one 5-foot space you can see. Either pull the object up to 10 ft in a straight line toward you, or tear open unstable space in the square until the start of your next turn, making it difficult terrain.
- **Nightmare Seed** [SM, HW]: Cost: 1 SE. Touch sleeping; nightmares deny rest + DR 2 Will or **Frightened** for up to 1 minute. The target may repeat the save at the end of each of its turns, ending the effect on a success.
- **Shadow Infestation** [SM, HW]: Cost: 1 SE. 30 ft; DR 2 Will save or suffer Disadvantage on Observation checks in dim light for 1 min.
- **Whispershade** [SR, SM, HW]: Cost: 1 SE. Bonus; 60 ft; one-way telepathic whispers for concentration 1 min.

### 5.10.2 Adept Tier (Levels 6–10)

#### Glyph Spells
- **Glyph of Binding** [GW, WB]: Cost: 2 SE. Touch; triggers on entry; DR 2 Evasion or **Restrained** for Soul rounds (up to 3 targets).
- **Glyph of Chains** [GW, WB, HW]: Cost: 2 SE. Touch; triggers on large creature; DR 3 Blood or **Restrained** + no teleport 1 minute. A Restrained creature may repeat the save at the end of each of its turns, ending the effect on a success.
- **Glyph of Cinders** [GW]: Cost: 2 SE. Touch; triggers on approach; creatures in the 10-foot area take 2 Elemental (Fire) damage at the start of each turn for 3 rounds + difficult terrain.
- **Glyph of Displacement** [GW, SM, HW]: Cost: 2 SE. Touch; triggers on touch; DR 2 **Evasion** or teleport 15 feet random.
- **Glyph of Echoes** [GW]: Cost: 2 SE. Touch; inscribe a mirroring glyph adjacent to an existing Initiate or Adept glyph you can see. 1 round after the original glyph triggers, the Glyph of Echoes triggers with the same effect, but its damage, area, and duration are all halved. If the original glyph had no variable values, it simply repeats once.
- **Glyph of Entropy** [GW, SM, HW]: Cost: 2 SE. Touch; triggers on entry or spellcast; the target must succeed on a DR 2 Will save or its active magic is disrupted. If it was casting a spell, the spell fails. Additionally, one piece of mundane equipment the target is using gains an **Equipment Flaw** for 1 minute: a weapon deals -1 damage, or armor provides -1 Armor mitigation.
- **Glyph of Quicksand** [GW, HW]: Cost: 2 SE. Touch earth; triggers on entry; up to 3 creatures of your choice that enter the area must make a DR 2 Blood save or be **Restrained** (15-foot square area). A Restrained creature that cannot escape also gains 1 Corruption Level at the end of its turn.
- **Glyph of Severance** [GW, SR, HW]: Cost: 2 SE. Touch; triggers on touch; 4 Spectral damage + DR 2 Blood or sever non-magical item.
- **Glyph of Silence** [GW, SM, WB]: Cost: 2 SE. Touch; triggers on sound/entry; 10-foot silence (**Silenced**) 1 minute.
- **Shatter Sigil** [GW, HW]: Cost: 2 SE. 30 feet; Soul + Glyphcasting vs. DR to dispel glyph safely.

#### Blood Spells
- **Bleeding Curse** [SG]: Cost: 2 BP. 30 feet; DR 3 Will or, for 1 minute while you maintain concentration, any Physical damage the target takes also inflicts standard **Bleeding**.
- **Blood Mirror** [SG]: Cost: 2 BP. Reaction on damage; reflect half damage as Spectral damage to attacker.
- **Blood Puppet** [SG]: Cost: 2 BP. 30 feet; one **Bleeding** creature you can see. DR 2 Will save. On a failure, you control the target's movement, action, and bonus action on its next turn, but you cannot force it to take an obviously suicidal action. On a success, the spell fails. The Sangromancer's **Blood Puppet** class feature is the Signature Upgrade of this spell.
- **Blood Scent** [SG]: Cost: 1 BP. Bonus; self; detect **Bleeding** or Bloodied creatures within 60 feet for 10 minutes.
- **Crimson Bind** [SG]: Cost: 2 BP. 10-foot-radius sphere within 60 feet. Creatures of your choice in the area must make a DR 2 Blood save or Evasion save. On a failure, a creature is **Rooted** until the end of its next turn and then has its speed halved (**Slowed**) for a number of rounds equal to your Soul, to a maximum of 3 rounds total. On a success, its speed is halved (**Slowed**) until the end of its next turn. The Sangromancer's **Crimson Bind** class feature is the Signature Upgrade of this spell.
- **Crimson Mantle** [SG]: Cost: 2 BP. Bonus; self; +1 Armor 1 minute + attacker DR 2 Will or Disadvantage on their next attack.
- **Echo Wound** [SG]: Cost: 1 BP. Reaction on enemy healing; half healed as Physical damage + healer DR 2 Will or 1 Corruption.
- **Hemorrhage Halo** [SG]: Cost: 2 BP. Self; 10-foot radius; creatures of your choice in the area make a DR 2 Blood save or take 2 Spectral damage plus standard **Bleeding**.
- **Sangral Lance** [SG]: Cost: 2 BP. 60-foot line; spell attack, 5 Physical (Piercing) + DR 2 Blood or standard **Bleeding**; pierce second target on extra successes.
- **Vital Hook** [SG]: Cost: 2 BP. 30 feet; spell attack, 2 Spectral damage. On a hit, the target must succeed on a DR 2 Blood save or be pulled 10 feet toward you. While you maintain Concentration (up to 1 minute), the target is tethered — at the start of each of your turns you may pull the tethered target 10 feet toward you as a free effect (no additional save).

#### Ritual Spells
- **Ceremony of Sorrow** [WB]: Cost: 2 SE. 10 min; group mourning ritual; make a DR 2 Soul + Ritualism check. On a success, one participant of your choice removes 1 Corruption or recalls a suppressed memory. On a failure, the ritual provides emotional catharsis but no mechanical benefit.
- **Chrono-Ward Ritual** [GW, WB]: Cost: 2 SE. 1 minute; touch; you inscribe a ward that delays one Initiate-tier spell or effect you cast simultaneously. Define a time condition (e.g., "at dawn," "in one hour") or a simple event. The spell's effect is suspended within the ward and triggers automatically when the condition is met. The ward lasts for up to 24 hours.
- **Communion of Shadows** [SM, HW]: Cost: 2 SE. 10 min in shadow; whispers (yes/no questions) or +2 dice Stealth in dim light.
- **Edict of Suspension** [WB]: Cost: 2 SE. 30 ft; DR 3 Will save or the target loses Reactions and its movement is halved until the end of its next turn.
- **Life Channel** [SG, WB]: Cost: Lose between 1 HP and half your level in HP, chosen when you cast. Touch; one willing living creature. The target regains HP equal to twice the HP you sacrificed. This self-inflicted loss ignores temporary HP and cannot be reduced or redirected.
- **Litany of Focus** [GW, WB]: Cost: 1 SE. 1 min; touch; grant Advantage on Focus/detail checks for 1 hr.
- **Pillar Resonance** [WB]: Cost: 2 SE. 10 min at Pillar; vision/lore or +2 dice related skill check 1 hr.
- **Pillar Ward** [WB]: Cost: 2 SE. 15-ft radius in 30 ft; allies in the ward gain +1 die to Will saves, Soul saves, and Concentration checks while you maintain Concentration, up to 1 min.
- **Rite of Echoes** [WB]: Cost: 2 SE. 10 min at event site; +2 dice Social check related to echoes 1 hr.
- **Sanctify Blade** [WB]: Cost: 2 SE. 1 min; touch weapon; magical +2 dice vs. Undead/Corrupted or +1 protect ally 1 hr.
- **Soulweave** [SR, WB]: Cost: 2 SE. 30 ft; choose two creatures you can see, at least one of which must be willing. An unwilling target makes a DR 2 Will save. On a failure, the two creatures are linked while you maintain Concentration, up to 1 minute. Whenever one linked creature takes damage, half of that damage, rounded down, is also dealt to the other as Spectral damage. This secondary Spectral damage does not itself trigger additional Soulweave transfers. A creature can be part of only one Soulweave at a time.
- **Wraithwalk** [SR, SM]: Cost: 1 SE. Bonus Action; self. Until the end of your turn, you can move through creatures as difficult terrain, do not provoke opportunity attacks, and can pass through non-warded openings large enough for your body. You cannot end this movement inside another creature or solid object.
- **Unravel** [GW, WB, HW]: Cost: 2 SE. 30 ft; choose one ongoing spell effect (not Glyph, Concentration, or Instantaneous) currently affecting a target you can see. Make an opposed check: your Soul + Glyphcasting or Soul + Forbidden Knowledge vs. the original spell's DR. On a success, the effect ends. Master-tier effects are immune to Unravel unless cast at Master tier.

#### Forbidden Spells
- **Cursed Equation** [HW]: Cost: 2 SE and gain 1 Corruption, then roll 1 Corruption Die. 30 ft; DR 3 Will or suffer Disadvantage on Will and Soul checks and lose Reactions while you maintain Concentration, up to 3 rounds. The target may repeat the save at the end of each of their turns, ending the effect on a success.
- **Darkness** [SM, HW]: Cost: 2 SE. 60 ft; create a 20-ft-radius sphere of magical darkness for Concentration, up to 1 min. Creatures without a feature that explicitly lets them see through magical darkness are effectively **Blinded** while inside it. Shadowmancers who gain **Darkness** from their class learn this spell without it counting against their spells known.
- **Dread Chain** [SR, SM, HW]: Cost: 2 SE. 30 ft; spell attack. On a hit, the target takes 3 Spectral damage and must make a DR 2 Will save. On a failure, it is **Frightened** of you for up to 1 minute and its speed is halved (**Slowed**) while moving farther away from you. The target repeats the save at the end of each of its turns, ending the fear on a success.
- **Eyes Beyond** [SM, HW]: Cost: 2 SE and roll 1 Corruption Die. 1 min; self; for 10 minutes, you can see invisible creatures and objects, and can see normally in both natural and magical darkness as if in bright light. This does not grant Spectral sight or the ability to perceive creatures in a different realm. While active, you gain +1 die to Observation checks but suffer -1 die to Social checks.
- **Fleshwarp** [HW]: Cost: 2 SE. Touch; one creature. DR 2 Blood save. On a failure, choose one effect for up to 1 minute: the target suffers `-2 dice` on attacks and checks using one limb or appendage you choose (**Weakened**), or its speed is halved (**Slowed**). The target repeats the save at the end of each of its turns, ending the effect on a success.
- **Madness Surge** [HW]: Cost: 2 SE and roll 2 Corruption Dice. 30 ft; one creature you can see. DR 2 Will save. On a failure, the target is **Confused** until the end of its next turn. On a success, it is not **Confused** but takes `-1 die` on its next attack roll or check before the end of its next turn. The Hylden Warlock's **Madness Surge** class feature is the Signature Upgrade of this spell.
- **Omen Tether** [WB, HW]: Cost: 2 SE. 60 ft; DR 2 Will save or suffer Disadvantage on the next attack roll, spell attack, or skill check the target makes before the end of its next turn (Reaction to impose after the target declares its action but before it rolls).
- **Phase Snare** [SR, HW]: Cost: 2 SE. 30 ft; DR 3 Soul save or take 2 Spectral damage and be unable to teleport, shift realms (see [Chapter 11, Section 11.5.2](./11-realms-terrain-arcane-power.md#1152-crossing-the-veil)), or become **Incorporeal** for 3 rounds. The target may repeat the save at the end of each of its turns, ending the restriction on a success.
- **Riftstep** [SR, SM, HW]: Cost: 2 SE. Bonus; self; teleport 30 ft.
- **Soul Lock** [SR, HW]: Cost: 2 SE. 30 ft; one creature you can see. DR 3 Soul save. On a failure, the target cannot regain HP and cannot be returned to life until the end of its next turn. Temporary HP granted by external effects **does not count** as regaining HP and can still be applied while Soul Lock is active. On a success, the target is unaffected.
- **Spectral Lash** [SR, HW]: Cost: 2 SE. 15 ft. Choose one mode when cast: **lash** makes a spell attack against one creature and deals 5 Spectral damage on a hit, or **line** forces creatures in a 15-ft-long, 5-ft-wide line to make a DR 2 Evasion save, taking 3 Spectral damage on a failure or half as much on a success.
- **Unravel Mind** [HW]: Cost: 2 SE and gain 1 Corruption, then roll 1 Corruption Die. 30 ft; one creature you can see. DR 3 Will save. On a failure, while you maintain Concentration for up to 3 rounds, the target cannot cast spells, activate complex devices, or take any action that requires deliberate multi-step thought (**Incapacitated**). The target may still move, make basic attacks, and take simple object interactions. The target repeats the save at the end of each of its turns, ending the effect on a success.

### 5.10.3 Expert Tier (Levels 11–15)

#### Glyph Spells
- **Glyph Lockdown** [GW, WB]: Cost: 3 SE. Touch; triggers on entry; DR 3 Blood or **Rooted** in 10-ft field for 3 rounds.
- **Glyph of Collapse** [GW, HW]: Cost: 3 SE. 1 min; touch structure; triggers collapse; DR 3 Evasion or 6 Physical (Bludgeoning) + Restrained.
- **Glyph of Doom** [GW, HW]: Cost: 3 SE. Touch; triggers on damage; +3 damage to next 3 instances.
- **Glyph of Drowning** [GW]: Cost: 3 SE. Touch near water; triggers on entry; DR 3 Evasion or suffocate 1 min.
- **Glyph of Echo Memory** [GW, WB]: Cost: 3 SE. 10 min; touch; records 2 rounds of sensory data on any creature passing through the inscribed area.
- **Glyph of Gravity** [GW, WB, HW]: Cost: 3 SE. Touch; triggers on entry; DR 3 Blood or Prone + halved speed 1 round in 10-ft area.
- **Glyph of Reflection** [GW, WB, HW]: Cost: 3 SE. Touch; reflects Adept or lower spell (opposed Will save).
- **Glyph of Ruin** [GW, HW]: Cost: 3 SE. Touch; triggers on entry; creatures of your choice in the 15-ft aura have Disadvantage on saves and lose 5 max HP for 1 min. A creature in the aura may repeat the save at the end of each of its turns; on a success, it leaves the aura's effect and is immune to this casting for 1 minute.
- **Glyph of Silence Field** [GW, SM, WB]: Cost: 3 SE. Touch; 15-ft silence for concentration 10 min.

#### Blood Spells
- **Arterial Harvest** [SG]: Cost: 1 BP. Reaction on death within 30 ft; regain HP = level or 2 BP.
- **Blood Cyclone** [SG]: Cost: 3 BP. Self; 20-ft radius; creatures of your choice in the area take 5 Physical (Slashing) + DR 3 Blood or pushed/Prone.
- **Bloodlash Field** [SG]: Cost: 3 BP. 15-foot space in 60 ft; 3 Physical (Slashing) + DR 2 Evasion or pulled/Rooted for concentration 1 min.
- **Bloodrite Brand** [SG]: Cost: 3 BP. 1 minute; touch; permanently brand a willing or incapacitated creature with a mark of your blood. Choose one effect: **Fealty** (you always know the direction and general condition of the branded creature), **Outcast** (the creature suffers -1 die to all social checks with those who recognize the brand), or **Suffering** (you can spend 1 BP as an Action to deal 1d6 Spectral damage to the creature, regardless of distance, provided you are on the same realm). A creature can have only one Bloodrite Brand; it can be removed only by a Master-tier purification ritual.
- **Bone Siphon** [SG]: Cost: 3 BP. Touch; DR 3 Blood or 5 Spectral damage + brittle bones (+2 Bludgeoning/Slashing dmg) 1 min.
- **Crimson Shackle** [SG]: Cost: 3 BP. 30 ft; spell attack + DR 3 Fury to break Restrained for concentration 1 min.
- **Crimson Surge** [SG]: Cost: 3 BP (-2 HP to self). 15-ft cone; creatures of your choice in the area take 6 Physical (Bludgeoning) + DR 3 Blood or Prone.
- **Curse of Ash** [SG]: Cost: 2 BP. 30 ft; DR 3 Blood or no healing + 2 Spectral damage on heal attempts 3 rounds.
- **Heartburst** [SG]: Cost: 4 BP. 30 ft; DR 3 Blood. On a failure, a target below 20 HP dies; otherwise it takes 8 Spectral damage. On a success, the target takes 4 Spectral damage instead. Once per long rest.
- **Viscera Torrent** [SG]: Cost: 3 BP (-2 HP to self). 30-ft cone; creatures of your choice in the area take 4 Spectral damage + DR 3 Blood or **Poisoned** 1 min + -2 Stealth. The target may repeat the Blood save at the end of each of its turns, ending the Poisoned condition on a success.

#### Ritual Spells
- **Beckon of the Deep** [HW]: Cost: 4 SE. 30 minutes near a large body of water; you summon an **Abyssal Devourer** (TV 4 Spectral Beast) from the depths of the Abyss. Make a Soul + Ritualism check (DR 3). On a success, the creature manifests for 1 hour and follows your verbal commands. On a failure, it manifests but is hostile to all creatures, including you. The creature returns to the Abyss if reduced to 0 HP or when the duration ends.
- **Hauntwalker** [SR, SM, WB, HW]: Cost: 3 SE. 10 minutes; summon minor spirit for scouting/distraction/info.
- **Judgment Sigil** [WB]: Cost: 3 SE. 20-foot radius in 60 feet; choose one mode when cast for Concentration, up to 3 rounds. **Protection:** allies in the area gain +1 die to Will saves, Soul saves, and Concentration checks. **Condemnation:** enemies in the area suffer -1 die on attack rolls.
- **Memory Tomb** [WB, HW]: Cost: 4 SE. 1 hour; touch; store memories from willing/corpse in repository.
- **Oracle's Insight** [WB, HW]: Cost: 3 SE. 10 minutes; self; 3 questions about problem (DR 2 Soul + Insight for clarity).
- **Past's Reflection Rite** [WB]: Cost: 3 SE. 10 minutes; self; vision of alternative outcomes + 2 questions.
- **Ritual of Awakening** [GW, HW]: Cost: 4 SE. 1 hour; touch; awaken item, construct, or spirit (DR 3 Soul + relevant skill).
- **Sanctify Ground** [WB]: Cost: 4 SE. 1 hour; 30-foot radius; Undead and Corrupted creatures that enter or start their turn in the area take 3 Radiant damage and suffer -1 die to all rolls while inside. Allies in the area gain Resistance to Entropic damage and +1 die to all saves. Lasts 24 hours.
- **Soul Anchor** [SR, WB]: Cost: 3 SE. 10 minutes; touch; prevent death (to 1 HP) + +2 vs. Spectral attacks until long rest.
- **Spectral Crossing** [SR, SM]: Cost: 3 SE. Self or one willing creature within 10 feet; for 3 rounds, the target can move through creatures and non-warded solid objects as difficult terrain (see [Chapter 11, Section 11.5](./11-realms-terrain-arcane-power.md#115-the-spectral-realm-full-rules) for rules) and does not provoke opportunity attacks.
- **Spiritforge Circle** [GW]: Cost: 3 SE. 1 hour; 10-foot circle; +2 dice Craft for magic items 8 hours.
- **Temporal Delay** [GW, WB]: Cost: 3 SE. 1 minute; touch; delay activation/process by up to Will rounds.

#### Forbidden Spells
- **Cacophonic Flare** [HW]: Cost: 3 SE and gain 1 Corruption, then roll 2 Corruption Dice. Self; 20-foot radius; creatures of your choice in the area make a DR 3 Will save or the target is **Stunned** until the end of its next turn, then **Deafened** and **Blinded** for 1 minute. While Deafened and Blinded by this spell, the target also suffers -1 die on Will saves. The target may repeat the save at the end of each of its turns, ending the Deafened and Blinded conditions on a success (the Stun ends normally).
- **Dark Reflection** [SM, HW]: Cost: 3 SE. Self; summon a **Dark Reflection** of yourself in an unoccupied space within 30 ft. The reflection has your attributes and half your current HP, deals Spectral damage with its melee attacks (using your Weapon Damage Scaling), and acts on your initiative. As a Bonus Action, you can teleport to swap places with the reflection, or command it to use **Menace** (all adjacent enemies must succeed on a DR 3 Will save or be **Frightened** of it until the end of their next turn). The reflection lasts for 1 minute or until destroyed.
- **Descent of Teeth** [SM, HW]: Cost: 3 SE. 10-foot radius in 60 feet; creatures of your choice in the area take 5 Spectral damage + DR 3 Evasion or **Bleeding** (2 damage, 2 rounds).
- **Fatebind Curse** [WB, HW]: Cost: 4 SE and gain 1 Corruption, then roll 2 Corruption Dice. 10 minutes; choose one creature you can see and an object it owns. You curse the creature, binding its fate to the object. Once per long rest, when the target makes a save or attack roll, you can declare its fate: the target either auto-fails the save or the attack roll against it becomes an automatic **Critical Hit**. This curse lasts until removed by a purification rite or the object is destroyed.
- **Night Sovereign's Path** [SM]: Cost: 3 SE. Bonus; teleport between shadows up to 60 feet. Until the start of your next turn, you are **Invisible** unless you attack, cast a damaging spell, or leave dim light or darkness.
- **Oblivion Whisper** [SM, HW]: Cost: 3 SE and gain 1 Corruption, then roll 1 Corruption Die. Touch/15 feet; DR 3 Will or forget spell/clue 24 hours.
- **Rift Pulse** [SR, HW]: Cost: 3 SE. 20-foot line; 5 Entropic (Void) damage + DR 3 Blood or pushed.
- **Rotmind Rift** [HW]: Cost: 3 SE and gain 1 Corruption, then roll 2 Corruption Dice. 30 feet; DR 3 Will or gain 1 Corruption at the start of each turn + random madness effect 1 minute. This spell cannot cause a target to gain more than 3 Corruption Levels total, regardless of duration.
- **Mind Spike** [SR, HW]: Cost: 3 SE and gain 1 Corruption, then roll 1 Corruption Die. 30 feet; 4 Spectral damage + DR 3 Will save or roll 1 Corruption Die and suffer **paranoia** for 1 round: the target treats all creatures within 30 feet (including allies) as potential threats, suffering Disadvantage on all social checks and Reactions. If an ally of the target attempts to touch them, the target may immediately make one basic attack against that ally as a free Reaction.
- **Soul Rend** [SR, HW]: Cost: 3 SE. 30 feet; spell attack, 4 Spectral damage. The target also loses 1 SE (**Soul Drain**); if it has no SE, it instead suffers -1 die on Will saves and Soul saves until the end of its next turn. If you choose to roll 1 Corruption Die when you cast this spell, increase the damage to 6.
- **Soul Fracture** [SR, HW]: Cost: 3 SE and gain 1 Corruption, then roll 1 Corruption Die. 30 feet; DR 3 Soul save or for up to 1 minute: all SE costs the target pays are increased by 1, and it suffers -2 dice on Will and Soul checks. The target may repeat the Soul save at the end of each of its turns, ending the effect on a success. If the target is killed while this spell is active, resurrection requires an additional DR 1 Soul ritual beyond the normal cost.
- **Starving Veil** [SR, SM, HW]: Cost: 3 SE. Self; 15-foot aura; creatures of your choice in the aura take 2 Spectral damage at the start of each turn, and you heal 1 HP per creature damaged this way (max 2 HP per turn), for concentration 1 minute.

### 5.10.4 Master Tier (Levels 16–20)

#### Glyph Spells
- **Eternal Glyph Lock** [GW, WB]: Cost: 5 SE. 1 hr; touch; permanent magical lock (DR 5 to breach) + defensive ward.
- **Glyph Nexus Gate** [GW, WB, HW]: Cost: 5 SE. 1 hr; link two locations for transport 1 week.
- **Glyph of Judgment** [GW, WB]: Cost: 4 SE. Touch; triggers on aggression (any attack roll, spell attack, or hostile ability targeting a creature within 10 ft of the glyph); DR 3 Will or reflect half damage as Spectral damage 1 min.
- **Glyph of Obliteration** [GW, HW]: Cost: 5 SE. Touch; triggers on entry; 8 Force damage + push in 20-ft radius (DR 4 Evasion halves).
- **Glyph of Time Sever** [GW, WB]: Cost: 5 SE. Touch; triggers on entry; DR 4 Will or limited actions 3 rounds in 15-ft area. A target with limited actions may take only one Action or one Bonus Action on each of its turns (not both), and cannot take Reactions. Movement is unaffected.
- **Glyph of Unmaking** [GW, HW]: Cost: 5 SE. Touch; command trigger (the caster speaks a chosen command word within 60 ft as a Free Action); dispel Expert or lower in 30-ft radius (opposed for Master).
- **Glyph of Unraveling** [GW, HW]: Cost: 4 SE. Touch; triggers on spell; DR 3 Will or fail + 4 Spectral damage/backlash.
- **Glyph Vortex** [GW, SR, HW]: Cost: 4 SE. Touch; triggers on approach (within 10 ft); pull + 4 Spectral damage in 15-ft area 3 rounds (DR 3 Blood).
- **Nexus Glyph** [GW]: Cost: 4 SE. Touch; store/activate 3 Initiate/Adept glyphs on one trigger.
- **Sanctum Glyph** [GW, WB]: Cost: 5 SE. 10 min; 30x30 ft area; +1 DV/saves, anti-scrying/teleport 24 hrs.

#### Blood Spells
- **Blood Oblivion** [SG]: Cost: 5 BP and gain 1 Corruption, then roll 2 Corruption Dice. Touch; DR 4 Will or erase memories/skills permanently. Once per long rest.
- **Blood Resurrection** [SG]: Cost: 5 BP (-1 permanent max HP). 10 min; touch corpse; revive with half HP (up to 1 day dead).
- **Crimson Godseed** [SG]: Cost: 5 BP (-3 permanent max HP). 1 hr casting; touch; choose one effect — **Vampiric Transformation** (the subject gains the physical traits of one Vampire lineage subtype for 24 hours, decided by the caster), or **Blood Ascension** (+1 to one physical attribute — Blood, Fury, or Shadow — for **24 hours**).
- **Crimson Reaping** [SG]: Cost: 5 BP. Self; 15-ft radius; creatures of your choice in the area take 6 Spectral damage plus standard Bleeding (DR 3 Evasion halves); execute creatures below 25% HP.
- **Hemodominate** [SG]: Cost: 5 BP. 30 ft Bleeding; DR 3 Will or full control for up to 1 minute. The target may repeat the Will save at the end of each of its turns, ending the control on a success. While you maintain this control, you cannot cast other Concentration spells. While a target is under Hemodominate's control, casting Blood Puppet on the same target has no additional effect. Once per long rest. The Sangromancer's **Hemodominate** class feature is the Signature Upgrade of this spell.
- **Sanguine Eclipse** [SG]: Cost: 5 BP. 30-ft radius in 120 ft; obscured + 3 Spectral damage + exhaustion (**1 Exhaustion stack**, DR 3 Blood save negates) + halved healing 1 min.
- **Sanguine Swarm** [SG]: Cost: 4 BP (-5 HP). 30 ft; summon a **Sanguine Swarm** in a space within 30 ft. The swarm occupies a 10-foot cube, has 10 HP, a movement speed of 20 ft, and acts on your initiative. Each creature that starts its turn in the swarm or enters it must make a DR 4 Evasion save, taking 5 Spectral damage on a failure (half on success) and becoming **Frightened** of you until the end of its next turn on a failure. The swarm lasts while you maintain Concentration, up to 1 minute.
- **Throne of Veins** [SG]: Cost: 4 BP. Self; you form a semi-organic throne of hardened blood. For 10 minutes, you gain +2 Armor and Resistance to Physical damage. As a Bonus Action on each of your turns, you can command blood-tendrils to strike one creature within 20 ft: make a spell attack; on a hit, the target takes 3 Physical damage and must succeed on a DR 4 Blood save or be pulled 10 ft toward you and knocked **Prone**. Additionally, the DR to save against your Blood spells increases by +1 while you occupy the throne.
- **Vital Dominion** [SG]: Cost: 5 BP. Self; 30-ft aura; while you maintain Concentration, up to 1 minute, choose one effect at the start of each of your turns to apply to all enemies in the aura: **Siphon** (enemies take 2 Spectral damage and you heal 1 HP per enemy damaged), **Deaccelerate** (enemies are **Slowed** until the start of your next turn), or **Puppet** (enemies must succeed on a DR 4 Will save or use their Reaction to make one basic melee attack against a creature of your choice).
- **Wound Reversal** [SG]: Cost: 4 BP. 30 ft; choose two creatures you can see, at least one of which must be willing. Each unwilling creature must make a DR 3 Blood save; on a success, it is unaffected by the swap. On a failure, the HP totals of the two creatures are exchanged. HP gained this way cannot exceed a creature's maximum HP — excess is lost. This swap is not considered healing and cannot be blocked by effects that prevent HP gain. Once per long rest.

#### Ritual Spells
- **Binding of the Starborn** [WB]: Cost: 5 SE. 1 hr under open sky at a site of ancient power; you call upon a **Bound Guardian** — an ancient pre-Vampire spirit once tasked with protecting a sacred place or object. The spirit manifests to perform one task within its domain (DR 4 Soul + Ritualism). It is not benevolent; it is bound. It will fulfill the letter of your request but resents the summons. It departs when the task is complete or at dawn, whichever comes first.
- **Chrono Collapse** [WB, HW]: Cost: 5 SE. 1 min; 20-ft radius in 120 ft; DR 4 Will save or limited actions 3 rounds. A target with limited actions may take only one Action or one Bonus Action on each of its turns (not both), and cannot take Reactions. Movement is unaffected.
- **Curse of the Nine Moons** [HW]: Cost: 5 SE. 1 hour under the night sky; choose one creature you have a blood sample or personal possession of. The target must succeed on a DR 4 Will save or be afflicted by a shifting curse until removed by a Master-tier purification rite. Each night at midnight, the curse changes: **Madness** (target is **Confused** during combat), **Transformation** (target takes on a monstrous, non-functional appearance and suffers -2 dice to all social checks), or **Withering** (target's maximum HP is reduced by 2 each day the curse persists, to a minimum of 1).
- **Dirge of Ruin** [WB, HW]: Cost: 5 SE. 10 min; 60-ft radius; enemies in the area take 3 Spectral damage + -1 die to all actions (**DR 4** Will save + Concentration to maintain).
- **Eternal Sigil** [GW, WB]: Cost: 5 SE. 1 hour; touch; you inscribe a permanent sigil on a structure or doorway. Choose one effect: **Unbreachable** (the surface cannot be damaged by mundane means and its DR to breach with magic is 5), **Dimensional Lock** (teleportation and realm-shifting through the sigil fail automatically), or **Elemental Bane** (choose one damage type; creatures in a 10-ft radius have Resistance to that type, or if it is a hostile sigil, they take 2 damage of that type when they enter the area). A sigil can be removed only by a Master-tier Glyphwright using Glyph of Unmaking.
- **Invocation of Chains** [WB, HW]: Cost: 4 SE. 20-ft radius in 60 ft; DR 4 Evasion save or become Restrained while you maintain Concentration, up to 3 rounds. A restrained creature may repeat the save at the end of each of its turns, ending the effect on a success. Attacks and spell attacks that cross the boundary of the chained area have Disadvantage.
- **Last Rite of Balance** [WB]: Cost: 5 SE (and the caster immediately gains -2 **Exhaustion** stacks, which cannot be reduced). 1 hr; cleanse a 1-mile area of Corruption. Make a Soul + Ritualism check vs. DR 4 (lightly corrupted area or Corruption Level 1–5) or DR 5 (heavily corrupted area or Corruption Level 6+). On a success, remove 1d3 Corruption Levels from the area and purify mundane Corruption effects within it. On a failure, the Exhaustion cost is still paid and the area is cleansed of only superficial Corruption.
- **Realmshift** [SR, WB, HW]: Cost: 5 SE. 10 min; 60-ft overlay Spectral/other plane (DR 3 Soul + Ritualism per min). This spell overlays the Spectral Realm across an area rather than shifting individual creatures. Glyph of Anchoring glyphs within the area do not trigger against Realmshift's overlay — it is not a creature shifting realms. However, any creature who attempts to voluntarily cross the veil within the Realmshift area must still contend with active Anchoring glyphs. See [Chapter 11, Section 11.5](./11-realms-terrain-arcane-power.md#115-the-spectral-realm-full-rules) for rules on overlapping realms.
- **Ritual of Eclipse** [SM, WB, HW]: Cost: 5 SE. 10 minutes; you call forth a localized eclipse in a 1-mile radius centered on your location, lasting 1 hour. The area is plunged into Dim Light. Creatures that gain bonuses or regain HP from sunlight (such as certain Vampires or Mortals) lose those benefits and suffer -1 die to all rolls while in the eclipse. Spells with the [SM] tag or that deal Shadow/Spectral damage gain +1 die to damage rolls while cast within the area.
- **Soulforge Resurrection** [SG, WB, HW]: Cost: 5 SE or 5 BP (choose based on your primary casting resource; a Sangromancer pays 5 BP, all other classes pay 5 SE). 8 hrs; revive with full faculties (DR 4 Soul + Ritualism).

#### Forbidden Spells
- **Annihilation Pulse** [HW]: Cost: 5 SE (-5 HP). Self; all other creatures in a 20-ft radius make a DR 4 Evasion save, taking 8 Entropic (Void) damage on a failure or 4 on a success.
- **Astral Shackle** [SR, HW]: Cost: 4 SE. 60 ft; DR 4 Soul save or become **Paralyzed** while you maintain Concentration, up to 3 rounds. The target repeats the save at the end of each of its turns, ending the **Paralyzed** condition on a success. If the target fails this save three times before the spell ends, it is also banished to an adjacent realm (see [Chapter 11, §11.5.5](./11-realms-terrain-arcane-power.md#1155-forced-realm-shifts)) until the end of its next turn. This banishment is controlled — the target does not suffer the standard forced-shift shock damage from §11.5.5. Legendary creatures are immune to this banishment rider.
- **Black Spiral** [HW]: Cost: 5 SE and gain 1 Corruption, then roll 2 Corruption Dice. 20-ft radius in 60 ft; creatures in the area take 5 Entropic (Void) damage and are pulled up to 10 ft toward the center. They must then make a DR 4 Soul save or become **Restrained** while you maintain Concentration, up to 3 rounds. A **Restrained** creature may repeat the save at the end of each of its turns, ending the effect on a success.
- **Corruption Crown** [SM, HW]: Cost: 4 SE and gain 1 Corruption, then roll 1 Corruption Die. Self; +2 dice Intimidation/Deception + **Charmed** on damage (DR 3 Will save) + dread aura 10 min. While this spell is active, you emit a **Dread Aura** in a 10-foot radius. Creatures of your choice in the aura that start their turn there must succeed on a DR 2 Will save or suffer Disadvantage on attack rolls against you until the start of their next turn.
- **Mind Rupture** [HW]: Cost: 4 SE and gain 1 Corruption, then roll 2 Corruption Dice. 30 ft; DR 3 Will save or madness until cured (once/long rest). The Hylden Warlock's **Mind Rupture** class feature is the Signature Upgrade of this spell.
- **Reaver Unleashed** [SR, HW]: Cost: 4 SE and gain 1 Corruption, then roll 2 Corruption Dice. Choose one area when you cast: a **60-foot cone** or a **30-foot radius burst** centered on yourself; 7 Spectral damage (DR 3 Soul save halves). For 1 minute, you gain the **Reaver Boost**: your melee attacks deal +3 bonus Spectral damage and you gain Resistance to all damage except Radiant. The Soul Reaver's **Reaver Unleashed** class feature is the Signature Upgrade of this spell.
- **Soul Storm** [SR, HW]: Cost: 5 SE. 30-ft radius in 120 ft; 6 Spectral damage + **Frightened** (DR 3 Will) + obscured 3 rounds. *(crosses realms)* The Soul Reaver's **Soul Storm** class feature is the Signature Upgrade of this spell.
- **The God’s Rebuttal** [WB, HW]: Cost: 5 SE and gain 1 Corruption, then roll 2 Corruption Dice. Reaction: Trigger — a creature within 60 feet uses a **Radiant** damage ability, casts a Ritual or Warden of Balance spell, or invokes a holy or divine effect. Roll an opposed check (your Soul + Forbidden Knowledge vs. the triggering roll or effect's DR). On a success, the effect is partially countered (halve its damage or duration). Regardless of success, the triggering creature takes 4 Entropic (Void) damage.
- **The Whispering Gate** [HW]: Cost: 5 SE and gain 1 Corruption, then roll 2 Corruption Dice. 1 hr; open gate to hostile plane (DR 4 Soul + Forbidden Knowledge).
- **Void Chain** [SR, HW]: Cost: 4 SE. 60 ft; spell attack, 5 Entropic (Void) + DR 4 Blood or **Restrained**/pull + no teleport.
ull + no teleport.
