/* ------------------------ DOM ELEMENTS ------------------------ */
const loveMe = document.querySelector(".love-me");
const times = document.querySelector(".times");

let clickTime = 0;
let timesClicked = 0;
/* ------------------------ FUNCTIONS ------------------------ */
const createHeart = (e) => {
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");

  // mapeando posicionamento do mouse
  const x = e.clientX;
  const y = e.clientY;

  const leftOffSet = e.target.offsetLeft;
  const topOffSet = e.target.offsetTop;

  // fazendo com que o posicionamento x e y fique relativo à imagem
  const xInsideImg = x - leftOffSet;
  const yInsideImg = y - topOffSet;
  //   console.log(xInsideImg, yInsideImg);
  heart.style.top = `${yInsideImg}px`;
  heart.style.left = `${xInsideImg}px`;
  loveMe.appendChild(heart);
  // adicionando contador de clicks e removendo classe do html depois de 1s
  times.innerHTML = ++timesClicked;
  setTimeout(() => heart.remove(), 1000);
};
/* ------------------------ EVENT LISTENERS ------------------------ */
// loveMe.addEventListener("dblclick", (e) => {
//   console.log(123);
// });

// Custom double click
loveMe.addEventListener("click", (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});
