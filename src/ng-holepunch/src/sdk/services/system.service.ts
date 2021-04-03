import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  NetworkSpeed
 } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  constructor(private http: HttpClient) {}

  getNetworkSpeed(): Observable<NetworkSpeed> {
  const url = '/api/System';

  // #region Send Request
  return this.http.get<NetworkSpeed>(
    url
    );
    // #endregion
}

}
