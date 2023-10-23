import { diasDaSemana } from "../enums/diasDaSemana.js"
import { Negociacao } from "../models/negociacao.js"
import { Negociacoes } from "../models/negociacoes.js"
import { MensagemView } from "../views/mensagem-view.js"
import { NegociacoesView } from "../views/negociacoes-view.js"

export class NegociacaoController {
    private inputData :HTMLInputElement
    private inputQuantidade :HTMLInputElement
    private inputValor :HTMLInputElement
    private negociacoes = new Negociacoes()
    private negociacoesView = new NegociacoesView("[data-negociacoes-views]", true)
    private mensagemView = new MensagemView("#mensagemView", false)
    

    constructor(){
        this.inputData = document.querySelector('#data') as HTMLInputElement 
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement
        this.inputValor = document.querySelector('#valor') as HTMLInputElement
        this.negociacoesView.update(this.negociacoes  )
    }

    adiciona() : void {
        const negociacao =  Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        )
        if(!this.diaUtil(negociacao.data) ) {
            this.mensagemView.update('São aceitas apenas negociações feitas em dias úteis') 
            return
        }

        this.negociacoes.adiciona(negociacao)
        this.atualizaView()
        this.limparForm()
        
        

    }

    private diaUtil ( data: Date) {
        return data.getDay() > diasDaSemana.Domingo && data.getDay() < diasDaSemana.Sabado
    }


    limparForm() :void {
            this.inputData.value = ""
            this.inputQuantidade.value = ""
            this.inputValor.value = ""
            this.inputData.focus() // Para o foco retornar ao inputData

    }

    private atualizaView () : void {
        this.negociacoesView.update(this.negociacoes)
        this.mensagemView.update("Negociação adicionada com sucesso!")
    }
}

