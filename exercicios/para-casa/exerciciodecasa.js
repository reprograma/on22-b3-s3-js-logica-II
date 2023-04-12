/**
 1. Crie uma função que receba um número como parâmetro e retorne "par"
 se o número for par e "ímpar" se o número for ímpar.


    
 
   

 
 */

 // Exercício 1 

function mostrarMensagem(numero){
    let mensagem;

    if (numero % 2 == 0 ) {
        mensagem = "par";
        return mensagem;
    } else  {
        mensagem = "ímpar";
        return mensagem;
    }

    
      
}

let resultadoDaMensagem = mostrarMensagem(9)
console.log(resultadoDaMensagem)
resultadoDaMensagem = mostrarMensagem(12)
console.log(resultadoDaMensagem)

// Exercício 2 
/** 2. Crie uma função que receba um número de mês como parâmetro e retorne 
 o nome do mês correspondente. Use a estrutura switch case para resolver 
 este problema.
*/

function mostrarMes(n_mes){

switch(n_mes){
    case 1:
        return `Janeiro`;
        break;
    case 2:
        return `Fevereiro`;
        break;
    case 3:
        return `Março`;
        break;
    case 4:
        return `Abril`;
        break;
    case 5:
        return `Maio`;
        break;
    case 6:
        return `Junho`;
        break;
    case 7:
        return `Julho`;
        break;
    case 8:
        return `Agosto`;
        break;
    case 9:
        return `Setembro`;
        break;
    case 10:
        return `Outubro`;
        break;
    case 11:
        return `Novembro`;
        break;
    case 12:
        return `Dezembro`;
        break;           
    }
}

let mes = mostrarMes(9)
console.log(mes)
mes = mostrarMes(10)
console.log(mes)

// Exercício 3 3. 
/**
Crie uma função que receba duas strings como parâmetros e retorne a 
concatenação das duas strings se ambas tiverem o mesmo tamanho. 
Se não tiverem o mesmo tamanho, retorne apenas a string de maior tamanho.
*/

function somaDasStrings( string1 , string2){
    let nome1 = string1.length
    let nome2 = string2.length
    
    if(nome1 == nome2){
        return string1 + string2;
    } else{
        return(nome1 > nome2 ? string1 : string2);
    }
    }
let string1 = "Gessica"
let string2 = "Araujo"   
let maiormenor = somaDasStrings( string1 , string2)
console.log(maiormenor)

//    Suzik, literalmente HORAS pra fazer essa questao! Finalmente, acho q deu certo!!


//Exercício 4
/**
 Crie uma função que receba uma string como parâmetro e retorne "Sim" 
 se a string contém a letra "a" ou "A" e "Não" caso contrário.
 */

function contemLetraA(namee){
   
    if(namee.includes("a") || namee.includes("A")){
        return 'Sim';
    } else {
        return "Não";

    }
    }

let namee = "Reprograma"
let result = contemLetraA(namee)
console.log(result)

