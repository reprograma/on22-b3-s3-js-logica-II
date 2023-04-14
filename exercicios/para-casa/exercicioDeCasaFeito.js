    function verificador(numero){
        if(numero %2==0){
            return "É PAR"
        }
        return "É IMPAR"

    }
let resultado = verificador(5)
console.log(resultado)




function retornaMes(n_mes){
    let nome_Mes;
    switch (n_mes){
        case 1: 
        nome_mes = "Janeiro";
        break
        case 2: 
        nome_mes = "fevereiro";
        break
        case 3: 
        nome_mes = "Março";
        break
        case 4: 
        nome_mes = "Abril";
        break
        case 5: 
        nome_mes = "Maio";
        break
        case 6: 
        nome_mes = "junho";
        break
        case 7: 
        nome_mes = "julho" ;
        break
        case 8: 
        nome_mes = "Agosto" ;       
        break
        case 9: 
        nome_mes = "Setembro";
        break
        case 10: 
        nome_mes = "Outubro";
        break
        case 11: 
        nome_mes = "Novembro";
        break
        case 12: 
        nome_mes = "Dezembro";
        break
        default:
            nome_mes = "ESTE NUMERO É INVÁLIDO. DIGITE UM NUMERO DE 1 A 12"
           
    }
    return nome_mes
}
let nomeMes = retornaMes(4)

console.log(nomeMes)



function verificaString(string1, string2){

    if(string1.length === string2.length){
        return string1 +" "+ string2;
    }else if(string1.length > string2.length) {
        return string1;
    }else if(string1.length < string2.length){
        return string2
    }
}

let resultadostring = verificaString( "mais", "mas")

console.log(resultadostring)
   


    function stringA(palavra){
        if(palavra.indexOf("a") !== -1 || palavra.indexOf("A") !== -1)
        return "sim"
        else 
        return "não"
    }
    let verificaPalavra = stringA("Dayane")

console.log(verificaPalavra)
