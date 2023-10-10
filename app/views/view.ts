export abstract class View <T> {

    protected elemento : HTMLElement
    private escapar: boolean = false

    constructor(seletor: string, escapar?: boolean) { // A interrogação é usada para dizer que o parâmetro é opcional
        this.elemento = document.querySelector(seletor)

    }

    update(model : T) : void {
        let template = this.template(model)
        if(this.escapar = true){
            template = template.replace(/<script>[\s\S]*?<\/script</,'')
        }
        this.elemento.innerHTML = template
    }

    protected template(model : T) : string {
        throw Error("Classe filha precisa implementar o método template")
       
    }

}