//1. Crie uma função que receba um número como parâmetro e retorne "par" se o número for par e "ímpar" se o número for ímpar.

function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
      return "É par.";
    } else {
      return "É ímpar.";
    }
  }
  
 let numero = 40;
 let numero2 = 7679;
  
 console.log(verificarParOuImpar(numero)); 
 console.log(verificarParOuImpar(numero2));

//2. Crie uma função que receba um número de mês como parâmetro e retorne o nome do mês correspondente. Use a estrutura switch case para resolver este problema.

function nomeDoMes(numero) {
  
    switch (numero) {
      case 1:
        return 'Janeiro.'
      case 2:
        return 'Fevereiro.'
      case 3:
        return 'Março.'
      case 4:
        return 'Abril.'
      case 5:
        return "Maio."
      case 6:
        return 'junho.'
      case 7:
        return 'Julho.'
      case 8:
        return 'Agosto.'
      case 9:
        return 'Setembro.'  
      case 10:
        return 'Outubro.'
      case 11:
        return 'Novembro.'   
      case 12: 
       return 'Dezembro.'  
    }
  
  }
  
 let resposta = nomeDoMes(10);
 let resposta2 = nomeDoMes(4);
  
 console.log(resposta);
 console.log(resposta2);

 //3. Crie uma função que receba duas strings como parâmetros e retorne a concatenação das duas strings se ambas tiverem o mesmo tamanho. Se não tiverem o mesmo tamanho, retorne apenas a string de maior tamanho.

 function concatenandoStrings(strg1, strg2) {
    if (strg1.length === strg2.length) {
      return strg1 + strg2;
    } else if (strg1.length > strg2.length) {
      return strg1;
    } else {
      return strg2;
    }
  }
  
 let strg1 = "Estrela";
 let strg2 = "Céu";
 let resultado = concatenandoStrings(strg1,strg2);
  
 console.log(resultado);

 //4. Crie uma função que receba uma string como parâmetro e retorne "Sim" se a string contém a letra "a" ou "A" e "Não" caso contrário.

 function temOuNaoLetraA (str) {

    return  (str.includes('a') || str.includes('A')) ? "Sim." : "Não.";

 }

 let str = "Luana";
 let str2 = "Heitor"
 let resultadoFinal = temOuNaoLetraA(str);
 let resultadoFinal2 = temOuNaoLetraA(str2);   
 
 console.log(resultadoFinal);
 console.log(resultadoFinal2);

  
  
  