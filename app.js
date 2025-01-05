// src/server.js
import express from 'express';
import produtoRoutes from './src/routes/produtoRoutes.js';
import './src/db/setup.js'; // Importa o setup para rodar o script de criação da tabela

export const app = express();
export const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());
app.use('/api/produtos', produtoRoutes);


app.post('/addProduct', (req, res) => { // rota para adicionar o produto
    res.send('Rota para adicionar produto');
});


app.get('/api/produtos', (req, res) => { // rota para listar os produtos
    res.send('API de Controle de Estoque - Shine Acessórios');
});



app.put('/edit/:id', (req, res) => {  // rota para editar
  res.send('Rota para editar');
});

app.delete('/delete/:id', (req, res) => { // rota para deletar o produto
  res.send('Rota para deletar');
});
