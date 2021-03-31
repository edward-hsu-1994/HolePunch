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
export class UserRemoveUserGroupMemberResolve implements Resolve<any> {

  constructor(private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.userService.removeUserGroupMember(
      route.data.userGroupId || route.params.userGroupId || route.queryParams.userGroupId,
      route.data.userId || route.params.userId || route.queryParams.userId
    );
  }
}
