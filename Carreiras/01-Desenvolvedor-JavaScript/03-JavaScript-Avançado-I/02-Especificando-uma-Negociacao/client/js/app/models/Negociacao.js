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

    getData() {
        return this._data;
    }

    // Mas também posso usar esses get...
    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
}