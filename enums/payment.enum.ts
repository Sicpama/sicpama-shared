export enum PaymentType {
  POST_PAID = 'post_paid',
  PRE_PAID = 'pre_paid',
  SKIP_PAY = 'skip_pay', // for demos
}

export enum PaymentOption {
  NOT_SELECTED = 0,
  MINE = 1,
  ALL = 2,
  SPIN_THE_WHEEL = 3,
  ONE_OVER_N = 4,
}

export enum PaymentGatewayType {
  NONE = 'none',
  KICC = 'kicc',
  AIRWALLEX = 'airwallex',
  ONE_PG = 'one-pg',
  ADYEN = 'adyen',
}

export enum PaymentMethodType {
  CREDIT_CARD = 'card',
  CASH = 'cash',
  WEB_PAY = 'web_pay',
  KAKAO_PAY = 'kakao_pay',
  NAVER_PAY = 'naver_pay',
  SAMSUNG_PAY = 'samsung_pay',
  DROP_IN = 'dropIn',
  APPLE_PAY = 'applepay',
  GOOGLE_PAY = 'googlepay',
  VISA = 'visa',
  MASTER_CARD = 'mastercard',
  AIRWALLEX_PAY = 'airwallex_pay',
}

export enum KiccPaymentStatusCode {
  SUCCESS = '0000',
}

export enum AirwallexPaymentStatusCode {
  SUCCESS = '00',
}

// TODO: Need to map with Airwallex and KICC refund status
export enum RefundStatus {
  DRAFT = 'draft',
  PENDING = 'pending',
  SUCCESS = 'success',
  FAILED = 'failed',
}

export enum RefundState {
  NONE = 'NONE',
  REFUNDED = 'REFUNDED',
  PARTIAL_REFUNDED = 'PARTIAL_REFUNDED',
}
