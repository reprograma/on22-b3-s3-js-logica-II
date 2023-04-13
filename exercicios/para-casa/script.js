//Atividade sobre funções

/*1. Crie uma função que receba um número como parâmetro 
e retorne "par" se o número for par e "ímpar" se o número for ímpar.*/

let n 
function testeParImpar (n){   
     if (n%2 == 0) {
         return `O número ${n} é par`
     }
     else {
         return `O número ${n} é ímpar`
     }
 }
 let res = testeParImpar(23)
 console.log (res)

/* 2. Crie uma função que receba um número de mês como parâmetro e retorne o 
 nome do mês correspondente. Use a estrutura switch case para resolver este problema.*/
let numeroMes = 0;
let mensagem1;

function verMes (numeroMes){
   switch (numeroMes) { 
      case 1:
         return "Janeiro";
      case 2:
         return "Fevereiro";
      case 3:
         return "Março";
      case 4:
         return "Abril";
      case 5:
         return "Maio";
      case 6:
         return "Junho, bora comemorar o São João!Tengo lengo tengo";
      case 7:
         return "Julho";
      case 8:
         return "Agosto";
      case 9:
         return "Setemebro";
      case 10:
         return "Outubro";
      case 11:
         return "Novembro";
      case 12:
         return "Dezembro, bora tacar passas em tudo!";
      default:
        return "Verifique se digitou um número entre 1 a 12.";
 }
}
mensagem1= verMes (numeroMes);
 console.log(mensagem1);

/* 3. Crie uma função que receba duas strings como parâmetros e retorne a concatenação das 
 duas strings se ambas tiverem o mesmo tamanho. Se não tiverem o mesmo tamanho, retorne apenas a string de maior tamanho.*/


let texto1 = "Oh, mas o senhor não gostaria de entrar pra tomar uma xícara de cafe?"
let tamanho1 = texto1.length
let texto2 = "Não seria muito incômodo...?!"
let tamanho2 = texto2.length
let textoSaida

function compararTexto (tamanho1,tamanho2){
if (tamanho1 == tamanho2) {
   return `${texto1}  ${texto2}`
}else if (tamanho1 < tamanho2) {
    return texto2
}else {
    return texto1
}
}
textoSaida = compararTexto (texto1,texto2)
console.log(textoSaida)

/*4. Crie uma função que receba uma string como parâmetro e retorne "Sim" se a string
 contém a letra "a" ou "A" e "Não" caso contrário.*/

 let text= "- Oh, mas o senhor não gostaria de entrar pra tomar uma xícara de café?"
 let mensagem
 
 
 function encontrarLetra (text){
   if (text.includes ("a") || text.includes("A")){
      return "sim"
   }else{
      return "não"
   }
 } mensagem = encontrarLetra(text)    
  console.log(mensagem)