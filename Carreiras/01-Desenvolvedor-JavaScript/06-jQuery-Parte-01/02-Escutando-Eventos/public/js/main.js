let frase = $('.frase').text();
let numerosPlavras = frase.split(" ").length;
let tamanhoFrase = $('#tamanhoFrase');

tamanhoFrase.text(numerosPlavras);
