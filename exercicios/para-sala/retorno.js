function retornaMensagem() {
    let mensagem = "Você foi o ganhador de um sorteio"

    return mensagem
}

let mensagemRetornada = retornaMensagem()

console.log(mensagemRetornada) // "mensagem"

/** 
 * Some dois números e multiplique por 2, exibindo no console o resultado
*/
let somaDosvalores = somarNumeros() // 5
let valorMultiplicado = somaDosvalores * 2

console.log(valorMultiplicado) // 10

/**
 * some dois numeros e divida por 2, exibindo no console o resultado
 */

let valoresSomados = somarNumeros() // 5
let valorDivisao = valoresSomados / 2


console.log(valorDivisao) // 2.5


function somarNumeros(){
    let numero1 = 2
    let numero2 = 3
    let valorSoma = numero1 + numero2

    return valorSoma
}