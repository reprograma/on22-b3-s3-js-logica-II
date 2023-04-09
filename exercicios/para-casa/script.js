// Exercicio 1

function verificaParOuImpar(number){
    if(number % 2 == 0) {
        return "Este número é par";
    } else {
        return "Este número é impar"
    }
}
// verificaParOuImpar()
console.log(verificaParOuImpar(4))
console.log(verificaParOuImpar(54965));
console.log(verificaParOuImpar(8));
console.log(verificaParOuImpar(13));
console.log(verificaParOuImpar(1459));


// Exercício 2

function mes(number){
    switch(number){
        case 1:
            return "Janeiro";
        case 2:
            return "Fevereiro";
        case 3:
            return "Março";
        case 4:
            return "Abril";
        case 5:
            return "Maio";
        case 6:
            return "Junho";
        case 7:
            return "Julho";
        case 8:
            return "Agosto";
        case 9:
            return "Setembro";
        case 10:
            return "Outubro";
        case 11:
            return "Novembro";
        case 12:
            return "Dezembro";
        default:
            return "Mês inválido. Por favor, digite um número de 1 a 12";
    }
}
// mes();
console.log(mes(1));
console.log(mes(12));
console.log(mes(8));
console.log(mes(13));


// Exercicio 3

function verificaStrings(string1, string2){
    if(string1.length === string2.length){
        return string1 + string2;
    }else if(string1.length > string2.length) {
        return string1;
    }else if(string1.length < string2.length){
        return string2
    }
}
console.log(verificaStrings("carrossel", "abstrato"));
console.log(verificaStrings("lua", "abstrato"));
console.log(verificaStrings("loja", "boca"));


// Exercicio 4

function contémA(string){
    if(string.includes("a") || string.includes("A")){
        return "Sim";
    } else {
        return "Não";
    }
}
console.log(contémA("casaco"));
console.log(contémA("Azul"));
console.log(contémA("tonto"));


// outra forma de fazer o exercicio1
// function verificaParOuImpar(number){
//     let result;
//     if(number % 2 == 0) {
//         result = "Este número é par";
//     } else {
//         result = "Este número é impar"
//     }
//     return result;
// }
// verificaParOuImpar(2)
// console.log(verificaParOuImpar(4))
// console.log(verificaParOuImpar(54965));
// console.log(verificaParOuImpar(8));
// console.log(verificaParOuImpar(13));
// console.log(verificaParOuImpar(1459));
