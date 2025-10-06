/* ------------------------ DOM ELEMENTS ------------------------ */
const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bgs_texts = document.querySelectorAll(".animated-bg-text");
/* ------------------------ FUNCTIONS ------------------------ */
setTimeout(getData, 2000);

function getData() {
  header.innerHTML = `<img src="https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />`;
  title.innerHTML = `Lorem ipsum dolor sit amet.`;
  excerpt.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, beatae!`;
  profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/women/30.jpg" alt="" />`;
  name.innerHTML = `Jane Doe`;
  date.innerHTML = `29 de Setembro de 2025`;

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bgs_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
/* ------------------------ EVENT LISTENERS ------------------------ */
