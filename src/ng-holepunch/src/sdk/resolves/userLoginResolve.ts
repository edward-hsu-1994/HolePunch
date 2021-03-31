import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { UserService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class UserLoginResolve implements Resolve<any> {

  constructor(private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.userService.login(
      route.data.loginInput || route.params.loginInput || route.queryParams.loginInput
    );
  }
}
