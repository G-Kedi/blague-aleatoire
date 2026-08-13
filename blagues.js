"use strict";

const apiBaseUrl = "https://v2.jokeapi.dev/joke/";
const jokeType = "Any";
const lang = "fr";

const joke_card = document.querySelector("#joke_card");

//Ajoute le contenu HTML dans l'élément tables
function afficherBlague(html) {
  joke_card.innerHTML = html;
}

const getRandomJoke = async () => {
  const requestParams = `?lang=${lang}`;
  const urlToFetch = apiBaseUrl + jokeType + requestParams;

  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      const joke = {
        question: jsonResponse.setup,
        reponse: jsonResponse.delivery,
      };
      renderJoke(joke);
    } else {
      renderError();
    }
  } catch (error) {
    renderError();
  }
};

function renderError() {
  let html = `
    <p class="error">
      <strong>Oops !</strong><br> 
      une erreur est survenue, <br> vérifier votre connexion et
      recharger la page
    </p>`;

  afficherBlague(html);
}

function renderJoke(joke) {
  let html = `
    <h2 class="question">
      ${joke.question}
    </h2>
    <p class="reponse">
      ${joke.reponse}
    </p>
  `;
  afficherBlague(html);
}

getRandomJoke();
