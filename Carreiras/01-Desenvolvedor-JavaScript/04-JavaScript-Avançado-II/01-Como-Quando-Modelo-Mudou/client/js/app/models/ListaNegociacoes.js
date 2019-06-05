class ListaNegociacoes {
    constructor() {
        this._negociacoes = [];
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }

    get negociacoes() {
        return [].concat(this._negociacoes);
    }

    // este método esvazia as negociações do modelos para que elas sejam apagadas da view
    esvazia() {
        this._negociacoes = [];
    }
}
