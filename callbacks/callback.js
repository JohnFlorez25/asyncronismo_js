function multiplicar(numeroUno, numeroDos){
    let resultado = numeroUno * numeroDos;
    return resultado;
}

function calcular(x, y, callback){
    return callback(x, y);
}

console.log(calcular(5, 10, multiplicar));