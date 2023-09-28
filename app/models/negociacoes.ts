import { Negociacao } from "./negociacao.js";

    export class Negociacoes {
    private negociacoes :Array<Negociacao> = [] // Declaramos o tipo de "coisas" que o Array vai receber
    
    adiciona(negociacao : Negociacao){
        this.negociacoes.push(negociacao)
    }

    lista(): Array <Negociacao> {
        return this.negociacoes
    }
}

const negociacoes = new Negociacoes()
negociacoes.lista().forEach(n => console.log(n))