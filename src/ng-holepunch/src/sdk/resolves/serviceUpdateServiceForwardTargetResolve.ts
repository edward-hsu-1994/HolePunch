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
export class ServiceUpdateServiceForwardTargetResolve implements Resolve<any> {

  constructor(private serviceService: ServiceService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.serviceService.updateServiceForwardTarget(
      route.data.serviceId || route.params.serviceId || route.queryParams.serviceId,
      route.data.forwardTarget || route.params.forwardTarget || route.queryParams.forwardTarget
    );
  }
}
