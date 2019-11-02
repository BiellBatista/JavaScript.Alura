var criaJogo = function (sprite) {
    var etapa = 1;
    var lacunas = [];
    var palavraSecreta = '';

    // adiciona uma lacuna em branco para cada letra da palavraSecreta
    var criaLacunas = function () {
        // for (let i = 0; i < palavraSecreta.length; i++) {
        //     lacunas.push('');
        // }

        //podemos evitar o loop for da seguinte maneira:
        lacunas = Array(palavraSecreta.length).fill('');
        /*
        Quando fazemos Array(palavraSecreta.length) estamos criando um array com o mesmo tamanho da string palavraSecreta.
        Todavia, todos os elementos serão undefined. Resolvemos isso facilmente através da função fill()
        */
    };

    // muda o estado da variável etapa para indicar a próxima e última etapa
    var proximaEtapa = function () {
        etapa = 2;
    };

    var setPalavraSecreta = function (palavra) {
        palavraSecreta = palavra;
        criaLacunas();
        proximaEtapa();
    };

    var getLacunas = function () {
        return lacunas;
    };

    var getEtapa = function () {
        return etapa;
    };

    // preencher lacuna ou exibe o próximo sprite. Retorna true ou false caso o jogador tenha acertado
    var processaChute = function() {
    };

    /* 
    Tornou acessível apenas as funções que fazem sentido serem chamadas por quem utilizar nosso jogo. 
        A função `proximaEtapa()` é de uso interno e só foi criada para melhorar a legibilidade e manutenção do código, a 
        mesma coisa para a função `criaLacunas()`. 
    */
    return {
        setPalavraSecreta,
        getLacunas,
        getEtapa,
        processaChute
    };
};
