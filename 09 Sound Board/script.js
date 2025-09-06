// DOM ELEMENTS
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

// FUNCTIONS
sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopSound();
    document.getElementById(sound).play();
  });

  document.getElementById("buttons").appendChild(btn);
});

// interrupting the current sound when clicking on another one
function stopSound() {
  sounds.forEach((sound) => {
    const currentSound = document.getElementById(sound);
    currentSound.pause();
    currentSound.currentTime = 0;
  });
}
