function comparaString(str1, str2){
    if(str1.lenght = str2.lenght){
        return str1 + str2
    }

    if(str1.lenght > str2.lenght){
        return str1
    }

    return str2

}

let resultadoComparaString = comparaString("abc","abcdef")
console.log(resultadoComparaString)