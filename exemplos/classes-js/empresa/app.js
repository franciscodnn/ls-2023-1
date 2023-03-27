import { Empresa } from './Empresa.js';

const amazon = new Empresa(
  'Amazon',
  1994,
  'E-Commerce, Cloud',
  'Internet company'
);

const facebook = new Empresa('Facebook', 2004, 'Social', 'Internet company');
const alphabet = new Empresa(
  'Alphabet Inc.',
  2015,
  'Search, Cloud, Advertising',
  'Internet company'
);

const empresas = [amazon, facebook, alphabet];

for (const empresa of empresas) {
  console.log(empresa.obterDados());
}
