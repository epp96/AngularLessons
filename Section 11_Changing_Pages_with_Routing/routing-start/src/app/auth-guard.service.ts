
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivateChild
} from '@angular/router';
import { Obserbable } from 'rxjs/Observable';
import { AuthService } from './auth.service'

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService){

  }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    private router: Router):Obserbable<boolean> | Promise<boolean> | boolean {
      return this.authService.isAuthenticated().then(
        (authenticated: boolean) => {
          if (authenticated){
            return true;
          } else {
            this.router.navigate(['/']);
          }
        }
      );

  }
  canActivateChild(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    private router: Router):Obserbable<boolean> | Promise<boolean> | boolean {
      return this.canActivate(route, state);
    }
}
