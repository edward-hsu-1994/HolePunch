import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { SystemService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class SystemGetNetworkSpeedResolve implements Resolve<any> {

  constructor(private systemService: SystemService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.systemService.getNetworkSpeed();
  }
}
