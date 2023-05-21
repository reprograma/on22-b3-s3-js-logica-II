// 3. Crie uma função que receba duas strings como parâmetros e retorne a concatenação das duas strings se ambas tiverem o mesmo tamanho. Se não tiverem o mesmo tamanho, retorne apenas a string de maior tamanho.

function comparaStrings(str1, str2){

    if(str1.length === str2.length){
        return `${str1} ${str2}`
    }
    
    if(str1.length > str2.length){
        return str1
    }
    
    return str2

}

let resultadoComparaStrings = comparaStrings("Suzik","Suzik")

console.log(resultadoComparaStrings)