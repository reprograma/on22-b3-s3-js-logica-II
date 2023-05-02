/* 4. Crie uma função que receba uma string como 
parâmetro e retorne "Sim" se a string contém 
a letra "a" ou "A" e "Não" caso contrário. */

function verificaCaractere(str){
    if(str.includes("a") || str.includes("A")){
        return "Sim"
    }

    return "Nao"

}

let resultadoVerificaCaracterea = verificaCaractere("Expectativa")
let resultadoVerificaCaractereA = verificaCaractere("Amor")
let resultadoVerificaCaractereN = verificaCaractere("Temor")

console.log(resultadoVerificaCaracterea)
console.log(resultadoVerificaCaractereA)
console.log(resultadoVerificaCaractereN)