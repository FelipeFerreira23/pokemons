# Busca Pokemons

A aplicação consome dados da API Pokéapi e exibe uma lista de Pokemons. 
É possível "capturar" o seu Pokemon preferido e navegar nas demais páginas da listagem.

<img src="https://user-images.githubusercontent.com/53622773/235822666-0d312dab-73e4-43ac-880c-e3223677caa1.png" width="700px" />

#### Funcionalidades da aplicação: 

- Listagem de Pokemons;
- Paginação da listagem;
- Busca por Pokemons;

[Acessar projeto](https://teste-pokemons.surge.sh/)

## Como foi feito? 
> A aplicação foi desenvolvida utilizando ReactJS e as seguintes tecnologias `vite`, `redux toolkit`, `styled-components`, `axios`, `react hooks`.
> 
> O projeto foi desenvolvido no conceito de SPA (Single Page Application)

>## Listagem de Pokemons
> Utilizei o `axios` para fazer as requisições para a API, salvando os estados dentro do `redux`. 
> 
> Para listar os produtos, utilizei o método `GET` dentro do hook `useEffect` 
e para exibir as informações na tela e iterei através de um `.map()`
  
>## Busca por Pokemons
> Criei um component independente que exibe as informações do Pokemon selecionado.

## 🚀 Instalação e execução

1. Abra o seu terminal.

2. Selecione o local onde deseja ter o código no seu computador.

3. Faça um clone do repositório:

  `git clone https://github.com/FelipeFerreira23/pokemons`;

4. Entre na pasta pelo terminal: `cd pokemons`;

5. Rode `npm install` para instalar as dependências do projeto;

6. Abra uma nova aba e rode `npm run dev` para iniciar a aplicação.

---

Felipe Ferreira
