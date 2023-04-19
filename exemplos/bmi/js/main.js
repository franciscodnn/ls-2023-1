function calculadoraDeIMC() {
  const inputAltura = document.querySelector('#altura');
  const inputPeso = document.querySelector('#peso');
  const inputRadioSexo = document.querySelector('input[type="radio"]:checked');

  // const IMC = inputPeso.value / (inputAltura.value ** 2);
  const IMC =
    Number(inputPeso.value) /
    (Number(inputAltura.value) * Number(inputAltura.value));

  let condicaoPessoa = '';
  let classesCSS = '';
  if (inputRadioSexo.value == 'feminino') {
    if (IMC < 19.1) {
      condicaoPessoa = 'Abaixo do Peso';
      classesCSS = 'border border-warning bg-warning text-white';
    } else if (IMC >= 19.1 && IMC < 25.8) {
      condicaoPessoa = 'Peso Normal';
      classesCSS = 'border border-sucess bg-success text-white';
    } else if (IMC >= 25.8 && IMC < 27.3) {
      condicaoPessoa = 'Marginalmente Acima do Peso';
      classesCSS = 'border border-warning bg-warning text-white';
    } else if (IMC >= 27.3 && IMC < 32.3) {
      condicaoPessoa = 'Acima do Peso Ideal';
      classesCSS = 'border border-warning bg-warning text-white';
    } else if (IMC >= 32.3) {
      condicaoPessoa = 'Obeso';
      classesCSS = 'border border-danger bg-danger text-white';
    }
  } else if (inputRadioSexo.value == 'masculino') {
    if (IMC < 20.7) {
      condicaoPessoa = 'Abaixo do Peso';
      classesCSS = 'border border-warning bg-warning text-white';
    } else if (IMC >= 20.7 && IMC < 26.4) {
      condicaoPessoa = 'Peso Normal';
      classesCSS = 'border border-sucess bg-success text-white';
    } else if (IMC >= 26.4 && IMC < 27.8) {
      condicaoPessoa = 'Marginalmente Acima do Peso';
      classesCSS = 'border border-warning bg-warning text-white';
    } else if (IMC >= 27.8 && IMC < 31.1) {
      condicaoPessoa = 'Acima do Peso Ideal';
      classesCSS = 'border border-warning bg-warning text-white';
    } else if (IMC >= 31.1) {
      condicaoPessoa = 'Obeso';
      classesCSS = 'border border-danger bg-danger text-white';
    }
  }

  const inputIMC = document.querySelector('#imc');
  inputIMC.value = condicaoPessoa;

  inputIMC.setAttribute('class', classesCSS);
  console.log(`${inputRadioSexo.value}, ${condicaoPessoa}`);
}

document
  .querySelector('.container')
  .addEventListener('keyup', function (evento) {
    // console.log(evento);

    if (evento.key == 'Enter') {
      calculadoraDeIMC();
    }

    if (evento.key == 'Escape') {
      document.querySelector('#altura').value = '';
      document.querySelector('#peso').value = '';
      document.querySelector('#imc').value = '';
      document.querySelector('input[type="radio"]:checked').checked = false;
    }
  });
