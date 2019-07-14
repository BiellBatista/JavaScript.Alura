'use strict';

System.register(['./controllers/NegociacaoController', './polyfill/fetch'], function (_export, _context) {
  "use strict";

  var NegociacaoController, negociacaoController;
  return {
    setters: [function (_controllersNegociacaoController) {
      NegociacaoController = _controllersNegociacaoController.NegociacaoController;
    }, function (_polyfillFetch) {}],
    execute: function () {
      negociacaoController = new NegociacaoController();

      //ao fazer isso, ela se torna privada do módulo e com isso não consigo invocar nos atributos html
      //para resolver isso, devo adicionar as ações via javascript

      //o . é seletor de classe
      document.querySelector('.form').onsubmit = negociacaoController.adiciona.bind(negociacaoController);
      // o [] é seletor de atributo
      document.querySelector('[type=button]').onclick = negociacaoController.apaga.bind(negociacaoController);
    }
  };
});
//# sourceMappingURL=boot.js.map