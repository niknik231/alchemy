"use strict";

// ============================================
// ALCHEMY GAME UI
// ============================================

class AlchemyUI {
  constructor(engine) {
    this.engine = engine;
    this.board = document.getElementById("board");
    this.palette = document.getElementById("palette");
    this.counter = document.getElementById("counter");
    this.hintbar = document.getElementById("hintbar");
    this.popup = document.getElementById("popup");
    
    this.dragState = null;
    this.boardItems = []; // { id, x, y, el }
    this.nextZ = 1;
    
    this.init();
  }

  async init() {
    await this.engine.load();
    this.renderPalette();
    this.updateCounter();
    this.bindEvents();
    this.showHint("Перетаскивай элементы друг на друга, чтобы создавать новые!");
  }

  renderPalette() {
    this.palette.innerHTML = "";
    const elements = this.engine.getDiscoveredElements();
    
    // Group by category
    const byCategory = {};
    for (const el of elements) {
      const cat = el.category || "elem";
      if (!byCategory[cat]) byCategory[cat] = [];
      byCategory[cat].push(el);
    }
    
    // Sort categories
    const catOrder = ["base", "elem", "sky", "geo", "life", "craft", "food", "transport", "tech", "science", "civ", "culture", "myst", "space"];
    
    for (const catId of catOrder) {
      const catElements = byCategory[catId];
      if (!catElements || catElements.length === 0) continue;
      
      const cat = this.engine.categories.get(catId);
      const header = document.createElement("h2");
      header.textContent = cat ? cat.name : catId;
      this.palette.appendChild(header);
      
      for (const el of catElements) {
        const chip = this.createChip(el);
        this.palette.appendChild(chip);
      }
    }
  }

