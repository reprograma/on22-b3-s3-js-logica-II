//1. Crie uma função que receba um número como parâmetro e retorne "par" se o número for par e "ímpar" se o número for ímpar.//

function numeroParEImpar(numero) {
    if (numero%2 == 0) {
        console.log(`${numero} é PAR`)
    } else {
        console.log(`${numero} é ÍMPAR`)
    }
    return numero
}

mumeroPar = numeroParEImpar(11)
numeroImpar = numeroParEImpar(3)