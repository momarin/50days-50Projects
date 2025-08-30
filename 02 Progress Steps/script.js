/* --------------------------------------------------------------------------
DOM ELEMENTS */
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
// because there is more than one circle, we use queryselectorall to create a node list and assign the variable to all the elements in the list

let currentActive = 1;
/* --------------------------------------------------------------------------
EVENT LISTENERS */
next.addEventListener("click", () => {
  // when it clicks, it'll run a function and increment the active by one
  currentActive++;
  //   console.log(currentActive); // on next btn: +1

  //   if gets to the end, it doesn't fo past four
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  //   console.log(currentActive);
  update();
});
prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});
/* --------------------------------------------------------------------------
FUNCTIONS */
// updating the dom
/* for each circle, check if the index of that particular circle is less than the currentActive. if true, add the active class onto it. if false, remove the active class*/
function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  // ascending the blue line
  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%"; //percentage for the blue line
  //   console.log(progress.style.width);

  // turning the buttons on and off
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