  createChip(el) {
    const chip = document.createElement("div");
    chip.className = "chip";
    chip.dataset.id = el.id;
    chip.draggable = true;
    
    const icon = document.createElement("span");
    icon.className = "em";
    icon.innerHTML = this.engine.getIconHTML(el.id);
    
    const name = document.createElement("span");
    name.className = "nm";
    name.textContent = el.name;
    
    chip.appendChild(icon);
    chip.appendChild(name);
    
    // Drag from palette
    chip.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", el.id);
      e.dataTransfer.effectAllowed = "copy";
    });
    
    // Touch support
    chip.addEventListener("touchstart", (e) => this.onPaletteTouchStart(e, el), { passive: false });
    
    return chip;
  }

  createBoardItem(el, x, y) {
    const item = document.createElement("div");
    item.className = "item";
    item.dataset.id = el.id;
    item.style.left = x + "px";
    item.style.top = y + "px";
    item.style.zIndex = this.nextZ++;
    
    const icon = document.createElement("span");
    icon.className = "em";
    icon.innerHTML = this.engine.getIconHTML(el.id);
    
    const name = document.createElement("span");
    name.className = "nm";
    name.textContent = el.name;
    
    item.appendChild(icon);
    item.appendChild(name);
    
    // Make draggable
    this.makeDraggable(item, el.id);
    
    this.board.appendChild(item);
    this.boardItems.push({ id: el.id, x, y, el: item });
    
    return item;
  }

  makeDraggable(item, elementId) {
    let startX, startY, startLeft, startTop;
    
    const onPointerDown = (e) => {
      e.preventDefault();
      item.style.zIndex = this.nextZ++;
      item.classList.add("dragging");
      
      const rect = item.getBoundingClientRect();
      const boardRect = this.board.getBoundingClientRect();
      
      startX = e.clientX || (e.touches && e.touches[0].clientX);
      startY = e.clientY || (e.touches && e.touches[0].clientY);
      startLeft = item.offsetLeft;
      startTop = item.offsetTop;
      
      const onPointerMove = (e2) => {
        const cx = e2.clientX || (e2.touches && e2.touches[0].clientX);
        const cy = e2.clientY || (e2.touches && e2.touches[0].clientY);
        
        item.style.left = (startLeft + cx - startX) + "px";
        item.style.top = (startTop + cy - startY) + "px";
        
        // Check for overlap
        this.checkCombine(item, elementId);
      };
      
      const onPointerUp = () => {
        item.classList.remove("dragging");
        document.removeEventListener("mousemove", onPointerMove);
        document.removeEventListener("mouseup", onPointerUp);
        document.removeEventListener("touchmove", onPointerMove);
        document.removeEventListener("touchend", onPointerUp);
      };
      
      document.addEventListener("mousemove", onPointerMove);
      document.addEventListener("mouseup", onPointerUp);
      document.addEventListener("touchmove", onPointerMove, { passive: false });
      document.addEventListener("touchend", onPointerUp);
    };
    
    item.addEventListener("mousedown", onPointerDown);
    item.addEventListener("touchstart", onPointerDown, { passive: false });
  }

  checkCombine(draggedItem, draggedId) {
    const draggedRect = draggedItem.getBoundingClientRect();
    const cx = draggedRect.left + draggedRect.width / 2;
    const cy = draggedRect.top + draggedRect.height / 2;
    
    for (const other of this.boardItems) {
      if (other.el === draggedItem) continue;
      
      const otherRect = other.el.getBoundingClientRect();
      const ox = otherRect.left + otherRect.width / 2;
      const oy = otherRect.top + otherRect.height / 2;
      
      const dist = Math.hypot(cx - ox, cy - oy);
      if (dist < 40) {
        // Try to combine
        const result = this.engine.combine(draggedId, other.id);
        if (result) {
          this.onCombineSuccess(draggedItem, other.el, result);
          return;
        }
      }
    }
  }

  onCombineSuccess(itemA, itemB, result) {
    // Remove both items
    itemA.classList.add("consumed");
    itemB.classList.add("consumed");
    
    // Calculate center position
    const rectA = itemA.getBoundingClientRect();
    const rectB = itemB.getBoundingClientRect();
    const boardRect = this.board.getBoundingClientRect();
    
    const cx = ((rectA.left + rectB.left) / 2 + rectA.width / 2) - boardRect.left;
    const cy = ((rectA.top + rectB.top) / 2 + rectA.height / 2) - boardRect.top;
    
    // Remove from tracking
    this.boardItems = this.boardItems.filter(bi => bi.el !== itemA && bi.el !== itemB);
    
    setTimeout(() => {
      itemA.remove();
      itemB.remove();
      
      // Create result
      const newItem = this.createBoardItem(this.engine.getElement(result.result), cx - 38, cy - 38);
      
      if (result.isNew) {
        newItem.classList.add("new");
        this.showPopup(result.result);
        this.renderPalette(); // Re-render to show new element
      }
      
      this.updateCounter();
      this.createSparks(cx, cy);
    }, 280);
  }

  createSparks(x, y) {
    const emojis = ["✨", "⭐", "💫", "🌟"];
    for (let i = 0; i < 6; i++) {
      const spark = document.createElement("div");
      spark.className = "spark";
      spark.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      spark.style.left = x + "px";
      spark.style.top = y + "px";
      const angle = (Math.PI * 2 * i) / 6;
      const dist = 60 + Math.random() * 40;
      spark.style.setProperty("--dx", Math.cos(angle) * dist + "px");
      spark.style.setProperty("--dy", Math.sin(angle) * dist + "px");
      document.body.appendChild(spark);
      setTimeout(() => spark.remove(), 600);
    }
  }

  showPopup(elementId) {
    const el = this.engine.getElement(elementId);
    const card = this.popup.querySelector(".card");
    card.innerHTML = `
      <div class="big">${this.engine.getIconHTML(elementId)}</div>
      <div class="ttl">${el.name}</div>
      <div class="val">Новый элемент!</div>
    `;
    this.popup.classList.add("show");
    setTimeout(() => this.popup.classList.remove("show"), 2000);
  }

  showHint(text) {
    this.hintbar.textContent = text;
    this.hintbar.classList.add("show");
    setTimeout(() => this.hintbar.classList.remove("show"), 4000);
  }

  updateCounter() {
    const total = this.engine.elements.size;
    const discovered = this.engine.discovered.size;
    this.counter.textContent = `${discovered} / ${total}`;
  }

  onPaletteTouchStart(e, el) {
    e.preventDefault();
    const touch = e.touches[0];
    const boardRect = this.board.getBoundingClientRect();
    const x = touch.clientX - boardRect.left - 38;
    const y = touch.clientY - boardRect.top - 38;
    this.createBoardItem(el, x, y);
  }

  bindEvents() {
    // Board drop zone
    this.board.addEventListener("dragover", (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "copy";
    });
    
    this.board.addEventListener("drop", (e) => {
      e.preventDefault();
      const id = e.dataTransfer.getData("text/plain");
      const boardRect = this.board.getBoundingClientRect();
      const x = e.clientX - boardRect.left - 38;
      const y = e.clientY - boardRect.top - 38;
      const el = this.engine.getElement(id);
      if (el) this.createBoardItem(el, x, y);
    });
    
    // Menu
    document.getElementById("btnMenu").addEventListener("click", () => {
      document.querySelector(".app-menu").classList.toggle("open");
    });
    
    // Reset
    document.getElementById("btnReset").addEventListener("click", () => {
      if (confirm("Сбросить весь прогресс?")) {
        this.engine.resetProgress();
        this.board.innerHTML = `
          <div id="hintbar"></div>
          <div id="blackHole">🕳️</div>
          <div id="popup"><div class="card"></div></div>
        `;
        this.boardItems = [];
        this.hintbar = document.getElementById("hintbar");
        this.popup = document.getElementById("popup");
        this.renderPalette();
        this.updateCounter();
      }
    });
    
    // Close menu on outside click
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".menu-wrap")) {
        document.querySelector(".app-menu").classList.remove("open");
      }
    });
  }
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  window.alchemyUI = new AlchemyUI(window.alchemyEngine);
});
