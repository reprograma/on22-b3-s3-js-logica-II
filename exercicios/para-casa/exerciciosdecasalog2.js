//Crie uma função que receba um número como parâmetro e retorne "par" se o número for par e "ímpar" se o número for ímpar.
function parOuImpar(numero) {
    if (numero % 2 === 0) {
        return "par";
    } else {
        return "ímpar";
    }
}

console.log(parOuImpar(4));

//Crie uma função que receba um número de mês como parâmetro e retorne o nome do mês correspondente. Use a estrutura switch case para resolver este problema.
function nomeDoMes(numeroDoMes) {
    switch (numeroDoMes) {
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
            return "Mês Inválido";
        }
}

console.log(nomeDoMes(12));

//Crie uma função que receba duas strings como paramêtros e retorne a concatenação das duas strings se ambas tiverem o mesmo tamanho. Se não tiverem o mesmo tamanho, retorne apenas a string de maior tamanho.
function concatenarStrings(string1, string2) {
    if (string1.length === string2.length) {
        return string1 + string2;
    } else if (string1.length > string2.length) {
        return string1;
    } else {
        return string2;
    }
}

console.log(concatenarStrings("help", "please"));

//Crie uma função que receba uma string como paramêtro e retorne "Sim" se a string contém a letra "a" ou "A" e "Não" caso seja o contrário.
function contemLetraA(string) {
    if (string.indexOf("a") !== -1 || string.indexOf("A") !== -1) {
        return "Sim";
    } else {
        return "Não";
    }
}

console.log(contemLetraA("Testando a função pra ver se rio ou se choro"));