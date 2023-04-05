function tratarClique() {
  const inputNome = document.querySelector('#nome');
  const inputEmail = document.querySelector('#email');
  const inputMatricula = document.querySelector('#matricula');

  console.log(
    `${inputNome.value}, ${inputEmail.value}, ${inputMatricula.vallue}`
  );
  inputNome.value = '';
  inputEmail.value = '';
  inputMatricula.value = '';
}
