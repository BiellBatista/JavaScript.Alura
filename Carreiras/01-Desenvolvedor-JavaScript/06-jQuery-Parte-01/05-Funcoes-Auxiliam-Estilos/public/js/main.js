let campoDigitacao = $('.campo-digitacao');
let tempoInicial = $('#tempo-digitacao').text();
let frase = $('.frase').text();

$(() => {
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
    $('#btn-reiniciar').click(reiniciaJogo);
});

function atualizaTamanhoFrase() {
    let numerosPalavras = frase.split(" ").length;
    let tamanhoFrase = $('#tamanhoFrase');
    tamanhoFrase.text(numerosPalavras);
}

function inicializaContadores () {
    campoDigitacao.on('input', () => {
        let conteudo = campoDigitacao.val();
        let qtdPalavras = conteudo.split(/\S+/).length - 1;
        $('#contador-palavras').text(qtdPalavras);
        $('#contador-caracteres').text(conteudo.length);
    });
}

function inicializaMarcadores() {
    campoDigitacao.on('input', () => {
        let digitado = campoDigitacao.val();
        let comparavel = frase.substr(0, digitado.length);
    
        if(digitado === comparavel) {
            campoDigitacao.addClass('borda-verde');
            campoDigitacao.removeClass('borda-vermelha');
        } else {
            campoDigitacao.addClass('borda-vermelha');
            campoDigitacao.removeClass('borda-verde');
        }
    });
}

function inicializaCronometro() {
    let tempoRestante = $('#tempo-digitacao').text();
    campoDigitacao.one('focus', function () {
        $('#btn-reiniciar').attr('disabled',true);

        let idInterval = setInterval(()=> {
            tempoRestante--;
            $('#tempo-digitacao').text(tempoRestante);
            if(tempoRestante === 0) {
                campoDigitacao.attr('disabled', true);
                $('#btn-reiniciar').attr('disabled', false);
                //alterando o css. Primeiro é o atributo, depois o valor
                // campoDigitacao.css('background-color', 'lightgray');
                //adicionando uma classe
                // campoDigitacao.addClass('campo-desativado');
                //toggleClass adiciona a classe se não possuir, remove se possuir
                campoDigitacao.toggleClass('campo-desativado');
                clearInterval(idInterval);
            }
        }, 1000);
    });
}

let reiniciaJogo = function () {
    campoDigitacao.attr('disabled', false);
    campoDigitacao.val('');
    $('#tempo-digitacao').text(tempoInicial);
    $('#contador-palavras').text('0');
    $('#contador-caracteres').text('0');
    inicializaCronometro();
    campoDigitacao.removeClass('campo-desativado')
    //toggleClass adiciona a classe se não possuir, remove se possuir
    // campoDigitacao.toggleClass('campo-desativado');
    campoDigitacao.removeClass('borda-verde');
    campoDigitacao.removeClass('borda-vermelha');
}
