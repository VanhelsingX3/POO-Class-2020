import {Celular} from "./Celular"
import {Manual} from "./Manual"

class Intern{

    id: string;
    name: string;
    fecha_practica: Date;
    mi_celular: Celular;

    constructor(id: string, name:string, fecha_pract: Date, mi_cel: Celular){
        this.id = id;
        this.name = name;
        this.mi_celular = mi_cel;
        this.fecha_practica = fecha_pract;
    }

    asignarFase(fase:string, manual: Manual, phone:Celular): Celular{

        let value: string | undefined = manual.dependencias[fase];

        if( value !== undefined ){
            //bien
            if( value === "" ){
                phone.fasesrealizadas[fase] = new Date();
                // bien
                console.log("entro a: "+ fase);
            }else if(phone.fasesrealizadas[value] !== undefined ){
                console.log("Entro a: "+ fase); // deberia estar en C y pasar a D
                //phone.fasesrealizadas[fase] = new Date();
            }else{
                // bien
                console.log("COMPLETE LA FASE "+value+" ANTES DE INSERTAR "+fase)
            }

        }else{
            //Bien
            console.log("SU FASE NO EXISTE!")
        }
        return phone;
    }

}

export {Intern}
