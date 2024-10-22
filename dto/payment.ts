import {
  TossAcquireStatus,
  TossPaymentResultStatus,
  TossPaymentType,
  TossRefundStatus,
  TossSettlementStatus,
} from '../enums/payment.enum';

// Toss API Docs # https://docs.tosspayments.com/reference
export interface TossPaymentObject {
  mId: string;
  version: string;
  paymentKey: string;
  type: TossPaymentType;
  orderId: string;
  orderName: string;
  currency: string;
  status: TossPaymentResultStatus;
  method?: string | null;
  totalAmount: number;
  balanceAmount: number;
  requestedAt: string;
  approvedAt?: string | null;
  useEscrow: boolean;
  lastTransactionKey?: string | null;
  suppliedAmount: number;
  vat: number;
  cultureExpense: boolean;
  taxFreeAmount: number;
  taxExemptionAmount: number;
  cancels?: TossCancelObject | null;
  isPartialCancelable: boolean;
  card?: TossCardPaymentObject | null;
  virtualAccount?: TossVirtualAccountObject | null;
  secret?: string | null;
  mobilePhone?: TossMobilePhoneObject | null;
  giftCertificate?: TossGiftCertificateObject | null;
  transfer?: TossTransferObject | null;
  metadata?: Record<string, unknown> | null;
  cashReceipt?: TossCashReceiptObject | null;
  cashReceipts?: TossCancelCashReceiptObject[] | null;
  discount?: TossDiscountObject | null;
  easyPay?: TossEasyPayObject | null;
  country: string;
  failure?: TossFailureObject | null;
  receipt?: TossReceiptObject | null;
  checkout?: TossCheckoutObject | null;
}

export interface TossCancelObject {
  cancelAmount: number;
  cancelReason: string;
  taxFreeAmount: number;
  taxExemptionAmount: number;
  refundableAmount: number;
  easyPayDiscountAmount: number;
  canceledAt: string;
  transactionKey: string;
  receiptKey?: string | null;
  cancelStatus: string;
  cancelRequestId?: string | null;
}

export interface TossCardPaymentObject {
  amount: number;
  issuerCode: string;
  acquirerCode?: string | null;
  number: string; // Credit Card Number
  installmentPlanMonths: number;
  approveNo: string;
  useCardPoint: boolean;
  cardType: string;
  ownerType: string;
  acquireStatus: TossAcquireStatus;
  isInterestFree: boolean;
  interestPayer?: string | null;
}

export interface TossVirtualAccountObject {
  accountType: string;
  accountNumber: string;
  bankCode: string;
  customerName: string;
  dueDate: string;
  refundStatus: TossRefundStatus;
  expired: boolean;
  settlementStatus: string;
  refundReceiveAccount?: TossRefundReceiveAccountObject | null;
}

export interface TossRefundReceiveAccountObject {
  bankCode: string;
  accountNumber: string;
  holderName: string;
}

export interface TossMobilePhoneObject {
  customerMobilePhone: string;
  settlementStatus: string;
  receiptUrl: string;
}

export interface TossGiftCertificateObject {
  approveNo: string;
  settlementStatus: TossSettlementStatus;
}
export interface TossTransferObject {
  bankCode: string;
  settlementStatus: TossSettlementStatus;
}

export interface TossReceiptObject {
  url: string;
}

export interface TossCheckoutObject {
  url: string;
}

export interface TossEasyPayObject {
  provider: string;
  amount: number;
  discountAmount: number;
}

export interface TossFailureObject {
  code: string;
  message: string;
}

export interface TossCashReceiptObject {
  type: string;
  receiptKey: string;
  issueNumber: string;
  receiptUrl: string;
  amount: number;
  taxFreeAmount: number;
}

export interface TossCancelCashReceiptObject {
  receiptKey: string;
  orderId: string;
  orderName: string;
  type: string;
  issueNumber: string;
  receiptUrl: string;
  businessNumber: string;
  transactionType: string;
  amount: number;
  taxFreeAmount: number;
  issueStatus: string;
  failure: TossFailureObject;
  customerIdentityNumber: string;
  requestedAt: string;
}

export interface TossDiscountObject {
  amount: number;
}

export interface TossPaymentConfirmRequest {
  paymentKey: string;
  orderId: string;
  amount: number;
}

export interface TossPaymentConfirmResponse {
  status: string;
  data: TossPaymentObject;
}
