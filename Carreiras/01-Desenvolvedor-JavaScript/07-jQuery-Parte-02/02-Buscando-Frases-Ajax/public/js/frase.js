$('#botao-frase').click(fraseAleatoria);

function fraseAleatoria() {
    $.get('http://localhost:3000/frases', trocaFraseAleatoria);
}
// data é o retorno da requisição
function trocaFraseAleatoria(data) {
    let frase = $('.frase');
    let numeroAleatorio = Math.floor(Math.random() * data.length);

    frase.text(data[numeroAleatorio].texto);
}
