 function exibirMensagem(nome){

    let mensagem = `Olá ${nome}, bom dia`

    return mensagem
}

let mensagemSuzik = exibirMensagem("Suzik") // Olá Suzik, bom dia
let mensagemAndreza = exibirMensagem("Andreza")// Olá Andreza, bom dia
let mensagemDoguinho = exibirMensagem("Doguinho")// Olá Doguinho, bom dia

console.log(mensagemSuzik)
console.log(mensagemAndreza)
console.log(mensagemDoguinho)


function somarOsNumerosDeVerdade(numero1 , numero2){
 let resultadoSoma = numero1 + numero2 // input de dados

 return resultadoSoma // output de dados
}

let soma = somarOsNumerosDeVerdade(8,9)
let outraSoma = somarOsNumerosDeVerdade(5647,9876)

console.log(`A soma dos números é: ${soma}`)
console.log(`A soma dos números é: ${outraSoma}`)
