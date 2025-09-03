/* ----------------- DOM ELEMENTS ----------------- */
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");
/* ----------------- FUNCTIONS ----------------- */

/* ----------------- EVENT LISTENERS ----------------- */
// hover left side
left.addEventListener("mouseenter", () =>
  container.classList.add("hover-left")
);
left.addEventListener("mouseleave", () =>
  container.classList.remove("hover-left")
);
// hover right side
right.addEventListener("mouseenter", () =>
  container.classList.add("hover-right")
);
right.addEventListener("mouseleave", () =>
  container.classList.remove("hover-right")
);
