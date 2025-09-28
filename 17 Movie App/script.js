/* ------------------------ API CONFIG ------------------------ */
const API_KEY = "7b58c21540537ddf08ae663041815eb7";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&language=pt-BR&page=1`;
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=pt-BR&query="`;
/* ------------------------ DOM ELEMENTS ------------------------ */
const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");
/* ------------------------ FUNCTIONS ------------------------ */
getMovies(API_URL);

// geting movies
async function getMovies(url) {
  const response = await fetch(url);
  const data = await response.json();

  //   console.log(data.results);
  showMovies(data.results);
}

function showMovies(movies) {
  main.innerHTML = "";
  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
        <img
          src="${IMG_PATH + poster_path}"
          alt="${title}"
        />
        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average.toFixed(
      1
    )}</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>
    `;
    main.appendChild(movieEl);
  });
}
// Utilitaries functions
// rating
function getClassByRate(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}
/* ------------------------ EVENT LISTENERS ------------------------ */
// search input
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_API + searchTerm);
    search.value = "";
  } else {
    window.location.reload();
  }
});
