// src/routes/produtoRoutes.js
import express from 'express';
import { adicionarProduto, listarProdutos, atualizarProduto, deletarProduto } from '../controller/produtoController.js';

const router = express.Router();

// Define as rotas e associa cada uma com a função do controlador
router.post('/addProduct', adicionarProduto);         // Adicionar produto
router.get('/', listarProdutos);            // Listar produtos
router.put('/edit/:id', atualizarProduto);       // Atualizar produto pelo ID
router.delete('/delete/:id', deletarProduto);      // Deletar produto pelo ID

export default router;
