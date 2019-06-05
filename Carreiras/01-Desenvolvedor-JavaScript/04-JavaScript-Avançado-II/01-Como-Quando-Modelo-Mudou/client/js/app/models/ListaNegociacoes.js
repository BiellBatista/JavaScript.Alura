class ListaNegociacoes {
    constructor(armadilha) {
        this._negociacoes = [];
        this._armadilha = armadilha;
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
        this._armadilha(this);
    }

    get negociacoes() {
        return [].concat(this._negociacoes);
    }

    // este método esvazia as negociações do modelos para que elas sejam apagadas da view
    esvazia() {
        this._negociacoes = [];
        this._armadilha(this);
    }
}
