class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document); // associando a função a variável $. Estilo jQuery. Devo colocar o bind para que a função saiba que quero manter o contexto

        this._inputData = $('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }

    adiciona(event) {
        event.preventDefault();

        let negociacao = new Negociacao(
            this._inputData.value,
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }
}

/*
Devo evitar de pecorrer o DOM. Por isso, eu uso no constructor()
*/
