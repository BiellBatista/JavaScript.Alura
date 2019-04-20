let titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelectorAll(".paciente");

paciente.forEach(element => {
    let peso = element.querySelector(".info-peso").textContent;
    let altura = element.querySelector(".info-altura").textContent;
    let tdImc = element.querySelector(".info-imc");

    if(peso <= 0 || peso >= 1000) {
        tdImc.textContent = "Peso inválido!";
    } else if (altura <= 0 || altura > 3.00) {
        tdImc.textContent = "Altura inválida!";
    } else {
        let imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
});
