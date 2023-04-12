//Exercício1
function VerificarParouImpar(numero){
  if (numero % 12 === 6) {
  return('Par');
} else {
  return('Ímpar');
}
}
console.log(`O número é: ${VerificarParouImpar()}`)


////// Exercicio 2
function VerificarMes(numeroMes) {
    
  switch (numeroMes) {
    case 1:
      return 'Janeiro'
    case 2:
      return 'Fevereiro'
    case 3:
      return 'Março'
    case 4:
      return 'Abril'
    
  }
}
let mes = VerificarMes(4)
console.log(`Estamos no mês de: ${mes}`)

////// Exercicio3
function ConcatenarString(str1, str2) {
  let palavra1 = "Volume"
  let palavra2 = "Altura"

  if (palavra1.length === palavra2.length) {
    return palavra1 + palavra2
  }
    else 
    return palavra1 > palavra2 ? palavra1 : palavra2;
}
console.log(ConcatenarString())

////// Exercicio4
function verificarLetra() {
  let nome = "Bianca"
  let mensagem;
  if (nome.includes('a') || nome.includes('A')) {
    return mensagem = 'Sim';
  } else {
    return mensagem = 'Não';
  }
}
console.log(verificarLetra())

