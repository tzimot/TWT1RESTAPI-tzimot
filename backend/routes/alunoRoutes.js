const express = require('express');
const router = express.Router();
const alunoController = require('../controllers/alunoController');
console.log('AlunoController:', alunoController);

/**
 * @swagger
 * /alunos:
 *   get:
 *     summary: Lista todos os alunos
 *     responses:
 *       200:
 *         description: Lista de alunos retornada com sucesso
 */
router.get('/', alunoController.getAlunos);

/**
 * @swagger
 * /alunos/{id}:
 *   get:
 *     summary: Obtém um aluno pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Aluno encontrado
 *       404:
 *         description: Aluno não encontrado
 */
router.get('/:id', alunoController.getAlunoById);
router.post('/', alunoController.createAluno);
router.put('/:id', alunoController.updateAluno);
router.delete('/:id', alunoController.deleteAluno);

module.exports = router;
