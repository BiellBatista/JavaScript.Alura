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
                finalizaJogo();
                clearInterval(idInterval);
            }
        }, 1000);
    });
}

function finalizaJogo(){
    campoDigitacao.attr('disabled', true);
    $('#btn-reiniciar').attr('disabled', false);
    campoDigitacao.toggleClass('campo-desativado');
    inserePlacar();
}

function inserePlacar() {
    //o .find() irá procurar a tag que eu especifiquei
    let corpoTabela = $(".placar").find("tbody");
    let numerosPalavras = $("#contador-palavras").text();
    let usuario = 'Gabriel';
    let linha = novaLinha(usuario, numerosPalavras);

    linha.find('.botao-remover').click(removeLinha);
    //append() = adicionar o elemento no final dentro de um elemento
    //prepend() = adicionar como primeiro elemento dentro de um outro elemento
    corpoTabela.append(linha);
}

function novaLinha(nomeUsuario, numerosPalavras) {
    //o bom de criar elementos HTML é que eu posso usar as funcionalidades do objeto
    let linha = $('<tr>'); //criando um elemento html
    let colunaUsuario = $('<td>').text(nomeUsuario); //criando um novo elemento. O jQuery sabe que é para criar um elemento por causda do <>
    let colunaPalavras = $('<td>').text(numerosPalavras);
    let colunaRemover = $('<td>');

    let link = $('<a>').addClass('botao-remover').attr('href', '#');
    let icone = $('<i>').addClass('small').addClass('material-icons').text('delete');

    link.append(icone);
    colunaRemover.append(link);
    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha;
}

function removeLinha() {
    event.preventDefault();
    $(this).parent().parent().remove();
}

let reiniciaJogo = function () {
    campoDigitacao.attr('disabled', false);
    campoDigitacao.val('');
    $('#tempo-digitacao').text(tempoInicial);
    $('#contador-palavras').text('0');
    $('#contador-caracteres').text('0');
    inicializaCronometro();
    campoDigitacao.removeClass('campo-desativado')
    campoDigitacao.removeClass('borda-verde');
    campoDigitacao.removeClass('borda-vermelha');
}
