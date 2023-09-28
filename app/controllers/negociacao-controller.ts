import { Negociacao } from "../models/negociacao.js"

export class NegociacaoController {
    private inputData :HTMLInputElement
    private inputQuantidade :HTMLInputElement
    private inputValor :HTMLInputElement

    constructor(){
        this.inputData = document.querySelector('#data')
        this.inputQuantidade = document.querySelector('#quantidade')
        this.inputValor = document.querySelector('#valor')
    }

    adiciona() : void {
        const negociacao = this.criaNegociacao()
        console.log(negociacao)
    }

    criaNegociacao() : Negociacao {
        const exp = /-/g // Uma expressão regular que vai buscar todos os "-", e add o "g" para ela fazer a global find
        const date = new Date(this.inputData.value.replace(exp, ',')) // Cria uma data quando a função for chamada
        const quantidade = parseInt(this.inputQuantidade.value)
        const valor = parseFloat(this.inputValor.value)
        return new Negociacao(date,quantidade,valor )
    }
}
