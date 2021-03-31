import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { CidrGroupService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class CidrGroupGetCidrGroupResolve implements Resolve<any> {

  constructor(private cidrGroupService: CidrGroupService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.cidrGroupService.getCidrGroup(
      route.data.cidrGroupId || route.params.cidrGroupId || route.queryParams.cidrGroupId
    );
  }
}
