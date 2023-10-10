export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const data = new Date(this._data.getTime()); // Criamos uma copia da Data atual armazenando na const
        // Para que ela não possa ser alterada, e ser for vai ser alterada a data "cópia"
        return data;
    }
    static criaDe(dateString, quantidadeString, valorString) {
        const exp = /-/g; // Uma expressão regular que vai buscar todos os "-", e add o "g" para ela fazer a global find
        const date = new Date(dateString.replace(exp, ',')); // Cria uma data quando a função for chamada
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
}
