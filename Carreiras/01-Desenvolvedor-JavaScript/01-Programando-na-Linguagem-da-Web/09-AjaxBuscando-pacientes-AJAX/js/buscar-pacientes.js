let botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", () => {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); //abrindo conexão com o servidor
    
    xhr.addEventListener("load", () => {
        let response = xhr.responseText;
        let pacientes = JSON.parse(response);

        pacientes.forEach(paciente => {
            adicionaPacienteNaTabela(paciente);
        });

    }); //configurando um evento de escuta para que seja executado uma função após o response

    xhr.send(); //enviando a requisição (GET)
});
