const number1 = 10;
const number2 = 10;
let operator = '*';

// ---- Comandos de Decisão ---- //
let result = 0;
if (operator === '+') {
  result = number1 + number2;
} else if (operator === '-') {
  result = number1 - number2;
} else if (operator === '*') {
  result = number1 * number2;
} else if (operator === '/') {
  result = number1 / number2;
}

result = 0;
operator = '*';
switch (operator) {
  case '+':
    result = number1 + number2;
    break;

  case '-':
    result = number1 - number2;
    break;

  case '*':
    result = number1 * number2;
    break;

  case '/':
    result = number1 / number2;
    break;

  default:
    console.log('Operador não suportado!');
}
// ---- Fim dos Comandos de Decisão ---- //

// ---- Comandos de Repetição ---- //
for (let i = 0; i < 10; i = i + 2) {
  // console.log(i);
}
// console.log('-------');

let i = 11;
while (i < 10) {
  // console.log(i);
  i++;
}
// console.log('--------');

i = 11;
do {
  // console.log(i);
  i++;
} while (i < 10);

// ---- Fim dos Comandos de Repetição ---- //
// console.log(result);

// console.log(number1 !== '10');

// ---- Funções ---- //
function validadorIdade(idade) {
  let result = false;

  if (idade >= 0 && idade <= 120) {
    result = true;
  }

  return result;
}

// const funcaoValidadorIdade = function(idade) {
const funcaoValidadorIdade = (idade) => {
  let result = false;

  if (idade >= 0 && idade <= 120) {
    result = true;
  }

  return result;
};

console.log(funcaoValidadorIdade(50));

// console.log(validadorIdade(-50));
// console.log(validadorIdade(90));
// console.log(validadorIdade(180));

//function calcularOperacoesBasicas(number1, number2, operator = '+') {
const calcularOperacoesBasicas = (number1, number2, operator = '+') => {
  let result = 0;

  switch (operator) {
    case '+':
      result = number1 + number2;
      break;

    case '-':
      result = number1 - number2;
      break;

    case '*':
      result = number1 * number2;
      break;

    case '/':
      result = number1 / number2;
      break;

    default:
      console.log('Operação não suportada!');
  }

  return result;
};

/*
console.log(calcularOperacoesBasicas(50, 30, '+'));
console.log(calcularOperacoesBasicas(5, 3, '*'));
console.log(calcularOperacoesBasicas(50, 30, '-'));
console.log(calcularOperacoesBasicas(50, 10, '/'));

console.log(calcularOperacoesBasicas(50, 30));
*/

// const soma = function(n1, n2){
//const soma = (n1, n2) => {
//  return n1 + n2;
//}
const soma = (n1, n2) => n1 + n2;

/*
console.log(soma(5, 10));
console.log(soma(20, 10));
console.log(soma(30, 10));
*/

function addition(param1, param2) {
  return param1 + param2;
}

function addition(param) {
  return param + 1;
}

console.log(addition(1));
console.log(addition(1, 10));
