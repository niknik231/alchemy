// region: SAVE_MIGRATIONS
// Старые сохранения не знали отдельных рецептов. Для уже открытого результата
// считаем известным первый доступный рецепт, не раскрывая его альтернативы.
if (!hasSavedRecipes){
  for (const id of discovered){
    const firstKnownRecipe = R.find(([raw, result]) =>
      result === id && raw.split(" ").every(component => discovered.has(component))
    );
    if (firstKnownRecipe){
      const [a, b] = firstKnownRecipe[0].split(" ");
      discoveredRecipes.add(recipeKey(a, b));
    }
  }
  localStorage.setItem(DISCOVERED_RECIPES_KEY, JSON.stringify([...discoveredRecipes]));
}
const DISCOVERY_CHAIN_KEY = "alchemy.discoveryChain";
let discoveryChain = [];
try {
  const parsedChain = JSON.parse(localStorage.getItem(DISCOVERY_CHAIN_KEY));
  const ids = parsedChain && parsedChain.version === 1 && Array.isArray(parsedChain.ids)
    ? parsedChain.ids
    : [];
  discoveryChain = ids.filter((id, index) => E[id] && !BASE.includes(id) && ids.indexOf(id) === index);
} catch(e){}
let lastDiscovered = null;
let wonShown = false;

