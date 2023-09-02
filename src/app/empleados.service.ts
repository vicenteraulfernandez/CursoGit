import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";
import { Dataservice } from "./data.service";

@Injectable()
export class EmpleadosService{

    empleados:Empleado[]=[];

    constructor(private messageService:ServicioEmpleadosService,private dataService:Dataservice){
        /*this.empleados=[
            new Empleado('Vicente ','Fernandez','Jefe de Proyect',10000),
            new Empleado('Mitsuo','Navarrete','Jefe de Logística',15000),
            new Empleado('Bryan','Tinco','Jefe de Sistemas',15000)
            
          ];*/

         



    }

    setEmpleados(misEmpleados:Empleado[]){
        this.empleados=misEmpleados;
    }

    getEmpleados(){
        return this.dataService.obtenerEmpleados();
    }

    agregarServicioEmpleado(empleado:Empleado){
        this.messageService.showMessage("Esto es un nuevo mensaje:"+empleado.nombre + "\n"+
        empleado.apellido + "\n")
        this.empleados.push(empleado);

        this.dataService.grabarEmpleados(this.empleados);     


    }

    getEmpleado(id:number){
        return this.empleados[id];   

    }

    actualizarEmpleado(empleado:Empleado,indice:number){
        this.empleados[indice]=empleado;

        this.dataService.actualizarEmpleado(indice,empleado)
        //alert('actualizando');
    }

    eliminarEmpleado(indice:number){
        this.empleados.splice(indice,1);
        this.dataService.eliminarEmpleado(indice);
        this.dataService.grabarEmpleados(this.empleados);     
    }



}