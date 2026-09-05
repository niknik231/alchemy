"use strict";

// ============================================
// HELPER: Add New Elements via Browser Console
// ============================================
// Usage:
//   addElement("neon", "Неон", "💡", "tech", "electricity", "gas", "Инертный газ, светящийся при прохождении тока")
//   addRecipe("fire", "wood", "charcoal")
//
// Then download the updated files:
//   downloadData()
// ============================================

window.addElement = function(id, name, icon, category, ingredientA, ingredientB, clue = "") {
  // Check if element already exists
  if (window.alchemyEngine.elements.has(id)) {
    console.warn(`Element "${id}" already exists!`);
    return false;
  }
  
  // Add element
  const el = { id, name, icon, category, isBase: false, hint: clue, iconType: "emoji" };
  window.alchemyEngine.elements.set(id, el);
  
  // Add recipe
  if (ingredientA && ingredientB) {
    const key = window.alchemyEngine.recipeKey(ingredientA, ingredientB);
    window.alchemyEngine.recipes.set(key, id);
    
    if (!window.alchemyEngine.recipesUsing.has(ingredientA)) {
      window.alchemyEngine.recipesUsing.set(ingredientA, []);
    }
    if (!window.alchemyEngine.recipesUsing.has(ingredientB)) {
      window.alchemyEngine.recipesUsing.set(ingredientB, []);
    }
    window.alchemyEngine.recipesUsing.get(ingredientA).push({ partner: ingredientB, result: id });
    window.alchemyEngine.recipesUsing.get(ingredientB).push({ partner: ingredientA, result: id });
  }
  
  // Add clue if provided
  if (clue) window.alchemyEngine.clues.set(id, clue);
  
  // Auto-discover if both ingredients are discovered
  if (window.alchemyEngine.discovered.has(ingredientA) && window.alchemyEngine.discovered.has(ingredientB)) {
    // Don't auto-discover, let the player craft it
  }
  
  console.log(`✅ Added element: ${name} (${id})`);
  console.log(`   Recipe: ${ingredientA} + ${ingredientB} = ${id}`);
  
  // Update UI
  window.alchemyUI.renderPalette();
  window.alchemyUI.updateCounter();
  
  return true;
};

window.addRecipe = function(a, b, result) {
  const engine = window.alchemyEngine;
  const key = engine.recipeKey(a, b);
  
  if (engine.recipes.has(key)) {
    console.warn(`Recipe ${a} + ${b} already exists (→ ${engine.recipes.get(key)})`);
    return false;
  }
  
  engine.recipes.set(key, result);
  
  if (!engine.recipesUsing.has(a)) engine.recipesUsing.set(a, []);
  if (!engine.recipesUsing.has(b)) engine.recipesUsing.set(b, []);
  engine.recipesUsing.get(a).push({ partner: b, result });
  engine.recipesUsing.get(b).push({ partner: a, result });
  
  console.log(`✅ Added recipe: ${a} + ${b} = ${result}`);
  return true;
};

window.downloadData = function() {
  // Export elements
  const elements = Array.from(window.alchemyEngine.elements.values()).map(el => ({
    id: el.id,
    name: el.name,
    icon: el.icon,
    category: el.category,
    hint: el.hint || "",
    iconType: el.iconType || "emoji",
    isBase: el.isBase || false
  }));
  
  // Export recipes
  const recipes = [];
  const seen = new Set();
  for (const [key, result] of window.alchemyEngine.recipes) {
    const [a, b] = key.split(" ");
    const k = [a, b, result].join("|");
    if (!seen.has(k)) {
      seen.add(k);
      recipes.push([a, b, result]);
    }
  }
  
  const data = {
    elements,
    recipes,
    categories: Array.from(window.alchemyEngine.categories.values()),
    version: "2.0.0"
  };
  
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "alchemy-data-export.json";
  a.click();
  URL.revokeObjectURL(url);
  
  console.log("📥 Data exported! Check your downloads.");
};

console.log("🔧 Alchemy Helper loaded!");
console.log("Commands available:");
console.log("  addElement(id, name, icon, category, a, b, clue)");
console.log("  addRecipe(a, b, result)");
console.log("  downloadData()");
