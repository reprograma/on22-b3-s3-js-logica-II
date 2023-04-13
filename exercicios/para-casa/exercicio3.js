/** 3. Crie uma função que receba duas strings como parâmetros e retorne a concatenação das duas strings se ambas 
 * tiverem o mesmo tamanho. Se não tiverem o mesmo tamanho, retorne apenas a string de maior tamanho. */

function contarcaracteres(palavraUm,palavraDois) {
    if(palavraUm.length === palavraDois.length) {
        return `${palavraUm} e ${palavraDois}` 
    } else
    return palavraUm.length > palavraDois.length ? palavraUm : palavraDois;


}
let caracteresTotal = contarcaracteres("urso","caderno")
console.log(caracteresTotal)
caracteresTotal = contarcaracteres("amor","odio")
console.log(caracteresTotal)