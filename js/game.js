"use strict";

// region: APP_META
const APP_VERSION = "1.18.0";

// region: DATA_CORE
// ---------- Данные ----------
const BASE = ["water","fire","earth","air"];
const E = {
  water:["Вода","💧"],        fire:["Огонь","🔥"],       earth:["Земля","🌍"],     air:["Воздух","🌬️"],
  steam:["Пар","♨️"],         cloud:["Облако","☁️"],      mud:["Грязь","🟫"],       lava:["Лава","🟠"],
  energy:["Энергия","🔋"],    dust:["Пыль","🌪️"],         stone:["Камень","🪨"],    metal:["Металл","🔩"],
  sea:["Море","🌊"],          sky:["Небо","🌤️"],          sun:["Солнце","☀️"],      rain:["Дождь","🌧️"],
  rainbow:["Радуга","🌈"],    lightning:["Молния","⚡"],   plant:["Растение","🌱"],
  swamp:["Болото","🐸"],      life:["Жизнь","🧬"],        human:["Человек","🧑"],   tree:["Дерево","🌳"],
  forest:["Лес","🌲"],        wood:["Древесина","🪵"],    coal:["Уголь","⚫"],        sand:["Песок","⌛"],
  glass:["Стекло","🪟"],       brick:["Кирпич","🧱"],      house:["Дом","🏠"],         wheel:["Колесо","🛞"],
  mechanism:["Механизм","⚙️"], sword:["Меч","🗡️"],         gold:["Золото","🪙"],       philstone:["Философский камень","🔮"],
  diamond:["Алмаз","💎"],     fish:["Рыба","🐟"],         bird:["Птица","🐦"],      lizard:["Ящерица","🦎"],
  dragon:["Дракон","🐉"],
  volcano:["Вулкан","🌋"],    engine:["Паровоз","🚂"],    city:["Город","🏙️"],
  civilization:["Цивилизация","🏛️"], magic:["Магия","✨"], wizard:["Волшебник","🧙"],
  knight:["Рыцарь","🛡️"],      gunpowder:["Порох","🧂"],   explosion:["Взрыв","💥"],
  mountain:["Гора","⛰️"],      snow:["Снег","❄️"],
  ice:["Лёд","🧊"],           river:["Река","🏞️"],        flower:["Цветок","🌸"],     fruit:["Фрукт","🍎"],
  animal:["Животное","🐾"],   livestock:["Скот","🐑"],    wool:["Шерсть","🧶"],      fabric:["Ткань","🧵"],
  clothes:["Одежда","👕"],    boat:["Лодка","⛵"],         ship:["Корабль","🚢"],     electricity:["Электричество","🔌"],
  wire:["Провод","➰"],        lamp:["Лампа","💡"],         computer:["Компьютер","💻"], internet:["Интернет","🌐"],
  robot:["Робот","🤖"],       cyborg:["Киборг","🦾"],      rocket:["Ракета","🚀"],    moon:["Луна","🌙"],
  star:["Звезда","⭐"],        space:["Космос","🌌"],       time:["Время","⏳"],       astronaut:["Космонавт","🧑‍🚀"],
  alien:["Инопланетянин","👽"], universe:["Вселенная","🪐"],
  salt:["Соль","🧂"], saltwater:["Солёная вода","🌊"], glacier:["Ледник","🧊"], iceberg:["Айсберг","🧊"],
  fog:["Туман","🌫️"], storm:["Гроза","⛈️"], hurricane:["Ураган","🌀"], flood:["Наводнение","🌊"],
  oasis:["Оазис","🏝️"], clay:["Глина","🟤"], ceramic:["Керамика","🏺"], crystal:["Кристалл","🔷"],
  copper:["Медь","🟠"], bronze:["Бронза","🥉"], steel:["Сталь","🩶"], magnet:["Магнит","🧲"],
  compass:["Компас","🧭"], cave:["Пещера","🕳️"], canyon:["Каньон","🏜️"], island:["Остров","🏝️"],
  algae:["Водоросли","🪸"], moss:["Мох","🌿"], mushroom:["Гриб","🍄"], insect:["Насекомое","🐞"],
  bee:["Пчела","🐝"], honey:["Мёд","🍯"], butterfly:["Бабочка","🦋"], egg:["Яйцо","🥚"],
  chicken:["Курица","🐔"], milk:["Молоко","🥛"], cheese:["Сыр","🧀"], field:["Поле","🌾"],
  grain:["Зерно","🌾"], flour:["Мука","⚪"], bread:["Хлеб","🍞"], dough:["Тесто","🫓"],
  cake:["Торт","🎂"], wine:["Вино","🍷"], juice:["Сок","🧃"], tea:["Чай","🍵"],
  coffee:["Кофе","☕"], seed:["Семя","🌰"], garden:["Сад","🪴"], vegetable:["Овощ","🥕"],
  salad:["Салат","🥗"], paper:["Бумага","📄"], book:["Книга","📕"], library:["Библиотека","📚"],
  ink:["Чернила","🖤"], pen:["Перо","🖋️"], map:["Карта","🗺️"], bridge:["Мост","🌉"],
  road:["Дорога","🛣️"], cart:["Телега","🛒"], bicycle:["Велосипед","🚲"], car:["Автомобиль","🚗"],
  airplane:["Самолёт","✈️"], airport:["Аэропорт","🛫"], harbor:["Порт","⚓"], factory:["Завод","🏭"],
  tool:["Инструмент","🛠️"], hammer:["Молот","🔨"], clock:["Часы","🕰️"], music:["Музыка","🎵"],
  art:["Искусство","🎨"], battery:["Батарея","🔋"], motor:["Мотор","⚙️"], radio:["Радио","📻"],
  television:["Телевизор","📺"], camera:["Камера","📷"], phone:["Телефон","☎️"], smartphone:["Смартфон","📱"],
  satellite:["Спутник","🛰️"], telescope:["Телескоп","🔭"], microscope:["Микроскоп","🔬"], scientist:["Учёный","🧑‍🔬"],
  science:["Наука","🧪"], laboratory:["Лаборатория","⚗️"], bacteria:["Бактерия","🦠"], virus:["Вирус","🦠"],
  medicine:["Лекарство","💊"], vaccine:["Вакцина","💉"], hospital:["Больница","🏥"], genetics:["Генетика","🧬"],
  clone:["Клон","👥"], village:["Деревня","🛖"], farm:["Ферма","🚜"], market:["Рынок","🏪"],
  money:["Деньги","💵"], bank:["Банк","🏦"], school:["Школа","🏫"], university:["Университет","🎓"],
  government:["Государство","🏛️"], law:["Закон","⚖️"], peace:["Мир","🕊️"], planet:["Планета","🌎"],
  comet:["Комета","☄️"], galaxy:["Галактика","🌌"], blackhole:["Чёрная дыра","⚫"], portal:["Портал","🌀"]
};
// region: ICONS
// Авторские SVG-иконки для образов, которых нет среди стандартных эмодзи.
const ICONS = {
  earth:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M6 25Q18 18 32 21Q46 17 58 25V52H6Z" fill="#81583d"/><path d="M6 25Q18 18 32 21Q46 17 58 25" fill="none" stroke="#d0a06d" stroke-width="5" stroke-linecap="round"/><path d="M11 36h42M13 45h38" stroke="#5c3b2b" stroke-width="3" opacity=".55"/><path d="M32 23l-5 10 7 5-5 9" fill="none" stroke="#43291f" stroke-width="3" stroke-linecap="round"/></svg>`,
  dust:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M45 8L24 39" stroke="#bd8650" stroke-width="6" stroke-linecap="round"/><path d="M15 35Q25 32 33 40L24 54Q12 51 8 43Z" fill="#d8a55f" stroke="#8d5b32" stroke-width="2"/><path d="M15 39l11 10M21 36l10 8" stroke="#8d5b32" stroke-width="2"/><circle cx="40" cy="38" r="3" fill="#c9b6a2"/><circle cx="50" cy="32" r="2.5" fill="#d7c6b3"/><circle cx="53" cy="44" r="4" fill="#bca994"/><circle cx="40" cy="49" r="2" fill="#e2d4c3"/></svg>`,
  swamp:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><ellipse cx="33" cy="45" rx="25" ry="10" fill="#3e8f79"/><path d="M11 44Q31 36 55 44Q38 50 11 44Z" fill="#65b5a0" opacity=".7"/><path d="M16 43V16M23 42V11M49 43V18" stroke="#8a6b35" stroke-width="3" stroke-linecap="round"/><path d="M16 22q-8-5-7-10q8 1 9 8M23 18q8-6 9-11q-9 0-11 8M49 26q7-5 7-10q-8 1-9 8" fill="#719d45"/><path d="M12 29h8M19 24h8M45 31h8" stroke="#97bf58" stroke-width="3" stroke-linecap="round"/></svg>`,
  mud:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M10 38Q7 27 18 23Q22 12 34 18Q45 13 49 24Q61 29 54 40Q56 52 42 51Q32 58 23 51Q8 53 10 38Z" fill="#744934"/><path d="M17 32q8-8 17-5M37 42q8-5 14-1" fill="none" stroke="#a97555" stroke-width="4" stroke-linecap="round"/><ellipse cx="26" cy="42" rx="5" ry="3" fill="#513024" opacity=".7"/></svg>`,
  lava:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M5 52L27 14Q31 8 36 16L59 52Z" fill="#493943"/><path d="M21 24l8 5 7-8 8 9" fill="#78606a"/><path d="M32 25Q25 35 29 43Q31 49 21 54H45Q38 48 39 41Q40 33 32 25Z" fill="#e63f2e"/><path d="M33 29Q29 38 33 43Q34 47 29 52H39Q35 47 36 41Q38 35 33 29Z" fill="#ff9f2f"/></svg>`,
  steam:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M18 54Q8 44 18 34Q28 24 18 13M33 55Q23 45 33 34Q43 23 33 9M48 53Q38 43 48 33Q57 24 48 15" fill="none" stroke="#e6edf4" stroke-width="6" stroke-linecap="round" opacity=".88"/></svg>`,
  gunpowder:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M13 15Q32 10 51 15V52Q32 57 13 52Z" fill="#8a5833" stroke="#4c2d20" stroke-width="3"/><path d="M13 21Q32 26 51 21M13 46Q32 41 51 46" fill="none" stroke="#c38a4f" stroke-width="4"/><path d="M9 18h46M9 49h46" stroke="#4d4650" stroke-width="5" stroke-linecap="round"/><circle cx="32" cy="34" r="11" fill="#2d2528"/><path d="M25 32q0-7 7-7t7 7q0 5-3 7v4h-8v-4q-3-2-3-7Z" fill="#eee7d4"/><circle cx="29" cy="32" r="2" fill="#2d2528"/><circle cx="35" cy="32" r="2" fill="#2d2528"/><path d="M30 38h4" stroke="#2d2528" stroke-width="2"/></svg>`,
  clay:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M8 43Q10 27 22 25Q26 15 39 19Q52 19 56 35Q60 48 44 52H20Q7 52 8 43Z" fill="#b76546" stroke="#77402f" stroke-width="3"/><path d="M14 40Q28 35 51 39M17 47Q32 43 47 46" fill="none" stroke="#d58a68" stroke-width="3" stroke-linecap="round"/><path d="M35 21l-4 9 6 4-4 8" fill="none" stroke="#713b2d" stroke-width="2.5" stroke-linecap="round"/></svg>`,
  sand:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M5 49Q17 28 31 34Q42 17 59 45V53H5Z" fill="#d8a94d"/><path d="M9 47Q23 38 38 43Q48 45 57 41" fill="none" stroke="#f1cf75" stroke-width="3" stroke-linecap="round"/><g fill="#9f7132"><circle cx="18" cy="49" r="1.5"/><circle cx="28" cy="40" r="1.4"/><circle cx="43" cy="48" r="1.5"/><circle cx="51" cy="40" r="1.2"/></g></svg>`,
  oasis:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M4 50Q18 37 33 41Q48 35 60 49V56H4Z" fill="#d8ae55"/><ellipse cx="34" cy="47" rx="17" ry="7" fill="#42b8c8"/><path d="M16 44Q18 29 20 16M50 43Q48 28 47 18" fill="none" stroke="#82512f" stroke-width="4" stroke-linecap="round"/><path d="M20 17q-10 0-13 7q9 2 14-3q-1-9 5-13q3 8-3 13q9-4 14 1q-7 7-16 2M47 19q-9-3-14 3q7 6 14 1q2-9 9-11q1 8-6 12q8-1 11 5q-8 4-14-3" fill="#3f8f4b"/></svg>`,
  seed:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M13 40Q10 22 28 14Q48 12 51 30Q52 48 34 53Q18 55 13 40Z" fill="#9a6538" stroke="#5e3b25" stroke-width="3"/><path d="M31 17q-5 12 2 21" fill="none" stroke="#d4a168" stroke-width="3" stroke-linecap="round"/><path d="M33 38q2 9-7 16M33 42q8-5 13 1" fill="none" stroke="#72a94a" stroke-width="3" stroke-linecap="round"/></svg>`,
  saltwater:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M32 6Q13 29 13 42a19 19 0 0 0 38 0Q51 29 32 6Z" fill="#42aee9" stroke="#b9e9ff" stroke-width="2"/><path d="M18 42q12-7 28 0q-12 11-28 0Z" fill="#197eb9" opacity=".7"/><g fill="#fff" stroke="#c9e4ee" stroke-width="1"><path d="M23 31h6v6h-6Z"/><path d="M37 37h7v7h-7Z"/><path d="M30 45h5v5h-5Z"/></g></svg>`,
  glass:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M15 8h36l-3 44-13-4-11 8-9-7Z" fill="#9edbea" fill-opacity=".38" stroke="#d8f6ff" stroke-width="3"/><path d="M23 14h18M20 21l20 25M43 12L29 49" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".72"/><path d="M36 48l12 4-5-11Z" fill="#68bdd4" opacity=".65"/></svg>`,
  dough:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M5 49h54v8H5Z" fill="#95643b"/><path d="M12 43Q12 28 25 27Q30 17 42 22Q55 25 53 41Q49 50 31 50Q15 50 12 43Z" fill="#ead4a5" stroke="#b99a68" stroke-width="3"/><path d="M20 36q12-7 25 0M25 43q8-4 16 0" fill="none" stroke="#f8ebc8" stroke-width="3" stroke-linecap="round"/><g fill="#fff1d4"><circle cx="10" cy="45" r="1.5"/><circle cx="53" cy="48" r="1.5"/><circle cx="18" cy="52" r="1.2"/></g></svg>`,
  coal:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M8 39L17 17l19-8 19 15-3 23-18 9-20-5Z" fill="#20232a" stroke="#08090c" stroke-width="3"/><path d="M17 17l17 13L55 24M34 30v26M14 51l20-21" fill="none" stroke="#555b66" stroke-width="3"/><path d="M36 9l-2 21 18 17" fill="none" stroke="#858b94" stroke-width="2" opacity=".55"/><g fill="#2a2d34"><circle cx="8" cy="53" r="3"/><circle cx="56" cy="51" r="2"/></g></svg>`,
  hurricane:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M10 29Q22 8 47 16Q59 20 58 31Q43 21 31 29Q20 37 9 34" fill="#dce9f3"/><path d="M54 37Q43 58 18 50Q6 46 6 35Q21 45 33 37Q44 29 55 32" fill="#91bad4"/><path d="M20 32q8-11 19-4q9 7 1 15q-8 8-17 1q-7-6-3-12Z" fill="#eef7fb"/><ellipse cx="32" cy="36" rx="6" ry="4" fill="#334f68"/></svg>`,
  ink:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M12 49Q24 19 53 8Q49 35 21 50Z" fill="#e8e1d2" stroke="#8d8578" stroke-width="2"/><path d="M20 49L49 14M27 39l-10-2M34 31l-9-4M41 23l-8-4" fill="none" stroke="#67625b" stroke-width="2.5" stroke-linecap="round"/><path d="M46 48q0-6 6-13q6 7 6 13a6 6 0 0 1-12 0Z" fill="#17141d"/></svg>`,
  iceberg:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M5 36h54v20H5Z" fill="#287ea7"/><path d="M13 36L25 9l9 10 7-5 10 22Z" fill="#e6f7ff" stroke="#9ed9ed" stroke-width="2"/><path d="M13 36l11 20h24l3-20Z" fill="#76c4df" opacity=".8"/><path d="M25 9l2 27M41 14l-6 22M25 56l8-20 8 20" fill="none" stroke="#b9e7f5" stroke-width="2"/></svg>`,
  universe:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><ellipse cx="32" cy="33" rx="27" ry="13" fill="none" stroke="#8d70d8" stroke-width="5" transform="rotate(-18 32 33)"/><ellipse cx="32" cy="33" rx="17" ry="7" fill="none" stroke="#d39be8" stroke-width="4" transform="rotate(-18 32 33)"/><circle cx="32" cy="33" r="6" fill="#fff0a6"/><g fill="#eef2ff"><path d="M10 12l2 5 5 2-5 2-2 5-2-5-5-2 5-2Z"/><path d="M52 42l1.5 4 4 1.5-4 1.5-1.5 4-1.5-4-4-1.5 4-1.5Z"/><circle cx="48" cy="13" r="2"/><circle cx="14" cy="49" r="2"/></g></svg>`,
  life:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M7 39h12l5-12 8 25 7-17h18" fill="none" stroke="#65d67d" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M33 30Q31 17 43 11q4 13-8 20M31 31Q19 27 17 16q13-1 16 11" fill="#73c95c" stroke="#3e9340" stroke-width="2"/><path d="M33 31v21" stroke="#3e9340" stroke-width="3"/></svg>`,
  village:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M5 31l12-11 12 11v22H5ZM25 28l13-13 14 13v25H25ZM43 35l8-8 9 8v18H43Z" fill="#d9b277" stroke="#78523b" stroke-width="2"/><path d="M3 31l14-13 14 13M23 28l15-15 16 15M41 35l10-10 11 10" fill="none" stroke="#9e493c" stroke-width="5"/><path d="M12 40h8v13M33 37h9v16M49 42h6" fill="none" stroke="#76513a" stroke-width="3"/><path d="M4 55q25-5 56 0" stroke="#6a9448" stroke-width="4"/></svg>`,
  canyon:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M4 10h22l-4 14 5 9-8 23H4ZM60 10H38l4 14-5 9 8 23h15Z" fill="#ad5a3c"/><path d="M5 20h17M7 35h16M42 19h17M40 37h18" stroke="#e18a55" stroke-width="4"/><path d="M29 56q-4-16 3-25q7 11 3 25Z" fill="#3aa7c7"/><path d="M26 10l-4 14 5 9M38 10l4 14-5 9" fill="none" stroke="#713b31" stroke-width="3"/></svg>`,
  cyborg:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M12 31Q12 10 32 8Q52 10 52 31v13L42 56H22L12 44Z" fill="#d6a27d" stroke="#6f5e58" stroke-width="2"/><path d="M32 8Q52 10 52 31v13L42 56H32Z" fill="#8795a2"/><path d="M36 17h11l5 9-5 10H36Z" fill="#4d5b68" stroke="#c7d3dc" stroke-width="2"/><circle cx="43" cy="27" r="5" fill="#ef4056"/><circle cx="23" cy="28" r="3" fill="#322b2b"/><path d="M24 44h17M32 9v47M46 40l6 4" stroke="#4e4544" stroke-width="3"/><path d="M38 49h9v5" fill="none" stroke="#d5e1e8" stroke-width="2"/></svg>`,
  crystal:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M8 52l8-27 11-9 7 12 9-19 12 17 1 26Z" fill="#85cbea" stroke="#d4f3ff" stroke-width="2"/><path d="M16 25l10 27M27 16l-1 36M43 9l-4 43M55 26L39 52" fill="none" stroke="#4f8fbd" stroke-width="2"/><path d="M8 52h48" stroke="#6d65b5" stroke-width="4"/></svg>`,
  copper:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M14 45Q7 27 20 17Q35 6 48 18Q59 31 49 45Q39 58 24 51Q12 46 18 32Q23 20 35 22Q46 24 45 35Q44 44 34 45Q25 45 24 37Q23 30 31 28" fill="none" stroke="#c86b35" stroke-width="6" stroke-linecap="round"/><path d="M49 45l8 8" stroke="#e39a60" stroke-width="5" stroke-linecap="round"/><path d="M19 18q4 5 9 1M45 20q-5 4-2 9" fill="none" stroke="#54a177" stroke-width="3"/></svg>`,
  motor:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M10 20h39v31H10Z" fill="#527a93" stroke="#263f50" stroke-width="3"/><path d="M15 15h29v8H15ZM14 27h30M14 34h30M14 41h30" fill="none" stroke="#9ab3c2" stroke-width="3"/><circle cx="50" cy="35" r="10" fill="#35576b" stroke="#a8c2d0" stroke-width="3"/><circle cx="50" cy="35" r="4" fill="#d9a54c"/><path d="M60 35h4M18 51v6M42 51v6" stroke="#293b47" stroke-width="4"/></svg>`,
  moss:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M8 49Q8 31 21 28Q27 16 41 22Q55 24 57 43Q52 54 32 55Q14 55 8 49Z" fill="#777b75" stroke="#4d514d" stroke-width="3"/><path d="M10 41q7-11 14-4q4-15 13-5q8-10 16 1q5 5 3 12q-9-4-15 2q-8-8-14 0q-9-6-17 1Z" fill="#4e9b45"/><g fill="#85c86b"><circle cx="19" cy="39" r="4"/><circle cx="32" cy="34" r="5"/><circle cx="46" cy="38" r="4"/><circle cx="36" cy="46" r="4"/></g></svg>`,
  flour:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M15 18q17 6 34 0l6 35q-23 8-46 0Z" fill="#b99265" stroke="#6f5136" stroke-width="3"/><path d="M15 18q17-9 34 0q-16 7-34 0Z" fill="#68462f"/><path d="M18 18q14-8 28 0q-13 5-28 0Z" fill="#f2ead8"/><path d="M22 18q8-11 20 0Z" fill="#fffaf0"/><path d="M16 28h34M13 48q20 6 39 0" stroke="#d4b487" stroke-width="3"/><path d="M29 33q4-5 8 0v9h-8Z" fill="#8c6948" opacity=".7"/></svg>`,
  science:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M5 23L32 9l27 14-27 14Z" fill="#26395e" stroke="#90a8d1" stroke-width="2"/><path d="M17 31v13q15 11 30 0V31" fill="#314a78" stroke="#90a8d1" stroke-width="2"/><path d="M59 23v21" stroke="#d7ae4d" stroke-width="3"/><circle cx="59" cy="47" r="4" fill="#e4bd5b"/><path d="M32 22l4 5-4 5-4-5Z" fill="#e8d787"/></svg>`,
  pen:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M11 52Q16 23 50 7Q53 28 24 51Z" fill="#e9e2d5" stroke="#8c8579" stroke-width="2"/><path d="M20 50L48 11M27 40l-11-3M34 32l-10-4M41 23l-9-4M18 53l9-2" fill="none" stroke="#65615c" stroke-width="2.5" stroke-linecap="round"/></svg>`,
  cave:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M4 55Q5 23 22 11Q39 0 56 19Q62 31 60 55Z" fill="#6f6762" stroke="#3e3937" stroke-width="3"/><path d="M17 55Q16 32 29 24Q42 18 51 34Q55 43 53 55Z" fill="#17151a"/><path d="M24 13l4 14 5-10 5 12 5-14" fill="#8f8580"/><path d="M9 35l10-4M49 23l8 5M8 47l8 2" stroke="#a79a92" stroke-width="3"/></svg>`,
  garden:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M4 48q27-9 56 0v10H4Z" fill="#6f984a"/><path d="M18 48V23" stroke="#7a5030" stroke-width="5"/><path d="M18 29Q6 29 8 17q9-10 17 0q10-7 15 3q2 12-11 13Z" fill="#4f9b45"/><g stroke="#4e823a" stroke-width="2"><path d="M38 50V38M48 50V34M56 50V40"/></g><g><circle cx="38" cy="36" r="5" fill="#e96e86"/><circle cx="48" cy="32" r="5" fill="#f2c84b"/><circle cx="56" cy="38" r="5" fill="#8d78d6"/></g><path d="M30 58q8-8 18-10" fill="none" stroke="#d5c49e" stroke-width="4"/></svg>`,
  steel:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M9 10h46v10H39v24h16v10H9V44h16V20H9Z" fill="#8fa2ae" stroke="#43545e" stroke-width="3"/><path d="M16 15h32M16 49h32M32 21v22" stroke="#d4e0e6" stroke-width="3"/><circle cx="32" cy="15" r="2" fill="#52636d"/><circle cx="32" cy="49" r="2" fill="#52636d"/></svg>`,
  cart:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M8 20h37l-4 25H13Z" fill="#a66b3d" stroke="#5d3c28" stroke-width="3"/><path d="M12 28h31M16 21l3 23M28 21v23M40 21l-5 23" stroke="#d49a5e" stroke-width="3"/><circle cx="18" cy="49" r="9" fill="#765037" stroke="#35271f" stroke-width="3"/><circle cx="18" cy="49" r="3" fill="#c28a51"/><circle cx="39" cy="49" r="9" fill="#765037" stroke="#35271f" stroke-width="3"/><circle cx="39" cy="49" r="3" fill="#c28a51"/><path d="M44 25l18-10M43 32l19-8" stroke="#7e5435" stroke-width="4" stroke-linecap="round"/></svg>`,
  fabric:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M10 13h42v34L38 56 10 48Z" fill="#7e73c8" stroke="#473f82" stroke-width="3"/><path d="M18 13v37M28 13v39M38 13v42M48 13v38M10 22h42M10 32h42M10 42h42" stroke="#b8afe9" stroke-width="1.5" opacity=".75"/><path d="M38 56V43h14Z" fill="#5f56a9"/><path d="M12 15l38 32" stroke="#ddd8ff" stroke-width="2" opacity=".5"/></svg>`,
  field:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M4 24Q20 17 32 21Q46 16 60 24V56H4Z" fill="#b78638"/><path d="M4 24Q18 18 32 21Q47 17 60 24" fill="none" stroke="#77a748" stroke-width="7"/><path d="M32 22L17 56M32 22L29 56M32 22L43 56M32 22L57 56" fill="none" stroke="#f1cc63" stroke-width="5"/><path d="M32 22L23 56M32 22L36 56M32 22L50 56" fill="none" stroke="#8c612c" stroke-width="3"/><circle cx="51" cy="12" r="7" fill="#f7d35b"/></svg>`,
  university:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M5 24L32 8l27 16Z" fill="#c5b58f" stroke="#635b4c" stroke-width="3"/><path d="M9 26h46v6H9ZM12 32h7v19h-7Zm16 0h8v19h-8Zm17 0h7v19h-7ZM7 52h50v6H7Z" fill="#ded4b8" stroke="#716855" stroke-width="2"/><circle cx="32" cy="20" r="4" fill="#7b6e52"/></svg>`,
  farm:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M8 27l22-17 22 17v29H8Z" fill="#b84f45" stroke="#64352f" stroke-width="3"/><path d="M5 28l25-20 25 20" fill="none" stroke="#e3d5bc" stroke-width="5"/><path d="M22 36h16v20H22Z" fill="#6f412e"/><path d="M25 39l10 14M35 39L25 53" stroke="#d9a56d" stroke-width="3"/><path d="M45 42q7-7 13 0v10H45Z" fill="#f1eee5" stroke="#3e3a38" stroke-width="2"/><circle cx="49" cy="44" r="2" fill="#292929"/><path d="M3 54h58M5 47h13M8 43v14M16 43v14" stroke="#d6b06b" stroke-width="3"/></svg>`,
  charcoal:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M9 42l8-25 12 4-8 27ZM25 47l7-30 13 3-7 30ZM40 48l7-24 10 5-7 23Z" fill="#292b30" stroke="#0d0e11" stroke-width="3"/><path d="M14 24l11 4M30 25l12 3M45 32l10 4" stroke="#686b72" stroke-width="2"/><path d="M9 53q23-7 48 0" stroke="#44464c" stroke-width="4"/></svg>`,
  ash:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M7 52q8-21 19-12q5-17 15-4q10-2 16 16Z" fill="#777680" stroke="#3e3d46" stroke-width="3"/><path d="M14 48q15-8 36 0M22 41l5 6M40 39l-4 8" stroke="#b5b3bc" stroke-width="2"/><circle cx="18" cy="31" r="2" fill="#aaa8b1"/><circle cx="36" cy="24" r="3" fill="#8d8b95"/><circle cx="49" cy="32" r="2" fill="#c4c2c9"/></svg>`,
  rubber:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M9 22q20-12 42 0v25q-21 11-42 0Z" fill="#35363b" stroke="#111216" stroke-width="3"/><path d="M13 27q18-8 34 0M15 42q16 8 32 0" fill="none" stroke="#71747c" stroke-width="3"/><path d="M44 19q9 7 10 17" fill="none" stroke="#d2a85d" stroke-width="3" stroke-linecap="round"/></svg>`,
  plywood:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M8 18l42-7 6 35-42 8Z" fill="#c58b4e" stroke="#694428" stroke-width="3"/><path d="M10 23l42-7M12 31l42-7M13 47l42-7" stroke="#f0bd77" stroke-width="3"/><path d="M20 24q9 5 17-3M25 41q8-6 17-2" fill="none" stroke="#83562f" stroke-width="2"/></svg>`,
  asphalt:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M7 13h50l-6 44H13Z" fill="#34363c" stroke="#15161a" stroke-width="3"/><path d="M29 17h7l3 13h-9l-1 12h10l3 11H23Z" fill="#f1cf56"/><g fill="#777a82"><circle cx="17" cy="25" r="2"/><circle cx="48" cy="20" r="2"/><circle cx="47" cy="43" r="2"/><circle cx="16" cy="47" r="2"/></g></svg>`,
  plastic:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M22 8h20v8l5 6v32H17V22l5-6Z" fill="#72c5db" fill-opacity=".55" stroke="#d5f5ff" stroke-width="3"/><path d="M22 16h20M21 31h22M24 38h16v10H24Z" fill="none" stroke="#438da5" stroke-width="2"/><circle cx="49" cy="49" r="6" fill="#ef6f65"/><path d="M45 49h8M49 45v8" stroke="#fff" stroke-width="2"/></svg>`,
  varnish:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M12 18h32v36H12Z" fill="#b86b35" stroke="#5d3824" stroke-width="3"/><path d="M9 18h38v8H9ZM18 12h20v6H18Z" fill="#e1a15e" stroke="#704528" stroke-width="2"/><path d="M20 35q9-8 17 0q-8 4-17 12Z" fill="#ffe0a0"/><path d="M48 17l8 34" stroke="#d8bd8b" stroke-width="4" stroke-linecap="round"/></svg>`,
  table:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M7 18h50v12H7Z" fill="#a96c3d" stroke="#5e3b27" stroke-width="3"/><path d="M14 30v26M50 30v26M11 53h10M43 53h10" stroke="#68422b" stroke-width="5"/><path d="M13 22h38" stroke="#d69b61" stroke-width="3"/></svg>`,
  submarine:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M7 37q8-17 30-15q14 1 20 15q-8 14-27 14Q12 50 7 37Z" fill="#d6a33f" stroke="#6f5528" stroke-width="3"/><path d="M27 22v-9h13v6M35 13V8h9" fill="none" stroke="#77643d" stroke-width="4"/><circle cx="24" cy="37" r="5" fill="#83cae4"/><circle cx="39" cy="37" r="5" fill="#83cae4"/><path d="M57 30v14l6 5V25Z" fill="#bc7e31"/></svg>`,
  gas:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M17 19h30v37H17Z" fill="#de5b50" stroke="#722e2b" stroke-width="3"/><path d="M24 9h16v10H24ZM21 9h22" fill="none" stroke="#c9d0d5" stroke-width="4"/><path d="M32 29q-8 10-8 16a8 8 0 0 0 16 0q0-6-8-16Z" fill="#ffd057"/></svg>`,
  wind_turbine:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M31 27h4l4 31H25Z" fill="#d9e6ec" stroke="#70828c" stroke-width="2"/><circle cx="33" cy="25" r="5" fill="#f5fbff" stroke="#70828c" stroke-width="2"/><path d="M31 21L18 5q-4 13 10 20M38 25l21-5q-8 13-21 10M31 30L19 50q-4-15 9-22" fill="#b8d8e5" stroke="#6f8f9d" stroke-width="2"/></svg>`,
  pipeline:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M6 25h52v16H6Z" fill="#7f8d96" stroke="#34434b" stroke-width="3"/><path d="M15 19v28M49 19v28" stroke="#c4d0d6" stroke-width="5"/><circle cx="32" cy="17" r="8" fill="#b96945" stroke="#5c3428" stroke-width="3"/><path d="M32 9v16M24 17h16" stroke="#ead0a5" stroke-width="3"/></svg>`,
  skeleton:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="13" r="9" fill="#eee9d6" stroke="#77736a" stroke-width="2"/><path d="M32 22v27M20 29h24M22 34q10 10 20 0M24 40q8 8 16 0M32 49L20 59M32 49l12 10" fill="none" stroke="#eee9d6" stroke-width="5" stroke-linecap="round"/><circle cx="29" cy="12" r="2" fill="#555"/><circle cx="35" cy="12" r="2" fill="#555"/></svg>`,
  mayor:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="14" r="10" fill="#d6a27d"/><path d="M15 56q2-29 17-29t17 29Z" fill="#314d7a"/><path d="M21 29l25 22" stroke="#e8d7a5" stroke-width="7"/><circle cx="37" cy="43" r="4" fill="#d9a63e"/><path d="M24 8q8-8 17 1" fill="none" stroke="#4f352c" stroke-width="6"/></svg>`,
  moonbase:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M4 52q27-12 56 0v7H4Z" fill="#8e8c94"/><path d="M12 48q2-22 19-22t20 22Z" fill="#dce8ee" stroke="#6f818b" stroke-width="3"/><path d="M31 27v21M17 39h28" stroke="#8ca7b5" stroke-width="2"/><path d="M47 17h10v31M47 17l5-7 5 7" fill="none" stroke="#d8d9df" stroke-width="3"/><circle cx="10" cy="14" r="5" fill="#d9d7df"/></svg>`,
  dark_matter:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="12" fill="#101119"/><ellipse cx="32" cy="32" rx="26" ry="13" fill="none" stroke="#795fb8" stroke-width="4" transform="rotate(-18 32 32)"/><path d="M10 9l2 5 5 2-5 2-2 5-2-5-5-2 5-2ZM52 42l2 4 4 2-4 2-2 4-2-4-4-2 4-2Z" fill="#edf0ff"/><path d="M17 47q15-13 31-2" fill="none" stroke="#c4a7e8" stroke-width="3"/></svg>`,
  phoenix:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M32 54q-5-15 1-25q-9 7-18 1q8-3 13-13q-1-8 5-12q8 9 4 18q11-7 22 0q-10 3-16 14q-3 9-11 17Z" fill="#ef4d2f" stroke="#8d291f" stroke-width="2"/><path d="M31 50q0-12 6-19q-2 12 7 13q-6 8-13 6Z" fill="#ffc43d"/><circle cx="35" cy="14" r="2" fill="#241d22"/></svg>`,
  electric_guitar:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M13 49q-8-10 2-18q7-5 13 0l19-20 7 7-20 19q5 8-2 15q-11 10-19-3Z" fill="#d64f67" stroke="#612b3a" stroke-width="3"/><path d="M29 35l21-21M47 10l8 8M19 40l8 8" stroke="#f2d08e" stroke-width="2"/><circle cx="22" cy="42" r="4" fill="#34293a"/></svg>`,
  bass_guitar:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M14 49q-7-9 1-17q6-5 13-1l20-22 7 6-21 22q4 8-3 15q-10 8-17-3Z" fill="#4d8fb5" stroke="#24485f" stroke-width="3"/><path d="M29 35l22-23M18 39l10 10M23 35l7 7" stroke="#d8edf5" stroke-width="2"/><circle cx="22" cy="44" r="5" fill="#203744"/></svg>`,
  amplifier:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M8 11h48v45H8Z" fill="#302e35" stroke="#0d0c10" stroke-width="3"/><path d="M12 15h40v9H12Z" fill="#aa9360"/><circle cx="18" cy="19" r="2" fill="#e2d45c"/><circle cx="26" cy="19" r="2" fill="#e2d45c"/><circle cx="32" cy="39" r="13" fill="#17161b" stroke="#77717d" stroke-width="3"/><circle cx="32" cy="39" r="5" fill="#4c4852"/></svg>`,
  recording_studio:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M7 9h50v46H7Z" fill="#33445c" stroke="#162233" stroke-width="3"/><path d="M12 14h23v36H12Z" fill="#7192a6"/><path d="M42 18v20M36 28h12M38 42h8" stroke="#e0d5b6" stroke-width="4" stroke-linecap="round"/><path d="M16 28q4-8 8 0t8 0M16 37q4-8 8 0t8 0" fill="none" stroke="#9ee2d9" stroke-width="2"/></svg>`,
  band:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><circle cx="18" cy="18" r="7" fill="#d7a07b"/><circle cx="32" cy="14" r="7" fill="#b97f62"/><circle cx="47" cy="19" r="7" fill="#e2b18c"/><path d="M7 50q1-20 11-20t11 20M21 50q1-23 11-23t11 23M36 50q1-19 11-19t10 19" fill="#6f5aa6" stroke="#31274f" stroke-width="2"/><path d="M8 45h48" stroke="#e0b957" stroke-width="3"/><circle cx="32" cy="43" r="7" fill="#292b35" stroke="#d8d4df" stroke-width="2"/></svg>`,
  galaxy:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><g fill="none" stroke-linecap="round"><path d="M7 37q9-22 33-18q20 3 14 19q-6 15-27 11q-16-3-10-15q6-12 20-7q10 4 4 11q-5 7-13 3" stroke="#785bd2" stroke-width="8"/><path d="M9 40q20-10 47-15" stroke="#65d8d0" stroke-width="4"/></g><ellipse cx="34" cy="35" rx="7" ry="5" fill="#ffd34e"/><g fill="#eef7ff"><circle cx="11" cy="15" r="2"/><circle cx="49" cy="11" r="2"/><circle cx="55" cy="48" r="2"/><circle cx="13" cy="53" r="1.5"/></g></svg>`,
  aurora:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><g fill="none" stroke-linecap="round"><path d="M8 12h31q10 0 10 7t-10 7H18q-10 0-10 7t11 7h36" stroke="#20d89f" stroke-width="7"/><path d="M20 6h26q10 0 10 7t-9 7H30" stroke="#76eac0" stroke-width="4"/></g><g fill="#dff7ff"><circle cx="12" cy="9" r="2"/><circle cx="52" cy="31" r="2"/><circle cx="38" cy="35" r="1.5"/></g><path d="M5 58l12-15l9 10l12-20l9 15l8-8l6 18Z" fill="#5b8fd0"/><path d="M30 58l8-25l9 15l8-8l6 18Z" fill="#9cdaf0"/><path d="M35 41l3-8l5 9Z" fill="#f3fbff"/></svg>`,
  powerplant:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M6 53h52v7H6Z" fill="#3b557c"/><path d="M8 53l5-29h14l5 29Zm28 0l3-23h13l5 23Z" fill="#dfeef3"/><path d="M13 24q7 5 14 0m12 6q7 4 13 0" fill="none" stroke="#87a9ba" stroke-width="3"/><path d="M31 7l-8 17h9l-5 16l16-22h-9l6-11Z" fill="#ffd64a"/><path d="M8 53V39h20m14 14V42h16" fill="none" stroke="#527493" stroke-width="4"/></svg>`,
  refinery:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M5 54h54v6H5Z" fill="#344e72"/><path d="M8 33h15v21H8Zm22-17h14v38H30Zm18 21h11v17H48Z" fill="#dce9ed"/><path d="M34 8h7v8m-9 9h12m-12 9h12m-21 12h9m12-16h10v7M16 33V20h15" fill="none" stroke="#527793" stroke-width="3"/><path d="M52 19q-7-8 1-15q9 8 1 15Z" fill="#ff7048"/><path d="M52 16q-3-4 1-8q4 4 1 8Z" fill="#ffd04e"/></svg>`,
  ore:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M7 39l8-23l19-9l22 13l2 24l-17 13l-25-5Z" fill="#626873" stroke="#343943" stroke-width="3"/><path d="M15 32l9-6l8 5l10-9l8 4M21 47l10-6l9 5l12-7" fill="none" stroke="#ffd24e" stroke-width="6" stroke-linecap="round"/><g fill="#ffe88c"><circle cx="21" cy="28" r="3"/><circle cx="43" cy="23" r="3"/><circle cx="46" cy="45" r="3"/></g></svg>`,
  meteorite:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M5 32q9-24 35-27q13 3 20 15q-15-5-28 6q-12 10-15 25Z" fill="#ff7a3d"/><path d="M10 34q7-17 24-23q10 1 17 9q-13 1-22 10q-8 8-12 17Z" fill="#ffc447"/><path d="M18 35l8-14l16-4l15 12l-4 18l-17 10l-16-8Z" fill="#616976" stroke="#303640" stroke-width="2"/><g fill="#343b47"><circle cx="31" cy="31" r="5"/><circle cx="44" cy="42" r="4"/></g></svg>`,
  flood:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M14 36V21l14-11l15 11v19Z" fill="#f1cf8a"/><path d="M10 23L28 8l18 15" fill="none" stroke="#dd5f58" stroke-width="6"/><path d="M24 29h8v13h-8Z" fill="#745044"/><path d="M2 37q8-7 16 0t16 0t16 0t14 0v24H2Z" fill="#1889bd"/><path d="M3 47q8-6 16 0t16 0t16 0t12 0M4 55q8-5 16 0t16 0t16 0" fill="none" stroke="#9ae8f2" stroke-width="3"/></svg>`,
  fern:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M14 58Q30 40 41 5" fill="none" stroke="#377d43" stroke-width="6" stroke-linecap="round"/><g fill="#64b84f" stroke="#2f743d" stroke-width="1.5"><path d="M36 17Q18 7 14 20q11 7 21 3Z"/><path d="M31 29Q12 19 9 33q11 7 21 2Z"/><path d="M26 41Q8 32 7 46q10 7 19 0Z"/><path d="M39 16q16-8 19 5q-10 7-20 2Z"/><path d="M35 28q18-8 20 5q-10 7-21 2Z"/><path d="M30 40q16-6 18 6q-10 6-19 0Z"/></g></svg>`,
  virus:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><g stroke="#bd4f8b" stroke-width="4" stroke-linecap="round"><path d="M32 3v11M32 50v11M3 32h11M50 32h11M11 11l8 8M45 45l8 8M53 11l-8 8M19 45l-8 8"/></g><g fill="#e283b5"><circle cx="32" cy="7" r="4"/><circle cx="32" cy="57" r="4"/><circle cx="7" cy="32" r="4"/><circle cx="57" cy="32" r="4"/><circle cx="13" cy="13" r="4"/><circle cx="51" cy="51" r="4"/><circle cx="51" cy="13" r="4"/><circle cx="13" cy="51" r="4"/></g><circle cx="32" cy="32" r="20" fill="#c64f8b" stroke="#82345d" stroke-width="3"/><g fill="#f4b5d5"><circle cx="25" cy="26" r="4"/><circle cx="39" cy="24" r="3"/><circle cx="38" cy="39" r="5"/><circle cx="23" cy="40" r="3"/></g></svg>`,
  cell:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M6 35Q5 15 24 8q23-8 34 13q11 22-9 35Q29 69 12 52Q7 46 6 35Z" fill="#79d7b8" stroke="#3d9b87" stroke-width="3"/><circle cx="37" cy="31" r="13" fill="#8068c0"/><circle cx="40" cy="28" r="4" fill="#d9cbf0"/><g fill="#ffc65c"><ellipse cx="20" cy="23" rx="7" ry="4" transform="rotate(-24 20 23)"/><ellipse cx="22" cy="46" rx="6" ry="3" transform="rotate(25 22 46)"/></g><path d="M12 36q6-8 13 0t12 0" fill="none" stroke="#3d9b87" stroke-width="2"/><g fill="#e9fff8"><circle cx="18" cy="34" r="2"/><circle cx="49" cy="43" r="3"/><circle cx="50" cy="19" r="2"/></g></svg>`,
  aqueduct:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M5 15h54v12H5Z" fill="#b9a17d" stroke="#6f604b" stroke-width="2"/><path d="M7 27h50v30H7Zm8 30V42a7 7 0 0 1 14 0v15Zm20 0V42a7 7 0 0 1 14 0v15Z" fill="#a98f6c" fill-rule="evenodd" stroke="#6f604b" stroke-width="2"/><path d="M6 18q9-5 18 0t18 0t16 0" fill="none" stroke="#55c8e8" stroke-width="5" stroke-linecap="round"/><path d="M9 31h46M10 47h7m11 0h9m11 0h7M18 27v7m14-7v7m15-7v7" stroke="#d7c29e" stroke-width="2"/></svg>`,
  concrete:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M8 19l33-9l15 11l-4 33l-34 2L7 43Z" fill="#aeb4ba" stroke="#5f666d" stroke-width="3"/><path d="M8 19l14 11l34-9M22 30l-4 26M22 30l19-20" fill="none" stroke="#dce1e4" stroke-width="3"/><path d="M18 39l6-3m7 10l7-4m5-13l6-2M31 19l5-2" stroke="#777f86" stroke-width="3" stroke-linecap="round"/><g fill="#eceff1"><circle cx="14" cy="27" r="2"/><circle cx="28" cy="35" r="2"/><circle cx="46" cy="37" r="2.5"/><circle cx="37" cy="51" r="2"/></g></svg>`,
  windmill:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M20 57l4-34h17l5 34Z" fill="#d8a866" stroke="#815b35" stroke-width="3"/><path d="M22 23l10-11l11 11Z" fill="#b84f45" stroke="#71322f" stroke-width="2"/><path d="M28 57V42h10v15M25 31h18M24 38h20" fill="none" stroke="#8b6037" stroke-width="3"/><circle cx="34" cy="24" r="5" fill="#f1cf76" stroke="#765431" stroke-width="2"/><g fill="#eee5d2" stroke="#7e725f" stroke-width="2"><path d="M31 20L16 5l-5 4l16 15Z"/><path d="M38 21L54 8l4 5l-17 13Z"/><path d="M37 28l14 17l-5 4l-13-18Z"/><path d="M30 28L12 42l-4-5l19-13Z"/></g></svg>`,
  driver:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M14 34l7-25h22l7 25Z" fill="#9fdcf0" stroke="#315b78" stroke-width="3"/><circle cx="32" cy="19" r="9" fill="#d9a078"/><path d="M22 17q10-13 20 0v3H22Z" fill="#284d73"/><path d="M26 12h12l6 5H20Z" fill="#3d6c98"/><circle cx="29" cy="20" r="1.3" fill="#3c302d"/><circle cx="35" cy="20" r="1.3" fill="#3c302d"/><path d="M26 33q6-9 12 0" fill="#315b78"/><path d="M6 36q0-5 6-5h40q6 0 6 5v16H6Z" fill="#e74f4f" stroke="#7f2e35" stroke-width="3"/><circle cx="32" cy="35" r="7" fill="none" stroke="#343b44" stroke-width="3"/><circle cx="16" cy="51" r="5" fill="#2e333b"/><circle cx="48" cy="51" r="5" fill="#2e333b"/><path d="M10 41h10m24 0h10" stroke="#ffd66a" stroke-width="4" stroke-linecap="round"/></svg>`,
  waterfall:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M5 51L17 17l11 9L39 7l20 44Z" fill="#718497" stroke="#3f5364" stroke-width="3"/><path d="M17 17l11 9L39 7l7 15l-9-4l-8 13l-7-6Z" fill="#dcebf1"/><path d="M27 27q7 3 13-5l4 6q-6 8-5 17q1 7 7 11H22q8-7 7-15q-1-8-2-14Z" fill="#51bfe1"/><path d="M26 34q5 3 12-4M25 55q8-6 15 0t15 0" fill="none" stroke="#b9f1f7" stroke-width="4" stroke-linecap="round"/></svg>`,
  algae:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M7 57q11-7 22 0t28 0" fill="none" stroke="#9b7548" stroke-width="6" stroke-linecap="round"/><g fill="none" stroke-linecap="round"><path d="M18 55q-9-11 1-21t-1-22" stroke="#2f9d63" stroke-width="7"/><path d="M32 56q10-12 0-23t3-25" stroke="#49b873" stroke-width="8"/><path d="M46 55q-9-10 0-20t2-22" stroke="#2d8f62" stroke-width="7"/></g><g fill="#75d08a"><ellipse cx="15" cy="28" rx="7" ry="3" transform="rotate(-35 15 28)"/><ellipse cx="35" cy="25" rx="7" ry="3" transform="rotate(35 35 25)"/><ellipse cx="45" cy="38" rx="7" ry="3" transform="rotate(-35 45 38)"/></g></svg>`,
  wax:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M8 22q0-7 8-9l30-5q9-1 10 7l2 29q1 8-8 10l-31 3q-9 1-10-8Z" fill="#f4bd42" stroke="#9b6a24" stroke-width="3"/><path d="M10 24q12 5 22-2q11-7 25-2l1 13q-7-5-13 2q-6 8-12-1q-7-9-12 1q-5 8-11 2Z" fill="#ffd96b"/><path d="M18 14l7 8m9-11l5 9m9-10l4 9" stroke="#ffe89b" stroke-width="3" stroke-linecap="round"/><path d="M46 34q7 8 7 13a7 7 0 0 1-14 0q0-5 7-13Z" fill="#f7c64f" stroke="#a66f25" stroke-width="2"/></svg>`,
  generator:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M13 18V9h33v9" fill="none" stroke="#38434d" stroke-width="6" stroke-linecap="round"/><rect x="7" y="17" width="50" height="38" rx="7" fill="#df5b45" stroke="#7b322b" stroke-width="3"/><rect x="13" y="24" width="20" height="21" rx="3" fill="#2f4658"/><circle cx="23" cy="34" r="7" fill="#92c9dd"/><circle cx="23" cy="34" r="3" fill="#2c3b46"/><path d="M39 25h12M39 31h12M39 37h12" stroke="#ffd36a" stroke-width="3" stroke-linecap="round"/><path d="M43 41l-5 8h6l-3 7l10-11h-6l4-4Z" fill="#ffe35a"/><circle cx="17" cy="56" r="4" fill="#30363d"/><circle cx="48" cy="56" r="4" fill="#30363d"/></svg>`,
  geology:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M7 43L15 17l19-9l22 14l2 25l-17 11l-25-5Z" fill="#778594" stroke="#3e4c59" stroke-width="3"/><path d="M12 29q14 8 25-2q10-8 19 0M9 40q14 8 27-1q12-9 21 0M15 51q13 5 24-3q10-7 17-2" fill="none" stroke="#d7a65a" stroke-width="5"/><path d="M39 7l16 12M47 4l11 8M47 13L29 37" stroke="#4b3b31" stroke-width="5" stroke-linecap="round"/><path d="M47 3l12 9l-4 7l-16-12Z" fill="#b9c4ca" stroke="#58656d" stroke-width="2"/></svg>`,
  dwarf:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M18 29Q20 8 34 3q14 10 13 28Z" fill="#d94d4d" stroke="#7e2c32" stroke-width="3"/><path d="M22 23q11-5 23 1" fill="none" stroke="#f27468" stroke-width="4"/><circle cx="32" cy="32" r="12" fill="#e0a47d"/><circle cx="28" cy="31" r="1.5" fill="#3d302b"/><circle cx="36" cy="31" r="1.5" fill="#3d302b"/><path d="M17 37q5 24 15 24t15-24q-7 5-15 0q-8 5-15 0Z" fill="#f2eee5" stroke="#a9a59f" stroke-width="2"/><circle cx="32" cy="36" r="4" fill="#d38f6a"/><path d="M22 54h20" stroke="#754735" stroke-width="6" stroke-linecap="round"/></svg>`,
  gravity:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M32 9q4-5 9-4" fill="none" stroke="#4d7b35" stroke-width="4" stroke-linecap="round"/><path d="M31 14q-10-8-18 1q-9 11 2 27q8 12 17 8q9 4 17-8q11-16 2-27q-8-9-19-1Z" fill="#e84c4c" stroke="#8e2c35" stroke-width="3"/><path d="M36 11q7-7 14-3q-4 8-14 7Z" fill="#67a94e"/><path d="M19 2v7M27 1v6M45 3v7M23 53v4M32 52v6M41 53v4" stroke="#88a6b8" stroke-width="3" stroke-linecap="round"/><ellipse cx="32" cy="61" rx="17" ry="3" fill="#536574" opacity=".55"/></svg>`,
  palace:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M6 54h52v7H6Z" fill="#c69239"/><path d="M10 28h44v27H10Z" fill="#f2d28a" stroke="#9c6b32" stroke-width="3"/><path d="M16 25q0-12 8-12t8 12Zm16 0q0-17 8-17t8 17Z" fill="#e1594f" stroke="#8b3431" stroke-width="2"/><circle cx="24" cy="12" r="3" fill="#ffd65a"/><circle cx="40" cy="7" r="3" fill="#ffd65a"/><path d="M16 33h7v18h-7Zm13 0h7v18h-7Zm13 0h7v18h-7Z" fill="#8cc9dd"/><path d="M8 28h48M5 55h54M12 30v25m40-25v25" stroke="#b37b35" stroke-width="3"/><path d="M26 55V42h12v13" fill="#9d6336"/></svg>`,
  delta:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M32 4q-8 15-3 25q3 6-8 12Q13 46 9 59h46q-4-13-12-18q-11-6-8-12q5-10-3-25Z" fill="#63aa62" stroke="#397547" stroke-width="3"/><path d="M32 5v22q0 8-10 14Q14 46 10 58M32 28q0 8 11 14q8 5 11 16M28 35l4 23m4-23l-4 23" fill="none" stroke="#4fc3e6" stroke-width="6" stroke-linecap="round"/><path d="M5 58q10-5 18 0t18 0t18 0" fill="none" stroke="#9ce9f3" stroke-width="4"/></svg>`,
  plank:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M5 20l49-9l5 31l-49 11Z" fill="#c98545" stroke="#704326" stroke-width="3"/><path d="M10 25l45-9M12 34l44-9M14 46l43-10" stroke="#e5ad6b" stroke-width="3"/><path d="M18 28q8 5 16-2m4 10q7-5 14-2M20 43q7-5 15-2" fill="none" stroke="#87542f" stroke-width="2"/><ellipse cx="14" cy="23" rx="4" ry="2" fill="#6e4429"/><path d="M54 12l5 30" stroke="#f1c58a" stroke-width="3"/></svg>`,
  oven:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><rect x="10" y="5" width="44" height="54" rx="5" fill="#d8dce0" stroke="#687078" stroke-width="3"/><rect x="15" y="20" width="34" height="31" rx="3" fill="#313b48"/><rect x="19" y="25" width="26" height="20" rx="2" fill="#784640"/><path d="M20 42q5-14 10 0q5-17 10 0" fill="#f0693e"/><path d="M18 15h28" stroke="#717a82" stroke-width="3" stroke-linecap="round"/><g fill="#3c464f"><circle cx="19" cy="12" r="3"/><circle cx="29" cy="12" r="3"/><circle cx="39" cy="12" r="3"/><circle cx="48" cy="12" r="3"/></g><path d="M19 54h26" stroke="#8d959c" stroke-width="3"/></svg>`,
  smoke:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><g fill="none" stroke-linecap="round"><path d="M30 59q-11-11 1-20q13-10 1-20Q20 9 34 3" stroke="#9da7b1" stroke-width="8"/><path d="M39 58q10-10 0-18q-10-9 1-17q9-7 2-15" stroke="#c2c9cf" stroke-width="6"/><path d="M22 54q-7-8 0-15q8-8 1-15" stroke="#737f8a" stroke-width="5"/></g></svg>`,
  dune:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M3 55q11-25 31-29q15-4 27 29Z" fill="#dfa94f" stroke="#9e6d2f" stroke-width="3"/><path d="M7 55q16-14 30-12q12 2 21 12Z" fill="#f5cd72"/><path d="M13 45q16-18 34-14M19 51q12-8 25-5" fill="none" stroke="#c58b3d" stroke-width="3" stroke-linecap="round"/><circle cx="49" cy="13" r="8" fill="#ffd24e"/><path d="M9 23q8-6 16 0" fill="none" stroke="#e9b85a" stroke-width="4" stroke-linecap="round"/></svg>`,
  iron:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M8 44l9-25l31-7l9 22l-12 19l-28 3Z" fill="#68727d" stroke="#343d46" stroke-width="3"/><path d="M17 19l14 10l17-17M31 29l14 24M17 56l14-27" fill="none" stroke="#939da6" stroke-width="3"/><path d="M21 23l10 7l12-5M23 48l9-5l10 4" fill="none" stroke="#dce2e6" stroke-width="3" stroke-linecap="round"/><g fill="#414a53"><circle cx="18" cy="38" r="3"/><circle cx="43" cy="34" r="4"/></g></svg>`,
  yogurt:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M11 24h42l-5 33H16Z" fill="#75bde0" stroke="#386986" stroke-width="3"/><ellipse cx="32" cy="24" rx="21" ry="8" fill="#e9f3f7" stroke="#52788d" stroke-width="3"/><ellipse cx="32" cy="23" rx="16" ry="5" fill="#fffdf4"/><path d="M39 22L52 6" stroke="#bcc4ca" stroke-width="5" stroke-linecap="round"/><ellipse cx="53" cy="6" rx="5" ry="3" fill="#dfe4e7" transform="rotate(-30 53 6)"/><path d="M20 36q12 7 24 0M19 44q13 7 26 0" fill="none" stroke="#a9dbed" stroke-width="3"/><circle cx="25" cy="23" r="2" fill="#f7f1df"/></svg>`,
  vinyl_record:`<svg class="game-icon" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="27" fill="#18171d" stroke="#55515e" stroke-width="2"/><circle cx="32" cy="32" r="11" fill="#d85b67"/><circle cx="32" cy="32" r="3" fill="#f3e7cb"/><circle cx="32" cy="32" r="20" fill="none" stroke="#6b6771"/><path d="M12 25q20-9 40 0M13 40q19 8 38 0" fill="none" stroke="#3d3a42" stroke-width="2"/></svg>`
};

