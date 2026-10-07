// region: BOARD
function renderPalette(){
  palette.innerHTML = "";
  let shown = 0;
  for (const [cid, cname, ids] of CATS){
    const open = ids.filter(id => discovered.has(id));
    const visible = settings.showUnavailableElements
      ? open
      : open.filter(id => {
          const [knownRecipes, totalRecipes] = recipeProgress(id);
          return !FINAL.has(id) && totalRecipes - knownRecipes > 0;
        });
    if (!visible.length) continue;
    const h = document.createElement("div");
    h.className = "cat-h";
    h.innerHTML = `<span class="dot" style="background:${CAT_COLOR[cid]}"></span>${cname}` +
      `<span class="cnt">${open.length}/${ids.length}</span>`;
    palette.appendChild(h);
    for (const id of visible){
      const c = document.createElement("div");
      c.className = "chip" + (id === lastDiscovered ? " new" : "") + (FINAL.has(id) ? " final" : "");
      c.dataset.id = id;
      const [knownRecipes, totalRecipes] = recipeProgress(id);
      const remainingRecipes = totalRecipes - knownRecipes;
      c.title = E[id][0] + (FINAL.has(id) ? " ✦ конечный элемент" : "") +
        (FINAL.has(id) ? "" : remainingRecipes > 0
          ? ` • осталось открыть рецептов: ${remainingRecipes}`
          : " • все рецепты открыты");
      c.innerHTML = chipHTML(id) + recipeCountHTML(id);
      palette.appendChild(c);
      shown++;
    }
  }
  if (!shown){
    const empty = document.createElement("div");
    empty.className = "palette-empty";
    empty.textContent = "Нет открытых элементов с неоткрытыми рецептами.";
    palette.appendChild(empty);
  }
  counter.textContent = `${discovered.size} / ${TOTAL}`;
  refreshBoardRecipeCounts();
}

function addItem(id, x, y){
  const size = itemSize();
  const el = document.createElement("div");
  el.className = "item" + (FINAL.has(id) ? " final" : "");
  el.innerHTML = chipHTML(id) + recipeCountHTML(id);
  el.style.zIndex = ++zTop;
  const it = { id, x: clampPos(x), y: clampPos(y), el };
  it.x = Math.min(it.x, board.clientWidth  - size - 4);
  it.y = Math.min(it.y, board.clientHeight - size - 4);
  el.style.left = it.x + "px";
  el.style.top  = it.y + "px";
  board.appendChild(el);
  items.push(it);
  return it;
}

function removeItem(it){
  const i = items.indexOf(it);
  if (i !== -1) items.splice(i, 1);
  it.el.remove();
  hideTip();
}

function isOverBlackHole(clientX, clientY){
  const r = blackHole.getBoundingClientRect();
  return clientX >= r.left && clientX <= r.right &&
         clientY >= r.top  && clientY <= r.bottom;
}

function consumeItem(it){
  it.el.classList.remove("dragging");
  it.el.classList.add("consumed");
  setTimeout(() => removeItem(it), 280);
}

function sparks(x, y){                       // координаты внутри поля
  const b = board.getBoundingClientRect();
  for (let i = 0; i < 10; i++){
    const s = document.createElement("span");
    s.className = "spark";
    s.textContent = "✦✧✨"[i % 3];
    s.style.left = (b.left + x) + "px";
    s.style.top  = (b.top  + y) + "px";
    const a = Math.random() * Math.PI * 2, d = 45 + Math.random() * 55;
    s.style.setProperty("--dx", Math.cos(a)*d + "px");
    s.style.setProperty("--dy", Math.sin(a)*d + "px");
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 650);
  }
}

let popupTimer = null;
function showPopup(big, ttl, val){
  popup.querySelector(".big").innerHTML = big;
  popup.querySelector(".ttl").textContent = ttl;
  popup.querySelector(".val").textContent = val;
  popup.classList.add("show");
  clearTimeout(popupTimer);
  popupTimer = setTimeout(() => popup.classList.remove("show"), 1900);
}

