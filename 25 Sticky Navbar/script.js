/* ------------------------ DOM ELEMENTS ------------------------ */
const nav = document.querySelector(".nav");
/* ------------------------ FUNCTIONS ------------------------ */
function fixNav() {
  //   console.log(window.scrollY, nav.offsetHeight);
  if (window.scrollY > nav.offsetHeight + 500) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}
/* ------------------------ EVENT LISTENERS ------------------------ */
window.addEventListener("scroll", fixNav);
