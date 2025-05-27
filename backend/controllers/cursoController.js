const Curso = require('../models/Curso');

// Listar todos os cursos
exports.getCursos = async (req, res) => {
  try {
    const cursos = await Curso.find();
    res.json(cursos);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar cursos' });
  }
};

// Criar novo curso
exports.createCurso = async (req, res) => {
  try {
    const novoCurso = new Curso(req.body);
    await novoCurso.save();
    res.status(201).json(novoCurso);
  } catch (err) {
    res.status(400).json({ error: 'Erro ao criar curso' });
  }
};

// Atualizar curso
exports.updateCurso = async (req, res) => {
  const id = req.params.id;
  if (!id.match(/^[a-fA-F0-9]{24}$/)) {
    return res.status(400).json({ error: 'ID inválido' });
  }
  try {
    const cursoAtualizado = await Curso.findByIdAndUpdate(id, req.body, { new: true });
    if (!cursoAtualizado) {
      return res.status(404).json({ error: 'Curso não encontrado' });
    }
    res.json(cursoAtualizado);
  } catch (err) {
    res.status(400).json({ error: 'Erro ao atualizar curso' });
  }
};

// Apagar curso
exports.deleteCurso = async (req, res) => {
  const id = req.params.id;
  if (!id.match(/^[a-fA-F0-9]{24}$/)) {
    return res.status(400).json({ error: 'ID inválido' });
  }
  try {
    const cursoRemovido = await Curso.findByIdAndDelete(id);
    if (!cursoRemovido) {
      return res.status(404).json({ error: 'Curso não encontrado' });
    }
    res.json({ msg: 'Curso removido' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao apagar curso' });
  }
};
