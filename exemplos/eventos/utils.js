function tratarClique() {
  const inputNome = document.querySelector('#nome');
  const inputEmail = document.querySelector('#email');
  const inputMatricula = document.querySelector('#matricula');

  console.log(
    `${inputNome.value}, ${inputEmail.value}, ${inputMatricula.value}`
  );
  inputNome.value = '';
  inputEmail.value = '';
  inputMatricula.value = '';
}

function imprimirDados() {
  const inputNome = document.querySelector('#nome');
  const inputEmail = document.querySelector('#email');
  const inputMatricula = document.querySelector('#matricula');
  const inputModalidadeCurso = document.querySelector(
    'input[type="radio"]:checked'
  );

  const resposta = document.querySelector('#resposta');

  resposta.innerHTML = `${inputNome.value}, ${inputEmail.value}, ${inputMatricula.value}, ${inputModalidadeCurso.value}`;

  inputNome.value = '';
  inputEmail.value = '';
  inputMatricula.value = '';
}

document.querySelector('form').addEventListener('keypress', function (event) {
  console.log(event);

  if (event.key == 'Enter') {
    imprimirDados();
  }
});

document.querySelector('button').addEventListener('click', function () {
  imprimirDados();
});

document.querySelector('button').addEventListener('click', function () {
  alert('Botão clicado!');
});
