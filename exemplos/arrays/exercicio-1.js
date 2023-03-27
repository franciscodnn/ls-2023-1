// const numbers = [1, 2, 3];
/*
const numbers = new Array(1, 2, 3);
console.log([...numbers, 4, 5]); //=> [ 1, 2, 3, 4, 5 ]
console.log([numbers, 4, 5]);

let x = [4, 2];
console.log(x.length);

x = new Array(4, 2);
console.log(x.length);
console.log(x);


let array = [2, 4, 6, 5];
console.log(array.every((value) => value % 2 == 0)); //=> true

array = [1, 3, 9, 5, 4];
console.log(array.some((value) => value % 2 == 0)); 
*/

function sum(array) {
  let result = 0;

  // Resposta 1
  /*
  result = array.reduce(function(total, valorAtual){
    return total + valorAtual;
  }, 0);
  */

  // Resposta 2
  for (const valorAtual of array) {
    result = result + valorAtual;
  }

  return result;
}

// console.log( sum([1, 2, 3, 4, 5]) );

function sumOdds(array) {
  let result = 0;

  /*
  for (const valorAtual of array) {
    if (valorAtual % 2 !== 0) {
      // result = result + valorAtual;
      result += valorAtual;
    }
  }
  */

  result = array
    .filter(function (valorAtual) {
      return valorAtual % 2 === 1;
    })
    .reduce(function (total, valorAtual) {
      return total + valorAtual;
    }, 0);

  return result;
}

// console.log(sumOdds([1, 2, 3])); // 1 + 3 + 5

function min(array) {
  let menorValor = Infinity;

  for (const valorAtual of array) {
    if (valorAtual < menorValor) {
      menorValor = valorAtual;
    }
  }

  /*
  array.reduce( (total, valor) => {
    // return (valor < total)?valor:total;
    console.log(valor + ' , ' + total);
    
    if(valor < total) return valor;
    else return total;
  }, Infinity);
  */

  return menorValor;
}

// console.log( min([5, 4, 9, -2, 1, 3]) ); // 1

function products(array) {
  let result = 0;

  result = array.reduce((total, valorAtual) => {
    return total * valorAtual;
  }, 1);

  return result;
}

console.log(products([1, 2, 3, 4, 5, 6]));
