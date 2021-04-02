
export interface ServiceAllowRule {

  id?: number;

  serviceId?: number;

  serviceForwardTargetId?: number;

  type?: string;

  cidrGroupId?: number;

  cidr?: string;

  userGroupId?: number;

  userId?: number;

  delta?: string;

}
