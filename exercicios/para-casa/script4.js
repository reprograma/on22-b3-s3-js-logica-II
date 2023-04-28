//4. Crie uma função que receba uma string como parâmetro e retorne "Sim" se a string contém a letra "a" ou "A" e "Não" caso contrário.//

function contemLetraA(string) {
    let resultado = ''

    if (string.includes('a') || string.includes('A')) {
        resultado = 'SIM'
    } else {
        resultado = 'NÃO'
    }
    return resultado
}

existeLetraA = contemLetraA('Angela')
naoExisteLetraA = contemLetraA('Josef')
console.log(existeLetraA, naoExisteLetraA)