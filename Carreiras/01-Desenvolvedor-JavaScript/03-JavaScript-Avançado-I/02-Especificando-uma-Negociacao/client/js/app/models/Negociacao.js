class Negociacao {
    constructor (data, quantidade, valor){
        //declarando os atributos da classe
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;

        Object.freeze(this); // Congelando o objeto na sua construção. Assim, não consigo alterar os seus dados
    }

    // Posso criar os métodos get desse jeito, como abaixo
    getVolume() {
        return this._quantidade * this._valor;
    }

    getValor() {
        return this._valor;
    }

    // Mas também posso usar esses get...
    get quantidade() {
        return this._quantidade;
    }

    get data() {
        return this._data;
    }
}

/*
O método Object.freeze() é ralo, fica na superficie, porque eu posso alterar as propriedades de uma propriedade
do tipo obejto. Como por exemplo, a data, pois o freeze() congela o objeto do this e não os objetos da componitização
*/