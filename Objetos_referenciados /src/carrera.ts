import mongoose = require("mongoose");
import {connectMongoDB} from "./utils"

export interface ICarrera extends mongoose.Document { 
    name:[string];
}

const CarreraSchema = new mongoose.Schema({
    name: {type:Array, required: true},
});

export const Carrera = mongoose.model<ICarrera>("Carrera", CarreraSchema);

export const CreateCarrera = async function(name:[string]){
    await connectMongoDB;

    const newOne = new Carrera();
    newOne.name = name;

    newOne.save( (err:any) =>{
        if(err){
            console.log(err.message);
        }else{
            console.log(newOne);
        }
    } );
}

export const DeleteCarrera = async function(_name:[string]){
    await connectMongoDB;

    Carrera.deleteOne = ({name:_name} (err:any, result:any) =>{
        if(err){
            console.log(err.message)
        }else{
            console.log(result)
        }
    })
}

export function getCarrera(_name: [string]):Promise<any>{
    return new Promise<any>( resolve => {
        Carrera.findOne({ name: _name}, (err:any,data:any) => {
            if(err){
                resolve({});
            }else{
                resolve(data);
            }
        } );
    });
}