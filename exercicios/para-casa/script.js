/*1. Crie uma função que receba um número como parâmetro e retorne "par" se o número for par 
e "ímpar" se o número for ímpar.*/

function definirParOuImpar(numero) {

let mensagem1;
let mensagem2;

    if (numero%2 == 0) {
        mensagem1 = "é par";
        return mensagem1;
    } 
    else {
       mensagem2 = "é ímpar";
       return mensagem2;
    }
}

console.log(definirParOuImpar(3))

/*2. Crie uma função que receba um número de mês como parâmetro e retorne o nome do 
mês correspondente. Use a estrutura switch case para resolver este problema.*/

function mes(numeroMes) {

   // let numeroMes;
    let mensagem;
    
    switch (numeroMes) {
      case 1:
        mensagem = "Janeiro";
        break;
      case 2:
        mensagem = "Fevereiro";
        break;
      case 3:
        mensagem = "Março";
        break;
      case 4:
        mensagem = "Abril";
        break;
      case 5:
        mensagem = "Maio";
        break;
        case 6:
        mensagem = "Junho";
        break;
        case 7:
        mensagem = "Julho";
        break;
        case 8:
        mensagem = "Agosto";
        break;
        case 9:
        mensagem = "Setembro";
        break;
        case 10:
        mensagem = "Outubro";
        break;
        case 11:
        mensagem = "Novembro";
        break;
        case 12:
        mensagem = "Dezembro";
        break;
      default:
        mensagem = "Não é um número de mês válido.";
    }
    
    console.log(mensagem);

}

console.log(mes(4)) 



/*3. Crie uma função que receba duas strings como parâmetros e retorne a concatenação das duas
 strings se ambas tiverem o mesmo tamanho. Se não tiverem o mesmo tamanho, 
 retorne apenas a string de maior tamanho*/

function concatenar(a,b) {

    if (a.length == b.length) {
        return console.log(a+b)
    } 
    else {
        if (a.length>b.length)
        return console.log(a)
        else{
            return console.log(b)
        }
    }
}
console.log(concatenar("alegria", "tristeza"))



/*4. Crie uma função que receba uma string como parâmetro e retorne "Sim" se a string contém a
 letra "a" ou "A" e "Não" caso contrário.*/

function letra(string) {
if (string.indexOf('a') !== -1 || string.indexOf('A') !== -1) {
    return("sim")
} 

else {
    return("não")
 }

}
console.log(letra(" Desculpa o atraso, professora"))
