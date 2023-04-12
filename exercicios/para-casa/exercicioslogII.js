//Exercício 2
function qualMes(mesNum){
    switch (mesNum){
        case 1:
            mes = "É Janeiro."
            break
        case 2:
            mes = "É Fevereiro."
            break
        case 3:
            mes = "É Março."
            break
        case 4:
            mes = "É Abril."
            break
        case 5:
            mes = "É Maio."
            break
        case 6: 
            mes = "É Junho."
            break
        case 7:
            mes = "É Julho."
            break
        case 8:
            mes = "É Agosto."
            break
        case 9: 
            mes = "É Setembro."
            break
        case 10:
            mes = "É Outubro."
            break
        case 11:
            mes = "É Novembro."
            break
        case 12:
            mes = "É Dezembro."
            break
        default:  
            mes = "Mês inválido, digite um número de 1 a 12!"      
            break;
    }
    return mes;
}
    
console.log(qualMes(9))


// Exercício 1

function numParOuImpar(x){
  if(x % 2 === 0){
    console.log("É Par");
}
  else {
    console.log("É Impar");
}
}
    numParOuImpar(10);


// Exercício 3

function tamanhoDaString(stringA,stringB){
    if(stringA.length === stringB.length){
       return(stringA + stringB)
    } else if(stringA.length > stringB.length) {
       return(stringA)
    } else if(stringB.length > stringA.length){
       return (stringB)}
}
 console.log(tamanhoDaString("Carro","Cachorro"));


//  Exercício 4
 function qualString(palavra){
    if(palavra.indexOf("a") >= 0 || palavra.indexOf("A") >= 0)
    return "sim"
    else 
    return "não"
}

console.log(qualString("Abacaxi"))
 