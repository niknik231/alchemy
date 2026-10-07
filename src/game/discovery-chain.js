// region: DISCOVERY_CHAIN
// ---------- Цепочки открытий ----------
// Маршрут строится только из ещё не открытых результатов. Первый этап уже
// достижим, а каждый следующий использует предыдущий результат как компонент.
function createDiscoveryChain(){
  const unseen = new Set(Object.keys(E).filter(id => !discovered.has(id)));
  if (!unseen.size) return [];

  const seed = strHash([...discovered].sort().join("|") + ":discovery-chain");
  const rank = new Map(Object.keys(E).map((id, index) =>
    [id, strHash(`${seed}:${id}:${index}`)]));
  const starts = [...new Set(R
    .filter(([raw, result]) => unseen.has(result) &&
      raw.split(" ").every(component => discovered.has(component)))
    .map(([, result]) => result))]
    .sort((a, b) => rank.get(a) - rank.get(b));

  let best = [];
  function walk(path){
    if (path.length > best.length) best = path.slice();
    if (path.length >= 4) return true;
    const current = path[path.length - 1];
    const next = [...new Set(R
      .filter(([raw, result]) => {
        const components = raw.split(" ");
        return unseen.has(result) && !path.includes(result) && components.includes(current) &&
          components.every(component => discovered.has(component) || path.includes(component));
      })
      .map(([, result]) => result))]
      .sort((a, b) => rank.get(a) - rank.get(b));
    for (const id of next){
      if (walk([...path, id])) return true;
    }
    return false;
  }

  for (const start of starts){
    if (walk([start]) && best.length >= 4) break;
  }
  return best.length >= 2 ? best : [];
}

function chainCompletedCount(){
  return discoveryChain.filter(id => discovered.has(id)).length;
}

function updateChainButton(){
  if (!discoveryChain.length){
    btnChain.title = "Цепочка открытий — подходящий маршрут пока не найден";
    btnChain.setAttribute("aria-label", "Цепочка открытий");
    return;
  }
  const progress = `${chainCompletedCount()} из ${discoveryChain.length}`;
  btnChain.title = `Цепочка открытий — ${progress}`;
  btnChain.setAttribute("aria-label", `Цепочка открытий, выполнено ${progress}`);
}

function renderDiscoveryChain(){
  updateChainButton();
  if (!discoveryChain.length){
    chainBody.innerHTML =
      `<div class="chain-empty">Сейчас из доступных открытий нельзя составить последовательный маршрут. Продолжай экспериментировать — новая цепочка появится вместе с новыми возможностями.</div>` +
      `<div class="chain-actions"><button type="button" data-chain-action="new">Проверить снова</button></div>`;
    return;
  }

  const completed = chainCompletedCount();
  const currentIndex = discoveryChain.findIndex(id => !discovered.has(id));
  const complete = currentIndex === -1;
  const steps = discoveryChain.map((id, index) => {
    const done = discovered.has(id);
    const current = !complete && index === currentIndex;
    const state = done ? "done" : current ? "current" : "locked";
    const icon = done || current ? iconHTML(id) : "❔";
    const name = done || current ? E[id][0] : "Скрытый этап";
    const label = done ? `Этап ${index + 1} завершён` : current ? `Этап ${index + 1} — текущая цель` : `Этап ${index + 1}`;
    const mark = done ? "✓" : current ? "◆" : "•";
    return `<div class="chain-step ${state}">` +
      `<div class="chain-icon">${icon}</div>` +
      `<div class="chain-copy"><span class="chain-label">${label}</span><span class="chain-name">${name}</span></div>` +
      `<span class="chain-state" aria-hidden="true">${mark}</span></div>`;
  }).join("");
  const intro = complete
    ? "Цепочка завершена. Можно отправиться по новому маршруту."
    : "Открой текущую цель обычным сочетанием. Следующий этап проявится после открытия.";
  chainBody.innerHTML =
    `<div class="chain-intro">${intro}</div>` +
    `<div class="chain-progress" aria-label="Выполнено ${completed} из ${discoveryChain.length}"><span style="width:${completed / discoveryChain.length * 100}%"></span></div>` +
    `<div class="chain-steps">${steps}</div>` +
    (complete ? `<div class="chain-actions"><button type="button" data-chain-action="new">Новая цепочка</button></div>` : "");
}

function startNewDiscoveryChain(){
  discoveryChain = createDiscoveryChain();
  saveDiscoveryChain();
  renderDiscoveryChain();
}

function registerChainDiscovery(id){
  if (!discoveryChain.includes(id)) return;
  const complete = discoveryChain.every(chainId => discovered.has(chainId));
  renderDiscoveryChain();
  if (complete){
    setTimeout(() => showPopup("🧭", "Цепочка завершена!", "Открой новую экспедицию"), 2050);
  }
}

function openDiscoveryChain(){
  renderDiscoveryChain();
  chainModal.classList.add("open");
  document.getElementById("btnChainClose").focus();
}
function closeDiscoveryChain(){ chainModal.classList.remove("open"); }

function showHint(){
  const options = [...new Set(R
    .filter(([k,res]) => {
      const [a,b] = k.split(" ");
      return discovered.has(a) && discovered.has(b) && !discovered.has(res);
    })
    .map(([,res]) => res))];
  if (!options.length){
    hintPicks = [];
    notify(discovered.size === TOTAL
      ? "🎉 Все элементы открыты!"
      : "Подсказок нет — новые элементы из открытых пока не получить!", 4500);
    return;
  }
  const available = new Set(options);
  hintPicks = hintPicks.filter(id => !discovered.has(id) && available.has(id));
  const remaining = options.filter(id => !hintPicks.includes(id));
  const rnd = mulberry32(strHash([...discovered].sort().join("|") + ":" + hintPicks.join("|")));
  for (let i = remaining.length - 1; i > 0; i--){
    const j = Math.floor(rnd() * (i + 1));
    [remaining[i], remaining[j]] = [remaining[j], remaining[i]];
  }
  hintPicks.push(...remaining.slice(0, 3 - hintPicks.length));
  // Последняя защита от устаревшей подсказки при быстром открытии элемента.
  hintPicks = hintPicks.filter(id => !discovered.has(id)).slice(0, 3);
  const picks = hintPicks
    .map(id => `<span class="hint-pick">${iconHTML(id)} ${E[id][0]}</span>`)
    .join("   •   ");
  notifyHTML(`💡 Можно создать: ${picks}`, 6000);
}

function refusePair(a, b){
  [a.el, b.el].forEach(el => {
    el.classList.remove("shake"); void el.offsetWidth; el.classList.add("shake");
  });
}

function discover(id, at){
  discovered.add(id);
  hintPicks = hintPicks.filter(pick => pick !== id && !discovered.has(pick));
  lastDiscovered = id;
  save();
  renderPalette();
  registerChainDiscovery(id);
  showPopup(iconHTML(id), "Новое открытие!", E[id][0]);
  if (hintbar.classList.contains("show")) showHint();
  if (at){ const size = itemSize(); sparks(at.x + size/2, at.y + size/2); }
  if (discovered.size === TOTAL && !wonShown){
    wonShown = true;
    setTimeout(() => showPopup("🏆", "Вселенная создана!", "Все элементы открыты!"), 2100);
  }
}

