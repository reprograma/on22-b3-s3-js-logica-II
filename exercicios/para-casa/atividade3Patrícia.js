/*3. Crie uma função que receba duas strings como parâmetros e retorne a 
**concatenação das duas strings se ambas tiverem o mesmo tamanho. 
Se não tiverem o mesmo tamanho, retorne apenas a string de maior tamanho.*/

function maiorTamanho(strUm, strDois){
    if(strUm.length === strDois.length){
        return `A string ${strUm} e ${strDois} são do mesmo tamanho`
    } 
    return strUm.length > strDois.length ? strUm : strDois
}
let resultado = maiorTamanho("atividade", "exercício")
console.log(resultado)

resultado = maiorTamanho("atividade", "otorrinolaringologista")
console.log(resultado)
