class Empresa {
  #name;
  #founded;
  #industry;
  #kind;

  constructor(name, founded, industry, kind) {
    this.#name = name;
    this.#founded = founded;
    this.#industry = industry;
    this.#kind = kind;
  }

  obterDados() {
    let result = '';

    result = `${this.#name.padEnd(15, '.')}`;
    result += `${this.#founded}`;

    return result;
  }
}

export { Empresa };
