import knex from 'knex';

const db = knex({
  client: 'qual banco de dados',
  connection: {
    host: 'local do banco de dados',
    user: 'usuário do banco de dados',
    password: 'senha do banco',
    database: 'nome do banco de dados',
  }
});

export default db;