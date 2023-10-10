export class Negociacao{
 
    constructor(
        private _data: Date, 
        readonly quantidade : number, 
        readonly valor: number)
        { }
    get volume(){
        return this.quantidade * this.valor
    } 

    get data(): Date{
        const data = new Date(this._data.getTime()) // Criamos uma copia da Data atual armazenando na const
        // Para que ela não possa ser alterada, e ser for vai ser alterada a data "cópia"
        return data
    }

    criaDe(dateString: string, quantidadeString: string, valorString : string) : Negociacao{
        const exp = /-/g // Uma expressão regular que vai buscar todos os "-", e add o "g" para ela fazer a global find
        const date = new Date(dateString.replace(exp, ',')) // Cria uma data quando a função for chamada
        const quantidade = parseInt(quantidadeString)
        const valor = parseFloat(valorString)
        return new Negociacao(date,quantidade,valor )
    }
} 
