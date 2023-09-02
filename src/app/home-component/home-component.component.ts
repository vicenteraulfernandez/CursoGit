import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit{
  titulo = 'Lista de Empleados';
  
  nombre:string='';
  apellido:string='';
  cargo:string='';
  salario:number=0;
  empleados:Empleado[];

constructor(private myService:ServicioEmpleadosService,private servicioEmpleado:EmpleadosService){

}
  ngOnInit(): void {
    //alert('init')
    this.servicioEmpleado.getEmpleados().subscribe(empleados=>{
      console.log(empleados);
      this.empleados=Object.values(empleados);
      this.servicioEmpleado.setEmpleados(this.empleados);

  });
  }

  agregarEmpleado(){

    let empleado=new Empleado(this.nombre,this.apellido,this.cargo,this.salario);
    //this.myService.showMessage("empleado:"+empleado.nombre + " " + empleado.apellido);
    //this.empleados.push(empleado);

    this.servicioEmpleado.agregarServicioEmpleado(empleado);

    

  }
  

}
