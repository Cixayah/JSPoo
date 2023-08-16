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

const estudanteForm = document.getElementById("estudante-form");
const estudanteList = document.getElementById("estudante-list");

estudanteForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const idade = parseInt(document.getElementById("idade").value);
    const curso = document.getElementById("curso").value;

    const estudante = new Estudante(nome, idade, curso);
    const estudanteContent = document.createElement("div");
    estudanteContent.classList.add("estudante");

    const estudanteText = document.createElement("p");
    estudanteText.innerText = `${estudante.apresentar()}\n${estudante.estudar()}`;

    const removeButton = document.createElement("button");
    removeButton.innerText = "Remover";
    removeButton.addEventListener("click", function () {
        estudanteContent.remove();
    });

    estudanteContent.appendChild(estudanteText);
    estudanteContent.appendChild(removeButton);

    estudanteList.appendChild(estudanteContent);

    estudanteForm.reset();
});
