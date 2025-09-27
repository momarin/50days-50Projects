/* -------------- DOM ELEMENTS -------------- */
const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";
  const updateCounter = () => {
    // add + in front of counter to transform string to number
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;
    // the divisor is responsible for the speed at which the numbers go up
    const increment = target / 500;
    // console.log(increment);

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
