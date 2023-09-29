import { Negociacao } from "./negociacao.js";

    export class Negociacoes {
    private negociacoes :Array<Negociacao> = [] // Declaramos o tipo de "coisas" que o Array vai receber
    
    adiciona(negociacao : Negociacao){
        this.negociacoes.push(negociacao)
    }

    lista(): ReadonlyArray <Negociacao> { // O ReadOnly deixa o Array com acesso a apenas leitura sem modifica-lo
        return this.negociacoes 
    }
}

const negociacoes = new Negociacoes()
negociacoes.lista().forEach(n => console.log(n))