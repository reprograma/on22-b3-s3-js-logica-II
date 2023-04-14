// Exercicio 3

function concatenarStrings(string1, string2) {

    if (string1.length === string2.length) {

        return string1 + string2;

    } else if (string1.length > string2.length) {

        return string1;

    } else {

        return string2;
    }
}

let resultadoConcatenarStrings = concatenarStrings("Lua","Tito")

console.log(concatenarStrings);