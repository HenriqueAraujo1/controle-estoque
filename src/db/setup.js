import db from './knex.js';

db.schema.hasTable('produtos').then(exists => {
  if (!exists) {
    db.schema.createTable('produtos', function (table) {
      table.increments('id'); // ID com incremento automático
      table.string('nome');
      table.decimal('preco');
      table.integer('quantidade');
    }).then(() => console.log("Tabela criada"))
      .catch(err => console.error("Erro ao criar tabela", err));
  } else {
    console.log("Tabela 'produtos' já existe.");
  }
});
