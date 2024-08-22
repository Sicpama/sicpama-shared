import { MessageType, Nullable, PaymentGatewayType, PGContractType } from '..';

export interface PGConfiguration {
  contractType: PGContractType;
  merchantId: string;
  billingKey?: string;
  secretKey: string;
  authTail?: string;
  webhookKey?: string;
  idempotencyKey?: string;
  publicKey?: string;
}

export type PaymentGatewayInfo = {
  [key in PaymentGatewayType]: PGConfiguration;
};

export interface BankAccountInformation {
  bankName: string;
  accountNumber: string;
}

export interface IStore {
  countryCode: string;
  currency: string;
  name: string;
  displayName: Nullable<string>;
  color: Nullable<string>;
  address: Nullable<string>;
  legalEntityAddress: Nullable<string>;
  registrationNumber: string;
  email: Nullable<string>;
  coverPhotoKey: Nullable<string>;
  phoneNumber: Nullable<string>;
  postalCode: Nullable<string>;
  openTime: Nullable<string>;
  closeTime: Nullable<string>;
  foodCourtId: Nullable<string>;
  paymentGatewayInfo: PaymentGatewayInfo;
  isUserRecommendationActive: boolean;
  snsNotificationTemplate: Record<MessageType, string>;
  ownerName: Nullable<string>;
  bankAccountInfo: Nullable<BankAccountInformation>;
}
