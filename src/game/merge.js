// region: MERGE
// ---------- Соединение ----------
function tryMerge(mover){
  const size = itemSize(), radius = mergeRadius();
  const cx = mover.x + size/2, cy = mover.y + size/2;
  let best = null, bestD = Infinity;
  for (const o of items){
    if (o === mover) continue;
    const d = Math.hypot(cx - (o.x+size/2), cy - (o.y+size/2));
    if (d < radius && d < bestD){ bestD = d; best = o; }
  }
  if (!best) return;

  const mergedRecipe = key(mover.id, best.id);
  const res = RECIPE.get(mergedRecipe);
  if (!res){
    refusePair(mover, best);
    return;
  }
  if (discovered.has(res)){
    if (!discoveredRecipes.has(mergedRecipe)){
      discoveredRecipes.add(mergedRecipe);
      saveRecipes();
      renderPalette();
      sparks((mover.x + best.x + size) / 2, (mover.y + best.y + size) / 2);
      notifyHTML(`✨ Новый рецепт: ${iconHTML(mover.id)} ${E[mover.id][0]} + ${iconHTML(best.id)} ${E[best.id][0]}`);
    } else {
      refusePair(mover, best);
      notifyHTML(`${iconHTML(res)} «${E[res][0]}» уже создан — рецепт известен`);
    }
    return;
  }
  discoveredRecipes.add(mergedRecipe);
  saveRecipes();
  const mx = (mover.x + best.x)/2;
  const my = (mover.y + best.y)/2;
  removeItem(mover); removeItem(best);
  const nit = addItem(res, mx, my);
  if (!discovered.has(res)) discover(res, nit);
  else sparks(nit.x + size/2, nit.y + size/2);
}

