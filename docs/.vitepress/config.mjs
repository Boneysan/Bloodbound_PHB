import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/Bloodbound_PHB/',
  title: "Legacy of Kain: Bloodbound RPG",
  description: "Player's Handbook — The tabletop RPG set in the world of Nosgoth",
  lang: 'en-US',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#8B0000' }],
  ],

  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'Bloodbound RPG',

    nav: [
      { text: 'Home', link: '/' },
      { text: "Player's Handbook", link: '/phb/00-core-mechanics' },
    ],

    sidebar: {
      '/phb/': [
        {
          text: "Player's Handbook",
          items: [
            { text: 'Introduction', link: '/phb/' },
            {
              text: 'Chapter 0 — Core Mechanics',
              link: '/phb/00-core-mechanics',
              collapsed: false,
              items: [
                { text: 'The Six Attributes', link: '/phb/00-core-mechanics#the-six-attributes' },
                { text: 'The Dice Pool System', link: '/phb/00-core-mechanics#the-dice-pool-system' },
                { text: 'Difficulty Rating vs Defense Value', link: '/phb/00-core-mechanics#difficulty-rating-dr-vs-defense-value-dv' },
                { text: 'Advantage & Disadvantage', link: '/phb/00-core-mechanics#advantage-and-disadvantage' },
                { text: 'Resource Pools', link: '/phb/00-core-mechanics#resource-pools' },
                { text: 'Defense and Armor', link: '/phb/00-core-mechanics#defense-and-armor' },
              ]
            },
            {
              text: 'Chapter 1 — Character Creation',
              link: '/phb/01-character-creation',
              collapsed: true,
              items: [
                { text: 'Concept & Background', link: '/phb/01-character-creation#12-step-1-concept--background' },
                { text: 'Choose a Race', link: '/phb/01-character-creation#13-step-2-choose-a-race' },
                { text: 'Choose a Class', link: '/phb/01-character-creation#14-step-3-choose-a-class' },
                { text: 'Assign Attributes', link: '/phb/01-character-creation#15-step-4-assign-attributes' },
                { text: 'Assign Skills', link: '/phb/01-character-creation#16-step-5-assign-skills' },
                { text: 'Choose Starting Gear', link: '/phb/01-character-creation#17-step-6-choose-starting-gear' },
                { text: 'Pick Perks', link: '/phb/01-character-creation#19-step-7-pick-perks' },
                { text: 'Corruption Starting State', link: '/phb/01-character-creation#110-step-8-corruption-starting-state' },
              ]
            },
            {
              text: 'Chapter 2 — Lineages & Race',
              link: '/phb/02-lineages-and-race',
              collapsed: true,
              items: [
                { text: 'Vampires', link: '/phb/02-lineages-and-race#22-vampires' },
                { text: 'Wraiths', link: '/phb/02-lineages-and-race#23-wraiths' },
                { text: 'Hylden-Blooded', link: '/phb/02-lineages-and-race#24-hylden-blooded' },
                { text: 'Humans', link: '/phb/02-lineages-and-race#25-humans' },
                { text: 'Revenants', link: '/phb/02-lineages-and-race#26-revenants' },
                { text: 'Unbound', link: '/phb/02-lineages-and-race#27-unbound' },
              ]
            },
            {
              text: 'Chapter 3 — Classes',
              link: '/phb/03-classes',
              collapsed: true,
              items: [
                { text: 'Class Overview', link: '/phb/03-classes#31-class-overview' },
                { text: 'Class Progression', link: '/phb/03-classes#32-class-progression' },
                { text: 'Blood Knight', link: '/phb/03-classes#331-blood-knight' },
                { text: 'Soul Reaver', link: '/phb/03-classes#332-soul-reaver' },
                { text: 'Shadowmancer', link: '/phb/03-classes#333-shadowmancer' },
                { text: 'Sangromancer', link: '/phb/03-classes#334-sangromancer' },
                { text: 'Glyphwright', link: '/phb/03-classes#335-glyphwright' },
                { text: 'Dreadblade', link: '/phb/03-classes#336-dreadblade' },
                { text: 'Warden of Balance', link: '/phb/03-classes#337-warden-of-balance' },
                { text: 'Hylden Warlock', link: '/phb/03-classes#338-hylden-warlock' },
              ]
            },
            {
              text: 'Chapter 4 — Perks',
              link: '/phb/04-perks',
              collapsed: true,
              items: [
                { text: 'Perk Progression', link: '/phb/04-perks#41-perk-progression' },
                { text: 'Universal Perks', link: '/phb/04-perks#42-universal-perks' },
                { text: 'Corrupted Perks', link: '/phb/04-perks#43-corrupted-perks' },
              ]
            },
            {
              text: 'Chapter 5 — Spellcasting & Magic',
              link: '/phb/05-spellcasting-and-magic',
              collapsed: true,
              items: [
                { text: 'Spell Categories & Tiers', link: '/phb/05-spellcasting-and-magic#51-spell-categories-and-tiers' },
                { text: 'Spellcasting Basics', link: '/phb/05-spellcasting-and-magic#52-spellcasting-basics' },
                { text: 'The Spellcasting Process', link: '/phb/05-spellcasting-and-magic#53-the-spellcasting-process' },
                { text: 'Advanced Spell Mechanics', link: '/phb/05-spellcasting-and-magic#54-advanced-spell-mechanics' },
                { text: 'Spell Compendium', link: '/phb/05-spellcasting-and-magic#510-spell-compendium' },
              ]
            },
            {
              text: 'Chapter 6 — Skills',
              link: '/phb/06-skills',
              collapsed: true,
              items: [
                { text: 'Skill Check Mechanics', link: '/phb/06-skills#61-skill-check-mechanics' },
                { text: 'The Consolidated Skill List', link: '/phb/06-skills#62-the-consolidated-skill-list' },
                { text: 'Pushing and Stunts', link: '/phb/06-skills#63-pushing-and-stunts' },
                { text: 'Skill Point Economy', link: '/phb/06-skills#64-skill-point-economy' },
              ]
            },
            {
              text: 'Chapter 7 — Equipment',
              link: '/phb/07-equipment',
              collapsed: true,
              items: [
                { text: 'Weapons of Nosgoth', link: '/phb/07-equipment#71-weapons-of-nosgoth' },
                { text: 'Armor of Nosgoth', link: '/phb/07-equipment#73-armor-of-nosgoth' },
                { text: 'Lineage & Cultural Gear', link: '/phb/07-equipment#74-lineage-and-cultural-gear' },
                { text: 'Acquisition & Crafting', link: '/phb/07-equipment#75-acquisition-and-crafting' },
              ]
            },
            {
              text: 'Chapter 8 — Corruption',
              link: '/phb/08-corruption',
              collapsed: true,
              items: [
                { text: 'Corruption Level & Thresholds', link: '/phb/08-corruption#81-corruption-level-and-thresholds' },
                { text: 'Rolling Corruption Dice', link: '/phb/08-corruption#83-rolling-corruption-dice' },
                { text: 'Corrupted Perks', link: '/phb/08-corruption#84-corrupted-perks' },
                { text: 'Paths to Purification', link: '/phb/08-corruption#86-paths-to-purification' },
              ]
            },
            {
              text: 'Chapter 9 — Combat',
              link: '/phb/09-combat',
              collapsed: true,
              items: [
                { text: 'Combat Overview', link: '/phb/09-combat#91-combat-overview' },
                { text: 'Initiative', link: '/phb/09-combat#92-initiative' },
                { text: 'Actions: Attacking', link: '/phb/09-combat#93-actions-attacking' },
                { text: 'Defense and Armor', link: '/phb/09-combat#94-defense-and-armor' },
                { text: 'Damage Types and Effects', link: '/phb/09-combat#97-damage-types-and-effects' },
                { text: 'Special Actions', link: '/phb/09-combat#910-special-actions' },
                { text: 'Combat Example', link: '/phb/09-combat#913-combat-example' },
              ]
            },
            {
              text: 'Chapter 10 — Dice System',
              link: '/phb/10-dice-system',
              collapsed: true,
              items: [
                { text: 'Dice Success System', link: '/phb/10-dice-system#101-dice-success-system' },
                { text: 'Extra Successes', link: '/phb/10-dice-system#102-extra-successes-enhancing-actions' },
                { text: 'Advantage & Disadvantage', link: '/phb/10-dice-system#103-advantage-and-disadvantage' },
              ]
            },
            {
              text: 'Chapter 11 — Realms, Terrain & Arcane Power',
              link: '/phb/11-realms-terrain-arcane-power',
              collapsed: true,
              items: [
                { text: 'Realm Affinity', link: '/phb/11-realms-terrain-arcane-power#111-realm-affinity' },
                { text: 'Terrain Types', link: '/phb/11-realms-terrain-arcane-power#112-terrain-types' },
                { text: 'Energy Foci', link: '/phb/11-realms-terrain-arcane-power#113-energy-foci' },
              ]
            },
            {
              text: 'Chapter 12 — Glossary',
              link: '/phb/12-glossary',
              collapsed: true,
              items: [
                { text: 'Core Resolution', link: '/phb/12-glossary#121-core-resolution' },
                { text: 'Attributes & Resources', link: '/phb/12-glossary#122-attributes-and-resources' },
                { text: 'Combat', link: '/phb/12-glossary#123-combat' },
                { text: 'Spellcasting', link: '/phb/12-glossary#127-spellcasting' },
              ]
            },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Boneysan/Bloodbound_PHB' }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Legacy of Kain: Bloodbound RPG — A fan-made tabletop roleplaying game set in Nosgoth.',
      copyright: 'Legacy of Kain is property of Crystal Dynamics / Embracer Group. This is a fan project.'
    },

    editLink: {
      pattern: 'https://github.com/Boneysan/Bloodbound_PHB/edit/main/Bloodbound_PHB/docs/:path',
      text: 'Edit this page on GitHub'
    },

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
  },

  markdown: {
    lineNumbers: false,
  },
})
