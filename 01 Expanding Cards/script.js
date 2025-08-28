// O querySelectorAll vai colocar todos os elementos numa nodelist
const panels = document.querySelectorAll(".panel");
// console.log(panels);

// ------ <EVENT LISTENER
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    // removing active class
    removeActiveClasses();
    // add active class
    panel.classList.add("active");
  });
});

// ------ event listener>

// ------ <FUNCTIONS
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
// ------ <functions
