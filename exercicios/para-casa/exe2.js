/* Funcao switch numero = mes.
Compara numero com os nomes e atribui variavel mes.
Break: interrompe o switch. */

function numeroNomeMes(numero){
    let mes;

    switch (numero) {
        case 1: 
            mes = "Janeiro";
            break;
        case 2: 
            mes = "Fevereiro";
            break;
        case 3: 
            mes = "Março";
            break;
        case 4: 
            mes = "Abril";
            break;
        case 5: 
            mes = "Maio";
            break;
        case 6: 
            mes = "Junho";
            break;
        case 7: 
            mes = "Julho";
            break;
        case 8: 
            mes = "Agosto";
            break;
        case 9: 
            mes = "Setembro";
            break;
        case 10: 
            mes = "Outubro";
            break;
        case 11: 
            mes = "Novembro";
            break;
        case 12: 
            mes = "Dezembro";
            break;
        default: 
            mes = "Inválido, escreva um número entre 01 e 12.";
    }

    return mes;
    
}

console.log(numeroNomeMes(07));
console.log(numeroNomeMes(15));