function exibeMensagem(nome) {
    let mensagem = `Olá, bom dia ${nome}`;
    return mensagem;
}

let mensagemAline = exibeMensagem("Aline");
console.log(mensagemAline);

function somarOsNumerosDeVerdade(numero1, numero2) {
    let resultadoSoma = numero1 + numero2;

    return resultadoSoma;
}

let soma = somarOsNumerosDeVerdade(5263, 2356);
console.log(`A soma dos números é: ${soma}`);