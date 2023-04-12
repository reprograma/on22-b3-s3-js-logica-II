// Exercício 1

function parOuImpar(numero){
    resto = numero % 2;
    if (resto == 0) {
        return "par";
    } else{
        return "ímpar";
    } 
}

// Bateria de testes.
console.log(parOuImpar(0));
console.log(parOuImpar(1));
console.log(parOuImpar(2));
console.log(parOuImpar(5));
console.log(parOuImpar(6));



// Exercício 2

function verificaDiaDoMes(mes){

    switch(mes) {
        case 1:
            return 'Janeiro'
        case 2:
            return 'Fevereiro'
        case 3:
            return 'Março'
        case 4:
            return 'Abril'
        case 5:
            return 'Maio'
        case 6:
            return 'Junho'
        case 7:
            return 'Julho'
        case 8:
            return 'Agosto'
        case 9:
            return 'Setembro'
        case 10:
            return 'Outubro'
        case 11:
            return 'Novembro'
        case 12:
            return 'Dezembro'
    }
}

// Bateria de testes.
console.log(verificaDiaDoMes(1));
console.log(verificaDiaDoMes(2));
console.log(verificaDiaDoMes(3));
console.log(verificaDiaDoMes(10));
console.log(verificaDiaDoMes(11));
console.log(verificaDiaDoMes(12));



// Exercício 3

function concatenaStrings(string1, string2){

    if (string1 == string2){

        mensagem = string1 + string2

        return mensagem;

    } else if (string1 > string2){

        return string1;

    } else{

        return string2;

    }

}

// Bateria de testes.
console.log(concatenaStrings('Juliana', 'Furtado'));
console.log(concatenaStrings('Juliana', 'Juliana'));



// Exercício 4

function buscaLetraA(string){
    if (string == 'a'){
        return 'Sim';
    }
}

console.log(buscaLetraA('Ola'));