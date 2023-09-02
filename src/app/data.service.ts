import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { LoginService } from "./login/login.service";

@Injectable()
export class Dataservice{

    constructor(private httpClient:HttpClient,private loginService:LoginService){
        
    }

    grabarEmpleados(empleados:Empleado[]){
        this.httpClient.put('https://mis-clientes-d5b4f-default-rtdb.firebaseio.com/datos.json',empleados).subscribe({
            next: (v) => console.log('Se han guardado los empleados ' + v),
            error: (e) => console.log('Error' + e),
          });
    }

    actualizarEmpleado(indice:number,empleado:Empleado){
        let url='https://mis-clientes-d5b4f-default-rtdb.firebaseio.com/datos/'+indice+'.json';
        this.httpClient.put(url,empleado).subscribe({
            next:(v)=>console.log('Empleado actualizado'+v),
            error: (e)=>console.log('Error'+e)
        });
    }

    obtenerEmpleados(){
        const token=this.loginService.getIdToken();
        return this.httpClient.get('https://mis-clientes-d5b4f-default-rtdb.firebaseio.com/datos.json?auth='+token);
    }

    eliminarEmpleado(indice:number){
        let url='https://mis-clientes-d5b4f-default-rtdb.firebaseio.com/datos/'+indice+'.json';
        this.httpClient.delete(url).subscribe({
            next:(v)=>console.log('Empleado eliminado'+v),
            error: (e)=>console.log('Error'+e)
        });
    }




}