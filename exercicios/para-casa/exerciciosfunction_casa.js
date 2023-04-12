/** 1. Crie uma função que receba um número como parâmetro e
 * retorne "par" se o número for par e "ímpar" se o número for ímpar.*/

function verificaParOuImpar(Number){
    
    if(Number % 2 == 0) {return "par"}
    else {return "ímpar"}

}

console.log(verificaParOuImpar(5))
console.log(verificaParOuImpar(10))



/** 2. Crie uma função que receba um número de mês como parâmetro e
 * retorne o nome do mês correspondente. Use a estrutura switch case
 * para resolver este problema.*/

function verificaMes(n_mes) {
  
    switch (n_mes) {
      case 1:
        return 'Janeiro'
      case 2:
        return 'Fevereiro'
      case 3:
        return 'Março'
      case 4:
        return 'Abril'
      case 5:
          return 'Maio'
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
        default:
            return 'Não é um número de mês válido. Digite de 1 a 12.'
    }
  
  }

console.log(verificaMes(13))


/** 3. Crie uma função que receba duas strings como parâmetros e
 * retorne a concatenação das duas strings se ambas tiverem o mesmo tamanho.
 * Se não tiverem o mesmo tamanho, retorne apenas a string de maior tamanho. */

function concatenaStrings(str1, str2) {
    
    if (str1.length === str2.length) {
      return str1 + str2;
    } else {
      return str1.length > str2.length ? str1 : str2;
    }
  }

  let verificaString = concatenaStrings("programa", "reprograma")
  console.log(verificaString)

   

  /** 4. Crie uma função que receba uma string como parâmetro e
   * retorne "Sim" se a string contém a letra "a" ou "A" e "Não" caso contrário. */

  function contemLetraA(str) {
    if (str.includes('a') || str.includes('A')) {
      return 'Sim';
    } else {
      return 'Não';
    }
  }
  let verificaStringaA = contemLetraA('De médico e louco todo mundo tem um pouco')
  console.log(verificaStringaA)

