import {Celular} from "./Celular"
import {Intern} from "./Intern"
import {Manual} from "./Manual"

let mi_celular = new Celular("CEL01","DDYU");
//mi_celular.fasesrealizadas["A"] = new Date();

let mi_intern_1 = new Intern("1000","PEDRO", new Date(), mi_celular);

let mi_manual = new Manual();

//console.log(mi_manual);
//console.log(mi_intern_1);

console.log( mi_intern_1.asignarFase("F",mi_manual) );
console.log( mi_intern_1.asignarFase("A",mi_manual) );
console.log( mi_intern_1.asignarFase("D",mi_manual) );
console.log( mi_intern_1.asignarFase("B",mi_manual) );
console.log( mi_intern_1.asignarFase("C",mi_manual) );
