// region: CODEX
// ---------- Справочник ----------
const codex      = document.getElementById("codex");
const codexList  = document.getElementById("codexList");
const codexSearch= document.getElementById("codexSearch");
const codexModes = document.getElementById("codexModes");
const codexAvailableFilter = document.getElementById("codexAvailableFilter");
const codexShowAvailable = document.getElementById("codexShowAvailable");
codexShowAvailable.checked = settings.codexShowAvailable;
let codexMode = "all";

const RECIPES_BY_RESULT = (() => {
  const m = new Map();
  for (const [raw, res] of R){
    if (!m.has(res)) m.set(res, []);
    m.get(res).push(raw.split(" "));
  }
  return m;
})();

function recipeListHTML(id){
  const recipes = RECIPES_BY_RESULT.get(id) || [];
  return recipes.map(pair => discoveredRecipes.has(key(pair[0], pair[1]))
    ? `${iconHTML(pair[0])} ${E[pair[0]][0]} + ${iconHTML(pair[1])} ${E[pair[1]][0]}`
    : `<span class="recipe-unknown" title="Рецепт ещё не открыт">❓ + ❓</span>`
  ).join("<br>");
}

function makeCodexRow(id){
  const known = discovered.has(id);
  const row = document.createElement("div");
  row.className = "crow" + (known ? "" : " unknown");
  if (known){
    const rc = recipeListHTML(id) || "базовый элемент";
    row.innerHTML =
      `<span class="em">${iconHTML(id)}</span>` +
      `<span class="nm">${E[id][0]}` +
        (FINAL.has(id) ? `<span class="codex-star" title="Конечный элемент" aria-label="Конечный элемент">✦</span>` : recipeCountHTML(id)) +
      `</span>` +
      `<span class="rc">${rc}</span>` +
      `<button class="cbtn" data-id="${id}" title="Добавить на поле">+</button>`;
  } else {
    row.innerHTML =
      `<span class="em">❓</span><span class="nm">???</span><span class="rc">ещё не открыт</span>`;
  }
  return { row, known };
}

function makeUndiscoveredRow(id){
  const row = document.createElement("div");
  const clue = elementClue(id);
  const clueId = `element-clue-${id}`;
  row.className = "crow undiscovered has-clue";
  row.dataset.id = id;
  row.dataset.readiness = String(openedRecipeComponents(id));
  row.tabIndex = 0;
  row.setAttribute("role", "button");
  row.setAttribute("aria-expanded", "false");
  row.setAttribute("aria-controls", clueId);
  row.setAttribute("aria-label", `${E[id][0]}. Показать подсказку`);
  row.innerHTML =
    `<span class="em">${iconHTML(id)}</span><span class="nm">${E[id][0]}</span>` +
    `<span class="element-clue" id="${clueId}" hidden><strong>Намёк:</strong> ${clue}</span>`;
  return row;
}

function toggleUndiscoveredClue(row){
  const open = !row.classList.contains("clue-open");
  row.classList.toggle("clue-open", open);
  row.setAttribute("aria-expanded", String(open));
  row.setAttribute("aria-label", `${E[row.dataset.id][0]}. ${open ? "Скрыть" : "Показать"} подсказку`);
  const clue = row.querySelector(".element-clue");
  if (clue) clue.hidden = !open;
}

function openedRecipeComponents(id){
  const recipes = RECIPES_BY_RESULT.get(id) || [];
  return recipes.length
    ? Math.max(...recipes.map(pair => pair.filter(component => discovered.has(component)).length))
    : 0;
}

function isAvailableForRecipes(id){
  if (!discovered.has(id) || FINAL.has(id)) return false;
  const [knownRecipes, totalRecipes] = recipeProgress(id);
  return totalRecipes - knownRecipes > 0;
}

