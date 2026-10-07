// region: STATE
// ---------- Состояние ----------
const SETTINGS_KEY = "alchemy.settings";
const settings = { showUnavailableElements:true, codexShowAvailable:false };
try {
  const parsedSettings = JSON.parse(localStorage.getItem(SETTINGS_KEY));
  if (parsedSettings && typeof parsedSettings.showUnavailableElements === "boolean"){
    settings.showUnavailableElements = parsedSettings.showUnavailableElements;
  }
  if (parsedSettings && typeof parsedSettings.codexShowAvailable === "boolean"){
    settings.codexShowAvailable = parsedSettings.codexShowAvailable;
  }
} catch(e){}

let saved = [];
try {
  const parsedSave = JSON.parse(localStorage.getItem("alchemy.discovered"));
  saved = Array.isArray(parsedSave) ? parsedSave : [];
} catch(e){}
const discovered = new Set(saved.filter(id => E[id]));
BASE.forEach(b => discovered.add(b));

const DISCOVERED_RECIPES_KEY = "alchemy.discoveredRecipes";
let savedRecipes = [];
let hasSavedRecipes = false;
try {
  const rawSavedRecipes = localStorage.getItem(DISCOVERED_RECIPES_KEY);
  hasSavedRecipes = rawSavedRecipes !== null;
  const parsedRecipes = JSON.parse(rawSavedRecipes);
  savedRecipes = Array.isArray(parsedRecipes) ? parsedRecipes : [];
} catch(e){}
const discoveredRecipes = new Set(savedRecipes.filter(recipe =>
  RECIPE.has(recipe) && discovered.has(RECIPE.get(recipe))
));
