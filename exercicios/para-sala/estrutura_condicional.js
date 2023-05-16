/**
 * Escreva uma função chamada conferirMaiorIdade ela deve receber como parametro uma idade e verificar se é maior ou menor de 18 anos
 */
// if/else -> se / senão
function conferirMaiorIdade(idade) {
    let mensagem;
    let maiorIdade = 18;
  
    if (idade >= maiorIdade) {
      mensagem = 'É maior de idade';
      return mensagem;
    } else {
      mensagem = 'É menor de idade';
      return mensagem;
    }
  }
  
  let resultado = conferirMaiorIdade(15);
  console.log(resultado);
  resultado = conferirMaiorIdade(22);
  console.log(resultado);
  
  /**
   * Crie uma função que receba um dia da semana ( de 1 a 7) e retorne qual dia da semana é
   */
  
  function verificaDiaDaSemana(n_dia) {
    if (n_dia == 1) {
      return 'É domingo';
    } else if (n_dia == 2) {
      return 'É segunda';
    } else if (n_dia == 3) {
      return 'É terça';
    } else if (n_dia == 4) {
      return 'É quarta';
    } else if (n_dia == 5) {
      return 'É quinta';
    } else if (n_dia == 6) {
      return 'É sexta';
    } else if (n_dia == 7) {
      return 'É sábado';
    } else {
      return 'Não é um dia válido. Digite um número de 1 a 7';
    }
  }
  
  const diaDaSemana = verificaDiaDaSemana(9);
  
  function calcular(numero1, numero2, operacao) {
    if (operacao == '+') {
      return numero1 + numero2;
    } else if (operacao == '-') {
      return numero1 - numero2;
    } else if (operacao == '*') {
      return numero1 * numero2;
    } else if (operacao == '/') {
      return numero1 / numero2;
    }
  
    return "Não operação válida"
  }
  
  
  console.log(resultadoCalcular);
  resultadoCalcular = calcular(5, 8, '*');
  console.log(resultadoCalcular);
  resultadoCalcular = calcular(5, 8, '/');
  console.log(resultadoCalcular);
  resultadoCalcular = calcular(5, 8, '%');
  console.log(resultadoCalcular);
  
  let diaDeChuva = true;
  const resultadoIrPraia =
    diaDeChuva == false ? 'É dia de praia' : 'Não é dia de praia';
  
  console.log(resultadoIrPraia);
  
  function verificaAprovacao(frequencia, nota) {
    let frequenciaAprovado = 75;
    let notaAprovacao = 5;
  
    if (frequencia >= frequenciaAprovado && nota >= notaAprovacao) {
      return 'Aluno Aprovado';
    }
  
    return 'Aluno Reprovado';
  }
  
  function verificaAprovacaoNestedIf(frequencia, nota) {
    let frequenciaAprovado = 75;
    let notaAprovacao = 5;
  
    if(frequencia >= frequenciaAprovado){
      if(nota >= notaAprovacao){
          // NAO USEM  
      }   
    }
    return "Aluno Reprovado"
  }
  
  console.log(verificaAprovacao());