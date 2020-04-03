import mongoose = require("mongoose");
import {ICarrera,getCarrera} from "./carrera"
import {connectMongoDB} from "./utils"

export interface ICurso extends mongoose.Document { 
    name:string;
    seccion:number;
    career_id:ICarrera;
}

const CursoSchema = new mongoose.Schema({
    _id: {type: Number, required: true},
    name: {type: String, required: true},
    seccion:{type:Number, required: true},
    career_id:{ type: mongoose.Schema.Types.ObjectId, ref: "Carrera"}
});

export const Curso = mongoose.model<ICurso>("Curso", CursoSchema);

export const CreateCurso = async function(id:number,careerID:any,name:string,seccion:number){
    //Conectar con la base de datos
    await connectMongoDB;
    //Obtener el Carrera en funcion del nombre
    const career:any = await getCarrera(careerID);

    //persistencia de nuestro Curso
    const c = new Curso();
    c._id = id;
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


export const DeleteCurso = async function(filter: any){
    await connectMongoDB;

    Curso.deleteMany(filter, (err:any,result:any) =>{
        if(err){
            console.log(err.message);
        }else{
            console.log(result);
        }
    });

}

export function getCurso(filter: any):Promise<any>{
    return new Promise<any>( resolve => {
        Curso.findOne(filter, (err:any,data:any) => {
            if(err){
                resolve({});
            }else{
                resolve(data);
            }
        } );
    });
}

export const UpdateCurso = async function(filter:any,update:any){
    await connectMongoDB;
    Curso.updateMany(filter,update,(err:any,result:any)=>{
        if(err){
            console.log(err.message);
        }else{
            console.log(result);
        }
    });
}