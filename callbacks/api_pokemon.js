let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//API(ENDPOINT) A LA CUAL VAMOS A REALIZAR LA PETICIÓN

const API_POKEMON = "https://pokeapi.co/api/v2/pokemon/1/";

function capturarPokemon(url_api, callback){
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", url_api, true);
    xhttp.onreadystatechange = function (event) {
        if(xhttp.readyState === 4){
            if(xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error("Error en la petición");
                return callback(error, null);
            } 
        }
    };
    xhttp.send();
}

capturarPokemon(API_POKEMON, function (error, data){
    if(error) return console.log(error);
    //console.log("El nombre del pokemon "+data.forms[0].name)
    const ability = data.abilities[0].ability.url
    capturarPokemon(ability, function (error2, data2){
        if(error2) return console.log(error2);
        console.log("El nombre del pokemon " + data.forms[0].name)
        console.log("Habilidad a mostrar " + data.abilities[0].ability.name)
        console.log("Su efecto de entrada es " + data2.effect_entries[0].effect)
   })
})



