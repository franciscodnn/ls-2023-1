const TESTE = 50;

function imprimirNumerosPrimos(numeroMaximo = 50) {
  for (let i = 1; i <= numeroMaximo; i++) {
    const eNumeroPrimo = verificarNumeroPrimo(i);

    if (eNumeroPrimo === true) {
      console.log(i);
    }
  }
}

function verificarNumeroPrimo(numero) {
  let result = false;
  let qtdRestoIgualZero = 0;

  for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) qtdRestoIgualZero++;
  }

  if (qtdRestoIgualZero === 2) result = true;

  return result;
}

export default imprimirNumerosPrimos;

export { imprimirNumerosPrimos, verificarNumeroPrimo, TESTE };
