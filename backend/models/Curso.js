const mongoose = require('mongoose');

const cursoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  duracao: {
    type: Number,
    required: true
  },
  descricao: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('Curso', cursoSchema);
