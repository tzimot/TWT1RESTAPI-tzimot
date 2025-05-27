// Configuração da API
const API_URL = 'http://localhost:3000';

const alunoForm = document.getElementById('alunoForm');
const alunoIdInput = document.getElementById('alunoId');
const nomeInput = document.getElementById('nome');
const apelidoInput = document.getElementById('apelido');
const cursoSelect = document.getElementById('curso');
const anoCurricularInput = document.getElementById('anoCurricular');
const limparFormBtn = document.getElementById('limparForm');
const alunosTableBody = document.querySelector('#alunosTable tbody');

async function carregarCursos() {
    try {
        const response = await fetch(`${API_URL}/cursos`);
        const cursos = await response.json();
        console.log('Cursos carregados:', cursos);
        
        cursoSelect.innerHTML = '';
        cursos.forEach(curso => {
            const option = document.createElement('option');
            option.value = curso.id;
            option.textContent = curso.nomeDoCurso;
            cursoSelect.appendChild(option);
        });
    } catch (error) {
        console.error('Erro ao carregar cursos:', error);
        alert('Erro ao carregar cursos. Tente novamente.');
    }
}

async function carregarAlunos() {
    try {
        const response = await fetch(`${API_URL}/alunos`);
        const alunos = await response.json();
        console.log('Alunos carregados:', alunos);
        
        alunosTableBody.innerHTML = '';
        alunos.forEach(aluno => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${aluno.nome}</td>
                <td>${aluno.apelido}</td>
                <td>${getCursoNome(aluno.curso)}</td>
                <td>${aluno.anoCurricular}</td>
                <td>
                    <button class="btn-editar" onclick="editarAluno('${aluno._id}')">Editar</button>
                    <button class="btn-apagar" onclick="apagarAluno('${aluno._id}')">Apagar</button>
                </td>
            `;
            alunosTableBody.appendChild(tr);
        });
    } catch (error) {
        console.error('Erro ao carregar alunos:', error);
        alert('Erro ao carregar alunos. Tente novamente.');
    }
}

function getCursoNome(cursoId) {
    console.log('Procurando cursoId:', cursoId);
    const option = cursoSelect.querySelector(`option[value="${cursoId}"]`);
    console.log('Encontrou option:', option);
    return option ? option.textContent : 'Curso não encontrado';
}

async function salvarAluno(event) {
    event.preventDefault();
    
    const aluno = {
        nome: nomeInput.value,
        apelido: apelidoInput.value,
        curso: cursoSelect.value,
        anoCurricular: parseInt(anoCurricularInput.value)
    };
    

    try {
        const url = alunoIdInput.value
            ? `${API_URL}/alunos/${alunoIdInput.value}`
            : `${API_URL}/alunos`;
            
        const method = alunoIdInput.value ? 'PUT' : 'POST';

        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(aluno)
        });

        const data = await response.json();
        console.log('Resposta da API ao salvar:', data);

        if (!response.ok) throw new Error('Erro ao salvar aluno');

        limparFormulario();
        carregarAlunos();
        alert('Aluno salvo com sucesso!');
    } catch (error) {
        console.error('Erro ao salvar aluno:', error);
        alert('Erro ao salvar aluno. Tente novamente.');
    }
}

async function editarAluno(id) {
    try {
        const response = await fetch(`${API_URL}/alunos/${id}`);
        const aluno = await response.json();
        
        alunoIdInput.value = aluno._id;
        nomeInput.value = aluno.nome;
        apelidoInput.value = aluno.apelido;
        cursoSelect.value = aluno.curso;
        anoCurricularInput.value = aluno.anoCurricular;
    } catch (error) {
        console.error('Erro ao carregar aluno:', error);
        alert('Erro ao carregar dados do aluno. Tente novamente.');
    }
}

async function apagarAluno(id) {
    if (!confirm('Tem a certeza que deseja apagar este aluno?')) return;
    
    try {
        const response = await fetch(`${API_URL}/alunos/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            const error = await response.text();
            throw new Error(`Erro ao apagar aluno: ${error}`);
        }
        
        carregarAlunos();
        alert('Aluno apagado com sucesso!');
    } catch (error) {
        console.error('Erro ao apagar aluno:', error);
        alert('Erro ao apagar aluno. Tente novamente.');
    }
}

function limparFormulario() {
    alunoForm.reset();
    alunoIdInput.value = '';
}

alunoForm.addEventListener('submit', salvarAluno);
limparFormBtn.addEventListener('click', limparFormulario);

carregarCursos();
carregarAlunos();