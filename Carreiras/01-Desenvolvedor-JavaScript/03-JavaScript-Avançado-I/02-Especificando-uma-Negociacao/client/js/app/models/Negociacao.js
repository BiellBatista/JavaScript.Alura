class Negociacao {
    constructor (data, quantidade, valor){
        //declarando os atributos da classe
        this._data = new Date(data.getTime()); // Gerando um novo objeto, a partir do recebido. Isso é para remover a mesma referência e, consequetemente, evitar que o atributo seja alterado por fora, pois a referência é a mesma
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
        // return this._data;
        return new Date(this._data.getTime()); // retornando um objeto para evitar alterações. Isso se chama, programação defensiva
    }
}

/*
O método Object.freeze() é ralo, fica na superficie, porque eu posso alterar as propriedades de uma propriedade
do tipo obejto. Como por exemplo, a data, pois o freeze() congela o objeto do this e não os objetos da componetização


Em programação defensiva, devo retornar uma copia do atributo (como fiz na data) e devo gerar uma nova referência, no construtor, de um atributo
para evitar que a referência seja a mesma que a de fora (como fiz na data)
*/