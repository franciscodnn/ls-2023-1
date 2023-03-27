import { Docente } from './Docente.js';

const dFrancisco = new Docente(
  'Francisco',
  'Dantas',
  36,
  'dantas.nobre@ifpb.edu.br'
);

const dMaria = new Docente('Maria', 'de Fátima', 30, 'maria@ifpb.edu.br');

dFrancisco.imprimirDados();
dMaria.imprimirDados();
