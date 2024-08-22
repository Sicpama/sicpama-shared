export enum PGContractType {
  MANAGED_BY_SICPAMA = 'MANAGED_BY_SICPAMA',
  MANAGED_BY_STORE = 'MANAGED_BY_STORE',
}
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
  STRIPE = 'stripe',
}

export enum PaymentMethodType {
  NOT_SELECTED = 'not_selected',
  CREDIT_CARD = 'credit_card',
  WEB_PAY = 'web_pay',
  KAKAO_PAY = 'kakao_pay',
  NAVER_PAY = 'naver_pay',
  SAMSUNG_PAY = 'samsung_pay',
  DROP_IN = 'dropIn',
  PAY_IN_STORE = 'pay_in_store',
  APPLE_PAY = 'applepay',
  SCHEME = 'scheme',
  ADYEN_GOOGLE_PAY = 'paywithgoogle',
  IDEAL = 'ideal',
  KLARNA = 'klarna',
  CASH = 'cash',
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

export enum RefundReasonEnum {
  NOT_SELECTED = 'notSelected',
  CANCELED_ORDER = 'canceledOrder',
  SYSTEM_ERROR = 'systemError',
  PAYMENT_MISTAKE = 'paymentMistake',
  FRAUDULENT_CHARGE = 'fraudulentCharge',
  OTHER = 'other',
}
