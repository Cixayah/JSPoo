class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}

class Estudante extends Pessoa {
    constructor(nome, idade, curso) {
        super(nome, idade);
        this.curso = curso;
    }
    estudar() {
        return `${this.nome} está estudando ${this.curso}.`;
    }
}

const pessoa1 = new Pessoa("Gabriel", 26);
const pessoa2 = new Pessoa("Larissa", 23);
const pessoa3 = new Pessoa("Davi", 16);

const estudante1 = new Estudante(pessoa3.nome, pessoa3.idade, "Técnico em Informática");
const estudante2 = new Estudante(pessoa2.nome, pessoa2.idade, "Análise e Desenvolvimento de Sistemas");
const estudante3 = new Estudante(pessoa3.nome, pessoa3.idade, "no Ensino Médio");

const container = document.createElement("div");
container.classList.add("container");

const content = document.createElement("p");
content.innerText = `${estudante1.apresentar()}\n${estudante1.estudar()}`;
container.appendChild(content);

const content2 = document.createElement("p");
content2.innerText = `${estudante2.apresentar()}\n${estudante2.estudar()}`;
container.appendChild(content2);

const content3 = document.createElement("p");
content3.innerText = `${estudante3.apresentar()}\n${estudante3.estudar()}`;
container.appendChild(content3);

document.body.appendChild(container);
