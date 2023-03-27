/*
-> Criar um programa em JS para imprimir todos os 
números primos na faixa de valores de 1 a 50.
*/

// import obterNumerosPrimos from './funcoes.js';

// obterNumerosPrimos();
// console.log('--------');
// obterNumerosPrimos(20);

import {
  imprimirNumerosPrimos,
  verificarNumeroPrimo,
  TESTE,
} from './funcoes.js';
/*
console.log(verificarNumeroPrimo(5));
console.log(verificarNumeroPrimo(8));
console.log(verificarNumeroPrimo(19));

console.log(TESTE);
*/

function soma(...parametros) {
  // console.log(parametros.length);

  let result = 0;

  for (let i = 0; i < parametros.length; i++) {
    result = parametros[i] + result;
  }

  return result;
}

console.log(soma(1, 2));
console.log(soma(1, 2, 5));
console.log(soma(1, 2, 5, 8));
