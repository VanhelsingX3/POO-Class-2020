const mongoose = require("mongoose");

const uri: string = "mongodb+srv://Vanhx3:ZDThm153@cluster0-rgcjg.azure.mongodb.net/homework?retryWrites=true&w=majority";

export const connectMongoDB  = new Promise<void>(resolve => {
    mongoose.connect(uri,{ useNewUrlParser:true, useUnifiedTopology: true }, (err: any) => {
        if(err){
            console.log(err.message);
        }else{
            console.log("Conexion exitosa");
        }
        resolve();
    });
});