function renderCodex(q){
  q = (q || "").trim().toLowerCase();
  codexList.innerHTML = "";
  let shown = 0;
  if (codexMode === "undiscovered"){
    const ids = Object.keys(E)
      .filter(id => !discovered.has(id) && (!q || E[id][0].toLowerCase().includes(q)))
      .sort((a, b) => openedRecipeComponents(b) - openedRecipeComponents(a) ||
        E[a][0].localeCompare(E[b][0], "ru"));
    for (const id of ids){
      codexList.appendChild(makeUndiscoveredRow(id));
      shown++;
    }
  } else if (q){
    // поиск — плоский список подходящих открытых элементов
    const ids = Object.keys(E).sort((x,y) => E[x][0].localeCompare(E[y][0], "ru"));
    for (const id of ids){
      if (!E[id][0].toLowerCase().includes(q) || !discovered.has(id)) continue;
      if (codexShowAvailable.checked && !isAvailableForRecipes(id)) continue;
      codexList.appendChild(makeCodexRow(id).row);
      shown++;
    }
  } else {
    for (const [cid, cname, ids] of CATS){
      const open = ids.filter(discovered.has.bind(discovered));
      const visible = codexShowAvailable.checked ? ids.filter(isAvailableForRecipes) : ids;
      if (!visible.length) continue;
      const h = document.createElement("div");
      h.className = "cat-h";
      h.innerHTML = `<span class="dot" style="background:${CAT_COLOR[cid]}"></span>${cname}` +
        `<span class="cnt">${open.length}/${ids.length}</span>`;
      codexList.appendChild(h);
      for (const id of visible) codexList.appendChild(makeCodexRow(id).row);
      shown += visible.length;
    }
  }
  if (!shown){
    const d = document.createElement("div");
    d.style.cssText = "text-align:center;color:#8f89ad;padding:20px;font-size:13px";
    d.textContent = q ? "Ничего не найдено" : codexMode === "undiscovered"
      ? "Все элементы открыты"
      : codexShowAvailable.checked ? "Нет доступных элементов с неоткрытыми рецептами" : "";
    codexList.appendChild(d);
  }
}
function openCodex(){ renderCodex(""); codex.classList.add("open"); codexSearch.focus(); }
function closeCodex(){ codex.classList.remove("open"); codexSearch.value = ""; }

codexModes.addEventListener("click", e => {
  const button = e.target.closest(".codex-mode");
  if (!button || button.dataset.mode === codexMode) return;
  codexMode = button.dataset.mode;
  codexAvailableFilter.hidden = codexMode !== "all";
  for (const modeButton of codexModes.querySelectorAll(".codex-mode")){
    const active = modeButton === button;
    modeButton.classList.toggle("active", active);
    modeButton.setAttribute("aria-selected", String(active));
  }
  renderCodex(codexSearch.value);
});

codexShowAvailable.addEventListener("change", () => {
  settings.codexShowAvailable = codexShowAvailable.checked;
  saveSettings();
  renderCodex(codexSearch.value);
});

codexList.addEventListener("click", e => {
  const btn = e.target.closest(".cbtn");
  if (btn){
    const id = btn.dataset.id;
    const size = itemSize();
    addItem(id,
      20 + Math.random() * Math.max(1, board.clientWidth  - size - 40),
      20 + Math.random() * Math.max(1, board.clientHeight - size - 40));
    return;
  }
  const undiscoveredRow = e.target.closest(".crow.undiscovered");
  if (undiscoveredRow) toggleUndiscoveredClue(undiscoveredRow);
});

codexList.addEventListener("keydown", e => {
  const row = e.target.closest(".crow.undiscovered");
  if (!row || (e.key !== "Enter" && e.key !== " ")) return;
  e.preventDefault();
  toggleUndiscoveredClue(row);
});

document.getElementById("btnCodex").addEventListener("click", openCodex);
document.getElementById("btnCodexClose").addEventListener("click", closeCodex);
codex.addEventListener("click", e => { if (e.target === codex) closeCodex(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeCodex(); });
codexSearch.addEventListener("input", e => renderCodex(e.target.value));

