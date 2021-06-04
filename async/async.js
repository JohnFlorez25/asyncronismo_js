const entregarSprintUno = () => {
    return new Promise((resolve, reject) => {
      if (true) {
        setTimeout(() => {
          resolve("1. Estoy avanzando en mi futuro profesional");
        }, 2000);
      } else {
        reject(new Error("John está muy triste :(,"));
      }
    });
  };


const ejecutarAsyncAwait = async () => {
    try{
        const resultadoSprint = await entregarSprintUno();
        console.log(resultadoSprint);
    } catch(err){
        console.error(err)
    }
}

ejecutarAsyncAwait()