class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document); // associando a função a variável $. Estilo jQuery. Devo colocar o bind para que a função saiba que quero manter o contexto

        this.inputData = $('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }

    adiciona(event) {
        event.preventDefault();

        console.log(this.inputData.value);
        console.log(this.inputQuantidade.value);
        console.log(this.inputValor.value);
    }
}

/*
Devo evitar de pecorrer o DOM. Por isso, eu uso no constructor()
*/
