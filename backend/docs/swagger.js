const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Gestão de Alunos ESTG',
      version: '1.0.0',
      description: 'API RESTful para gerenciar alunos e cursos'
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor de Desenvolvimento'
      },
      {
        url: 'https://twt1restapi-tzimot.onrender.com',
        description: 'Servidor de Produção'
      }
    ]
  },
  apis: ['./routes/*.js'] // Arquivos que contêm as rotas
};

module.exports = swaggerJsdoc(options);