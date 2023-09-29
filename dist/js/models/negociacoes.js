export class Negociacoes {
    constructor() {
        this.negociacoes = []; // Declaramos o tipo de "coisas" que o Array vai receber
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return [...this.negociacoes]; // Colocamos o Spread para realizar uma copia da lista, sem o result interferir na lista principal
    }
}
const negociacoes = new Negociacoes();
negociacoes.lista().forEach(n => console.log(n));
