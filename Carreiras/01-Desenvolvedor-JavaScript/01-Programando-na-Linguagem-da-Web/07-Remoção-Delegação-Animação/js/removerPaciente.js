var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(paciente => {
    paciente.addEventListener("dblclick", function() {
        this.remove();
    });

    /*
    paciente.addEventListener("dblclick", () => {
        paciente.remove();
    });
    */
})
