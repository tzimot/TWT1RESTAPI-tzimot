# Trabalho prático 1
## Descrição

Este é um projeto de API RESTful para gerenciar alunos e cursos. A API permite realizar operações CRUD em alunos.

# Como usar

## Instalação

1. Clone este repositório.
2. Navegue até a pasta do projeto.
3. Execute `npm install` para instalar as dependências.

## Configuração

1. Crie um arquivo `.env` na raiz do projeto.
2. Adicione a variável `MONGO_URI` com a URL de conexão do MongoDB Atlas.

## Execução

1. Execute `npm start` para iniciar o servidor.
2. A API estará disponível em `localhost:3000`.

### Alunos

- `GET /alunos`: Lista todos os alunos.
- `GET /alunos/:id`: Obtém um aluno pelo ID.    
- `POST /alunos`: Cria um novo aluno.
- `PUT /alunos/:id`: Atualiza um aluno pelo ID.
- `DELETE /alunos/:id`: Apaga um aluno pelo ID.

## URLs de Produção

- Frontend: https://tw-trab1-restapi-tzimot.vercel.app/
- API: https://twt1restapi-tzimot.onrender.com/