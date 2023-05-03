import cursosDatabase from './database.js';

let cursos = undefined;

var CONTADOR = cursosDatabase.length + 1;

carregarDados();
carregarCursosHTML();

document.addEventListener('keydown', function (event) {
  if (event.key == 'Escape') {
    document.querySelector('#modal-cursos').style.display = 'none';
    // console.log('Esc digitado!');
  }
});

function carregarDados() {
  if (localStorage.getItem('app-cursos:cargaFeita') != 'ok') {
    localStorage.setItem('app-cursos:cargaFeita', 'ok');
    localStorage.setItem('app-cursos:dados', JSON.stringify(cursosDatabase));
  }

  cursos = JSON.parse(localStorage.getItem('app-cursos:dados'));
}

function carregarCursosHTML(arrCursos = cursos) {
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
      <p><button type="button" class="circular" onclick="confirmarRemocao(${curso.id});">-</button></p>
      <hr />
    </section>
  `;

  return result;
}

function confirmarRemocao(id) {
  const prompt = window.confirm(`Confirmar remoção do Curso #${id}?`);

  if (prompt) {
    apagarCursoFuncional(id);
    carregarCursosHTML();
  }
}

function apagarCurso(id) {
  let i = 0;
  for (const curso of cursos) {
    if (curso.id == id) {
      break;
    }
    i++;
  }

  cursos.splice(i, 1);
}

function apagarCursoFuncional(id) {
  cursos = cursos.filter((curso) => curso.id != id);
}

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

  // cursos.push(novoCurso);

  const cursos = JSON.parse(localStorage.getItem('app-cursos:dados'));

  cursos.push(novoCurso);

  localStorage.setItem('cursos-app:dados', JSON.stringify(cursos));

  const modal = document.querySelector('#modal-cursos');
  modal.style.display = 'none';

  carregarCursosHTML(cursos);
}

window.abrirFormulario = abrirFormulario;
window.salvarCurso = salvarCurso;
window.confirmarRemocao = confirmarRemocao;
