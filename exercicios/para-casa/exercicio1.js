/** 1. Crie uma função que receba um número como parâmetro e retorne "par" se o número for par e "ímpar" se o número for 
 * ímpar.*/

function definicaoParImpar(numero) {
    let calculo = numero % 2; 
    if(calculo == 0) {
        return "par"; 
    } else {
        return "impar"
    }

}
let total = definicaoParImpar(55)

console.log(total)



