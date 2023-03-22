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

* [Funções](#funções)
  * [O que é](#o-que-é)
  * [Quando Utilizar](#quando-utilizar)
  * [Declaração](#declaração)
  * [O que é](#o-que-é)
  * [Retorno](#quando-utilizar)
  * [Clean Code: Comentários e Funções](#declaração)
* [Escopo](#escopo)
  * [Conceito](#conceito)
  * [Escopo Global](#escopo-global)
  * [Escopo Local ou de Bloco](#escopo-local-ou-de-bloco)
  * [Var e Hoisting](#var-e-hoisting)
  * [Escopo Léxico](#escopo-léxico)
* [Estrutura Condicional](#estrutura-condicional)
  * [Conceito](#conceito)
  * [Estruturas](#estruturas)
  * [if / else](#if-else)
  * [Ternário](#ternário)
  * [Nested IF](#nested-if)
  * [Switch](#switch)

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

Para declarar uma funções precisamos utilizar a palavra reservada `function` e em seguida declarar um nome que resuma o que aquela função faz.

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

Para executar uma função que foi declarada você precisa chama-la no código dessa forma: `somarDoisNumeros()`, sem as chaves - por isso ela pode ser executada inúmeras vezes. Dessa forma, o Javascript sabe que você está solicitando a execução de uma função já declarada antes.

### Retorno
Em alguns momentos , uma função que apenas executa alguma coisa não atende nossas necessidades e precisamos que uma função execute algo e nos traga um valor já processado pelas instruções dentro dela.

Vamos imaginar que , no lugar de exibir o resultado da soma no `console.log` eu queira que a função retorne o valor para o lugar pra onde ela foi chamada, como eu faria isso?

Eu teria que dizer que depois de executar aquela soma, o total da soma teria que retornar no lugar onde minha função foi chamada.

Olhe o exemplo:

```Javascript
function somarDoisNumeros(){
  let n1 = 5
  let n2 = 10
  let total = n1 +n2

  return total
}

console.log(somarDoisNumeros()) // Saída: 15

```

O `console.log(somarDoisNumeros())` vai executar a função e quando ela terminar de ser executada ela retornará um número, então, o `console.log()` poderá exibi-lo no console.

### Clean Code: Comentários e Funções

## Escopo

### Conceito
  
### Escopo Global
  
### Escopo Local ou de Bloco
  
### Var e Hoisting
  
### Escopo Léxico
  
## Estrutura Condicional

## Conceito
  
### Estruturas
  
### if / else
  
### Ternário
  
### Nested IF
  
### Switch
  
## Exercícios

* [Exercicio para sala](https://github.com/mflilian/repo-example/tree/main/exercicios/para-sala)
* [Exercicio para casa](https://github.com/mflilian/repo-example/tree/main/exercicios/para-casa)

### Material da aula

### Links Úteis

* [Lorem Ipsum](https://www.lipsum.com/feed/html)

* [Lorem Ipsum](https://www.lipsum.com/feed/html)
* [Lorem Ipsum](https://www.lipsum.com/feed/html)
* [Lorem Ipsum](https://www.lipsum.com/feed/html)

<p align="center">
Desenvolvido com :purple_heart:  
</p>
