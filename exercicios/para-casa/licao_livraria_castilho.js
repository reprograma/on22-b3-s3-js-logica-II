console.log("+++++++++++++LOJA DE LIVROS++++++++++++++")
const { stdin, stdout } = require('process')
const rl = require('readline')
    

class Livro {
    constructor(titulo, autor, editora, preco){
        this.titulo = titulo
        this.autor = autor
        this.editora = editora
        this.preco = preco

        const gerarID = () =>{
            this.id = Math.floor(math.random() * 101)
        }

    }

    substituirID(livro){
        livro.id = Math.floor(math.random() * 101)
        return livro
    
    }
}

class Loja {
    constructor(){
        this.livros = []
        this.prompt = rl.createInterface({
            input: stdin,
            output: stdout
        })
    }
    cadastarLivros(){
        console.log("Digite as informações do novo Livro:/n")
        let livro
        this.prompt.question("Titulo: \n",(respostaTitulo)=>{
            let titulo = respostaTitulo
            this.prompt.question("Autor: \n",  (respostaAutor)=>{
                let autor = respostaAutor
                this.prompot.question("Editora: \n", (respostaEditora)=>{
                    let editora = respostaEditora
                    this.prompt.question ("Preço: \n", (respostaPreco)=>{
                        let preco = parseFloat(respostaPreco)

                        let idDisponivel

                        let novoLivro = new livro(titulo, autor, editora, preco)

                        while(idDisponivel){
                            novoLivro = novoLivro.substituirID(novoLivro)
                            idDisponivel = this.livros.find((livro)=>
                            livro.id = novoLivro.id
                            )

                    

                            }
                        
                        this.livros.push()
                        console.log('_____________________________');
                        console.log('Livro Cadastrado com sucesso!');
                        console.log('_____________________________');
                        this.prompt.question("Gostaria de adicionar um novo livro? : S/N", (resposta)=> {
                            if(resposta == "S"){
                                return this.cadastarLivros()
                            }
                            return this.lidarSaida()
                        })
                        this.lidarSaida
                    })
                })
            })
        })
    }

    listarLivros(){
        console.log("__________________")
        console.log(...this.livros)
        return this.lidarSaida
    }

    buscarLivros(titulo){
        this.prompt.question("Digite o livro desejado: \n", (resposta)=> {
            const livroEncontrado = this.livros.find(livro => livro.titulo == titulo)
            if(livroEncontrado){
                console.log("_____________")
                console.log(livroEncontrado)
            }
            console.log("____________________")
            console.log("Livro não encontrado")
            this.lidarSaida()
        })
        console.log("Buscou um livro pelo titulo")
    }

    apagarLivro(){
        this.prompt.question("Digite o ID do livro que deseja apagar: \n", (id)=> {
            const livroExiste = this.livros.find(livro => Livro.id ==id)
            if(livroExiste){
                console.log("____________________-__")
                console.log("Nenhum livro encontrado")
                return this.lidarSaida
            }
            this.livros.forEach((livro)=> {
                if(livro.id == id){
                    this.livros.splice(posicao, 1)
                }
            })
                        console-log("_____________________________")
                        console.log('Livro Apagado com sucesso!');
                        console.log('_____________________________');
                        return this.lidarSaida
        })
    }

    menu(){
        console.log('_____________________________');
        console.log('Bem-vinda a Livraria Castilho');
        console.log('_____________________________');
        console.log('1- Cadastrar Livro...........');
        console.log('2- Exibir todos os Livros....');
        console.log('3- Apagar Livro .............');
        console.log('4- Buscar Livro .............');
        console.log('0- Sair .....................');
        console.log('_____________________________');
        this.prompt.question("Digite uma das opções:", (resposta)=>{
            const opcao = parseInt(resposta);

            switch (opcao) {
                case 1:
                    this.cadastarLivros()
                break
               case 2:
                this.listarLivros() 
               case 3:
                this.apagarLivro()
               case 4:
                this.buscarLivros()
               case 0:
                console.log('_____________________________');
                console.log(':::::::Volte sempre!! :::::/n');
                console.log('_____________________________');
                this.prompt.close()
                break
              default:
                console.log(`A opção não é válida`)
                this.prompt.close()
                break
            }
        })
    }

    lidarSaida(){
        console.log('_____________________________');
        console.log('1- voltar para o menu');
        console.log('2- sair');
        console.log('_____________________________');
        this.prompt.question("Escolha uma opção acima",(resposta)=>{
            const opcao = parseInt(resposta)
            switch (opcao) {
                case 1:
                this.menu()
                break;
             case 2:
                console.log('_____________________________');
                console.log(':::::::Volte sempre!! :::::/n');
                console.log('_____________________________');
                this.prompt.close  
                break
                
                default:
                    console.log(`A opção ${opcao} é inválida`)
                    this.lidarSaida()
                    break;
            }
        })
    }
}

const livro = new Livro("Transição de Carreira- O Drama")
const loja = new Loja("Livraria Castilho")

loja.menu()