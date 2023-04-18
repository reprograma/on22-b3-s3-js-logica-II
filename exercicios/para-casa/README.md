# Exercício de Casa 🏠 

## Lógica II - testes de funções, escopos e muito mais!

> OBS: Alguns exercícios foram feitos um pouco mais, o que causou um retorno diferente do pedido. Em um cenário real eu colocaria o retorno exato da função conforme pedido, mas para testar e aprender eu quis fazer um pouco diferente.

- Crie uma função que receba um número como parâmetro e retorne "par" se o número for par e "ímpar" se o número for ímpar.

> Todo número inteiro ímpar se dividido por 2 dará resto um. Outros darão 0, podendo ser número par ou o próprio zero.

- Crie uma função que receba um número de mês como parâmetro e retorne o nome do mês correspondente. Use a estrutura switch case para resolver este problema.

> Um caso para cada mês, e caso não seja nenhum deles uma validação mostrando o que foi inserido, caso seja erro de digitação.

- Crie uma função que receba duas strings como parâmetros e retorne a concatenação das duas strings se ambas tiverem o mesmo tamanho. Se não tiverem o mesmo tamanho, retorne apenas a string de maior tamanho.

> Tentei manter simples esse, só fazendo o que foi pedido e add um espaço entre as palavras no primeiro caso.

- Crie uma função que receba uma string como parâmetro e retorne "Sim" se a string contém a letra "a" ou "A" e "Não" caso contrário.

>Neste adicionei a lógica de identificar qual letra foi detectada, somente para testar e treinar :3


Terminou o exercício? Dá uma olhada nessa checklist e confere se tá tudo certinho, combinado?!

- [x] Fiz o fork do repositório.
- [x] Clonei o fork na minha máquina (`git clone url-do-meu-fork`).
- [x] Resolvi o exercício.
- [x] Adicionei as mudanças. (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [x] Commitei a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [x] Pushei os commits na minha branch (`git push origin nome-da-branch`)
- [x] Criei um Pull Request seguindo as orientaçoes que estao nesse [documento](https://github.com/mflilian/repo-example/blob/main/exercicios/para-casa/instrucoes-pull-request.md).

Essa sessão é um exemplo para ser explorado. Códigos iguais não são permitidos! 
TIPS:
```Javascript
function concatenaStrings(str1, str2) {
  if (str1.length === str2.length) {
    return str1 + str2;
  } else {
    return str1.length > str2.length ? str1 : str2;
  }
}
```

```Javascript
function contemLetraA(str) {
  if (str.includes('a') || str.includes('A')) {
    return 'Sim';
  } else {
    return 'Não';
  }
}
```
