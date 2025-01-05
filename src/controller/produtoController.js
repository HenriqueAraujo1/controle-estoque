// src/controllers/produtoController.js
import db from '../db/knex.js'; // Importa o arquivo de configuração do banco de dados

// Função para adicionar um novo produto
export const adicionarProduto = async (req, res) => {
    const { nome, preco, quantidade } = req.body; // Extrai os dados do corpo da requisição front end

    try { // tenta executar o código
        await db('produtos').insert({ // inserindo os dados no banco de dados 
            nome,
            preco,
            quantidade
        });
        res.status(201).json({ message: 'Produto adicionado com sucesso!' });
    } catch (error) { // se der erro, ele executa esse
        console.error('Erro ao adicionar produto:', error);
        res.status(500).json({ message: 'Erro ao adicionar produto' });
    }
};

// Função para listar todos os produtos
export const listarProdutos = async (req, res) => { 
    try {
        const produtos = await db('produtos').select('*');
        res.status(200).json(produtos);
    } catch (error) {
        console.error('Erro ao listar produtos:', error);
        res.status(500).json({ message: 'Erro ao listar produtos' });
    }
};

// Função para atualizar um produto
export const atualizarProduto = async (req, res) => {
    const { id } = req.params;
    const { nome, preco, quantidade } = req.body;
    
    if (!preco || !quantidade) {
        return res.status(400).json({ message: 'Preencha todos os campos' });
    } else {
        console.log('Deu certo')
    }// verifica se os campos estão preenchidos


    try { 
        await db('produtos') 
            .where({ id }) // atualiza os dados do produto pelo id
            .update({ nome, preco, quantidade }); 
        res.status(200).json({ message: 'Produto atualizado com sucesso!' }); // passa um cabeçalho de sucesso e um json com a mensagem
    } catch (error) { // se der erro, ele executa esse
        console.error('Erro ao atualizar produto:', error);
        res.status(500).json({ message: 'Erro ao atualizar produto' });
    }
};

// Função para deletar um produto
export const deletarProduto = async (req, res) => {
    const { id } = req.params;

    try {
        await db('produtos')
            .where({ id }) // delete o produto pelo id
            .del();
        res.status(200).json({ message: 'Produto deletado com sucesso!' }); // passa um cabeçalho de sucesso e um json com a mensagem
    } catch (error) { // se der erro, ele executa esse
        console.error('Erro ao deletar produto:', error);
        res.status(500).json({ message: 'Erro ao deletar produto' });
    }
};
