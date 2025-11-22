/* ------------------------ DOM ELEMENTS ------------------------ */
const numbers = document.querySelectorAll(".numbers span");
const counter = document.querySelector(".counter");
const finalMessage = document.querySelector(".final");
const replay = document.querySelector("#replay");
/* ------------------------ FUNCTIONS ------------------------ */
runAnimation();

function runAnimation() {
  numbers.forEach((individualElementInNodeList, index) => {
    const nextToLast = numbers.length - 1;

    individualElementInNodeList.addEventListener("animationend", (e) => {
      if (e.animationName === "goIn" && index !== nextToLast) {
        individualElementInNodeList.classList.remove("in");
        individualElementInNodeList.classList.add("out");
      } else if (
        e.animationName === "goOut" &&
        individualElementInNodeList.nextElementSibling
      ) {
        individualElementInNodeList.nextElementSibling.classList.add("in");
      } else {
        counter.classList.add("hide");
        finalMessage.classList.add("show");
      }
    });
  });
}

function resetDOM() {
  counter.classList.remove("hide");
  finalMessage.classList.remove("show");

  numbers.forEach((individualElementInNodeList) => {
    individualElementInNodeList.classList.value = "";
  });

  numbers[0].classList.add("in");
}
/* ------------------------ EVENT LISTENERS ------------------------ */
replay.addEventListener("click", () => {
  resetDOM();
  runAnimation();
});
