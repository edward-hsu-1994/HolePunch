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
export class ServiceDeleteServiceForwardTargetResolve implements Resolve<any> {

  constructor(private serviceService: ServiceService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.serviceService.deleteServiceForwardTarget(
      route.data.serviceId || route.params.serviceId || route.queryParams.serviceId,
      route.data.forwardTargetId || route.params.forwardTargetId || route.queryParams.forwardTargetId,
      route.data.allowRuleId || route.params.allowRuleId || route.queryParams.allowRuleId
    );
  }
}
