import fetch from 'node-fetch';

let idade = 40;
let nome = 'José';
let eProfessor = true;

let docente = {};

docente = {
  idade: 40,
  primeiroNome: 'Francisco',
  sobrenome: 'Dantas',
  eProfessor: true,
  obterNomeCompleto: function () {
    return this.primeiroNome + ' ' + this.sobrenome;
  },
};

// console.log(docente.primeiroNome);
// console.log(docente.idade);
// console.log(docente.eProfessor);
// console.log(docente.obterNomeCompleto());
docente.email = 'dantas.nobre@ifpb.edu.br';

let novoDocente = { ...docente, instituicao: 'IFPB' };
novoDocente.primeiroNome = 'José';

// console.log(docente.instituicao);
// console.log(novoDocente['email']);

for (const propriedade in novoDocente) {
  // console.log(`${propriedade} --- ${novoDocente[propriedade]}`);
}

const estudantes = {
  110: { nome: 'Francisco', curso: 'TSI' },
  111: { nome: 'Caroline', curso: 'TSI' },
  112: { nome: 'Luiz', curso: 'TSI' },
};

// console.log(estudantes['110'].nome);
// console.log(estudantes['112'].curso);

for (const matriculas in estudantes) {
  // console.log(`${matriculas} - ${estudantes[matriculas]['nome']}`);
}

// console.log(estudantes.m110.nome);
// console.log(estudantes.m112.curso);

// ----------------------------
// JSON - JavaScript Object Notation
const carro = {
  nomeCarro: 'Uno',
  marca: 'Fiat',
  anoDeFabricacao: 2018,
};

const carroJSON = {
  nomeCarro: 'Uno',
  marca: 'Fiat',
  anoDeFabricacao: 2018,
};
/*
fetch('https://viacep.com.br/ws/58015435/json')
  .then((resposta) => {
    return resposta.json();
  })
  .then((dados) => {
    console.log(dados.logradouro);
  });
*/
/*
let idade = 40;
let nome = 'José';
let eProfessor = true;
*/
const docentePorVariaveis = {
  nome,
  idade,
  ehProfessor: eProfessor,
};
/*
nome = 'Professor 1';
console.log(docentePorVariaveis);
*/

/*
const carro = {
  nomeCarro: 'Uno',
  marca: 'Fiat',
  anoDeFabricacao: 2018,
};
*/
// let nomeCarro = carro.nomeCarro;
// let marca = carro.marca;
// let anoDeFabricacao = carro.anoDeFabricacao;

let { nomeCarro, marca, anoDeFabricacao } = carro;

// console.log(anoDeFabricacao);

fetch('https://viacep.com.br/ws/58015435/json')
  .then((resposta) => {
    return resposta.json();
  })
  .then((dados) => {
    // console.log(dados);
  });

const retornoCEP = `{
    "cep": "58015-435",
    "logradouro": "Avenida Primeiro de Maio",
    "complemento": "de 487/488 ao fim",
    "bairro": "Jaguaribe",
    "localidade": "João Pessoa",
    "uf": "PB",
    "ibge": "2507507",
    "gia": "",
    "ddd": "83",
    "siafi": "205"
  }`;

// console.log(retornoCEP.logradouro);

// console.log(JSON.parse(retornoCEP).logradouro);

/*
const carro = {
  nomeCarro: 'Uno',
  marca: 'Fiat',
  anoDeFabricacao: 2018,
};
*/

console.log(carro);

console.log(JSON.stringify(carro).nomeCarro);
