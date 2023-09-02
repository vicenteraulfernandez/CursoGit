import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { CaracteristicasEmpleadoComponent } from './caracteristicas-empleado/caracteristicas-empleado.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleados.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectoComponentComponent } from './proyecto-component/proyecto-component.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizaComponentComponent } from './actualiza-component/actualiza-component.component';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { Dataservice } from './data.service';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { CookieService } from 'ngx-cookie-service';
import { authGuard } from './auth.guard';


const appRoute:Routes=[
  {path:'', component:HomeComponentComponent,canActivate:[authGuard]},
  {path:'proyectos', component:ProyectoComponentComponent,canActivate:[authGuard]},
  {path:'quienes', component:QuienesComponentComponent,canActivate:[authGuard]},
  {path:'contacto', component:ContactoComponentComponent,canActivate:[authGuard]},
  {path:'actualiza/:id',component:ActualizaComponentComponent,canActivate:[authGuard]},
  {path:'login',component:LoginComponent},
  {path:'**',component:ErrorComponentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListaEmpleadosComponent,
    CaracteristicasEmpleadoComponent,
    HomeComponentComponent,
    ProyectoComponentComponent,
    QuienesComponentComponent,
    ContactoComponentComponent,
    ActualizaComponentComponent,
    ErrorComponentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoute),
    HttpClientModule
  ],
  providers: [ServicioEmpleadosService,EmpleadosService,Dataservice,LoginService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
