/**
 * Variáveis:
 * var -> Sofre Hoisting no escopo de função
 * let -> Não sofre hoisting
 */

if(true){
    mensagem = olá
    console.log(messagem)
    var mensagem
}