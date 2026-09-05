#!/usr/bin/env python3
"""Build a standalone HTML file from the refactored alchemy game."""
import json
import re
import os

BASE = "alchemy-refactored"
OUT = "alchemy-standalone.html"

# ------------------------------------------------------------------
# Read source files
# ------------------------------------------------------------------
with open(os.path.join(BASE, "index.html"), "r", encoding="utf-8") as f:
    html = f.read()

with open(os.path.join(BASE, "css", "styles.css"), "r", encoding="utf-8") as f:
    css = f.read()

with open(os.path.join(BASE, "js", "engine.js"), "r", encoding="utf-8") as f:
    engine_js = f.read()

with open(os.path.join(BASE, "js", "ui.js"), "r", encoding="utf-8") as f:
    ui_js = f.read()

with open(os.path.join(BASE, "js", "add-element.js"), "r", encoding="utf-8") as f:
    add_js = f.read()

with open(os.path.join(BASE, "data", "elements.json"), "r", encoding="utf-8") as f:
    elements_data = json.load(f)

with open(os.path.join(BASE, "data", "recipes.json"), "r", encoding="utf-8") as f:
    recipes_data = json.load(f)

with open(os.path.join(BASE, "data", "categories.json"), "r", encoding="utf-8") as f:
    categories_data = json.load(f)

with open(os.path.join(BASE, "data", "icons.json"), "r", encoding="utf-8") as f:
    icons_data = json.load(f)

# ------------------------------------------------------------------
# 1. Inline CSS
# ------------------------------------------------------------------
html = html.replace(
    '<link rel="stylesheet" href="css/styles.css">',
    f"<style>\n{css}\n</style>"
)

# ------------------------------------------------------------------
# 2. Prepare data scripts (embedded as JS variables)
# ------------------------------------------------------------------
data_script = (
    '"use strict";\n'
    "// Embedded game data (no fetch needed)\n"
    f"window._ALCHEMY_ELEMENTS = {json.dumps(elements_data, ensure_ascii=False, separators=(',', ':'))};\n"
    f"window._ALCHEMY_RECIPES   = {json.dumps(recipes_data, ensure_ascii=False, separators=(',', ':'))};\n"
    f"window._ALCHEMY_CATEGORIES = {json.dumps(categories_data, ensure_ascii=False, separators=(',', ':'))};\n"
    f"window._ALCHEMY_ICONS     = {json.dumps(icons_data, ensure_ascii=False, separators=(',', ':'))};\n"
)

# ------------------------------------------------------------------
# 3. Patch engine.js to use embedded data instead of fetch
# ------------------------------------------------------------------
# Replace the fetch-based load() with a synchronous version using embedded data.
engine_js = re.sub(
    r'async load\(\) \{.*?console\.log\(`Alchemy Engine loaded: \$\{this\.elements\.size\} elements, \$\{this\.recipes\.size\} recipes`\);\s*\}',
    '''load() {
    const elementsData = window._ALCHEMY_ELEMENTS;
    const recipesData = window._ALCHEMY_RECIPES;
    const categoriesData = window._ALCHEMY_CATEGORIES;
    const iconsData = window._ALCHEMY_ICONS || {};
    
    this.initElements(elementsData);
    this.initRecipes(recipesData);
    this.initCategories(categoriesData);
    this.initIcons(iconsData);
    this.loadSettings();
    this.loadProgress();
    
    // Discover base elements by default
    for (const id of this.baseElements) {
      this.discovered.add(id);
    }
    
    console.log(`Alchemy Engine loaded: ${this.elements.size} elements, ${this.recipes.size} recipes`);
  }''',
    engine_js,
    flags=re.DOTALL
)

# ------------------------------------------------------------------
# 4. Patch ui.js: remove async/await since load() is now synchronous
# ------------------------------------------------------------------
ui_js = ui_js.replace("async init() {", "init() {")
ui_js = ui_js.replace("await this.engine.load();", "this.engine.load();")

# ------------------------------------------------------------------
# 5. Inline scripts
# ------------------------------------------------------------------
full_script = f"<script>\n{data_script}\n{engine_js}\n{ui_js}\n{add_js}\n</script>"

html = html.replace('<script src="js/engine.js"></script>', '')
html = html.replace('<script src="js/ui.js"></script>', '')

# Insert the combined script right before </body>
html = html.replace("</body>", f"{full_script}\n</body>")

# ------------------------------------------------------------------
# 6. Clean up extra blank lines
# ------------------------------------------------------------------
html = re.sub(r'\n{3,}', '\n\n', html)

# ------------------------------------------------------------------
# 7. Write output
# ------------------------------------------------------------------
with open(OUT, "w", encoding="utf-8") as f:
    f.write(html)

size_kb = os.path.getsize(OUT) / 1024
print(f"Built {OUT} ({size_kb:.1f} KB)")
print(f"   Elements: {len(elements_data)}")
print(f"   Recipes:  {len(recipes_data)}")
print(f"   Categories: {len(categories_data)}")
print(f"   Icons: {len(icons_data)}")
