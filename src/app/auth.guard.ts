import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './login/login.service';

export const authGuard: CanActivateFn = (route, state) => {


  const loginService=inject(LoginService);
  const router=inject(Router)

  if(loginService.gettEstaLogueado()){
    return true;
  }else{
    //alert('NO ESTÁ LOGUEADO');
    router.navigate(['login']);
  }

  return true;
};
