// This 'stgMiniParser' function uses an 'if else if' structure to check whether of not its two parameters
// (expected datatype: string) have the same length.

function strMiniParser(string1, string2) {

    let resultingString
   
    if (string1.length == string2.length) {
        resultingString = string1 + string2
    } else if (string1.length > string2.length) {
        resultingString = string1
    } else {
        resultingString = string2
    }

    return resultingString
}

//logs:

console.log(strMiniParser("qwerty", "asdfgh"))
console.log(strMiniParser("qwerty", "asdfg"))
console.log(strMiniParser("asdfgh", "qwert"))