// Крупные самостоятельные emoji-образы на прозрачном фоне.
// Без круглой подложки и без мелких поясняющих меток.
const FULL_ICON_MOTIFS = Object.freeze({
  limestone:"🪨", geology:"🔎",
  nebula:"☁️", multiverse:"🌌",
  chimney:"🏭", warehouse:"📦",
  lake:"🌊", dam:"🚧",
  vine:"🌿", herb:"🌱",
  sap:"💧", hydropower:"⚡",
  stove:"♨️", olympics:"🏅",
  iron:"🧲", alloy:"🔩",
  bark:"🪵", plank:"🪚",
  cement:"🧱", concrete:"🏗️",
  generator:"⚙️", mill:"🌾",
  government:"⚖", museum:"🎨",
  pulsar:"📡", dark_energy:"↗️",
  supernova:"⭐", big_bang:"💥",
  glacier:"🧊", sugar:"🍬",
  waterfall:"💦", park:"🏞️",
  yacht:"🛥️", sail:"⛵",
  laptop:"💻", code:"🧑‍💻",
  algae:"🦠", reef:"🪸",
  reed:"🎋", hay:"🟨",
  orbit:"🪐", space_station:"🛰️",
  biology:"🔬", molecule:"⚛️",
  meteor:"☄️", asteroid:"🌑",
  gravity:"🍎", wormhole:"🌀",
  pond:"🐸", lily:"🪷",
  stew:"🥩", pot:"🏺",
  wax:"🕯", spirit:"👻",
  nuclear_power:"☢️", physics:"🧪",
  palace:"👑", fortress:"🏰",
  windmill:"🌬️", cotton:"🧶", battery:"🔋", ecology:"♻️",
  rubber_tire:"🛞", skyscraper:"🏙️", frost:"❄️", website:"🌐",
  rover:"🚙", spaceship:"🚀", spacesuit:"👨‍🚀", smoke:"☁",
  porcelain:"🍶", yogurt:"🥣", cup:"🍵", delta:"🔺",
  aqueduct:"⛲", sailor:"⚓", song:"🎵", paint:"🖌️",
  tablet:"📱", astronomy:"🔭", chemistry:"⚗️", antibiotic:"💊",
  social_network:"🕸️", leaf:"🍃", oven:"🔥", dune:"🏜️",
  werewolf:"🐺", centaur:"🏹", griffin:"🦅", oil:"🛢",
  canal:"🛶", dwarf:"⛏️", ai:"🤖", programmer:"⌨️",
  driver:"🚗", spell:"✨", ball:"●", lighthouse:"💡",
  tunnel:"🚇", golem:"🗿"
});

function makeFullIcon(id, motif){
  const textSize = motif.length > 5 ? 43 : 50;
  return `<svg class="game-icon scene-icon" viewBox="0 0 64 64" aria-hidden="true">` +
    `<text x="32" y="51" text-anchor="middle" font-size="${textSize}" font-family="Segoe UI Emoji, Apple Color Emoji, sans-serif">${motif}</text>` +
    `</svg>`;
}

// region: RECIPES
const R = [
  // первичные сочетания
  ["air earth","dust"],   ["air fire","energy"],  ["air water","cloud"],  ["earth fire","lava"],
  ["earth water","mud"],  ["fire water","steam"],
  // природа
  ["cloud air","sky"],    ["cloud water","rain"], ["lava water","stone"], ["water water","sea"],
  ["fire sky","sun"],     ["rain sun","rainbow"], ["energy cloud","lightning"],["rain earth","plant"],
  ["water mud","swamp"],  ["lightning swamp","life"],["life earth","human"],["earth plant","tree"],
  ["tree tree","forest"], ["human tree","wood"], ["fire tree","coal"], ["stone stone","mountain"],
  ["cloud mountain","snow"], ["lava stone","volcano"], ["stone water","sand"], ["life sea","fish"],
  ["life sky","bird"], ["life stone","lizard"], ["fire lizard","dragon"],
  // цивилизация
  ["fire sand","glass"],  ["fire mud","brick"],   ["brick human","house"],["house house","city"],
  ["city human","civilization"],["fire stone","metal"],["stone wood","wheel"],["metal wheel","mechanism"],["steam mechanism","engine"],
  ["metal stone","sword"],["human sword","knight"],
  // тайны
  ["metal sun","gold"],   ["energy gold","philstone"],["philstone human","magic"],["human magic","wizard"],
  ["coal earth","diamond"],["coal dust","gunpowder"],["fire gunpowder","explosion"],
  // новые природные и живые формы
  ["snow water","ice"],["mountain rain","river"],["plant sun","flower"],["sun tree","fruit"],
  ["forest life","animal"],["animal human","livestock"],["livestock snow","wool"],
  // ремесло, транспорт и технологии
  ["mechanism wool","fabric"],["fabric human","clothes"],["sea wood","boat"],["boat mechanism","ship"],
  ["lightning metal","electricity"],["electricity metal","wire"],["electricity glass","lamp"],
  ["electricity mechanism","computer"],["city computer","internet"],["computer metal","robot"],
  ["human robot","cyborg"],["explosion metal","rocket"],
  // космос
  ["sky stone","moon"],["sky sun","star"],["sky star","space"],["mechanism sun","time"],
  ["human space","astronaut"],["life space","alien"],["space time","universe"],
  // расширение: природа и материалы
  ["sea sun","salt"],["salt water","saltwater"],["ice mountain","glacier"],["ice sea","iceberg"],
  ["cloud river","fog"],["cloud lightning","storm"],["air storm","hurricane"],["rain river","flood"],
  ["sand water","oasis"],["mud stone","clay"],["clay fire","ceramic"],["diamond glass","crystal"],
  ["metal volcano","copper"],["copper metal","bronze"],["coal metal","steel"],["electricity stone","magnet"],
  ["magnet metal","compass"],["mountain stone","cave"],["river stone","canyon"],["sea volcano","island"],
  // расширение: живой мир и хозяйство
  ["life water","algae"],["plant stone","moss"],["forest rain","mushroom"],["air animal","insect"],
  ["flower insect","bee"],["bee sun","honey"],["insect rainbow","butterfly"],["bird life","egg"],
  ["bird egg","chicken"],["livestock water","milk"],["milk time","cheese"],["earth human","field"],
  ["field plant","grain"],["grain stone","flour"],["fire flour","bread"],["flour water","dough"],
  ["dough fruit","cake"],["fruit time","wine"],["fruit water","juice"],["plant water","tea"],
  ["fire plant","coffee"],["earth fruit","seed"],["human seed","garden"],["garden plant","vegetable"],
  ["fruit vegetable","salad"],
  // расширение: знания, ремесло и транспорт
  ["water wood","paper"],["human paper","book"],["book house","library"],["coal water","ink"],
  ["ink metal","pen"],["paper river","map"],["river wood","bridge"],["city stone","road"],
  ["livestock wheel","cart"],["human wheel","bicycle"],["engine wheel","car"],["air engine","airplane"],
  ["airplane city","airport"],["city ship","harbor"],["city mechanism","factory"],["human metal","tool"],
  ["stone tool","hammer"],["mechanism time","clock"],["air human","music"],["human rainbow","art"],
  // расширение: технологии и наука
  ["electricity energy","battery"],["electricity wheel","motor"],["air electricity","radio"],["glass radio","television"],
  ["computer glass","camera"],["computer wire","phone"],["internet phone","smartphone"],["computer space","satellite"],
  ["glass space","telescope"],["glass life","microscope"],["computer human","scientist"],["book scientist","science"],
  ["house science","laboratory"],["life swamp","bacteria"],["air life","virus"],["plant science","medicine"],
  ["medicine virus","vaccine"],["city medicine","hospital"],["computer life","genetics"],["genetics human","clone"],
  // расширение: общество и дальний космос
  ["field house","village"],["house livestock","farm"],["city fruit","market"],["gold paper","money"],
  ["house money","bank"],["book city","school"],["school science","university"],["book civilization","government"],
  ["book government","law"],["civilization rainbow","peace"],["earth space","planet"],["ice space","comet"],
  ["star universe","galaxy"],["time universe","blackhole"],["blackhole magic","portal"]
];

