/*** 1. Crie uma função que receba um número como parâmetro e
 *  retorne "par" se o número for par e "ímpar" se o número for
 *  ímpar.**/

function parOuImpar(numero){
    if (numero % 2 == 0){
        return console.log(`O número ${numero} é par.`)} 
    else if (numero % 2 != 0) {
        return console.log(`O número ${numero} é ímpar.`)}
    else {
        return console.log("Valor inválido.")}
}

parOuImpar(2)

/**2. Crie uma função que receba um número de mês como parâmetro e
 retorne o nome do mês correspondente. Use a estrutura switch 
 case para resolver este problema.*/

function nomeMes(mes){
    switch(mes){
        case 1:
            return console.log("Janeiro")
        case 2: 
            return console.log("Fevereiro")
        case 3:
            return console.log("Março")
        case 4:
            return console.log("Abril")
        case 5:
            return console.log("Maio")
        case 6:
            return console.log("Junho")
        case 7:
            return console.log("Julho")
        case 8:
            return console.log("Agosto")
        case 9:
            return console.log("Setembro")
        case 10:
            return console.log("Outubro")
        case 11:
            return console.log("Novembro")
        case 12:
            return console.log("Dezembro")
    }
}

nomeMes(3)



/**3. Crie uma função que receba duas strings como parâmetros e 
retorne a concatenação das duas strings se ambas tiverem o mesmo 
tamanho. Se não tiverem o mesmo tamanho, retorne apenas a string
 de maior tamanho.*/

function duasPalavras(palavra1, palavra2){
    
    let p1 = palavra1.length
    let p2 = palavra2.length
    if (p1 == p2) {
        return console.log(palavra1+palavra2)
    } else if (p1>p2){
        return console.log(palavra1)
    } else if (p2>p1) {
        return console.log(palavra2)
    }   
}

duasPalavras("maria", "joão")
duasPalavras("joão", "joão")
duasPalavras("joão", "maria")

/**4. Crie uma função que receba uma string como parâmetro e 
retorne "Sim" se a string contém a letra "a" ou "A" e "Não" 
caso contrário.
---*/

function temA(palavra){

    if (palavra.includes("a") || palavra.includes("A")){
        return console.log("Sim")
    } 
    else {
        return console.log("Não")
    }
}


temA("JonAs")


// OPÇÃO 2 DESNECESSARIAMENTE ELABORADA (primeira forma que consegui fazer)
function temA2(palavraa){
    let i = 0
    const texto = []
    while (i < palavraa.length){
        texto.push(palavraa[i])
        i++
    }
    console.log(texto)
     
    if (texto.includes("a") || texto.includes("A")){
            return console.log("Sim")
        } 
        else {
            return console.log("Não")
        }
}


temA2("Jhon")
