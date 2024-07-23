class Hero {
 
   constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    switch (tipo) {
      case "guerreiro":
        this.ataque = "espada";
        break;
      case "mago":
        this.ataque = "magia";
        break;
      case "monge":
        this.ataque = "artes marcias";
        break;
      case "ninja":
        this.ataque = "shuriken";
        break;

      default:
        this.ataque = "as mãos";
        break;
    }
  }

  atacar() {
    console.log(`O ${this.tipo} atacou usando ${this.ataque}`);
  }
};

let Heroi0 = new Hero("Misgh", 23, "guerreiro");
let Heroi1 = new Hero("Turio", 31, "mago");
let Heroi2 = new Hero("Fint", 18, "monge");
let Heroi3 = new Hero("Hiroi", 27, "ninja");

Heroi0.atacar();
Heroi1.atacar();
Heroi2.atacar();
Heroi3.atacar();