// Большое расширение мира. Каждая запись: ID, название, иконка, ингредиенты и категория.
// Порядок записей поддерживает постепенное продвижение от простых явлений к сложным.
const EXPANSION = [
  // Погода, вода и рельеф
  ["dew","Роса","💦","rain","plant","sky"],
  ["frost","Иней","❄️","snow","fog","sky"],
  ["hail","Град","🌨️","storm","ice","sky"],
  ["tornado","Торнадо","🌪️","hurricane","earth","sky"],
  ["breeze","Бриз","🍃","air","flower","sky"],
  ["wind","Ветер","💨","air","energy","sky"],
  ["smoke","Дым","🌫️","fire","coal","elem"],
  ["ash","Пепел","🩶","fire","forest","geo"],
  ["geyser","Гейзер","♨️","steam","earth","elem"],
  ["hot_spring","Горячий источник","🧖","geyser","stone","elem"],
  ["waterfall","Водопад","🏞️","river","mountain","elem"],
  ["lake","Озеро","🌊","river","earth","elem"],
  ["pond","Пруд","🪷","water","garden","elem"],
  ["desert","Пустыня","🏜️","sand","sun","geo"],
  ["dune","Дюна","🏜️","sand","air","geo"],
  ["beach","Пляж","🏖️","sand","sea","geo"],
  ["delta","Дельта реки","🗺️","river","sea","geo"],
  ["reef","Риф","🪸","sea","island","geo"],
  ["coral","Коралл","🪸","reef","life","life"],
  ["aurora","Северное сияние","🌌","sky","energy","sky"],

  // Растения и растительные материалы
  ["grass","Трава","🌿","rain","field","life"],
  ["reed","Камыш","🌾","plant","swamp","life"],
  ["cactus","Кактус","🌵","plant","desert","life"],
  ["palm","Пальма","🌴","tree","oasis","life"],
  ["fern","Папоротник","🌿","plant","forest","life"],
  ["bamboo","Бамбук","🎋","grass","tree","life"],
  ["vine","Лоза","🌿","plant","tree","life"],
  ["rose","Роза","🌹","flower","garden","life"],
  ["sunflower","Подсолнух","🌻","flower","sun","life"],
  ["lotus","Лотос","🪷","flower","pond","life"],
  ["lily","Лилия","🪷","flower","water","life"],
  ["herb","Целебная трава","🌿","plant","medicine","life"],
  ["spice","Пряность","🌶️","herb","sun","food"],
  ["cotton","Хлопок","☁️","plant","cloud","craft"],
  ["sap","Сок дерева","💧","tree","water","craft"],
  ["rubber","Каучук","🟤","sap","sun","craft"],
  ["resin","Смола","🟠","tree","tool","craft"],
  ["bark","Кора","🪵","tree","stone","craft"],
  ["leaf","Лист","🍃","tree","air","life"],
  ["hay","Сено","🌾","grass","sun","food"],

  // Животные
  ["frog","Лягушка","🐸","animal","swamp","life"],
  ["snake","Змея","🐍","lizard","grass","life"],
  ["crocodile","Крокодил","🐊","lizard","swamp","life"],
  ["dinosaur","Динозавр","🦖","lizard","time","life"],
  ["fossil","Окаменелость","🦴","dinosaur","stone","geo"],
  ["mammoth","Мамонт","🦣","animal","ice","life"],
  ["bear","Медведь","🐻","animal","forest","life"],
  ["wolf","Волк","🐺","animal","moon","life"],
  ["dog","Собака","🐕","wolf","human","life"],
  ["cat","Кошка","🐈","animal","house","life"],
  ["horse","Лошадь","🐎","animal","field","life"],
  ["cow","Корова","🐄","livestock","grass","life"],
  ["pig","Свинья","🐖","livestock","mud","life"],
  ["goat","Коза","🐐","livestock","mountain","life"],
  ["duck","Утка","🦆","bird","pond","life"],
  ["eagle","Орёл","🦅","bird","mountain","life"],
  ["owl","Сова","🦉","bird","moon","life"],
  ["penguin","Пингвин","🐧","bird","ice","life"],
  ["dolphin","Дельфин","🐬","animal","sea","life"],
  ["whale","Кит","🐋","animal","saltwater","life"],

  // Еда и кухня
  ["butter","Масло","🧈","milk","mechanism","food"],
  ["yogurt","Йогурт","🥛","milk","bacteria","food"],
  ["icecream","Мороженое","🍨","milk","ice","food"],
  ["cocoa","Какао","🫘","seed","sun","food"],
  ["chocolate","Шоколад","🍫","cocoa","fire","food"],
  ["sugar","Сахар","🧊","juice","sun","food"],
  ["jam","Варенье","🍓","fruit","fire","food"],
  ["soup","Суп","🍲","vegetable","water","food"],
  ["meat","Мясо","🥩","livestock","tool","food"],
  ["stew","Рагу","🍲","soup","meat","food"],
  ["sausage","Колбаса","🌭","meat","salt","food"],
  ["sandwich","Бутерброд","🥪","bread","cheese","food"],
  ["pizza","Пицца","🍕","dough","cheese","food"],
  ["pasta","Макароны","🍝","dough","tool","food"],
  ["noodles","Лапша","🍜","pasta","water","food"],
  ["rice","Рис","🍚","grain","water","food"],
  ["porridge","Каша","🥣","grain","milk","food"],
  ["cookie","Печенье","🍪","dough","sugar","food"],
  ["pie","Пирог","🥧","dough","jam","food"],
  ["lemonade","Лимонад","🥤","juice","ice","food"],

  // Материалы
  ["charcoal","Древесный уголь","⚫","fire","wood","craft"],
  ["plank","Доска","🪵","wood","tool","craft"],
  ["glue","Клей","🧴","animal","resin","craft"],
  ["plywood","Фанера","🟫","plank","glue","craft"],
  ["limestone","Известняк","🪨","stone","salt","geo"],
  ["cement","Цемент","🧱","limestone","fire","craft"],
  ["concrete","Бетон","🧱","cement","water","craft"],
  ["petroleum","Нефть","🛢️","coal","time","geo"],
  ["oil","Масло машинное","🛢️","petroleum","factory","craft"],
  ["asphalt","Асфальт","⬛","oil","stone","craft"],
  ["plastic","Пластик","🧴","oil","fire","craft"],
  ["nylon","Нейлон","🧵","plastic","fabric","craft"],
  ["leather","Кожа","🟫","animal","tool","craft"],
  ["fur","Мех","🧥","animal","snow","craft"],
  ["rope","Верёвка","🪢","wool","tool","craft"],
  ["chain","Цепь","⛓️","steel","tool","craft"],
  ["porcelain","Фарфор","🏺","ceramic","glass","craft"],
  ["rubber_tire","Шина","🛞","rubber","wheel","craft"],
  ["paint","Краска","🎨","art","water","craft"],
  ["varnish","Лак","🧴","resin","oil","craft"],

  // Дом и ремесло
  ["chair","Стул","🪑","plank","human","craft"],
  ["table","Стол","🪑","plank","house","craft"],
  ["bed","Кровать","🛏️","wool","house","craft"],
  ["door","Дверь","🚪","wood","house","craft"],
  ["window","Окно","🪟","glass","house","craft"],
  ["chimney","Дымоход","🏭","smoke","house","craft"],
  ["stove","Печь","🔥","fire","house","craft"],
  ["oven","Духовка","♨️","fire","brick","craft"],
  ["pot","Горшок","🍲","ceramic","fire","craft"],
  ["cup","Чашка","☕","ceramic","water","craft"],
  ["bottle","Бутылка","🍾","glass","water","craft"],
  ["mirror","Зеркало","🪞","glass","human","craft"],
  ["soap","Мыло","🧼","oil","ash","craft"],
  ["wax","Воск","🕯️","honey","bee","craft"],
  ["candle","Свеча","🕯️","wax","fire","craft"],
  ["brush","Кисть","🖌️","paint","tool","craft"],
  ["scissors","Ножницы","✂️","steel","fabric","craft"],
  ["needle","Игла","🪡","metal","fabric","craft"],
  ["umbrella","Зонт","☂️","fabric","rain","craft"],
  ["backpack","Рюкзак","🎒","fabric","map","craft"],

  // Транспорт
  ["train","Поезд","🚆","engine","rail","transport"],
  ["rail","Рельсы","🛤️","steel","road","transport"],
  ["station","Вокзал","🚉","train","city","transport"],
  ["tram","Трамвай","🚋","train","electricity","transport"],
  ["bus","Автобус","🚌","car","city","transport"],
  ["truck","Грузовик","🚚","car","factory","transport"],
  ["tractor","Трактор","🚜","car","field","transport"],
  ["ambulance","Скорая помощь","🚑","car","hospital","transport"],
  ["firetruck","Пожарная машина","🚒","car","fire","transport"],
  ["taxi","Такси","🚕","car","money","transport"],
  ["motorcycle","Мотоцикл","🏍️","bicycle","motor","transport"],
  ["scooter","Электросамокат","🛴","bicycle","battery","transport"],
  ["submarine","Подводная лодка","🚤","ship","water","transport"],
  ["yacht","Яхта","⛵","boat","money","transport"],
  ["canoe","Каноэ","🛶","boat","human","transport"],
  ["sail","Парус","⛵","fabric","boat","craft"],
  ["helicopter","Вертолёт","🚁","airplane","motor","transport"],
  ["jet","Реактивный самолёт","🛩️","airplane","rocket","transport"],
  ["spaceship","Космический корабль","🚀","rocket","computer","transport"],
  ["rover","Планетоход","🤖","car","planet","transport"],

  // Энергетика и промышленность
  ["fuel","Топливо","⛽","oil","energy","tech"],
  ["gas","Газ","🔥","fuel","air","elem"],
  ["solar_panel","Солнечная панель","🔆","sun","glass","tech"],
  ["wind_turbine","Ветрогенератор","🌬️","wind","generator","tech"],
  ["hydropower","Гидроэнергия","💧","waterfall","generator","tech"],
  ["generator","Генератор","⚙️","motor","energy","tech"],
  ["powerplant","Электростанция","🏭","factory","energy","tech"],
  ["reactor","Реактор","☢️","science","energy","science"],
  ["nuclear_power","Атомная энергия","⚛️","reactor","generator","tech"],
  ["dam","Плотина","🌊","river","concrete","transport"],
  ["mine","Шахта","⛏️","mountain","tool","tech"],
  ["ore","Руда","🪨","stone","mine","geo"],
  ["iron","Железо","🔩","ore","fire","geo"],
  ["silver","Серебро","🥈","metal","moon","geo"],
  ["aluminum","Алюминий","🥫","ore","electricity","geo"],
  ["alloy","Сплав","🔩","metal","science","craft"],
  ["welding","Сварка","👨‍🏭","fire","steel","tech"],
  ["crane","Подъёмный кран","🏗️","mechanism","steel","tech"],
  ["pipeline","Трубопровод","〰️","oil","road","transport"],
  ["refinery","Нефтепереработка","🏭","oil","factory","tech"],

  // Цифровой мир
  ["keyboard","Клавиатура","⌨️","computer","pen","tech"],
  ["mouse","Компьютерная мышь","🖱️","computer","animal","tech"],
  ["monitor","Монитор","🖥️","computer","television","tech"],
  ["printer","Принтер","🖨️","computer","paper","tech"],
  ["scanner","Сканер","📠","computer","camera","tech"],
  ["speaker","Колонка","🔊","radio","music","tech"],
  ["microphone","Микрофон","🎙️","phone","music","tech"],
  ["headphones","Наушники","🎧","music","wire","tech"],
  ["tablet","Планшет","📱","computer","book","tech"],
  ["laptop","Ноутбук","💻","computer","battery","tech"],
  ["server","Сервер","🗄️","computer","factory","tech"],
  ["database","База данных","🗃️","computer","library","tech"],
  ["website","Сайт","🌐","internet","book","tech"],
  ["email","Электронная почта","📧","internet","pen","tech"],
  ["social_network","Социальная сеть","👥","internet","human","tech"],
  ["video","Видео","🎥","camera","television","culture"],
  ["game","Видеоигра","🎮","computer","art","culture"],
  ["code","Программный код","💻","computer","law","tech"],
  ["program","Программа","📦","code","tool","tech"],
  ["ai","Искусственный интеллект","🧠","code","life","tech"],

  // Наука и медицина
  ["physics","Физика","⚛️","science","mathematics","science"],
  ["chemistry","Химия","⚗️","science","laboratory","science"],
  ["biology","Биология","🧬","science","life","science"],
  ["astronomy","Астрономия","🔭","science","space","science"],
  ["geology","Геология","🪨","science","earth","science"],
  ["ecology","Экология","🌱","science","forest","science"],
  ["mathematics","Математика","➗","science","book","science"],
  ["atom","Атом","⚛️","microscope","energy","science"],
  ["molecule","Молекула","🧬","atom","water","science"],
  ["cell","Клетка","🦠","microscope","life","science"],
  ["organ","Орган","🫀","cell","animal","science"],
  ["heart","Сердце","❤️","organ","human","science"],
  ["brain","Мозг","🧠","organ","electricity","science"],
  ["skeleton","Скелет","💀","human","fossil","science"],
  ["blood","Кровь","🩸","human","water","science"],
  ["surgery","Хирургия","🩺","medicine","tool","science"],
  ["doctor","Врач","🧑‍⚕️","human","hospital","science"],
  ["nurse","Медсестра","👩‍⚕️","human","medicine","science"],
  ["pharmacy","Аптека","⚕️","medicine","market","science"],
  ["antibiotic","Антибиотик","💊","medicine","bacteria","science"],

  // Общество и профессии
  ["family","Семья","👨‍👩‍👧","human","house","civ"],
  ["child","Ребёнок","🧒","human","family","civ"],
  ["teacher","Учитель","🧑‍🏫","human","school","culture"],
  ["student","Ученик","🧑‍🎓","human","book","culture"],
  ["farmer","Фермер","🧑‍🌾","human","farm","civ"],
  ["baker","Пекарь","🧑‍🍳","human","bread","civ"],
  ["chef","Повар","👨‍🍳","human","soup","civ"],
  ["miner","Шахтёр","👷","human","mine","civ"],
  ["engineer","Инженер","🧑‍💻","human","mechanism","civ"],
  ["programmer","Программист","🧑‍💻","human","code","civ"],
  ["artist","Художник","🧑‍🎨","human","art","culture"],
  ["musician","Музыкант","🧑‍🎤","human","music","culture"],
  ["writer","Писатель","✍️","human","pen","culture"],
  ["pilot","Пилот","🧑‍✈️","human","airplane","civ"],
  ["sailor","Моряк","⚓","human","ship","civ"],
  ["driver","Водитель","🧑‍✈️","human","car","civ"],
  ["police","Полиция","👮","human","law","civ"],
  ["judge","Судья","🧑‍⚖️","law","government","civ"],
  ["mayor","Мэр","🏛️","government","city","civ"],
  ["king","Король","🤴","human","gold","civ"],

  // Культура и спорт
  ["language","Язык","🗣️","book","music","culture"],
  ["alphabet","Алфавит","🔤","language","pen","culture"],
  ["poem","Стихотворение","📜","language","art","culture"],
  ["story","Рассказ","📖","language","book","culture"],
  ["newspaper","Газета","📰","paper","city","culture"],
  ["theater","Театр","🎭","art","house","culture"],
  ["cinema","Кинотеатр","🎬","video","theater","culture"],
  ["museum","Музей","🏛️","art","city","culture"],
  ["festival","Фестиваль","🎉","music","city","culture"],
  ["dance","Танец","💃","music","life","culture"],
  ["sport","Спорт","🏃","human","energy","culture"],
  ["ball","Мяч","⚽","sport","rubber","culture"],
  ["football","Футбол","⚽","ball","field","culture"],
  ["basketball","Баскетбол","🏀","ball","city","culture"],
  ["tennis","Теннис","🎾","ball","tool","culture"],
  ["chess","Шахматы","♟️","game","king","culture"],
  ["medal","Медаль","🏅","sport","gold","culture"],
  ["trophy","Кубок","🏆","sport","metal","culture"],
  ["stadium","Стадион","🏟️","sport","city","culture"],
  ["olympics","Олимпиада","🔥","sport","peace","culture"],

  // Архитектура и инфраструктура
  ["tower","Башня","🗼","brick","sky","transport"],
  ["castle","Замок","🏰","stone","king","culture"],
  ["palace","Дворец","🏰","house","king","culture"],
  ["temple","Храм","🛕","house","peace","culture"],
  ["skyscraper","Небоскрёб","🏙️","glass","city","transport"],
  ["apartment","Многоквартирный дом","🏢","house","city","transport"],
  ["warehouse","Склад","🏭","house","factory","transport"],
  ["mill","Мельница","⚙️","wheel","grain","tech"],
  ["lighthouse","Маяк","🗼","lamp","harbor","transport"],
  ["tunnel","Тоннель","🚇","road","mountain","transport"],
  ["subway","Метро","🚇","train","tunnel","transport"],
  ["canal","Канал","🛶","river","tool","transport"],
  ["aqueduct","Акведук","🌉","bridge","water","transport"],
  ["fountain","Фонтан","⛲","water","park","culture"],
  ["park","Парк","🏞️","city","garden","culture"],
  ["zoo","Зоопарк","🦁","city","animal","culture"],
  ["greenhouse","Теплица","🏡","glass","garden","tech"],
  ["windmill","Ветряная мельница","🌬️","wind","mill","tech"],
  ["fortress","Крепость","🏰","castle","steel","culture"],
  ["monument","Памятник","🗿","stone","art","culture"],

  // Космос
  ["meteor","Метеор","☄️","stone","space","space"],
  ["meteorite","Метеорит","🪨","meteor","earth","space"],
  ["asteroid","Астероид","☄️","stone","universe","space"],
  ["nebula","Туманность","🌌","cloud","space","space"],
  ["supernova","Сверхновая","💥","star","explosion","space"],
  ["pulsar","Пульсар","✨","star","time","space"],
  ["quasar","Квазар","🌟","blackhole","star","space"],
  ["exoplanet","Экзопланета","🪐","planet","star","space"],
  ["orbit","Орбита","🛰️","planet","time","space"],
  ["gravity","Гравитация","🌀","planet","energy","space"],
  ["spacesuit","Скафандр","🧑‍🚀","clothes","space","space"],
  ["space_station","Космическая станция","🛰️","house","space","space"],
  ["moonbase","Лунная база","🌙","house","moon","space"],
  ["mars","Марс","🔴","planet","iron","space"],
  ["ufo","НЛО","🛸","alien","ship","space"],
  ["wormhole","Кротовая нора","🌀","blackhole","portal","space"],
  ["multiverse","Мультивселенная","🌌","universe","portal","space"],
  ["dark_matter","Тёмная материя","⚫","universe","gravity","space"],
  ["dark_energy","Тёмная энергия","✨","universe","energy","space"],
  ["big_bang","Большой взрыв","💥","universe","explosion","space"],

  // Мифы и волшебство
  ["ghost","Призрак","👻","human","time","myst"],
  ["spirit","Дух","🕯️","life","magic","myst"],
  ["fairy","Фея","🧚","butterfly","magic","myst"],
  ["elf","Эльф","🧝","human","forest","myst"],
  ["dwarf","Гном","⛏️","human","mountain","myst"],
  ["mermaid","Русалка","🧜","human","fish","myst"],
  ["centaur","Кентавр","🐎","human","horse","myst"],
  ["unicorn","Единорог","🦄","horse","magic","myst"],
  ["griffin","Грифон","🦅","eagle","magic","myst"],
  ["phoenix","Феникс","🔥","bird","fire","myst"],
  ["golem","Голем","🗿","clay","magic","myst"],
  ["zombie","Зомби","🧟","human","virus","myst"],
  ["vampire","Вампир","🧛","human","blood","myst"],
  ["werewolf","Оборотень","🐺","human","moon","myst"],
  ["potion","Зелье","🧪","magic","medicine","myst"],
  ["spell","Заклинание","📜","magic","book","myst"],
  ["wand","Волшебная палочка","🪄","magic","wood","myst"],
  ["treasure","Сокровище","💰","gold","map","myst"],
  ["pirate","Пират","🏴‍☠️","sailor","treasure","myst"],
  ["kraken","Кракен","🐙","animal","ship","myst"]
];

for (const [id, name, icon, a, b] of EXPANSION){
  E[id] = [name, icon];
  R.push([`${a} ${b}`, id]);
}

// Музыкальная ветка: инструменты, запись, выступления и рок-культура.
const MUSIC_EXPANSION = [
  ["guitar","Гитара","🎸","wood","music","culture"],
  ["electric_guitar","Электрогитара","🎸","guitar","electricity","culture"],
  ["bass_guitar","Бас-гитара","🎸","guitar","metal","culture"],
  ["drums","Ударная установка","🥁","leather","wood","culture"],
  ["piano","Фортепиано","🎹","wood","mechanism","culture"],
  ["synthesizer","Синтезатор","🎛️","piano","electricity","tech"],
  ["violin","Скрипка","🎻","wood","art","culture"],
  ["saxophone","Саксофон","🎷","metal","music","culture"],
  ["trumpet","Труба","🎺","bronze","music","culture"],
  ["accordion","Аккордеон","🪗","air","music","culture"],
  ["amplifier","Усилитель","🔊","speaker","electricity","tech"],
  ["recording_studio","Студия звукозаписи","🎙️","house","microphone","culture"],
  ["song","Песня","🎵","music","poem","culture"],
  ["album","Музыкальный альбом","💿","song","recording_studio","culture"],
  ["concert","Концерт","🎤","musician","stadium","culture"],
  ["band","Музыкальная группа","👥","musician","musician","culture"],
  ["rock_music","Рок-музыка","🤘","electric_guitar","drums","culture"],
  ["jazz","Джаз","🎶","saxophone","piano","culture"],
  ["orchestra","Оркестр","🎼","violin","trumpet","culture"],
  ["vinyl_record","Виниловая пластинка","💿","album","plastic","culture"]
];
for (const [id, name, icon, a, b] of MUSIC_EXPANSION){
  E[id] = [name, icon];
  R.push([`${a} ${b}`, id]);
}

