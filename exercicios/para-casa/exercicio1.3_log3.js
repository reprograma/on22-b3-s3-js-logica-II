class Pessoa {
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }

    falar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos`)
    }           
        
}

const pessoa = new pessoa ("Nádia", 36)
pessoa.falar()