const fetch = require('node-fetch');

fetch("https://pokeapi.co/api/v2/pokemon/1/")
    .then((response) => {
        if (response.status >= 200 && response < 300){
            console.log(response)
            response.json()
        }
    })
    .then( data => console.log(data.forms[0].name)
    .catch(
        err => console.log(err)
    )
)