// Осмысленные альтернативные способы получения музыкальных элементов.
R.push(
  ["wire wood","guitar"],
  ["amplifier guitar","electric_guitar"],
  ["leather music","drums"],
  ["mechanism music","piano"],
  ["computer music","synthesizer"],
  ["language music","song"],
  ["band recording_studio","album"],
  ["band festival","concert"],
  ["band electricity","rock_music"],
  ["piano trumpet","jazz"],
  ["musician theater","orchestra"],
  ["music plastic","vinyl_record"]
);
// region: IMPORTED_ALCHEMY_GAME
// Новые элементы адаптированы из открытого каталога alchemy-game.ru; образы и намёки созданы для этой игры.
const IMPORTED_ALCHEMY_GAME = Object.freeze([
  [
    "pressure",
    "Давление",
    "🎚️",
    "science",
    "Подсказка ведёт к тому, что сила, действующая на какую-либо поверхность.",
    [
      [
        "earth",
        "earth"
      ]
    ]
  ],
  [
    "silicon",
    "Кремний",
    "🔹",
    "geo",
    "Ищите то, что химический элемент, одна из главных составных частей горных пород. Используется для производства микросхем, солнечных батарей и т.",
    [
      [
        "sand",
        "pressure"
      ]
    ]
  ],
  [
    "hourglass",
    "Песочные часы",
    "⌛",
    "craft",
    "Подсказка ведёт к тому, что простейший прибор для отсчёта промежутков времени, состоящий из двух прозрачных сосудов, соединённых узкой горловиной, один из которых частично заполнен песком. Время, за которое это через горловину пересыпается в другой сосуд, м.",
    [
      [
        "sand",
        "glass"
      ]
    ]
  ],
  [
    "turtle",
    "Черепаха",
    "🐢",
    "life",
    "Обратите внимание: медленно двигающееся на коротких конечностях пресмыкающееся, покрытое костным панцирем.",
    [
      [
        "sand",
        "egg"
      ]
    ]
  ],
  [
    "worm",
    "Червь",
    "🪱",
    "life",
    "Главный признак: продолговатое мягкотелое бескостное животное, обитающее в земле.",
    [
      [
        "bacteria",
        "earth"
      ]
    ]
  ],
  [
    "sulfur",
    "Сера",
    "🟡",
    "geo",
    "Ориентир: химический элемент — жёлтое горючее минеральное вещество, применяемое в технике и медицине.",
    [
      [
        "bacteria",
        "swamp"
      ]
    ]
  ],
  [
    "flu",
    "Грипп",
    "🤒",
    "life",
    "Ищите то, что острое инфекционное заболевание верхних дыхательных путей с вирусной природой возникновения.",
    [
      [
        "bacteria",
        "air"
      ]
    ]
  ],
  [
    "omlet",
    "Яичница",
    "🍳",
    "food",
    "Подсказка ведёт к тому, что блюдо, приготовляемое на сковороде из разбитых яиц. Традиционный завтрак в Великобритании и Ирландии — это с беконом.",
    [
      [
        "egg",
        "fire"
      ]
    ]
  ],
  [
    "mite",
    "Клещ",
    "🕷️",
    "life",
    "Подсказка ведёт к тому, что мелкое членистоногое животное из отряда паукообразных.",
    [
      [
        "life",
        "dust"
      ],
      [
        "beetle",
        "dust"
      ]
    ]
  ],
  [
    "cold",
    "Холод",
    "🥶",
    "sky",
    "Ориентир: результат узнаётся по таким признакам, как низкая, температура, воздуха.",
    [
      [
        "cloud",
        "wind"
      ]
    ]
  ],
  [
    "plankton",
    "Планктон",
    "🦠",
    "life",
    "Ищите то, что разнородные, в основном мелкие организмы, свободно дрейфующие в толще воды и не способные, в отличие от нектона, сопротивляться течению.",
    [
      [
        "bacteria",
        "water"
      ],
      [
        "bacteria",
        "sea"
      ],
      [
        "bacteria",
        "ocean"
      ]
    ]
  ],
  [
    "light",
    "Свет",
    "💡",
    "sky",
    "Обратите внимание: в физической оптике электромагнитное излучение, воспринимаемое человеческим глазом. В качестве коротковолновой границы спектрального диапазона, занимаемого светом, принят участок с длинами волн в вакууме 380—400 нм, а в качестве.",
    [
      [
        "electricity",
        "lamp"
      ]
    ]
  ],
  [
    "oxygen",
    "Кислород",
    "🫧",
    "science",
    "Главный признак: химический элемент 16-й группы, второго периода периодической системы, с атомным номером 8. это — химически активный неметалл, является самым лёгким элементом из группы халькогенов.",
    [
      [
        "flower",
        "light"
      ],
      [
        "leaf",
        "light"
      ],
      [
        "water",
        "electricity"
      ]
    ]
  ],
  [
    "steam_boiler",
    "Паровой котел",
    "♨️",
    "food",
    "Подсказка ведёт к тому, что котёл, предназначенный для генерации насыщенного или перегретого пара. Может использовать энергию топлива, сжигаемого в своей топке, электрическую энергию или утилизировать теплоту, выделяющуюся в других установках.",
    [
      [
        "steam",
        "metal"
      ]
    ]
  ],
  [
    "steam_engine",
    "Паровой двигатель",
    "🚂",
    "food",
    "Обратите внимание: двигатель, приводимый в действие силой пара. Пар, получаемый путем нагрева воды, используют для движения.",
    [
      [
        "steam_boiler",
        "coal"
      ]
    ]
  ],
  [
    "ocean",
    "Океан",
    "🌊",
    "geo",
    "Главный признак: крупнейший водный объект, составляющий часть Мирового океана, расположенный среди материков, обладающий системой циркуляции вод и другими специфическими особенностями. это находится в непрерывном взаимодействии с атмосферой и зем.",
    [
      [
        "sea",
        "sea"
      ]
    ]
  ],
  [
    "earthquake",
    "Землетрясение",
    "🫨",
    "culture",
    "Обратите внимание: подземные толчки и колебания земной поверхности.",
    [
      [
        "energy",
        "earth"
      ]
    ]
  ],
  [
    "parrot",
    "Попугай",
    "🦜",
    "life",
    "Ориентир: это тропических стран с ярким и пёстрым оперением.",
    [
      [
        "bird",
        "rainbow"
      ],
      [
        "bird",
        "pirate"
      ]
    ]
  ],
  [
    "hummingbird",
    "Колибри",
    "🐦",
    "life",
    "Ищите то, что маленькая длиннокрылая птичка с пёстрыми перьями, живущая в Центральной и Южной Америке. Большую часть рациона это составляет богатый углеводами сладкий нектар цветковых растений, который они добывают с помощью длинного чувствите.",
    [
      [
        "bird",
        "flower"
      ]
    ]
  ],
  [
    "electric_stingray",
    "Электрический скат",
    "🐟",
    "life",
    "Главный признак: отряд хрящевых рыб, у которых по бокам тела между головой и грудными плавниками расположены почкообразные парные электрические органы, состоящие из видоизменённой мышечной ткани.",
    [
      [
        "fish",
        "electricity"
      ]
    ]
  ],
  [
    "aquarium",
    "Аквариум",
    "🐠",
    "life",
    "Подсказка ведёт к тому, что искусственный водоём или стеклянный ящик с водой для содержания рыб, водных животных и растений.",
    [
      [
        "fish",
        "glass"
      ]
    ]
  ],
  [
    "shell",
    "Ракушка",
    "🐚",
    "life",
    "Ищите то, что наружное защитное скелетное образование, покрывающее тело моллюсков и некоторых других беспозвоночных.",
    [
      [
        "plankton",
        "stone"
      ]
    ]
  ],
  [
    "snail",
    "Улитка",
    "🐌",
    "life",
    "Обратите внимание: общеупотребительное название брюхоногих моллюсков, обладающих наружной раковиной. Брюхоногих моллюсков с рудиментарной раковиной или полностью утративших её называют слизнями.",
    [
      [
        "shell",
        "worm"
      ]
    ]
  ],
  [
    "pearl",
    "Жемчуг",
    "🦪",
    "geo",
    "Главный признак: биогенное твёрдое, округлое или неправильной формы образование, извлекаемое из раковин некоторых морских и речных моллюсков. Образование жемчуга является защитной реакцией организма моллюска на любое инородное тело, попавшее в ма.",
    [
      [
        "sand",
        "shell"
      ]
    ]
  ],
  [
    "building",
    "Здание",
    "🏢",
    "transport",
    "Ищите то, что каменное строение, стены которого выполнены из керамического строительного камня, то есть кирпича.",
    [
      [
        "wall",
        "wall"
      ],
      [
        "concrete",
        "wall"
      ]
    ]
  ],
  [
    "country",
    "Страна",
    "🗺️",
    "civ",
    "Подсказка ведёт к тому, что территория, имеющая политические, физико-географические, культурные или исторические границы, которые могут быть как чётко определёнными и зафиксированными, так и размытыми.",
    [
      [
        "city",
        "city"
      ]
    ]
  ],
  [
    "continent",
    "Континент",
    "🌍",
    "geo",
    "Ориентир: крупный массив земной коры, большая часть которого не покрыта океаном, а окраины находятся ниже уровня океана.",
    [
      [
        "country",
        "country"
      ]
    ]
  ],
  [
    "mail",
    "Почта",
    "📬",
    "transport",
    "Ищите то, что учреждение для пересылки писем, лёгких грузов, денег и т. п.",
    [
      [
        "letter",
        "building"
      ]
    ]
  ],
  [
    "thunder",
    "Гром",
    "🌩️",
    "sky",
    "Главный признак: грохот, сопровождающий молнию во время грозы.",
    [
      [
        "dark_cloud",
        "dark_cloud"
      ]
    ]
  ],
  [
    "dilemma",
    "Дилемма",
    "🤔",
    "life",
    "Главный признак: полемический довод с двумя противоположными положениями, исключающими друг друга и не допускающими возможность третьего. В повседневной речи употребляется тогда, когда оба варианта нежелательны, и выбор происходит по принципу «ме.",
    [
      [
        "egg",
        "chicken"
      ]
    ]
  ],
  [
    "humidity",
    "Влажность",
    "💦",
    "sky",
    "Обратите внимание: содержание водяного пара в воздухе, характеризуемое рядом величин.",
    [
      [
        "rain",
        "air"
      ]
    ]
  ],
  [
    "mold",
    "Плесень",
    "🦠",
    "life",
    "Ориентир: гриб, который имеет микроскопическое строение. Плесневые грибы распространены повсеместно.",
    [
      [
        "humidity",
        "bacteria"
      ]
    ]
  ],
  [
    "beast",
    "Зверь",
    "🐾",
    "life",
    "Обратите внимание: дикое, обычно хищное животное.",
    [
      [
        "lizard",
        "earth"
      ]
    ]
  ],
  [
    "woodpecker",
    "Дятел",
    "🐦",
    "life",
    "Ищите то, что лесная лазящая это с сильным клювом. Ведет преимущественно древесный образ жизни.",
    [
      [
        "tree",
        "bird"
      ]
    ]
  ],
  [
    "peat",
    "Торф",
    "🟫",
    "geo",
    "Ищите то, что плотная масса, образовавшаяся из перегнивших остатков болотных растений, используется как топливо.",
    [
      [
        "tree",
        "swamp"
      ],
      [
        "wood",
        "swamp"
      ]
    ]
  ],
  [
    "gasoline",
    "Бензин",
    "⛽",
    "geo",
    "Ищите то, что бесцветная горючая жидкость, получаемая переработкой нефти.",
    [
      [
        "petroleum",
        "pressure"
      ],
      [
        "petroleum",
        "tool"
      ]
    ]
  ],
  [
    "motor_ag",
    "ДВС",
    "🛞",
    "tech",
    "Обратите внимание: разновидность теплового двигателя, в котором топливная смесь сгорает непосредственно в рабочей камере двигателя.",
    [
      [
        "petroleum",
        "steam_engine"
      ]
    ]
  ],
  [
    "motor_boat",
    "Катер",
    "🚤",
    "transport",
    "Ищите то, что быстроходное судно со стационарным мотором.",
    [
      [
        "motor_ag",
        "boat"
      ]
    ]
  ],
  [
    "switzerland",
    "Швейцария",
    "🇨🇭",
    "civ",
    "Ищите то, что это бесчисленных озер, деревушек и высокогорных Альп. Во многих городах сохранились средневековые районы.",
    [
      [
        "clock",
        "country"
      ],
      [
        "fondue",
        "country"
      ]
    ]
  ],
  [
    "arable",
    "Пашня",
    "🏗️",
    "transport",
    "Обратите внимание: результат узнаётся по таким признакам, как вспаханное.",
    [
      [
        "tractor",
        "earth"
      ],
      [
        "tool",
        "earth"
      ]
    ]
  ],
  [
    "potatoes",
    "Картофель",
    "🥔",
    "food",
    "Обратите внимание: один из самых распространённых овощей. Его варят как очищенным, так и неочищенным («в мундире»), готовят на углях или на пару, тушат, жарят во фритюре и без него.",
    [
      [
        "tractor",
        "arable"
      ],
      [
        "farmer",
        "arable"
      ]
    ]
  ],
  [
    "belarus",
    "Беларусь",
    "🇧🇾",
    "civ",
    "Подсказка ведёт к тому, что государство в Восточной Европе, полностью окруженное сушей. В этой стране много зданий сталинской эпохи, исторические боевые укрепления и нетронутые леса.",
    [
      [
        "potatoes",
        "country"
      ]
    ]
  ],
  [
    "japan",
    "Япония",
    "🇯🇵",
    "civ",
    "Обратите внимание: островное государство в Тихом океане, которое славится своими густонаселенными городами, императорскими дворцами, национальными парками, храмами и святилищами.",
    [
      [
        "sun",
        "country"
      ],
      [
        "origami",
        "country"
      ],
      [
        "sushi",
        "country"
      ],
      [
        "sake",
        "country"
      ],
      [
        "shuriken",
        "country"
      ],
      [
        "karaoke",
        "country"
      ],
      [
        "ninja",
        "country"
      ],
      [
        "fugu",
        "country"
      ],
      [
        "earthquake",
        "country"
      ]
    ]
  ],
  [
    "uae",
    "ОАЭ",
    "🇦🇪",
    "civ",
    "Ищите то, что государство на Аравийском полуострове вдоль южного побережья Персидского залива, состоящее из семи эмиратов. Столица страны Абу-Даби, расположенная на прибрежном острове, славится Большой мечетью шейха Зайда.",
    [
      [
        "petroleum",
        "country"
      ]
    ]
  ],
  [
    "fondue",
    "Фондю",
    "🍽️",
    "food",
    "Ищите то, что национальное блюдо швейцарской кухни. Представляет из себя расплавленный это нескольких сортов с вином, мускатным орехом и прочим, которое едят, намазывая загустевшую массу на кусочки подсушенного хлеба.",
    [
      [
        "cheese",
        "fire"
      ]
    ]
  ],
  [
    "wheat",
    "Пшеница",
    "🌾",
    "life",
    "Главный признак: хлебный злак, а также зёрна его, из которых приготовляют белую муку.",
    [
      [
        "arable",
        "grass"
      ]
    ]
  ],
  [
    "garland",
    "Гирлянда",
    "🎄",
    "tech",
    "Подсказка ведёт к тому, что декоративное украшение, обычно состоящее из цепочки ламп накаливания или светодиодов, последовательно соединенных жгутом электрических проводов.",
    [
      [
        "lamp",
        "lamp"
      ]
    ]
  ],
  [
    "storm_ag",
    "Буря",
    "🌪️",
    "sky",
    "Подсказка ведёт к тому, что ненастье с сильным разрушительным ветром.",
    [
      [
        "dust",
        "wind"
      ],
      [
        "energy",
        "wind"
      ]
    ]
  ],
  [
    "crab",
    "Краб",
    "🦀",
    "life",
    "Ориентир: короткохвостые раки, для внешнего вида которых характерны сильно выпученные глаза, головогрудь, защищенная прочным панцирем, и пять пар конечностей. Обитают крабы во всех морях планеты, также встречаются и в пресных водах.",
    [
      [
        "fish",
        "turtle"
      ],
      [
        "fish",
        "scissors"
      ],
      [
        "turtle",
        "scissors"
      ]
    ]
  ],
  [
    "new_year",
    "Новый год",
    "🎆",
    "tech",
    "Главный признак: главный календарный праздник, наступающий в момент перехода с последнего дня текущего года в первый день следующего года. Отмечается многими народами в соответствии с принятым календарём.",
    [
      [
        "garland",
        "tree"
      ]
    ]
  ],
  [
    "mouse_ag",
    "Мышь",
    "🐭",
    "life",
    "Подсказка ведёт к тому, что небольшой грызун с острой мордочкой, усиками и длинным хвостом.",
    [
      [
        "cheese",
        "beast"
      ]
    ]
  ],
  [
    "tsunami",
    "Цунами",
    "🌊",
    "space",
    "Ориентир: длинные волны, порождаемые мощным воздействием на всю толщу воды в океане или другом водоёме. Причиной большинства это являются подводные землетрясения, во время которых происходит резкое смещение участка морского дна.",
    [
      [
        "sea",
        "earthquake"
      ],
      [
        "ocean",
        "earthquake"
      ]
    ]
  ],
  [
    "bat",
    "Летучая мышь",
    "🦇",
    "life",
    "Главный признак: обобщающее название для представителей отряда рукокрылых за исключением крыланов.",
    [
      [
        "mouse_ag",
        "bird"
      ],
      [
        "mouse_ag",
        "sky"
      ],
      [
        "vampire",
        "bird"
      ]
    ]
  ],
  [
    "origami",
    "Оригами",
    "🕊️",
    "craft",
    "Ищите то, что японское искусство складывания бумажных фигурок без ножниц и клея, а также изделие такого искусства.",
    [
      [
        "paper",
        "bird"
      ]
    ]
  ],
  [
    "pencil",
    "Карандаш",
    "✏️",
    "culture",
    "Обратите внимание: деревянная палочка со стержнем из графита для письма, рисования, черчения.",
    [
      [
        "wood",
        "graphite"
      ]
    ]
  ],
  [
    "letter",
    "Письмо",
    "✉️",
    "culture",
    "Обратите внимание: написанный текст, посылаемый для сообщения чего-нибудь кому-нибудь.",
    [
      [
        "paper",
        "pencil"
      ],
      [
        "paper",
        "pen"
      ],
      [
        "paper",
        "coal"
      ],
      [
        "paper",
        "ink"
      ]
    ]
  ],
  [
    "pigeon",
    "Голубь",
    "🕊️",
    "life",
    "Главный признак: это с серовато-голубым или белым оперением и большим зобом.",
    [
      [
        "letter",
        "bird"
      ],
      [
        "mail",
        "bird"
      ]
    ]
  ],
  [
    "cane",
    "Тростник",
    "🎋",
    "life",
    "Ориентир: водяное или болотное растение из сем. злаков с коленчатым твёрдым стволом.",
    [
      [
        "grass",
        "swamp"
      ]
    ]
  ],
  [
    "carbon_dioxide",
    "Углекислый газ",
    "💨",
    "transport",
    "Ищите то, что бесцветный, не имеющий запаха, негорючий и слабокислотный сжиженный газ.",
    [
      [
        "human",
        "oxygen"
      ]
    ]
  ],
  [
    "soda",
    "Газировка",
    "🥤",
    "food",
    "Главный признак: прохладительный напиток из воды или сока, насыщенной углекислым газом.",
    [
      [
        "carbon_dioxide",
        "water"
      ],
      [
        "carbon_dioxide",
        "juice"
      ]
    ]
  ],
  [
    "statue",
    "Статуя",
    "🗿",
    "culture",
    "Ищите то, что один из основных видов объёмной скульптуры большого размера, изображающей стоящую фигуру человека.",
    [
      [
        "medusa_gorgona",
        "mirror"
      ],
      [
        "medusa_gorgona",
        "human"
      ],
      [
        "medusa_gorgona",
        "oldman"
      ],
      [
        "medusa_gorgona",
        "pilot"
      ],
      [
        "medusa_gorgona",
        "farmer"
      ],
      [
        "medusa_gorgona",
        "doctor_ag"
      ],
      [
        "medusa_gorgona",
        "warrior"
      ],
      [
        "medusa_gorgona",
        "hunter"
      ],
      [
        "medusa_gorgona",
        "sick"
      ],
      [
        "medusa_gorgona",
        "drunkard"
      ],
      [
        "medusa_gorgona",
        "eskimo"
      ],
      [
        "medusa_gorgona",
        "fisherman"
      ],
      [
        "medusa_gorgona",
        "scientist"
      ],
      [
        "medusa_gorgona",
        "firefighter"
      ],
      [
        "medusa_gorgona",
        "sailor"
      ],
      [
        "medusa_gorgona",
        "postman"
      ],
      [
        "medusa_gorgona",
        "ninja"
      ],
      [
        "medusa_gorgona",
        "astronaut"
      ],
      [
        "medusa_gorgona",
        "hacker"
      ],
      [
        "medusa_gorgona",
        "pirate"
      ],
      [
        "medusa_gorgona",
        "astronomer"
      ],
      [
        "medusa_gorgona",
        "soldier"
      ],
      [
        "medusa_gorgona",
        "assassin"
      ],
      [
        "medusa_gorgona",
        "beekeeper"
      ],
      [
        "medusa_gorgona",
        "archaeologist"
      ],
      [
        "medusa_gorgona",
        "injun"
      ]
    ]
  ],
  [
    "tobacco",
    "Табак",
    "🍂",
    "life",
    "Ищите то, что род многолетних и однолетних растений семейства Паслёновые. Содержит никотин.",
    [
      [
        "fire",
        "grass"
      ]
    ]
  ],
  [
    "vobla",
    "Вобла",
    "🐟",
    "food",
    "Ищите то, что это – это семейства карповых, подвид плотвы. Наиболее известна как соленая и сушенная закуска к пиву.",
    [
      [
        "fish",
        "salt"
      ]
    ]
  ],
  [
    "chameleon",
    "Хамелеон",
    "🦎",
    "life",
    "Ориентир: пресмыкающееся тёплых стран, меняющее окраску своей кожи при перемене цвета окружающей среды.",
    [
      [
        "lizard",
        "rainbow"
      ]
    ]
  ],
  [
    "death",
    "Смерть",
    "💀",
    "civ",
    "Ищите то, что прекращение, полная остановка биологических и физиологических процессов жизнедеятельности организма.",
    [
      [
        "life",
        "time"
      ],
      [
        "human",
        "poison"
      ],
      [
        "car",
        "dream"
      ],
      [
        "human",
        "cancer"
      ]
    ]
  ],
  [
    "corpse",
    "Труп",
    "⚰️",
    "civ",
    "Подсказка ведёт к тому, что мёртвое тело человека или животного.",
    [
      [
        "death",
        "human"
      ],
      [
        "assassin",
        "human"
      ]
    ]
  ],
  [
    "frankenstein",
    "Чудовище Франкенштейна",
    "🧟",
    "myst",
    "Ориентир: одно из главных действующих лиц романа Мэри Шелли «Франкенштейн, или Современный Прометей», а также персонаж множества книжных, драматических и кинематографических адаптаций его сюжета. Ошибочно называется просто «Франкенштейном».",
    [
      [
        "corpse",
        "electricity"
      ]
    ]
  ],
  [
    "coffin",
    "Гроб",
    "⚰️",
    "civ",
    "Главный признак: специальный ящик, в котором хоронят умершего.",
    [
      [
        "corpse",
        "wood"
      ],
      [
        "corpse",
        "plank"
      ]
    ]
  ],
  [
    "grave",
    "Могила",
    "🪦",
    "civ",
    "Подсказка ведёт к тому, что яма для погребения тела умершего, а также насыпь на месте погребения.",
    [
      [
        "corpse",
        "earth"
      ],
      [
        "coffin",
        "earth"
      ]
    ]
  ],
  [
    "mummy",
    "Мумия",
    "🧟",
    "myst",
    "Подсказка ведёт к тому, что тело, подвергнутое специальной химической обработке, в результате которой прекращается или замедляется процесс разложения тканей.",
    [
      [
        "paper",
        "corpse"
      ],
      [
        "fabric",
        "corpse"
      ]
    ]
  ],
  [
    "vulture",
    "Гриф",
    "🦅",
    "life",
    "Обратите внимание: крупная хищная это, питающаяся падалью.",
    [
      [
        "bird",
        "death"
      ],
      [
        "bird",
        "corpse"
      ]
    ]
  ],
  [
    "cigarette",
    "Сигарета",
    "🚬",
    "craft",
    "Ищите то, что курительное табачное изделие в виде бумажной гильзы, внутри которой находится сигаретный это. Могут быть с фильтром или без него.",
    [
      [
        "paper",
        "tobacco"
      ]
    ]
  ],
  [
    "ashtray",
    "Пепельница",
    "🚬",
    "craft",
    "Главный признак: тарелочка или сосуд иной формы для окурков и стряхивания пепла от табака при курении.",
    [
      [
        "glass",
        "cigarette"
      ],
      [
        "glass",
        "ash"
      ],
      [
        "ceramic",
        "cigarette"
      ],
      [
        "ceramic",
        "ash"
      ]
    ]
  ],
  [
    "italy",
    "Италия",
    "🇮🇹",
    "civ",
    "Обратите внимание: средиземноморское государство в Южной Европе с длинной береговой линией, которое оказало огромное влияние на западную культуру и кухню. На территории столицы страны, Рима, находится государство Ватикан, а также всемирно известные.",
    [
      [
        "pizza",
        "country"
      ],
      [
        "gorgonzola",
        "country"
      ],
      [
        "pasta_ag",
        "country"
      ]
    ]
  ],
  [
    "cancer",
    "Рак",
    "🎗️",
    "life",
    "Обратите внимание: общее название для обширной группы онкологических заболеваний, при которых клетки тела начинают бесконтрольный рост и деление. Без лечения эти заболевания становятся смертельными.",
    [
      [
        "human",
        "cigarette"
      ]
    ]
  ],
  [
    "brilliant",
    "Бриллиант",
    "💎",
    "craft",
    "Подсказка ведёт к тому, что это, которому посредством обработки придана ограненная форма, максимально выявляющая его естественный блеск.",
    [
      [
        "tool",
        "diamond"
      ]
    ]
  ],
  [
    "faberge",
    "Яйцо Фаберже",
    "🥚",
    "life",
    "Подсказка ведёт к тому, что серия ювелирных изделий, изготовленных компанией Карла Фаберже в период с 1885 по 1917 год. Каждое это уникально как по внешнему виду, так и по содержимому.",
    [
      [
        "egg",
        "brilliant"
      ]
    ]
  ],
  [
    "sakura",
    "Сакура",
    "🐾",
    "life",
    "Ищите то, что японская окультуренная вишня, цветущая пышными розовыми цветами; один из символов Японии.",
    [
      [
        "tree",
        "japan"
      ],
      [
        "tree",
        "flower"
      ]
    ]
  ],
  [
    "transistor",
    "Транзистор",
    "🪨",
    "geo",
    "Главный признак: полупроводниковый прибор, усиливающий и генерирующий электроколебания.",
    [
      [
        "silicon",
        "scientist"
      ],
      [
        "silicon",
        "metal"
      ]
    ]
  ],
  [
    "chip",
    "Микросхема",
    "🪨",
    "geo",
    "Ориентир: миниатюрный электронный блок, содержащий в общем корпусе транзисторы, диоды, резисторы и другие активные и пассивные-элементы, число которых может достигать нескольких десятков тысяч.",
    [
      [
        "transistor",
        "transistor"
      ]
    ]
  ],
  [
    "hedgehog",
    "Еж",
    "🐾",
    "life",
    "Ориентир: небольшое животное с иглами на теле.",
    [
      [
        "needle",
        "beast"
      ],
      [
        "needle",
        "mouse_ag"
      ]
    ]
  ],
  [
    "poison",
    "Яд",
    "🐾",
    "life",
    "Подсказка ведёт к тому, что вещество, приводящее в определённых дозах, небольших относительно массы тела, к нарушению жизнедеятельности организма: к отравлению, заболеваниям, иным болезненным состояниям и к смертельным исходам.",
    [
      [
        "snake",
        "tool"
      ],
      [
        "scorpion",
        "tool"
      ],
      [
        "fly_agaric",
        "tool"
      ]
    ]
  ],
  [
    "beetle",
    "Жук",
    "🐞",
    "life",
    "Главный признак: насекомое с жёсткими надкрыльями.",
    [
      [
        "worm",
        "earth"
      ]
    ]
  ],
  [
    "scorpion",
    "Скорпион",
    "🐾",
    "life",
    "Обратите внимание: отряд членистоногих из класса паукообразных. Исключительно наземные формы, которые встречаются лишь в жарких странах.",
    [
      [
        "beetle",
        "sand"
      ],
      [
        "beetle",
        "poison"
      ]
    ]
  ],
  [
    "monkey",
    "Обезьяна",
    "🐾",
    "life",
    "Подсказка ведёт к тому, что млекопитающее, наиболее близкое к человеку по строению тела.",
    [
      [
        "human",
        "wool"
      ]
    ]
  ],
  [
    "dung",
    "Навоз",
    "🐾",
    "life",
    "Главный признак: органическое удобрение, состоящее из экскрементов сельскохозяйственных животных. Обладает характерным запахом и консистенцией.",
    [
      [
        "livestock",
        "hay"
      ]
    ]
  ],
  [
    "saltpeter",
    "Селитра",
    "🍽️",
    "food",
    "Ищите то, что тривиальное название для минералов, содержащих нитраты щелочных, щелочноземельных металлов и аммония.",
    [
      [
        "dung",
        "limestone"
      ]
    ]
  ],
  [
    "penicillin",
    "Пенициллин",
    "🔬",
    "science",
    "Ищите то, что лечебный препарат из некоторых видов плесневого грибка.",
    [
      [
        "scientist",
        "mold"
      ]
    ]
  ],
  [
    "soured_milk",
    "Простокваша",
    "🧀",
    "food",
    "Ориентир: кисломолочный продукт, образующийся из молока в результате молочнокислого брожения. В основе приготовления простокваши лежит сквашивание молока на чистых культурах молочнокислых бактерий.",
    [
      [
        "milk",
        "cold"
      ]
    ]
  ],
  [
    "firefly",
    "Светлячок",
    "🔥",
    "life",
    "Ориентир: жучок, светящийся в темноте.",
    [
      [
        "beetle",
        "fire"
      ],
      [
        "beetle",
        "light"
      ]
    ]
  ],
  [
    "china",
    "Китай",
    "🇨🇳",
    "civ",
    "Ориентир: густонаселенная это в Восточной Азии с разнообразными ландшафтами и рельефом.",
    [
      [
        "dragon",
        "country"
      ],
      [
        "rice",
        "country"
      ],
      [
        "bonsai",
        "country"
      ],
      [
        "panda",
        "country"
      ],
      [
        "tea",
        "country"
      ],
      [
        "silk",
        "country"
      ]
    ]
  ],
  [
    "steak",
    "Жареное мясо",
    "🍽️",
    "food",
    "Главный признак: толстый кусок обжаренного мяса.",
    [
      [
        "meat",
        "fire"
      ]
    ]
  ],
  [
    "scarab",
    "Скарабей",
    "🚗",
    "life",
    "Главный признак: навозный это, обитавший в южных районах Западной Европы, Северной Африке, на Ближнем Востоке. В Древнем Египте священный представитель мировой фауны.",
    [
      [
        "beetle",
        "dung"
      ]
    ]
  ],
  [
    "egypt",
    "Египет",
    "🇪🇬",
    "civ",
    "Обратите внимание: это в Северо-Восточной Африке и на Ближнем Востоке. О ее богатой истории, насчитывающей более пяти тысяч лет, напоминают археологические памятники в плодородной долине реки Нил, среди которых пирамиды Гизы и Большой сфинкс.",
    [
      [
        "scarab",
        "country"
      ],
      [
        "pyramid",
        "country"
      ],
      [
        "sarcophagus",
        "country"
      ]
    ]
  ],
  [
    "sound",
    "Звук",
    "🌤️",
    "sky",
    "Ищите то, что воспринимаемое слухом физическое явление, порождаемое колебательными движениями частиц воздуха или другой среды.",
    [
      [
        "metal",
        "wind"
      ],
      [
        "foil",
        "wind"
      ],
      [
        "tree",
        "wind"
      ],
      [
        "grove",
        "wind"
      ],
      [
        "forest",
        "wind"
      ]
    ]
  ],
  [
    "idea",
    "Идея",
    "⚙️",
    "tech",
    "Обратите внимание: результат узнаётся по таким признакам, как неожиданная.",
    [
      [
        "lamp",
        "human"
      ],
      [
        "lamp",
        "brain"
      ]
    ]
  ],
  [
    "french_fries",
    "Картофель фри",
    "🍽️",
    "food",
    "Обратите внимание: кусочки картофеля, обжаренные во фритюре. Употребляют как самостоятельное блюдо или гарнир ко вторым блюдам.",
    [
      [
        "butter",
        "potatoes"
      ]
    ]
  ],
  [
    "camel",
    "Верблюд",
    "🐾",
    "life",
    "Главный признак: крупное животное, приспособленное для жизни в засушливых регионах мира — пустынях, полупустынях и степях.",
    [
      [
        "desert",
        "beast"
      ]
    ]
  ],
  [
    "hamburger",
    "Гамбургер",
    "🍽️",
    "food",
    "Ориентир: вид сэндвича, состоящий из разрезанной пополам булочки и рубленой жареной котлеты.",
    [
      [
        "steak",
        "bread"
      ]
    ]
  ],
  [
    "rust",
    "Ржавчина",
    "🪨",
    "geo",
    "Подсказка ведёт к тому, что красно-бурый налёт на железе, образующийся вследствие окисления и ведущий к разрушению металла.",
    [
      [
        "metal",
        "water"
      ],
      [
        "metal",
        "humidity"
      ]
    ]
  ],
  [
    "philosopher",
    "Философ",
    "👤",
    "civ",
    "Обратите внимание: мыслитель, занимающийся разработкой вопросов мировоззрения. Философом также может называться человек, принадлежащий к определённой философской школе, разделяющий её идеи или живущий в соответствии с этими идеями, то есть осуществ.",
    [
      [
        "scientist",
        "dilemma"
      ]
    ]
  ],
  [
    "coin",
    "Монета",
    "🪙",
    "geo",
    "Подсказка ведёт к тому, что деньги в форме твердых денежных знаков, обычно металлических. Изначально монеты изготавливались из благородных металлов, как правило, из золота и серебра.",
    [
      [
        "gold",
        "pressure"
      ]
    ]
  ],
  [
    "caramel",
    "Карамель",
    "🚗",
    "food",
    "Главный признак: кондитерское изделие или ингредиент такого изделия, получаемый нагреванием сахара или увариванием сахарного раствора с крахмальной патокой или инвертным сиропом.",
    [
      [
        "sugar",
        "fire"
      ]
    ]
  ],
  [
    "curd",
    "Творог",
    "🍽️",
    "food",
    "Главный признак: нежидкий кисломолочный продукт белого цвета, традиционный для Восточной, Северной и Центральной Европы, получаемый сквашиванием молока с последующим удалением сыворотки.",
    [
      [
        "soured_milk",
        "fire"
      ]
    ]
  ],
  [
    "petri_dish",
    "Чашка Петри",
    "🐾",
    "life",
    "Ищите то, что прозрачный лабораторный сосуд в форме невысокого плоского цилиндра, закрываемого прозрачной крышкой подобной формы, но несколько большего диаметра. Применяется в микробиологии и химии.",
    [
      [
        "bacteria",
        "glass"
      ]
    ]
  ],
  [
    "dumpling",
    "Пельмени",
    "🍽️",
    "food",
    "Ориентир: традиционное блюдо русской кухни в виде термически обработанных изделий из пресного теста с начинкой из рубленого мяса.",
    [
      [
        "meat",
        "dough"
      ]
    ]
  ],
  [
    "weapon",
    "Оружие",
    "⚙️",
    "tech",
    "Ищите то, что всякое средство, приспособленное для нападения или защиты.",
    [
      [
        "metal",
        "tool"
      ],
      [
        "tool",
        "sword"
      ]
    ]
  ],
  [
    "hunter",
    "Охотник",
    "👤",
    "civ",
    "Ищите то, что результат узнаётся по таким признакам, как занимающийся, охотой.",
    [
      [
        "human",
        "weapon"
      ]
    ]
  ],
  [
    "pillow",
    "Подушка",
    "🧰",
    "craft",
    "Ищите то, что постельная принадлежность в виде зашитого со всех сторон мешка с наполнителем из мягкого материала (пухом, пером, поролоном и т. п.",
    [
      [
        "pen",
        "fabric"
      ]
    ]
  ],
  [
    "leech",
    "Пиявка",
    "🐾",
    "life",
    "Подсказка ведёт к тому, что пресноводный это, паразит, живущий кровью животных, к телу которых он присасывается.",
    [
      [
        "worm",
        "blood"
      ]
    ]
  ],
  [
    "fulgurite",
    "Фульгурит",
    "🪨",
    "geo",
    "Ищите то, что спёкшийся от удара молнии SiO2 (это, кварц, кремнезём).",
    [
      [
        "sand",
        "lightning"
      ]
    ]
  ],
  [
    "russia",
    "Россия",
    "🇷🇺",
    "civ",
    "Ищите то, что крупнейшая это мира, расположенная в Восточной Европе и Северной Азии и омываемая водами Тихого и Северного Ледовитого океанов.",
    [
      [
        "country",
        "bear"
      ],
      [
        "country",
        "vodka"
      ]
    ]
  ],
  [
    "sushi",
    "Суши",
    "🍽️",
    "food",
    "Ищите то, что блюдо традиционной японской кухни, приготовленное из риса с уксусной приправой и различных морепродуктов, а также других ингредиентов.",
    [
      [
        "rice",
        "fish"
      ],
      [
        "rice",
        "algae"
      ]
    ]
  ],
  [
    "fugu",
    "Фугу",
    "🍽️",
    "food",
    "Ориентир: блюдо японской кухни из некоторых видов ядовитых рыб семейства иглобрюхих (Tetraodontidae) рода Takifugu (также называемых это это), содержащих это тетродотоксин. В Японии это считается деликатесом и пользуется большой популярнос.",
    [
      [
        "poison",
        "fish"
      ]
    ]
  ],
  [
    "hut",
    "Хижина",
    "🏗️",
    "transport",
    "Подсказка ведёт к тому, что примитивное жилище человека. это занимает промежуточное положение между простым укрытием и домом.",
    [
      [
        "stone",
        "human"
      ]
    ]
  ],
  [
    "igloo",
    "Иглу",
    "🏗️",
    "transport",
    "Обратите внимание: традиционное убежище эскимосов на Гренландии и арктической части Северной Америки. Это небольшой, куполообразный домик, построенный из блоков твердого снега.",
    [
      [
        "hut",
        "ice"
      ],
      [
        "hut",
        "eskimo"
      ]
    ]
  ],
  [
    "alcohol",
    "Спирт",
    "🐾",
    "life",
    "Ориентир: горючая и обычно опьяняющая жидкость, добываемая особой перегонкой веществ, содержащих сахар или крахмал.",
    [
      [
        "alcohol",
        "bacteria"
      ],
      [
        "wine",
        "fire"
      ]
    ]
  ],
  [
    "vodka",
    "Водка",
    "🍽️",
    "food",
    "Ориентир: крепкий алкогольный напиток, бесцветный водно-спиртовой раствор с характерным вкусом и ярко выраженным спиртовым запахом.",
    [
      [
        "alcohol",
        "water"
      ]
    ]
  ],
  [
    "beer",
    "Пиво",
    "🍽️",
    "food",
    "Подсказка ведёт к тому, что слабоалкогольный напиток, получаемый спиртовым брожением солодового сусла с помощью пивных дрожжей, обычно с добавлением хмеля.",
    [
      [
        "alcohol",
        "bread"
      ]
    ]
  ],
  [
    "champagne",
    "Шампанское",
    "🍽️",
    "food",
    "Ориентир: игристое вино, произведённое во французском регионе Шампань из установленных сортов винограда методом вторичного брожения вина в бутылке. Название напитка происходит от названия провинции Шампань, где расположен данный регион.",
    [
      [
        "alcohol",
        "carbon_dioxide"
      ]
    ]
  ],
  [
    "iceland",
    "Исландия",
    "🇮🇸",
    "civ",
    "Ищите то, что островное государство в северной части Атлантического океана. Рельеф страны определяют вулканы, гейзеры, горячие источники и лавовые поля.",
    [
      [
        "country",
        "volcano"
      ],
      [
        "country",
        "geyser"
      ]
    ]
  ],
  [
    "bomb",
    "Бомба",
    "⚙️",
    "tech",
    "Ориентир: разрывной снаряд, начинённый взрывчатым веществом.",
    [
      [
        "metal",
        "gunpowder"
      ]
    ]
  ],
  [
    "shark",
    "Акула",
    "🐟",
    "life",
    "Ищите то, что результат узнаётся по таким признакам, как крупная, хищная, морская.",
    [
      [
        "fish",
        "blood"
      ]
    ]
  ],
  [
    "france",
    "Франция",
    "🇫🇷",
    "civ",
    "Ориентир: это в Западной Европе, на территории которой находятся средневековые города, альпийские деревни и пляжи Средиземного моря. Париж, столица государства, славится своими домами моды, старейшими художественными музеями, в числе котор.",
    [
      [
        "country",
        "champagne"
      ],
      [
        "country",
        "perfume"
      ]
    ]
  ],
  [
    "tequila",
    "Текила",
    "🍽️",
    "food",
    "Подсказка ведёт к тому, что крепкий алкогольный напиток, полученный путём дистилляции ферментированного сока голубой агавы строго на территории 5 штатов Мексики.",
    [
      [
        "alcohol",
        "cactus"
      ]
    ]
  ],
  [
    "germany",
    "Германия",
    "🇩🇪",
    "civ",
    "Главный признак: государство в Западной Европе с лесами, реками, горными хребтами и пляжными курортами Северного моря. Мюнхен знаменит фестивалем Октоберфест и пивными ресторанами.",
    [
      [
        "beer",
        "country"
      ]
    ]
  ],
  [
    "sauna",
    "Сауна",
    "🏗️",
    "transport",
    "Главный признак: финская баня с горячим сухим воздухом парной. Представляет собой небольшое специальное помещение или постройку для испытания сухих и влажных ощущений.",
    [
      [
        "hut",
        "steam"
      ]
    ]
  ],
  [
    "sake",
    "Саке",
    "🍽️",
    "food",
    "Главный признак: традиционный японский алкогольный напиток, который иногда называют рисовой водкой.",
    [
      [
        "alcohol",
        "rice"
      ]
    ]
  ],
  [
    "transformer",
    "Трансформер",
    "🏗️",
    "transport",
    "Подсказка ведёт к тому, что это, способный трансформироваться из одного облика в другой (например, из человекоподобного в транспортное средство).",
    [
      [
        "car",
        "robot"
      ],
      [
        "car",
        "life"
      ]
    ]
  ],
  [
    "mexico",
    "Мексика",
    "🇲🇽",
    "civ",
    "Обратите внимание: государство, расположенное между США и странами Центральной Америки. Оно славится своими пляжами на побережьях Тихого океана и Мексиканского залива и разнообразным ландшафтом.",
    [
      [
        "tequila",
        "country"
      ],
      [
        "pinata",
        "country"
      ]
    ]
  ],
  [
    "finland",
    "Финляндия",
    "🇫🇮",
    "civ",
    "Ориентир: это в Северной Европе, граничащая со Швецией, Норвегией и Россией.",
    [
      [
        "sauna",
        "country"
      ]
    ]
  ],
  [
    "graphite",
    "Графит",
    "🪨",
    "geo",
    "Главный признак: минерал тёмно-серого или чёрного цвета, используется для изготовления карандашей, огнеупорных тиглей, смазочных материалов и т. п.",
    [
      [
        "coal",
        "pressure"
      ]
    ]
  ],
  [
    "termite",
    "Термит",
    "🐞",
    "life",
    "Ищите то, что насекомое, живущее в жарких странах и являющееся вредителем древесины.",
    [
      [
        "tree",
        "beetle"
      ],
      [
        "wood",
        "beetle"
      ]
    ]
  ],
  [
    "brazil",
    "Бразилия",
    "🇧🇷",
    "civ",
    "Подсказка ведёт к тому, что это в Южной Америке, которая простирается от бассейна реки Амазонка на севере до виноградников и огромных водопадов Игуасу на юге.",
    [
      [
        "coffee",
        "country"
      ]
    ]
  ],
  [
    "pyramid",
    "Пирамида",
    "🏗️",
    "transport",
    "Главный признак: гробница фараонов в Древнем Египте.",
    [
      [
        "grave",
        "egypt"
      ],
      [
        "coffin",
        "egypt"
      ],
      [
        "mountain",
        "egypt"
      ]
    ]
  ],
  [
    "hydrogen",
    "Водород",
    "🌤️",
    "sky",
    "Ориентир: химический элемент, самый лёгкий газ. Бесцветен и не имеет запаха.",
    [
      [
        "water",
        "lightning"
      ]
    ]
  ],
  [
    "truffle",
    "Трюфель",
    "🍽️",
    "food",
    "Ищите то, что съедобный это округлой формы, растущий под землёй. Во Франции и Италии распространена восходящая ещё к XV веку практика поиска растущих в лесу трюфелей при помощи специально обученных поисковых собак и свиней, которые обладают фе.",
    [
      [
        "earth",
        "mushroom"
      ],
      [
        "pig",
        "mushroom"
      ]
    ]
  ],
  [
    "oldman",
    "Старик",
    "🧑",
    "civ",
    "Ищите то, что мужчина, достигший старости.",
    [
      [
        "human",
        "clock"
      ]
    ]
  ],
  [
    "santa_claus",
    "Дед Мороз",
    "✨",
    "myst",
    "Ищите то, что главный сказочный персонаж на празднике Нового года, советский вариант рождественского дарителя.",
    [
      [
        "oldman",
        "new_year"
      ]
    ]
  ],
  [
    "steamship",
    "Пароход",
    "🚢",
    "transport",
    "Подсказка ведёт к тому, что судно, оснащённое поршневой паровой машиной или паровой турбиной в качестве тягового двигателя.",
    [
      [
        "steam_engine",
        "ship"
      ]
    ]
  ],
  [
    "bone",
    "Кость",
    "👤",
    "civ",
    "Главный признак: соединительная ткань, из которой образован скелет большинства позвоночных. Кости защищают внутренние органы, служат в качестве рычагов при движении и поднятии предметов.",
    [
      [
        "hunter",
        "beast"
      ]
    ]
  ],
  [
    "perfume",
    "Парфюм",
    "🐾",
    "life",
    "Обратите внимание: раствор сложной смеси душистых веществ в этиловом спирте различной крепости. Применяются для ароматизации волос, белья, одежды и т.",
    [
      [
        "alcohol",
        "flower"
      ]
    ]
  ],
  [
    "nicola_tesla",
    "Никола Тесла",
    "🎭",
    "culture",
    "Ориентир: изобретатель в области электротехники и радиотехники сербского происхождения, это, инженер, физик.",
    [
      [
        "scientist",
        "electricity"
      ]
    ]
  ],
  [
    "sick",
    "Больной",
    "💊",
    "civ",
    "Ориентир: это, поражённый какой-либо болезнью.",
    [
      [
        "human",
        "flu"
      ],
      [
        "human",
        "sick"
      ]
    ]
  ],
  [
    "bomber",
    "Бомбардировщик",
    "🏗️",
    "transport",
    "Ориентир: военный это, предназначенный для поражения наземных, подземных, надводных, подводных объектов средствами бомбового вооружения.",
    [
      [
        "bomb",
        "airplane"
      ]
    ]
  ],
  [
    "grove",
    "Роща",
    "🐾",
    "life",
    "Ориентир: небольшой лиственный лес, обособленный от основного лесного массива. Деревья, как правило, одного возраста.",
    [
      [
        "tree",
        "garden"
      ]
    ]
  ],
  [
    "dark_cloud",
    "Туча",
    "☁️",
    "sky",
    "Ориентир: большое, обычно темное это, несущее дождь, град, снег.",
    [
      [
        "cloud",
        "storm_ag"
      ]
    ]
  ],
  [
    "titanic",
    "Титаник",
    "🪨",
    "geo",
    "Обратите внимание: британский трансатлантический это, второй лайнер класса «Олимпик» компании «White Star Line». Крупнейшее пассажирское судно в мировой истории в 1912—1913 годах.",
    [
      [
        "iceberg",
        "steamship"
      ]
    ]
  ],
  [
    "salo",
    "Сало",
    "🍽️",
    "food",
    "Подсказка ведёт к тому, что твердый жир, который откладывается у животных в период их усиленного питания. Продукт употребляется в пищу в свежем, соленом, копченом, вареном, тушеном или топленом виде.",
    [
      [
        "pig",
        "human"
      ],
      [
        "pig",
        "tool"
      ]
    ]
  ],
  [
    "seagull",
    "Чайка",
    "🌊",
    "life",
    "Ищите то, что наиболее многочисленный род птиц семейства чайковых, обитающих как на морских просторах, так и на внутренних водоёмах.",
    [
      [
        "sea",
        "bird"
      ],
      [
        "ocean",
        "bird"
      ],
      [
        "beach",
        "bird"
      ]
    ]
  ],
  [
    "drunkard",
    "Пьяница",
    "👤",
    "civ",
    "Подсказка ведёт к тому, что это, которому свойственно употребление спиртных напитков в значительных количествах.",
    [
      [
        "human",
        "vodka"
      ]
    ]
  ],
  [
    "nuclear_bomb",
    "Ядерная бомба",
    "⚙️",
    "tech",
    "Подсказка ведёт к тому, что взрывное устройство, в котором источником энергии является деление атомных ядер.",
    [
      [
        "bomb",
        "scientist"
      ]
    ]
  ],
  [
    "eskimo",
    "Эскимос",
    "👤",
    "civ",
    "Ищите то, что эскимосы представляют собой коренную народность, проживающую на крайнем севере.",
    [
      [
        "igloo",
        "human"
      ]
    ]
  ],
  [
    "mendeleev",
    "Дмитрий Менделеев",
    "🎭",
    "culture",
    "Обратите внимание: русский это-энциклопедист. В 1869 г.",
    [
      [
        "vodka",
        "scientist"
      ]
    ]
  ],
  [
    "doctor_ag",
    "Доктор",
    "💊",
    "civ",
    "Ориентир: человек, который получил медицинское образование и лечит людей.",
    [
      [
        "sick",
        "scientist"
      ]
    ]
  ],
  [
    "grilled_chicken",
    "Курица гриль",
    "🍽️",
    "food",
    "Ищите то, что куриная туша, обжаренная на специальном приборе, который называется грилем.",
    [
      [
        "chicken",
        "fire"
      ]
    ]
  ],
  [
    "fossil_ag",
    "Окаменнелость",
    "🐾",
    "life",
    "Обратите внимание: окаменелости обычно представляют собой останки или отпечатки животных и растений, сохранившиеся в почве, камнях, затвердевших смолах. Довольно часто таким образом сохраняются только твёрдые части тела животного — зубы и кости.",
    [
      [
        "dinosaur",
        "earth"
      ],
      [
        "skeleton",
        "earth"
      ],
      [
        "bone",
        "earth"
      ]
    ]
  ],
  [
    "ukraine",
    "Украина",
    "🇺🇦",
    "civ",
    "Ориентир: большая это в Восточной Европе, известная православными церквями, черноморскими курортами и лесистыми горами.",
    [
      [
        "salo",
        "country"
      ],
      [
        "sunflower",
        "country"
      ]
    ]
  ],
  [
    "kerogen",
    "Кероген",
    "🐾",
    "life",
    "Главный признак: полимерные органические материалы, которые расположены в существующих породах, таких как нефтеносные сланцы, и являются одной из форм нетрадиционной нефти.",
    [
      [
        "fossil_ag",
        "pressure"
      ]
    ]
  ],
  [
    "cacao_beans",
    "Какао&ndash;бобы",
    "🐾",
    "life",
    "Обратите внимание: миндалевидные семена, содержащиеся в плоде шоколадного дерева. Источник какао-порошка и какао-масла, из которого изготавливают шоколад.",
    [
      [
        "seed",
        "mexico"
      ]
    ]
  ],
  [
    "bouquet",
    "Букет",
    "🐾",
    "life",
    "Ориентир: срезанные или сорванные цветущие растения, красиво подобранные вместе, обычно для подарка или для помещения их в вазу с целью украшения помещения.",
    [
      [
        "flower",
        "flower"
      ],
      [
        "rose",
        "rose"
      ],
      [
        "flower",
        "paper"
      ],
      [
        "rose",
        "paper"
      ]
    ]
  ],
  [
    "warrior",
    "Воин",
    "🛡️",
    "civ",
    "Главный признак: боец, заточенный на максимальную индивидуальную эффективность.",
    [
      [
        "hunter",
        "weapon"
      ]
    ]
  ],
  [
    "water_lily",
    "Кувшинка",
    "🌊",
    "life",
    "Обратите внимание: водное растение с крупными плавающими листьями и белыми, бело розовыми или жёлтыми цветками, водяная лилия.",
    [
      [
        "flower",
        "lake"
      ]
    ]
  ],
  [
    "dream",
    "Сон",
    "👤",
    "civ",
    "Ориентир: периодически возникающее состояние покоя, которое сопровождается уменьшением возбудимости центральной нервной системы, выключением сознания, расслаблением мускулатуры, замедлением сердечной деятельности, дыхания и т. д.",
    [
      [
        "pillow",
        "human"
      ],
      [
        "night",
        "human"
      ],
      [
        "night",
        "child"
      ],
      [
        "stroller",
        "child"
      ],
      [
        "coffin",
        "vampire"
      ]
    ]
  ],
  [
    "distaff",
    "Прялка",
    "🧰",
    "craft",
    "Главный признак: приспособление для ручного прядения, приводимое в движение ножной педалью.",
    [
      [
        "wheel",
        "wool"
      ]
    ]
  ],
  [
    "yarn",
    "Пряжа",
    "🧰",
    "craft",
    "Ориентир: нить, скрученная из продольно и последовательно расположенных волокон. Пряжу делают из натуральных (это, хлопок, лён, шёлк) или химических волокон.",
    [
      [
        "distaff",
        "wool"
      ]
    ]
  ],
  [
    "fat",
    "Жир",
    "🐾",
    "life",
    "Подсказка ведёт к тому, что природные жиры, извлекаемые из соединительных тканей позвоночных животных.",
    [
      [
        "pig",
        "fire"
      ]
    ]
  ],
  [
    "albert_einstein",
    "Альберт Эйнштейн",
    "🎭",
    "culture",
    "Ищите то, что физик-теоретик, один из основателей современной теоретической физики, лауреат Нобелевской премии по физике 1921 года, общественный деятель-гуманист.",
    [
      [
        "scientist",
        "energy"
      ]
    ]
  ],
  [
    "hero",
    "Герой",
    "👤",
    "civ",
    "Ориентир: человек исключительной смелости и доблести, либо одно из главных действующих лиц литературного или иного произведения культуры. это перед лицом опасности сражается с невзгодами, проявляя изобретательность, мужество или силу.",
    [
      [
        "warrior",
        "dragon"
      ]
    ]
  ],
  [
    "fisherman",
    "Рыболов",
    "🐟",
    "civ",
    "Подсказка ведёт к тому, что человек, который занимается рыбной ловлей как промыслом.",
    [
      [
        "hunter",
        "fish"
      ]
    ]
  ],
  [
    "chicken_coop",
    "Курятник",
    "🏗️",
    "transport",
    "Обратите внимание: результат узнаётся по таким признакам, как помещение.",
    [
      [
        "chicken",
        "hut"
      ]
    ]
  ],
  [
    "mole",
    "Крот",
    "🐾",
    "life",
    "Главный признак: млекопитающее из отряда насекомоядных, живущее под землёй.",
    [
      [
        "earth",
        "mouse_ag"
      ]
    ]
  ],
  [
    "starfish",
    "Морская звезда",
    "⭐",
    "life",
    "Подсказка ведёт к тому, что морское беспозвоночное животное, имеющее форму пятилучевой звезды.",
    [
      [
        "star",
        "ocean"
      ],
      [
        "star",
        "sea"
      ]
    ]
  ],
  [
    "hive",
    "Улей",
    "🏗️",
    "transport",
    "Ищите то, что результат узнаётся по таким признакам, как жилище.",
    [
      [
        "hut",
        "bee"
      ],
      [
        "hut",
        "honey"
      ],
      [
        "nest",
        "bee"
      ]
    ]
  ],
  [
    "usa",
    "США",
    "🇺🇸",
    "civ",
    "Главный признак: государство, состоящее из 50 штатов, занимает значительную часть Северной Америки.",
    [
      [
        "country",
        "eagle"
      ],
      [
        "country",
        "hamburger"
      ]
    ]
  ],
  [
    "pajamas",
    "Пижама",
    "👤",
    "civ",
    "Обратите внимание: спальный или домашний, вместо халата, костюм из лёгкой ткани, состоящий из куртки и брюк.",
    [
      [
        "dream",
        "clothes"
      ]
    ]
  ],
  [
    "ent",
    "Энт",
    "✨",
    "myst",
    "Ищите то, что распространённая раса существ в фентези-мирах, ожившие деревья или тесно связанные с деревьями создания.",
    [
      [
        "tree",
        "life"
      ]
    ]
  ],
  [
    "gorgonzola",
    "Горгонзола",
    "🍽️",
    "food",
    "Ищите то, что наиболее популярный итальянский это с благородной голубой плесенью.",
    [
      [
        "cheese",
        "mold"
      ]
    ]
  ],
  [
    "statue_of_liberty",
    "Статуя Свободы",
    "🎭",
    "culture",
    "Ориентир: колоссальная скульптура в стиле Наполеона III, или стиле Второй империи, расположенная в это на острове Свободы, находящемся в Верхней Нью-Йоркской бухте примерно в 3 километрах к юго-западу от южной оконечности острова Манхэттен.",
    [
      [
        "statue",
        "usa"
      ]
    ]
  ],
  [
    "nessie",
    "Лохнесское чудовище",
    "✨",
    "myst",
    "Обратите внимание: водное чудовище, согласно легендам, обитающее в шотландском озере Лох-Несс.",
    [
      [
        "lake",
        "beast"
      ]
    ]
  ],
  [
    "blade",
    "Лезвие",
    "🪨",
    "geo",
    "Обратите внимание: острая заточенная грань клинка режущего, рубящего инструмента или оружия.",
    [
      [
        "metal",
        "sword"
      ]
    ]
  ],
  [
    "scotland",
    "Шотландия",
    "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    "civ",
    "Ищите то, что самая северная это Соединенного Королевства Великобритании и Северной Ирландии.",
    [
      [
        "nessie",
        "country"
      ]
    ]
  ],
  [
    "syringe",
    "Шприц",
    "🧰",
    "craft",
    "Ориентир: медицинский инструмент, предназначенный для инъекций, диагностических пункций, отсасывания патологического содержимого из полостей.",
    [
      [
        "needle",
        "doctor_ag"
      ]
    ]
  ],
  [
    "tattoo",
    "Татуировка",
    "🧰",
    "craft",
    "Главный признак: наколотые особой краской узоры на теле. С помощью иглы под кожу вводится пигмент, который остается там навсегда.",
    [
      [
        "needle",
        "paint"
      ]
    ]
  ],
  [
    "banana",
    "Банан",
    "🍽️",
    "food",
    "Подсказка ведёт к тому, что высокое тропическое растение с очень большими листьями, а также его сладкий мучнистый плод.",
    [
      [
        "monkey",
        "fruit"
      ]
    ]
  ],
  [
    "bonsai",
    "Бонсай",
    "🐾",
    "life",
    "Главный признак: искусство выращивания точной копии настоящего дерева в миниатюре. Хотя слово «это» является японским, описываемое им искусство возникло в китайской империи.",
    [
      [
        "tree",
        "scissors"
      ]
    ]
  ],
  [
    "table_of_mendeleev",
    "Таблица Менделеева",
    "🎭",
    "culture",
    "Ищите то, что классификация химических элементов, устанавливающая зависимость различных свойств элементов от заряда их атомного ядра. Бытует мнение, что таблица приснилась Менделееву во сне.",
    [
      [
        "mendeleev",
        "dream"
      ]
    ]
  ],
  [
    "moon_rover",
    "Луноход",
    "🌙",
    "space",
    "Главный признак: транспортное средство, предназначенное для передвижений по поверхности Луны. это мог управляться как дистанционно, так и служить самоходным роботом.",
    [
      [
        "moon",
        "cart"
      ],
      [
        "moon",
        "car"
      ]
    ]
  ],
  [
    "kilt",
    "Килт",
    "👤",
    "civ",
    "Ориентир: предмет мужской шотландской национальной одежды, традиционная это горцев Шотландии. это представляет собой кусок ткани, обёрнутый вокруг талии, плиссированный сзади и закреплённый с помощью 2—3 пряжек и ремешков; обычно это носит.",
    [
      [
        "scotland",
        "clothes"
      ]
    ]
  ],
  [
    "lion",
    "Лев",
    "🐾",
    "life",
    "Главный признак: крупное хищное животное из семейства кошачьих с короткой желтоватой шерстью и с длинной гривой у самцов.",
    [
      [
        "cat",
        "beast"
      ],
      [
        "cat",
        "blood"
      ]
    ]
  ],
  [
    "hamster",
    "Хомяк",
    "🐾",
    "life",
    "Ищите то, что маленькие грызуны с плотным телосложением, короткими лапками, маленькими ушками и короткими хвостиками.",
    [
      [
        "wheel",
        "mouse_ag"
      ],
      [
        "wheel",
        "squirrel"
      ]
    ]
  ],
  [
    "graveyard",
    "Кладбище",
    "👤",
    "civ",
    "Обратите внимание: территория, специально предназначенная для погребения умерших или их праха после кремации.",
    [
      [
        "grave",
        "grave"
      ]
    ]
  ],
  [
    "caviar",
    "Икра",
    "🍽️",
    "food",
    "Ищите то, что скопление зерновидных яичек, откладываемых рыбами, амфибиями, моллюсками и другими водными животными.",
    [
      [
        "fish",
        "fish"
      ],
      [
        "fish",
        "egg"
      ]
    ]
  ],
  [
    "pegasus",
    "Пегас",
    "✨",
    "myst",
    "Ищите то, что крылатый конь Зевса, верховного бога всего пантеона богов Древней Греции, обитавших на горе Олимп.",
    [
      [
        "horse",
        "bird"
      ]
    ]
  ],
  [
    "eclipse",
    "Затмение",
    "🌤️",
    "sky",
    "Обратите внимание: астрономическая ситуация, при которой одно небесное тело заслоняет свет от другого небесного тела. Наиболее известны лунные и солнечные затмения.",
    [
      [
        "sun",
        "moon"
      ]
    ]
  ],
  [
    "cardboard",
    "Картон",
    "🚗",
    "transport",
    "Главный признак: результат узнаётся по таким признакам, как толстая, твердая.",
    [
      [
        "paper",
        "paper"
      ]
    ]
  ],
  [
    "panda",
    "Панда",
    "🐾",
    "life",
    "Подсказка ведёт к тому, что одно из редчайших животных, занесённых в международную Красную книгу. В дикой природе рацион большой панды почти полностью состоит из бамбука.",
    [
      [
        "bear",
        "bamboo"
      ]
    ]
  ],
  [
    "foil",
    "Фольга",
    "🪨",
    "geo",
    "Главный признак: тончайший металлический лист, используется в производстве зеркал, для тиснения, для упаковки пищевых изделий и прочего.",
    [
      [
        "metal",
        "paper"
      ]
    ]
  ],
  [
    "flashlight",
    "Фонарик",
    "☀️",
    "sky",
    "Ориентир: небольшой носимый источник света для индивидуального использования.",
    [
      [
        "tool",
        "light"
      ]
    ]
  ],
  [
    "shuriken",
    "Сюрикен",
    "🪐",
    "space",
    "Обратите внимание: вид японской металлической метательной пластины. Состоит из базы 3-4 мм толщиной, различногоколичества лепестков разнообразной формы и зачастую стабилизирующегоотверстия.",
    [
      [
        "star",
        "blade"
      ]
    ]
  ],
  [
    "bitcoin",
    "Биткоин",
    "🪙",
    "tech",
    "Ищите то, что криптовалюта, которая генерируется сетями компьютеров и может использоваться во многих случаях при совершении онлайн-платежей.",
    [
      [
        "money",
        "internet"
      ],
      [
        "coin",
        "internet"
      ]
    ]
  ],
  [
    "firefighter",
    "Пожарный",
    "🔥",
    "civ",
    "Ориентир: работник подразделения профессиональной пожарной охраны, штатная единица расчёта пожарного автомобиля.",
    [
      [
        "hero",
        "fire"
      ]
    ]
  ],
  [
    "foam",
    "Пена",
    "🧰",
    "craft",
    "Подсказка ведёт к тому, что дисперсная система, образованная множеством пузырьков газа, разделённых тонкими плёнками жидкости (мыльная это, сбитые сливки, белки и др. ).",
    [
      [
        "soap",
        "water"
      ]
    ]
  ],
  [
    "fire_extinguisher",
    "Огнетушитель",
    "🔥",
    "craft",
    "Главный признак: переносное или передвижное устройство для тушения очагов пожара за счет выпуска запасенного огнетушащего вещества.",
    [
      [
        "foam",
        "fire"
      ],
      [
        "carbon_dioxide",
        "fire"
      ]
    ]
  ],
  [
    "wizard_ag",
    "Маг",
    "✨",
    "civ",
    "Ищите то, что человек, практикующий магию посредством сверхъестественных явлений.",
    [
      [
        "oldman",
        "energy"
      ],
      [
        "oldman",
        "magic"
      ]
    ]
  ],
  [
    "ring",
    "Кольцо",
    "🪨",
    "geo",
    "Обратите внимание: ювелирное изделие из золота другого драгоценного металла в форме обода, круга, с пустым пространством внутри линии круга. Надевают на пальцы в качестве украшения или символа брака, которым, по обычаю, обмениваются жених с невесто.",
    [
      [
        "brilliant",
        "gold"
      ],
      [
        "circle",
        "gold"
      ],
      [
        "circle",
        "metal"
      ]
    ]
  ],
  [
    "poison_weapon",
    "Отравленное оружие",
    "⚙️",
    "tech",
    "Ориентир: результат узнаётся по особой форме, назначению или характерному поведению.",
    [
      [
        "poison",
        "weapon"
      ]
    ]
  ],
  [
    "snowdrop",
    "Подснежник",
    "❄️",
    "life",
    "Главный признак: лесной это, развивающийся под снегом и расцветающий сразу после его таяния.",
    [
      [
        "snow",
        "flower"
      ]
    ]
  ],
  [
    "calcium",
    "Кальций",
    "🔬",
    "science",
    "Ищите то, что химический элемент II группы периодической системы, атомный номер 20, атомная масса 40,08; относится к щелочно-земельным металлам; tпл 842шC. Содержится в костной ткани позвоночных, раковинах моллюсков, яичной скорлупе.",
    [
      [
        "shell",
        "pressure"
      ],
      [
        "bone",
        "pressure"
      ],
      [
        "skeleton",
        "pressure"
      ]
    ]
  ],
  [
    "karaoke",
    "Караоке",
    "🍽️",
    "food",
    "Подсказка ведёт к тому, что развлечение, заключающееся в непрофессиональном пении с использованием электронного устройства, позволяющего петь под заранее записанную музыку. это было изобретено в Японии во второй половине XX века.",
    [
      [
        "beer",
        "music"
      ],
      [
        "tequila",
        "music"
      ],
      [
        "vodka",
        "music"
      ],
      [
        "champagne",
        "music"
      ],
      [
        "sake",
        "music"
      ],
      [
        "cocktail",
        "music"
      ]
    ]
  ],
  [
    "ninja",
    "Ниндзя",
    "👤",
    "civ",
    "Ориентир: разведчик-диверсант, шпион, лазутчик и наёмный убийца в средневековой Японии; это, владеющий искусством ниндзюцу. В функции это входили шпионаж, обман и неожиданные атаки.",
    [
      [
        "shuriken",
        "human"
      ]
    ]
  ],
  [
    "beer_coaster",
    "Бирдекель",
    "🍽️",
    "food",
    "Главный признак: подставка под кружку пива, предназначенная для защиты стола от царапин и капель пивной пены. Ставится под пивную кружку на открытом воздухе, например в летних кафе.",
    [
      [
        "beer",
        "cardboard"
      ]
    ]
  ],
  [
    "snowman",
    "Снеговик",
    "❄️",
    "civ",
    "Ищите то, что стилизованная снежная фигура человека, скульптура. Лепка снеговика или снежной бабы — зимняя забава, зародившаяся в древние времена.",
    [
      [
        "snow",
        "human"
      ]
    ]
  ],
  [
    "lichen",
    "Лишайник",
    "🐾",
    "life",
    "Подсказка ведёт к тому, что низшее растение, состоящее из гриба и это, образующих совместно новый сложный организм, растущий на камнях, на коре деревьев, на земле.",
    [
      [
        "algae",
        "mushroom"
      ]
    ]
  ],
  [
    "neuron",
    "Нейрон",
    "⚙️",
    "tech",
    "Главный признак: электрически возбудимая клетка, которая обрабатывает, хранит и передает информацию с помощью электрических и химических сигналов.",
    [
      [
        "electricity",
        "life"
      ]
    ]
  ],
  [
    "constellation",
    "Созвездие",
    "🪐",
    "space",
    "Обратите внимание: результат узнаётся по таким признакам, как отдельная, группа.",
    [
      [
        "star",
        "star"
      ],
      [
        "star",
        "astronomer"
      ]
    ]
  ],
  [
    "calendar",
    "Календарь",
    "🧰",
    "craft",
    "Главный признак: специальная таблица или книжка, в которой все дни года разделены на месяцы и недели.",
    [
      [
        "time",
        "paper"
      ],
      [
        "day",
        "paper"
      ]
    ]
  ],
  [
    "divider",
    "Циркуль",
    "🎭",
    "culture",
    "Обратите внимание: это для черчения окружностей и дуг, также может быть использован для измерения расстояний, в частности, на картах. Может быть использован в геометрии, черчении, для навигации и других целей.",
    [
      [
        "pencil",
        "needle"
      ],
      [
        "pencil",
        "tool"
      ]
    ]
  ],
  [
    "horseshoe",
    "Подкова",
    "🐾",
    "life",
    "Ищите то, что железная изогнутая пластинка, прибиваемая к конскому копыту для предохранения его от повреждения и скольжения.",
    [
      [
        "horse",
        "tool"
      ]
    ]
  ],
  [
    "circle",
    "Круг",
    "🧰",
    "craft",
    "Главный признак: часть плоскости, которая лежит внутри окружности.",
    [
      [
        "paper",
        "divider"
      ]
    ]
  ],
  [
    "ruler",
    "Линейка",
    "🎭",
    "culture",
    "Подсказка ведёт к тому, что прямая планка для вычерчивания прямых линий.",
    [
      [
        "pencil",
        "plank"
      ]
    ]
  ],
  [
    "pterodactyl",
    "Птеродактиль",
    "🐾",
    "life",
    "Ориентир: летающее пресмыкающееся юрского и мелового периода из группы птерозавров, с летательной перепонкой, прикрепленной к пальцам.",
    [
      [
        "dinosaur",
        "bird"
      ]
    ]
  ],
  [
    "absinthe",
    "Абсент",
    "🍽️",
    "food",
    "Главный признак: алкогольный напиток, содержащий обычно около 70 % алкоголя. Важнейший компонент абсента — экстракт горькой полыни, в эфирных маслах которой содержится большое количество туйона.",
    [
      [
        "grass",
        "alcohol"
      ]
    ]
  ],
  [
    "scarecrow",
    "Пугало",
    "🚗",
    "transport",
    "Подсказка ведёт к тому, что чучело, выставляемое в садах и огородах, служащее для отгона птиц, клюющих урожай. это часто делается внешне похожим на человека: как правило, это расположенная на палке старая одежда, которой с помощью соломы придана форма.",
    [
      [
        "human",
        "hay"
      ]
    ]
  ],
  [
    "clothes_moth",
    "Моль",
    "🐾",
    "life",
    "Подсказка ведёт к тому, что мелкая это, гусеница которой является вредителем шерстяных вещей, хлебных зёрен и растений.",
    [
      [
        "butterfly",
        "clothes"
      ],
      [
        "butterfly",
        "wool"
      ]
    ]
  ],
  [
    "postman",
    "Почтальон",
    "🧑",
    "civ",
    "Ищите то, что это, разносящий почту: письма, газеты, посылки, телеграммы и почтовые переводы.",
    [
      [
        "mail",
        "human"
      ],
      [
        "letter",
        "human"
      ]
    ]
  ],
  [
    "ice_skate",
    "Коньки",
    "❄️",
    "elem",
    "Подсказка ведёт к тому, что спортивный или прогулочный инвентарь, который представляет собой совокупность специализированных ботинок и прикрепляемой к ним системе подвижных или неподвижных лезвий. Используются для передвижения по ровной твёрдой ледяной пове.",
    [
      [
        "ice",
        "blade"
      ]
    ]
  ],
  [
    "nest",
    "Гнездо",
    "🐾",
    "life",
    "Ориентир: сооружение, строящееся различными видами животных и служащее как место для сна, жилья и высиживания яиц и вскармливания потомства. Гнёзда могут располагаться на деревьях, под крышами и на земле.",
    [
      [
        "egg",
        "hay"
      ]
    ]
  ],
  [
    "gun",
    "Огнестрельное оружие",
    "⚙️",
    "tech",
    "Главный признак: это, предназначенное для механического поражения цели на расстоянии метаемым снаряжением, получающим направленное движение за счет энергии порохового или иного заряда.",
    [
      [
        "weapon",
        "gunpowder"
      ]
    ]
  ],
  [
    "soldier",
    "Солдат",
    "🛡️",
    "civ",
    "Обратите внимание: результат узнаётся по таким признакам, как рядовой, военнослужащий.",
    [
      [
        "warrior",
        "gun"
      ]
    ]
  ],
  [
    "boar",
    "Кабан",
    "🐾",
    "life",
    "Обратите внимание: нежвачное, парнокопытное животное из рода свиней. Является предком домашней свиньи.",
    [
      [
        "pig",
        "forest"
      ]
    ]
  ],
  [
    "ouija_board",
    "Спиритическая доска",
    "✨",
    "myst",
    "Обратите внимание: это для спиритических сеансов вызова душ умерших с нанесёнными на неё буквами алфавита, цифрами от 0 до 9, словами «да» и «нет» и со специальной планшеткой-указателем.",
    [
      [
        "ghost",
        "plank"
      ]
    ]
  ],
  [
    "pelt",
    "Шкура",
    "🐾",
    "life",
    "Ориентир: снятая с убитого животного кожа с шерстью. Сырьё для кожевенного производства.",
    [
      [
        "boar",
        "hunter"
      ]
    ]
  ],
  [
    "luck",
    "Удача",
    "🐾",
    "life",
    "Обратите внимание: субъективная положительная оценка случайного или непредсказуемого стечения обстоятельств.",
    [
      [
        "horseshoe",
        "human"
      ]
    ]
  ],
  [
    "ostrich",
    "Страус",
    "🐾",
    "life",
    "Обратите внимание: самая крупная бегающая (не летающая) это жарких стран с красивым оперением.",
    [
      [
        "bird",
        "sand"
      ],
      [
        "bird",
        "desert"
      ]
    ]
  ],
  [
    "astronomer",
    "Астроном",
    "👤",
    "civ",
    "Обратите внимание: это, изучающий небесные тела.",
    [
      [
        "scientist",
        "star"
      ],
      [
        "scientist",
        "planet"
      ],
      [
        "scientist",
        "telescope"
      ]
    ]
  ],
  [
    "pasta_ag",
    "Паста",
    "🍽️",
    "food",
    "Главный признак: общее название для любых изделий из теста. Слово является калькой с итальянского pasta (тесто, пирог).",
    [
      [
        "egg",
        "flour"
      ]
    ]
  ],
  [
    "apple",
    "Яблоко",
    "🍽️",
    "food",
    "Ориентир: плод яблони, который употребляется в пищу в свежем виде, служит сырьём в кулинарии и для приготовления напитков.",
    [
      [
        "fruit",
        "tree"
      ]
    ]
  ],
  [
    "van_gogh",
    "Винсент ван Гог",
    "🎭",
    "culture",
    "Ориентир: нидерландский это-постимпрессионист, чьи работы оказали вневременное влияние на живопись XX века. За десять с небольшим лет он создал более 2100 произведений, включая около 860 картин маслом.",
    [
      [
        "sunflower",
        "artist"
      ]
    ]
  ],
  [
    "saturn",
    "Сатурн",
    "🪐",
    "space",
    "Ищите то, что шестая это по удалённости от Солнца и вторая по размерам это в Солнечной системе после Юпитера. это классифицируется как газовая это-гигант.",
    [
      [
        "ring",
        "planet"
      ]
    ]
  ],
  [
    "piranha",
    "Пиранья",
    "🐾",
    "life",
    "Подсказка ведёт к тому, что общее название хищных рыб из нескольких родов семейства пираньевых, обитающих в водоёмах Южной Америки. Зубы пираний напоминают не пилу, а скорее бритву или остро наточенные ножницы.",
    [
      [
        "fish",
        "blade"
      ]
    ]
  ],
  [
    "clover",
    "Клевер",
    "🐾",
    "life",
    "Ищите то, что многолетнее травянистое растение, которое произрастает в Азии и Европе. Первый лист символизирует надежду, второй – веру, третий – любовь, а четвертый – удачу.",
    [
      [
        "grass",
        "luck"
      ]
    ]
  ],
  [
    "isaak_newton",
    "Исаак Ньютон",
    "🎭",
    "culture",
    "Главный признак: английский физик, математик, механик и астроном, один из создателей классической физики и математического анализа. Ньютон открыл свой знаменитый закон всемирного тяготения после того, как ему на голову упало это.",
    [
      [
        "scientist",
        "apple"
      ]
    ]
  ],
  [
    "bush",
    "Куст",
    "🐾",
    "life",
    "Подсказка ведёт к тому, что растение с древовидными ветвями, начинающимися почти от самой поверхности земли.",
    [
      [
        "earth",
        "grass"
      ]
    ]
  ],
  [
    "assassin",
    "Убийца",
    "👤",
    "civ",
    "Ориентир: это, убивший, преступно умертвивший кого-нибудь.",
    [
      [
        "human",
        "poison_weapon"
      ]
    ]
  ],
  [
    "observatory",
    "Обсерватория",
    "🏗️",
    "transport",
    "Обратите внимание: сооружение, используемое для наблюдения и слежения за различными объектами и явлениями на Земле и в космосе.",
    [
      [
        "building",
        "telescope"
      ],
      [
        "building",
        "astronomer"
      ]
    ]
  ],
  [
    "berry",
    "Ягода",
    "🍎",
    "food",
    "Ориентир: небольшой сочный плод кустарников, полукустарников, кустарничков и травянистых растений.",
    [
      [
        "fruit",
        "bush"
      ]
    ]
  ],
  [
    "smog",
    "Смог",
    "👤",
    "civ",
    "Подсказка ведёт к тому, что густая удушливая пелена дыма, копоти, выхлопных газов и т. п.",
    [
      [
        "city",
        "fog"
      ],
      [
        "city",
        "cloud"
      ],
      [
        "city",
        "smoke"
      ]
    ]
  ],
  [
    "galileo",
    "Галилео Галилей",
    "🎭",
    "culture",
    "Главный признак: итальянский физик, механик, это, философ, математик, оказавший значительное влияние на науку своего времени. Он одним из первых использовал это для наблюдения небесных тел и сделал ряд выдающихся астрономических открытий.",
    [
      [
        "astronomer",
        "telescope"
      ]
    ]
  ],
  [
    "obsidian",
    "Обсидиан",
    "🔹",
    "elem",
    "Главный признак: магматическая горная порода, разновидность вулканического стекла, образующегося в результате быстрого охлаждения лавы.",
    [
      [
        "lava",
        "glass"
      ]
    ]
  ],
  [
    "acid_rain",
    "Кислотный дождь",
    "🌧️",
    "sky",
    "Ищите то, что осадки, при которых наблюдается понижение водородного показателя дождевых осадков из-за загрязнений воздуха кислотными оксидами, обычно оксидами серы и оксидами азота.",
    [
      [
        "rain",
        "smog"
      ]
    ]
  ],
  [
    "rum",
    "Ром",
    "🍽️",
    "food",
    "Главный признак: крепкий напиток из перебродившего сока или патоки, получаемых при производстве тростникового сахара. это известен как напиток пиратов, моряков и разбойников.",
    [
      [
        "cane",
        "alcohol"
      ],
      [
        "alcohol",
        "pirate"
      ]
    ]
  ],
  [
    "sarcophagus",
    "Саркофаг",
    "👤",
    "civ",
    "Подсказка ведёт к тому, что резной каменный это, который использовался для захоронения знатных людей. Слово это является частью древнегреческого именного словосочетания λίθος σαρκοφάγος (lithos sarcophagos, букв.",
    [
      [
        "coffin",
        "mummy"
      ],
      [
        "coffin",
        "gold"
      ]
    ]
  ],
  [
    "beekeeper",
    "Пчеловод",
    "👤",
    "civ",
    "Главный признак: это занимающийся содержанием и разведением пчёл.",
    [
      [
        "bee",
        "human"
      ],
      [
        "hive",
        "human"
      ]
    ]
  ],
  [
    "honeycombs",
    "Соты",
    "🍽️",
    "food",
    "Главный признак: восковые постройки медоносных и близких к ним видов пчёл, состоящие из упорядоченных ячеек.",
    [
      [
        "hive",
        "bee"
      ]
    ]
  ],
  [
    "radio_wave",
    "Радиоволна",
    "🌊",
    "tech",
    "Ищите то, что электромагнитная волна, используемая для беспроволочной передачи звуков и знаков на расстояние.",
    [
      [
        "magnet",
        "electricity"
      ]
    ]
  ],
  [
    "sand_storm",
    "Песчаная буря",
    "🌪️",
    "geo",
    "Ориентир: атмосферное явление в виде переноса больших количеств пыли (песка, частиц почвы, песчинок) ветром с земной поверхности в слое высотой несколько метров со значительным ухудшением горизонтальной видимости.",
    [
      [
        "storm_ag",
        "sand"
      ],
      [
        "storm_ag",
        "desert"
      ]
    ]
  ],
  [
    "potter_wheel",
    "Гончарный круг",
    "🧰",
    "craft",
    "Ориентир: устройство для формования посуды из сырой глины, позволяющий использовать инерцию вращения для создания симметричной формы изделий (так называемых тел вращения) и повышения производительности труда.",
    [
      [
        "circle",
        "clay"
      ]
    ]
  ],
  [
    "picture",
    "Картина",
    "🧰",
    "craft",
    "Подсказка ведёт к тому, что произведение живописи, имеющее самостоятельное художественное значение и обладающее свойством законченности (в отличие от этюда и эскиза).",
    [
      [
        "artist",
        "paint"
      ],
      [
        "artist",
        "paper"
      ],
      [
        "paper",
        "paint"
      ],
      [
        "van_gogh",
        "paint"
      ]
    ]
  ],
  [
    "hevea",
    "Гевея",
    "🐾",
    "life",
    "Ищите то, что род вечнозеленых деревьев из семейства молочайных, который включает в себя около 12 видов. Наиболее известный вид - это Бразильская.",
    [
      [
        "brazil",
        "tree"
      ]
    ]
  ],
  [
    "iodine",
    "Йод",
    "🐾",
    "life",
    "Обратите внимание: химический элемент 17-й группы, пятого периода периодической системы химических элементов Д. И.",
    [
      [
        "fire",
        "algae"
      ]
    ]
  ],
  [
    "chariot",
    "Колесница",
    "🏗️",
    "transport",
    "Подсказка ведёт к тому, что большая двухколёсная повозка, использующая как движущую силу скаковых животных. это в ходе развития военной мысли, начиная с 2000 лет до нашей эры, превратилась в один из решающих факторов при ведении боевых действий.",
    [
      [
        "warrior",
        "cart"
      ]
    ]
  ],
  [
    "antenna",
    "Антенна",
    "⚙️",
    "tech",
    "Подсказка ведёт к тому, что часть радиоустановки, служащая для излучения радиоволн при передаче или для улавливания их при приёме.",
    [
      [
        "radio_wave",
        "metal"
      ]
    ]
  ],
  [
    "hacker",
    "Хакер",
    "💻",
    "civ",
    "Главный признак: компьютерный взломщик, проникающий в закрытые информационные сети, банки данных и т. п.",
    [
      [
        "pirate",
        "internet"
      ],
      [
        "pirate",
        "computer"
      ]
    ]
  ],
  [
    "rubber_ag",
    "Резина",
    "🧰",
    "craft",
    "Главный признак: эластичный материал, представляющий собой вулканизированный это.",
    [
      [
        "rubber",
        "fire"
      ],
      [
        "rubber",
        "sulfur"
      ]
    ]
  ],
  [
    "casino",
    "Казино",
    "🏗️",
    "transport",
    "Обратите внимание: игорное заведение, в котором с использованием рулетки, игровых столов для карточных игр и игры в кости, игровых автоматов, а также другого игорного оборудования осуществляется проведение азартных игр с объявленным денежным или ины.",
    [
      [
        "luck",
        "building"
      ]
    ]
  ],
  [
    "love",
    "Любовь",
    "👤",
    "civ",
    "Ищите то, что чувство, свойственное человеку, глубокая привязанность и устремлённость к другому человеку или объекту, чувство глубокой симпатии. это включает в себя ряд сильных и позитивных эмоциональных и психических состояний, от самой возвы.",
    [
      [
        "human",
        "human"
      ]
    ]
  ],
  [
    "postmark",
    "Почтовая марка",
    "🧰",
    "craft",
    "Ищите то, что маленький, обычно четырехугольный, бумажный знак с каким-либо изображением и обозначением цены, который наклеивается на открытку или бланк в знак почтовых и некоторых других сборов.",
    [
      [
        "letter",
        "picture"
      ],
      [
        "mail",
        "picture"
      ]
    ]
  ],
  [
    "silk",
    "Шёлк",
    "🧰",
    "craft",
    "Ищите то, что мягкая это из нитей, добываемых из кокона тутового шелкопряда. Изначально это происходил из Китая и был важным товаром, который доставлялся в Европу по Шёлковому пути.",
    [
      [
        "yarn",
        "butterfly"
      ],
      [
        "fabric",
        "butterfly"
      ]
    ]
  ],
  [
    "laser",
    "Лазер",
    "⚙️",
    "tech",
    "Ориентир: частички света (протоны), возбужденные током, излучают энергию в форме света. Этот это собирается в пучок и образуются лазерные лучи.",
    [
      [
        "light",
        "fire"
      ]
    ]
  ],
  [
    "stained_glass",
    "Витраж",
    "🪞",
    "craft",
    "Подсказка ведёт к тому, что это или узор из цветного стекла. Например, в окнах или дверях.",
    [
      [
        "glass",
        "picture"
      ]
    ]
  ],
  [
    "confetti",
    "Конфетти",
    "🧰",
    "craft",
    "Подсказка ведёт к тому, что разноцветные, обычно бумажные кружочки мелкого размера, неотъемлемый атрибут праздников, в основном, балов, карнавалов, триумфальных шествий, но также дней рождения и свадебных торжеств. это осыпают друг друга участники празднест.",
    [
      [
        "paper",
        "scissors"
      ]
    ]
  ],
  [
    "edison",
    "Томас Эдисон",
    "🎭",
    "culture",
    "Ищите то, что изобретатель, обладающий невероятным талантом предпринимателя. Автор 1093 патентов в Америке и почти трех тысяч патентов в других странах.",
    [
      [
        "scientist",
        "lamp"
      ]
    ]
  ],
  [
    "shisha",
    "Кальян",
    "🐾",
    "life",
    "Ориентир: восточный курительный прибор, в котором табачный дым охлаждается и очищается, проходя через воду.",
    [
      [
        "tobacco",
        "water"
      ]
    ]
  ],
  [
    "candy",
    "Конфета",
    "🍽️",
    "food",
    "Ищите то, что кондитерские изделия на основе сахарно-паточного сиропа с добавлением различных видов пищевого сырья.",
    [
      [
        "chocolate",
        "paper"
      ],
      [
        "chocolate",
        "foil"
      ],
      [
        "caramel",
        "paper"
      ]
    ]
  ],
  [
    "pinata",
    "Пиньята",
    "🧰",
    "craft",
    "Подсказка ведёт к тому, что мексиканская по происхождению полая игрушка довольно крупных размеров, изготовленная из папье-маше или лёгкой обёрточной бумаги с орнаментом и украшениями. Своей формой это воспроизводит фигуры животных (обычно лошадей) или геоме.",
    [
      [
        "confetti",
        "candy"
      ]
    ]
  ],
  [
    "india",
    "Индия",
    "🇮🇳",
    "civ",
    "Ищите то, что огромная это в Южной Азии с разнообразным рельефом: на ее территории расположены как горные вершины Гималаев, так и побережье Индийского океана.",
    [
      [
        "shisha",
        "country"
      ]
    ]
  ],
  [
    "water_strider",
    "Водомерка",
    "🌊",
    "life",
    "Ищите то, что небольшое насекомое отряда клопов с тонким телом и длинными ногами, способное быстро передвигаться по воде.",
    [
      [
        "water",
        "beetle"
      ],
      [
        "lake",
        "beetle"
      ]
    ]
  ],
  [
    "geode",
    "Жеода",
    "🪨",
    "geo",
    "Главный признак: замкнутая полость в горной породе, заполненная минералом.",
    [
      [
        "limestone",
        "salt"
      ]
    ]
  ],
  [
    "orca",
    "Косатка",
    "🐾",
    "life",
    "Обратите внимание: китообразное хищное морское млекопитающее семейства дельфиновых. Косатки обитают преимущественно в Ледовитом океане и в северной части Атлантического океана.",
    [
      [
        "whale",
        "ice"
      ],
      [
        "whale",
        "assassin"
      ]
    ]
  ],
  [
    "sewing_machine",
    "Швейная машинка",
    "⚙️",
    "tech",
    "Ориентир: техническое устройство для соединения и отделки материалов методом шитья. Швейные машины применяются в швейной, трикотажной, обувной и других отраслях лёгкой промышленности, а также в быту.",
    [
      [
        "needle",
        "electricity"
      ]
    ]
  ],
  [
    "fly",
    "Муха",
    "🐾",
    "life",
    "Обратите внимание: общее название широко распространённых двукрылых насекомых.",
    [
      [
        "butterfly",
        "dung"
      ],
      [
        "butterfly",
        "worm"
      ]
    ]
  ],
  [
    "mosquito",
    "Комар",
    "🐾",
    "life",
    "Подсказка ведёт к тому, что небольшое крылатое кровососущее насекомое.",
    [
      [
        "fly",
        "blood"
      ]
    ]
  ],
  [
    "watermelon",
    "Арбуз",
    "🌊",
    "food",
    "Обратите внимание: однолетнее травянистое растение семейства тыквенные, бахчевая культура. С точки зрения ботаники, это – это настоящая это.",
    [
      [
        "berry",
        "water"
      ]
    ]
  ],
  [
    "birdhouse",
    "Скворечник",
    "🐦",
    "transport",
    "Ориентир: деревянная конструкция, которая предназначена для искусственного гнездовья птиц.",
    [
      [
        "bird",
        "hut"
      ],
      [
        "hut",
        "tree"
      ]
    ]
  ],
  [
    "tent",
    "Палатка",
    "🏗️",
    "transport",
    "Ищите то, что временное летнее помещение из ткани.",
    [
      [
        "fabric",
        "hut"
      ]
    ]
  ],
  [
    "beaver",
    "Бобр",
    "🐾",
    "life",
    "Ориентир: животное из отряда грызунов с ценным мехом.",
    [
      [
        "beast",
        "wood"
      ]
    ]
  ],
  [
    "alarm_clock",
    "Будильник",
    "⏳",
    "sky",
    "Главный признак: это с особым заводом, звонящие в требуемое это.",
    [
      [
        "clock",
        "sound"
      ],
      [
        "time",
        "sound"
      ]
    ]
  ],
  [
    "methane",
    "Метан",
    "🐾",
    "life",
    "Ориентир: простейший по составу предельный углеводород, при нормальных условиях бесцветный газ без вкуса и запаха. Малорастворим в воде, почти в два раза легче воздуха.",
    [
      [
        "swamp",
        "air"
      ]
    ]
  ],
  [
    "colorado_beetle",
    "Колорадский жук",
    "🐞",
    "life",
    "Ориентир: опасный вредитель картофеля и других культур из семейства пасленовых.",
    [
      [
        "potatoes",
        "beetle"
      ]
    ]
  ],
  [
    "flute",
    "Флейта",
    "🐾",
    "life",
    "Ориентир: деревянный духовой музыкальный инструмент высокого тона в виде прямой трубки с отверстиями и клапанами.",
    [
      [
        "bamboo",
        "sound"
      ],
      [
        "bamboo",
        "music"
      ],
      [
        "cane",
        "sound"
      ],
      [
        "cane",
        "music"
      ]
    ]
  ],
  [
    "vinegar",
    "Уксус",
    "🍽️",
    "food",
    "Ориентир: кислота, образующаяся в процессе брожения виноградного или яблочного сока.",
    [
      [
        "wine",
        "oxygen"
      ],
      [
        "wine",
        "air"
      ],
      [
        "juice",
        "oxygen"
      ],
      [
        "juice",
        "air"
      ]
    ]
  ],
  [
    "archipelago",
    "Архипелаг",
    "🪨",
    "geo",
    "Ищите то, что группа островов, расположенных близко друг к другу. Как правило, острова в архипелаге имеют одно и то же происхождение и сходное геологическое строение.",
    [
      [
        "island",
        "island"
      ]
    ]
  ],
  [
    "quicksand",
    "Зыбучий песок",
    "🏜️",
    "geo",
    "Ориентир: пески, перенасыщенные воздухом или влагой восходящих источников, и способные вследствие этого засасывать вглубь попадающие на них предметы.",
    [
      [
        "sand",
        "swamp"
      ]
    ]
  ],
  [
    "projector",
    "Проектор",
    "🌤️",
    "sky",
    "Ищите то, что аппарат для передачи изображений на экран.",
    [
      [
        "light",
        "picture"
      ]
    ]
  ],
  [
    "crystal_ball",
    "Магический шар",
    "🎮",
    "geo",
    "Главный признак: известный по многим легендам европейского Средневековья предмет, представляющий собой кристаллический или стеклянный шар, который якобы обладает магическими свойствами.",
    [
      [
        "glass",
        "wizard_ag"
      ]
    ]
  ],
  [
    "cotton_candy",
    "Сахарная вата",
    "🍽️",
    "food",
    "Ориентир: рыхлый по консистенции кулинарный продукт, сладость, напоминающий по виду вату. Приготавливается из растопленного сахара, выливаемого сквозь сито на быстро вращающийся холодный металлический барабан или конус.",
    [
      [
        "sugar",
        "cloud"
      ]
    ]
  ],
  [
    "horoscope",
    "Гороскоп",
    "🪐",
    "space",
    "Подсказка ведёт к тому, что упорядоченное отображение взаимного расположения планет на звёздном небе в определенный промежуток времени по знакам зодиака. Используется в астрологии с целью предсказания судьбы.",
    [
      [
        "human",
        "constellation"
      ],
      [
        "life",
        "constellation"
      ]
    ]
  ],
  [
    "toy",
    "Игрушка",
    "👤",
    "civ",
    "Главный признак: предмет, предназначенный для взаимодействия с предметом в целях игры и познавания мира.",
    [
      [
        "child",
        "bear"
      ],
      [
        "child",
        "engine"
      ],
      [
        "child",
        "dinosaur"
      ],
      [
        "child",
        "transformer"
      ],
      [
        "child",
        "robot"
      ],
      [
        "child",
        "car"
      ]
    ]
  ],
  [
    "fortune_cookie",
    "Печенье с предсказаниями",
    "🍽️",
    "food",
    "Главный признак: ванильные печеньица, в каждое из которых запечена бумажка с мудрыми изречениями, афоризмами или пророчествами.",
    [
      [
        "cookie",
        "paper"
      ],
      [
        "cookie",
        "letter"
      ]
    ]
  ],
  [
    "seahorse",
    "Морской конек",
    "🌊",
    "life",
    "Ориентир: небольшая морская рыбка семейства игловых с головой, похожей на конскую.",
    [
      [
        "sea",
        "horse"
      ],
      [
        "ocean",
        "horse"
      ],
      [
        "fish",
        "horse"
      ]
    ]
  ],
  [
    "platypus",
    "Утконос",
    "🐾",
    "life",
    "Ищите то, что водоплавающее млекопитающее отряда однопроходных, обитающее в Австралии.",
    [
      [
        "duck",
        "beaver"
      ]
    ]
  ],
  [
    "snowboard",
    "Сноуборд",
    "❄️",
    "transport",
    "Подсказка ведёт к тому, что спортивный снаряд, предназначенный для скоростного спуска с заснеженных склонов и гор.",
    [
      [
        "plank",
        "snow"
      ]
    ]
  ],
  [
    "sled",
    "Сани",
    "🏗️",
    "transport",
    "Ищите то, что зимняя повозка на двух полозьях.",
    [
      [
        "cart",
        "snow"
      ]
    ]
  ],
  [
    "money_box",
    "Копилка",
    "🪙",
    "civ",
    "Ищите то, что ёмкость или специальное приспособление для хранения и накопления монет.",
    [
      [
        "pig",
        "money"
      ],
      [
        "pig",
        "coin"
      ],
      [
        "pig",
        "ceramic"
      ],
      [
        "money",
        "ceramic"
      ],
      [
        "coin",
        "ceramic"
      ]
    ]
  ],
  [
    "matrix",
    "Матрица",
    "⚙️",
    "tech",
    "Главный признак: это повсюду. Она окружает нас.",
    [
      [
        "computer",
        "dream"
      ]
    ]
  ],
  [
    "sheet_music",
    "Партитура",
    "🎵",
    "culture",
    "Подсказка ведёт к тому, что совокупное изображение голосов оркестрового или хорового сочинения так, чтобы на каждом листе нотной бумаги были выписаны все голоса один под другим, и каждый такт одного голоса приходился под тем же тактом в другого, показывая, т.",
    [
      [
        "music",
        "paper"
      ]
    ]
  ],
  [
    "doughnut",
    "Пончик",
    "🍽️",
    "food",
    "Главный признак: круглое или кольцеобразное, жаренное во фритюре хлебобулочное изделие, с начинкой или без неё.",
    [
      [
        "dough",
        "butter"
      ]
    ]
  ],
  [
    "mayonnaise",
    "Майонез",
    "🍽️",
    "food",
    "Главный признак: соус из растительного масла, яичного желтка и различных приправ.",
    [
      [
        "egg",
        "butter"
      ]
    ]
  ],
  [
    "drum",
    "Барабан",
    "🍽️",
    "food",
    "Ориентир: ударный музыкальный инструмент в виде цилиндра, верх и низ которого обтянуты кожей.",
    [
      [
        "leather",
        "hammer"
      ]
    ]
  ],
  [
    "caterpillar",
    "Гусеница",
    "🐾",
    "life",
    "Ищите то, что личинка бабочки, обычно червеобразная с несколькими парами ног.",
    [
      [
        "worm",
        "grass"
      ],
      [
        "worm",
        "leaf"
      ]
    ]
  ],
  [
    "xray",
    "Рентген",
    "🌤️",
    "sky",
    "Обратите внимание: исследование внутренней структуры объектов, которые проецируются при помощи рентгеновских лучей на специальную плёнку или бумагу.",
    [
      [
        "light",
        "bone"
      ]
    ]
  ],
  [
    "pluto",
    "Плутон",
    "🪐",
    "space",
    "Ориентир: крупнейшая известная карликовая это Солнечной системы, транснептуновый объект и десятое по массе небесное тело, обращающееся вокруг Солнца — после восьми планет и Эриды. это состоит в основном из камня и льда.",
    [
      [
        "planet",
        "ice"
      ]
    ]
  ],
  [
    "sharpener",
    "Точилка",
    "🪨",
    "geo",
    "Обратите внимание: приспособление, облегчающее затачивание карандашей.",
    [
      [
        "blade",
        "pencil"
      ]
    ]
  ],
  [
    "bonfire",
    "Костёр",
    "🔥",
    "craft",
    "Ищите то, что это, разведённый на открытом воздухе. Представляет собой горящие материалы: дрова, хворост и другие, сложенные особым образом.",
    [
      [
        "fire",
        "plank"
      ]
    ]
  ],
  [
    "archaeologist",
    "Археолог",
    "👤",
    "civ",
    "Главный признак: археологи занимаются поиском артефактов с помощью раскопок на суше, под водой, реконструируют предметы прошлого с использованием материалов и технологий, типичных для исследуемой эпохи. Значительную часть рабочего времени они про.",
    [
      [
        "fossil_ag",
        "human"
      ]
    ]
  ],
  [
    "story_ag",
    "История",
    "🧰",
    "craft",
    "Подсказка ведёт к тому, что рассказ о прошлых событиях, повествование о том, что узнано, исследовано.",
    [
      [
        "bonfire",
        "human"
      ]
    ]
  ],
  [
    "catnip",
    "Кошачья мята",
    "🐾",
    "life",
    "Ориентир: многолетняя это, запах которой вызывает у домашних кошек специфическую реакцию, несколько похожую на чувство эйфории.",
    [
      [
        "cat",
        "grass"
      ]
    ]
  ],
  [
    "stamp",
    "Печать",
    "🧰",
    "craft",
    "Обратите внимание: след или чернильный рисунок, который остается после соприкосновения штампа с бумагой.",
    [
      [
        "circle",
        "ink"
      ]
    ]
  ],
  [
    "document",
    "Документ",
    "🧰",
    "craft",
    "Обратите внимание: деловая это, подтверждающая какой-нибудь факт или право на что-нибудь.",
    [
      [
        "stamp",
        "paper"
      ]
    ]
  ],
  [
    "easter_eggs",
    "Пасхальные яйца",
    "🍽️",
    "food",
    "Ищите то, что специально расписанные яйца, которые дарят друг другу на Пасху.",
    [
      [
        "paint",
        "egg"
      ]
    ]
  ],
  [
    "jellyfish",
    "Медуза",
    "🐟",
    "life",
    "Ищите то, что морское животное со студенистым телом, снабжённым щупальцами. По форме напоминает колокол или зонтик.",
    [
      [
        "umbrella",
        "plankton"
      ]
    ]
  ],
  [
    "injun",
    "Индеец",
    "👤",
    "civ",
    "Подсказка ведёт к тому, что результат узнаётся по таким признакам, как коренной, житель, америки.",
    [
      [
        "hunter",
        "pen"
      ],
      [
        "wigwam",
        "human"
      ]
    ]
  ],
  [
    "tank",
    "Танк",
    "🏗️",
    "transport",
    "Обратите внимание: бронированная самоходная машина на гусеничном ходу с мощным вооружением.",
    [
      [
        "tractor",
        "gun"
      ]
    ]
  ],
  [
    "crematorium",
    "Крематорий",
    "🧰",
    "craft",
    "Ищите то, что результат узнаётся по таким признакам, как кремации, умерших.",
    [
      [
        "stove",
        "corpse"
      ],
      [
        "stove",
        "coffin"
      ]
    ]
  ],
  [
    "pandemic",
    "Пандемия",
    "🪐",
    "space",
    "Подсказка ведёт к тому, что необычайно сильная эпидемия, распространившаяся на территории ряда стран, континентов; высшая степень развития эпидемического процесса.",
    [
      [
        "planet",
        "flu"
      ],
      [
        "planet",
        "sick"
      ]
    ]
  ],
  [
    "medusa_gorgona",
    "Медуза Горгона",
    "✨",
    "myst",
    "Ориентир: наиболее известная из трёх сестёр горгон, чудовище с женским лицом и змеями вместо волос. Взгляд на её лицо обращал человека в камень.",
    [
      [
        "jellyfish",
        "snake"
      ],
      [
        "medusa_gorgona",
        "biker"
      ],
      [
        "medusa_gorgona",
        "shaman"
      ]
    ]
  ],
  [
    "romania",
    "Румыния",
    "🇷🇴",
    "civ",
    "Подсказка ведёт к тому, что это на юго-востоке Европы, на территории которой находится знаменитая историческая область Трансильвания, окруженная Карпатскими горами.",
    [
      [
        "vampire",
        "country"
      ]
    ]
  ],
  [
    "radiation",
    "Радиация",
    "🔬",
    "science",
    "Подсказка ведёт к тому, что ионизирующее излучение, которое образуется при распаде радиоактивных частиц.",
    [
      [
        "nuclear_bomb",
        "earth"
      ],
      [
        "nuclear_bomb",
        "country"
      ]
    ]
  ],
  [
    "spider",
    "Паук",
    "🐾",
    "life",
    "Ищите то, что членистоногое животное с ядовитыми железами, обычно плетущее паутину, в которую ловит мелких животных, служащих ему пищей.",
    [
      [
        "beetle",
        "yarn"
      ]
    ]
  ],
  [
    "dream_catcher",
    "Ловец снов",
    "👤",
    "civ",
    "Главный признак: индейский амулет, защищающий спящего от злых духов и болезней.",
    [
      [
        "injun",
        "dream"
      ]
    ]
  ],
  [
    "biker",
    "Байкер",
    "👤",
    "civ",
    "Главный признак: любители и поклонники мотоциклов.",
    [
      [
        "motorcycle",
        "human"
      ]
    ]
  ],
  [
    "wall",
    "Стена",
    "🧰",
    "craft",
    "Ищите то, что вертикальная ограждающая конструкция, отделяющая помещение от окружающего пространства или соседнего помещения.",
    [
      [
        "concrete",
        "brick"
      ],
      [
        "brick",
        "brick"
      ]
    ]
  ],
  [
    "shaman",
    "Шаман",
    "🧑",
    "civ",
    "Обратите внимание: человек, который, благодаря небесному избранию, способен перемещаться между мирами для достижения практических целей: исцеления больного, предсказания, вызывание дождя и т. д.",
    [
      [
        "mushroom",
        "doctor_ag"
      ],
      [
        "mushroom",
        "wizard_ag"
      ],
      [
        "fly_agaric",
        "doctor_ag"
      ],
      [
        "fly_agaric",
        "wizard_ag"
      ]
    ]
  ],
  [
    "fly_agaric",
    "Мухомор",
    "🐾",
    "life",
    "Подсказка ведёт к тому, что ядовитый это с красной в белых крапинках шляпкой. Вопреки распространённому убеждению, мухи умирают не из-за воздействия веществ, содержащихся в мухоморе.",
    [
      [
        "mushroom",
        "poison"
      ],
      [
        "fly_agaric",
        "fly"
      ]
    ]
  ],
  [
    "wigwam",
    "Вигвам",
    "🏗️",
    "transport",
    "Ориентир: это из ветвей, кож, коры у индейцев Северной Америки.",
    [
      [
        "hut",
        "injun"
      ],
      [
        "tent",
        "injun"
      ]
    ]
  ],
  [
    "ireland",
    "Ирландия",
    "🇮🇪",
    "civ",
    "Главный признак: островное государство в Северной Европе, занимающее большую часть одноимённого острова. Столица — Дублин.",
    [
      [
        "country",
        "clover"
      ]
    ]
  ],
  [
    "celluar",
    "Сотовая связь",
    "🍽️",
    "food",
    "Ориентир: способ передачи данных по радиоканалам между точками, одна из которых относится к категории мобильных.",
    [
      [
        "honeycombs",
        "antenna"
      ]
    ]
  ],
  [
    "cuckoo",
    "Кукушка",
    "🐾",
    "life",
    "Подсказка ведёт к тому, что лесная перелётная это, обычно не вьющая гнёзд и кладущая яйца в чужие гнёзда.",
    [
      [
        "bird",
        "time"
      ],
      [
        "bird",
        "clock"
      ]
    ]
  ],
  [
    "wave",
    "Волна",
    "🌊",
    "sky",
    "Обратите внимание: водяной вал, образуемый колебанием водной поверхности.",
    [
      [
        "sea",
        "wind"
      ],
      [
        "ocean",
        "wind"
      ]
    ]
  ],
  [
    "mountain_range",
    "Горный хребет",
    "🪨",
    "geo",
    "Обратите внимание: крупное линейно вытянутое поднятие рельефа с чётко выраженными склонами, пересекающимися в верхней части.",
    [
      [
        "mountain",
        "mountain"
      ]
    ]
  ],
  [
    "stroller",
    "Коляска",
    "🏗️",
    "transport",
    "Ориентир: прогулочная ручная повозка для катания маленьких — обычно грудных — детей.",
    [
      [
        "cart",
        "child"
      ]
    ]
  ],
  [
    "surfing",
    "Сёрфинг",
    "🌤️",
    "sky",
    "Ориентир: катание на водной волне на специальной лёгкой доске.",
    [
      [
        "wave",
        "plank"
      ]
    ]
  ],
  [
    "icebreaker",
    "Ледокол",
    "❄️",
    "transport",
    "Главный признак: мощное судно, оборудованное для прохода сквозь льды.",
    [
      [
        "ship",
        "ice"
      ]
    ]
  ],
  [
    "baby_rattle",
    "Погремушка",
    "🌤️",
    "sky",
    "Ориентир: детская игрушка, позвякивающая при встряхивании.",
    [
      [
        "sound",
        "child"
      ]
    ]
  ],
  [
    "barn",
    "Амбар",
    "🏗️",
    "transport",
    "Ищите то, что строение для хранения зерна, муки, припасов, а также товаров.",
    [
      [
        "hut",
        "flour"
      ],
      [
        "hut",
        "wheat"
      ]
    ]
  ],
  [
    "spray",
    "Аэрозольная краска",
    "🧰",
    "craft",
    "Обратите внимание: это, которая поставляется в герметичном контейнере под давлением и высвобождается в виде аэрозольного баллончика при нажатии кнопки клапана.",
    [
      [
        "paint",
        "pressure"
      ]
    ]
  ],
  [
    "bitumen",
    "Битум",
    "🪨",
    "geo",
    "Главный признак: побочный продукт выветривания нефти. Получают из остатков перегонки нефти при помощи продувки воздухом в окислительных реакторах.",
    [
      [
        "petroleum",
        "oxygen"
      ],
      [
        "petroleum",
        "air"
      ]
    ]
  ],
  [
    "squirrel",
    "Белка",
    "🐾",
    "life",
    "Главный признак: небольшой ловкий лесной грызун с пушистым хвостом.",
    [
      [
        "beast",
        "tree"
      ],
      [
        "mouse_ag",
        "tree"
      ]
    ]
  ],
  [
    "circus",
    "Цирк",
    "🏗️",
    "transport",
    "Ищите то, что зрелищное предприятие для устройства представлений с участием акробатов, гимнастов, клоунов, дрессированных животных.",
    [
      [
        "beast",
        "circle"
      ],
      [
        "lion",
        "circle"
      ]
    ]
  ],
  [
    "kombucha",
    "Комбуча",
    "🍽️",
    "food",
    "Обратите внимание: ферментированный напиток на основе чая, который получается в результате взаимодействия сладкого чая с симбиотической культурой бактерий и дрожжей. Известен также как чайный это.",
    [
      [
        "tea",
        "mushroom"
      ],
      [
        "tea",
        "bacteria"
      ]
    ]
  ],
  [
    "nut",
    "Орех",
    "🍽️",
    "food",
    "Обратите внимание: плод растения, который обычно имеет съедобное ядро, заключенное в твердую скорлупу.",
    [
      [
        "squirrel",
        "seed"
      ]
    ]
  ],
  [
    "tamer",
    "Дрессировщик",
    "👤",
    "civ",
    "Обратите внимание: тот, кто занимается дрессировкой.",
    [
      [
        "teacher",
        "beast"
      ],
      [
        "teacher",
        "lion"
      ],
      [
        "teacher",
        "circus"
      ]
    ]
  ],
  [
    "tedpole",
    "Головастик",
    "🐾",
    "life",
    "Подсказка ведёт к тому, что личинка бесхвостых земноводных (лягушек, жаб).",
    [
      [
        "fish",
        "swamp"
      ],
      [
        "fish",
        "lake"
      ],
      [
        "frog",
        "frog"
      ]
    ]
  ],
  [
    "tomahawk",
    "Томагавк",
    "⚙️",
    "tech",
    "Подсказка ведёт к тому, что боевой топор, традиционно используемый индейцами Северной Америки.",
    [
      [
        "weapon",
        "injun"
      ]
    ]
  ],
  [
    "cricket",
    "Кузнечик",
    "🐾",
    "life",
    "Подсказка ведёт к тому, что прыгающее насекомое, издающее стрекочущие звуки.",
    [
      [
        "grass",
        "beetle"
      ]
    ]
  ],
  [
    "echo",
    "Эхо",
    "🪨",
    "geo",
    "Подсказка ведёт к тому, что отражение звуков от предметов, отзвук.",
    [
      [
        "cave",
        "sound"
      ]
    ]
  ],
  [
    "clown",
    "Клоун",
    "👤",
    "civ",
    "Главный признак: артист, который использует комедийные приемы, такие как гротеск и буффонада, для развлечения публики. В основном, клоуны работают в цирке, на эстраде или в театре, но также встречаются на праздниках, фестивалях и других мероприят.",
    [
      [
        "circus",
        "human"
      ]
    ]
  ],
  [
    "globe",
    "Глобус",
    "🪐",
    "space",
    "Ориентир: модель земного шара, обычно вращающаяся на подставке.",
    [
      [
        "planet",
        "school"
      ]
    ]
  ],
  [
    "coconut",
    "Кокос",
    "🍽️",
    "food",
    "Главный признак: результат узнаётся по таким признакам, как кокосовой, пальмы.",
    [
      [
        "nut",
        "palm"
      ]
    ]
  ],
  [
    "vane",
    "Флюгер",
    "🐾",
    "life",
    "Ориентир: вращающаяся на вертикальной оси фигурка (например, петух, стрелка или флажок), которая показывает, откуда дует это.",
    [
      [
        "chicken",
        "wind"
      ]
    ]
  ],
  [
    "narwhal",
    "Нарвал",
    "🐾",
    "life",
    "Подсказка ведёт к тому, что млекопитающее семейства нарваловых, единственный вид рода нарвалы. Рог нарвала используется для нескольких целей: как сенсорный орган для определения температуры, давления и концентрации частиц в воде, для охоты и для социального.",
    [
      [
        "unicorn",
        "whale"
      ]
    ]
  ],
  [
    "box",
    "Коробка",
    "🏗️",
    "transport",
    "Обратите внимание: ёмкость для хранения и упаковки чего-либо.",
    [
      [
        "cardboard",
        "cardboard"
      ]
    ]
  ],
  [
    "graffiti",
    "Граффити",
    "🧰",
    "craft",
    "Ищите то, что надписи или изображения на стенах и других поверхностях.",
    [
      [
        "wall",
        "spray"
      ]
    ]
  ],
  [
    "coconut_milk",
    "Кокосовое молоко",
    "🧀",
    "food",
    "Подсказка ведёт к тому, что молочно-белая непрозрачная жидкость, вырабатываемая из мякоти созревшего кокосового ореха.",
    [
      [
        "coconut",
        "milk"
      ],
      [
        "coconut",
        "pressure"
      ]
    ]
  ],
  [
    "ectoplasm",
    "Эктоплазма",
    "✨",
    "myst",
    "Подсказка ведёт к тому, что мистическое, вязкое вещество загадочного происхождения, которое оставляют привидения.",
    [
      [
        "ghost",
        "energy"
      ]
    ]
  ],
  [
    "wallpaper",
    "Обои",
    "📖",
    "culture",
    "Обратите внимание: рулонный отделочный материал в виде полотна для облицовки стен и потолков внутри помещений, служащий для декора и скрытия мелких дефектов поверхности.",
    [
      [
        "wall",
        "paper"
      ]
    ]
  ],
  [
    "cherry",
    "Вишня",
    "🍽️",
    "food",
    "Ищите то, что это из семейства розоцветных. Имеет кисло-сладкий вкус.",
    [
      [
        "berry",
        "sakura"
      ]
    ]
  ],
  [
    "blender",
    "Блендер",
    "⚙️",
    "tech",
    "Ориентир: кухонный электроприбор для измельчения, смешивания и взбивания продуктов.",
    [
      [
        "electricity",
        "blade"
      ]
    ]
  ],
  [
    "cocktail",
    "Коктейль",
    "🍽️",
    "food",
    "Обратите внимание: алкогольный напиток, получаемый в результате смешивания двух и более компонентов.",
    [
      [
        "alcohol",
        "juice"
      ],
      [
        "vodka",
        "juice"
      ],
      [
        "tequila",
        "juice"
      ],
      [
        "rum",
        "juice"
      ]
    ]
  ],
  [
    "day",
    "День",
    "🌤️",
    "sky",
    "Главный признак: промежуток времени от восхода до заката Солнца, характеризующийся светлым временем суток.",
    [
      [
        "sun",
        "time"
      ]
    ]
  ],
  [
    "night",
    "Ночь",
    "🌙",
    "space",
    "Главный признак: промежуток времени от захода Солнца вечером до его восхода утром.",
    [
      [
        "moon",
        "sky"
      ]
    ]
  ],
  [
    "stink",
    "Зловоние",
    "🧰",
    "craft",
    "Ориентир: крайне неприятный, сильный, резкий и отвратительный запах.",
    [
      [
        "dung",
        "air"
      ]
    ]
  ],
  [
    "burrow",
    "Нора",
    "🐾",
    "life",
    "Подсказка ведёт к тому, что вырытое животным углубление или туннель под землей с одним или несколькими ходами наружу, которое служит ему жилищем, местом для размножения или временным убежищем.",
    [
      [
        "mole",
        "earth"
      ]
    ]
  ],
  [
    "fear",
    "Страх",
    "🐾",
    "life",
    "Обратите внимание: естественная базовая эмоция, которая возникает как реакция на реальную или воображаемую опасность.",
    [
      [
        "bird",
        "scarecrow"
      ]
    ]
  ],
  [
    "closet",
    "Шкаф",
    "🧰",
    "craft",
    "Ищите то, что предмет мебели с дверцами, полками и выдвижными ящиками, предназначенный для хранения различных предметов.",
    [
      [
        "clothes",
        "plank"
      ]
    ]
  ],
  [
    "doll",
    "Кукла",
    "👤",
    "civ",
    "Обратите внимание: детская это в виде фигурки человека, сделанная из ткани, дерева, пластика или других материалов.",
    [
      [
        "toy",
        "human"
      ]
    ]
  ],
  [
    "necklace",
    "Ожерелье",
    "🪨",
    "geo",
    "Ориентир: шейное украшение из драгоценных камней или жемчуга.",
    [
      [
        "pearl",
        "pearl"
      ],
      [
        "pearl",
        "circle"
      ]
    ]
  ],
  [
    "scythe",
    "Коса",
    "🪨",
    "geo",
    "Главный признак: сельскохозяйственное орудие для срезания травы и злаков.",
    [
      [
        "blade",
        "grass"
      ]
    ]
  ],
  [
    "skunk",
    "Скунс",
    "🐾",
    "life",
    "Ориентир: хищное млекопитающее, известное своим черно-белым окрасом и способностью защищаться с помощью едкого запаха.",
    [
      [
        "stink",
        "beast"
      ]
    ]
  ],
  [
    "amber",
    "Янтарь",
    "🧰",
    "craft",
    "Главный признак: окаменевшая ископаемая древесная это, затвердевшая живица древних хвойных деревьев, возраст которой составляет от 30 до 90 миллионов лет. Он относится к органическим минералоидам, имеет тёплый жёлтый, оранжевый или бурый цвет и ч.",
    [
      [
        "resin",
        "fossil_ag"
      ]
    ]
  ],
  [
    "hawking",
    "Стивен Хокинг",
    "👑",
    "culture",
    "Ищите то, что великий это нашего времени, внесший огромный вклад в изучение вселенной и черных дыр.",
    [
      [
        "scientist",
        "blackhole"
      ]
    ]
  ]
]);
for (const [id, name, icon,,, recipes] of IMPORTED_ALCHEMY_GAME){
  E[id] = [name, icon];
  for (const [a, b] of recipes) R.push([`${a} ${b}`, id]);
}
// endregion: IMPORTED_ALCHEMY_GAME

