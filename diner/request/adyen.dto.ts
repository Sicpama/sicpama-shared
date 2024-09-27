export interface CreateAdyenPaymentMethodsRequest {
  amount: number;
}

export interface CreateAdyenApplePaySessionRequest {
  merchantName: string;
  clientUrl: string;
  merchantIdentifier: string;
}
