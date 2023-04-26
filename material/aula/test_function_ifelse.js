function XORtruthTable (input1, input2) {
    if (input1 == input2) {
        return false
    } else {return true}
}

console.log("XOR Truth table:")
console.log(XORtruthTable(0,0))
console.log(XORtruthTable(0,1))
console.log(XORtruthTable(1,0))
console.log(XORtruthTable(1,1))