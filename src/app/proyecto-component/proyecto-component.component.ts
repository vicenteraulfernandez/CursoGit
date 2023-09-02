import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-proyecto-component',
  templateUrl: './proyecto-component.component.html',
  styleUrls: ['./proyecto-component.component.css']
})
export class ProyectoComponentComponent {
  titulo = 'Lista de Empleados';
  
  nombre:string='';
  apellido:string='';
  cargo:string='';
  salario:number=0;
  empleados:Empleado[];

  constructor(private router:Router,private myService:ServicioEmpleadosService,private servicioEmpleado:EmpleadosService){

  }

  ngOnInit(): void {
    this.empleados=this.servicioEmpleado.empleados;
  }

  agregarEmpleado(){

    let empleado=new Empleado(this.nombre,this.apellido,this.cargo,this.salario);
    //this.myService.showMessage("empleado:"+empleado.nombre + " " + empleado.apellido);
    //this.empleados.push(empleado);

    this.servicioEmpleado.agregarServicioEmpleado(empleado);
    this.router.navigate([''])
  }

  volverHome(){
    this.router.navigate([''])
  }

}
