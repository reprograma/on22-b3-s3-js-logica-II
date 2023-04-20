function comparaStrings(str1, str2){

    if(str1.length === str2.length){
        return `${str1} ${str2}`
    }
    
    if(str1.length > str2.length){
        return str1
    }
    
    return str2

}

let resultadoComparaStrings = comparaStrings("Lane","Lane")

console.log(resultadoComparaStrings)