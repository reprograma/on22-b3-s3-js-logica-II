//
//

function parityCheck (number) {
    let parity
    
    if (number % 2 == 0) {
        parity = "par"
    } else if (Number.isInteger(number) == false) {
        parity = "not an integer!"
    } else {
        parity = "ímpar"
    }
    return parity
}

console.log(parityCheck(0))
console.log(parityCheck(1))
console.log(parityCheck(2))
console.log(parityCheck(2.5))