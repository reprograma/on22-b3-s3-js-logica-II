// 4. Crie uma função que receba uma string como parâmetro e retorne "Sim" se a string contém a letra "a" ou "A" e "Não" caso contrário.

function verificaCaractere(str) {
    if(str.includes("a") || str.includes("A")){
        return "Sim"
    }

    return "Não"
}

let resultadoExisteCaractere = verificaCaractere("Hoje fui a aula e aprendi sobre o método includes")

console.log(resultadoExisteCaractere)


function verificaCaractereLimitedEdition(str, ch) {
    let chMinusculo = ch.toLowerCase()
    let chMaiusculo = ch.toUpperCase()

    if(str.includes(chMinusculo) || str.includes(chMaiusculo)){
        return "Sim"
    }

    return "Não"

}

let resultadoVerificaCaractereLimitedEdition = verificaCaractereLimitedEdition("Essa aula ta boa demais","x")

console.log(resultadoVerificaCaractereLimitedEdition)