const FULL_ICONS = Object.freeze(Object.fromEntries(
  Object.entries(FULL_ICON_MOTIFS).map(([id, motif]) => [id, makeFullIcon(id, motif)])
));
// Порядок столкновения ингредиентов не влияет на результат.
const recipeKey = (a,b) => a < b ? a+" "+b : b+" "+a;
const RECIPE = new Map(R.map(([k,v]) => {
  const [a,b] = k.split(" ");
  return [recipeKey(a,b), v];
}));
const TOTAL = Object.keys(E).length;
// Рецепты, в которых элемент используется как ингредиент.
const RECIPES_USING = new Map(Object.keys(E).map(id => [id, []]));
for (const [raw, result] of R){
  const [a, b] = raw.split(" ");
  const recipe = recipeKey(a, b);
  for (const ingredient of new Set(raw.split(" "))){
    RECIPES_USING.get(ingredient).push(recipe);
  }
}
// конечные элементы — не используются как ингредиент ни в одном рецепте
const USED_INPUTS = new Set(R.flatMap(([k]) => k.split(" ")));
const FINAL = new Set(Object.keys(E).filter(id => !USED_INPUTS.has(id)));
// region: CATEGORIES
// категории элементов
const CATS = [
  ["base","Базовые",       ["water","fire","earth","air"]],
  ["elem","Природные явления", ["steam","cloud","mud","lava","energy","sea","ice","river","saltwater"]],
  ["sky", "Небо и погода", ["sky","sun","rain","rainbow","lightning","snow","fog","storm","hurricane","flood"]],
  ["geo", "Земля и минералы", ["dust","stone","metal","mountain","volcano","sand","coal","gold","diamond","salt","glacier","iceberg","oasis","clay","copper","cave","canyon","island"]],
  ["life","Живой мир",     ["swamp","life","plant","tree","forest","fish","bird","lizard","flower","fruit","animal","livestock","algae","moss","mushroom","insect","bee","butterfly","egg","chicken","seed","garden","vegetable","bacteria","virus"]],
  ["craft","Материалы и ремесло", ["wood","glass","brick","wheel","gunpowder","sword","wool","fabric","clothes","boat","ceramic","crystal","bronze","steel","magnet","compass","paper","ink","pen","map","tool","hammer"]],
  ["food","Еда и хозяйство", ["honey","milk","cheese","field","grain","flour","bread","dough","cake","wine","juice","tea","coffee","salad"]],
  ["transport","Транспорт и инфраструктура", ["bridge","road","cart","bicycle","car","airplane","airport","harbor"]],
  ["tech","Техника и связь", ["mechanism","engine","explosion","ship","electricity","wire","lamp","computer","internet","robot","cyborg","rocket","factory","clock","battery","motor","radio","television","camera","phone","smartphone","satellite"]],
  ["science","Наука и медицина", ["telescope","microscope","scientist","science","laboratory","medicine","vaccine","hospital","genetics","clone"]],
  ["civ", "Общество",      ["human","house","city","civilization","knight"]],
  ["culture","Культура и институты", ["book","library","music","art","village","farm","market","money","bank","school","university","government","law","peace"]],
  ["myst","Мифы и алхимия", ["dragon","philstone","magic","wizard","portal"]],
  ["space","Космос",       ["moon","star","space","time","astronaut","alien","universe","planet","comet","galaxy","blackhole"]]
];
for (const [id,,,,, cat] of [...EXPANSION, ...MUSIC_EXPANSION]){
  const category = CATS.find(([cid]) => cid === cat);
  if (category) category[2].push(id);
}
// region: IMPORTED_ALCHEMY_CATEGORIES
for (const [id,,, cat] of IMPORTED_ALCHEMY_GAME){
  const category = CATS.find(([cid]) => cid === cat);
  if (category) category[2].push(id);
}
// endregion: IMPORTED_ALCHEMY_CATEGORIES
const CAT_COLOR = { base:"#9aa4b5", elem:"#4fc3f7", sky:"#ffd54f", geo:"#a1887f", life:"#81c784", craft:"#ffcc80", food:"#ffab91", transport:"#90a4ae", tech:"#80cbc4", science:"#4db6ac", civ:"#ffb74d", culture:"#f48fb1", myst:"#ce93d8", space:"#9fa8da" };
const CAT_OF = {}; CATS.forEach(([cid,,ids]) => ids.forEach(id => CAT_OF[id] = cid));

