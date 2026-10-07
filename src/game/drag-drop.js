// region: DRAG_DROP
// ---------- Перетаскивание ----------
document.addEventListener("pointerdown", e => {
  hideTip();
  const chip = e.target.closest(".chip");
  if (chip){
    const touchPalette = e.pointerType === "touch" && window.matchMedia("(max-width:640px)").matches;
    const g = document.createElement("div");
    g.className = "item ghost";
    g.innerHTML = chipHTML(chip.dataset.id);
    g.style.left = e.clientX + "px";
    g.style.top  = e.clientY + "px";
    if (touchPalette) g.style.visibility = "hidden";
    document.body.appendChild(g);
    drag = { type:"new", id:chip.dataset.id, ghost:g, moved:false, pointerType:e.pointerType,
             sx:e.clientX, sy:e.clientY, t0:performance.now(), touchPalette,
             paletteScrollTop:palettePanel.scrollTop, scrollingPalette:false };
    return;
  }
  const el = e.target.closest("#board .item");
  if (el && !el.classList.contains("ghost")){
    const it = items.find(i => i.el === el);
    if (!it) return;
    const b = board.getBoundingClientRect();
    el.classList.add("dragging");
    el.style.zIndex = ++zTop;
    drag = { type:"move", it, pointerType:e.pointerType,
             offX:e.clientX - (b.left + it.x), offY:e.clientY - (b.top + it.y),
             moved:false, sx:e.clientX, sy:e.clientY };
  }
});

document.addEventListener("pointermove", e => {
  if (!drag) return;
  const dx = e.clientX - drag.sx, dy = e.clientY - drag.sy;
  if (drag.type === "new" && drag.touchPalette){
    const panelRect = palettePanel.getBoundingClientRect();
    const insidePanel = e.clientX >= panelRect.left && e.clientX <= panelRect.right &&
      e.clientY >= panelRect.top && e.clientY <= panelRect.bottom;
    const verticalScroll = Math.abs(dy) > 6 && Math.abs(dy) > Math.abs(dx);
    if (insidePanel && (drag.scrollingPalette || verticalScroll)){
      drag.scrollingPalette = true;
      drag.moved = true;
      drag.ghost.style.visibility = "hidden";
      palettePanel.scrollTop = drag.paletteScrollTop - dy;
      blackHole.classList.remove("ready");
      return;
    }
    if (!insidePanel || Math.abs(dx) > 6){
      drag.scrollingPalette = false;
      drag.ghost.style.visibility = "visible";
    }
  }
  const moveThreshold = drag.pointerType === "touch" ? 9 : 5;
  if (Math.hypot(dx, dy) > moveThreshold) drag.moved = true;
  if (drag.type === "new"){
    drag.ghost.style.left = e.clientX + "px";
    drag.ghost.style.top  = e.clientY + "px";
  } else if (drag.moved){
    const size = itemSize();
    const b = board.getBoundingClientRect();
    let x = clampPos(e.clientX - b.left - drag.offX);
    let y = clampPos(e.clientY - b.top  - drag.offY);
    x = Math.min(x, board.clientWidth  - size - 4);
    y = Math.min(y, board.clientHeight - size - 4);
    drag.it.x = x; drag.it.y = y;
    drag.it.el.style.left = x + "px";
    drag.it.el.style.top  = y + "px";
  }
  blackHole.classList.toggle("ready", drag.moved && isOverBlackHole(e.clientX, e.clientY));
});

function endDrag(e, cancelled){
  if (!drag) return;
  const d = drag; drag = null;
  blackHole.classList.remove("ready");
  if (d.type === "new"){
    d.ghost.remove();
    if (d.scrollingPalette) return;
    const b = board.getBoundingClientRect();
    const inside = e.clientX >= b.left && e.clientX <= b.right &&
                   e.clientY >= b.top  && e.clientY <= b.bottom;
    const tapped = !d.moved && performance.now() - d.t0 < 300;
    if (cancelled) return;
    if (d.moved && isOverBlackHole(e.clientX, e.clientY)) return;
    if (tapped){
      const now = performance.now();
      if (d.id === lastTapId && now - lastTapT < 400) return; // двойной тап — не дублировать
      lastTapId = d.id; lastTapT = now;
    } else {
      lastTapId = null;
    }
    let x, y;
    const size = itemSize();
    if (!inside && tapped){
      x = 10 + Math.random() * (board.clientWidth  - size - 24);
      y = 10 + Math.random() * (board.clientHeight - size - 24);
    } else if (inside){
      x = e.clientX - b.left - size/2;
      y = e.clientY - b.top  - size/2;
    } else return;
    tryMerge(addItem(d.id, x, y));
  } else {
    d.it.el.classList.remove("dragging");
    if (!d.moved && !cancelled && d.pointerType !== "mouse"){
      const now = performance.now();
      if (d.it === lastBoardTapItem && now - lastBoardTapT < 420){
        duplicateItem(d.it);
        lastBoardTapItem = null;
        lastBoardTapT = 0;
        suppressDblClickUntil = now + 650;
      } else {
        lastBoardTapItem = d.it;
        lastBoardTapT = now;
      }
    } else if (d.moved && !cancelled){
      lastBoardTapItem = null;
      if (isOverBlackHole(e.clientX, e.clientY)) consumeItem(d.it);
      else tryMerge(d.it);
    } else if (cancelled){
      lastBoardTapItem = null;
    }
  }
}
document.addEventListener("pointerup",    e => endDrag(e, false));
document.addEventListener("pointercancel",e => endDrag(e, true));

function duplicateItem(it){
  const size = itemSize();
  addItem(it.id, it.x + size + 12, it.y + 10);
}

// двойной клик мышью или двойной тап по элементу — создать одну копию рядом
board.addEventListener("dblclick", e => {
  if (performance.now() < suppressDblClickUntil) return;
  const el = e.target.closest(".item");
  if (!el) return;
  const it = items.find(i => i.el === el);
  if (!it) return;
  duplicateItem(it);
});

