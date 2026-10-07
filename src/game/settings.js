// region: SETTINGS
function setMenuOpen(open){
  appMenu.classList.toggle("open", open);
  btnMenu.setAttribute("aria-expanded", String(open));
  btnMenu.setAttribute("aria-label", open ? "Закрыть меню" : "Открыть меню");
}
function openSettings(){
  setMenuOpen(false);
  showUnavailableElements.checked = settings.showUnavailableElements;
  settingsModal.classList.add("open");
  showUnavailableElements.focus();
}
function closeSettings(){ settingsModal.classList.remove("open"); }
btnMenu.addEventListener("click", e => {
  e.stopPropagation();
  setMenuOpen(!appMenu.classList.contains("open"));
});
menuWrap.addEventListener("click", e => e.stopPropagation());
document.addEventListener("click", () => setMenuOpen(false));
document.getElementById("btnSettings").addEventListener("click", openSettings);
document.getElementById("btnSettingsClose").addEventListener("click", closeSettings);
settingsModal.addEventListener("click", e => { if (e.target === settingsModal) closeSettings(); });
showUnavailableElements.addEventListener("change", () => {
  settings.showUnavailableElements = showUnavailableElements.checked;
  saveSettings();
  renderPalette();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape"){
    setMenuOpen(false);
    closeSettings();
    closeDiscoveryChain();
  }
});

document.getElementById("btnReset").addEventListener("click", () => {
  setMenuOpen(false);
  if (confirm("Начать заново? Все открытия будут потеряны.")){
    localStorage.removeItem("alchemy.discovered");
    localStorage.removeItem(DISCOVERED_RECIPES_KEY);
    localStorage.removeItem(DISCOVERY_CHAIN_KEY);
    location.reload();
  }
});

