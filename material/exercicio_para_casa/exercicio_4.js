// This 'letterCheck()' function checks whether or not its 'string1' parameter has the 'a' or 'A' characters.

// It does so by transforming the 'string1' parameter into a 'charMap' array
// and checking whether or not this array has the requested characters.

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

//logs:

console.log(letterCheck("lorem ipsum"))
console.log(letterCheck("dolor sit amet"))
console.log(letterCheck("A letter"))
console.log(letterCheck("a and A"))