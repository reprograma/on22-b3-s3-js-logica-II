let idade = 30

console.log(idade)

// Declare uma variável chamada idade dentro do escopo da função exemploEscopo
function exemploEscopo(){
    let idade = 10
    console.log(idade)
}



let variavelGlobal = "Valor da variável Global"

function escopoDeBloco(){
    let variavelLocal = "Valor da variável local"
    console.log(variavelLocal)


    console.log(variavelGlobal)
}

console.log(variavelGlobal)

escopoDeBloco()

function multiplicaNumero(numero1, numero2){

    let resultado = numero1 * numero2

    return resultado
}

console.log(multiplicaNumero(6,9))