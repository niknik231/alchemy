// region: INDEXES
const FULL_ICONS = Object.freeze(Object.fromEntries(
  Object.entries(FULL_ICON_MOTIFS).map(([id, motif]) => [id, makeFullIcon(id, motif)])
));
// Порядок столкновения ингредиентов не влияет на результат.
const recipeKey = (a,b) => a < b ? a+" "+b : b+" "+a;
const RECIPE = new Map(R.map(([k,v]) => {
  const [a,b] = k.split(" ");
  return [recipeKey(a,b), v];
}));
const TOTAL = Object.keys(E).length;
// Рецепты, в которых элемент используется как ингредиент.
const RECIPES_USING = new Map(Object.keys(E).map(id => [id, []]));
for (const [raw, result] of R){
  const [a, b] = raw.split(" ");
  const recipe = recipeKey(a, b);
  for (const ingredient of new Set(raw.split(" "))){
    RECIPES_USING.get(ingredient).push(recipe);
  }
}
// конечные элементы — не используются как ингредиент ни в одном рецепте
const USED_INPUTS = new Set(R.flatMap(([k]) => k.split(" ")));
const FINAL = new Set(Object.keys(E).filter(id => !USED_INPUTS.has(id)));
