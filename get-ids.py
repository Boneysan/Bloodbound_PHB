import re, os

files = {
    "00": "docs/.vitepress/dist/phb/00-core-mechanics.html",
    "02": "docs/.vitepress/dist/phb/02-lineages-and-race.html",
    "03": "docs/.vitepress/dist/phb/03-classes.html",
    "04": "docs/.vitepress/dist/phb/04-perks.html",
    "05": "docs/.vitepress/dist/phb/05-spellcasting-and-magic.html",
    "06": "docs/.vitepress/dist/phb/06-skills.html",
    "07": "docs/.vitepress/dist/phb/07-equipment.html",
    "08": "docs/.vitepress/dist/phb/08-corruption.html",
    "09": "docs/.vitepress/dist/phb/09-combat.html",
    "10": "docs/.vitepress/dist/phb/10-dice-system.html",
    "11": "docs/.vitepress/dist/phb/11-realms-terrain-arcane-power.html",
    "12": "docs/.vitepress/dist/phb/12-glossary.html",
}

for name, path in files.items():
    print(f"=== {name} ===")
    with open(path) as f:
        content = f.read()
    # IDs are in the JSON data payload as "id":"value"
    ids = re.findall(r'"id":"([^"]+)"', content)
    for i in ids[:20]:
        print(i)
    print()
