# Карта кода игры «Алхимия»

## Назначение

Эта карта помогает быстро определить область изменения, связанные подсистемы и обязательные проверки.

Проект имеет две сборки:
- **Модульная** (`alchemy-refactored/`) — для разработки: разделённые HTML, CSS, JS и JSON.
- **Standalone** (`alchemy.html`) — для игроков: один HTML-файл без внешних зависимостей. Собирается скриптом `build-standalone.py`.

## Общая архитектура

```text
JSON-данные (elements, recipes, categories, icons)
    ↓
AlchemyEngine.load() → инициализация индексов
    ↓
localStorage: discovered, settings
    ↓
AlchemyUI.init() → рендер палитры, привязка событий
    ↓
Действия игрока (drag/drop) → combine() → saveProgress() → обновление UI
```

## Структура проекта

```text
.
├── alchemy.html              ← 🎮 Standalone-сборка (играть сразу)
├── alchemy-refactored/       ← 🛠️  Модульная версия для разработки
│   ├── index.html            — Точка входа (нужен сервер из-за fetch)
│   ├── css/styles.css        — Все стили, адаптив до 640px
│   ├── js/
│   │   ├── engine.js         — Класс AlchemyEngine: данные, рецепты, состояние
│   │   ├── ui.js             — Класс AlchemyUI: рендер, drag/drop, анимации
│   │   └── add-element.js    — Хелперы для консоли браузера
│   ├── data/
│   │   ├── elements.json     — 879 элементов
│   │   ├── recipes.json      — 1088 рецептов
│   │   ├── categories.json   — 14 категорий
│   │   └── icons.json        — 56 SVG-иконок
│   ├── serve.py              — Локальный сервер (порт 8000)
│   └── publish.py            — Скрипт публикации
├── build-standalone.py       — Сборка standalone из модульной версии
└── README.md                 — Документация для контрибьюторов
```

## Области кода

### `js/engine.js` — Игровой движок

| Метод / Сущность | Назначение |
|---|---|
| `constructor()` | Инициализация: `elements`, `recipes`, `recipesUsing`, `discovered`, `categories`, `customIcons`, `settings` |
| `load()` | Загрузка данных из `window._ALCHEMY_*` (standalone) или `fetch()` (модульная) |
| `initElements()` | Заполнение `this.elements`, определение базовых |
| `initRecipes()` | Заполнение `this.recipes` и `this.recipesUsing` (обратный индекс) |
| `initCategories()` | Заполнение `this.categories` |
| `initIcons()` | Заполнение `this.customIcons` |
| `recipeKey(a, b)` | Канонический ключ рецепта (сортировка по алфавиту) |
| `combine(a, b)` | Проверка рецепта и открытие результата. Возвращает `{ result, isNew }` или `null` |
| `getDiscoveredElements()` | Список открытых элементов для рендера палитры |
| `getAvailableElements()` | Элементы, которые можно скрафтить из открытых |
| `getRecipesFor(id)` | Все рецепты, где элемент является ингредиентом |
| `getIconHTML(id)` | Рендер иконки: SVG → emoji → full |
| `saveProgress()` / `loadProgress()` | localStorage: `alchemy.save` |
| `saveSettings()` / `loadSettings()` | localStorage: `alchemy.settings` |
| `exportSave()` / `importSave()` | Экспорт/импорт JSON-строки |
| `resetProgress()` | Сброс к базовым элементам |

### `js/ui.js` — Интерфейс

| Метод / Сущность | Назначение |
|---|---|
| `constructor(engine)` | Привязка DOM-элементов, инициализация состояния |
| `init()` | `engine.load()` → `renderPalette()` → `bindEvents()` |
| `renderPalette()` | Группировка по категориям, рендер чипов |
| `createChip(el)` | Создание элемента палитры с dragstart и touch |
| `createBoardItem(el, x, y)` | Создание элемента на поле с drag |
| `makeDraggable(item, id)` | Обработчики pointer-событий (мышь + touch) |
| `checkCombine(dragged, id)` | Проверка пересечения и вызов `engine.combine()` |
| `onCombineSuccess(a, b, result)` | Анимация поглощения, создание результата, искры |
| `createSparks(x, y)` | CSS-анимация ✨ при успешном крафте |
| `showPopup(id)` | Модальное окно «Новый элемент!» |
| `showHint(text)` | Подсказка внизу экрана |
| `updateCounter()` | Обновление счётчика «открыто / всего» |
| `bindEvents()` | Меню, сброс, закрытие меню по клику вне |

