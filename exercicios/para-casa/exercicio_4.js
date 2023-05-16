// 4. Crie uma função que receba uma string como parâmetro e retorne "Sim" se a string contém a letra "a" ou "A" e "Não" caso contrário. 

//receber uma string 
// retornar Sim para letra a minuscula  e A maiuscula
// retornar Não para  nenhuma das afimarções acima. 


function verificaCaractere(str) {
    if(str.includes("a") || str.includes("A")){ 
        return "Sim"
    }

    return "Não"    
}

let resultadoExisteCaractere = verificaCaractere("Rael é o Amor da minha vida todinha ")

console.log(resultadoExisteCaractere)

