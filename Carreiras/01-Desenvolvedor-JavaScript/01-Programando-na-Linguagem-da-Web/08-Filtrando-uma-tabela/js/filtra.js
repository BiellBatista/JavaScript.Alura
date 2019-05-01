let campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", () => {
    console.log(campoFiltro.value);
    let pacientes = document.querySelectorAll(".paciente");

    pacientes.forEach(paciente => {
        let tdNome = paciente.querySelector(".info-nome");
        let nome = tdNome.textContent;

        console.log(nome);
    }); 
});
