# crud_nodejs
Aplicação simples para criar, selecionar/editar e remover usuário com nodeJs.

Você pode baixar o repositório e abrí-lo no visual studio code.

O servidor irá rodar na porta 3001.
http://localhost:3001

Comandos para executar a aplicação:

npm init

npm i typescript

npx tsc --init

npx tsc --watch

De acordo com a estrututura da aplicação foram criadas as seguintes rotas para executar a criação de usuário, atualização e também deletar um usuário através do id.

Rota para criar: http://localhost:3001/criar-usuario
Exemplo: http://localhost:3001/criar-usuario?nome=Ana&idade=39&id=1

Rota para atualizar: http://localhost:3001/selecionar-usuario
Exemplo: http://localhost:3001/selecionar-usuario?id=1

Rota para remover: http://localhost:3001/remover-usuario
Exemplo: http://localhost:3001/remover-usuario?id=1
