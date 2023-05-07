//2. Crie uma função que receba um número de mês como parâmetro e retorne o nome do mês correspondente. 
//Use a estrutura switch case para resolver este problema.

let mesDoAno = 7;
let mensagem;

switch(mesDoAno) {
    case 1:
        mensagem = 'janeiro'
        break
    case 2:
         mensagem = 'fervereiro'
         break
    case 3:
        mensagem = 'março'
        break
    case 4:
         mensagem = 'abril'
         break
    case 5:
         mensagem = 'maio'
         break
    case 6:
         mensagem = 'junho'
         break
    case 7:
         mensagem = 'julho'
         break
    case 8:
        mensagem = 'agosto'
        break
    case 9:
        mensagem ='setembro'
        break
    case 10:
         mensagem = 'outubro'
         break
    case 11:
         mensagem = 'novembro'
         break
    case 12:
         mensagem = 'dezembro'
         break
    default:
        return mensagem = 'opção inválida'
}

console.log(mensagem)