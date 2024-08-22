import { Nullable } from '../..';

export interface IJoinTableResDto {
  data?: IJoinTableData;
  redirectUrl?: string;
}

export interface IJoinTableData {
  sessionId: string;
  orderId: string;
  customerId: string;
  fingerPrint: Nullable<string>;
  guestAccessToken?: string;
  customerLinkedWithFingerPrint: boolean;
}
