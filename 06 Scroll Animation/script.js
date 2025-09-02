// DOM ELEMENTS
const boxes = document.querySelectorAll(".box");

// FUNCTIONS
function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

// EVENT LISTENER
window.addEventListener("scroll", checkBoxes);
checkBoxes();
