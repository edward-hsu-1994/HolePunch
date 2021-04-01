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
export class UserChangePasswordResolve implements Resolve<any> {

  constructor(private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.userService.changePassword(
      route.data.userId || route.params.userId || route.queryParams.userId,
      route.data.model || route.params.model || route.queryParams.model
    );
  }
}
