//librerias
import {CreateCarrera, DeleteCarrera} from "./carrera"
import {CreateCurso,DeleteCurso} from "./curso"
//---

const nameCarrera:any = [];
nameCarrera.push("IS");

CreateCarrera(1,nameCarrera); // Realizar este;
//CreateCurso(1,{_id:1},"Algebra",1500); // Descomentar este y ejecutar después xd

// DeleteCurso({_id:1});
// DeleteCarrera({_id:1});

