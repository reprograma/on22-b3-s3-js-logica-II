
//1. Crie uma função que receba um número como parâmetro e retorne "par" se o número for par e "ímpar" se o número for ímpar.

function verificar(numero1) {


    if (numero1 % 2 === 0) {
        let mensagem = "par"
        return mensagem

    }


    if (numero1 % 2 !== 0) {
        let mensagem2 = "ímpar"
        return mensagem2
    }

}

console.log(verificar(13))
console.log(verificar(22))


// 2. Crie uma função que receba um número de mês como parâmetro e retorne o nome do mês correspondente. 
//Use a estrutura switch case para resolver este problema.


function verificaMes (n_mes){
    switch (n_mes) {
    case 1 : 
    return "Janeiro"
    case 2 :
    return "Fevereiro"
    case 3 :
    return "Março"
    case 4 : 
    return "Abril"
    case 5 :
    return "Maio"
    case 6 :
    return "Junho"
    case 7: 
    return "Julho"
    case 8: 
    return "Agosto"
    case 9:
    return "Setembro"
    case 10:
    return "Outubro"
    case 11:
    return "Novembro"
    case 12:
    return "Dezembro"        
 }
}

console.log (verificaMes(10))

//3. Crie uma função que receba duas strings como parâmetros e retorne a concatenação das duas strings se ambas tiverem o mesmo tamanho. 
//Se não tiverem o mesmo tamanho, retorne apenas a string de maior tamanho.

function medirString (string1, string2){
    if (string1.length === string2.length) {
return string1  +  string2
    
} else if (string1.length > string2.length){
    return string1

} else if (string1 < string2){

    return string2
}

}

console.log (medirString("Feliz páscoa." , "Só sei que nada sei."))
console.log (medirString("Está frio"  ,  "Fica aqui"))

//4. Crie uma função que receba uma string como parâmetro e retorne "Sim" se a string contém a letra "a" ou "A" e "Não" caso contrário.

    function buscarLetra (string){
        if (string.includes('A','a')) {
            let mensagem3 = "Sim"
            return mensagem3
        } else if (string.includes('')){
            let mensagem4 = "Não"
            return mensagem4
        }
        }
        console.log(buscarLetra ("Justo eu?"))
    console.log(buscarLetra("Agora sim!"))
        

