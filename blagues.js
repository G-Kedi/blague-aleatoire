const apiBaseUrl = "https://v2.jokeapi.dev/joke/";
const jokeType = "Any";
const lang = "fr";

const getRandomJoke = async () => {
  const requestParams = `?lang=${lang}`;
  const urlToFetch = apiBaseUrl + jokeType + requestParams;

  const response = await fetch(urlToFetch);
  const jsonResponse = await response.json();
  const joke = {
    question: jsonResponse.setup,
    reponse: jsonResponse.delivery,
  };

  return joke;
};


