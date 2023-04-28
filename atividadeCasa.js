// 1

function parimpar (x){
    if (x % 2 == 0) {   
        return 'par';

    } else {
        return 'impar'; 
    }
    
    
}

console.log(parimpar(4))



// 2
 function verMes(n_mes){
    if(n_mes == 1) {
        return "Janeiro";
    } else if (n_mes == 2) {
        return "Fevereiro";
    } else if (n_mes == 3) {
        return "Março";
    } else if (n_mes == 4) {
        return "Abril";
    } else if (n_mes == 5) {
        return "Maio";
    } else if (n_mes == 6) {
        return "Junho";
    } else if (n_mes == 7) {
        return "Julho";
    } else if (n_mes == 8) {
        return "Agosto";
    } else if (n_mes == 9) {
        return "Setembro";
    } else if (n_mes == 10) {
        return "Outubro";
    } else if (n_mes == 11) {
        return "Novembro";
    } else if (n_mes == 12) {
        return "Dezembro";
    } else {
        return "Inválido";
    }
}

console.log(verMes(13))

// 3

function concatenar (str1, str2){
    if (str1.length < str2.length) {
        return str2;

    }
    if (str1.length > str2.length) {
        return str1;
    }
    else {
        return str1+str2;
    }
}   

console.log(concatenar("aaa", "bbb"))



//4

function contemA(string){
    if(string.toLowerCase().includes('a')){
      return "Sim";
    }
    else {
      return "Não";
    }
  }

  console.log(contemA("Ola"))