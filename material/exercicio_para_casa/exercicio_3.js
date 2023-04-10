//
//

function strMiniParser(string1, string2) {

    let resultingString
   
    if(string1.length == string2.length) {
        resultingString = string1 + string2
    } else if (string1.length > string2.length) {
        resultingString = string1
    } else {
        resultingString = string2
    }

    return resultingString
}

console.log(strMiniParser("qwerty", "asdfgh"))
console.log(strMiniParser("qwerty", "asdfg"))
console.log(strMiniParser("asdfgh", "qwert"))