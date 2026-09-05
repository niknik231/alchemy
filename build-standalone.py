#!/usr/bin/env python3
"""Build standalone alchemy.html from modular source files."""
import os

BASE = "alchemy-refactored"
OUT = "alchemy.html"

# Read source files
with open(os.path.join(BASE, "index.html"), "r", encoding="utf-8") as f:
    html = f.read()

with open(os.path.join(BASE, "css", "styles.css"), "r", encoding="utf-8") as f:
    css = f.read()

with open(os.path.join(BASE, "js", "game.js"), "r", encoding="utf-8") as f:
    js = f.read()

# Inline CSS
html = html.replace(
    '<link rel="stylesheet" href="css/styles.css">',
    f"<style>\n{css}\n</style>"
)

# Inline JS
html = html.replace(
    '<script src="js/game.js"></script>',
    f"<script>\n{js}\n</script>"
)

# Write output
with open(OUT, "w", encoding="utf-8") as f:
    f.write(html)

size_kb = os.path.getsize(OUT) / 1024
print(f"Built {OUT} ({size_kb:.1f} KB)")
