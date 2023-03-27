class Docente {
  #primeiroNome;
  #sobrenome;
  #idade;
  #email;

  constructor(primeiroNome, sobrenome, idade, email) {
    this.#primeiroNome = primeiroNome;
    this.#sobrenome = sobrenome;
    this.#idade = idade;
    this.#email = email;
  }

  imprimirDados() {
    let result = '';

    result = `Nome do docente: ${this.#primeiroNome} ${this.#sobrenome}`;

    console.log(result);
  }
}

export { Docente };
