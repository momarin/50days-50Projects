/* ------------------------ DOM ELEMENTS & CONFIG ------------------------ */
const [fill, empties] = [
  document.querySelector(".fill"),
  document.querySelectorAll(".empty"),
];

const EVENT_MAP = {
  fill: { dragstart: "dragStart", dragend: "dragEnd" },
  empty: {
    dragover: "dragOver",
    dragenter: "dragEnter",
    dragleave: "dragLeave",
    drop: "dragDrop",
  },
};

/* ------------------------ DRAG HANDLER CLASS ------------------------ */
class DragManager {
  static start() {
    this.classList.add("hold");
    setTimeout(() => this.classList.replace("hold", "invisible"), 0);
  }

  static end() {
    this.className = "fill";
  }

  static over(e) {
    e.preventDefault();
  }

  static enter(e) {
    e.preventDefault();
    this.classList.add("hovered");
  }

  static leave() {
    this.className = "empty";
  }

  static drop() {
    this.className = "empty";
    this.append(fill);
  }
}

/* ------------------------ EVENT LISTENER SETUP ------------------------ */
// Setup automático de event listeners
const setupEvents = (element, events, prefix = "") => {
  Object.entries(events).forEach(([event, handler]) => {
    element.addEventListener(event, DragManager[prefix + handler]);
  });
};

setupEvents(fill, EVENT_MAP.fill);
empties.forEach((empty) => setupEvents(empty, EVENT_MAP.empty));

/*
MELHORIA NO CSS
// Use classes em vez de manipulação direta do className
.fill.hold {
  opacity: 0.5;
}

.fill.invisible {
  opacity: 0;
}

.empty.hovered {
  background-color: #ddd;
  border-color: #666;
}
*/
