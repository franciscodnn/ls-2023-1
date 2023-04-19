function loadEvents() {
  document.querySelectorAll('.digits.flex > button').forEach((botao) => {
    botao.addEventListener('click', function (evento) {
      const visor = document.querySelector('.wrapper h1');

      if (visor.innerHTML == '0') visor.innerHTML = '';

      visor.innerHTML += evento.target.innerHTML;
    });
  });

  document.querySelectorAll('.operations.subgrid > button').forEach((botao) => {
    botao.addEventListener('click', function (evento) {
      const visor = document.querySelector('.wrapper h1');

      if (evento.target.innerHTML == '=') {
        const resultado = calcular();
        visor.innerHTML = resultado;
      } else {
        visor.innerHTML += evento.target.innerHTML;
      }
    });
  });
}

function calcular() {
  const visor = document.querySelector('.wrapper h1');

  let operandos = visor.innerHTML.split('+');

  let resultado = Number(operandos[0]) + Number(operandos[1]);

  return resultado;
}