// region: CLUES
// Отдельный содержательный намёк для каждого элемента. Резервных шаблонов нет.
const ELEMENT_CLUES = Object.freeze({
  ...Object.fromEntries(IMPORTED_ALCHEMY_GAME.map(([id,,,, clue]) => [id, clue])),
  water:"Прозрачная текучая основа дождей, рек и питья.",
  fire:"Пламя согревает, освещает и необратимо меняет вещества.",
  earth:"Твёрдая плодородная поверхность под ногами и корнями.",
  air:"Невидимая подвижная оболочка, которой дышат и которая несёт звуки.",
  steam:"Горячая влага становится невидимой, а остывая — клубится белым.",
  cloud:"Белая или серая масса капель плывёт высоко над поверхностью.",
  mud:"Мокрая почва липнет к обуви и легко принимает форму.",
  lava:"Раскалённый поток из недр застывает чёрной породой.",
  energy:"Способность совершать работу, двигать, нагревать или освещать.",
  dust:"Мельчайшие сухие частицы поднимаются при движении и оседают на вещах.",
  stone:"Твёрдый природный обломок выдерживает вес, удары и долгие годы.",
  metal:"Прочный блестящий материал проводит ток, поддаётся ковке и плавится.",
  sea:"Огромная солёная гладь с волнами, приливами и глубинами.",
  sky:"Пространство над горизонтом меняет цвет от рассвета до ночи.",
  sun:"Яркий дневной диск дарит тепло и задаёт смену суток.",
  rain:"Капли падают сверху, наполняют ручьи и промачивают землю.",
  rainbow:"Цветная дуга появляется напротив светила после ливня.",
  lightning:"Короткий ослепительный разряд раскалывает грозовое небо.",
  plant:"Зелёный организм укореняется, растёт к свету и создаёт органику.",
  swamp:"Топкая влажная местность покрыта кочками и стоячими лужами.",
  life:"Самовоспроизведение, рост и обмен веществ отличают её от неживого.",
  human:"Разумное двуногое существо создаёт речь, орудия и общества.",
  tree:"Высокий многолетний ствол держит крону и годовые кольца.",
  forest:"Множество стволов образует затенённую среду со своим микроклиматом.",
  wood:"Срезанный ствол превращается в прочный волокнистый материал.",
  coal:"Чёрное горючее ископаемое оставляет копоть и долго тлеет.",
  sand:"Сыпучие крупинки шуршат, просачиваются и накапливаются у берегов.",
  glass:"Прозрачный хрупкий лист пропускает свет и защищает от ветра.",
  brick:"Обожжённый прямоугольный блок удобно укладывать ровными рядами.",
  house:"Крыша и стены создают защищённое место для повседневной жизни.",
  wheel:"Круглая деталь катится вокруг оси и облегчает перевозку.",
  mechanism:"Согласованная система деталей передаёт и преобразует движение.",
  sword:"Длинный заточенный клинок предназначен для рубящих и колющих ударов.",
  gold:"Мягкий жёлтый драгоценный материал не тускнеет и ценится веками.",
  philstone:"Легендарная субстанция обещает превращение неблагородного и вечную молодость.",
  diamond:"Прозрачный сверхтвёрдый кристалл рождается при огромном давлении.",
  fish:"Обтекаемое позвоночное дышит жабрами и движется плавниками.",
  bird:"Перья, клюв и лёгкий скелет приспособлены к полёту.",
  lizard:"Холоднокровная рептилия греется на камнях и может отбросить хвост.",
  dragon:"Легендарное крылатое чудовище сторожит сокровища и изрыгает пламя.",
  volcano:"Конус с кратером выбрасывает раскалённые потоки, пепел и газы.",
  engine:"Тяжёлая машина тянет вагоны, выпуская клубы из трубы.",
  city:"Плотная сеть улиц, зданий и служб объединяет множество жителей.",
  civilization:"Письменность, управление, города и разделение труда складываются в устойчивый порядок.",
  magic:"Невозможное совершается волей, ритуалом или сверхъестественной силой.",
  wizard:"Учёный чародей применяет тайные знания, жезлы и заклинания.",
  knight:"Закованный воин служит господину и сражается верхом.",
  gunpowder:"Чёрная взрывчатая смесь быстро сгорает, создавая много газа.",
  explosion:"Мгновенное расширение разбрасывает осколки, ударную волну и гром.",
  mountain:"Высокий скалистый рельеф поднимается над окружающей местностью.",
  snow:"Мягкие ледяные кристаллы падают хлопьями и укрывают поверхность.",
  ice:"Твёрдая холодная корка скользит и снова тает при нагревании.",
  river:"Постоянный поток течёт по руслу от истока к устью.",
  flower:"Яркий пахучий орган привлекает опылителей и даёт начало семенам.",
  fruit:"Сочная оболочка защищает семена и часто служит пищей.",
  animal:"Подвижное многоклеточное питается готовой органикой и чувствует среду.",
  livestock:"Одомашненные стада дают пищу, сырьё и тягловую силу.",
  wool:"Тёплые упругие волокна состригают и прядут в нити.",
  fabric:"Переплетённые нити образуют гибкое полотно для шитья.",
  clothes:"Носимые вещи закрывают тело, сохраняют тепло и выражают стиль.",
  boat:"Небольшое плавучее судно перевозит людей по поверхности водоёма.",
  ship:"Крупное судно с экипажем ходит далеко и несёт тяжёлый груз.",
  electricity:"Движение зарядов питает приборы и проходит по замкнутой цепи.",
  wire:"Длинная гибкая жила проводит сигнал или питание между устройствами.",
  lamp:"Устройство превращает питание в управляемый искусственный свет.",
  computer:"Программируемая машина хранит данные и выполняет вычисления.",
  internet:"Всемирная сеть связывает устройства и передаёт цифровые данные.",
  robot:"Программируемая машина действует в физическом мире через датчики и приводы.",
  cyborg:"В одном теле органические части дополнены электронными и механическими.",
  rocket:"Реактивная тяга разгоняет аппарат без опоры на окружающую среду.",
  moon:"Ночной спутник меняет фазы и вызывает приливные ритмы.",
  star:"Далёкий светящийся шар поддерживает термоядерное горение в недрах.",
  space:"Почти пустая безвоздушная область начинается за атмосферой.",
  time:"Необратимая последовательность событий измеряется периодическими движениями.",
  astronaut:"Специалист покидает атмосферу, работая в невесомости и герметичном снаряжении.",
  alien:"Предполагаемая разумная форма возникла за пределами нашей планеты.",
  universe:"Всё пространство, материя, излучение и история составляют единое целое.",
  salt:"Белые кристаллы усиливают вкус, сохраняют продукты и растворяются.",
  saltwater:"Раствор оставляет кристаллический налёт после испарения и щиплет раны.",
  glacier:"Многолетняя толща медленно ползёт вниз и шлифует долины.",
  iceberg:"Большая часть холодной плавучей глыбы скрыта под поверхностью.",
  fog:"Взвесь мелких капель у поверхности резко сокращает видимость.",
  storm:"Тёмные тучи сопровождаются ливнем, громом и электрическими вспышками.",
  hurricane:"Гигантский вращающийся вихрь с глазом формируется над тёплым океаном.",
  flood:"Уровень резко поднимается и затапливает обычно сухую местность.",
  oasis:"Зелёный участок с источником позволяет выжить среди сухих барханов.",
  clay:"Пластичная липкая масса после обжига становится твёрдой.",
  ceramic:"Обожжённое формованное изделие твёрдое, жаростойкое и хрупкое.",
  crystal:"Упорядоченная решётка создаёт грани, блеск и правильную форму.",
  copper:"Красноватый проводник легко тянется в проволоку и покрывается патиной.",
  bronze:"Древний литейный сплав прочнее чистой красноватой основы.",
  steel:"Прочный сплав закаляют для балок, инструментов и машин.",
  magnet:"Два полюса притягивают железные предметы и ориентируются по полю.",
  compass:"Свободная стрелка указывает постоянное направление относительно полюсов.",
  cave:"Естественная полость уходит в темноту внутри скального массива.",
  canyon:"Глубокая узкая долина с отвесными стенами вырезана долгой эрозией.",
  island:"Участок суши со всех сторон отделён волнами.",
  algae:"Гибкие зелёные ленты растут под поверхностью и не имеют настоящих корней.",
  moss:"Мягкий зелёный ковёр любит сырость и покрывает камни и кору.",
  mushroom:"Шляпка на ножке выпускает споры, а основная сеть скрыта в субстрате.",
  insect:"Шесть ног, наружный скелет и тело из трёх отделов.",
  bee:"Полосатый опылитель живёт колонией и строит восковые соты.",
  honey:"Густая сладкая масса хранится в сотах и почти не портится.",
  butterfly:"Крылья покрыты цветными чешуйками, а взрослению предшествует кокон.",
  egg:"Твёрдая скорлупа защищает зародыш и запас питания.",
  chicken:"Домашняя несушка кудахчет, выводит цыплят и разгребает почву лапами.",
  milk:"Белая питательная жидкость предназначена для выкармливания детёнышей.",
  cheese:"Плотный продукт созревает, меняя аромат, вкус и структуру.",
  field:"Открытый обработанный участок регулярно засевают и собирают урожай.",
  grain:"Мелкие сухие зёрна хранят запас для будущего ростка.",
  flour:"Тонкий светлый порошок получают длительным размалыванием урожая.",
  bread:"Пористая ароматная буханка поднимается и румянится при выпечке.",
  dough:"Мягкая эластичная масса мнётся, раскатывается и держит форму.",
  cake:"Праздничный многослойный десерт украшают кремом и свечами.",
  wine:"Перебродивший напиток созревает, накапливая сложный аромат.",
  juice:"Жидкость, отжатая из мякоти, сохраняет её вкус и цвет.",
  tea:"Ароматный настой заваривают и пьют горячим или охлаждённым.",
  coffee:"Обжаренные зёрна дают тёмный бодрящий напиток с горчинкой.",
  seed:"Спящий зародыш в оболочке ждёт влаги и подходящего тепла.",
  garden:"Ухоженный участок сочетает посадки, дорожки и регулярный уход.",
  vegetable:"Съедобную часть огородной культуры выращивают ради корня, листа или плода.",
  salad:"Холодное блюдо собирают из нарезанных свежих частей и заправки.",
  paper:"Тонкий волокнистый лист принимает письмо, рисунок и печать.",
  book:"Скреплённые страницы сохраняют длинный текст и знания.",
  library:"Упорядоченное собрание изданий выдаёт их читателям.",
  ink:"Цветная жидкость оставляет стойкий письменный или печатный след.",
  pen:"Узкий пишущий предмет дозированно переносит краситель на страницу.",
  map:"Уменьшенная схема местности показывает объекты, направления и расстояния.",
  bridge:"Пролёт соединяет берега поверх препятствия.",
  road:"Подготовленная полоса задаёт сухопутный маршрут колёсам и пешеходам.",
  cart:"Простая двух- или четырёхколёсная повозка везёт груз без мотора.",
  bicycle:"Два колеса приводятся педалями и удерживаются равновесием.",
  car:"Самоходная колёсная машина перевозит людей по выбранному маршруту.",
  airplane:"Неподвижные крылья создают подъёмную силу при быстром разбеге.",
  airport:"Взлётные полосы, терминалы и диспетчеры обслуживают воздушные рейсы.",
  harbor:"Защищённая гавань даёт судам причалы, погрузку и ремонт.",
  factory:"Поточная площадка превращает сырьё в массовую продукцию.",
  tool:"Предмет усиливает руку и помогает точно воздействовать на материал.",
  hammer:"Тяжёлая головка на рукояти забивает, кует и разбивает.",
  clock:"Равномерный ход механизма делит сутки на измеримые интервалы.",
  music:"Организованные звуки образуют ритм, мелодию и гармонию.",
  art:"Образ, созданный ради переживания и авторского высказывания.",
  battery:"Химический запас отдаёт заряд цепи до очередной зарядки.",
  motor:"Вращающий привод превращает питание в механическую работу.",
  radio:"Электромагнитные волны несут голос и музыку без проводного соединения.",
  television:"Экран и динамики воспроизводят движущееся изображение со звуком.",
  camera:"Оптика фокусирует сцену на светочувствительной поверхности и сохраняет кадр.",
  phone:"Удалённые собеседники слышат друг друга через сеть связи.",
  smartphone:"Карманный сенсорный компьютер объединяет связь, камеру и приложения.",
  satellite:"Аппарат обращается вокруг планеты, наблюдая или передавая сигналы.",
  telescope:"Оптика приближает слабые далёкие объекты ночного неба.",
  microscope:"Система линз раскрывает структуры, невидимые невооружённому глазу.",
  scientist:"Исследователь проверяет гипотезы наблюдением, расчётом и опытом.",
  science:"Проверяемое знание строится на доказательствах и воспроизводимых опытах.",
  laboratory:"Оборудованное помещение позволяет безопасно ставить точные опыты.",
  bacteria:"Одноклеточный микроорганизм делится надвое и населяет почти любую среду.",
  virus:"Неклеточная частица размножается только внутри чужого организма.",
  medicine:"Средство предупреждает болезнь, облегчает симптомы или помогает лечению.",
  vaccine:"Тренировка иммунитета заранее готовит защиту к конкретной инфекции.",
  hospital:"Палаты, операционные и круглосуточный персонал принимают заболевших.",
  genetics:"Наследственные признаки изучаются через гены и передачу информации.",
  clone:"Генетически одинаковая копия происходит от одного исходного организма.",
  village:"Небольшое поселение окружено хозяйственными угодьями и невысокой застройкой.",
  farm:"На одном хозяйстве выращивают урожай и содержат домашних животных.",
  market:"Продавцы и покупатели встречаются для обмена товарами по цене.",
  money:"Общепринятый эквивалент измеряет стоимость и облегчает обмен.",
  bank:"Учреждение хранит вклады, выдаёт кредиты и проводит платежи.",
  school:"Дети систематически осваивают предметы под руководством педагогов.",
  university:"Высшее образование соединяет лекции, исследования и получение степени.",
  government:"Органы управления принимают решения и распоряжаются общими ресурсами.",
  law:"Обязательное правило устанавливает права, обязанности и ответственность.",
  peace:"Стороны прекращают вооружённую борьбу и договариваются сосуществовать.",
  planet:"Крупное округлое тело обращается вокруг звезды и очищает свою орбиту.",
  comet:"Ледяное ядро у светила выпускает яркую кому и длинный хвост.",
  galaxy:"Миллиарды звёзд связаны притяжением в огромную вращающуюся систему.",
  blackhole:"Область с такой сильной гравитацией, что свет не покидает горизонт.",
  portal:"Фантастический проход мгновенно соединяет удалённые места или миры.",
  dew:"Ночные капли собираются на прохладных листьях без выпадения осадков.",
  frost:"Тонкие белые кристаллы рисуют узоры на промёрзших поверхностях.",
  hail:"Твёрдые ледяные шарики падают из мощных грозовых туч.",
  tornado:"Узкая вращающаяся воронка опускается сверху и разрушает всё на пути.",
  breeze:"Лёгкое движение воздуха едва колышет лепестки и приносит прохладу.",
  wind:"Поток воздушных масс гнёт ветви, надувает паруса и вращает лопасти.",
  smoke:"Серая струя продуктов горения вьётся вверх и рассеивается.",
  ash:"Светлый рыхлый остаток остаётся после полного сгорания органики.",
  geyser:"Подземное давление периодически выбрасывает горячий фонтан вверх.",
  hot_spring:"Естественный тёплый бассейн постоянно подогревается из глубины.",
  waterfall:"Поток срывается с горного уступа и пенится у подножия.",
  lake:"Большой замкнутый водоём заполняет впадину и не связан напрямую с океаном.",
  pond:"Небольшой тихий водоём часто создают рядом с садами и парками.",
  desert:"Крайне сухой ландшафт получает мало осадков и резко нагревается днём.",
  dune:"Ветер насыпает подвижный серповидный холм из множества крупинок.",
  beach:"Пологая прибрежная полоса удобна для купания и отдыха.",
  delta:"У устья поток разветвляется на рукава и откладывает плодородный ил.",
  reef:"Подводная гряда близко подходит к поверхности и опасна для судов.",
  coral:"Колонии крошечных полипов строят ветвистый известковый скелет.",
  aurora:"Цветные ленты мерцают у полюсов, когда солнечные частицы входят в атмосферу.",
  grass:"Низкий зелёный покров состоит из узких листьев и быстро отрастает после покоса.",
  reed:"Высокие полые стебли густо стоят у мелководных берегов.",
  cactus:"Мясистый стебель запасает влагу, а колючки уменьшают испарение.",
  palm:"Неразветвлённый ствол заканчивается веером крупных листьев в тёплом климате.",
  fern:"Древний тенелюбивый вид разворачивает резные листья спиралью.",
  bamboo:"Полые членистые стебли растут чрезвычайно быстро и остаются прочными.",
  vine:"Длинный гибкий побег цепляется за опору и поднимается вверх.",
  rose:"Ароматный многолепестковый бутон защищён шипами на стебле.",
  sunflower:"Крупная жёлтая корзинка поворачивается к свету и даёт масличные семечки.",
  lotus:"Круглые листья лежат на поверхности, а чистый венчик поднимается над водой.",
  lily:"Крупный душистый венчик из шести лепестков растёт на стройном стебле.",
  herb:"Полезные листья и стебли собирают ради лечебных веществ.",
  spice:"Ароматная добавка в малом количестве меняет вкус всего блюда.",
  cotton:"Белые мягкие коробочки дают растительное волокно для прядения.",
  sap:"Прозрачная или липкая жидкость движется внутри ствола и питает рост.",
  rubber:"Упругий материал растягивается, возвращает форму и не пропускает влагу.",
  resin:"Густая липкая капля застывает на повреждённой коре и пахнет хвоей.",
  bark:"Наружный грубый слой ствола защищает живые ткани от повреждений.",
  leaf:"Плоская зелёная пластинка ловит свет, испаряет влагу и создаёт питание.",
  hay:"Высушенные скошенные стебли складывают в тюки для зимнего корма.",
  frog:"Зелёное земноводное прыгает, квакает и проходит стадию головастика.",
  snake:"Длинное безногое тело движется изгибами и регулярно меняет кожу.",
  crocodile:"Крупная бронированная рептилия подстерегает добычу у самой кромки воды.",
  dinosaur:"Доисторические рептилии господствовали миллионы лет до великого вымирания.",
  fossil:"Окаменевший след или остаток древнего организма сохраняется в породе.",
  mammoth:"Лохматый гигант с изогнутыми бивнями был приспособлен к холоду.",
  bear:"Крупный косолапый всеядный зверь зимует в берлоге.",
  wolf:"Серый хищник охотится слаженной стаей и воет по ночам.",
  dog:"Верный домашний компаньон понимает команды и охраняет хозяина.",
  cat:"Независимый домашний охотник бесшумно крадётся, мурлычет и ловит мышей.",
  horse:"Быстрое копытное несёт всадника и тянет повозки.",
  cow:"Крупное жвачное животное пасётся стадами и даёт молочный удой.",
  pig:"Розовое всеядное с пятачком любит рыться в мягкой почве.",
  goat:"Бородатое копытное уверенно карабкается по крутым склонам.",
  duck:"Водоплавающее пернатое с широким клювом и перепончатыми лапами.",
  eagle:"Крупный хищник парит высоко, высматривая добычу острым зрением.",
  owl:"Ночной пернатый охотник бесшумно летает и поворачивает голову далеко назад.",
  penguin:"Нелетающий морской пловец ходит вперевалку и ныряет за добычей.",
  dolphin:"Умное морское млекопитающее дышит у поверхности и общается свистом.",
  whale:"Гигантское млекопитающее выпускает фонтан через дыхало и кормит детёнышей.",
  butter:"Жёлтый сливочный брусок плавится на горячем и взбивается из жира.",
  yogurt:"Белая кисломолочная масса в чашке имеет нежную густую консистенцию.",
  icecream:"Холодный сладкий десерт тает быстрее, чем его успевают съесть.",
  cocoa:"Горький ароматный порошок получают из обжаренных тропических бобов.",
  chocolate:"Тёмная сладкая плитка тает во рту и ломается с характерным хрустом.",
  sugar:"Белые сладкие кристаллы быстро растворяются и карамелизуются при нагреве.",
  jam:"Ягоды или плоды уваривают до густой сладкой заготовки.",
  soup:"Горячее жидкое блюдо объединяет бульон и варёные кусочки.",
  meat:"Плотная мышечная пища требует разделки и тепловой обработки.",
  stew:"Кусочки долго томятся вместе до мягкости и насыщенного соуса.",
  sausage:"Измельчённая начинка плотно набита в продолговатую оболочку.",
  sandwich:"Начинка лежит между ломтями и удобно помещается в руке.",
  pizza:"Круглая открытая лепёшка запекается с соусом и тягучей начинкой.",
  pasta:"Формованное мучное изделие высушивают, а перед едой отваривают.",
  noodles:"Длинные тонкие полоски быстро размягчаются в кипятке.",
  rice:"Белые продолговатые зёрна впитывают жидкость и увеличиваются при варке.",
  porridge:"Разваренная крупа становится мягкой, густой и питательной.",
  cookie:"Небольшая сладкая выпечка получается сухой и хрустящей.",
  pie:"Начинка скрыта внутри или под слоем румяной выпечки.",
  lemonade:"Прохладный кисло-сладкий напиток освежает и часто шипит пузырьками.",
  charcoal:"Лёгкие чёрные куски горят жарко и почти без пламени.",
  plank:"Ровная длинная пиленая заготовка имеет плоские грани и древесный рисунок.",
  glue:"Липкое вещество соединяет поверхности после высыхания.",
  plywood:"Несколько тонких слоёв склеены с чередованием направления волокон.",
  limestone:"Светлая осадочная порода шипит от кислоты и хранит следы раковин.",
  cement:"Серый вяжущий порошок затвердевает после смешивания с жидкостью.",
  concrete:"Тяжёлая камнеподобная масса заливается в форму и твердеет монолитом.",
  petroleum:"Тёмная горючая жидкость залегает под землёй и служит химическим сырьём.",
  oil:"Смазочная жидкость уменьшает трение и защищает детали от износа.",
  asphalt:"Чёрное вязкое покрытие создаёт гладкую прочную поверхность для движения.",
  plastic:"Лёгкий формуемый полимер принимает почти любую форму и медленно разрушается.",
  nylon:"Прочное синтетическое волокно используют в чулках, сетях и канатах.",
  leather:"Выделанная шкура становится гибкой, прочной и долговечной.",
  fur:"Густой волосяной покров сохраняет тепло и образует пушистый материал.",
  rope:"Множество скрученных волокон образует длинную прочную связку.",
  chain:"Соединённые кольца гнутся, но выдерживают сильное растяжение.",
  porcelain:"Тонкое белое изделие слегка просвечивает и звонко отзывается на удар.",
  rubber_tire:"Упругое чёрное кольцо обхватывает обод и смягчает неровности пути.",
  paint:"Цветной состав покрывает поверхность, скрывает основу и высыхает плёнкой.",
  varnish:"Прозрачное покрытие придаёт блеск и защищает от влаги и царапин.",
  chair:"Сиденье со спинкой поддерживает одного сидящего человека.",
  table:"Горизонтальная столешница на опорах держит посуду и рабочие предметы.",
  bed:"Мягкое горизонтальное место предназначено для сна и отдыха.",
  door:"Подвижная створка закрывает проём и контролирует вход.",
  window:"Прозрачный проём пропускает дневной свет, сохраняя тепло внутри.",
  chimney:"Вертикальный канал безопасно выводит продукты горения над крышей.",
  stove:"Домашний очаг отдаёт тепло помещению и поддерживает горение внутри.",
  oven:"Закрытая горячая камера равномерно запекает блюда со всех сторон.",
  pot:"Глубокий жаростойкий сосуд подходит для хранения или приготовления.",
  cup:"Небольшой сосуд с ручкой удобен для горячего напитка.",
  bottle:"Узкое горлышко и пробка помогают хранить и наливать жидкости.",
  mirror:"Гладкая отражающая поверхность возвращает точное изображение смотрящего.",
  soap:"Скользкая пена отделяет жир и грязь при мытье.",
  wax:"Мягкое водоотталкивающее вещество плавится от слабого нагрева и снова застывает.",
  candle:"Фитиль поддерживает маленькое ровное пламя, постепенно расходуя корпус.",
  brush:"Пучок щетины наносит цвет мазками на поверхность.",
  scissors:"Два перекрещённых лезвия режут материал при сведении ручек.",
  needle:"Тонкий острый стержень с ушком протягивает нить сквозь полотно.",
  umbrella:"Складной купол на спицах держат над головой во время осадков.",
  backpack:"Заплечная сумка распределяет груз на две лямки и оставляет руки свободными.",
  train:"Состав вагонов движется по направляющим от станции к станции.",
  rail:"Две параллельные стальные направляющие задают путь колёсным парам.",
  station:"Платформы и залы принимают пассажиров между железнодорожными рейсами.",
  tram:"Городской вагон получает питание сверху и следует по уложенной колее.",
  bus:"Вместительный маршрутный транспорт перевозит сразу много пассажиров.",
  truck:"Большая грузовая платформа и мощная тяга предназначены для перевозки тяжестей.",
  tractor:"Медленная тяговая машина на крупных колёсах работает на пашне.",
  ambulance:"Спецмашина с сиреной быстро доставляет медицинскую бригаду к пациенту.",
  firetruck:"Красная спецмашина везёт лестницу, цистерну и команду спасателей.",
  taxi:"Поездка с водителем оплачивается по расстоянию или времени.",
  motorcycle:"Двухколёсная машина разгоняется двигателем и управляется наклоном.",
  scooter:"Компактная дека с рулём едет от аккумулятора и заряжается от розетки.",
  submarine:"Герметичное судно погружается, меняя плавучесть балластными цистернами.",
  yacht:"Небольшое комфортабельное судно предназначено для отдыха и прогулок.",
  canoe:"Лёгкую узкую лодку ведут однолопастным веслом без уключин.",
  sail:"Полотно ловит поток воздуха и передаёт тягу мачте.",
  helicopter:"Несущий винт позволяет взлетать вертикально и зависать на месте.",
  jet:"Реактивная тяга разгоняет крылатую машину до очень высокой скорости.",
  spaceship:"Герметичный аппарат поддерживает экипаж вдали от атмосферы.",
  rover:"Автономная колёсная лаборатория исследует поверхность другого мира.",
  fuel:"Запасённое вещество при реакции выделяет полезное тепло или тягу.",
  gas:"Летучее горючее заполняет весь доступный объём и легко воспламеняется.",
  solar_panel:"Плоские тёмные ячейки напрямую превращают дневное излучение в ток.",
  wind_turbine:"Высокая башня с лопастями вырабатывает ток из движения атмосферы.",
  hydropower:"Падающий поток вращает турбину и даёт возобновляемое питание.",
  generator:"Вращение в магнитном поле превращается в электрический ток.",
  powerplant:"Крупный комплекс непрерывно производит питание для целого региона.",
  reactor:"Управляемая цепная реакция идёт внутри защищённой активной зоны.",
  nuclear_power:"Энергия атомных ядер превращается в тепло, а затем в ток.",
  dam:"Массивная перегородка удерживает уровень и регулирует поток через затворы.",
  mine:"Глубокие выработки и штреки ведут к залежам полезного сырья.",
  ore:"Природная порода содержит достаточно ценного вещества для добычи.",
  iron:"Тяжёлый серый материал ржавеет, куётся и притягивается магнитом.",
  silver:"Светлый драгоценный материал лучше всех проводит ток и со временем темнеет.",
  aluminum:"Лёгкий серебристый материал покрывается защитной плёнкой и не ржавеет как железо.",
  alloy:"Смесь нескольких веществ получает свойства, которых нет у каждого по отдельности.",
  welding:"Кромки деталей локально расплавляются и срастаются прочным швом.",
  crane:"Высокая стрела поднимает тяжёлые грузы тросом и перемещает их над площадкой.",
  pipeline:"Длинная система герметичных труб непрерывно переносит жидкость на расстояние.",
  refinery:"Промышленная установка разделяет чёрное сырьё на топливо и химические фракции.",
  keyboard:"Набор клавиш вводит буквы, числа и команды пальцами.",
  mouse:"Небольшой указатель под ладонью двигает курсор и выбирает объекты щелчком.",
  monitor:"Плоский экран показывает визуальный результат работы вычислительной системы.",
  printer:"Устройство переносит цифровой текст и изображения на физические листы.",
  scanner:"Оптическая линейка превращает бумажный оригинал в цифровое изображение.",
  speaker:"Мембрана колеблется и превращает электрический сигнал в слышимый звук.",
  microphone:"Чувствительная мембрана переводит голос в электрический сигнал.",
  headphones:"Два маленьких излучателя подают звук прямо к ушам слушателя.",
  tablet:"Плоский сенсорный экран служит одновременно дисплеем и управлением.",
  laptop:"Складная переносная машина с экраном работает вдали от розетки.",
  server:"Мощный узел постоянно обслуживает запросы других устройств.",
  database:"Структурированное хранилище быстро находит, связывает и обновляет записи.",
  website:"Связанные страницы открываются по адресу через браузер.",
  email:"Цифровое письмо приходит в адресный ящик через сетевые серверы.",
  social_network:"Личные профили образуют связи и обмениваются публикациями.",
  video:"Последовательность кадров создаёт движущееся изображение, часто со звуком.",
  game:"Интерактивные правила отвечают на действия игрока и задают цель.",
  code:"Точный текст команд описывает поведение вычислительной машины.",
  program:"Исполняемый набор инструкций решает определённую задачу.",
  ai:"Алгоритм обучается на данных, распознаёт закономерности и принимает решения.",
  physics:"Законы движения, сил, полей и материи выражаются измерениями и формулами.",
  chemistry:"Состав, свойства и превращения веществ исследуются через реакции.",
  biology:"Устройство, происхождение и развитие организмов изучаются экспериментально.",
  astronomy:"Наблюдения и расчёты объясняют далёкие небесные тела и их движение.",
  geology:"Слои, породы и процессы недр читаются как история планеты.",
  ecology:"Связи организмов со средой показывают последствия каждого изменения экосистемы.",
  mathematics:"Абстрактные числа, формы и отношения доказываются строгими рассуждениями.",
  atom:"Мельчайшая химически неделимая частица имеет ядро и электронную оболочку.",
  molecule:"Несколько связанных мельчайших частиц сохраняют химические свойства целого вещества.",
  cell:"Мембрана отделяет минимальную самостоятельную систему с внутренними структурами.",
  organ:"Несколько типов тканей совместно выполняют отдельную функцию организма.",
  heart:"Полая мышца ритмично прокачивает кровь по сосудам.",
  brain:"Сеть нервных клеток управляет телом, памятью и мышлением.",
  skeleton:"Внутренний каркас поддерживает тело, защищает органы и служит рычагами.",
  blood:"Красная циркулирующая жидкость переносит кислород, питание и защитные клетки.",
  surgery:"Лечение проводится непосредственным вмешательством внутрь тела.",
  doctor:"Специалист ставит диагноз, назначает лечение и следит за выздоровлением.",
  nurse:"Медицинский сотрудник выполняет процедуры и ежедневно ухаживает за пациентами.",
  pharmacy:"В этом месте лекарства хранят, подбирают по рецепту и отпускают покупателям.",
  antibiotic:"Вещество подавляет рост определённых микробов, не действуя на вирусные инфекции.",
  family:"Близкие родственники ведут общий быт и заботятся друг о друге.",
  child:"Малыш растёт, учится и зависит от заботы взрослых.",
  teacher:"Педагог объясняет материал, организует занятия и проверяет понимание.",
  student:"Учащийся осваивает знания, выполняет задания и отвечает на уроках.",
  farmer:"Хозяин сельского участка планирует посевы, уход и сбор урожая.",
  baker:"Мастер замешивает, формует и выпекает ароматные изделия.",
  chef:"Профессионал управляет кухней, сочетает вкусы и готовит блюда.",
  miner:"Работник спускается под землю, укрепляет выработку и добывает сырьё.",
  engineer:"Специалист рассчитывает и проектирует устройства, сооружения или процессы.",
  programmer:"Разработчик превращает требования в точные алгоритмы и исправляет ошибки.",
  artist:"Автор выражает замысел через цвет, форму и композицию.",
  musician:"Исполнитель управляет ритмом, высотой и тембром звучания.",
  writer:"Автор создаёт персонажей и смыслы с помощью письменной речи.",
  pilot:"Специалист управляет полётом из кабины и отвечает за безопасный маршрут.",
  sailor:"Член экипажа несёт вахту, управляет снастями и знает морские правила.",
  driver:"Профессионал в фуражке сидит за рулём и безопасно ведёт машину.",
  police:"Служба охраняет порядок, расследует нарушения и помогает в опасности.",
  judge:"Независимый арбитр выслушивает стороны и выносит обязательное решение.",
  mayor:"Избранный руководитель отвечает за городские службы и бюджет.",
  king:"Наследственный монарх носит корону и правит государством.",
  language:"Система звуков, слов и правил позволяет людям передавать мысли.",
  alphabet:"Упорядоченный набор знаков записывает звуки речи.",
  poem:"Ритм, образность и точный выбор слов создают короткий литературный текст.",
  story:"Небольшое повествование разворачивает одно событие и нескольких героев.",
  newspaper:"Периодическое печатное издание сообщает свежие события и мнения.",
  theater:"Живые актёры разыгрывают историю на сцене перед зрителями.",
  cinema:"Большой экран и тёмный зал собирают публику на просмотр фильма.",
  museum:"Экспонаты сохраняют и объясняют наследие, природу или достижения.",
  festival:"Многодневный праздник объединяет выступления, публику и общую тему.",
  dance:"Осмысленные движения тела следуют ритму и образуют выразительную композицию.",
  sport:"Соревнование проверяет силу, скорость, точность и соблюдение правил.",
  ball:"Упругий круглый снаряд катится, летит и отскакивает.",
  football:"Две команды ногами стараются забить круглый снаряд в ворота.",
  basketball:"Высокое кольцо с сеткой принимает броски игроков на площадке.",
  tennis:"Ракетки перебивают небольшой упругий снаряд через натянутую сетку.",
  chess:"Шестнадцать фигур с разными ходами защищают короля на клетчатой доске.",
  medal:"Небольшой наградной знак носят на ленте за заслуги или победу.",
  trophy:"Победителю вручают почётный сосуд на подставке.",
  stadium:"Трибуны окружают большую арену для соревнований и массовых зрителей.",
  olympics:"Спортсмены многих стран встречаются раз в четыре года под пятью кольцами.",
  tower:"Высокое узкое сооружение возвышается ради обзора, сигнала или защиты.",
  castle:"Каменная резиденция с башнями и стенами защищает феодального владельца.",
  palace:"Богато украшенная парадная резиденция подчёркивает власть и роскошь.",
  temple:"Священное здание предназначено для обрядов, молитвы и собрания верующих.",
  skyscraper:"Многоэтажное здание поднимается значительно выше обычной городской застройки.",
  apartment:"Множество отдельных квартир разделяют один подъезд, крышу и коммуникации.",
  warehouse:"Большое помещение хранит запасы на стеллажах до отправки.",
  mill:"Жернова перемалывают урожай, получая мелкий пищевой порошок.",
  lighthouse:"Высокий береговой огонь подаёт судам заметный издалека навигационный сигнал.",
  tunnel:"Подземный или горный проход сокращает путь сквозь препятствие.",
  subway:"Городские поезда быстро ходят по преимущественно подземным линиям.",
  canal:"Искусственное русло направляет поток для судоходства или орошения.",
  aqueduct:"Арочная конструкция переносит непрерывный поток над долинами и преградами.",
  fountain:"Струи под давлением поднимаются и декоративно падают в чашу.",
  park:"Открытое городское пространство сочетает деревья, газоны и дорожки для отдыха.",
  zoo:"Специальные вольеры позволяют посетителям увидеть диких зверей.",
  greenhouse:"Прозрачные стены удерживают тепло и продлевают сезон выращивания.",
  windmill:"Классические четыре крыла вращают жернова внутри высокой мельницы.",
  fortress:"Мощные стены, бастионы и гарнизон рассчитаны на длительную оборону.",
  monument:"Долговечный художественный объект сохраняет память о событии или личности.",
  meteor:"Светящийся след возникает, когда небесная частица сгорает в атмосфере.",
  meteorite:"Обломок переживает огненный полёт и достигает поверхности.",
  asteroid:"Небольшое каменистое тело самостоятельно обращается вокруг светила.",
  nebula:"Разреженное межзвёздное скопление газа сияет, отражает свет или закрывает фон.",
  supernova:"Гибель массивной звезды вспыхивает ярче целой галактики и разбрасывает элементы.",
  pulsar:"Быстро вращающийся остаток посылает строго периодические импульсы излучения.",
  quasar:"Активное ядро далёкой галактики светит благодаря поглощению вещества.",
  exoplanet:"Мир обращается вокруг чужого светила за пределами нашей системы.",
  orbit:"Замкнутая траектория возникает из непрерывного падения мимо центрального тела.",
  gravity:"Взаимное притяжение масс удерживает ноги внизу, а небесные тела на орбитах.",
  spacesuit:"Герметичная оболочка даёт дыхание, давление и защиту во внешнем вакууме.",
  space_station:"Обитаемая лаборатория долго движется по орбите и принимает экипажи.",
  moonbase:"Постоянный герметичный комплекс позволяет жить и работать на спутнике.",
  mars:"Красная пыль, полярные шапки и крупнейший вулкан отличают четвёртый мир от светила.",
  ufo:"Неопознанный летящий объект часто изображают как светящуюся тарелку.",
  wormhole:"Гипотетический тоннель сокращает путь через искривлённое пространство-время.",
  multiverse:"Множество отдельных вселенных существует параллельно в одной гипотезе.",
  dark_matter:"Невидимая масса обнаруживает себя только дополнительным гравитационным притяжением.",
  dark_energy:"Неизвестная причина заставляет космическое расширение ускоряться.",
  big_bang:"Из чрезвычайно горячего плотного состояния началось расширение всего пространства.",
  ghost:"Полупрозрачный образ умершего бесшумно появляется в знакомых местах.",
  spirit:"Бестелесная сущность воплощает сознание, характер или силу природы.",
  fairy:"Крошечное крылатое волшебное существо помогает или проказничает.",
  elf:"Стройный долгожитель с острыми ушами связан с древними чащами.",
  dwarf:"Невысокий бородатый мастер в характерной остроконечной шапке любит подземные сокровища.",
  mermaid:"Женская фигура вместо ног имеет рыбий хвост и живёт в глубине.",
  centaur:"Человеческий торс соединён с туловищем и четырьмя ногами коня.",
  unicorn:"Белый сказочный конь отличается единственным спиральным рогом на лбу.",
  griffin:"Крылья и голова орла соединены с телом могучего льва.",
  phoenix:"Сказочное крылатое создание сгорает и вновь рождается из собственного пепла.",
  golem:"Искусственный глиняный великан оживает по начертанному приказу.",
  zombie:"Безвольное ожившее тело медленно бродит и распространяет заражение укусом.",
  vampire:"Ночной бессмертный хищник пьёт жизненную жидкость и избегает солнечного света.",
  werewolf:"При полном сияющем диске двуногий превращается в огромного зверя.",
  potion:"Волшебную жидкость варят для временного необычного эффекта.",
  spell:"Точная формула слов и жестов направляет сверхъестественное действие.",
  wand:"Короткий волшебный жезл фокусирует намерение владельца.",
  treasure:"Спрятанные драгоценности ждут того, кто расшифрует путь к тайнику.",
  pirate:"Морской разбойник захватывает суда, ищет добычу и поднимает чёрный флаг.",
  kraken:"Гигантское щупальчатое чудовище способно обвить и потопить судно.",
  guitar:"Струны натянуты над деревянным корпусом и звучат от щипка.",
  electric_guitar:"Звукосниматели передают колебания струн в усилительную аппаратуру.",
  bass_guitar:"Длинный гриф и толстые струны создают низкую основу ансамбля.",
  drums:"Барабаны и тарелки образуют ритм ударами палочек и педалей.",
  piano:"Клавиши через сложную механику заставляют молоточки ударять по струнам.",
  synthesizer:"Электронные схемы создают и изменяют тембры по нажатию клавиш.",
  violin:"Смычок ведут по четырём струнам небольшого фигурного корпуса.",
  saxophone:"Изогнутая духовая трубка с клапанами звучит через одинарную трость.",
  trumpet:"Музыкант меняет ноты губами и тремя клапанами яркой медной трубы.",
  accordion:"Складчатые меха прокачивают поток через язычки между двумя клавиатурами.",
  amplifier:"Электронный блок делает слабый звуковой сигнал мощнее для громкого воспроизведения.",
  recording_studio:"Звукоизолированное помещение позволяет чисто записывать и сводить исполнение.",
  song:"Голосовая мелодия соединяет слова, ритм и законченную форму.",
  album:"Под одной обложкой выпускают связанную последовательность музыкальных треков.",
  concert:"Исполнители играют вживую перед собравшейся публикой.",
  band:"Несколько постоянных исполнителей совместно создают единое звучание.",
  rock_music:"Громкие электрические риффы и мощный ударный ритм ведут композицию.",
  jazz:"Импровизация, синкопы и свинг позволяют музыкантам разговаривать звуком.",
  orchestra:"Большой состав разных инструментов играет вместе под управлением дирижёра.",
  vinyl_record:"Спиральная канавка на чёрном диске хранит аналоговую звукозапись."
});

