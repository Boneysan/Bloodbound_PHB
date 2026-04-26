---
title: Dice System
description: A focused reference for the d6 success system powering all actions in Bloodbound RPG.
---
# Chapter 10: Dice System

## At a glance
- 10.1 Dice Success System
- 10.2 Extra Successes: Enhancing Actions
- 10.3 Advantage and Disadvantage
- 10.4 Combat System
   - 10.4.1 Initiative
   - 10.4.2 Attacks
   - 10.4.3 Defense and Armor
   - 10.4.4 Damage and Health
   - 10.4.5 Special Actions
   - 10.4.6 Critical Success and Failure
   - 10.4.7 Environmental Combat
   - 10.4.8 Reactions
- 10.5 Closing Note

Note on terminology: DV is for attacks, DR is for checks and saves, and Armor is flat mitigation. Force, Soul, and Spectral interactions are detailed in Chapters 5 (Magic), 8 (Corruption), and 9 (Combat).

## 10.1 Dice Success System

The Legacy of Kain: Bloodbound RPG uses a **D6-based success system**. This mechanic drives all core actions, from combat to exploration, and is designed to emphasize risk, tension, and the dramatic weight of every roll.

### 10.1.1 Rolling Dice

* Players roll a **pool of D6s** equal to **Attribute + Skill**.
* **Attack rolls** also add a **Combat Bonus**: +1 die at levels 5, 10, 15, and 20 (cumulative, max +4). This does not apply to skill checks.
* **5 or 6 = 1 Success.**
* The number of successes required for any **non-combat task** is determined by its **Difficulty Rating (DR)**. This is a number set by the Game Master, typically from 1 to 4, based on the challenge's complexity.

| DR | Challenge Level | Required Successes |
| -- | --------------- | ------------------ |
| 0  | Trivial         | 0 (auto-success)   |
| 1  | Simple          | 1 success          |
| 2  | Standard        | 2 successes        |
| 3  | Challenging     | 3 successes        |
| 4  | Difficult       | 4 successes        |
| 5+ | Extreme/Legendary | 5+ successes     |

**Resolution:**

The outcome of a roll is determined by how many successes you achieve compared to the target (the **Difficulty Rating** for checks/saves or the **Defense Value** for attacks).

| Successes vs. Target | Outcome | Result |
| :--- | :--- | :--- |
| **Below Target** | **Failure** | The action fails; the GM may introduce a complication or consequence. |
| **Meets Target** | **Marginal** | The action barely succeeds, often with a cost, caveat, or unforeseen complication. |
| **+1 Above Target** | **Standard** | The action succeeds cleanly as intended. |
| **+2 Above Target** | **Exceptional** | An outstanding result. This is a **Critical Success** or **Critical Hit** (see Section 10.4.6). |

### 10.1.2 Rolling Zero Dice

In some cases, your total dice pool (**Attribute + Skill**) may be zero.

*   **Automatic Failure:** If your pool is 0, you automatically fail the action. You do not roll any dice.
*   **Attempting the Action:** To attempt an action with a pool of 0, you must find a way to add dice to the pool. This can be done by:
    *   **Combat Bonus:** Level 5+ characters add their Combat Bonus dice to attack rolls even if their Attribute + Skill is 0.
    *   **Assistance:** An ally may use the **Help** action to grant you +1 die or Advantage.
    *   **Pushing the Roll:** You may choose to **Push the roll** (see Section 10.4.5), which allows you to roll 1, 2, or 3 **Corruption Dice** even if your base pool is 0. If you do this, you still risk gaining Corruption, but you have a chance to succeed.

---

## 10.2 Extra Successes: Enhancing Actions

If a player rolls more successes than required, they may choose to **enhance their outcome**:

**In Combat:**

