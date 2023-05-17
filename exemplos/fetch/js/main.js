async function getCEP(cep) {
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  const responseHTML = await fetch(url);
  const data = await responseHTML.json();

  return data;
}

const informacoesCEP = await getCEP('58015435');
console.log(informacoesCEP.logradouro);
