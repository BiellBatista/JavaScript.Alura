// console.log('Ola mundo'); //módulo 03

let frase = $('.frase').text(); //pegando o conteúdo da tag <p>
let numerosPlavras = frase.split(" ").length;
let tamanhoFrase = $('#tamanhoFrase'); // função text serve para pegar o texto entre a tag <p>TEXTO</p> <span>TEXTO</span>

tamanhoFrase.text(numerosPlavras);