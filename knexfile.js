const { db } = require('./.env')
//Por segurança, os dados de conexão com o banco de dados são inseridos no arquivo .env na variável db e requeridos aqui para a conexão.

module.exports = {
  client: 'postgresql',
  connection: db,
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    //Diretório onde serão criadas e manipuladas das migrations
    directory: './src/database/migrations'
  },
};
