import { Celular } from "./Celular";
import { Manual } from "./Manual";

class Intern {
  id: string;
  name: string;
  fecha_practica: Date;
  mi_celular: Celular;

  constructor(id: string, name: string, fecha_pract: Date, mi_cel: Celular) {
    this.id = id;
    this.name = name;
    this.mi_celular = mi_cel;
    this.fecha_practica = fecha_pract;
  }

  asignarFase(fase: string, manual: Manual): Celular {
    let las_dependencias_que_ocupo: string[] = manual.dependencias[fase];

    if (las_dependencias_que_ocupo != undefined) {
      if (las_dependencias_que_ocupo.length == 0) {
        this.mi_celular.fasesrealizadas[fase] = new Date();
      } else {
        let phases_incompleted: string[] = [];

        for (let phase_needed of las_dependencias_que_ocupo) {
          if (this.mi_celular.fasesrealizadas[phase_needed] == undefined) {
            phases_incompleted.push(phase_needed);
          }
        }

        if (phases_incompleted.length == 0) {
          this.mi_celular.fasesrealizadas[fase] = new Date();
        } else {
          console.log(
            "Completa las fases pendientes: " + phases_incompleted.toString()
          );
        }
      }
    } else {
      console.log("SU FASE NO EXISTE!");
    }

    return this.mi_celular;
  }
}
export { Intern };
