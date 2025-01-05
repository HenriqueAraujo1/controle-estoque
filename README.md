# Controle de Estoque

Um sistema de controle de estoque simples para uma loja de acessórios, desenvolvido com Node.js, Express e MySQL.

## Funcionalidades

- **Listar Produtos**: Exibe todos os produtos cadastrados no estoque.
- **Adicionar Produtos**: Permite cadastrar novos produtos.
- **Editar Produto**: Atualiza as informações de um produto existente.
- **Excluir Produto**: Remove um produto do estoque.

## Tecnologias Utilizadas

- **Backend**: Node.js com Express.
- **Banco de Dados**: MySQL.
- **Frontend**: HTML, CSS e JavaScript.

## Estrutura de Pastas

```
controle-estoque/
├── node_modules/
├── package-lock.json
├── package.json
├── app.js
├── server.js
├── src/
│   ├── controller/
│   │   └── produtoController.js
│   ├── db/
│   │   ├── knex.js
│   │   └── setup.js
│   ├── routes/
│       └── produtoRoutes.js
├── public/
│   ├── adicionar.html
│   ├── editar.html
│   ├── excluir.html
│   ├── listar.html
│   ├── index.html
│   └── script.js
```

## Configuração do Ambiente

### Pré-requisitos

- Node.js instalado.
- MySQL configurado e em execução.
- Gerenciador de pacotes npm ou yarn.

### Passo a Passo

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/controle-estoque.git
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure o banco de dados MySQL:
   - No arquivo `src/db/knex.js`, insira as credenciais do seu banco de dados.
   ```javascript
   const knex = require('knex')({
       client: 'mysql',
       connection: {
           host: 'localhost',
           user: 'seu_usuario',
           password: 'sua_senha',
           database: 'nome_do_banco'
       }
   });
   ```
   - Execute o arquivo `setup.js` para criar as tabelas necessárias:
   ```bash
   node src/db/setup.js
   ```

4. Inicie o servidor:
   ```bash
   node server.js
   ```

5. Acesse a aplicação no navegador em:
   ```
   http://localhost:3000
   ```

## Como Usar

- Acesse a página inicial (`index.html`) para navegar entre as opções disponíveis.
- Utilize as páginas específicas para **adicionar**, **editar**, **listar** ou **excluir** produtos.

## Contribuição

Sinta-se à vontade para abrir issues e enviar pull requests.

## Licença

Este projeto é licenciado sob a [MIT License](LICENSE).

