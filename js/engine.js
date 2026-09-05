"use strict";

// ============================================
// ALCHEMY GAME ENGINE - Refactored & Modular
// ============================================

class AlchemyEngine {
  constructor() {
    this.elements = new Map();      // id -> element data
    this.recipes = new Map();       // "a b" -> result (sorted)
    this.recipesUsing = new Map();  // id -> array of recipes where it's an ingredient
    this.baseElements = new Set();
    this.discovered = new Set();
    this.categories = new Map();
    this.customIcons = new Map();
    this.fullIcons = new Map();
    this.clues = new Map();
    this.settings = {
      showUnavailableElements: true,
      codexShowAvailable: false,
    };
    
    this.SETTINGS_KEY = "alchemy.settings";
    this.SAVE_KEY = "alchemy.save";
    this.VERSION = "2.0.0-refactored";
  }

  async load() {
    const [elementsData, recipesData, categoriesData, iconsData] = await Promise.all([
      fetch("data/elements.json").then(r => r.json()),
      fetch("data/recipes.json").then(r => r.json()),
      fetch("data/categories.json").then(r => r.json()),
      fetch("data/icons.json").then(r => r.json().catch(() => ({})))
    ]);
    
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
  }

  initElements(data) {
    for (const el of data) {
      this.elements.set(el.id, el);
      if (el.isBase) this.baseElements.add(el.id);
      if (el.hint) this.clues.set(el.id, el.hint);
    }
  }

  initRecipes(data) {
    for (const [a, b, result] of data) {
      const key = this.recipeKey(a, b);
      this.recipes.set(key, result);
      
      // Track which recipes use each ingredient
      if (!this.recipesUsing.has(a)) this.recipesUsing.set(a, []);
      if (!this.recipesUsing.has(b)) this.recipesUsing.set(b, []);
      this.recipesUsing.get(a).push({ partner: b, result });
      this.recipesUsing.get(b).push({ partner: a, result });
    }
  }

  initCategories(data) {
    for (const cat of data) {
      this.categories.set(cat.id, cat);
    }
  }

  initIcons(data) {
    for (const [id, svg] of Object.entries(data)) {
      this.customIcons.set(id, svg);
    }
  }

  recipeKey(a, b) {
    return a < b ? `${a} ${b}` : `${b} ${a}`;
  }

  combine(a, b) {
    const key = this.recipeKey(a, b);
    const result = this.recipes.get(key);
    
    if (result && this.discovered.has(a) && this.discovered.has(b)) {
      const wasNew = !this.discovered.has(result);
      this.discovered.add(result);
      this.saveProgress();
      return { result, isNew: wasNew };
    }
    
    return null;
  }

  getElement(id) {
    return this.elements.get(id);
  }

  getDiscoveredElements() {
    return Array.from(this.discovered).map(id => this.elements.get(id)).filter(Boolean);
  }

  getAvailableElements() {
    // Elements that can be crafted from discovered ones
    const available = new Set();
    for (const [id, recipes] of this.recipesUsing) {
      if (this.discovered.has(id)) {
        for (const { partner, result } of recipes) {
          if (this.discovered.has(partner) && !this.discovered.has(result)) {
            available.add(result);
          }
        }
      }
    }
    return Array.from(available);
  }

  getRecipesFor(elementId) {
    return this.recipesUsing.get(elementId) || [];
  }

  getClue(elementId) {
    return this.clues.get(elementId) || "";
  }

  getIconHTML(elementId) {
    const el = this.elements.get(elementId);
    if (!el) return "";
    
    if (el.iconType === "svg" && this.customIcons.has(elementId)) {
      return this.customIcons.get(elementId);
    }
    
    if (el.iconType === "full") {
      const textSize = el.icon.length > 5 ? 43 : 50;
      return `<svg class="game-icon scene-icon" viewBox="0 0 64 64" aria-hidden="true">` +
        `<text x="32" y="51" text-anchor="middle" font-size="${textSize}" font-family="Segoe UI Emoji, Apple Color Emoji, sans-serif">${el.icon}</text>` +
        `</svg>`;
    }
    
    // Default: emoji
    return `<span class="em">${el.icon}</span>`;
  }

  getCategoryColor(catId) {
    return this.categories.get(catId)?.color || "#888888";
  }

  getCategoryName(catId) {
    return this.categories.get(catId)?.name || catId;
  }

  isFinal(elementId) {
    // An element is "final" if it's never used as an ingredient
    return !this.recipesUsing.has(elementId) || this.recipesUsing.get(elementId).length === 0;
  }

  // Persistence
  saveProgress() {
    localStorage.setItem(this.SAVE_KEY, JSON.stringify({
      version: this.VERSION,
      discovered: Array.from(this.discovered),
      timestamp: Date.now()
    }));
  }

  loadProgress() {
    try {
      const saved = JSON.parse(localStorage.getItem(this.SAVE_KEY));
      if (saved && saved.discovered) {
        for (const id of saved.discovered) {
          if (this.elements.has(id)) {
            this.discovered.add(id);
          }
        }
      }
    } catch (e) {
      console.warn("Failed to load progress:", e);
    }
  }

  resetProgress() {
    this.discovered.clear();
    for (const id of this.baseElements) {
      this.discovered.add(id);
    }
    this.saveProgress();
  }

  loadSettings() {
    try {
      const saved = JSON.parse(localStorage.getItem(this.SETTINGS_KEY));
      if (saved) Object.assign(this.settings, saved);
    } catch (e) {
      console.warn("Failed to load settings:", e);
    }
  }

  saveSettings() {
    localStorage.setItem(this.SETTINGS_KEY, JSON.stringify(this.settings));
  }

  // Export/Import
  exportSave() {
    return JSON.stringify({
      version: this.VERSION,
      discovered: Array.from(this.discovered),
      timestamp: Date.now()
    });
  }

  importSave(jsonString) {
    try {
      const data = JSON.parse(jsonString);
      if (data.discovered) {
        this.discovered.clear();
        for (const id of data.discovered) {
          if (this.elements.has(id)) this.discovered.add(id);
        }
        this.saveProgress();
        return true;
      }
    } catch (e) {
      console.error("Invalid save data:", e);
    }
    return false;
  }
}

// Global engine instance
window.alchemyEngine = new AlchemyEngine();
