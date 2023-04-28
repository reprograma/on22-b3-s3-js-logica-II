// Exercicio 01 | Gente, esse eu  tive que procurar uma ajudinha no yt
function parImpar(){
    let numero = 15
    total= numero % 2
    if (total == 0){
       return "par"
    } else if (total == 1){
        return "impar"
    }
}

console.log(parImpar())

// Exercicio 02 

function meses(numero){
    switch(numero){
        case 1: 
        return "janeiro"
        case 2: 
        return "fevereiro"
        case 3: 
        return "março"
        case 4: 
        return "abril"
        case 5: 
        return "maio"
        case 6: 
        return "junho"
        case 7: 
        return "julho"
        case 8: 
        return "agosto"
        case 9: 
        return "setembro"
        case 10: 
        return "outubro"
        case 11: 
        return "novembro"
        case 12: 
        return "dezembro"
        default:
            break;
    }

}

console.log(meses(5))

//Exercicio 3 | precisei dar uma olhadinha no exemplo 

function concatena(string1, string2){
    if(string1.length == string2.length){
        return string1 + string2
    } else if(string1 > string2){
        return string1
    } else if(string2 > string1){
        return string2
    }

}
console.log(concatena("choro","lagrimas"))

// Exercicio 04 || precisei olhar o exemplo e pedir ajuda pra as amiguinhas, tive dificuldadeziha com esse 

function verificaLetra(string) {
    if (string.indexOf('a') !== -1 || string.indexOf('A') !== -1) {
      return 'Sim'
    } else {
      return 'Não'
    }
  }

console.log(verificaLetra("só desespero socorro Deus"))