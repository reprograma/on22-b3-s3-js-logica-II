// This 'parityCheck' function checks a number's parity using a conditional structure and returns it.

// The '.isInteger()' method is applied over a 'Number' constructor to check whether or not the
// 'number' parameter has received an input which is not an integer.

function parityCheck (number) {
    let parity

    if (number % 2 == 0) {
        parity = "par"
    } else if (typeof number != "number" || Number.isInteger(number) == false) {
        parity = "not an integer!"
    } else {
        parity = "ímpar"
    }
    return parity
}

//logs:

console.log(parityCheck("zero"))
console.log(parityCheck(-1))
console.log(parityCheck(1))
console.log(parityCheck(0))
console.log(parityCheck(2))
console.log(parityCheck(2.5))