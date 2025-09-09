/*
- bring in toggle buttons (querySelectorAll)
- loop through nodelist (foreach)
- add click event (addEventListener)
- Toggle the active class on the parent node (.parentNode & classList.toggle())
*/
/* -------------- DOM ELEMENTS -------------- */
const toggles = document.querySelectorAll(".faq-toggle");
/* -------------- EVENT LISTENER -------------- */
toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});
