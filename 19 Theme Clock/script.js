/* ------------------------ DOM ELEMENTS ------------------------ */
const toggleEl = document.querySelector(".toggle");
const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
// array days
const days = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];
// array months
const months = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];
/* ------------------------ FUNCTIONS ------------------------ */
// scale function to map a range of numbers to another range of numbers
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

function setTime() {
  const time = new Date();
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();
  const day = time.getDay();
  const date = time.getDate();
  const month = time.getMonth();
  const hoursForClock = hours % 12;
  const ampm =
    hours >= 12
      ? "PM"
      : "AM"(
          // animated clock
          // hours
          (hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
            hoursForClock,
            0,
            11,
            0,
            360
          )}deg)`)
        );
  // minutes
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    59,
    0,
    360
  )}deg)`;
  // seconds
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    59,
    0,
    360
  )}deg)`;
  // numeric clock
  timeEl.innerHTML = `${hoursForClock}:${
    minutes < 10 ? `0${minutes}` : minutes
  } ${ampm}`;
  dateEl.innerHTML = `${days[day]}, <span class="circle">${date}</span> ${months[month]}`;
}

setTime();
setInterval(setTime, 1000);
/* ------------------------ EVENT LISTENERS ------------------------ */
// handling dark/light mode
toggleEl.addEventListener("click", (e) => {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHTML = "Dark mode";
  } else {
    html.classList.add("dark");
    e.target.innerHTML = "Light mode";
  }
});
/*
- create array for days and for months
- inserting dark mode --> in an eventListener, add or remove the class of dark to the html element and change the text of the button
*/
