//3. Crie uma função que receba duas strings como parâmetros e retorne a concatenação das duas strings se ambas tiverem o mesmo tamanho. Se não tiverem o mesmo tamanho, retorne apenas a string de maior tamanho.//

function concatenandoStr(str1, str2) {
    const tamanhoStr1 = str1.length
    const tamanhoStr2 = str2.length
    let resultado = ''

    if (tamanhoStr1 === tamanhoStr2) {
        resultado = str1 + str2
    } else if (tamanhoStr1 > tamanhoStr2) {
        resultado = str1     
    } else {
        resultado = str2
    }

    return resultado
}
valorTamanhoIgual = concatenandoStr('Angela', 'Angela')
valorStr1Maior = concatenandoStr('Sandra', 'lua')
valorStr2Maior = concatenandoStr('Rita', 'Caderno' )
console.log(valorTamanhoIgual, valorStr1Maior, valorStr2Maior)