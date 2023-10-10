export class View {
    constructor(seletor, escapar) {
        this.escapar = false;
        this.elemento = document.querySelector(seletor);
    }
    update(model) {
        let template = this.template(model);
        if (this.escapar = true) {
            template = template.replace(/<script>[\s\S]*?<\/script</, '');
        }
        this.elemento.innerHTML = template;
    }
    template(model) {
        throw Error("Classe filha precisa implementar o método template");
    }
}
