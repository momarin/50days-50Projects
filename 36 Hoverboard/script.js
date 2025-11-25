/* ------------------------ DOM ELEMENTS ------------------------ */
const container = document.querySelector(".container");
const rainbowColors = [
  "#ffadad",
  "#ffd6a5",
  "#fdffb6",
  "#caffbf",
  "#9bf6ff",
  "#a0c4ff",
  "#bdb2ff",
  "#ffc6ff",
];
const SQUARES = 500;
/* ------------------------ FUNCTIONS ------------------------ */
function setColor(e) {
  //   console.log(e);
  const color = getRandomColor();
  //   console.log(color);
  e.style.background = color;
  e.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
function removeColor(e) {
  e.style.background = "#1d1d1d";
  e.style.boxShadow = "0 0 2px #000";
}
function getRandomColor() {
  return rainbowColors[Math.floor(Math.random() * rainbowColors.length)];
}
/* ------------------------ EVENT LISTENERS ------------------------ */
for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));

  container.appendChild(square);
}
