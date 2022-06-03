//Importando biblioteca
const http = require('http');
const url = require('url');

//Definicao de endereco / URL
const hostname = '127.0.0.1'; //LOCALHOST
const port = 3001;

//Implementacao da regra de negocio (logica de programaçao)

//Execução
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
