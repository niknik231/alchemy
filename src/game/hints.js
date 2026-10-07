// region: HINTS
let hintTimer = null;
let hintPicks = [];
function notify(text, ms){
  hintbar.textContent = text;
  hintbar.classList.add("show");
  clearTimeout(hintTimer);
  hintTimer = setTimeout(() => hintbar.classList.remove("show"), ms || 2400);
}
function notifyHTML(html, ms){
  hintbar.innerHTML = html;
  hintbar.classList.add("show");
  clearTimeout(hintTimer);
  hintTimer = setTimeout(() => hintbar.classList.remove("show"), ms || 2400);
}
// Детерминированное заполнение подсказки: прежние доступные варианты сохраняются,
// а открытый элемент заменяется только одним новым.
function strHash(s){
  let h = 2166136261;
  for (let i = 0; i < s.length; i++){ h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
function mulberry32(a){
  return function(){
    a |= 0; a = a + 0x6D2B79F5 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

