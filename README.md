# Boas vindas ao repositório do projeto de Movie Cards CRUD!

## Meus comentários

Nesse projeto fiz o meu primeiro **CRUD** (Create, Read, Update and Delete) e melhorei meus conhecimentos sobre `props` e `state` em React. Também **aprendi** a usar **libs** de CSS em React para acelerar o desenvolvimento. 

Esse projeto me deu um pouco de nostalgia, lembrei de quando trabalhava com redes, por conta do uso do pacote `react-router-dom` e seus outros itens como _Switch_ e _Link_.

---

## Requisitos do projeto

### 1 - O componente `App` deve renderizar `BrowserRouter`

O componente `App`, que representa toda a aplicação, deve importar e renderizar `BrowserRouter`.

### 2 - O componente `BrowserRouter` deve renderizar `Switch`

O componente `Switch` deve ser o único filho direto de `BrowserRouter`. Dentro de `Switch` ficarão as rotas relacionadas às diferentes páginas da aplicação.

### 3 - O componente `Switch` deve renderizar as 4 rotas do app

O app possui ao todo 4 rotas, como descrito na seção [O que deverá ser desenvolvido](#o-que-deverá-ser-desenvolvido). Cada rota é associada a um caminho de URL e a um componente. Este componente renderizará um conteúdo específico para aquela rota. O mapeamento entre rotas, caminhos de URL e componentes estão listados abaixo.

1. O caminho raiz do projeto (`/`) deve renderizar o componente `MovieList`.

2. O caminho `movies/:id` deve renderizar o componente `MovieDetails`. Onde o `:id` é o parâmetro da URL que representa ID do filme que `MovieDetails` renderizará.

3. O caminho `/movies/new` deve renderizar o componente `NewMovie`.

4. O caminho `movies/:id/edit` deve renderizar o componente `EditMovie`. `:id` é um parâmetro de URL com o id do filme que `EditMovie` possibilitará editar.

5. Qualquer outro caminho que não se enquadre nas rotas anteriores deve renderizar o componente `NotFound`.

### 4 - Ao ser montado, `MovieList` deve fazer uma requisição para buscar a lista de filmes a ser renderizada

Para buscar a lista, você deve utilizar a função `getMovies` importada do módulo `movieAPI` em `MovieList`. Essa função retorna uma _promise_. A requisição deve ser feita no momento em que o `MovieList` for montado no DOM. Enquanto a requisição estiver em curso, `MovieList` deve renderizar o componente `Loading`, como ilustrado na imagem a seguir.

![image](loading.png)

Uma vez que a requisição retornar, o resultado deve ser renderizado. Para cada filme, renderize um componente `MovieCard`, como ilustrado abaixo.

![image](index.png)

Você precisará adicionar um estado em `MovieList` para controlar o que será exibido.

### 5 - `MovieCard` deve possuir um link para a página de detalhes de um filme

Cada cartão da lista deve conter em seu rodapé um link com o texto "VER DETALHES". Este link deve apontar para a rota `movies/:id`, onde `:id` é o id do filme. Esta rota exibirá informações detalhadas de um filme.

### 6 - Ao ser montado, `MovieDetails` deve fazer uma requisição para buscar o filme que deverá ser renderizado

`MovieDetails` se comporta de forma muito semelhante ao `MovieList`. Ao ser montado, deve fazer uma requisição utilizando a função `getMovie` do módulo `movieAPI`, passando o id do filme. O componente `Loading` deve ser renderizado enquanto a requisição estiver em curso. Após terminar, deve-se renderizar o card com detalhes sobre o filme.

### 7 - `MovieDetails` deve possuir um link para a página de edição de filmes.

No rodapé do cartão, deve haver um link com o texto "EDITAR" apontando para a rota `/movies/:id/edit`, conforme ilustrado na imagem abaixo.

![image](card-details.png)

### 8 - `MovieDetails` deve possuir um link para voltar à pagina inicial

No rodapé do cartão, deve haver um link apontando para a rota raiz (`/`) com o texto "VOLTAR", conforme ilustrado na imagem acima.

### 9 - Ao ser montado, `EditMovie` deve realizar uma requisição para buscar o filme que será editado.

O comportamento de `EditMovie` é muito semelhante ao de `MovieDetails`. `EditMovie`, no entando, renderizará o formulário de edição de filme.

### 10 - Ao submeter o formulário, `EditMovie` deve atualizar o filme e redirecionar a página para a rota raiz.

O componente `MovieForm` recebe uma callback, que será executada quando o formulário for submetido. Essa callback recebe os dados atualizados do filme. Neste momento, `EditMovie` deve fazer uma requisição utilizando a função `updateMovie` do módulo `movieAPI`, passando como argumentos os dados atualizados. Quando a requisição finalizar, `EditMovie` deve redirecionar o app para a rota raiz (`/`).

### 11 - Na página inicial, deve haver um link para criar novos cartões.

O link deve conter o texto "ADICIONAR CARTÃO" e apontar para a rota `/movies/new`, contento um formulário para criar novos cartões.

### 12 - Ao submeter o formulário, `NewMovie` deve criar um novo filme e redirecionar o app para a página inicial.

Utilizando a callback passada para `MovieForm`, `NewMovie` deve criar um novo cartão utilizando a função `createMovie` do módulo `movieAPI`. Após o fim da requisição, `NewMovie` deve redirecionar o app para a página inicial, contento o novo cartão.

### 13 - Adicione proptypes a todos os componentes

Todos os compontens que recebem _props_ devem ter suas _proptypes_ corretamente declaradas. O _eslint_ checa automaticamente declaração de _proptypes_, portanto seu _Pull Request_ deverá passar no _Code Climate_ para satisfazer esse requisito.
