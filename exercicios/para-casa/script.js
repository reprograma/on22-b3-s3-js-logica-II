// Exercício 1

function DeterminaParidade(num) {
   if (num%2 === 0) {
      return "Par"
   } else {
   return "Ímpar"
     }
   }
console.log(DeterminaParidade(2)) //retorna Par
console.log(DeterminaParidade(3)) //retorna Impar


// Exercício 2
function verificarmes(mes) {
   switch (mes) {
   case 1:
       return 'Janeiro'
   case 2:
       return 'Fevereiro'
   case 3:
       return 'Março'
   case 4:
       return 'Abril'
   case 5:
       return 'Maio'
   case 6:
       return 'Junho'
   case 7:
       return 'Julho'
   case 8:
       return 'Agosto'
   case 9:
       return 'Setembro'
   case 10:
       return 'Outubro'
   case 11:
       return 'Novembro'
   case 12:
       return 'Dezembro' }
       }
   console.log(verificarmes(10)) // retorna o mes outubro

// Exercício 3
function concatenaçãodestrings(string1, string2) {
   if (string1.length === string2.length) {
     return string1 + string2
   } else {
     return string1.length > string2.length ? string1 : string2;
   }
 }
 console.log(concatenaçãodestrings('Oi', 'Oi')) // retorna string1+string2
 console.log(concatenaçãodestrings('Oi', 'Olá')) // retorna a maior string Olá

// Execício 4

function stringcontema(string) {
   if (string.includes('a') || string.includes('A')) {
       return 'Sim' 
   } else {
       return 'Não'
   }
 }
 console.log(stringcontema('A')) //Retorna Sim
 console.log(stringcontema('a')) // Retorna Sim
 console.log(stringcontema('b')) // Retorna Não

