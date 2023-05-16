// 3. Crie uma função que receba duas strings como parâmetros e retorne a concatenação das duas strings se ambas tiverem o mesmo tamanho. Se não tiverem o mesmo tamanho, retorne apenas a string de maior tamanho.

//receber duas strings por parâmetro 
// retorne a concatenação das duas strings se ambas estiverem do mesmo tamanho. 
// se não estiver o mesmo tamanho retornar a string maior 

function comparaStrings(segunda, quarta){
    

    if(segunda.length === quarta.length){
        return `${segunda} ${quarta}`
    }
    
    if(segunda.length > quarta.length){
        return segunda
    }
    
    return quarta

}

let resultadoComparaStrings = comparaStrings("terca","domingo")

console.log(resultadoComparaStrings)