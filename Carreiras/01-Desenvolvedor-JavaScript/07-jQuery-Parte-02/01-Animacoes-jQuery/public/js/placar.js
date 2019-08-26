function inserePlacar() {
    let corpoTabela = $(".placar").find("tbody");
    let numerosPalavras = $("#contador-palavras").text();
    let usuario = 'Gabriel';
    let linha = novaLinha(usuario, numerosPalavras);

    linha.find('.botao-remover').click(removeLinha);
    corpoTabela.append(linha);
}

function novaLinha(nomeUsuario, numerosPalavras) {
    let linha = $('<tr>');
    let colunaUsuario = $('<td>').text(nomeUsuario);
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
