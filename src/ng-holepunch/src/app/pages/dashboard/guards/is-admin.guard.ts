import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard implements CanActivate {
  constructor(private _router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(sessionStorage.getItem('token')){
      return true;
    }
    this.goToLoginPanel();
    return false;
  }

  goToLoginPanel(){
    this._router.navigateByUrl('/auth');
  }

  goToConnectionPanel(){
    this._router.navigateByUrl('/connect');
  }
}
