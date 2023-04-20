function retornaNomeMes(n_mes) {
    let nome_mes;
  
    switch (n_mes) {
      case 1:
        nome_mes = 'Janeiro';
        break
      case 2:
        nome_mes = 'Fevereiro';
        break
      case 3:
        nome_mes = 'Março';
        break
      case 4:
        nome_mes = 'Abril';
        break
        case 5:
            nome_mes = 'Maio';
            break
            case 6:
      nome_mes = 'Junho';
      break
    case 7:
      nome_mes = 'Julho';
      break
    case 8:
      nome_mes = 'Agosto';
      break
    case 9:
      nome_mes = 'Setembro';
      break
    case 10:
      nome_mes = 'Outubro';
      break
    case 11:
      nome_mes = 'Novembro';
      break
    case 12:
      nome_mes = 'Dezembro';
      break
    default:
        nome_mes = "Número inválido. Escreva um número entre 1 e 12"
  }

  return nome_mes
}


let nomeMes = retornaNomeMes(1)

console.log(nomeMes)