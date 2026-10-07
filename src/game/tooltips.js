// region: TOOLTIPS
// ---------- Подсказка рецепта при наведении ----------
board.addEventListener("mouseover", e => {
  const el = e.target.closest("#board .item");
  if (!el || el.classList.contains("dragging")) return;
  const it = items.find(i => i.el === el);
  if (!it) return;
  const rc = recipeListHTML(it.id) || "базовый элемент";
  tip.innerHTML = `<div class="t">${iconHTML(it.id)} ${E[it.id][0]}</div><div>${rc}</div>` +
    (FINAL.has(it.id) ? `<div class="f">✦ конечный элемент</div>` : "");
  const r = el.getBoundingClientRect();
  tip.style.left = Math.min(Math.max(r.left + r.width / 2, 130), window.innerWidth - 130) + "px";
  tip.style.top = (r.top - 8) + "px";
  tip.classList.add("show");
});
board.addEventListener("mouseout", e => {
  if (e.target.closest("#board .item")) hideTip();
});

document.getElementById("btnClear").addEventListener("click", () => items.slice().forEach(removeItem));

