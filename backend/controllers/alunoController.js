const Aluno = require('../models/Aluno');

exports.getAlunos = async (req, res) => {
    try {
        const alunos = await Aluno.find();
        res.json(alunos);
    } catch (err) {
        res.status(500).json({ error: "Erro ao buscar alunos" });
    }
};

exports.getAlunoById = async (req, res) => {
    const id = req.params.id;
    if (!id.match(/^[a-fA-F0-9]{24}$/)) {
        return res.status(400).json({ error: "ID inválido" });
    }
    
    try {
        const aluno = await Aluno.findById(id);
        if (!aluno) {
            return res.status(404).json({ error: "Aluno não encontrado" });
        }
        res.json(aluno);
    } catch (err) {
        res.status(500).json({ error: "Erro ao buscar aluno" });
    }
};

exports.createAluno = async (req, res) => {
    try {
        console.log('REQ.BODY:', req.body);
        const novoAluno = new Aluno(req.body);
        await novoAluno.save();
        res.status(201).json(novoAluno);
    } catch (err) {
        console.error('ERRO:', err);
        res.status(400).json({ error: "Erro ao criar aluno" });
    }
};

exports.updateAluno = async (req, res) => {
    const id = req.params.id;
    if (!id.match(/^[a-fA-F0-9]{24}$/)) {
        return res.status(400).json({ error: "ID inválido" });
    }

    try {
        const alunoAtualizado = await Aluno.findByIdAndUpdate(id, req.body, { new: true });
        if (!alunoAtualizado) {
            return res.status(404).json({ error: "Aluno não encontrado" });
        }
        res.json(alunoAtualizado);
    } catch (err) {
        res.status(400).json({ error: "Erro ao atualizar aluno" });
    }
};

exports.deleteAluno = async (req, res) => {
    const id = req.params.id;
    if (!id.match(/^[a-fA-F0-9]{24}$/)) {
        return res.status(400).json({ error: "ID inválido" });
    }

    try {
        const alunoRemovido = await Aluno.findByIdAndDelete(id);
        if (!alunoRemovido) {
            return res.status(404).json({ error: "Aluno não encontrado" });
        }
        res.json({ msg: "Aluno removido" });
    } catch (err) {
        res.status(500).json({ error: "Erro ao apagar aluno" });
    }
};
