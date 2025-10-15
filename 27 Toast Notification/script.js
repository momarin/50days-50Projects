/* ------------------------ DOM ELEMENTS ------------------------ */
const toasts = document.querySelector(".toasts");
const button = document.querySelector(".button");
const messages = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
  "Message Five",
];
const types = ["info", "success", "danger", "error"];
/* ------------------------ FUNCTIONS ------------------------ */
// utilitaries functions
function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}
function getRandomType() {
  return types[Math.floor(Math.random() * types.length)];
}

// main functions
function createNotification(message = null, type = null) {
  const notificationEl = document.createElement("div");
  notificationEl.classList.add("toast");
  notificationEl.classList.add(type ? type : getRandomType());
  notificationEl.innerText = message ? message : getRandomMessage();

  toasts.appendChild(notificationEl);

  //   making the notifications disappear
  setTimeout(() => {
    notificationEl.remove();
  }, 3000);
}
/* ------------------------ EVENT LISTENERS ------------------------ */
button.addEventListener("click", () => createNotification());
