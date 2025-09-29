/* ------------------------ DOM ELEMENTS ------------------------ */
const buttons = document.querySelectorAll(".ripple");
/* ------------------------ FUNCTIONS ------------------------ */
buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const x = e.clientX;
    const y = e.clientY;
    // console.log(x, y);

    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;
    // console.log(buttonTop, buttonLeft);`

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;
    // console.log(xInside, yInside);

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = yInside + "px";
    circle.style.left = xInside + "px";

    this.appendChild(circle);

    // removing from the DOM
    setTimeout(() => circle.remove(), 500);
  });
});
/* ------------------------ EVENT LISTENERS ------------------------ */
