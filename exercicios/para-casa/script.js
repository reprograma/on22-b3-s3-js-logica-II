/**1. Crie uma função que receba um número como
 *  parâmetro e retorne "par" se o número for par
 *  e "ímpar" se o número for ímpar. */

function parImpar(numero){
   let divisao = numero % 2
   if(divisao == 0){
    console.log(`${numero} é par`)
     }else{
    console.log(`${numero} é ímpar`)
      }
}
parImpar(1)
parImpar(10)


/**2. Crie uma função que receba um número de mês 
 * como parâmetro e retorne o nome do mês 
 * correspondente. Use a estrutura switch 
 * case para resolver este problema. */

function meses(numero){
 let mensagem

 switch(numero){
  case 1:
    mensagem = "Janeiro";
    break;
  case 2:
    mensagem = "Fevereiro";
    break;
  case 3:
    mensagem = "Março";
    break;
  case 4:
    mensagem = "Abril";
    break;
  case 5:
    mensagem = "Maio";
    break;
  case 6:
    mensagem = "Junho";
    break;
  case 7:
    mensagem = "Julho";
     break;
  case 8:
     mensagem = "Agosto";
    break;
  case 9:
    mensagem = "Setembro";
    break;
  case 10:
    mensagem = "Outubro";
    break;
  case 11:
    mensagem = "Novembro";
    break;
  case 12:
    mensagem = "Dezembro";
    break;
  default:
    mensagem = "Não é um mês válido.";
 }
console.log(mensagem);
}
meses(1)

/**Crie uma função que receba duas strings como parâmetros
 *  e retorne a concatenação das duas strings
 *  se ambas tiverem o mesmo tamanho. 
 * Se não tiverem o mesmo tamanho, 
 * retorne apenas a string de maior tamanho. */

function tamanhoString(texto1,texto2){
    if(texto1.length === texto2.length){
        console.log(texto1  +  texto2)}
         else if (texto1.length > texto2.length){
        console.log(texto1)}
    else {console.log(texto2)}
}
tamanhoString("ola","meu nome é Cybelle")
tamanhoString("ola "," oie")

/**Crie uma função que receba uma string como parâmetro e retorne 
 * "Sim" se a string contém a letra "a" ou "A" 
 * e "Não" caso contrário */

function letraA(texto){
    if(texto.includes("a")||texto.includes("A")){
        console.log("Sim")
    }else{console.log("Não")}
}
letraA("Cybelle")
letraA("Banana")
letraA("A")