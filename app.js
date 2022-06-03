//Importando biblioteca
const http = require('http');
const url = require('url');
const queryString = require('query-string');
const fs = require('fs');

//Definicao de endereco / URL
const hostname = '127.0.0.1'; //LOCALHOST
const port = 3001;

//Implementacao da regra de negocio (logica de programaçao)
const server = http.createServer((req, res) => {

  let resposta;
  const urlparse = url.parse(req.url, true);
  //Receber as informacoes do usuario
  const params = queryString.parse(url.parse(req.url, true).search);
      
  //Criar um usuario - Atualizar um usuario

  if(urlparse.pathname == '/criar-usuario'){

      //Salvar as informacoes
      fs.writeFile('users/' + params.id + '.txt', JSON.stringify(params), function (err) {
        if (err) throw err;
        console.log('Saved!');

        resposta = 'Usuario criado com sucesso!'

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(resposta);
      });

 
    } //selecionar um usuario
    else if(urlparse.pathname == '/selecionar-usuario'){
      fs.readFile('users/'+ params.id + '.txt', function(err, data) {
      
      resposta = data;
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(resposta);  
      });
    }

    //Remover um usuario
    else if(urlparse.pathname == '/remover-usuario'){
      fs.unlink('users/'+ params.id + '.txt', function (err) {
        //console.log('File deleted!');

        resposta = err ? 'Usuario nao encontrado!' : 'Usuario removido!';
        
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