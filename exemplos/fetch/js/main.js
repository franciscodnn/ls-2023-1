async function getCEP(cep) {
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  const responseHTML = await fetch(url);
  const data = await responseHTML.json();

  return data;
}

function preencherCEP(objJSON) {
  const inputCEP = document.querySelector('#cep');
  const inputRua = document.querySelector('#street');
  const inputNumero = document.querySelector('#number');
  const inputBairro = document.querySelector('#neighborhood');
  const inputEstado = document.querySelector('#state');
  const inputCidade = document.querySelector('#city');

  if (objJSON != null) {
    inputRua.value = objJSON.logradouro;
    inputNumero.value = objJSON.complemento;
    inputBairro.value = objJSON.bairro;
    inputEstado.value = objJSON.uf;
    inputCidade.value = objJSON.localidade;
  } else {
    inputRua.value = '';
    inputNumero.value = '';
    inputBairro.value = '';
    inputEstado.value = '';
    inputCidade.value = '';
  }
}

document.querySelector('#cep').addEventListener('keyup', async (event) => {
  const cep = event.target.value;

  if (cep.length === 8) {
    const data = await getCEP(cep);

    preencherCEP(data);
  } else {
    preencherCEP(null);
  }

  // console.log();
});

// const informacoesCEP = await getCEP('58015435');
// console.log(informacoesCEP.logradouro);
