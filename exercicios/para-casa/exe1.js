/* Funcao operador ternário x/2 sobra 0 = par. 
Ex: 10/2 = 5 sobra 0 e 9/2 = 4 sobra 1. */

function parouImpar(number){
    return number % 2 === 0 ? "par" : "impar";
}

console.log(parouImpar(986754165));
console.log(parouImpar(754564562));