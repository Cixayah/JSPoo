class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}
const pessoa1 = new Pessoa("Gabriel", 26);
const pessoa2 = new Pessoa("Larissa", 23);
const pessoa3 = new Pessoa("Davi", 16);

class Estudante extends Pessoa {
    constructor(nome, idade, curso) {
        super(nome, idade);
        this.curso = curso;
    }
    estudar() {
        console.log(`${this.nome} está estudando ${this.curso}.`);
    }
}
const estudante1 = new Estudante(pessoa3.nome, pessoa3.idade, "Técnico em Informática");
estudante1.apresentar(); // Saída: Olá, meu nome é Gabriel e tenho 26 anos.
estudante1.estudar(); // Saída: Gabriel está estudando Técnico em Informática.
console.log(); //Apenas para pular linha
const estudante2 = new Estudante(pessoa2.nome, pessoa2.idade, "Análise e Desenvolvimento de Sistemas");
estudante2.apresentar(); // Saída: Olá, meu nome é Larissa e tenho 23 anos.
estudante2.estudar(); // Saída: Larissa está estudando Análise e Desenvolvimento de Sistemas.
console.log(); //Apenas para pular linha
const estudante3 = new Estudante(pessoa3.nome, pessoa3.idade, "no Ensino Médio");
estudante3.apresentar(); // Saída: Olá, meu nome é Davi e tenho 16 anos.
estudante3.estudar(); //Saída: Davi está estudando no Ensino Médio.