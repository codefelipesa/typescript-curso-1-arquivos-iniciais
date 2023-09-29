import { Negociacao } from "../models/negociacao.js"
import { Negociacoes } from "../models/negociacoes.js"

export class NegociacaoController {
    private inputData :HTMLInputElement
    private inputQuantidade :HTMLInputElement
    private inputValor :HTMLInputElement
    private negociacoes = new Negociacoes()

    constructor(){
        this.inputData = document.querySelector('#data')
        this.inputQuantidade = document.querySelector('#quantidade')
        this.inputValor = document.querySelector('#valor')
    }

    adiciona() : void {
        const negociacao = this.criaNegociacao()
        this.negociacoes.adiciona(negociacao)
        console.table  (this.negociacoes.lista())
        this.limparForm()

    }

    criaNegociacao() : Negociacao {
        const exp = /-/g // Uma expressão regular que vai buscar todos os "-", e add o "g" para ela fazer a global find
        const date = new Date(this.inputData.value.replace(exp, ',')) // Cria uma data quando a função for chamada
        const quantidade = parseInt(this.inputQuantidade.value)
        const valor = parseFloat(this.inputValor.value)
        return new Negociacao(date,quantidade,valor )
    }

    limparForm() :void {
            this.inputData.value = ""
            this.inputQuantidade.value = ""
            this.inputValor.value = ""
            this.inputData.focus() // Para o foco retornar ao inputData

    }

}
