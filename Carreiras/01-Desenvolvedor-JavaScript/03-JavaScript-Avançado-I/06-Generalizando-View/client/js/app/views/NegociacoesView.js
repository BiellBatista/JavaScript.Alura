class NegociacoesView {
    constructor(elemento) {
        this._elemento = elemento;
    }

    _template(model) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
                ${model.negociacoes.map(element => `
                    <tr>
                        <td>${DateHelper.dataParaTexto(element.data)}</td>
                        <td>${element.quantidade}</td>
                        <td>${element.getValor()}</td>
                        <td>${element.getVolume()}</td>
                    </tr>
                `).join('')}
            </tbody>

            <tfoot>
                <td colspan="3"></td>
                <td>${model.negociacoes.reduce((total, n) => total + n.getVolume(), 0.0)}</td>
            </tfoot>
        </table>
        `
    }

    update(model) {
        this._elemento.innerHTML = this._template(model);
    }
}
