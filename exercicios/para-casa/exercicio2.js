/** Exercício 2: Crie uma função que receba um número de mês como parâmetro e retorne o nome do mês correspondente. 
 * Use a estrutura switch case para resolver este problema. 
 */

function nomeMes(numero_mes){
    switch (numero_mes) {
        case 1:  return "Janeiro";
        break;
        case 2: return "Fevereiro";
        case 3: return "Março";
        case 4: return "Abril";
        case 5: return "Maio";
        case 6: return "Junho";
        case 7: return "Julho";
        case 8: return "Agosto";
        case 9: return "Setembro";
        case 10: return "Outubro";
        case 11: return "Novembro";
        case 12: return "Dezembro";
        default: return "Não é um Mês"
    
    }
}

console.log(nomeMes(12))
console.log(nomeMes(11))
console.log(nomeMes(27))


