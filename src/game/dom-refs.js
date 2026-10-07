// region: DOM_REFS
const board    = document.getElementById("board");
const palette  = document.getElementById("palette");
const palettePanel = palette.closest("aside");
const counter  = document.getElementById("counter");
const hintbar  = document.getElementById("hintbar");
const popup    = document.getElementById("popup");
const blackHole= document.getElementById("blackHole");
const menuWrap = document.getElementById("menuWrap");
const btnMenu  = document.getElementById("btnMenu");
const appMenu  = document.getElementById("appMenu");
const settingsModal = document.getElementById("settingsModal");
const showUnavailableElements = document.getElementById("showUnavailableElements");
const chainModal = document.getElementById("chainModal");
const chainBody = document.getElementById("chainBody");
const btnChain = document.getElementById("btnChain");
document.getElementById("appVersion").textContent = APP_VERSION;
showUnavailableElements.checked = settings.showUnavailableElements;

const tip = document.createElement("div");
tip.id = "tip";
document.body.appendChild(tip);
function hideTip(){ tip.classList.remove("show"); }

const itemSize = () => window.matchMedia("(max-width:640px)").matches ? 56 : 76;
const mergeRadius = () => itemSize() * 62 / 76;
const items = [];   // {id, x, y, el}
let zTop = 1;
let drag = null;
let lastTapId = null, lastTapT = 0;
let lastBoardTapItem = null, lastBoardTapT = 0, suppressDblClickUntil = 0;

