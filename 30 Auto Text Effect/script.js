/* ------------------------ DOM ELEMENTS ------------------------ */
const textEl = document.querySelector(".text");
const speedEl = document.querySelector(".speed");
const text = "Hello World! Please, come to Brasil.";

let index = 1;
let speed = 300 / speedEl.value;
/* ------------------------ FUNCTIONS ------------------------ */
writeText();

function writeText() {
  textEl.innerText = text.slice(0, index);
  index++;
  if (index > text.length) {
    index = 1;
  }
  setTimeout(writeText, speed);
}
/* ------------------------ EVENT LISTENERS ------------------------ */
speedEl.addEventListener("input", (e) => (speed = 300 / e.target.value));
