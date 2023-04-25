function ParouImpar(numero){
    let resultado = numero % 5
    if(resultado == 0) {
        return "Par";
    }
    return "Impar"
}
let total = ParouImpar(3) 
console.log(total)
