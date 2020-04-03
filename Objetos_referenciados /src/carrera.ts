import mongoose = require("mongoose");
import {connectMongoDB} from "./utils"

export interface ICarrera extends mongoose.Document {
    name:[string];
}

const CarreraSchema = new mongoose.Schema({
    _id: {type:Number,required: true},
    name: {type:Array, required: true}
});

export const Carrera = mongoose.model<ICarrera>("Carrera", CarreraSchema);

export const CreateCarrera = async function(id:number, name:[string]){
    await connectMongoDB;

    const newOne = new Carrera();
    newOne._id = id;
    newOne.name = name;

    newOne.save( (err:any) =>{
        if(err){
            console.log(err.message);
        }else{
            console.log(newOne);
        }
    } );
}

export const DeleteCarrera = async function(filter: any){
    await connectMongoDB;

    Carrera.deleteMany(filter, (err:any,result:any) =>{
        if(err){
            console.log(err.message);
        }else{
            console.log(result);
        }
    });

}

export function getCarrera(filter: any):Promise<any>{
    return new Promise<any>( resolve => {
        Carrera.findOne(filter, (err:any,data:any) => {
            if(err){
                resolve({});
            }else{
                resolve(data);
            }
        } );
    });
}

