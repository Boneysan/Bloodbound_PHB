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
                { text: 'The Six Attributes', link: '/phb/00-core-mechanics' },
                { text: 'The Dice Pool System', link: '/phb/00-core-mechanics' },
                { text: 'Difficulty Rating vs Defense Value', link: '/phb/00-core-mechanics' },
                { text: 'Advantage & Disadvantage', link: '/phb/00-core-mechanics' },
                { text: 'Resource Pools', link: '/phb/00-core-mechanics' },
                { text: 'Defense and Armor', link: '/phb/00-core-mechanics' },
              ]
            },
            {
              text: 'Chapter 1 — Character Creation',
              link: '/phb/01-character-creation',
              collapsed: true,
              items: [
                { text: 'Concept & Background', link: '/phb/01-character-creation' },
                { text: 'Choose a Race', link: '/phb/01-character-creation' },
                { text: 'Choose a Class', link: '/phb/01-character-creation' },
                { text: 'Assign Attributes', link: '/phb/01-character-creation' },
                { text: 'Assign Skills', link: '/phb/01-character-creation' },
                { text: 'Choose Starting Gear', link: '/phb/01-character-creation' },
                { text: 'Pick Perks', link: '/phb/01-character-creation' },
                { text: 'Corruption Starting State', link: '/phb/01-character-creation' },
              ]
            },
            {
              text: 'Chapter 2 — Lineages & Race',
              link: '/phb/02-lineages-and-race',
              collapsed: true,
              items: [
                { text: 'Vampires', link: '/phb/02-lineages-and-race' },
                { text: 'Wraiths', link: '/phb/02-lineages-and-race' },
                { text: 'Hylden-Blooded', link: '/phb/02-lineages-and-race' },
                { text: 'Humans', link: '/phb/02-lineages-and-race' },
                { text: 'Revenants', link: '/phb/02-lineages-and-race' },
                { text: 'Unbound', link: '/phb/02-lineages-and-race' },
              ]
            },
            {
              text: 'Chapter 3 — Classes',
              link: '/phb/03-classes',
              collapsed: true,
              items: [
                { text: 'Class Overview', link: '/phb/03-classes' },
                { text: 'Class Progression', link: '/phb/03-classes' },
                { text: 'Blood Knight', link: '/phb/03-classes' },
                { text: 'Soul Reaver', link: '/phb/03-classes' },
                { text: 'Shadowmancer', link: '/phb/03-classes' },
                { text: 'Sangromancer', link: '/phb/03-classes' },
                { text: 'Glyphwright', link: '/phb/03-classes' },
                { text: 'Dreadblade', link: '/phb/03-classes' },
                { text: 'Warden of Balance', link: '/phb/03-classes' },
                { text: 'Hylden Warlock', link: '/phb/03-classes' },
              ]
            },
            {
              text: 'Chapter 4 — Perks',
              link: '/phb/04-perks',
              collapsed: true,
              items: [
                { text: 'Perk Progression', link: '/phb/04-perks' },
                { text: 'Universal Perks', link: '/phb/04-perks' },
                { text: 'Corrupted Perks', link: '/phb/04-perks' },
              ]
            },
            {
              text: 'Chapter 5 — Spellcasting & Magic',
              link: '/phb/05-spellcasting-and-magic',
              collapsed: true,
              items: [
                { text: 'Spell Categories & Tiers', link: '/phb/05-spellcasting-and-magic' },
                { text: 'Spellcasting Basics', link: '/phb/05-spellcasting-and-magic' },
                { text: 'The Spellcasting Process', link: '/phb/05-spellcasting-and-magic' },
                { text: 'Advanced Spell Mechanics', link: '/phb/05-spellcasting-and-magic' },
                { text: 'Spell Compendium', link: '/phb/05-spellcasting-and-magic' },
              ]
            },
            {
              text: 'Chapter 6 — Skills',
              link: '/phb/06-skills',
              collapsed: true,
              items: [
                { text: 'Skill Check Mechanics', link: '/phb/06-skills' },
                { text: 'The Consolidated Skill List', link: '/phb/06-skills' },
                { text: 'Pushing and Stunts', link: '/phb/06-skills' },
                { text: 'Skill Point Economy', link: '/phb/06-skills' },
              ]
            },
            {
              text: 'Chapter 7 — Equipment',
              link: '/phb/07-equipment',
              collapsed: true,
              items: [
                { text: 'Weapons of Nosgoth', link: '/phb/07-equipment' },
                { text: 'Armor of Nosgoth', link: '/phb/07-equipment' },
                { text: 'Lineage & Cultural Gear', link: '/phb/07-equipment' },
                { text: 'Acquisition & Crafting', link: '/phb/07-equipment' },
              ]
            },
            {
              text: 'Chapter 8 — Corruption',
              link: '/phb/08-corruption',
              collapsed: true,
              items: [
                { text: 'Corruption Level & Thresholds', link: '/phb/08-corruption' },
                { text: 'Rolling Corruption Dice', link: '/phb/08-corruption' },
                { text: 'Corrupted Perks', link: '/phb/08-corruption' },
                { text: 'Paths to Purification', link: '/phb/08-corruption' },
              ]
            },
            {
              text: 'Chapter 9 — Combat',
              link: '/phb/09-combat',
              collapsed: true,
              items: [
                { text: 'Combat Overview', link: '/phb/09-combat' },
                { text: 'Initiative', link: '/phb/09-combat' },
                { text: 'Actions: Attacking', link: '/phb/09-combat' },
                { text: 'Defense and Armor', link: '/phb/09-combat' },
                { text: 'Damage Types and Effects', link: '/phb/09-combat' },
                { text: 'Special Actions', link: '/phb/09-combat' },
                { text: 'Combat Example', link: '/phb/09-combat' },
              ]
            },
            {
              text: 'Chapter 10 — Dice System',
              link: '/phb/10-dice-system',
              collapsed: true,
              items: [
                { text: 'Dice Success System', link: '/phb/10-dice-system' },
                { text: 'Extra Successes', link: '/phb/10-dice-system' },
                { text: 'Advantage & Disadvantage', link: '/phb/10-dice-system' },
              ]
            },
            {
              text: 'Chapter 11 — Realms, Terrain & Arcane Power',
              link: '/phb/11-realms-terrain-arcane-power',
              collapsed: true,
              items: [
                { text: 'Realm Affinity', link: '/phb/11-realms-terrain-arcane-power' },
                { text: 'Terrain Types', link: '/phb/11-realms-terrain-arcane-power' },
                { text: 'Energy Foci', link: '/phb/11-realms-terrain-arcane-power' },
              ]
            },
            {
              text: 'Chapter 12 — Glossary',
              link: '/phb/12-glossary',
              collapsed: true,
              items: [
                { text: 'Core Resolution', link: '/phb/12-glossary' },
                { text: 'Attributes & Resources', link: '/phb/12-glossary' },
                { text: 'Combat', link: '/phb/12-glossary' },
                { text: 'Spellcasting', link: '/phb/12-glossary' },
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
