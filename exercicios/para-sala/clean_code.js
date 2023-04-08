
let meuNome = "Manuelly Suzik"

let objetoComNomes = {
    nome1:"nome1",
    nome2:"nome2"
}

function exibeUmNome(objeto){ // EVITE MANDAR MUITOS PARAMETROS
    console.log(objeto)
}


function calcularArea(comprimento, altura){

    return comprimento * altura
}

function converteParaMinutos(hora){
    let executarCronJob = "* * 6 * 7" //“At every minute on day-of-month 6 and on Monday.” 
    return hora * 60 // 60 minutos = 1 hora 
}


exibeUmNome(objetoComNomes)

console.log(meuNome)