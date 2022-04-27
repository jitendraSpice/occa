import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Constants } from '../utils/constant';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor (private _AuthService: AuthService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot)  {
    if(this._AuthService.isUserLogin()){
      return true;
    }
    else{
      this.router.navigate([Constants.LOGIN_ROUTE], { queryParams: { returnUrl: state.url } });
      return false;
    }
  }
  
}
