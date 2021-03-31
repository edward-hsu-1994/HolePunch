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
export class CidrGroupCreateCidrGroupResolve implements Resolve<any> {

  constructor(private cidrGroupService: CidrGroupService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.cidrGroupService.createCidrGroup(
      route.data.cidrGroup || route.params.cidrGroup || route.queryParams.cidrGroup
    );
  }
}
