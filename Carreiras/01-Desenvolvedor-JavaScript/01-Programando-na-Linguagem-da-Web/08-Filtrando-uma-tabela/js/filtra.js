let campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", () => {
    let pacientes = document.querySelectorAll(".paciente");

    pacientes.forEach(paciente => {
        let tdNome = paciente.querySelector(".info-nome");
        let nome = tdNome.textContent;
        if(nome != campoFiltro.value && campoFiltro.value.length > 0) {
            paciente.classList.add("invisivel");
        } else {
            paciente.classList.remove("invisivel");
        }
    }); 
});
