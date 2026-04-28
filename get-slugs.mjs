// VitePress slugify: strips special chars, replaces spaces with hyphens, lowercases
// Source: @mdit-vue/shared slugify
const slugify = (str) =>
  str
    .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '')
    .replace(/\s/g, '-')
    .toLowerCase();

const headings = [
  // 00-core-mechanics
  "The Six Attributes",
  "The Dice Pool System",
  "Difficulty Rating (DR) vs Defense Value (DV)",
  "Advantage and Disadvantage",
  "Resource Pools",
  "Defense and Armor",
  // 01-character-creation
  "1.1 Overview",
  "1.2 Step 1: Concept & Background",
  "1.3 Step 2: Choose a Race",
  "1.4 Step 3: Choose a Class",
  "1.5 Step 4: Assign Attributes",
  "1.6 Step 5: Assign Skills",
  "1.7 Step 6: Choose Starting Gear",
  "1.9 Step 7: Pick Perks",
  "1.10 Step 8: Corruption Starting State",
  // 02-lineages-and-race
  "2.1 Overview",
  "2.2 Vampires",
  "2.3 Wraiths",
  "2.4 Hylden-Blooded",
  "2.5 Humans",
  "2.6 Revenants",
  "2.7 Unbound",
  // 03-classes
  "3.1 Class Overview",
  "3.2 Class Progression",
  "3.3.1 Blood Knight",
  "3.3.2 Soul Reaver",
  "3.3.3 Shadowmancer",
  "3.3.4 Sangromancer",
  "3.3.5 Glyphwright",
  "3.3.6 Dreadblade",
  "3.3.7 Warden of Balance",
  "3.3.8 Hylden Warlock",
  // 04-perks
  "4.1 Perk Progression",
  "4.2 Universal Perks",
  "4.3 Corrupted Perks",
  // 05-spellcasting-and-magic
  "5.1 Spell Categories and Tiers",
  "5.2 Spellcasting Basics",
  "5.3 The Spellcasting Process",
  "5.4 Advanced Spell Mechanics",
  "5.10 Spell Compendium",
  // 06-skills
  "6.1 Skill Check Mechanics",
  "6.2 The Consolidated Skill List",
  "6.3 Pushing and Stunts",
  "6.4 Skill Point Economy",
  // 07-equipment
  "7.1 Weapons of Nosgoth",
  "7.3 Armor of Nosgoth",
  "7.4 Lineage and Cultural Gear",
  "7.5 Acquisition and Crafting",
  // 08-corruption
  "8.1 Corruption Level and Thresholds",
  "8.3 Rolling Corruption Dice",
  "8.4 Corrupted Perks",
  "8.6 Paths to Purification",
  // 09-combat
  "9.1 Combat Overview",
  "9.2 Initiative",
  "9.3 Actions: Attacking",
  "9.4 Defense and Armor",
  "9.7 Damage Types and Effects",
  "9.10 Special Actions",
  "9.13 Combat Example",
  // 10-dice-system
  "10.1 Dice Success System",
  "10.2 Extra Successes: Enhancing Actions",
  "10.3 Advantage and Disadvantage",
  // 11-realms
  "11.1 Realm Affinity",
  "11.2 Terrain Types",
  "11.3 Energy Foci",
  // 12-glossary
  "12.1 Core Resolution",
  "12.2 Attributes and Resources",
  "12.3 Combat",
  "12.7 Spellcasting",
];

headings.forEach(h => console.log(`"${h}" => #${slugify(h)}`));
