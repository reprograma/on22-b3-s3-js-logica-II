/**4. Crie uma função que receba uma string como parâmetro e retorne "Sim" se a string contém a letra "a" ou "A" e 
 * "Não" caso contrário */

function verificarPalavra(caneta) {
    if(caneta.includes("a") || caneta.includes("A")) {
        return "Sim" 
    } else { 
        return "Não"
     }


}
let palavra = verificarPalavra("caneta")
console.log(palavra)
palavra = verificarPalavra("Exercicio")
console.log(palavra)