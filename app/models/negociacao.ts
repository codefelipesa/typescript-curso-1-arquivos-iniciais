export class Negociacao{
    private _data;  // Usamos o atributo private para declaração de valor privado, e o "_" para não ter nomes duplicados
    private _quantidade;  // Usamos o atributo private para declaração de valor privado, e o "_" para não ter nomes duplicados
    private _valor;  // Usamos o atributo private para declaração de valor privado, e o "_" para não ter nomes duplicados

    constructor(data, quantidade, valor){
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;

    }

    get data (){return this._data}        
    get quantidade (){return this._quantidade}        
    get valor (){return this._valor} 
    get volume (){return this._quantidade * this._valor}       
}

