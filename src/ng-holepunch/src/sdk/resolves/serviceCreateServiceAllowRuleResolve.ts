import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { ServiceService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class ServiceCreateServiceAllowRuleResolve implements Resolve<any> {

  constructor(private serviceService: ServiceService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.serviceService.createServiceAllowRule(
      route.data.serviceId || route.params.serviceId || route.queryParams.serviceId,
      route.data.allowRule || route.params.allowRule || route.queryParams.allowRule
    );
  }
}
