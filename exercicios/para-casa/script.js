// 1. Crie uma função que receba um número como parâmetro e retorne "par" se o número for par e "ímpar" se o número for ímpar.

function imparpar() {
    
    let n = 3;

    if(n & 1){
        console.log("Impar");
    } else {
        console.log("Par");
    }

}

imparpar()


// 2. Crie uma função que receba um número de mês como parâmetro e retorne o nome do mês correspondente. Use a estrutura switch case para resolver este problema.

function qualMes() {

 let mes = 6;

switch (mes) {
    case 1:
      console.log("Janeiro");
      break;
    case 2:
      console.log("Fevereiro");
      break;
    case 3:
      console.log("Março");
      break;
    case 4:
      console.log("Abril");
      break;
    case 5:
      console.log("Maio");
      break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Dezembro");
        break;
    default:
      console.log("Desculpe, esse mês não existe");
  }
}

qualMes()


// 3. Crie uma função que receba duas strings como parâmetros e retorne a concatenação das duas strings se ambas tiverem o mesmo tamanho. Se não tiverem o mesmo tamanho, retorne apenas a string de maior tamanho.

function concatenacao() {

    let valor1 = 8;
    let valor2 = 5;

    if (valor1 === valor2) {
      return console.log(valor1 + valor2);
    } else {
      return console.log(Math.max(valor1, valor2));
    }
  }

concatenacao()


// 4. Crie uma função que receba uma string como parâmetro e retorne "Sim" se a string contém a letra "a" ou "A" e "Não" caso contrário.

function maiusMinus() {

    let palavra = "Ana"

    if (palavra.includes("a") || palavra.includes("A")) {
      return console.log("Sim");
    } else {
      return console.log("Não");
    }
  }

maiusMinus()