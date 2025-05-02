/*
 * Antes de rodar, instalar:
 * 1) node.js (https://nodejs.org/en)
 * 2) npm install -g json-server
 * 3) Na raiz do projeto, criar "db/db.json":
 {
    "cidades": [
      {"id": 1, "cidade": "Belo Horizonte", "estado": "MG", "população": 3800000},
      {"id": 2, "cidade": "São Paulo", "estado": "SP", "população": 11800000},
      {"id": 3, "cidade": "Rio de Janeiro", "estado": "RJ", "população": 5300000},
      {"id": 4, "cidade": "Curitiba", "estado": "PR", "população": 1200000},
      {"id": 5, "cidade": "Fortaleza", "estado": "CE", "população": 2100000}
    ]
  }
 *  
 * Para rodar, executar o comando abaixo:
 * 4) json-server --watch db/db.json --port 3333
*/

const url = "https://solid-spoon-97qp4q447799h7gq6-5500.app.github.dev";
const urlCidades = url + "/db/db.json"; 
console.log(urlCidades);
let cidades = [];

function carregarDadosJSONServer(funcaoImprimirDadosDoBancoDeDados) {
  fetch(urlCidades)
    .then(function (response) { return response.json(); })
    .then(function (dados) {
      cidades = dados.cidades;
      console.log('Dados carregados:');
      console.log(cidades);
      funcaoImprimirDadosDoBancoDeDados();
    })
}
