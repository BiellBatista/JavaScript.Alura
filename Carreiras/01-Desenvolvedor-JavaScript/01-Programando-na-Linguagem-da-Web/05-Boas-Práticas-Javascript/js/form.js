let botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", (event) => {
    event.preventDefault(); //previnindo o comportamento padrão do botão. Assim, o botão não enviar os dados do form e não recarrega a página

    let form = document.querySelector("#form-adiciona");
    let tabela = document.querySelector("#tabela-pacientes");

    //form.X permite capturar, pelo o id, o campo de input e acessar seu valor ou qualquer atributo
    // console.log(form.altura); //<input id="altura" name="altura" type="text" placeholder="digite a altura do seu paciente" class="campo campo-medio">
    // console.log(form.altura.value); //valor adicionado no input

    let paciente = obtemPacienteDoFormulario(form);

    //criando TR e TD do paciente
    let pacienteTr = document.createElement("tr"); //criando uma tag <tr></tr>
    let nomeTd = document.createElement("td"); //criando uma tag <td></td>
    let pesoTd = document.createElement("td");
    let alturaTd = document.createElement("td");
    let gorduraTd = document.createElement("td");
    let imcTd = document.createElement("td");

    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent= paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    // imcTd.textContent = (peso / (altura * altura)).toFixed(2);
    // imcTd.textContent = calculaImc(paciente.peso, paciente.altura);
    imcTd.textContent = paciente.imc;
    
    pacienteTr.classList.add("paciente");
    nomeTd.classList.add("info-nome");
    pesoTd.classList.add("info-peso");
    alturaTd.classList.add("info-altura");
    gorduraTd.classList.add("info-gordura");
    imcTd.classList.add("info-imc");

    pacienteTr.appendChild(nomeTd); // adicionando uma nova tag dentro de outra tag. Tipo um <form><body></body></form>
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    //adicioando o paciente na tabela
    tabela.appendChild(pacienteTr); // adicionado o conjunto de <tr></tr> dentro da lista de pacientes
    
    console.log(pacienteTr);
    /*
    <tr>
        <td class="info-nome">Gabriel de Almeida Batista</td>
        <td class="info-peso">100</td><td class="info-altura">2</td>
        <td class="info-gordura">10</td><td class="info-imc">25.00</td>
    </tr>
    */
});

function obtemPacienteDoFormulario(form) {
    //extraindo informacoes do paciente do form
    let nome = form.nome.value; //pegando o valor inserido no input de id nome
    let peso = form.peso.value;
    let altura = form.altura.value;
    let gordura = form.gordura.value;
    let imc = calculaImc(peso, altura)

    let paciente = {
        nome,
        peso,
        altura,
        gordura,
        imc
    }

    return paciente;
}
