/* Funcao compara tamanho das strings usando if. 
Se forem iguais concatena, caso contrario retorna a maior. 
Desempenho de aluno: progrediu ou nao progrediu. */

function comparaStrings(str1, str2){
  if(str1.length === str2.length){
    return str1 + str2
  }

  if(str1.length > str2.length){
    return str1
  }

  return str2

}

let resultadoComparaStrings1 = comparaStrings("Regular E", "Progrediu")
let resultadoComparaStrings2 = comparaStrings("Excelente", "Nao Progrediu")

console.log(resultadoComparaStrings1)
console.log(resultadoComparaStrings2)

 