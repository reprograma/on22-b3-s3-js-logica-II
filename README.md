<h1 align="center">
  <img src="assets/reprograma-fundos-claros.png" alt="logo reprograma" width="500">
</h1>

# LOGICA II

Turma Online 22 - B3 | Back-end | Semana 3 | 2023 | Professora Manuelly Suzik

### Instruções

Antes de começar, vamos organizar nosso setup.

* Fork esse repositório
* Clone o fork na sua máquina (Para isso basta abrir o seu terminal e digitar `git clone url-do-seu-repositorio-forkado`)
* Entre na pasta do seu repositório (Para isso basta abrir o seu terminal e digitar `cd nome-do-seu-repositorio-forkado`)

### Resumo

O que veremos na aula de hoje?

* [Funções](#funções)
* [Escopo](#escopo)
* [Estrutura Condicional](#estrutura-condicional)

## Conteúdo

- [LOGICA II](#logica-ii)
    - [Instruções](#instruções)
    - [Resumo](#resumo)
  - [Conteúdo](#conteúdo)
  - [Funções](#funções)
    - [O que é](#o-que-é)
    - [Quando Utilizar](#quando-utilizar)
    - [Declaração](#declaração)
    - [Retorno](#retorno)
    - [Parâmetros](#parâmetros)
    - [Comentários](#comentários)
    - [Clean Code: Comentários e Funções](#clean-code-comentários-e-funções)
  - [Escopo](#escopo)
    - [Conceito](#conceito)
    - [Escopo Global](#escopo-global)
    - [Escopo Local ou de Bloco](#escopo-local-ou-de-bloco)
    - [Escopo Léxico](#escopo-léxico)
    - [Var e Hoisting](#var-e-hoisting)
  - [Estrutura Condicional](#estrutura-condicional)
  - [Conceito](#conceito-1)
    - [if / else](#if--else)
    - [Ternário](#ternário)
    - [Nested IF](#nested-if)
    - [Switch](#switch)
  - [Exercícios](#exercícios)
    - [Material da aula](#material-da-aula)
    - [Links Úteis](#links-úteis)

***

## Funções

### O que é

  Para a programação uma função é um bloco de código que executa uma tarefa específica e pode ser chamado quantas vezes for necessário dentro de seu programa.

### Quando Utilizar

  As funções são utilizadas amplamente na programação, tanto que é praticamente impossível encontrar programas que não usam.
  
  Entre os diversos benefícios, listarei alguns motivos para utilizar as funções:

* Reutilização de código: ao definir uma função, você pode escrever um bloco de código uma vez e reutilizá-lo em várias partes do programa, em vez de ter que repetir o mesmo código várias vezes.

* Modularização do código: as funções permitem que você divida um programa em partes menores e mais gerenciáveis, tornando o código mais fácil de entender e manter.

* Abstração de complexidade: ao definir funções, você pode ocultar a complexidade do código por trás de uma interface mais simples e fácil de usar.

* Parâmetros de entrada: as funções permitem que você passe parâmetros de entrada que personalizam a tarefa que a função realiza.

* Retorno de valores: as funções podem retornar valores que podem ser usados em outras partes do programa.

* Legibilidade do código: o uso de funções bem nomeadas e bem definidas pode tornar o código mais legível e fácil de entender.

### Declaração

Para declarar uma função precisamos utilizar a palavra reservada `function` e em seguida declarar um nome que resuma o que aquela função faz.

Criarei uma função capaz de somar dois números e exibir o resultado no console:

```Javascript
function somarDoisNumeros(){
  let n1 = 5
  let n2 = 10

  console.log(5+10)
}
```

A função `somarDoisNumeros()` foi declarada.

Declarar a função apenas não é o suficiente para que seja exibida a soma dos dois números no console, pois ao declarar uma função você apenas define as instruções que serão seguidas quando essa função for executada.

Então executar uma função que foi declarada você precisa chama-la no código dessa forma: `somarDoisNumeros()`, sem as chaves - assim ela pode ser executada inúmeras vezes quando necessário. Dessa forma, o Javascript sabe que você está solicitando a execução de uma função já declarada antes.

### Retorno
Em alguns momentos uma função que apenas executa alguma coisa não atende nossas necessidades e precisamos que uma função execute algo e nos traga um valor já processado pelas instruções dentro dela.

Vamos imaginar que , no lugar de exibir o resultado da soma no `console.log` eu queira que a função retorne o valor para o lugar pra onde ela foi chamada, como eu faria isso?

Olhe o exemplo:

```Javascript
function somarDoisNumeros(){
  let n1 = 5
  let n2 = 10
  let total = n1 +n2

  return total
}

console.log(somarDoisNumeros()) // Retorna: 15

```

O `console.log(somarDoisNumeros())` vai executar a função e quando ela terminar de ser executada ela retornará um número, então, o `console.log()` poderá exibi-lo no console.

### Parâmetros
Uma função para ser reutilizável ela deve ser capaz de também ser dinâmica. Se tivermos valores estáticos declarados dentro dela fará que sempre ela retorne um valor fixo ou execute apenas uma tarefa. Mas utilizando a função , você pode explorar muitas outras coisas.

Usando nosso exemplo, imagine que agora no lugar de declarar números dentro da função eu poderei passar números diferentes cada vez que precisar executar a função. Isso só será possível se ao declarar a função , eu também indique que preciso que parâmetros sejam enviados para que ela execute a tarefa:

```Javascript
function somarDoisNumeros(numero1, numero2) {

let total = numero1 + numero2

return total
}
```

Prontinho. Agora que tenho uma função que recebe como parâmetro dois números e depois retorna o resultado da soma poderei fazer diferentes somas e usar de diferentes formas assim:

```Javascript
console.log(somarDoisNumeros(5,5)) // Retorna 10
console.log(somarDoisNumeros(9,2)) // Retorna 11
console.log(somarDoisNumeros(10,2)) // Retorna 12
...
```

### Comentários
Algumas vezes é necessário utilizar **códigos não executáveis** ( que serão ignorados pelo compilador ) em nossos arquivos. Para isso você pode utilizar os comentários.

Veja como declarar um comentário de uma linha no Javascript:

```Javascript
//Esse é um comentário de uma linha e será ignorado pelo compilador
```
Se você deseja escrever comentários com mais de uma linha pode utilizar também:
```Javascript
/**
 * Esse é um comentário de várias linhas em um arquivo Javascript
 * Você pode escrever o que quiser aqui, anotações ou até algum tipo de ajuda
 * para entender o que o seu código ou função fazem =)
 * 
*/
```

### Clean Code: Comentários e Funções
Vamos ver o que o clean code diz sobre a melhor forma de utilizar funções de acordo com o Código Limpo:

**Funções**:

 Devem ser curtas e fazer apenas uma coisa. Idealmente, não devem ter mais do que 20 linhas de código. Elas também devem ter nomes descritivos que indiquem claramente o que fazem. Outra recomendação é evitar que as funções tenham efeitos colaterais - como alterar valores de outras funções - e que possuam muitos parâmetros de entrada, pois isso pode dificultar a compreensão do seu propósito.

 **Comentários**:
 
  Devem ser usados com moderação e somente para esclarecer algum aspecto do código que não é óbvio ou que pode gerar dúvidas . Eles devem ser claros e concisos, sem redundâncias e sem informações irrelevantes. Além disso, os comentários devem ser mantidos atualizados, de modo que reflitam o código atual. É importante lembrar que comentários não podem substituir código limpo e legível. Isso quer dizer que o seu código deve falar por si, sem necessidade de ter comentários explicando o que ele faz.
## Escopo

### Conceito

  Escopo define onde uma variável ou função pode ser acessada no código. Os escopos definem a visibilidade de uma variável ou função, ou seja, em que parte do programa ela pode ser executada.
### Escopo Global
   Uma variável ou função declarada fora de qualquer função ou bloco de código tem escopo global, o que significa que ela pode ser acessada de qualquer lugar do programa.

 ```Javascript
 let minhaVariavel = "Valor da variável" //escopo global

 function minhaFuncao() {
  console.log(minhaVariavel) // Acessível no escopo de bloco
 }


 minhaFuncao() // Console Exibe: Valor da variável
 ```  
### Escopo Local ou de Bloco
  Variáveis ou funções declaradas dentro de uma função ou bloco de código têm escopo local, o que significa que elas só podem ser acessadas dentro desse escopo.

 ```Javascript
 function minhaFuncao() {
  let minhaVariavel = "Valor da variável" //declarada no escopo de bloco

 }
  console.log(minhaVariavel) // Não é acessível no escopo global

 ```
### Escopo Léxico

Escopo léxico é um conceito relacionado à definição de escopo de variáveis em linguagens de programação. Ele se refere ao fato de que a resolução de nomes de variáveis é baseada na estrutura léxica do programa, ou seja, na forma como o código está escrito e organizado em blocos de código.

Em outras palavras, o escopo léxico define que o escopo de uma variável é determinado pelo seu local de declaração no código fonte, e não pela sua posição em tempo de execução. Isso significa que as variáveis declaradas em um escopo superior, como uma função pai ou um arquivo externo, são acessíveis em escopos internos, como funções filhas ou blocos de código dentro da função pai.

No Javascript o escopo léxico é muito importante!

### Var e Hoisting

Já que falamos sobre o escopo léxico e o quanto isso é importante no Javascript, podemos usar como exemplo o comportamento das variáveis `var`.

As variáveis declaradas utilizando `var` sofrem um efeito chamado "Hoisting".

Hoisting é um comportamento em JavaScript em que as declarações de variáveis e funções são movidas para o topo (o início) do escopo em que se encontram, independentemente de onde foram declaradas.

No caso das variáveis, isso significa que a declaração da variável é movida para o topo do escopo, mas não sua atribuição de valor. Ou seja, o nome da variável é criado e reservado na memória, mas seu valor inicial não é definido até o ponto em que a variável é de fato atribuída.

Veja o exemplo:

```Javascript

console.log(x); // undefined
var x = 5;

```

Executar o `console.log(x)` antes de declarar a variável é permitido porque para o javascript a variável sempre é "içada" para o top do bloco de execução.

Então para o Javascript esse é comportamento:

```Javascript
var x; // declaração é "içada" para o topo do escopo
console.log(x); // undefined
x = 5; // valor é atribuído à variável
```
Isso apenas acontece com a declaração var ( que é mais antiga), hoje em dia existem as opções de `let` e `const` que já conhecemos e esse comportamento não acontece.
## Estrutura Condicional

## Conceito

Estruturas condicionais são comandos de programação que permitem que o código execute diferentes ações dependendo se uma condição é verdadeira ou falsa. Elas permitem que um programa tome decisões lógicas com base nas informações disponíveis em tempo de execução. As estruturas condicionais mais comuns são o "if", "else" e "else if".
### if / else

Antes de qualquer coisa, vamos olhar para o código:

```Javascript

if(diaDeSol){
  Vamos para a piscina
}else {
  ficaremos em casa e assistiremos um filme
}
```
Então vamos analisar esse código... Podemos ver que uma CONDIÇÃO deve ser atendida para algo acontecer, do contrário, outra coisa acontecerá. Nesse caso, nossa condição deve ser VERDADEIRA para que possamos curtir nosso dia na piscina.

Então transferindo isso para o português: *Se for um dia de sol, vamos para a piscina. Senão, ficaremos em casa e assistiremos um filme*

Imaginou as possibilidades? Isso dá muita mais emoção para as nossas funções pois ela ganha cade vez mais utilidade. Deixe-me dar um exemplo:

```Javascript

function executarOperacaoMatematica(operacao, numero1, numero2) {
  if(operacao == "multiplicar") {
    return numero1 * numero2
  }else if(operacao == "somar"){
    return numero1 + numero2
  }else {
    return "Operação não é válida"
  }

  console.log("multiplicar",2,6) // Exibe no console: 12
  console.log("somar",2,6) // Exibe no console: 8
  console.log("operação inválida",2,6) // Exibe no console: "Operação não é válida"
}
```
Legal né? Com isso é possível dizer qual operação quero executar mandando o primeiro parâmetro e dar a minha função mais possibilidades.
### Ternário
No Javascript existe uma maneira mais simples de se declarar uma condição if/else e é bastante útil quando usado corretamente.
O **if ternário** é composto por três partes: a condição a ser avaliada, o valor a ser retornado se a condição for verdadeira e o valor a ser retornado se a condição for falsa. A sintaxe básica é a seguinte:

veja o exemplo aqui:
```Javascript
condição ? valor_se_verdadeiro : valor_se_falso;
```
Ou seja , se quisermos verificar se a idade de alguém é maior que um certo número podemos fazer assim:

```Javscript
const numero = 10
const resultado = numero > 18 ? "Maior de idade" : "Menor de idade"

console.log(resultado) // "Menor de idade"
```

Entendeu? Legal né? O segredo está na prática! Então pratique bastante para saber quando usar o ternário ou não!

### Nested IF
 O Nested IF, também conhecido como "if aninhado", ocorre quando um bloco de código IF é colocado dentro de outro bloco de código IF. Embora o uso de if aninhados possa parecer uma solução rápida e fácil para resolver problemas complexos de lógica, isso pode tornar o código difícil de entender e manter.

Em Javascript, o uso excessivo de if aninhados pode levar a problemas de legibilidade e manutenção do código, além de aumentar a complexidade e a probabilidade de erros.

No tópico abaixo vou apresentar uma maneira mais limpa para lidar com diversas condições diferentes
### Switch
 Quando você se deparar com um algoritmo que precisa fazer várias verificações para um mesmo resultado a melhor escolha é utilizar a estrutura condicional switch/case, olha só como ela funciona:
 
Vamos para um exemplo: Imagine que eu tenho que retonar uma string informando qual dia da semana estamos ( de 1 a 5 ). Se formos utilizar if/else ficaria algo como:

```Javascript
let diaDaSemana = 2
let mensagem

if(diaDaSemana == 1){
mensagem="Hoje é segunda-feira"
}else if (diaDaSemana==2){
mensagem="Hoje é segunda-feira"}else if(diaDaSemana==3){
mensagem="Hoje é terça-feira"}...

// assim por diante...
```
Enquanto com switch/case, escreveríamos assim:

```Javascript
let diaSemana = 5;
let mensagem;

switch (diaSemana) {
  case 1:
    mensagem = "Hoje é segunda-feira.";
    break;
  case 2:
    mensagem = "Hoje é terça-feira.";
    break;
  case 3:
    mensagem = "Hoje é quarta-feira.";
    break;
  case 4:
    mensagem = "Hoje é quinta-feira.";
    break;
  case 5:
    mensagem = "Hoje é sexta-feira.";
    break;
  default:
    mensagem = "Não é um dia da semana válido.";
}

console.log(mensagem);
```

Muito mais limpo não é?

Então a estrutura switch/case é usada para executar diferentes ações com base no valor de uma variável. Ela é uma alternativa para vários blocos if/else aninhados, tornando o código mais limpo e fácil de entender.
## Exercícios

* [Exercicio para sala](https://github.com/mflilian/repo-example/tree/main/exercicios/para-sala)
* [Exercicio para casa](https://github.com/mflilian/repo-example/tree/main/exercicios/para-casa)

### Material da aula

### Links Úteis

<p align="center">
Desenvolvido com :purple_heart:  
</p>
