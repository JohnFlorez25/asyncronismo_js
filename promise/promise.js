const entregarSprintUno = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("1. Estoy avanzando en mi futuro profesional");
      }, 5000);
    } else {
      reject("John está muy triste :(, debo entregar a tiempo");
    }
  });
};

entregarSprintUno()
  .then((response) => console.log(response))
  .catch((err) => console.log(err));

const entregarSprintDos = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("2. Ya llevo mitad de camino de mi futuro profesional");
      }, 3000);
    } else {
      reject("John y Oscar están muy tristes :(, debo entregar a tiempo");
    }
  });
};

console.log("3. Otro Mensaje");

entregarSprintDos()
  .then((response) => console.log(response))
  .catch((err) => console.log(err));

console.log("4. Hello hello estoy saliendo en pantalla =D");

//Promesas encadenadas
//Promise.all()

Promise.all([entregarSprintUno(), entregarSprintDos()])
  .then(response => {
    console.log("Arreglo de resultados ", response)
  })
  .catch( err => {
    console.error(err)
  })
