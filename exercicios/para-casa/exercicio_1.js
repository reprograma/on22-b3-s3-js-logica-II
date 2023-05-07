// 1. Crie uma função que receba um número como parâmetro e retorne "par" se o número for par e "ímpar" se o número for ímpar. OK


function verificaPar(numero){
    if(numero %2 == 0){
        return "Par"
    }
    
    return "Ímpar"
    
}

let resultado = verificaPar(12)

console.log(resultado)
