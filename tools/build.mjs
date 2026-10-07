// Собирает единый index.html из исходников в src/.
//   node tools/build.mjs          — записать index.html
//   node tools/build.mjs --check  — только проверить, что index.html соответствует src/
import fs from "node:fs";

const root = new URL("../", import.meta.url);
const read = path => fs.readFileSync(new URL(path, root), "utf8").replace(/\r\n/g, "\n");

// Порядок важен: файлы склеиваются в один <script> и выполняются последовательно.
const SCRIPTS = [
  "src/game/app-meta.js",
  "src/data/elements.js",
  "src/data/icons.js",
  "src/data/recipes.js",
  "src/data/imported.js",
  "src/game/indexes.js",
  "src/data/categories.js",
  "src/data/clues.js",
  "src/game/state.js",
  "src/game/save-migrations.js",
  "src/game/dom-refs.js",
  "src/game/utilities.js",
  "src/game/board.js",
  "src/game/hints.js",
  "src/game/discovery-chain.js",
  "src/game/merge.js",
  "src/game/drag-drop.js",
  "src/game/controls.js",
  "src/game/codex.js",
  "src/game/tooltips.js",
  "src/game/settings.js",
  "src/game/startup.js"
];

const NOTICE = "<!-- Собрано из src/ командой node tools/build.mjs. Не редактировать вручную. -->";

function includeOnce(html, marker, content){
  const parts = html.split(marker);
  if (parts.length !== 2) throw new Error(`Маркер ${marker} должен встречаться в шаблоне ровно один раз`);
  return parts[0] + content + parts[1];
}

let html = read("src/index.html");
if (!html.startsWith("<!DOCTYPE html>\n")) throw new Error("Шаблон должен начинаться с <!DOCTYPE html>");
html = html.replace("<!DOCTYPE html>\n", `<!DOCTYPE html>\n${NOTICE}\n`);
html = includeOnce(html, "<!-- build:styles -->", `<style>\n${read("src/styles.css")}</style>`);
html = includeOnce(html, "<!-- build:scripts -->",
  `<script>\n"use strict";\n\n${SCRIPTS.map(read).join("")}</script>`);

const outUrl = new URL("index.html", root);
if (process.argv.includes("--check")) {
  const current = fs.existsSync(outUrl) ? fs.readFileSync(outUrl, "utf8").replace(/\r\n/g, "\n") : "";
  if (current !== html) {
    console.error("index.html не соответствует src/. Запустите: node tools/build.mjs");
    process.exitCode = 1;
  } else console.log("index.html актуален");
} else {
  fs.writeFileSync(outUrl, html);
  console.log(`index.html собран: ${SCRIPTS.length} JS-файлов, ${Buffer.byteLength(html)} байт`);
}
