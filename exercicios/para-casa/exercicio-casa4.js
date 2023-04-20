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

let resultadoVerificaCaractereLimitedEdition = verificaCaractereLimitedEdition("A Professora ensina muito bem","x")

console.log(resultadoVerificaCaractereLimitedEdition)