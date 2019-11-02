var criaJogo = function (sprite) {
    var etapa = 1;
    var lacunas = [];
    var palavraSecreta = '';

    var criaLacunas = function () {
        lacunas = Array(palavraSecreta.length).fill('');
    };

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

    var processaChute = function(chute) {
        var exp = new RegExp(chute, 'gi');
        var resultado;
        var acertou = false;

        while (resultado = exp.exec(palavraSecreta)) {
            acertou = lacunas[resultado.index] = chute;
        }

        if (!acertou) {
            sprite.nextFrame();
        }
    };

    var ganhou = function () {
        console.log('falta implementar');
    };

    var perdeu = function () {
        console.log('falta implementar');
    };

    var ganhouOuPerdeu = function () {
        console.log('falta implementar');
    };

    var reinicia = function () {
        console.log('falta implementar');
    };

    return {
        setPalavraSecreta,
        getLacunas,
        getEtapa,
        processaChute,
        ganhou,
        perdeu,
        ganhouOuPerdeu,
        reinicia
    };
};