* +1 damage per extra success (maximum +3, or up to the weapon's listed cap; whichever is lower).
* Inflict a status effect based on the attack's damage type (see below).
* Strike multiple targets (GM discretion).
* Ignore 1 point of armor per extra success (maximum equal to the weapon's base damage).

**Status Effects by Damage Type:**

Spending extra successes allows you to apply a status effect based on damage type. Use [Chapter 12: Glossary, Section 12.4](./12-glossary.md) for the canonical damage-category table, condition names, durations, and definitions. This chapter does not create separate condition rules.

**Outside Combat:**

* Perform faster, quieter, or with added flair.
* Gain a narrative advantage (e.g., spotting details, creating openings).
* Create a stunt (leap to higher ground, grab an item mid-battle, etc.).

---

## 10.3 Advantage and Disadvantage

Situational factors can grant you **Advantage** or impose **Disadvantage** on a roll. This system gives you a second chance—either to turn failure into success, or to have your success snatched away by fate.

**Advantage (Re-roll Failures)**

When you have Advantage, roll your dice pool once. After the roll, you may **pick up any dice that failed (showing 4 or less) and re-roll them**. Add any new successes to your initial total. This gives you a chance to improve a mediocre outcome.

**Disadvantage (Re-roll Half Successes)**

When you have Disadvantage, roll your dice pool once. After the roll, you must **pick up half of your successes (round up) and re-roll them**. Only those re-rolled dice that still show 5 or 6 count as successes; the rest become failures. Successes not selected for re-rolling are kept. This makes Disadvantage punishing without making success nearly impossible.

**Canceling**

If you have both Advantage and Disadvantage from different sources, they cancel each other out, and you simply roll your dice pool once as normal.

**Narrative Adjudication:**
The GM decides how extra successes manifest, but players are encouraged to propose creative outcomes.

*Examples:*

* 4 successes on a DR 2 Stealth check: not only succeed, but also disable a trap silently.
* 3 successes on a DR 1 attack: cleave through a shield or decapitate the target.

---

## 10.4 Combat System

Combat in Nosgoth reflects the brutal, tactical, and often supernatural struggle of its denizens. Every exchange carries weight—each strike a test of willpower, blood, and fate.

### 10.4.1 Initiative

* Roll D6s equal to **Shadow + Tactics** (or **Shadow + Concentration**).
* Highest number of successes acts first.
* Ties broken by Shadow stat, then GM discretion.

---

### 10.4.2 Attacks

1. Roll a pool equal to **Attribute + Weapon Mastery**.
2. Each 5–6 = 1 success.
3. Compare successes to target’s **Defense Value (DV)**.

   * DV = number of successes needed to hit.
4. Excess successes = bonus damage or special effects.

*Example:* Roll = 6, 5, 3, 2 → 2 successes.
Target DV = 1 → hit. One excess success remains (usable for bonus damage or an effect).

---

### 10.4.3 Defense and Armor

* **DV:** Base = 1 + higher of (Shadow or Will) + modifiers from worn armor and perks. Static DV from attributes, armor, and perks is capped at 6; cover and reactions can raise effective DV higher.
* **Armor:** Flat reduction of damage (e.g., -2 damage).
* **Active Defense:** Characters may use reactions such as an Evasion reaction or a Weapon Mastery parry.

---

### 10.4.4 Damage and Health

* **Weapons/abilities** define base damage.
* **Health Points (HP):** Track physical harm.
* 0 HP → unconscious or dying.
* Certain attacks may cause **Wounds or Corruption**.

---

### 10.4.5 Special Actions

* **Spellcasting:** Roll **Soul + Glyphcasting**.
* **Grappling:** Use Unarmed Combat to restrain/disarm.
* **Shifting Realms:** Abilities may allow shifting between Spectral/Material realms mid-combat.
* **Pushes:** After failing a roll, a player may add 1–3 **Corruption Dice** (d6). Each **5–6** adds a success; each **1** increases the character's Corruption Score by 1. See Chapter 8: Corruption for full mechanics.

---

### 10.4.6 Critical Success and Failure

Exceptional outcomes, for better or worse, can dramatically alter a situation.

**Critical Success (Skill Checks)**

When making a non-combat skill check against a DR, **exceeding the DR by 2 or more successes** results in a Critical Success. This doesn't just mean you succeed, but that you do so with extraordinary results, granting a significant narrative benefit.

*   *Examples:* A successful *History* roll might also reveal a hidden secret. A *Persuasion* check might turn a hostile guard into a long-term ally. A *Stealth* check might allow you to map out the entire area.

**Critical Hit (Combat)**

In combat, a Critical Hit is triggered when you **exceed the target's DV by 2 or more successes**. This reflects dominating advantage over a foe — the wider the margin of success, the more devastating the strike.

A Critical Hit allows: bonus damage (+1 per extra success, up to the +3 cap), ignoring Armor, or applying a potent status effect from the damage type table above. See Chapter 9: Combat for the full list of Critical Hit options.

**Pushing a Roll**

When you fail a roll, you may be able to push it by drawing on your inner Corruption. See Chapter 8: Corruption for the full mechanics.

---

### 10.4.7 Environmental Combat

* The battlefield may feature **Spectral/Material terrain, glyph traps, cursed objects**.
* Players can **interact with or destroy terrain** using Strength or Craft.

---

### 10.4.8 Reactions

Each character gets **1 Reaction per round**.

This section is a shorthand summary; Chapter 9: Combat is the canonical source for exact reaction timing and edge cases.

**Trigger Examples:**

* Being targeted by an attack.
* An enemy moving within reach.
* A spell being cast at the character.

**Common Activation Types:**

*   **Action:** The primary task of your turn (Attack, Cast, Dash).
*   **Bonus Action:** A swift secondary task granted by specific features. You get only one per turn.
*   **Reaction:** A response to a trigger, usable once per round.
*   **Movement:** An ability that replaces or modifies your standard movement. If an ability's activation is listed as "Movement," it consumes your movement for the turn unless otherwise specified.
*   **Passive:** Always active; requires no action to use.

**Reaction Roll Outcomes:**

| Successes | Effect                                      |
| --------- | ------------------------------------------- |
| 1         | Reduce damage by 1                          |
| 2         | Reduce damage by 2 OR negate status         |
| 3+        | Halve damage or fully evade (GM discretion) |

---

## 10.5 Closing Note

Combat in Nosgoth is **visceral and cinematic**, blending the brutality of battle with the mysticism of the realms. Success is never binary—extra successes create opportunities for stunts, narrative flourishes, and dramatic escalation. Power always comes with a price, and the dice ensure that every moment hangs in the balance.


