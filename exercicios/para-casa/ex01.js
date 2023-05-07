//1. Crie uma função que receba um número como parâmetro e retorne "par" 
//se o número for par e "ímpar" se o número for ímpar.

function parOuimpar (numero){
    if (numero % 2 == 0){
      return 'par'
    }else 
      return 'impar'
}

console.log(parOuimpar(5))