import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  User,
  UserGroup,
  LoginInputModel
 } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  listUser(): Observable<User[]> {
  const url = '/api/User';

  // #region Send Request
  return this.http.get<User[]>(
    url
    );
    // #endregion
}

  createUser(
    user: User
  ): Observable<User> {
  const url = '/api/User';

  // #region Send Request
  return this.http.post<User>(
    url,
    user
  );
  // #endregion
}

  updateUser(
    user: User
  ): Observable<User> {
  const url = '/api/User';

  // #region Send Request
  return this.http.put<User>(
    url,
    user
  );
  // #endregion
}

  getUser(
    userId: number
  ): Observable<User> {
  let url = '/api/User/{userId}';

  // #region Path Parameter Name: userId
  url = url.replace('{userId}', userId.toString());
  // #endregion

  // #region Send Request
  return this.http.get<User>(
    url
    );
    // #endregion
}

  deleteUser(
    userId: number
  ): Observable<void> {
  let url = '/api/User/{userId}';

  // #region Path Parameter Name: userId
  url = url.replace('{userId}', userId.toString());
  // #endregion

  // #region Send Request
  return this.http.delete<void>(
    url
    );
    // #endregion
}

  listUserGroup(): Observable<UserGroup[]> {
  const url = '/api/User/groups';

  // #region Send Request
  return this.http.get<UserGroup[]>(
    url
    );
    // #endregion
}

  createUserGroup(
    userGroup: UserGroup
  ): Observable<UserGroup> {
  const url = '/api/User/groups';

  // #region Send Request
  return this.http.post<UserGroup>(
    url,
    userGroup
  );
  // #endregion
}

  updateUserGroup(
    userGroup: UserGroup
  ): Observable<UserGroup> {
  const url = '/api/User/groups';

  // #region Send Request
  return this.http.put<UserGroup>(
    url,
    userGroup
  );
  // #endregion
}

  getUserGroup(
    userGroupId: number
  ): Observable<UserGroup> {
  let url = '/api/User/groups/{userGroupId}';

  // #region Path Parameter Name: userGroupId
  url = url.replace('{userGroupId}', userGroupId.toString());
  // #endregion

  // #region Send Request
  return this.http.get<UserGroup>(
    url
    );
    // #endregion
}

  deleteUserGroup(
    userGroupId: number
  ): Observable<void> {
  let url = '/api/User/groups/{userGroupId}';

  // #region Path Parameter Name: userGroupId
  url = url.replace('{userGroupId}', userGroupId.toString());
  // #endregion

  // #region Send Request
  return this.http.delete<void>(
    url
    );
    // #endregion
}

  addUserGroupMember(
    userGroupId: number,
    userId: number
  ): Observable<void> {
  let url = '/api/User/groups/{userGroupId}/member/{userId}';

  // #region Path Parameter Name: userGroupId
  url = url.replace('{userGroupId}', userGroupId.toString());
  // #endregion
  // #region Path Parameter Name: userId
  url = url.replace('{userId}', userId.toString());
  // #endregion

  // #region Send Request
  return this.http.post<void>(
    url,
    null

    );
    // #endregion
}

  removeUserGroupMember(
    userGroupId: number,
    userId: number
  ): Observable<void> {
  let url = '/api/User/groups/{userGroupId}/member/{userId}';

  // #region Path Parameter Name: userGroupId
  url = url.replace('{userGroupId}', userGroupId.toString());
  // #endregion
  // #region Path Parameter Name: userId
  url = url.replace('{userId}', userId.toString());
  // #endregion

  // #region Send Request
  return this.http.delete<void>(
    url
    );
    // #endregion
}

  changeCurrentUserPassword(
    password: string
  ): Observable<void> {
  const url = '/api/User/current/password';

  // #region Send Request
  return this.http.put<void>(
    url,
    password
  );
  // #endregion
}

  isAdmin(): Observable<boolean> {
  const url = '/api/User/isAdmin';

  // #region Send Request
  return this.http.get<boolean>(
    url
    );
    // #endregion
}

  changePassword(
    userId: number,
    password: string
  ): Observable<void> {
  let url = '/api/User/{userId}/password';

  // #region Path Parameter Name: userId
  url = url.replace('{userId}', userId.toString());
  // #endregion

  // #region Send Request
  return this.http.put<void>(
    url,
    password
  );
  // #endregion
}

  login(
    loginInput: LoginInputModel
  ): Observable<string> {
  const url = '/api/User/authorize';

  // #region Send Request
  return this.http.post<string>(
    url,
    loginInput
  );
  // #endregion
}

}
