class Celular{

    id: string;
    modelo: string;
    fasesrealizadas: {[id: string]: Date;}

    constructor(id: string, modelo: string){
        this.id = id;
        this.modelo = modelo;
        this.fasesrealizadas = {}
    }

}

export {Celular}
