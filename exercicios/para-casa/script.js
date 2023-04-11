/**Ex 1
 * Caso 0 foi posto como a parte, pois há discussões matemática sobre zero não ser nem ímpar e nem par.
 * Na variável de verificação, foi usado toFixed(0) para garantir que o resto sempre será 1 ou 0
 */

function verificaImpar(num_input) {
    let verify = num_input.toFixed(0) % 2;
    let msg_retorno = null;
    let impar = 1;
    if (verify == impar) {
        msg_retorno = `O número ${num_input} é ímpar!`;
        return msg_retorno;
    }if (num_input === 0) {
        msg_retorno = "O número é zero (0)."
        return msg_retorno;
    }else {
        msg_retorno = `O número ${num_input} é par!`
        return msg_retorno;
    }
}

/* Case test 1
console.log(verificaImpar(3));
console.log(verificaImpar(2));
console.log(verificaImpar(240));
console.log(verificaImpar(0));
console.log(verificaImpar(333));
console.log("\n");*/

/** Ex 2
 * 
 * Usei o Default como Validação de dados, para ter uma resposta visual de que algo foi errado.
 * @param {Number} num_mes 
 * @returns {String}
 */
function queMesEstamos(num_mes) {
    let msg_mes = null;
    switch (num_mes) {
        case 1:
            msg_mes = "Estamos em Janeiro! Bom começo de ano!";
            return msg_mes;
        case 2:
            msg_mes = "Estamos em Fevereiro!";
            return msg_mes;
        case 3:
            msg_mes = "Estamos em Março!";
            return msg_mes;
        case 4:
            msg_mes = "Estamos em Abril!";
            return msg_mes;
        case 5:
            msg_mes = "Estamos em Maio!";
            return msg_mes;
        case 6:
            msg_mes = "Estamos em Junho!";
            return msg_mes;
        case 7:
            msg_mes = "Estamos em Julho!";
            return msg_mes;
        case 8:
            msg_mes = "Estamos em Agosto!";
            return msg_mes;
        case 9:
            msg_mes = "Estamos em Setembro!";
            return msg_mes;
        case 10:
            msg_mes = "Estamos em Outubro!";
            return msg_mes;
        case 11:
            msg_mes = "Estamos em Novembro!";
            return msg_mes;
        case 12:
            msg_mes = "Estamos em Dezembro! Boas Festas!";
            return msg_mes;
        default:
            msg_mes = `Por gentileza, insira um mês válido (1-12)! Foi digitado: ${num_mes}.`;
            return msg_mes;
    }
}

/* case test 2
console.log(queMesEstamos(4));
console.log(queMesEstamos(5));
console.log(queMesEstamos(6));
console.log(queMesEstamos(7));
console.log(queMesEstamos(8));
console.log(queMesEstamos(9));
console.log(queMesEstamos(0));
console.log(queMesEstamos(10));
console.log(queMesEstamos(11));
console.log(queMesEstamos(12));
console.log(queMesEstamos(1));
console.log(queMesEstamos(2));
console.log(queMesEstamos(3));*/

/** Ex 3
 * Nesse Aprendi que o Javascript não é tão amigável. Digitei length errado como "lenght".
 * Ele não me avisou que aquilo não existia, e eu fiquei de 15 a 20min tentando entender o que fiz.
 * 
 * Aprendi também que definir a documentação abaixo pode ser usado para definir o tipo de dado.
 * Exemplo: Antes de colocar as linhas abaixo, frase1 e frase2 estavam como 'Any', mas agora já aparece como String ao passar o mouse.
 * Pode ser um efeito somente da IDE, mas é uma documentação bem útil, pois após fazer isso o .length mudou de cor, ficando mais fácil de ler.
 * @param {String} frase1 
 * @param {String} frase2 
 * @returns {String}
 */

function imprimeMesmoTamanho(frase1,frase2) {
    let mensagem;

    if (frase1.length === frase2.length) {
        mensagem = frase1 + "\n" + frase2;
        return mensagem;
    } else if (frase1.length > frase2.length) {
        mensagem = frase1;
        return mensagem;
    } else {
        mensagem = frase2;
        return mensagem;
    }
}

/*console.log(imprimeMesmoTamanho("Helicóptero","Motocicleta"));
console.log(imprimeMesmoTamanho("Yaaaaaaay","Wooooooow"));
console.log(imprimeMesmoTamanho("Yep", "nope")); //nope
console.log(imprimeMesmoTamanho("Oui","no")); //Oui*/

/** Ex 4
 *  Função deverá verificar se há letras 'A' ou 'a' no input
 *  Primeira tentativa (abaixo) não deu certo, tentarei com if/else
 *  Deixarei bloco como anotação.
 * 
 * Segunda tentativa deu certo ;)
 */

/*function tem_A_ou_a(frase_input) {
    let letra_detectada;
    console.log(frase_input);
    switch (frase_input) {
        case ((frase_input.includes('A') && frase_input.includes('a')) == true):
            letra_detectada = "A, a.";
            break;
        case (frase_input.includes('A') == true):
            letra_detectada = "A";
            break;
        case (frase_input.includes('a') == true):
            letra_detectada = "a";
            break;
        default:
            letra_detectada = null;
            console.log("Deu null");
            break;
    }
    return letra_detectada == null ? "Não" : `Sim. Letras: ${letra_detectada}`
}

Todos os testes entram em default, não consegui validar condicional
console.log(tem_A_ou_a("teste"));
console.log(tem_A_ou_a("Wolfgang"));
console.log(tem_A_ou_a("Amadeus"));
console.log(tem_A_ou_a("A"));*/

function tem_A_ou_a(frase_input) {
    let letra_detectada;
    console.log(frase_input);

    if (frase_input.includes('A') && frase_input.includes('a')) {
        letra_detectada = "A, a";
    } else if (frase_input.includes('A')) {
        letra_detectada = "A";
    } else if (frase_input.includes('a')) {
        letra_detectada = "a";
    } else {
        letra_detectada = null;
    }
    return letra_detectada == null ? "Não" : `Sim. Letras: ${letra_detectada}`;
}


console.log(tem_A_ou_a("Nope"));
console.log(tem_A_ou_a("Wolfgang"));
console.log(tem_A_ou_a("Amadeus"));
console.log(tem_A_ou_a("Antonio"));