function elementClue(id){
  const clue = ELEMENT_CLUES[id];
  if (!clue) throw new Error(`Не задан авторский намёк для элемента: ${id}`);
  return clue;
}

function normalizeClueWords(value){
  return value.toLocaleLowerCase("ru").replace(/ё/g, "е").match(/[а-яa-z0-9]+/g) || [];
}

function clueContainsName(clue, name){
  const clueWords = normalizeClueWords(clue);
  const nameWords = normalizeClueWords(name);
  return nameWords.length > 0 && clueWords.some((candidate, clueIndex) =>
    candidate === nameWords[0] &&
    nameWords.every((part, offset) => clueWords[clueIndex + offset] === part)
  );
}

function validateElementClues(){
  const elementIds = Object.keys(E);
  const clueIds = Object.keys(ELEMENT_CLUES);
  const missing = elementIds.filter(id => !ELEMENT_CLUES[id]?.trim());
  const extra = clueIds.filter(id => !E[id]);
  const duplicateTexts = clueIds.filter((id, index) =>
    clueIds.findIndex(otherId => ELEMENT_CLUES[otherId] === ELEMENT_CLUES[id]) !== index
  );
  const forbiddenNames = [];
  for (const id of elementIds){
    const ingredientNames = R
      .filter(([, result]) => result === id)
      .flatMap(([raw]) => raw.split(" "))
      .map(component => E[component][0]);
    const categoryNames = CATS.map(([, name]) => name);
    for (const name of [...ingredientNames, ...categoryNames]){
      if (clueContainsName(ELEMENT_CLUES[id] || "", name)) forbiddenNames.push(`${id}: ${name}`);
    }
  }
  if (missing.length || extra.length || duplicateTexts.length || forbiddenNames.length){
    throw new Error(`Некорректные намёки: missing=${missing.join(",")}; extra=${extra.join(",")}; duplicates=${duplicateTexts.join(",")}; forbidden=${forbiddenNames.join(",")}`);
  }
}
validateElementClues();

