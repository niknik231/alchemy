// region: UTILITIES
// ---------- Утилиты ----------
const key = recipeKey;
const clampPos = v => Math.max(4, Math.min(v, 99999));
const save = () => localStorage.setItem("alchemy.discovered", JSON.stringify([...discovered]));
const saveRecipes = () => localStorage.setItem(DISCOVERED_RECIPES_KEY, JSON.stringify([...discoveredRecipes]));
const saveSettings = () => localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
const saveDiscoveryChain = () => localStorage.setItem(DISCOVERY_CHAIN_KEY,
  JSON.stringify({ version:1, ids:discoveryChain }));

function iconHTML(id){
  if (ICONS[id]) return ICONS[id];
  return FULL_ICONS[id] || E[id][1];
}

function chipHTML(id){
  return `<span class="em">${iconHTML(id)}</span><span class="nm">${E[id][0]}</span>`;
}

function recipeProgress(id){
  const recipes = RECIPES_USING.get(id) || [];
  return [recipes.filter(recipe => discoveredRecipes.has(recipe)).length, recipes.length];
}

function recipeCountHTML(id){
  if (FINAL.has(id)) return "";
  const [knownRecipes, totalRecipes] = recipeProgress(id);
  const remainingRecipes = totalRecipes - knownRecipes;
  return remainingRecipes > 0
    ? `<span class="recipe-count" aria-label="Осталось открыть рецептов: ${remainingRecipes}">${remainingRecipes}</span>`
    : "";
}

function refreshBoardRecipeCounts(){
  for (const it of items){
    it.el.querySelector(".recipe-count")?.remove();
    it.el.insertAdjacentHTML("beforeend", recipeCountHTML(it.id));
  }
}

