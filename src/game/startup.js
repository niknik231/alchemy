// region: STARTUP
// ---------- Старт ----------
if (!discoveryChain.length) startNewDiscoveryChain();
else updateChainButton();
renderPalette();
requestAnimationFrame(() => {
  const n = BASE.length, gap = window.matchMedia("(max-width:640px)").matches ? 82 : 110;
  const size = itemSize();
  const startX = board.clientWidth/2  - gap*(n-1)/2 - size/2;
  const startY = board.clientHeight/2 - size/2;
  BASE.forEach((id,i) => addItem(id, startX + i*gap, startY));
});
