import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent  implements OnInit{
  titulo = 'Lista de Empleados';
  
  nombre:string='';
  apellido:string='';
  cargo:string='';
  salario:number=0;
  empleados:Empleado[];
  indice:number;
  empleado:Empleado;
  accionTexto:string='';
  accion:string='';

  constructor(private router:Router,private route:ActivatedRoute, private myService:ServicioEmpleadosService,private servicioEmpleado:EmpleadosService){

  }

  ngOnInit(): void {
    this.empleados=this.servicioEmpleado.empleados;

    this.indice=this.route.snapshot.params['id'];

    this.empleado =this.servicioEmpleado.getEmpleado(this.indice);

    this.nombre=this.empleado.nombre;
    this.apellido=this.empleado.apellido;
    this.cargo=this.empleado.cargo;
    this.salario=this.empleado.salario;
    this.accion=this.route.snapshot.queryParams['accion']

    if(this.accion==='U'){
      this.accionTexto="Actualizar";

    }else{
      this.accionTexto='Eliminar';
    }

  }
  
   /*actualizarEmpleado(){
    let empleado=new Empleado(this.nombre,this.apellido,this.cargo,this.salario);
    this.servicioEmpleado.actualizarEmpleado(empleado,this.indice);
    this.router.navigate(['']);
   }

   eliminarEmpleado(){
    this.servicioEmpleado.eliminarEmpleado(this.indice);
    this.router.navigate(['']);
   }*/

   actualizaEliminaEmpleado(){
    if(this.accion==='U'){
      let empleado=new Empleado(this.nombre,this.apellido,this.cargo,this.salario);
      this.servicioEmpleado.actualizarEmpleado(empleado,this.indice);
      

    }else{
      this.servicioEmpleado.eliminarEmpleado(this.indice);
      
    }
    
    this.router.navigate(['']);
   } 


  volverHome(){
    this.router.navigate(['']);
  }
}
