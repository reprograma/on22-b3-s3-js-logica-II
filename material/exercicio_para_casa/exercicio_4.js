//
//

function letterCheck(string1) {
    
    let result
    let charMap = Array.from(string1)

    if (charMap.includes("a") || charMap.includes("A")) {
        result = "Sim"
    } else {
        result = "Não"
    }
    
    return result
}

console.log(letterCheck("lorem ipsum"))
console.log(letterCheck("dolor sit amet"))
console.log(letterCheck("A letter"))
console.log(letterCheck("a and A"))