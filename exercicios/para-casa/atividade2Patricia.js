function mesVigente(nMes){

switch (nMes) {
    case 01: 
    return 'Janeiro'

        case 02: 
        return 'Fevereiro'
        
        case 03: 
         return 'Março'

        case 04: 
        return 'Abril'

        case 05: 
        return 'Maio'

        case 06:
            return 'Junho'
        break;
        default:
}
}
let mesAtual = mesVigente(04)
console.log(mesAtual)