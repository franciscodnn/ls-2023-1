document.querySelectorAll('.digits.flex > button').forEach((botao) => {
  botao.addEventListener('click', function (evento) {
    console.log(evento.target.innerHTML);
  });
});
