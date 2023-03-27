let str = 'JavaScript';
// console.log(str);

str = 'JavaScript';
// console.log(str);

// console.log("JavaScript");

// let citacao = 'De acordo com Maria, \'O IFPB é uma excelente instituição\'.';

// console.log(citacao);

// console.log("<img src=\"https://www.ifpb.edu.br/imagens/logotipos/ifpb-1\" >");

// console.log("PI (\u03C0) = 3,14");
// console.log("Quebra de \nlinha");

// str = "PI = ";
// console.log(str - "3,14");

str = `PI = `;
valor = 3.14;
// console.log("O valor de " + str + valor);
// console.log(`O valor de ${str} ${valor}`);

/* Métodos da Biblioteca string */
let citacao = "De acordo com Maria, 'O IFPB é uma excelente instituição'.";

// console.log(`A quantidade de caracteres é ${citacao.length}`);

// console.log(citacao[0]);
citacao[0] = 'A';
// console.log(citacao);

let result = citacao.split(' ');
// console.log(result);

result[1] = result[1].toUpperCase();
// console.log(result);

citacao = result.join(' ').toLowerCase();
// console.log( citacao );
// console.log( citacao.charAt(0) );

// console.log( citacao.substr(3, 6) );

// console.log( citacao.substring(-9, -1) );

// console.log("    Olá, Mundo!   ".trimEnd());
/*
console.log("3,1".padStart(5, '0').padEnd(6, '0'));
console.log("100,52".padStart(6, '0'));
console.log("30,35".padStart(6, '0'));

console.log("JavaScript".toUpperCase().includes("A"));

console.log("JS".repeat(2));

console.log("JavaScript".endsWith("JavaScript"));

console.log("J@v@Script".match(/\w/g));

console.log("JavaScript".replaceAll("a", "@"));
*/
console.log('JavaScript'.replace(/a/g, '@'));

console.log('JavaScript'.search(/a/g));

console.log(typeof 'JavaScript');
console.log(typeof String(10));
console.log(typeof new String('JavaScript'));
