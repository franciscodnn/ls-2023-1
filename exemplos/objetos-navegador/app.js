import disciplinas from './model/disciplinas.js';

loadData();

function loadData() {
  for (const disciplina of disciplinas) {
    let result = `
      <section>
        <h2>${disciplina.nome}</h2>
        <p>Carga horária: ${disciplina.cargaHoraria}</p>
        <p>Sala: ${disciplina.local}</p>
        <hr>
      </section>
    `;

    document.querySelector('script').insertAdjacentHTML('beforebegin', result);
  }
}

// console.log(disciplinas);
