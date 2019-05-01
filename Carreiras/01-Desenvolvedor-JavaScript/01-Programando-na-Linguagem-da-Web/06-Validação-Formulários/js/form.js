let botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", (event) => {
    event.preventDefault(); //previnindo o comportamento padrão do botão. Assim, o botão não enviar os dados do form e não recarrega a página
    
    let form = document.querySelector("#form-adiciona");
    let tabela = document.querySelector("#tabela-pacientes");
    
    let paciente = obtemPacienteDoFormulario(form);
    let pacienteTr = montaTr(paciente);
    
    if(!validaPaciente(paciente)) {
        alert("Paciente inválido!");
        return;
    }

    tabela.appendChild(pacienteTr);
    form.reset();
});

function obtemPacienteDoFormulario(form) {
    let nome = form.nome.value;
    let peso = form.peso.value;
    let altura = form.altura.value;
    let gordura = form.gordura.value;
    let imc = calculaImc(peso, altura)

    //object short index. Pegando as variáveis de cima e usando como atributo no objeto
    let paciente = {
        nome,
        peso,
        altura,
        gordura,
        imc
    }

    return paciente;
}

function montaTr(paciente) {
    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe){
    let td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {
    if(validaPeso(paciente.peso) && validaAltura(paciente.altura)) {
        return true;
    } else {
        return false;
    }
}
