import mongoose = require("mongoose");
import {ICarrera,getCarrera} from "./carrera"
import {connectMongoDB} from "./utils"

export interface ICurso extends mongoose.Document { 
    name:string;
    seccion:number;
    career_id:ICarrera;
}

const CursoSchema = new mongoose.Schema({
    name: {type: String, required: true},
    seccion:{type:Number, required: true},
    career_id:{type:mongoose.Schema.Types.ObjectId, ref: "Carrera"}
});

export const Curso = mongoose.model<ICurso>("Curso", CursoSchema);

export const CreateCurso = async function(nameCarrera:[string],name:string,seccion:number){
    //Conectar con la base de datos
    await connectMongoDB;
    //Obtener el Carrera en funcion del nombre
    const career:any = await getCarrera(nameCarrera);

    //persistencia de nuestro Curso
    const c = new Curso();
    c.name = name;
    c.seccion = seccion;
    c.career_id = career;

    c.save((err:any)=>{
        if(err){
            console.log(err.message);
        }else{
            console.log(c);
        }
    });
}


export const DeleteCarrera = async function(_name: string){
    await connectMongoDB;

    Curso.deleteOne = ({name:_name} (err:any, result:any) =>{
        if(err){
            console.log(err.message);
        }else{
            console.log(result);
        }
    });
}

export function getCurso(_name: string):Promise<any>{
    return new Promise<any>( resolve => {
        Curso.findOne({ name: _name}, (err:any,data:any) => {
            if(err){
                resolve({});
            }else{
                resolve(data);
            }
        } );
    });
}
