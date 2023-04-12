/*
1. Crie uma função que receba um número como parâmetro e retorne "par" 
se o número for par e "ímpar" se o número for ímpar.
*/

function retornaParOuImpar(numero){
    
    let mensagem;
    if (numero %2 == 0){
        mensagem = "Par"
        return mensagem
    }else{
        mensagem = "Ímpar"
        return mensagem
        }
}
let resultado = retornaParOuImpar(20)
console.log(resultado)

/* ****************************Fim do exercício 1****************************** */

/* 2. Crie uma função que receba um número de mês como parâmetro e retorne o nome 
do mês correspondente. Use a estrutura switch case para resolver este problema.*/
function exibeMesPorExtenso(numero_mes){
    
    switch(numero_mes){
    case 1:
      return 'Janeiro'
    case 2:
      return 'Fevereiro'
    case 3:
      return 'Março'
    case 4:
      return 'Abril'
    case 5:
        return "Maio"
    case 6:
        return 'Junho'
    case 7:
        return 'Julho'
    case 8:
        return 'Agosto'
    case 9:
        return 'Setembro'
    case 10:
        return 'Outubro'
    case 11: 
        return 'Novembro'
    case 12:
        return 'Dezembro'
    }
    
}
let mesCorrespondente = exibeMesPorExtenso(6)
console.log(mesCorrespondente)
/* ****************************Fim do exercício 2****************************** */

/* 3. Crie uma função que receba duas strings como parâmetros e retorne a concate-
nação das duas strings se ambas tiverem o mesmo tamanho. Se não tiverem o mesmo 
tamanho, retorne apenas a string de maior tamanho.*/

function verificaDuasStrings(string1, string2){

    if(string1.length == string2.length){
        return string1 + string2
    }else{
        if(string1.length > string2.length){
            return string1
        } else{
            return string2
        }
    }
}

let concatenaStrings = verificaDuasStrings("Aline", "Enila")
let concatenaStrings1 = verificaDuasStrings("Aline", "Machado")
console.log(concatenaStrings)
console.log(concatenaStrings1)
/* ****************************Fim do exercício 3****************************** */

/* 4. Crie uma função que receba uma string como parâmetro e retorne "Sim" se a 
string contém a letra "a" ou "A" e "Não" caso contrário.*/

/* ****************************Fim do exercício 4****************************** */

function exibePalavraContendoLetraA(string){
    let mensagem
    if (string.includes("A") || string.includes("a")){
        mensagem = "Sim"
        return mensagem
    } else{
        mensagem = "Não"
        return mensagem
    }
}
let exibeStringA = exibePalavraContendoLetraA("aLINE")
console.log(exibeStringA)
let exibeStringA1 = exibePalavraContendoLetraA("Doce de Coco")
console.log(exibeStringA1)