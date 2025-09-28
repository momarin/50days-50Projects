/* ------------------------ DOM ELEMENTS ------------------------ */
const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let activeSlide = 0;
/* ------------------------ FUNCTIONS ------------------------ */
function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}
// add active class to the next image
function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[activeSlide].classList.add("active");
}

setBgToBody();
/* ------------------------ EVENT LISTENERS ------------------------ */
// right arrow btn
rightBtn.addEventListener("click", () => {
  activeSlide++;

  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }

  setBgToBody();
  setActiveSlide();
});
// left arrow btn
leftBtn.addEventListener("click", () => {
  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }
  setBgToBody();
  setActiveSlide();
});
