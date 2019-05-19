class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document); // associando a função a variável $. Estilo jQuery. Devo colocar o bind para que a função saiba que quero manter o contexto

        this._inputData = $('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }

    adiciona(event) {
        event.preventDefault();

        // console.log(this._inputData.value); // 2019-05-15
        // console.log(this._inputData.value.split('/')); // ["2019-05-15"]
        // let inputDataSplit = this._inputData.value.split('/'); // Isso gera um array [ANO, MÊS, DIA]
        // let inputDataSplit = this._inputData.value.replace(/-/g, ','); //trocando todos os - pela ",", ficando "DIA,MÊS,ANO"
        // let data = new Date(inputDataSplit);
        //spread operator
        let data = new Date(...
            this._inputData
                .value
                .split('-')
                .map(function(item, indice) {
                    return item - indice % 2;
                })
            );

        // let negociacao = new Negociacao(
        //     data,
        //     this._inputQuantidade.value,
        //     this._inputValor.value
        // );

        console.log(data);
    }
}

/*
Devo evitar de pecorrer o DOM. Por isso, eu uso no constructor()
*/
