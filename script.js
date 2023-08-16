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
const editarBtn = document.getElementById("editar-btn");
const cancelarBtn = document.getElementById("cancelar-btn");

let editingStudent = null;
const estudantes = [];

estudanteForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const idade = parseInt(document.getElementById("idade").value);
    const curso = document.getElementById("curso").value;

    if (editingStudent) {
        // Atualizar o estudante editado
        editingStudent.nome = nome;
        editingStudent.idade = idade;
        editingStudent.curso = curso;
        updateStudentList();
        editingStudent = null;
        estudanteForm.reset();
        editarBtn.style.display = "none";
        cancelarBtn.style.display = "none";
    } else {
        // Adicionar um novo estudante
        const estudante = new Estudante(nome, idade, curso);
        estudantes.push(estudante);
        updateStudentList();
        estudanteForm.reset();
    }
});

function updateStudentList() {
    estudanteList.innerHTML = "";

    estudantes.forEach((estudante, index) => {
        const estudanteContent = document.createElement("div");
        estudanteContent.classList.add("estudante");

        const estudanteText = document.createElement("p");
        estudanteText.innerText = `${estudante.apresentar()}\n${estudante.estudar()}`;

        const editButton = document.createElement("button");
        editButton.innerText = "Editar";
        editButton.addEventListener("click", function () {
            document.getElementById("nome").value = estudante.nome;
            document.getElementById("idade").value = estudante.idade;
            document.getElementById("curso").value = estudante.curso;
            editarBtn.style.display = "inline-block";
            cancelarBtn.style.display = "inline-block";
            editingStudent = estudante;
        });

        const removeButton = document.createElement("button");
        removeButton.innerText = "Remover";
        removeButton.addEventListener("click", function () {
            estudantes.splice(index, 1);
            updateStudentList();
        });

        estudanteContent.appendChild(estudanteText);
        estudanteContent.appendChild(editButton);
        estudanteContent.appendChild(removeButton);

        estudanteList.appendChild(estudanteContent);
    });
}

cancelarBtn.addEventListener("click", function () {
    estudanteForm.reset();
    editarBtn.style.display = "none";
    cancelarBtn.style.display = "none";
    editingStudent = null;
});

updateStudentList();