// region: STATE
// ---------- Состояние ----------
const SETTINGS_KEY = "alchemy.settings";
const settings = { showUnavailableElements:true, codexShowAvailable:false };
try {
  const parsedSettings = JSON.parse(localStorage.getItem(SETTINGS_KEY));
  if (parsedSettings && typeof parsedSettings.showUnavailableElements === "boolean"){
    settings.showUnavailableElements = parsedSettings.showUnavailableElements;
  }
  if (parsedSettings && typeof parsedSettings.codexShowAvailable === "boolean"){
    settings.codexShowAvailable = parsedSettings.codexShowAvailable;
  }
} catch(e){}

let saved = [];
try {
  const parsedSave = JSON.parse(localStorage.getItem("alchemy.discovered"));
  saved = Array.isArray(parsedSave) ? parsedSave : [];
} catch(e){}
const discovered = new Set(saved.filter(id => E[id]));
BASE.forEach(b => discovered.add(b));

const DISCOVERED_RECIPES_KEY = "alchemy.discoveredRecipes";
let savedRecipes = [];
let hasSavedRecipes = false;
try {
  const rawSavedRecipes = localStorage.getItem(DISCOVERED_RECIPES_KEY);
  hasSavedRecipes = rawSavedRecipes !== null;
  const parsedRecipes = JSON.parse(rawSavedRecipes);
  savedRecipes = Array.isArray(parsedRecipes) ? parsedRecipes : [];
} catch(e){}
const discoveredRecipes = new Set(savedRecipes.filter(recipe =>
  RECIPE.has(recipe) && discovered.has(RECIPE.get(recipe))
));
// region: SAVE_MIGRATIONS
// Старые сохранения не знали отдельных рецептов. Для уже открытого результата
// считаем известным первый доступный рецепт, не раскрывая его альтернативы.
if (!hasSavedRecipes){
  for (const id of discovered){
    const firstKnownRecipe = R.find(([raw, result]) =>
      result === id && raw.split(" ").every(component => discovered.has(component))
    );
    if (firstKnownRecipe){
      const [a, b] = firstKnownRecipe[0].split(" ");
      discoveredRecipes.add(recipeKey(a, b));
    }
  }
  localStorage.setItem(DISCOVERED_RECIPES_KEY, JSON.stringify([...discoveredRecipes]));
}
const DISCOVERY_CHAIN_KEY = "alchemy.discoveryChain";
let discoveryChain = [];
try {
  const parsedChain = JSON.parse(localStorage.getItem(DISCOVERY_CHAIN_KEY));
  const ids = parsedChain && parsedChain.version === 1 && Array.isArray(parsedChain.ids)
    ? parsedChain.ids
    : [];
  discoveryChain = ids.filter((id, index) => E[id] && !BASE.includes(id) && ids.indexOf(id) === index);
} catch(e){}
let lastDiscovered = null;
let wonShown = false;

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

// region: UTILITIES
// ---------- Утилиты ----------
const key = recipeKey;
const clampPos = v => Math.max(4, Math.min(v, 99999));
const save = () => localStorage.setItem("alchemy.discovered", JSON.stringify([...discovered]));
const saveRecipes = () => localStorage.setItem(DISCOVERED_RECIPES_KEY, JSON.stringify([...discoveredRecipes]));
const saveSettings = () => localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
const saveDiscoveryChain = () => localStorage.setItem(DISCOVERY_CHAIN_KEY,
  JSON.stringify({ version:1, ids:discoveryChain }));

function iconHTML(id){
  if (ICONS[id]) return ICONS[id];
  return FULL_ICONS[id] || E[id][1];
}

function chipHTML(id){
  return `<span class="em">${iconHTML(id)}</span><span class="nm">${E[id][0]}</span>`;
}

function recipeProgress(id){
  const recipes = RECIPES_USING.get(id) || [];
  return [recipes.filter(recipe => discoveredRecipes.has(recipe)).length, recipes.length];
}

function recipeCountHTML(id){
  if (FINAL.has(id)) return "";
  const [knownRecipes, totalRecipes] = recipeProgress(id);
  const remainingRecipes = totalRecipes - knownRecipes;
  return remainingRecipes > 0
    ? `<span class="recipe-count" aria-label="Осталось открыть рецептов: ${remainingRecipes}">${remainingRecipes}</span>`
    : "";
}

function refreshBoardRecipeCounts(){
  for (const it of items){
    it.el.querySelector(".recipe-count")?.remove();
    it.el.insertAdjacentHTML("beforeend", recipeCountHTML(it.id));
  }
}

// region: BOARD
function renderPalette(){
  palette.innerHTML = "";
  let shown = 0;
  for (const [cid, cname, ids] of CATS){
    const open = ids.filter(id => discovered.has(id));
    const visible = settings.showUnavailableElements
      ? open
      : open.filter(id => {
          const [knownRecipes, totalRecipes] = recipeProgress(id);
          return !FINAL.has(id) && totalRecipes - knownRecipes > 0;
        });
    if (!visible.length) continue;
    const h = document.createElement("div");
    h.className = "cat-h";
    h.innerHTML = `<span class="dot" style="background:${CAT_COLOR[cid]}"></span>${cname}` +
      `<span class="cnt">${open.length}/${ids.length}</span>`;
    palette.appendChild(h);
    for (const id of visible){
      const c = document.createElement("div");
      c.className = "chip" + (id === lastDiscovered ? " new" : "") + (FINAL.has(id) ? " final" : "");
      c.dataset.id = id;
      const [knownRecipes, totalRecipes] = recipeProgress(id);
      const remainingRecipes = totalRecipes - knownRecipes;
      c.title = E[id][0] + (FINAL.has(id) ? " ✦ конечный элемент" : "") +
        (FINAL.has(id) ? "" : remainingRecipes > 0
          ? ` • осталось открыть рецептов: ${remainingRecipes}`
          : " • все рецепты открыты");
      c.innerHTML = chipHTML(id) + recipeCountHTML(id);
      palette.appendChild(c);
      shown++;
    }
  }
  if (!shown){
    const empty = document.createElement("div");
    empty.className = "palette-empty";
    empty.textContent = "Нет открытых элементов с неоткрытыми рецептами.";
    palette.appendChild(empty);
  }
  counter.textContent = `${discovered.size} / ${TOTAL}`;
  refreshBoardRecipeCounts();
}

function addItem(id, x, y){
  const size = itemSize();
  const el = document.createElement("div");
  el.className = "item" + (FINAL.has(id) ? " final" : "");
  el.innerHTML = chipHTML(id) + recipeCountHTML(id);
  el.style.zIndex = ++zTop;
  const it = { id, x: clampPos(x), y: clampPos(y), el };
  it.x = Math.min(it.x, board.clientWidth  - size - 4);
  it.y = Math.min(it.y, board.clientHeight - size - 4);
  el.style.left = it.x + "px";
  el.style.top  = it.y + "px";
  board.appendChild(el);
  items.push(it);
  return it;
}

function removeItem(it){
  const i = items.indexOf(it);
  if (i !== -1) items.splice(i, 1);
  it.el.remove();
  hideTip();
}

function isOverBlackHole(clientX, clientY){
  const r = blackHole.getBoundingClientRect();
  return clientX >= r.left && clientX <= r.right &&
         clientY >= r.top  && clientY <= r.bottom;
}

function consumeItem(it){
  it.el.classList.remove("dragging");
  it.el.classList.add("consumed");
  setTimeout(() => removeItem(it), 280);
}

function sparks(x, y){                       // координаты внутри поля
  const b = board.getBoundingClientRect();
  for (let i = 0; i < 10; i++){
    const s = document.createElement("span");
    s.className = "spark";
    s.textContent = "✦✧✨"[i % 3];
    s.style.left = (b.left + x) + "px";
    s.style.top  = (b.top  + y) + "px";
    const a = Math.random() * Math.PI * 2, d = 45 + Math.random() * 55;
    s.style.setProperty("--dx", Math.cos(a)*d + "px");
    s.style.setProperty("--dy", Math.sin(a)*d + "px");
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 650);
  }
}

let popupTimer = null;
function showPopup(big, ttl, val){
  popup.querySelector(".big").innerHTML = big;
  popup.querySelector(".ttl").textContent = ttl;
  popup.querySelector(".val").textContent = val;
  popup.classList.add("show");
  clearTimeout(popupTimer);
  popupTimer = setTimeout(() => popup.classList.remove("show"), 1900);
}

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

// region: MERGE
// ---------- Соединение ----------
function tryMerge(mover){
  const size = itemSize(), radius = mergeRadius();
  const cx = mover.x + size/2, cy = mover.y + size/2;
  let best = null, bestD = Infinity;
  for (const o of items){
    if (o === mover) continue;
    const d = Math.hypot(cx - (o.x+size/2), cy - (o.y+size/2));
    if (d < radius && d < bestD){ bestD = d; best = o; }
  }
  if (!best) return;

  const mergedRecipe = key(mover.id, best.id);
  const res = RECIPE.get(mergedRecipe);
  if (!res){
    refusePair(mover, best);
    return;
  }
  if (discovered.has(res)){
    if (!discoveredRecipes.has(mergedRecipe)){
      discoveredRecipes.add(mergedRecipe);
      saveRecipes();
      renderPalette();
      sparks((mover.x + best.x + size) / 2, (mover.y + best.y + size) / 2);
      notifyHTML(`✨ Новый рецепт: ${iconHTML(mover.id)} ${E[mover.id][0]} + ${iconHTML(best.id)} ${E[best.id][0]}`);
    } else {
      refusePair(mover, best);
      notifyHTML(`${iconHTML(res)} «${E[res][0]}» уже создан — рецепт известен`);
    }
    return;
  }
  discoveredRecipes.add(mergedRecipe);
  saveRecipes();
  const mx = (mover.x + best.x)/2;
  const my = (mover.y + best.y)/2;
  removeItem(mover); removeItem(best);
  const nit = addItem(res, mx, my);
  if (!discovered.has(res)) discover(res, nit);
  else sparks(nit.x + size/2, nit.y + size/2);
}

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

// region: CODEX
// ---------- Справочник ----------
const codex      = document.getElementById("codex");
const codexList  = document.getElementById("codexList");
const codexSearch= document.getElementById("codexSearch");
const codexModes = document.getElementById("codexModes");
const codexAvailableFilter = document.getElementById("codexAvailableFilter");
const codexShowAvailable = document.getElementById("codexShowAvailable");
codexShowAvailable.checked = settings.codexShowAvailable;
let codexMode = "all";

const RECIPES_BY_RESULT = (() => {
  const m = new Map();
  for (const [raw, res] of R){
    if (!m.has(res)) m.set(res, []);
    m.get(res).push(raw.split(" "));
  }
  return m;
})();

function recipeListHTML(id){
  const recipes = RECIPES_BY_RESULT.get(id) || [];
  return recipes.map(pair => discoveredRecipes.has(key(pair[0], pair[1]))
    ? `${iconHTML(pair[0])} ${E[pair[0]][0]} + ${iconHTML(pair[1])} ${E[pair[1]][0]}`
    : `<span class="recipe-unknown" title="Рецепт ещё не открыт">❓ + ❓</span>`
  ).join("<br>");
}

function makeCodexRow(id){
  const known = discovered.has(id);
  const row = document.createElement("div");
  row.className = "crow" + (known ? "" : " unknown");
  if (known){
    const rc = recipeListHTML(id) || "базовый элемент";
    row.innerHTML =
      `<span class="em">${iconHTML(id)}</span>` +
      `<span class="nm">${E[id][0]}` +
        (FINAL.has(id) ? `<span class="codex-star" title="Конечный элемент" aria-label="Конечный элемент">✦</span>` : recipeCountHTML(id)) +
      `</span>` +
      `<span class="rc">${rc}</span>` +
      `<button class="cbtn" data-id="${id}" title="Добавить на поле">+</button>`;
  } else {
    row.innerHTML =
      `<span class="em">❓</span><span class="nm">???</span><span class="rc">ещё не открыт</span>`;
  }
  return { row, known };
}

function makeUndiscoveredRow(id){
  const row = document.createElement("div");
  const clue = elementClue(id);
  const clueId = `element-clue-${id}`;
  row.className = "crow undiscovered has-clue";
  row.dataset.id = id;
  row.dataset.readiness = String(openedRecipeComponents(id));
  row.tabIndex = 0;
  row.setAttribute("role", "button");
  row.setAttribute("aria-expanded", "false");
  row.setAttribute("aria-controls", clueId);
  row.setAttribute("aria-label", `${E[id][0]}. Показать подсказку`);
  row.innerHTML =
    `<span class="em">${iconHTML(id)}</span><span class="nm">${E[id][0]}</span>` +
    `<span class="element-clue" id="${clueId}" hidden><strong>Намёк:</strong> ${clue}</span>`;
  return row;
}

function toggleUndiscoveredClue(row){
  const open = !row.classList.contains("clue-open");
  row.classList.toggle("clue-open", open);
  row.setAttribute("aria-expanded", String(open));
  row.setAttribute("aria-label", `${E[row.dataset.id][0]}. ${open ? "Скрыть" : "Показать"} подсказку`);
  const clue = row.querySelector(".element-clue");
  if (clue) clue.hidden = !open;
}

function openedRecipeComponents(id){
  const recipes = RECIPES_BY_RESULT.get(id) || [];
  return recipes.length
    ? Math.max(...recipes.map(pair => pair.filter(component => discovered.has(component)).length))
    : 0;
}

function isAvailableForRecipes(id){
  if (!discovered.has(id) || FINAL.has(id)) return false;
  const [knownRecipes, totalRecipes] = recipeProgress(id);
  return totalRecipes - knownRecipes > 0;
}

function renderCodex(q){
  q = (q || "").trim().toLowerCase();
  codexList.innerHTML = "";
  let shown = 0;
  if (codexMode === "undiscovered"){
    const ids = Object.keys(E)
      .filter(id => !discovered.has(id) && (!q || E[id][0].toLowerCase().includes(q)))
      .sort((a, b) => openedRecipeComponents(b) - openedRecipeComponents(a) ||
        E[a][0].localeCompare(E[b][0], "ru"));
    for (const id of ids){
      codexList.appendChild(makeUndiscoveredRow(id));
      shown++;
    }
  } else if (q){
    // поиск — плоский список подходящих открытых элементов
    const ids = Object.keys(E).sort((x,y) => E[x][0].localeCompare(E[y][0], "ru"));
    for (const id of ids){
      if (!E[id][0].toLowerCase().includes(q) || !discovered.has(id)) continue;
      if (codexShowAvailable.checked && !isAvailableForRecipes(id)) continue;
      codexList.appendChild(makeCodexRow(id).row);
      shown++;
    }
  } else {
    for (const [cid, cname, ids] of CATS){
      const open = ids.filter(discovered.has.bind(discovered));
      const visible = codexShowAvailable.checked ? ids.filter(isAvailableForRecipes) : ids;
      if (!visible.length) continue;
      const h = document.createElement("div");
      h.className = "cat-h";
      h.innerHTML = `<span class="dot" style="background:${CAT_COLOR[cid]}"></span>${cname}` +
        `<span class="cnt">${open.length}/${ids.length}</span>`;
      codexList.appendChild(h);
      for (const id of visible) codexList.appendChild(makeCodexRow(id).row);
      shown += visible.length;
    }
  }
  if (!shown){
    const d = document.createElement("div");
    d.style.cssText = "text-align:center;color:#8f89ad;padding:20px;font-size:13px";
    d.textContent = q ? "Ничего не найдено" : codexMode === "undiscovered"
      ? "Все элементы открыты"
      : codexShowAvailable.checked ? "Нет доступных элементов с неоткрытыми рецептами" : "";
    codexList.appendChild(d);
  }
}
function openCodex(){ renderCodex(""); codex.classList.add("open"); codexSearch.focus(); }
function closeCodex(){ codex.classList.remove("open"); codexSearch.value = ""; }

codexModes.addEventListener("click", e => {
  const button = e.target.closest(".codex-mode");
  if (!button || button.dataset.mode === codexMode) return;
  codexMode = button.dataset.mode;
  codexAvailableFilter.hidden = codexMode !== "all";
  for (const modeButton of codexModes.querySelectorAll(".codex-mode")){
    const active = modeButton === button;
    modeButton.classList.toggle("active", active);
    modeButton.setAttribute("aria-selected", String(active));
  }
  renderCodex(codexSearch.value);
});

codexShowAvailable.addEventListener("change", () => {
  settings.codexShowAvailable = codexShowAvailable.checked;
  saveSettings();
  renderCodex(codexSearch.value);
});

codexList.addEventListener("click", e => {
  const btn = e.target.closest(".cbtn");
  if (btn){
    const id = btn.dataset.id;
    const size = itemSize();
    addItem(id,
      20 + Math.random() * Math.max(1, board.clientWidth  - size - 40),
      20 + Math.random() * Math.max(1, board.clientHeight - size - 40));
    return;
  }
  const undiscoveredRow = e.target.closest(".crow.undiscovered");
  if (undiscoveredRow) toggleUndiscoveredClue(undiscoveredRow);
});

codexList.addEventListener("keydown", e => {
  const row = e.target.closest(".crow.undiscovered");
  if (!row || (e.key !== "Enter" && e.key !== " ")) return;
  e.preventDefault();
  toggleUndiscoveredClue(row);
});

document.getElementById("btnCodex").addEventListener("click", openCodex);
document.getElementById("btnCodexClose").addEventListener("click", closeCodex);
codex.addEventListener("click", e => { if (e.target === codex) closeCodex(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeCodex(); });
codexSearch.addEventListener("input", e => renderCodex(e.target.value));

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
