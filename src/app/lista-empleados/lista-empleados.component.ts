import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent  {

  @Input() empleadoLista: Empleado;
  @Input() indiceLista:number;

  arrayCaracteristicas:any = [];

  agregarCaracteristicas(nuevaCarac: string) {

    this.arrayCaracteristicas.push(nuevaCarac);
  }

  constructor(private myService:ServicioEmpleadosService){

  }


  


}
