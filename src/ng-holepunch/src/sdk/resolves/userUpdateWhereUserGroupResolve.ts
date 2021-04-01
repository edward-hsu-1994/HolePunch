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
export class UserUpdateWhereUserGroupResolve implements Resolve<any> {

  constructor(private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.userService.updateWhereUserGroup(
      route.data.userId || route.params.userId || route.queryParams.userId,
      route.data.groups || route.params.groups || route.queryParams.groups
    );
  }
}
