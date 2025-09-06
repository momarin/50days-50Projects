/* ------------ DOM ELEMENTS ------------ */
const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("joke-btn");

/* ------------ FUNCTIONS ------------ */
generateJoke();

// USING ASYNC AWAIT
async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  try {
    const response = await fetch("https://icanhazdadjoke.com", config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // inserting the joke in the innerHTML of the jokeEL
    jokeEl.innerHTML = data.joke;
  } catch (error) {
    console.error("Error", error.message);
    jokeEl.innerHTML = "Dad didn't tell a new joke";
  }
}

// USING .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };

//   fetch("https://icanhazdadjoke.com", config)
//     .then((response) => response.json())
//     .then((data) => {
//       // inserting the joke in the inner html of the jokeEl
//       jokeEl.innerHTML = data.joke;
//     });
// }
/* ------------ EVENT LISTENER ------------ */
jokeBtn.addEventListener("click", generateJoke);
