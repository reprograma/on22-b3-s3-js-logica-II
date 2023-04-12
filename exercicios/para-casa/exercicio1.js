/** Exercício 1: Crie uma função que receba um número como parâmetro e retorne "par" se o número for par e 
 * "ímpar" se o número for ímpar.
 */

function parOuImpar(numero){
   
    let resto = numero % 2;
    if(resto == 0 ) {
        return `Seu número ${numero} é Par.`;
    } else {
        return `Seu número ${numero} é Impar.`;
    }

}
let total = parOuImpar(8)
console.log(total)
total = parOuImpar(5)
console.log(total)
total = parOuImpar(10)
console.log(total)
total = parOuImpar(2)
console.log(total)

// Ou tentando deixar mais limpo:
function parOuImpar2(numero){
   
    let resto = numero % 2;
    if(resto == 0 )  return `Seu número ${numero} é Par.`;
    if(!resto == 0)   return `Seu número ${numero} é Impar.`;
    
}
let total2 = parOuImpar2(8)
console.log(total2)

// ou também (esse foi mais dificil)

function produto(numero){
    const resto = numero / 2;
    const resultado = resto % 2 == 0 ? 'Par' : 'Impar';
    return `Seu número ${numero} é ${resultado}.`

}
console.log(produto(4))
