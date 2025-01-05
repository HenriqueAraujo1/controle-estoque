const apiBaseUrl = 'http://localhost:3000/api/produtos';

async function adicionarProduto(produto) {
    await fetch(`${apiBaseUrl}/addProduct`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(produto)
    });
}

async function listarProdutos() {
    const response = await fetch(apiBaseUrl);
    const produtos = await response.json();
    const produtosTable = document.getElementById('produtosTable');

    produtos.forEach(produto => {
        const row = produtosTable.insertRow();
        row.insertCell(0).textContent = produto.id;
        row.insertCell(1).textContent = produto.nome;
        row.insertCell(2).textContent = produto.preco;
        row.insertCell(3).textContent = produto.quantidade;
    });
}

async function atualizarProduto(id, produto) {
    await fetch(`${apiBaseUrl}/edit/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(produto)
    });
}

async function deletarProduto(id) {
    await fetch(`${apiBaseUrl}/delete/${id}`, {
        method: 'DELETE'
    });
}
