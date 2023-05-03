import cursos from './database.js';

var CONTADOR = cursos.length + 1;
carregarCursos();

function carregarCursos(arrCursos = cursos) {
  const main = document.querySelector('#cursos');
  main.innerHTML = '';

  for (const curso of arrCursos) {
    const htmlCurso = obterHTML(curso);

    main.insertAdjacentHTML('beforeend', htmlCurso);
  }
}

function obterHTML(curso) {
  let result = '';

  result = `
    <section>
      <p>Curso #${curso.id}</p>
      <p>Curso: <span>${curso.nome}</span></p>
      <p>Carga horária: <span>${curso.ch}</span></p>
      <p>Instituição: <span>${curso.instituicao}</span></p>
      <p>Tipo do curso: <span>${curso.tipoCurso}</span></p>
      <p>${curso.imagem}</p>
      <hr />
    </section>
  `;

  return result;
}

/*
document
  .querySelector('#btn-novo-curso')
  .addEventListener('click', function (event) {
    abrirFormulario();
  });
*/

function abrirFormulario() {
  const modal = document.querySelector('#modal-cursos');
  modal.style.display = 'block';
}

function salvarCurso() {
  const formulario = document.querySelectorAll('form input');

  const curso = formulario[0].value;
  const cargaHoraria = formulario[1].value;
  const instituicao = formulario[2].value;
  const tipoCurso = formulario[3].value;
  const imagem = formulario[4].value;

  const novoCurso = {
    id: CONTADOR++,
    nome: curso,
    ch: cargaHoraria,
    instituicao: instituicao,
    tipoCurso: tipoCurso,
    imagem: imagem,
  };

  formulario[0].value = '';
  formulario[1].value = '';
  formulario[2].value = '';
  formulario[3].value = '';
  formulario[4].value = '';

  cursos.push(novoCurso);

  const modal = document.querySelector('#modal-cursos');
  modal.style.display = 'none';

  carregarCursos();
}

function abrirFormRemocao() {
  const modal = document.querySelector('#remover-curso');
  modal.style.display = 'block';
}

function removerCurso() {
  const idCurso = document.querySelector('#form-remocao-curso input');

  cursos = cursos.filter(function (elemento) {
    if (Number(idCurso.value) !== elemento.id) return true;
  });

  carregarCursos();

  const modal = document.querySelector('#remover-curso');
  modal.style.display = 'none';
}

window.abrirFormulario = abrirFormulario;
window.salvarCurso = salvarCurso;
window.abrirFormRemocao = abrirFormRemocao;
window.removerCurso = removerCurso;
