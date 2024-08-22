import {
  ICustomer,
  IOrder,
  Nullable,
  PaymentGatewayType,
  PaymentMethodType,
  PaymentOption,
  PosPaymentData,
} from '..';

export interface IPaymentOptionEnum {
  paymentOptionEnum: PaymentOption;
  name: string;
}

export interface GeneratePaymentDtoParams {
  paymentId: string;
  customerId: string;
  currency: string;
  countryCode: string;
  orderId: string;
  cardId: Nullable<string>;
  status?: Nullable<string>;
  payload: {
    response: Record<string, any>;
    request: Record<string, any>;
  };
}

export interface ICreatePaymentParams {
  paymentMethodType: PaymentMethodType | string;
}

export interface IReceiptPaidOrderInfo {
  id: string;
  approvalCode: string;
  creditCardNumber?: string;
  creditCardIssuer: string;
  paidAt: string;
  itemName: string;
  orderNumber: string;
  totalAmount: number;
  tax: number;
  amountExcludingTax: number;
  serviceCharge?: number;
  amountExcludingTaxAndServiceCharge?: number;
}

export interface IReceiptStoreInfo {
  countryCode: string;
  storeName: string;
  address: string;
  businessNumber: string;
  ownerName?: string;
}

export interface IReceiptInformation {
  order: IReceiptPaidOrderInfo;
  store: IReceiptStoreInfo;
}

export interface IPayment {
  id: string;
  customerId: string;
  orderId: string;
  orders: IOrder[];
  paidAmount: number;
  cardId: Nullable<string>;
  currency: string;
  status: Nullable<string>;
  responseData: Nullable<any>;
  requestData: Nullable<any>;
  providerPaymentName: PaymentGatewayType;
  providerPaymentId: string;
  paymentIntentId: Nullable<string>;
  customer: ICustomer;
  posData?: Nullable<PosPaymentData>;
}
