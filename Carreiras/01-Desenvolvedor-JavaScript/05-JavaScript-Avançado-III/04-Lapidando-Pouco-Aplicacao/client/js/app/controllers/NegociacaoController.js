class NegociacaoController {
    constructor() {
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._ordemAtual = '';

        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(),
            new NegociacoesView($('#negociacoesView')),
            'adiciona', 'esvazia', 'ordena', 'inverteOrdem');

        this._mensagem = new Bind(
            new Mensagem(), new MensagemView($('#mensagemView')),
            'texto');

        // ConnectionFactory
        // .getConnection()
        // .then(connection => new NegociacaoDao(connection))
        // .then(dao => dao.listaTodos())
        // .then(negociacoes =>
        //         negociacoes.forEach(negociacao =>
        //             this._listaNegociacoes.adiciona(negociacao)))
        // .catch(error => this._mensagem.texto = error);
    }

    adiciona(event) {
        event.preventDefault();

        ConnectionFactory
            .getConnection()
            .then(connection => {
                let negociacao = this._criaNegociacao();

                new NegociacaoDao(connection)
                    .adiciona(negociacao)
                    .then(() => {
                        this._listaNegociacoes.adiciona(negociacao);
                        this._mensagem.texto = 'Negociação adicionada com sucesso';
                        this._limpaFormulario();
                    });
            })
            .catch(erro => this._mensagem.texto = erro);
    }

    /**
     * o método indexOf() compara a referência do objeto não primitivo (igual ao Java ou C#).
     * negociacoes.filter(negociacao => 
                this._listaNegociacoes.negociacoes.indexOf(negociacao) == -1
            )
     * Para contornar este problema, basta conver o objeto para uma string JSON.stringify(objeto)
     * e comparar o resultado
     */
    importaNegociacoes() {
        let service = new NegociacaoService();
        service
        .obterNegociacoes()
        .then(negociacoes =>
            //o filter serve para filtrar uma conjunto de dados, onde ele retorna o objeto se a condição for verdadeira
            negociacoes.filter(negociacao => 
                //o some serve para verificar se uma lista possui um objeto
                !this._listaNegociacoes.negociacoes.some(
                    negociacaoExistente => JSON.stringify(negociacao) == JSON.stringify(negociacaoExistente))
            )
        )
        .then(negociacoes => {
          negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
          this._mensagem.texto = 'Negociações do período importadas com sucesso';
        })
        .catch(error => this._mensagem.texto = error);
    }

    apaga() {
        ConnectionFactory
            .getConnection()
            .then(connection => new NegociacaoDao(connection))
            .then(dao => dao.apagaTodos())
            .then(mensagem => {
                this._mensagem.texto = mensagem;
                this._listaNegociacoes.esvazia();
            })
            .catch(error => this._mensagem = error);
    }

    _criaNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value));
    }

    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();
    }

    ordena(coluna) {
        if(this._ordemAtual == coluna) {
            this._listaNegociacoes.inverteOrdem();
        } else {
            this._listaNegociacoes.ordena((a, b) => a[coluna] - b[coluna]);
        }
        this._ordemAtual = coluna;
    }
}
