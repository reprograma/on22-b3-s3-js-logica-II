/** Exercício 4: Crie uma função que receba uma string como parâmetro 
 * e retorne "Sim" se a string contém a letra "a" ou "A" e "Não" caso contrário.
 * 
 */

function identificarLetraAs(palavra){
    if(palavra.includes('a') || palavra.includes('A')) {
        return `Sim, a palavra ${palavra} contém.`;
    } else {
        return `Não, a palavra ${palavra} não contém.`;
    }
}
let resultado = identificarLetraAs('acompanhamento')
console.log(resultado)

resultado = identificarLetraAs('supervisÃo')
console.log(resultado)

// Li a documentação JS, mais ainda estou com dúvidas quanto as regras de uso do includes, mas ansiosa para usar array.


