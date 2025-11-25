/* ------------------------ DOM ELEMENTS ------------------------ */
const imagesContainer = document.querySelector(".image-container");
const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");

const images = document.querySelectorAll("#images img");

let index = 0;
let interval = setInterval(run, 2000);
/* ------------------------ FUNCTIONS ------------------------ */
function run() {
  index++;

  changeImage();
}
function changeImage() {
  if (index > images.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = images.length - 1;
  }
  imagesContainer.style.transform = `translateX(${-index * 330}px)`;
}
function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}
/* ------------------------ EVENT LISTENERS ------------------------ */
leftBtn.addEventListener("click", () => {
  index--;
  changeImage();
  resetInterval();
});
rightBtn.addEventListener("click", () => {
  index++;
  changeImage();
  resetInterval();
});
