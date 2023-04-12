//Exercício 1 (whit if and else)

function evenOrOdds(number) {
  let message = null;
  if (number % 2 === 0) {
    message = "Esse número é par";
  } else {
    message = "Esse número é ímpar";
  }
  return message;
}
console.log(evenOrOdds(12))

//Exercício 2 

function getMonthsName (number) {
  switch (number){
    case 1 :
      return "Janeiro"
    case 2 :
      return "Fevereiro"
    case 3 : 
      return "Março"
    case 4 : 
      return "Abril"
    case 5: 
      return "Março"
    case 6:
      return "Junho"
    case 7: 
      return "Julho"
    case 8: 
      return "Agosto"
    case 9:
      return "Setembro"
    case 10:
      return "Outubro"
    case 11: 
      return "Novembro"
    case 12: 
    return "Dezembro"
  }
} 

console.log(getMonthsName(12))

// Exercicio 3 
function createPhrase (word1, word2) {
  let message = null 

  if (word1.length === word2.length){
    message = word1 + word2
  } else if (word1.length > word2.length) {
    message = word1
  } else {
    message = word2
  }
  return message
}
console.log(createPhrase("ad", "acd"))
////////////////switch case///////////////////

function createPhrase2(word1, word2){
  let phrase = '' 

  switch(true){
    case word1.length === word2.length:
      phrase = word1 + word2
      break;
    case word1.length > word2.length:
      phrase = word1
      break;
    case word1.length < word2.length: 
      phrase = word2 
      break;
  }

  return phrase
}
console.log(createPhrase2("cecef", "cecef"))


// Exercício 4 
function isA(letter) {
  let mensage = null 

  if (letter === "a" && letter === "A"){
    message = "Sim"
  } else {
    message = "Não"
  }
  return message

}
console.log(isA("A"))

/////// switch case /////////

function isASwitch(letter) {
  let mensagem

  switch(letter){
    case letter === "a": 
    mensagem = "Sim" 
    break;
    case letter === "A":
      mensagem = "Sim"
      break;
    default:
      mensagem = "Não"
  }
  return mensagem
}

console.log(isASwitch('b'))