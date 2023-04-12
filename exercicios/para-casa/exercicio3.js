/** Exercício 3:  Crie uma função que receba duas strings como parâmetros e retorne a concatenação das duas strings 
 * se ambas tiverem o mesmo tamanho. Se não tiverem o mesmo tamanho, retorne apenas a string de maior tamanho. */

function exercicioDosInfernos(palavra1,palavra2){
    if(palavra1.length === palavra2.length){ // li a documentação JS, mais ainda com dúvidas sobre o uso de length
        return `As palavras ${palavra1} e a palavra ${palavra2} possuem a mesma quantidade de caracteres.`  
    } else
        return palavra1.length > palavra2.length ? palavra1 : palavra2;
    
}
let resultado = exercicioDosInfernos('rosa','margarida')
console.log(resultado)

resultado = exercicioDosInfernos('miguel','joão')
console.log(resultado)

resultado = exercicioDosInfernos('sofia','joana')
console.log(resultado)


