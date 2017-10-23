

import {CanLoad, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Route} from '@angular/router';
import {Injectable} from '@angular/core';
import {LoginService} from './login/login.service';

@Injectable()
export class LoggedinGuard implements CanLoad, CanActivate {

  constructor(private loginService: LoginService) {}

  checkAuthentication(path: string): boolean {
    const loggedIn = this.loginService.isLoogedIn();
    if (!loggedIn){
      this.loginService.handleLogin(`/${path}`);
    }
    return loggedIn;
  }

  canLoad(route: Route): boolean {
    console.log('canLoad');
    return  this.checkAuthentication(route.path)
  }

  canActivate(activatedRouter: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): boolean {
    console.log('canActivate');
    return this.checkAuthentication(activatedRouter.routeConfig.path);
  }
}
