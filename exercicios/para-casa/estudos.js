/* function somarDoisNumeros(){
    let n1 = 5;
    let n2 = 10;

    console.log(5+10);
  }
somarDoisNumeros(); */


/* function somarDoisNumeros(){
    let n1 = 5;
    let n2 = 10;
    let total = n1 + n2;

    return total;
  }

  console.log(somarDoisNumeros()) // Retorna: 15 */


/* function somarDoisNumeros(numero1, numero2) {

  let total = numero1 + numero2;
  
  return total;
}
// somarDoisNumeros();

console.log(somarDoisNumeros(5,5)); // Retorna 10
console.log(somarDoisNumeros(9,2)); // Retorna 11
console.log(somarDoisNumeros(10,2)); // Retorna 12 */


/*let minhaVariavel = "Valor da variável" ;//escopo global
let outraVariavel= "Valor da outra variável";


function minhaFuncao() {
 console.log(minhaVariavel); // Acessível no escopo de bloco
}

function string() {
  console.log(minhaVariavel);
  console.log(outraVariavel);
}

function duasStrings() {
  console.log(minhaVariavel, outraVariavel);
  console.log(minhaVariavel,",", outraVariavel);
  console.log(minhaVariavel +", " + outraVariavel);
}

minhaFuncao(); // Console Exibe: Valor da variável
string();
duasStrings();*/


/*function minhaFuncao() {
  let minhaVariavel = "Valor da variável";//declarada no escopo de bloco
 
  // console.log(minhaVariavel);
 }
console.log(minhaVariavel); // Não é acessível no escopo global
// minhaFuncao()*/


/* console.log(x); // undefined
 var x = 5;
 var x; // declaração é "içada" para o topo do escopo
 console.log(x); // undefined
 x = 5; // valor é atribuído à variável
//console.log(x); // undefined
//let x = 5;
//let x; // declaração é "içada" para o topo do escopo
//console.log(x); // undefined
//x = 5; // valor é atribuído à variável*/


/*let diaDeSol = true;
// let diaDeSol = true;
if(diaDeSol){
  console.log("Vamos para a piscina");
}else {
  console.log("ficaremos em casa e assistiremos um filme");
}
// console.log(diaDeSol);*/



function executarOperacaoMatematica(operacao, numero1, numero2) {
  if(operacao == "multiplicar") {
    return numero1 * numero2;
  }else if(operacao == "somar"){
    return numero1 + numero2;
  }else {
    return "Operação não é válida";
  }
}
// executarOperacaoMatematica("somar", 2, 2);
console.log(executarOperacaoMatematica());
  // console.log(executarOperacaoMatematica("multiplicar",2,6)); // Exibe no console: 12
  // console.log(executarOperacaoMatematica("somar",2,6)); // Exibe no console: 8
  // console.log(executarOperacaoMatematica("operação inválida",2,6)); // Exibe no console: "Operação não é válida
  
  
  /*const numero = 10
  const resultado = numero >= 18 ? "Maior de idade" : "Menor de idade"
  
  // const color = "red";
  // const resultado = color == "red" ? true : false;
  
  // const diaDeSol = false;
  // const resultado = diaDeSol == true ? true: false;
  console.log(resultado) // "Menor de idade"
  */
  
  
  /*
  // let diaSemana = 5;
  // let diaSemana = 3;
  // let diaSemana = 9;
  // let diaSemana = "Xablau";
  let mensagem;
  
  switch (diaSemana) {
    case 1:
      mensagem = "Hoje é segunda-feira.";
      break;
    case 2:
      mensagem = "Hoje é terça-feira.";
      break;
    case 3:
      mensagem = "Hoje é quarta-feira.";
      break;
    case 4:
      mensagem = "Hoje é quinta-feira.";
      break;
    case 5:
      mensagem = "Hoje é sexta-feira.";
      break;
    default:
      mensagem = "Não é um dia da semana válido.";
  }
  
  console.log(mensagem);
  */
  