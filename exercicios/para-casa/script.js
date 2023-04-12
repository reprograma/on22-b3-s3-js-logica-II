/** Exercicio 1 - Crie uma função que receba um número como parâmetro e retorne 
 "par" se o número for par e "ímpar" se o número for ímpar.*/
function parImpar(numero){
  if(numero % 2 == 0){
    return 'O número é par'
  }else{
    return 'O número é impar'
  }
}

const númeroParOuImpar = parImpar(125);
console.log(númeroParOuImpar)

//Fiquei na dúvida se há alguma outra forma de realizar essa função de par ou impar. 


/** Exercicio 2 - Crie uma função que receba um número de mês como parâmetro e retorne o nome 
do mês correspondente. Use a estrutura switch case para resolver este problema.*/
function verificarMes(n_mes) {
  
    switch (3) {
      case 1:
        return 'Este é o mês de Janeiro.'
      case 2:
        return 'Este é o mês de Fevereiro.'
      case 3:
        return 'Este é o mês de Março.'
      case 4:
        return 'Este é o mês de Abril.'
      case 5:
          return "Este é o mês de Maio."
      case 6:
          return 'Este é o mês de Junho.'
      case 7:
          return 'Este é o mês de Julho.'
      case 8:
          return 'Este é o mês de Agosto.'
      case 9:
          return "Este é o mês de Setembro."
      case 10:
          return 'Este é o mês de Outubro.'
      case 11:
          return 'Este é o mês de Novembro'
      case 12:
          return 'Este é o mês de Dezembro'
    }
  }
  const Mês = verificarMes();
  console.log(Mês)
  

/** Exercicio 3 - Crie uma função que receba duas strings como parâmetros e retorne a 
concatenação das duas strings se ambas tiverem o mesmo tamanho. Se não tiverem o mesmo 
tamanho, retorne apenas a string de maior tamanho. */

function StringsConcatenadas(palavra1, palavra2){
  if (palavra1.length == palavra2.length){
    return palavra1 + palavra2
  } else {
    return palavra1.length > palavra2.length ? palavra1 : palavra2;
  }
}
const msgString = StringsConcatenadas("pedra ", " roupa")
console.log(msgString)

/** Exercicio 4 - Crie uma função que receba uma string como parâmetro e retorne 
"Sim" se a string contém a letra "a" ou "A" e "Não" caso contrário.*/

function contemA(texto){
  if(texto.includes('a') || texto.includes('A')){
    return `A palavra "${texto}" contém as letras "a" ou "A"`
  }else{
    return `A palavra "${texto}" NÃO contém as letras "a" ou "A"`
  }
}
const mensagem = contemA("Foice");
console.log(mensagem)