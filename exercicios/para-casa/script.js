// Exercício 1

function conferirParOuImpar(){ 
    let mensagem;
    let numero = 2;

    if ( numero == 2) {
        mensagem = 'É par';
        return mensagem;
    }   else {
        mensagem = 'É ímpar';
        return mensagem;
    }
}


let conferir = conferirParOuImpar(2)
console.log(conferir)
  
    
// Exercício 2

function verificarMes(numeroDoMes) {

    switch (numeroDoMes) {
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
            return 'Dezembro'
        }
    }

console.log(verificarMes(2))

// Exercício 3

function concatenarString(casa , grande) {
    
    if (casa.lenght === grande.lenght) {
        return casa + grande;
    }   else { 
        return casa.lenght > grande.lenght ? casa : grande;
    }
}
concatenarString(casa , grande)
console.log(concatenarString(casa , grande))



// Exercício 4

function verificarLetra(Tênis) {
    
    if (Tênis.includes('a') || Tênis.includes('A')) {
        return console.log('Sim');
    }   else { 
        return console.log('não');
    }
}
verificarLetra(Tênis)
console.log(verificarLetra(Tênis))