### `js/add-element.js` — Консольный хелпер

| Функция | Назначение |
|---|---|
| `addElement(id, name, icon, category, a, b, clue)` | Добавить элемент и рецепт в runtime |
| `addRecipe(a, b, result)` | Добавить только рецепт |
| `downloadData()` | Экспорт текущего состояния в JSON |

### `css/styles.css` — Стили

| Секция | Назначение |
|---|---|
| Базовые стили | `body`, градиент фона, шрифты |
| Шапка | `header`, `#counter`, кнопки, меню |
| Палитра | `#palette`, `.chip`, категории |
| Рабочее поле | `#board`, `.item`, drag-стили |
| Эффекты | `.spark`, `.consumed`, `.pop`, `.new` |
| Модальные окна | `#popup`, `#hintbar`, `.sheet` |
| Адаптив | `@media(max-width:640px)` и `@media(max-width:380px)` |

## Карта типовых изменений

| Задача | Начать с | Связанные файлы | Проверить |
|---|---|---|---|
| Добавить элемент | `data/elements.json` | `data/recipes.json`, `data/categories.json` | ID уникален, рецепт существует, категория валидна |
| Добавить рецепт | `data/recipes.json` | `data/elements.json` | оба ингредиента существуют, результат существует, пара уникальна |
| Изменить категорию | `data/categories.json` | `js/ui.js` → `renderPalette()` | цвет, название, список элементов |
| Добавить SVG-иконку | `data/icons.json` | `data/elements.json` → `iconType: "svg"` | viewBox 64×64, класс `game-icon` |
| Изменить логику крафта | `js/engine.js` → `combine()` | `js/ui.js` → `onCombineSuccess()` | новый/известный результат, сохранение |
| Изменить интерфейс | `js/ui.js` + `css/styles.css` | — | desktop и mobile, touch-совместимость |
| Изменить сохранение | `js/engine.js` → `saveProgress()` | `js/ui.js` → сброс | localStorage не ломается, базовые восстанавливаются |
| Изменить анимации | `css/styles.css` | `js/ui.js` | CSS-классы добавляются/убираются корректно |
| Собрать standalone | `build-standalone.py` | все в `alchemy-refactored/` | `alchemy.html` открывается без сервера |

## Сборка standalone

```bash
python build-standalone.py
```

Что делает скрипт:
1. Читает `alchemy-refactored/index.html`, CSS, JS, JSON.
2. Заменяет `<link rel="stylesheet">` на inline `<style>`.
3. Встраивает JSON-данные как `window._ALCHEMY_*` — убирает `fetch()`.
4. Меняет `async load()` на синхронный `load()`.
5. Убирает `await` в `AlchemyUI.init()`.
6. Объединяет всё в один `alchemy.html`.

> ⚠️ После правок в `alchemy-refactored/data/` всегда пересобирайте standalone!

## Контракты, которые нельзя нарушать

### Рецепты

- Сочетание неупорядоченное; канонический ключ — `recipeKey(a, b)`.
- Одна пара ингредиентов = один результат.
- Все ID в рецептах должны существовать в `elements.json`.
- Каждый небазовый элемент должен быть достижим из базовых.

### Сохранение

- Ключи: `alchemy.save` и `alchemy.settings`.
- Базовые элементы (`isBase: true`) всегда восстанавливаются.
- Неизвестные ID в сохранении не должны ломать загрузку.
- Новые элементы не сбрасывают прежний прогресс.

### Интерфейс

- Работает на desktop и mobile (ширина до `640px`).
- Touch и мышь — оба работают.
- Чёрная дыра удаляет элемент только с рабочего поля.

## Проверка перед завершением изменения

1. Проверить синтаксис JSON в `data/`.
2. Проверить существование всех ID из рецептов и категорий.
3. Проверить уникальность неупорядоченных пар рецептов.
4. Проверить достижимость небазовых элементов.
5. Проверить сценарии старого и повреждённого сохранения.
6. Проверить desktop и мобильную компоновку.
7. Пересобрать `alchemy.html` и убедиться, что он открывается без сервера.

## Правило поддержки карты

При добавлении новой подсистемы:
1. Добавить файл/метод в таблицу областей.
2. При необходимости — в таблицу типовых изменений.
3. Обновить `README.md` для контрибьюторов.
