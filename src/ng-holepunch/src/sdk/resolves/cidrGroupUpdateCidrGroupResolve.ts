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
export class CidrGroupUpdateCidrGroupResolve implements Resolve<any> {

  constructor(private cidrGroupService: CidrGroupService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.cidrGroupService.updateCidrGroup(
      route.data.cidrGroup || route.params.cidrGroup || route.queryParams.cidrGroup
    );
  }
}
