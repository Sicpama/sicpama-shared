import { Gender, IStore, Nullable, PaymentGatewayType, SNSProviderType } from '..';

import { IStoreTable } from './store-table';

export interface CustomerPaymentGatewayCustomerIdInfoType {
  storeId: number;
  paymentGateway: PaymentGatewayType;
  paymentGatewayCustomerId: string;
}
export interface ICustomer {
  id: string;
  sicpamaId?: Nullable<string>;
  guestId?: Nullable<string>;
  fingerPrint?: Nullable<string>;
  email?: string;
  phoneNumber?: string;
  fullName: string;
  nickName?: Nullable<string>;
  gender?: Nullable<Gender>;
  dateOfBirth?: Nullable<Date>;
  sicpamaProfilePhotoKey?: Nullable<string>;
  providerProfilePhoto?: Nullable<string>;
  providerType?: Nullable<SNSProviderType>;
  isMarketingAgreed?: Nullable<Date>;
  subscribedToSicpamaKakaoChannel: boolean;
  isTermsAgreed: boolean;
  paymentGatewayCustomerIdInfo?: CustomerPaymentGatewayCustomerIdInfoType[];
  customerRequests?: ICustomerRequest[];
}
export interface IStoreRequestItemTranslation {
  id: number;
  name: string;
  description: Nullable<string>;
  localeId: number;
  storeRequestItemId: number;
  storeRequestItem: IStoreRequestItem;
}
export interface IStoreRequestItem {
  id: number;
  priority?: Nullable<number>;
  storeId: number;
  store: IStore;
}
export interface ICustomerRequestItem {
  id: number;
  customRequestText?: Nullable<string>;
  quantity?: Nullable<number>;
  isServed: boolean;
  storeRequestItemId: number;
  customerRequestId: number;
  storeRequestItem: IStoreRequestItem;
}
export interface ICustomerRequest {
  id: number;
  storeTableId: number;
  customerId: string;
  sessionId: string;
  storeTable: IStoreTable;
  customer: ICustomer;
  customerRequestItems: ICustomerRequestItem[];
}
