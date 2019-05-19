// trabalhando com herança. Uso o extends
// Quando eu uso o extends e recebo um elemento na classe filha, devo passar para a classe pai
class MensagemView extends View {
    constructor(elemento) {
        super(elemento);
    }

    _template(model) {
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>';
    }
}