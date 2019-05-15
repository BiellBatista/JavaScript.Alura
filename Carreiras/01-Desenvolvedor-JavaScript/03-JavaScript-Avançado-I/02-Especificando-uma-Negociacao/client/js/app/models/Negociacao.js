class Negociacao {
    constructor (data, quantidade, valor){
        //declarando os atributos da classe
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }

    obtemVolume() {
        return this.quantidade * this.valor;
    }
}