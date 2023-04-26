/**
 1.Resolução exercicio um
 */

  function parOuImpar(numero1) {

    if (numero1 % 2 == 0) {
        let = mensagem; 

        mensagem = `O número ${numero1} é par.`
        return mensagem;
    } 
    else {
        mensagem = `O número ${numero1} é ímpar.`;
      return mensagem;
    }
}
    parOuImpar();
    console.log(parOuImpar(12));


/**
    2. Resolução exercicio dois
     */

function verificaMes(mes) {

    switch (mes) {
        case 1:
            return 'O mês é Janeiro.';
        case 2:
            return 'O mês é Fevereiro.';
        case 3:
            return 'O mês é Março.';
        case 4:
            return 'O mês é Abril.';
        case 5:
            return 'O mês é Maio.';
        case 6:
            return 'O mês é Junho.';
        case 7:
            return 'O mê é Julho.';
        case 8:
            return 'O mês é Agosto.';
        case 9:
            return 'O mês é Setembro.';
        case 10:
            return 'O mês é Outubro.';
        case 11:
            return 'O mês é Novembro.';
        case 12:
            return 'O mês é Dezembro.';
        default:
            return 'O mês não é válido.';
        } 
    }

    verificaMes();
    console.log(verificaMes(12));

/**
 * 3. Resolução exercicio tres
 */

function verificaString(string1, string2) {
    if (string1 === string2) {
        return string1 + string2;
    
    } else if (string1.lenth > string2.lenth) {
        
        return string1;
    } else {
        return string2;
    }
}

verificaString();
console.log(verificaString('abcd', 'afff'));


/**
 * 4. Resolução do exercicio 4
 */

function verificaLetra(contemLetra) {
    if (contemLetra.includes('a') || contemLetra.includes('A')) {
        return 'Sim';
    } else {
        return 'Não';
    }
}

verificaLetra('');
console.log(verificaLetra('bolo'));