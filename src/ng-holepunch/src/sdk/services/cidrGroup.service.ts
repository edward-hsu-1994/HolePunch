import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  CidrGroup
 } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CidrGroupService {

  constructor(private http: HttpClient) {}

  listCidrGroup(): Observable<CidrGroup[]> {
  const url = '/api/CidrGroup';

  // #region Send Request
  return this.http.get<CidrGroup[]>(
    url
    );
    // #endregion
}

  createCidrGroup(
    cidrGroup: CidrGroup
  ): Observable<CidrGroup> {
  const url = '/api/CidrGroup';

  // #region Send Request
  return this.http.post<CidrGroup>(
    url,
    cidrGroup
  );
  // #endregion
}

  updateCidrGroup(
    cidrGroup: CidrGroup
  ): Observable<CidrGroup> {
  const url = '/api/CidrGroup';

  // #region Send Request
  return this.http.put<CidrGroup>(
    url,
    cidrGroup
  );
  // #endregion
}

  getCidrGroup(
    cidrGroupId: number
  ): Observable<CidrGroup> {
  let url = '/api/CidrGroup/{cidrGroupId}';

  // #region Path Parameter Name: cidrGroupId
  url = url.replace('{cidrGroupId}', cidrGroupId.toString());
  // #endregion

  // #region Send Request
  return this.http.get<CidrGroup>(
    url
    );
    // #endregion
}

  deleteCidrGroup(
    cidrGroupId: string,
    cidrGroup?: number
  ): Observable<void> {
  let url = '/api/CidrGroup/{cidrGroupId}';

  // #region Path Parameter Name: cidrGroupId
  url = url.replace('{cidrGroupId}', cidrGroupId.toString());
  // #endregion

  const queryList = [];

  // #region Query Parameter Name: cidrGroup
  if ( cidrGroup !== null && cidrGroup !== undefined ) {
    queryList.push('cidrGroup=' + encodeURIComponent(cidrGroup.toString()));
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

}
