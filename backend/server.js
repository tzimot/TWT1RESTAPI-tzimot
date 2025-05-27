require('dotenv').config(); // **IMPORTANTE** carregar o .env primeiro

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const alunoRoutes = require('./routes/alunoRoutes');
const cursoRoutes = require('./routes/cursoRoutes');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const mongoUri = process.env.MONGODB_URI || 'mongodb+srv://timoteogres:timoteogres@twt1restapi-tzimot.be72ana.mongodb.net/ACADEMICOSTG?retryWrites=true&w=majority&appName=TWT1RESTAPI-tzimot';

// Conectar ao MongoDB Atlas
mongoose.connect(mongoUri)
  .then(() => {
    console.log("Conexão feita com sucesso ao MongoDB Atlas");
    app.listen(port, () => {
      console.log(`Servidor a correr em http://localhost:${port}`);
    });
  })
  .catch(err => {
    console.error("Erro ao conectar ao MongoDB:", err.message);
  });

// Rota default para teste
app.get("/", (req, res) => {
  res.send("<h1>Página errada... :(</h1>");
});

// Usar as rotas
app.use('/alunos', alunoRoutes);
app.use('/cursos', cursoRoutes);
