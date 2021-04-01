import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  Service,
  ServiceAllowRule,
  ServiceForwardTarget,
  ConnectionInfo
 } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) {}

  listService(): Observable<Service[]> {
  const url = '/api/Service';

  // #region Send Request
  return this.http.get<Service[]>(
    url
    );
    // #endregion
}

  createService(
    service: Service
  ): Observable<Service> {
  const url = '/api/Service';

  // #region Send Request
  return this.http.post<Service>(
    url,
    service
  );
  // #endregion
}

  updateService(
    service: Service
  ): Observable<Service> {
  const url = '/api/Service';

  // #region Send Request
  return this.http.put<Service>(
    url,
    service
  );
  // #endregion
}

  listMyService(): Observable<Service[]> {
  const url = '/api/Service/my';

  // #region Send Request
  return this.http.get<Service[]>(
    url
    );
    // #endregion
}

  getService(
    serviceId: number
  ): Observable<Service> {
  let url = '/api/Service/{serviceId}';

  // #region Path Parameter Name: serviceId
  url = url.replace('{serviceId}', serviceId.toString());
  // #endregion

  // #region Send Request
  return this.http.get<Service>(
    url
    );
    // #endregion
}

  deleteService(
    serviceId: number
  ): Observable<void> {
  let url = '/api/Service/{serviceId}';

  // #region Path Parameter Name: serviceId
  url = url.replace('{serviceId}', serviceId.toString());
  // #endregion

  // #region Send Request
  return this.http.delete<void>(
    url
    );
    // #endregion
}

  listServiceAllowRule(
    serviceId: number
  ): Observable<ServiceAllowRule[]> {
  let url = '/api/Service/{serviceId}/allowRules';

  // #region Path Parameter Name: serviceId
  url = url.replace('{serviceId}', serviceId.toString());
  // #endregion

  // #region Send Request
  return this.http.get<ServiceAllowRule[]>(
    url
    );
    // #endregion
}

  createServiceAllowRule(
    serviceId: number,
    allowRule: ServiceAllowRule
  ): Observable<ServiceAllowRule> {
  let url = '/api/Service/{serviceId}/allowRules';

  // #region Path Parameter Name: serviceId
  url = url.replace('{serviceId}', serviceId.toString());
  // #endregion

  // #region Send Request
  return this.http.post<ServiceAllowRule>(
    url,
    allowRule
  );
  // #endregion
}

  updateServiceAllowRule(
    serviceId: number,
    allowRule: ServiceAllowRule
  ): Observable<ServiceAllowRule> {
  let url = '/api/Service/{serviceId}/allowRules';

  // #region Path Parameter Name: serviceId
  url = url.replace('{serviceId}', serviceId.toString());
  // #endregion

  // #region Send Request
  return this.http.put<ServiceAllowRule>(
    url,
    allowRule
  );
  // #endregion
}

  getServiceAllowRule(
    serviceId: number,
    allowRuleId: number
  ): Observable<ServiceAllowRule> {
  let url = '/api/Service/{serviceId}/allowRules/{allowRuleId}';

  // #region Path Parameter Name: serviceId
  url = url.replace('{serviceId}', serviceId.toString());
  // #endregion
  // #region Path Parameter Name: allowRuleId
  url = url.replace('{allowRuleId}', allowRuleId.toString());
  // #endregion

  // #region Send Request
  return this.http.get<ServiceAllowRule>(
    url
    );
    // #endregion
}

  deleteServiceAllowRule(
    serviceId: number,
    allowRuleId: number
  ): Observable<void> {
  let url = '/api/Service/{serviceId}/allowRules/{allowRuleId}';

  // #region Path Parameter Name: serviceId
  url = url.replace('{serviceId}', serviceId.toString());
  // #endregion
  // #region Path Parameter Name: allowRuleId
  url = url.replace('{allowRuleId}', allowRuleId.toString());
  // #endregion

  // #region Send Request
  return this.http.delete<void>(
    url
    );
    // #endregion
}

  listServiceForwardTarget(
    serviceId: number
  ): Observable<ServiceForwardTarget[]> {
  let url = '/api/Service/{serviceId}/forwardTarget';

  // #region Path Parameter Name: serviceId
  url = url.replace('{serviceId}', serviceId.toString());
  // #endregion

  // #region Send Request
  return this.http.get<ServiceForwardTarget[]>(
    url
    );
    // #endregion
}

  createServiceForwardTarget(
    serviceId: number,
    forwardTarget: ServiceForwardTarget
  ): Observable<ServiceForwardTarget> {
  let url = '/api/Service/{serviceId}/forwardTarget';

  // #region Path Parameter Name: serviceId
  url = url.replace('{serviceId}', serviceId.toString());
  // #endregion

  // #region Send Request
  return this.http.post<ServiceForwardTarget>(
    url,
    forwardTarget
  );
  // #endregion
}

  updateServiceForwardTarget(
    serviceId: number,
    forwardTarget: ServiceForwardTarget
  ): Observable<ServiceForwardTarget> {
  let url = '/api/Service/{serviceId}/forwardTarget';

  // #region Path Parameter Name: serviceId
  url = url.replace('{serviceId}', serviceId.toString());
  // #endregion

  // #region Send Request
  return this.http.put<ServiceForwardTarget>(
    url,
    forwardTarget
  );
  // #endregion
}

  getServiceForwardTarget(
    serviceId: number,
    forwardTargetId: string,
    forwardTarget?: number
  ): Observable<ServiceForwardTarget> {
  let url = '/api/Service/{serviceId}/forwardTarget/{forwardTargetId}';

  // #region Path Parameter Name: serviceId
  url = url.replace('{serviceId}', serviceId.toString());
  // #endregion
  // #region Path Parameter Name: forwardTargetId
  url = url.replace('{forwardTargetId}', forwardTargetId.toString());
  // #endregion

  const queryList = [];

  // #region Query Parameter Name: forwardTarget
  if ( forwardTarget !== null && forwardTarget !== undefined ) {
    queryList.push('forwardTarget=' + encodeURIComponent(forwardTarget.toString()));
  }
  // #endregion
  
  // Append URL
  if ( queryList.length > 0 ) {
    url += '?' + queryList.join('&');
  }

  // #region Send Request
  return this.http.get<ServiceForwardTarget>(
    url
    );
    // #endregion
}

  deleteServiceForwardTarget(
    serviceId: number,
    forwardTargetId: string,
    allowRuleId?: number
  ): Observable<void> {
  let url = '/api/Service/{serviceId}/forwardTarget/{forwardTargetId}';

  // #region Path Parameter Name: serviceId
  url = url.replace('{serviceId}', serviceId.toString());
  // #endregion
  // #region Path Parameter Name: forwardTargetId
  url = url.replace('{forwardTargetId}', forwardTargetId.toString());
  // #endregion

  const queryList = [];

  // #region Query Parameter Name: allowRuleId
  if ( allowRuleId !== null && allowRuleId !== undefined ) {
    queryList.push('allowRuleId=' + encodeURIComponent(allowRuleId.toString()));
  }
  // #endregion
  
  // Append URL
  if ( queryList.length > 0 ) {
    url += '?' + queryList.join('&');
  }

  // #region Send Request
  return this.http.delete<void>(
    url
    );
    // #endregion
}

  listConnections(): Observable<ConnectionInfo[]> {
  const url = '/api/Service/connections';

  // #region Send Request
  return this.http.get<ConnectionInfo[]>(
    url
    );
    // #endregion
}

}
