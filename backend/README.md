# API RESTful - Backend (Node.js + Express + MongoDB Atlas)

## Descrição
API para gerir alunos e cursos, feita com Node.js, Express e MongoDB Atlas.
Usei arquitetura RESTful e padrão MVC para manter tudo organizado (e para receber um bónus de 5% )

## Requisitos

Node.js instalado

MongoDB Atlas configurado (URI de conexão)

## Configuração

Abre o terminal na pasta backend

Executa: npm install

Cria um ficheiro chamado .env com o conteúdo:

MONGODB_URI=your_mongodb_atlas_connection_string

## Execução

No terminal, executa:

node server.js

A API estará disponível em http://localhost:3000

## Endpoints principais

GET /alunos — lista todos os alunos

GET /alunos/:id — obtém aluno pelo ID

POST /alunos — cria um novo aluno

PUT /alunos/:id — atualiza aluno pelo ID

DELETE /alunos/:id — apaga aluno pelo ID

GET /cursos — lista todos os cursos

## Notas importantes

Verifica se a URI do MongoDB Atlas está correta no .env

A porta do servidor é 3000

😊 Documentação feita por Timóteo Gres.