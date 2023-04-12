/*Exercício 1*/

let numvariavel = 17
let mensagem

function parimpar(numvariavel) {
    if (numvariavel%2 == 0){
        return "É par"
    }
    else {
        return "É ímpar"
    }
}

mensagem = parimpar (numvariavel)
console.log (mensagem)


/*Exercício 2*/

let NMes = 5;
let mensag;
function meses (NMes){
switch(NMes) {
    case 1:
        return "Janeiro";
    case 2:
        return "Fevereiro";
    case 3:
        return "Março";
    case 4:
        return "Abril";
    case 5:
        return "Maio I love"
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
        return "Dezembrooowww";
    default: 
    return " Digite números de 1 a 12";
}
}
mensag = meses (NMes);
console.log (mensag)


/* Exercício 3*/

let texto = "Bom dia o sol já nasceu lá na fazendinha!"
let tamanho1 = texto.length
let texto2 = "Levanta o cavalinho já pulou da cama e o pintinho tirou seu pijama!"
let tamanho2 = texto2.length
let saida

function comparetexto (tamanho1,tamanho2) {
    if (tamanho1 == tamanho2) {
        return `${texto} ${texto2}`
    }
    else if (tamanho1 <tamanho2) {
        return texto2
    }
    else {
        return texto
    }
    }
saida = comparetexto (texto,texto2)
console.log (saida)


/* Exercício 4*/

let texto1 = "Camarão que dorme a onda leva"
let resposta

function qualoA (texto1) {
    if (texto1.includes ("a") || texto1.includes ("A")){
        return "Sim"
    } else {
        return "Não"
    }
    }
resposta = qualoA (texto1)
console.log (resposta)
