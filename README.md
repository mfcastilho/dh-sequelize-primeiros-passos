
<h1 align="center">DH SEQUELIZE - PRIMEIROS PASSOS </h1>


## EXERCÍCIOS
### Objetivo 


#### Conexão de Banco de Dados: (Durante esta aula usaremos o banco de dados de
movies-db.sql) - 

- Modificar o arquivo config/config.sjon no diretório raiz do projeto com as credenciais do
MySQL.
-Models:
> - [ ] Criar model para a tabela de Movies.
> - [ ] Criar um model para a tabela Genres.
> - [ ] Criar um model para a tabela de Actors.
> - [X] Adicione ao model do Actor, o método getNameComplete.
>> - Para mais informações consulte: https://sequelize.org/master/manual/models-definition.html#defining-as-part-of-the-model-opt

- Acesso ao banco de dados:
> - [X] Criar o caminho /actors, que chamará o método ActorsController@index, e
devolver a view actors.ejs.
> - [X] Na view recém-criada, digite um título e digite localhost:3000/actors e verifique se
ele é exibido corretamente.
> - [X] No controller recém-criado, usando Sequelize, obtenha todos os atores dentro de
uma variável de actors e envie-a para a view. (É recomendável usar o método
findAll.
> - [X] Na view dos actors/index.ejs, exibir uma lista de nomes de atores usando o EJS.
> - [X] Criar a rota /actors/:id, que será redirecionada para o método
ActorsController@show, e retornar a view actors/show.ejs.
> - [X] No ActorsController, utilizando Sequelize, obtemos o ator com base na ID que
recebemos por URL. Salvar o ator na variável actor, e enviá-la a view. (É
recomendável usar o método findByPk).
> - [ ] Na visão de actors/show.ejs, usando EJS, exibir todos os dados do ator.
> - [ ] Modificar a view dos actors/index.ejs para que o nome de cada ator seja um link
para o detalhe dos dados do ator.

- Mecanismo de busca:

> - [ ] Na view dos actors/index.ejs, crie um formulário com apenas um campo de texto.
O objetivo deste formulário será a busca de atores. (Observe que o formulário deve
apontar o caminho /actors/search).
> - [ ] Criar a rota /actors/search, que será redirecionado para o método
ActorsController@search, e retornar a view dos atores/index.ejs.
> - [ ] No ActorsController, usando Sequelize, obtenha os atores cujo nome contém os
personagens que você está procurando. Salvar os atores na variável actors, e
enviá-la para view. (Recomenda-se o uso do método where)
> - [ ] Adicione aos actors/index.ejs um segundo formulário com um botão "Clear", que
envia para o caminho original sem filtros de busca.
> - [ ] Modificar os resultados da busca para mostrar a lista de atores ordenados por
sobrenome.
> - [ ] Modificar a listagem para que os resultados sejam paginados. Modificar todos os
controllers necessários.

<hr>

### Passos anterioes

- Instalar Sequelize CLI
> - npm install --save sequelize-cli
- Inicializar o Sequelize no projeto
> - npx sequelize-cli init
- Configurar as credenciais
> - arquivo config/config.json
{
"development": {
"username": "root",
"password": null,
"database": "database_development",
"host": "127.0.0.1",
"dialect": "mysql"
},
"test": {
"username": "root",
"password": null,
"database": "database_test",
"host": "127.0.0.1",
"dialect": "mysql"
},
"production": {
"username": "root",
"password": null,
"database": "database_production",
"host": "127.0.0.1",
"dialect": "mysql"
}

- Criar a DB a partir do terminal
> - npx sequelize-cli db:create db_movies

