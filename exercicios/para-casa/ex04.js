//4. Crie uma função que receba uma string como parâmetro e retorne "Sim"
// se a string contém a letra "a"
// ou "A" e "Não" caso contrário.

function verificaCaractere (string) {
    if(string.includes('a') || string.includes('A')){
        return 'Sim'
    }
    else{
        return 'Não'
    }
}

console.log(verificaCaractere('Iasmin'))