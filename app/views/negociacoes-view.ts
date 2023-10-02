import { Negociacoes } from "../models/negociacoes.js"

export class NegociacoesView {

    private elemento: HTMLElement
    constructor( seletor: string ){
        this.elemento = document.querySelector(seletor)

    }

    template(): string {
        return `
        <table class="table table-hover table-bordered" >
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
            </tr>
        </thead>
        <tbody>
        </tbody>

    </table>

        `}

    update(model: Negociacoes) : void{
        this.elemento.innerHTML = this.template()
    }
}

