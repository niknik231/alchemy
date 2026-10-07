// region: CONTROLS
// ---------- Кнопки ----------
document.getElementById("btnHint").addEventListener("click", showHint);
btnChain.addEventListener("click", openDiscoveryChain);
document.getElementById("btnChainClose").addEventListener("click", closeDiscoveryChain);
chainModal.addEventListener("click", e => { if (e.target === chainModal) closeDiscoveryChain(); });
chainBody.addEventListener("click", e => {
  const action = e.target.closest("[data-chain-action]");
  if (action?.dataset.chainAction === "new") startNewDiscoveryChain();
});

