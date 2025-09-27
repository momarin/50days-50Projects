/* ------------------------ DOM ELEMENTS ------------------------ */
const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");
/* ------------------------ FUNCTIONS ------------------------ */
// BIG CUP
function updateBigCup() {
  const fullCups = document.querySelectorAll(".cup-small.full").length;
  const totalCups = smallCups.length;
  //   console.log(totalCups);

  //   hidding % if empty
  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }

  //   removing text remained if its full
  if (fullCups === totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
}

updateBigCup();
// SMALL CUPS
function highlightCups(idx) {
  //   console.log(idx);

  //   se o copo que clico contém classe full AND o copo seguinte não contém classe full, faça: remova classe full do copo que clico (current index)
  if (
    smallCups[idx].classList.contains("full") &&
    !smallCups[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }

  //  adicione/remova a classe full para cada smallCup clicado
  //  idx2 é o index especifico para esse loop
  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });
  updateBigCup();
}
/* ------------------------ EVENT LISTENERS ------------------------ */
// acione função highlight ao clicar
smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => highlightCups(idx));
});
