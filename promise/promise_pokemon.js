let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//API(ENDPOINT) A LA CUAL VAMOS A REALIZAR LA PETICIÓN

const API_POKEMON = "https://pokeapi.co/api/v2/pokemon/1/";

function capturarPokemon(url_api) {
  return new Promise((resolve, reject) => {
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", url_api, true);
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4) {
        xhttp.status === 200
          ? resolve(JSON.parse(xhttp.responseText))
          : reject(new Error("Error en la petición"));
      }
    };
    xhttp.send();
  });
}

capturarPokemon(API_POKEMON)
  .then((data) => {
    console.log("El nombre del pokemon " + data.forms[0].name);
    console.log("Habilidad a mostrar " + data.abilities[0].ability.name);
    const ability = data.abilities[0].ability.url;
    return capturarPokemon(ability);
  })
  .then((data) => {
    console.log("Su efecto de entrada es " + data.effect_entries[0].effect);
  })
  .catch((err) => {
    console.error(err);
  });
