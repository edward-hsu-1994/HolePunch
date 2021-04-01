import {UserGroup} from './UserGroup';

export interface User {

  id?: number;

  account?: string;

  name?: string;

  enabled?: boolean;

  currentIP?: string;

  groups?: UserGroup[];

}
