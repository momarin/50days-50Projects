/* ------------------------ DOM ELEMENTS ------------------------ */
// API config
const API_URL = "https://api.github.com/users/";

const form = document.querySelector(".user-form");
const search = document.querySelector(".search");
const main = document.querySelector(".main");
/* ------------------------ FUNCTIONS ------------------------ */
async function getUser(username) {
  try {
    const { data } = await axios(API_URL + username);
    // console.log(data);
    createUserCard(data);
    getRepos(username);
  } catch (error) {
    if (error.response.status === 404) {
      createErrorCard("No profile with this username");
    }
  }
}
// função com .then
// function getUser(username) {
//   // axios.get() and axios() are the same thing
//   axios(API_URL + username)
//     .then((response) => console.log(response.data))
//     .catch((error) => console.log(error));
// }

function createUserCard(user) {
  const cardHTML = `
    <div class="card">
        <div class="avatar-box">
            <img
                src="${user.avatar_url}"
                alt="${user.name}"
                class="avatar"
            />
        </div>
        <div class="user-info">
            <h2>${user.name}</h2>
            <p>
                ${user.bio}
            </p>
            <ul>
                <li>${user.followers} <strong>Followers</strong></li>
                <li>${user.following} <strong>Following</strong></li>
                <li>${user.public_repos} <strong>Repos</strong></li>
            </ul>
            <div id="repositories">
                
            </div>
        </div>
    </div>
  `;
  main.innerHTML = cardHTML;
}
// Getting repos
async function getRepos(username) {
  try {
    //https://api.github.com/users/momarin/repos to find how to access repos
    const { data } = await axios(API_URL + username + "/repos?sort=created");
    addReposToCard(data);
  } catch (error) {
    createErrorCard("Problem fetching repos");
  }
}
// Error Message
function createErrorCard(message) {
  const cardHTML = `
    <div class="card"><h1>${message}</h1></div>
    `;
  main.innerHTML = cardHTML;
}
// Repos
function addReposToCard(repos) {
  const reposEl = document.getElementById("repositories");

  repos.slice(0, 10).forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repositorie");
    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.innerText = repo.name;

    reposEl.appendChild(repoEl);
  });
}
/* ------------------------ EVENT LISTENERS ------------------------ */
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = search.value;

  if (user) {
    getUser(user);
    search.value = "";
  }
});

/* ------------------------ OBS ------------------------ */
/*
// Função com then
- Com axios, não precisamos transformar a variável em json. com fetch, teríamos que usar .then(response => response.json());
- Além disso, não há necessidade de adicionar um seguno .then com o axios;
- Quando temos uma promessa, podemos usar o .catch para tratamento de erros;

// Função com async await
- commo const response é um objeto que possui a propriedade "data", que é outro objeto podemos usar o destructure, usando apenas o data, e não todo o objeto. Assim, podemos dar apenas um console.log(data), no lugar de console.log(response.data)
- use o try catch para tratamento de erros
*/
