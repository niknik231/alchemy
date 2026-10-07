import fs from "node:fs";
import vm from "node:vm";

const html = fs.readFileSync(new URL("../index.html", import.meta.url), "utf8");
const script = html.slice(html.indexOf("<script>") + 8, html.lastIndexOf("</script>"));
new vm.Script(script);

const dataStart = html.indexOf("const APP_VERSION");
const validationCall = "validateElementClues();";
const dataEnd = html.indexOf(validationCall) + validationCall.length;
const warnings = [];
const context = { console: { log() {}, warn: (...args) => warnings.push(args.join(" ")), error: (...args) => warnings.push(args.join(" ")) } };
vm.createContext(context);
vm.runInContext(
  html.slice(dataStart, dataEnd) + 
  ";globalThis.__game={APP_VERSION,BASE,E,R,CATS,CAT_OF,ELEMENT_CLUES,IMPORTED_ALCHEMY_GAME};",
  context
);

const { APP_VERSION, BASE, E, R, CATS, CAT_OF, ELEMENT_CLUES, IMPORTED_ALCHEMY_GAME } = context.__game;
const errors = [];
const ids = new Set(Object.keys(E));
const keyFor = (a, b) => a < b ? `${a} ${b}` : `${b} ${a}`;
const normalize = value => String(value).toLocaleLowerCase("ru-RU").replace(/ё/g, "е").replace(/[^а-яa-z0-9]+/g, " ").trim();

if (JSON.stringify([...BASE]) !== JSON.stringify(["water", "fire", "earth", "air"])) errors.push("Изменён набор базовых элементов");
if (!/^\d+\.\d+\.\d+$/.test(APP_VERSION)) errors.push("Некорректная версия приложения");

const pairResults = new Map();
for (const [raw, result] of R) {
  const [a, b] = raw.split(" ");
  if (!ids.has(a) || !ids.has(b) || !ids.has(result)) errors.push(`Неизвестный id в рецепте ${raw} -> ${result}`);
  const key = keyFor(a, b);
  if (pairResults.has(key) && pairResults.get(key) !== result) errors.push(`Пара ${key} даёт два результата`);
  pairResults.set(key, result);
}

const categoryMembership = new Map(Object.keys(E).map(id => [id, []]));
for (const [catId, , categoryIds] of CATS) {
  for (const id of categoryIds) {
    if (!ids.has(id)) errors.push(`Неизвестный элемент ${id} в категории ${catId}`);
    else categoryMembership.get(id).push(catId);
  }
}
for (const [id, categories] of categoryMembership) {
  if (categories.length !== 1) errors.push(`${id}: категорий ${categories.length}`);
  if (CAT_OF[id] !== categories[0]) errors.push(`${id}: расходится индекс категории`);
}

const clueValues = new Map();
for (const [id, [name, icon]] of Object.entries(E)) {
  const clue = String(ELEMENT_CLUES[id] || "").trim();
  if (!icon) errors.push(`${id}: отсутствует иконка`);
  if (!clue) errors.push(`${id}: отсутствует намёк`);
  if (clueValues.has(clue)) errors.push(`${id}: повтор намёка ${clueValues.get(clue)}`);
  clueValues.set(clue, id);
}

const reachable = new Set(BASE);
for (let pass = 0; pass < ids.size; pass++) {
  let changed = false;
  for (const [raw, result] of R) {
    const [a, b] = raw.split(" ");
    if (reachable.has(a) && reachable.has(b) && !reachable.has(result)) {
      reachable.add(result);
      changed = true;
    }
  }
  if (!changed) break;
}
for (const id of ids) if (!reachable.has(id)) errors.push(`${id}: недостижим из базовых элементов`);

if (warnings.length) errors.push(...warnings.map(value => `Встроенная проверка: ${value}`));
if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  const importedRecipes = IMPORTED_ALCHEMY_GAME.reduce((sum, row) => sum + row[5].length, 0);
  console.log(JSON.stringify({
    version: APP_VERSION,
    elements: ids.size,
    recipes: R.length,
    uniqueRecipePairs: pairResults.size,
    categories: CATS.length,
    clues: Object.keys(ELEMENT_CLUES).length,
    importedElements: IMPORTED_ALCHEMY_GAME.length,
    importedRecipes,
    reachable: reachable.size,
    status: "ok"
  }, null, 2));
}
