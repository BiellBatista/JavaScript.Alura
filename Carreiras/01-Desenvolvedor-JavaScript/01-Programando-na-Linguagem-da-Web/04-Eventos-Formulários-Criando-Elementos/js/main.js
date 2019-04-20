let titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelectorAll(".paciente");

paciente.forEach(element => {
    let peso = element.querySelector(".info-peso").textContent;
    let altura = element.querySelector(".info-altura").textContent;
    let tdImc = element.querySelector(".info-imc");

    if(peso <= 0 || peso >= 1000) {
        tdImc.textContent = "Peso inválido!";
        element.classList.add("paciente-invalido");
    } else if (altura <= 0 || altura > 3.00) {
        tdImc.textContent = "Altura inválida!";
        element.classList.add("paciente-invalido");
    } else {
        let imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
});

// titulo.addEventListener("click", mostraMensagem); //adicionando novo escutador de eventos (clicks, passando mouse...). Vou escutar o evento de click e executar a função mostraMensagem
titulo.addEventListener("click", () => {
    console.log("Olá eu fui clicado!");
}); //adicionando novo escutador de eventos (clicks, passando mouse...). Vou escutar o evento de click e executar uma função anonima

function mostraMensagem() {
    console.log("Olá eu fui clicado!");
}

let botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", () => {
    console.log("Oi cliquei no botão!");
});

/*
O problema está nessa linha:

botao.addEventListener('click', botaoHandler());
Em vez de associar a função botaoHandler para o evento click, ela acabou associando o retorno da função, ao adiciona-la usando parênteses. Como a função não retorna nada, o código que será executado será igual a nada quando o botão for clicado. Para corrigirmos o código, basta retirarmos os parênteses:

botao.addEventListener('click', botaoHandler);
Veja que não estamos mais chamando a função, mas passando-a por inteiro para o evento click . Quando o botão for clicado, por debaixo dos panos, o navegador executará botaoHandler() para nós.


Ele sabe que todo elemento de entrada, isto é, que recebe entrada do usuário possui a propriedade value enquanto elementos que exibem informações apenas possuem a propriedade textContent como é o caso da nossa tag span.
*/