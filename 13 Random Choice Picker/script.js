/* -------------- DOM ELEMENTS -------------- */
const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

/* -------------- Functions -------------- */
// focus() method automatically put the cursor in the textarea
textarea.focus();

function createTags(input) {
  //   console.log(input);
  //preventing empty space from being added to the array
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());
  //   console.log(tags);
  tagsEl.innerHTML = "";

  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}

function randomSelect() {
  //   console.log(123);
  const times = 30;
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highlightTag(randomTag);
    setTimeout(() => {
      highlightTagRemove(randomTag);
    }, 100);
  }, 100);

  //   stoping the selection and picking 1 and highlighting it
  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add("highlight");
}

function highlightTagRemove(tag) {
  tag.classList.remove("highlight");
}

/* -------------- Event Listener -------------- */
textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);

  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);

    randomSelect();
  }
});
