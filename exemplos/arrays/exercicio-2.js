let array = [10, 5];
// let arrayAsObject = new Array(10, 5);

// console.log(array[0]);
array[0] = 2;
// console.log(array[0]);

array = [10, 5, 'LS', { nome: 'Francisco', disciplina: 'LS' }, [5, 10, 20]];
// console.log(array[3].disciplina);
// console.log(array[4][1]);

let array1 = [1, 2, 3];
let array2 = [5, 6, 7];

// console.log(array1.join(" - "));

array = [array1, array2];
// console.log(array);
// console.log(array[0][0]);

// array = [array1, array2];
array = [...array1, ...array2];
// array = [...array1, ...array2]
// array = [ 1, 2, 3, ...array2]
// array = [ 1, 2, 3, 5, 6, 7];

// console.log(array1.concat(array2));
// console.log(array[4]);

// console.log(array1);
// console.log(array2);

let arrayResultante = [...array1, ...array2];
arrayResultante = array1.concat(array2);

// console.log(arraySoma);
// console.log(typeof arraySoma);

array = [1, 2, 3, 'LS', true];
array.forEach((elem) => {
  // console.log(elem);
});
/*
for(const indice in array){
  console.log(typeof array[indice]);
}
*/
/*
for(const elem of array){
  console.log(typeof elem);
}
*/
/*
for(let i = 0; i < array.length; i++){
  console.log(typeof array[i]);
}
*/

// let arrayMax = [1, 50, 4];
// console.log(Math.max(...arrayMax));

array = [1, 2, 3];
// console.log(array.join(" - "));
// console.log(array.length);
array.push(5);
array.push(10);
array.unshift(0);
// console.log(array);

array.pop();
array.shift();
// console.log(array);

array.splice(1, 2);
// console.log(array);

array.splice(1, 0, 2, 3, 4);
// console.log(array);

array = [50, 5, 10, 25];
console.log(
  array.sort(function (a, b) {
    return b - a;
  })
);

// console.log(array.reverse());

// console.log(array.includes(8));
// console.log(array.slice(1, 3));

const novoArrayMap = array.map(function (x) {
  return x ** 2; // x**2 = x * x
});

console.log(novoArrayMap);
console.log(
  array.filter(function (elem) {
    if (elem % 2 === 0) return true;

    return false;
  })
);

console.log(
  array.reduce(function (total, elem) {
    return total + elem;
  }, 0)
);
