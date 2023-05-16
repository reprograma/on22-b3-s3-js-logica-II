// Exercicio 1 

// Crie uma função que receba um número como parâmetro e retorne
// "par" se o número for par e "ímpar" se o número for ímpar.


function verificaPar(numero) { // REGRA: primeiro declama e só é rodada depois que vc chama.  declarar uma função, não é a mesma coisa que execultar uma função. 

    if(numero %2 == 0){ //SE OU SENÃO 
        return "Par" 
    }
    
    return "Ímpar" // o return pode ser qualquer condição ( sim, não ou falso e verdadeiro)
    
}

let resultado = verificaPar(11)

console.log(resultado) 
