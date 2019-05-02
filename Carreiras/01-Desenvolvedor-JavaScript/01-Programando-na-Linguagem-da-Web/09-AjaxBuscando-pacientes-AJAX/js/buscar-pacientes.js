let botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", () => {
    console.log("Buscando pacientes");

    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); //abrindo conexão com o servidor
    
    xhr.addEventListener("load", () => {
        console.log(xhr.responseText);
    }); //configurando um evento de escuta para que seja executado uma função após o response

    xhr.send(); //enviando a requisição (GET)
});
