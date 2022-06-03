//Importando biblioteca
const http = require('http');
const url = require('url');
const queryString = require('query-string');

//Definicao de endereco / URL
const hostname = '127.0.0.1'; //LOCALHOST
const port = 3001;

//Implementacao da regra de negocio (logica de programaçao)
const server = http.createServer((req, res) => {

  let resposta;
  const urlparse = url.parse(req.url, true);
  //Receber as informacoes do usuario
  const params = queryString.parse(url.parse(req.url, true).search);
            
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(resposta);
      });
    }

});

//Execução
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
