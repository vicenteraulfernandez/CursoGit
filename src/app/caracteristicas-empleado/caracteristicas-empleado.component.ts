import { Component, EventEmitter, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado',
  templateUrl: './caracteristicas-empleado.component.html',
  styleUrls: ['./caracteristicas-empleado.component.css']
})
export class CaracteristicasEmpleadoComponent {

  @Output() caracteristicasEmpleado = new EventEmitter<string>();


  
    agregarCaracteristicas(value: string) {
      this.myService.showMessage("Nueva característica:"+value);
      this.caracteristicasEmpleado.emit(value);
    }

    constructor(private myService:ServicioEmpleadosService){

    }




}
