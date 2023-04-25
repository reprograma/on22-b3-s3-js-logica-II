/**4. Crie uma função que receba uma string como parâmetro e 
retorne "Sim" se a string contém a letra "a" ou "A" e "Não" caso 
contrário.*/

function minhaStrVerificada(str){
    if(str.includes("a") || str.includes("A")){
        return "Sim"
    } 
    return "Não"
} 
let resultado = minhaStrVerificada("paralelepípedo")
console.log(resultado)

resultado = minhaStrVerificada("leite")
console.log(resultado)